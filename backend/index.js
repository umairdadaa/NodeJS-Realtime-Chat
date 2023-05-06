const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;


  try {
    const r = await axios.put("https://api.chatengine.io/users/", {
        username: username,
        secret: username,
        first_name: username,
    }, { headers: { "private-key": "00a94592-1c36-4376-9bfc-ef02459ebaa4" } })
    return res.status(r.status).json(r.data) }
    catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

// Project ID:
// b03793ff-74b3-4a4b-9212-ecc308096c4f
// Private Key:
// 00a94592-1c36-4376-9bfc-ef02459ebaa4


app.listen(3001);