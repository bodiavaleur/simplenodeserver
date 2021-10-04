import { PORT } from "./config/server";
import http from "http";

import { UserEventsHandler } from "./events/users/UserEventsHandler";
import { USER_EVENTS } from "./events/events";
import {Methods} from "./types/methods";

const {Get, Post, Put, Delete} = Methods

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
      const url = req.url
      const method = req.method as Methods


      switch (url) {
        case "/user":
          userEventsHandler.switchMethod(method)({
            [Get]: USER_EVENTS[Get].PROFILE.GET,
            [Put]: USER_EVENTS[Put].PROFILE.EDIT,
          }, req, res)
          break;
        default:
          res.end("Whoops");
      }
    });
  }
}
