export type Nullable<T> = T | null;

export type ApiResponse<TData> = {
  response: Nullable<TData>;
  error: Nullable<any>;
};

