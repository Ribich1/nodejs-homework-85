import mongoose from "mongoose";

import app from "./app.js";

const DB_HOST =
  "mongodb+srv://Yevhen:QzOoDlnZHbiRP0Tx@cluster0.oheb2op.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
