export type CreateKey = {
  userId: string;
  client_id?: string | null;
  client_secret?: string | null;
};

export type EnsureKey = {
  securityID: string;
  client_id?: string | null;
  client_secret?: string | null;
};
