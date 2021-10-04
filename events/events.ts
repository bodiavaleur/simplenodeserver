import {Methods} from "../types/methods";

const {Get, Post, Put, Delete} = Methods

export enum AuthEvents {
  Login = "authLogin",
}

export enum UserEvents {
  GetProfile = "getProfile",
  EditProfile = "editProfile",
}

export enum AdminEvents {
  EditRole = "editUserRole",
  DeleteUser = "deleteUser",
}

export const AUTH_EVENTS = {
  [Post]: {
    LOGIN: AuthEvents.Login
  }
}

export const USER_EVENTS = {
  [Get]: {
    PROFILE: {
      GET: UserEvents.GetProfile,
    },
  },
  [Put]: {
    PROFILE: {
      EDIT: UserEvents.EditProfile,
    },
  }
};

export const ADMIN_EVENTS = {
  [Put]: {
    USER: {
      EDIT_ROLE: AdminEvents.EditRole,
    }
  },
  [Delete] : {
    USER: {
      DELETE: AdminEvents.DeleteUser,
    },
  }
};

export type TEvent = AuthEvents | UserEvents | AdminEvents
