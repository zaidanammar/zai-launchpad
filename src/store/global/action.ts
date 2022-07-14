export enum ActionType {
  SetOpenSidebar,
  SetOpenSelectWallet,
  Setprovider,
}

export interface SetOpenSidebar {
  type: ActionType.SetOpenSidebar;
  payload: boolean;
}

export interface SetOpenSelectWallet {
  type: ActionType.SetOpenSelectWallet;
  payload: boolean;
}

export interface Setprovider {
  type: ActionType.Setprovider;
  payload: string;
}

export type GlobalAction = SetOpenSidebar | SetOpenSelectWallet | Setprovider;
