import EventEmitter from "events";
import { TEvent } from "./events";
import { IncomingMessage, ServerResponse } from "http";
import {Methods} from "../types/methods";

const {Get, Post, Put, Delete} = Methods

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

  switchMethod(method: Methods) {
    return (data: any, req: IncomingMessage, res: ServerResponse) => {
      const methodEvent = data[method]

      if(methodEvent) {
        this.dispatch(data[method], req, res)
      } else {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.write(JSON.stringify({message: '404 Not Found'}));
        res.end();
      }
    }
  }
}
