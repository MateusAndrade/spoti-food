export interface IAction<T extends unknown> {
  payload: T;
  type: string;
}
