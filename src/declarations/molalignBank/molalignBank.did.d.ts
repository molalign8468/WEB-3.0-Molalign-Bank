import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'compondInterst' : () => Promise<undefined>,
  'currentBalnce' : () => Promise<number>,
  'deposite' : (arg_0: number) => Promise<undefined>,
  'withDraw' : (arg_0: number) => Promise<undefined>,
}
