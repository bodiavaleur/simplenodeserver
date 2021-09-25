import {
  TAdminPermissions,
  TUserPermissions,
  UserPermissions,
} from "../../types/api/users/permissions";
import { IUser, IUserProfile } from "../../types/api/users/user";
import { IUserActions } from "../../types/api/users/actions";

const userPermissions: TUserPermissions = [
  UserPermissions.Read,
  UserPermissions.Create,
  UserPermissions.Edit,
  UserPermissions.Delete,
];

export class User implements IUserActions {
  constructor(
    public user: IUser,
    protected permissions:
      | TUserPermissions
      | TAdminPermissions = userPermissions
  ) {}

  getProfile(): IUserProfile {
    return this.user.profile;
  }

  editProfile(data: IUserProfile): IUserProfile {
    this.user.profile = data;
    return data;
  }
}
