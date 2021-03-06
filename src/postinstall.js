const fs = require("fs");
const { exec } = require('child_process');

const run = (cmd) => {
    exec(cmd, (err, stdout, stderr) => {
        console.log("Executed command: " + cmd);
        if (err) {
            console.error(err);
        } else {
            console.log({cmd: cmd, stdout: stdout, stderr: stderr});
        }
    });
}

const postInstall = (dir) => {
    let suffix = null;
    console.log(dir)
    if (process.platform === "win32") {
        suffix = ".cmd";
    } else {
        suffix = ".sh";
    }
    if (fs.existsSync(dir + "/postinstall" + suffix)) {
        run(dir + "/postinstall" + suffix);
    }
}

module.exports = postInstall;