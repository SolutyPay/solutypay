export type CreateUser = {
  name: string;
  email: string;
  password: string;
  photo: string;
};

export type ChangeProfileUser = {
  id: string;
  profile: string;
};

export type UpdateUser = {
  id: string;
  name: string;
  email: string;
  profile: string;
};

export type RemoveUser = {
  id: string;
  active: boolean;
};

export type ResetDefaultPasswordUser = {
  id: string;
  password: string;
  default_password: boolean;
};

export type CreateNewPasswordUser = {
  id: string;
  new_password: string;
  old_password: string;
  default_password: boolean;
};
