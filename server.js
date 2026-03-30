const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/optimize", (req, res) => {
  const { resume } = req.body;

  const improved = `Improved Resume:\n\n${resume}\n\n[Better wording + ATS optimized]`;

  res.json({ result: improved });
});

app.listen(3000, () => console.log("Server running on port 3000"));
