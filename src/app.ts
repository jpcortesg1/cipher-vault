// Import dependences
// Personal
import app from ".";
import runTask from "./task";

// Run task of delete messages expired
runTask();

// Run app
app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});