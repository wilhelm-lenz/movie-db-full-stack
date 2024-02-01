const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Server run on Port `, PORT));
