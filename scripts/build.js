const args = ["run build"];
const opts = { stdio: "inherit", cwd: "client", shell: true };
console.log(args);
require("child_process").spawn("npm", args, opts);
