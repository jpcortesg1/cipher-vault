// Import dependences
// Personal
import app from ".";

// Run app
app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});