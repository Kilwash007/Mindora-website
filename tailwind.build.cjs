// Build config: reuses the theme in assets/js/tw-config.js.
// Rebuild after adding Tailwind classes to any page (standalone CLI v3.4.17):
//   ~/Downloads/Mindora-Health/tools/tailwindcss -c tailwind.build.cjs -i tailwind.input.css -o assets/css/tailwind.css --minify
const fs = require("fs");
const vm = require("vm");
const ctx = { tailwind: {} };
vm.runInNewContext(fs.readFileSync(__dirname + "/assets/js/tw-config.js", "utf8"), ctx);
module.exports = {
  ...(ctx.tailwind.config || {}),
  content: ["./*.html", "./assets/js/*.js"],
};
