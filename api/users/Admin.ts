import { User } from "./User";
import { IAdminActions } from "../../types/api/users/actions";
import { TRole } from "../../types/api/users/roles";
import {
  AdminPermissions,
  TAdminPermissions,
} from "../../types/api/users/permissions";
import { IUser } from "../../types/api/users/user";

const adminPermissions: TAdminPermissions = [
  AdminPermissions.Read,
  AdminPermissions.Create,
  AdminPermissions.Edit,
  AdminPermissions.Delete,
];

export class Admin extends User implements IAdminActions {
  constructor(public user: IUser) {
    super(user, adminPermissions);
  }

  editUserRole(userId: number, role: TRole): TRole {
    // Find user by id > change his role
    return role;
  }

  deleteUser(userId: number): boolean {
    // Find user by id > delete a user
    return true;
  }
}
