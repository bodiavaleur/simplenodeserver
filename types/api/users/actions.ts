import { IUserProfile } from "./user";
import { TRole } from "./roles";

export interface IUserActions {
  getProfile(): IUserProfile;
  editProfile(data: IUserProfile): IUserProfile;
}

export interface IAdminActions {
  editUserRole(userId: number, role: TRole): TRole;
  deleteUser(userId: number): boolean;
}
