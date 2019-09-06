export interface IUserReposState {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: false;
  owner: IOwner;
  description: string;
  stargazers_count: number;
}

interface IOwner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: string;
}
