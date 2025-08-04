const fs = require("fs");

const now = new Date();
const formatted = now.toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

fs.writeFileSync(
  "build-info.json",
  JSON.stringify({ lastUpdated: formatted }, null, 2)
);