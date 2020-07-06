// https://github.com/nodejs/node-v0.x-archive/issues/3211
require("epipebomb")();
const execa = require("execa");

function drawLine(length = 60) {
  console.log(Array(length).fill("=").join(""));
}

const watcher = require("node-watch")(
  "./src",
  { recursive: true },
  async (_, fileName) => {
    console.log(`Start to build due to`, fileName, `changed.`);
    drawLine();

    const { stdout, stderr } = await execa("yarn", ["build"]);
    console.log(stdout, stderr);
    drawLine();
  }
);
console.log(`Start to watch "src" directory.`);
drawLine();

process.on("SIGINT", () => {
  watcher.close();
  console.log("Done.");
  process.exit(0);
});
