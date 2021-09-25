import EventEmitter from "events";
import { TEvent } from "./events";
import { IncomingMessage, ServerResponse } from "http";

export class EventHandler extends EventEmitter {
  subscribe(
    event: TEvent,
    callback: (req: IncomingMessage, res: ServerResponse) => void
  ) {
    this.on(event, callback);
  }

  dispatch(event: TEvent, req: IncomingMessage, res: ServerResponse) {
    this.emit(event, req, res);
  }
}
