import { EventHandler } from "../EventHandler";
import { USER_EVENTS } from "../events";

const { PROFILE } = USER_EVENTS;

export class UserEventsHandler extends EventHandler {
  init() {
    this.subscribe(PROFILE.GET, (req, res) => {
      res.end("dooooneeeee");
    });
  }
}
