export interface DataObj {
  users: { name: string; age: number }[];
  info: {
    code: number;
    message: string;
    result: { isOk: boolean; id: string }[];
    data?: any[];
  };
}
