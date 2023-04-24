
import * as dotenv from "dotenv";
import { createServer } from "./server";
import { log } from "@myorg/logger";

dotenv.config();

const port = process.env.PORT;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});
