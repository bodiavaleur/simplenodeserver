import { PORT } from "./config/server";
import http from "http";

import { UserEventsHandler } from "./events/users/UserEventsHandler";
import { USER_EVENTS } from "./events/events";

const database = require("./database.json");

export class Server {
  constructor(
    public port: number = PORT,
    private server = http.createServer(),
    private database: any = null
  ) {}

  public init(): void {
    this.database = database;
    this.server.listen(this.port, async () => {
      console.log(`[*] Server is listening on port: ${this.port}`);
    });
  }

  public listen(): void {
    const userEventsHandler = new UserEventsHandler();

    userEventsHandler.init();

    this.server.on("request", (req, res) => {
      const { url } = req;

      switch (url) {
        case "/user":
          userEventsHandler.dispatch(USER_EVENTS.PROFILE.GET, req, res);
          break;
        default:
          res.end("Whoops");
      }
    });
  }
}
