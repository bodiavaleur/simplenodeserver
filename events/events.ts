export enum UserEvents {
  GetProfile = "getProfile",
  EditProfile = "editProfile",
}

export enum AdminEvents {
  EditRole = "editUserRole",
  DeleteUser = "deleteUser",
}

export type TEvent = UserEvents | AdminEvents;

export const USER_EVENTS = {
  PROFILE: {
    GET: UserEvents.GetProfile,
    EDIT: UserEvents.EditProfile,
  },
};

export const ADMIN_EVENTS = {
  USER: {
    EDIT_ROLE: AdminEvents.EditRole,
    DELETE: AdminEvents.DeleteUser,
  },
};
