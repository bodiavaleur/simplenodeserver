import { TRole } from "./roles";

export interface IUserProfile {
  name: string;
  age: number;
  city: string;
  job: string;
}

export interface IUser {
  id: number;
  role: TRole;
  statistics: number[];
  profile: IUserProfile;
}
