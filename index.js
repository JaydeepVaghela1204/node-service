const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    status: true,
    response: {
      message: "Server is running",
      timestamp: new Date(),
    },
    error_code: null,
    error_message: null,
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
