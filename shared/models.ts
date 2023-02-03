export interface ILayOut {
  children: React.ReactNode;
  home?: boolean;
}

export interface IPostData {
  date: string;
  title: string;
  id?: string;
}

export interface IPostDataArray extends Array<IPostData> {}
