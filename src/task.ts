// Import dependences
// External
import cron from "node-cron";

// Personal
import Message from "./models/message.model";
import ApiKey from "./models/ApiKey.models";

function runTask() {
  cron.schedule("0 */30 * * * *", async () => {
    await Message.deleteMany({
      expireAt: { $lt: new Date() },
    });
    await ApiKey.deleteMany({
      expireAt: { $lt: new Date() },
    });
  });
}

export default runTask;
