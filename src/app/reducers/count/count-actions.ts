import { Action } from "@ngrx/store";
import { CountState } from "./count-reducer";

export enum countActionsType {
  increase = '[COUNT] increase',
  decrease = '[COUNT] decrease',
  clear = '[COUNT] clear',
  updatedAt = '[COUNT] updated at'
}

export class CountIncreaseAction implements Action {
  readonly type = countActionsType.increase;
  constructor() { }
}

export class CountDecreaseAction implements Action {
  readonly type = countActionsType.decrease;
  constructor() { }
}

export class CountClearAction implements Action {
  readonly type = countActionsType.clear;
  constructor() { }
}

export class CountUpdatedAtAction implements Action {
  readonly type = countActionsType.updatedAt;
  constructor(public payload: {
    updatedAt: number
  }) { }
}

export type CountActions = CountIncreaseAction
  | CountDecreaseAction
  | CountClearAction
  | CountUpdatedAtAction;
