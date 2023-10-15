export interface User {
  id: number;
  name: string | null;
}

export type StateUser = {
  user: UserA;
};

type UserA = {
  user: [];
};

export type State = {
  cash: Cash;
};

type Cash = {
  cash: number;
};