const express = require("express");
const cors = require("cors");
const app = express();
const ROUTES = require("./Routes")
require("./DB/Conn");

app.use(cors());
app.use(express.json());
const PORT =8080;

app.use("/api", ROUTES);

app.listen(PORT, () => {
    console.log(`Api is running on PORT: ${PORT}`);
})