export enum UserPermissions {
  Read = "readOwn",
  Create = "createOwn",
  Edit = "editOwn",
  Delete = "deleteOwn",
}

export enum AdminPermissions {
  Read = "readAny",
  Create = "createAny",
  Edit = "editAny",
  Delete = "deleteAny",
}

export type TUserPermissions = [
  UserPermissions.Read,
  UserPermissions.Create,
  UserPermissions.Edit,
  UserPermissions.Delete
];

export type TAdminPermissions = [
  AdminPermissions.Read,
  AdminPermissions.Create,
  AdminPermissions.Edit,
  AdminPermissions.Delete
];
