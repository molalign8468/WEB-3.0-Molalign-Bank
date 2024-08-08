export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'compondInterst' : IDL.Func([], [], ['oneway']),
    'currentBalnce' : IDL.Func([], [IDL.Float64], ['query']),
    'deposite' : IDL.Func([IDL.Float64], [], ['oneway']),
    'withDraw' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
