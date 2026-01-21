const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ProspectMiner AI Backend Running");
});

app.get("/scrape", (req, res) => {
  res.json({
    status: "success",
    leads: [
      { name: "ABC Corp", email: "contact@abc.com" },
      { name: "XYZ Ltd", email: "info@xyz.com" }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

