(()=>{"use strict";var e={351:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);i(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issue=t.issueCommand=void 0;const s=o(n(87));const u=n(278);function issueCommand(e,t,n){const r=new Command(e,t,n);process.stdout.write(r.toString()+s.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const c="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=c+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const n in this.properties){if(this.properties.hasOwnProperty(n)){const r=this.properties[n];if(r){if(t){t=false}else{e+=","}e+=`${n}=${escapeProperty(r)}`}}}}e+=`${c}${escapeData(this.message)}`;return e}}function escapeData(e){return u.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return u.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);i(t,e);return t};var s=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.getState=t.saveState=t.group=t.endGroup=t.startGroup=t.info=t.warning=t.error=t.debug=t.isDebug=t.setFailed=t.setCommandEcho=t.setOutput=t.getBooleanInput=t.getMultilineInput=t.getInput=t.addPath=t.setSecret=t.exportVariable=t.ExitCode=void 0;const u=n(351);const c=n(717);const a=n(278);const d=o(n(87));const l=o(n(622));var f;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(f=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const n=a.toCommandValue(t);process.env[e]=n;const r=process.env["GITHUB_ENV"]||"";if(r){const t="_GitHubActionsFileCommandDelimeter_";const r=`${e}<<${t}${d.EOL}${n}${d.EOL}${t}`;c.issueCommand("ENV",r)}else{u.issueCommand("set-env",{name:e},n)}}t.exportVariable=exportVariable;function setSecret(e){u.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){c.issueCommand("PATH",e)}else{u.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${l.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}if(t&&t.trimWhitespace===false){return n}return n.trim()}t.getInput=getInput;function getMultilineInput(e,t){const n=getInput(e,t).split("\n").filter((e=>e!==""));return n}t.getMultilineInput=getMultilineInput;function getBooleanInput(e,t){const n=["true","True","TRUE"];const r=["false","False","FALSE"];const i=getInput(e,t);if(n.includes(i))return true;if(r.includes(i))return false;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\n`+`Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}t.getBooleanInput=getBooleanInput;function setOutput(e,t){process.stdout.write(d.EOL);u.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){u.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=f.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){u.issueCommand("debug",{},e)}t.debug=debug;function error(e){u.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){u.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+d.EOL)}t.info=info;function startGroup(e){u.issue("group",e)}t.startGroup=startGroup;function endGroup(){u.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return s(this,void 0,void 0,(function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n}))}t.group=group;function saveState(e,t){u.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},717:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);i(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issueCommand=void 0;const s=o(n(747));const u=o(n(87));const c=n(278);function issueCommand(e,t){const n=process.env[`GITHUB_${e}`];if(!n){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!s.existsSync(n)){throw new Error(`Missing file at path: ${n}`)}s.appendFileSync(n,`${c.toCommandValue(t)}${u.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},278:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.toCommandValue=void 0;function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},962:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);i(t,e);return t};var s=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};var u;Object.defineProperty(t,"__esModule",{value:true});t.getCmdPath=t.tryGetExecutablePath=t.isRooted=t.isDirectory=t.exists=t.IS_WINDOWS=t.unlink=t.symlink=t.stat=t.rmdir=t.rename=t.readlink=t.readdir=t.mkdir=t.lstat=t.copyFile=t.chmod=void 0;const c=o(n(747));const a=o(n(622));u=c.promises,t.chmod=u.chmod,t.copyFile=u.copyFile,t.lstat=u.lstat,t.mkdir=u.mkdir,t.readdir=u.readdir,t.readlink=u.readlink,t.rename=u.rename,t.rmdir=u.rmdir,t.stat=u.stat,t.symlink=u.symlink,t.unlink=u.unlink;t.IS_WINDOWS=process.platform==="win32";function exists(e){return s(this,void 0,void 0,(function*(){try{yield t.stat(e)}catch(e){if(e.code==="ENOENT"){return false}throw e}return true}))}t.exists=exists;function isDirectory(e,n=false){return s(this,void 0,void 0,(function*(){const r=n?yield t.stat(e):yield t.lstat(e);return r.isDirectory()}))}t.isDirectory=isDirectory;function isRooted(e){e=normalizeSeparators(e);if(!e){throw new Error('isRooted() parameter "p" cannot be empty')}if(t.IS_WINDOWS){return e.startsWith("\\")||/^[A-Z]:/i.test(e)}return e.startsWith("/")}t.isRooted=isRooted;function tryGetExecutablePath(e,n){return s(this,void 0,void 0,(function*(){let r=undefined;try{r=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(r&&r.isFile()){if(t.IS_WINDOWS){const t=a.extname(e).toUpperCase();if(n.some((e=>e.toUpperCase()===t))){return e}}else{if(isUnixExecutable(r)){return e}}}const i=e;for(const o of n){e=i+o;r=undefined;try{r=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(r&&r.isFile()){if(t.IS_WINDOWS){try{const n=a.dirname(e);const r=a.basename(e).toUpperCase();for(const i of yield t.readdir(n)){if(r===i.toUpperCase()){e=a.join(n,i);break}}}catch(t){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${t}`)}return e}else{if(isUnixExecutable(r)){return e}}}}return""}))}t.tryGetExecutablePath=tryGetExecutablePath;function normalizeSeparators(e){e=e||"";if(t.IS_WINDOWS){e=e.replace(/\//g,"\\");return e.replace(/\\\\+/g,"\\")}return e.replace(/\/\/+/g,"/")}function isUnixExecutable(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}function getCmdPath(){var e;return(e=process.env["COMSPEC"])!==null&&e!==void 0?e:`cmd.exe`}t.getCmdPath=getCmdPath},436:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);i(t,e);return t};var s=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.findInPath=t.which=t.mkdirP=t.rmRF=t.mv=t.cp=void 0;const u=n(357);const c=o(n(129));const a=o(n(622));const d=n(669);const l=o(n(962));const f=d.promisify(c.exec);const p=d.promisify(c.execFile);function cp(e,t,n={}){return s(this,void 0,void 0,(function*(){const{force:r,recursive:i,copySourceDirectory:o}=readCopyOptions(n);const s=(yield l.exists(t))?yield l.stat(t):null;if(s&&s.isFile()&&!r){return}const u=s&&s.isDirectory()&&o?a.join(t,a.basename(e)):t;if(!(yield l.exists(e))){throw new Error(`no such file or directory: ${e}`)}const c=yield l.stat(e);if(c.isDirectory()){if(!i){throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`)}else{yield cpDirRecursive(e,u,0,r)}}else{if(a.relative(e,u)===""){throw new Error(`'${u}' and '${e}' are the same file`)}yield copyFile(e,u,r)}}))}t.cp=cp;function mv(e,t,n={}){return s(this,void 0,void 0,(function*(){if(yield l.exists(t)){let r=true;if(yield l.isDirectory(t)){t=a.join(t,a.basename(e));r=yield l.exists(t)}if(r){if(n.force==null||n.force){yield rmRF(t)}else{throw new Error("Destination already exists")}}}yield mkdirP(a.dirname(t));yield l.rename(e,t)}))}t.mv=mv;function rmRF(e){return s(this,void 0,void 0,(function*(){if(l.IS_WINDOWS){if(/[*"<>|]/.test(e)){throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows')}try{const t=l.getCmdPath();if(yield l.isDirectory(e,true)){yield f(`${t} /s /c "rd /s /q "%inputPath%""`,{env:{inputPath:e}})}else{yield f(`${t} /s /c "del /f /a "%inputPath%""`,{env:{inputPath:e}})}}catch(e){if(e.code!=="ENOENT")throw e}try{yield l.unlink(e)}catch(e){if(e.code!=="ENOENT")throw e}}else{let t=false;try{t=yield l.isDirectory(e)}catch(e){if(e.code!=="ENOENT")throw e;return}if(t){yield p(`rm`,[`-rf`,`${e}`])}else{yield l.unlink(e)}}}))}t.rmRF=rmRF;function mkdirP(e){return s(this,void 0,void 0,(function*(){u.ok(e,"a path argument must be provided");yield l.mkdir(e,{recursive:true})}))}t.mkdirP=mkdirP;function which(e,t){return s(this,void 0,void 0,(function*(){if(!e){throw new Error("parameter 'tool' is required")}if(t){const t=yield which(e,false);if(!t){if(l.IS_WINDOWS){throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`)}else{throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`)}}return t}const n=yield findInPath(e);if(n&&n.length>0){return n[0]}return""}))}t.which=which;function findInPath(e){return s(this,void 0,void 0,(function*(){if(!e){throw new Error("parameter 'tool' is required")}const t=[];if(l.IS_WINDOWS&&process.env["PATHEXT"]){for(const e of process.env["PATHEXT"].split(a.delimiter)){if(e){t.push(e)}}}if(l.isRooted(e)){const n=yield l.tryGetExecutablePath(e,t);if(n){return[n]}return[]}if(e.includes(a.sep)){return[]}const n=[];if(process.env.PATH){for(const e of process.env.PATH.split(a.delimiter)){if(e){n.push(e)}}}const r=[];for(const i of n){const n=yield l.tryGetExecutablePath(a.join(i,e),t);if(n){r.push(n)}}return r}))}t.findInPath=findInPath;function readCopyOptions(e){const t=e.force==null?true:e.force;const n=Boolean(e.recursive);const r=e.copySourceDirectory==null?true:Boolean(e.copySourceDirectory);return{force:t,recursive:n,copySourceDirectory:r}}function cpDirRecursive(e,t,n,r){return s(this,void 0,void 0,(function*(){if(n>=255)return;n++;yield mkdirP(t);const i=yield l.readdir(e);for(const o of i){const i=`${e}/${o}`;const s=`${t}/${o}`;const u=yield l.lstat(i);if(u.isDirectory()){yield cpDirRecursive(i,s,n,r)}else{yield copyFile(i,s,r)}}yield l.chmod(t,(yield l.stat(e)).mode)}))}function copyFile(e,t,n){return s(this,void 0,void 0,(function*(){if((yield l.lstat(e)).isSymbolicLink()){try{yield l.lstat(t);yield l.unlink(t)}catch(e){if(e.code==="EPERM"){yield l.chmod(t,"0666");yield l.unlink(t)}}const n=yield l.readlink(e);yield l.symlink(n,t,l.IS_WINDOWS?"junction":null)}else if(!(yield l.exists(t))||n){yield l.copyFile(e,t)}}))}},357:e=>{e.exports=require("assert")},129:e=>{e.exports=require("child_process")},747:e=>{e.exports=require("fs")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")},669:e=>{e.exports=require("util")}};var t={};function __nccwpck_require__(n){var r=t[n];if(r!==undefined){return r.exports}var i=t[n]={exports:{}};var o=true;try{e[n].call(i.exports,i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[n]}return i.exports}(()=>{__nccwpck_require__.r=e=>{if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}})();if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var n={};(()=>{__nccwpck_require__.r(n);var e=__nccwpck_require__(186);var t=__nccwpck_require__(747);var r=__nccwpck_require__(436);var i=__nccwpck_require__(622);var o=__nccwpck_require__(669);var s=__nccwpck_require__(129);var u=__nccwpck_require__(87);function homeDir(){return u.userInfo().homedir}function resolveHomeFolder(e){if(e[0]==="~"){return(0,i.join)(homeDir(),e.slice(1))}return e}var c=undefined&&undefined.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};const a="sshkeys";const d=(0,i.join)(homeDir(),".ssh");const l=(0,i.join)(homeDir(),a);const f=o.promisify(s.exec);function addSshKey(n,o){return c(this,void 0,void 0,(function*(){const s=(0,i.join)(l,n);try{e.info(`create folder ${l}`);yield r.mkdirP(l);e.info(`write to ${s}`);t.writeFileSync(s,o);e.info("ssh key installed")}catch(t){console.error(t.message);e.setFailed(t.message)}return s}))}function addKownHost(n){return c(this,void 0,void 0,(function*(){yield r.mkdirP(d);e.info(`created ${d}`);const o=(0,i.join)(d,"known_hosts");const s=`ssh-keyscan -H -t rsa -v ${n}  >> ${o}`;e.info(s);const{stdout:u,stderr:c}=yield f(s);e.info(u);t.chmodSync(o,256)}))}function copyFiles(t,n,r,i,o){return c(this,void 0,void 0,(function*(){const s=resolveHomeFolder(n);const u=`scp -i ${t} -r ${s} ${i}@${r}:${o}`;e.info(u);const{stdout:c,stderr:a}=yield f(u);e.info(c);console.log(u)}))}class Params{constructor(){this.sourceFolder="~/deployment";this.destinationFolder="./dest";this.user="root"}verify(){const e=this.name&&this.key&&this.server;if(!e){const e=`invalid params: server=${this.server} name=${this.name} key=${this.key}`;throw new Error(e)}}}const p=new Params;p.name=e.getInput("ssh-key-name");p.key=e.getInput("ssh-private-key");p.server=e.getInput("server");p.sourceFolder=e.getInput("source-folder");p.destinationFolder=e.getInput("destination-folder");p.user=e.getInput("user");const h=p;var m=undefined&&undefined.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};function run(){return m(this,void 0,void 0,(function*(){try{console.info("start deployment...");console.info(JSON.stringify(h));h.verify();console.info("install ssh key...");const t=yield addSshKey(h.name,h.key);e.setOutput("key-file",t);e.info(`file ${t} created`);yield addKownHost(h.server);const n=resolveHomeFolder(h.sourceFolder);yield copyFiles(t,n,h.server,h.user,h.destinationFolder)}catch(t){e.setFailed(t.message)}}))}run()})();module.exports=n})();