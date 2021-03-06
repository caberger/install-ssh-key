import * as fs from "fs"
import * as io from "@actions/io"
import {join} from "path"
import * as core from "@actions/core"
import * as util from "util"
import {exec} from "child_process"
import params from "./startup"

const sshFolder = params.sshDir
const execPromise = util.promisify(exec)

export async function addSshKey(fileName: string, key: string) {
    try {
        core.info(`write to ${fileName}`)
        fs.writeFileSync(fileName, key)
        core.info("ssh key installed")
        fs.chmodSync(fileName, 0o600)
    } catch (error) {
        console.error(error.message)
        core.setFailed(error.message)
    }
    return fileName   
}
export async function addKownHost(server: string) {
    await io.mkdirP(sshFolder)
    core.info(`created ${sshFolder}`)
    const knownHosts = join(sshFolder, "known_hosts")
    const cmd = `ssh-keyscan -H -t rsa -v ${server}  >> ${knownHosts}`
    const {stdout, stderr} = await execPromise(cmd)
    core.info(stdout)
}
export async function addToConfigFile(host: string, user: string, hostName: string, identityFile: string) {
    await io.mkdirP(sshFolder)
    const config = join(sshFolder, "config")
    const configEntry = `
HOST ${host}
\tUser ${user}
\tHostname ${hostName}
\tIdentityFile ${identityFile}
`
    core.info(`add to ${config}`)
    core.info(configEntry)
    fs.appendFileSync(config, configEntry)
}