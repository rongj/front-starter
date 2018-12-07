export interface User {
  id: number;
  username: string;
  token: string;
}

export interface State {
  user?: User;
  collapsed: boolean;
}

const state: State = {
  user: {
    id: 1,
    username: 'admin',
    token: '12',
  },
  collapsed: false
};

export default state;
