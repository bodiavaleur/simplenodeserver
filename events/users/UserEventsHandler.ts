import { EventHandler } from "../EventHandler";
import { USER_EVENTS } from "../events";
import {Methods} from "../../types/methods";

const {Get, Post, Put, Delete} = Methods

const GET_OWN_PROFILE = USER_EVENTS[Get].PROFILE.GET
const EDIT_OWN_PROFILE = USER_EVENTS[Put].PROFILE.EDIT


export class UserEventsHandler extends EventHandler {
  init() {
    this.subscribe(GET_OWN_PROFILE, (req, res) => {
      res.end(`Get own profile!!! Method: ${req.method}`);
    });

    this.subscribe(EDIT_OWN_PROFILE, (req, res) => {
      res.end(`Edit own profile!!! Method: ${req.method}`);
    });
  }
}
