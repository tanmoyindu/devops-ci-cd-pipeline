const http = require("http");

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/health",
  method: "GET",
};

const req = http.request(options, (res) => {
  if (res.statusCode === 200) {
    console.log("Test passed ✅");
    process.exit(0);
  } else {
    console.error("Test failed ❌");
    process.exit(1);
  }
});

req.on("error", () => {
  console.error("Test failed ❌");
  process.exit(1);
});

req.end();
