export interface User {
  _id: string;
  cedula: string;
  name: string;
  lastName: string;
  email: string;
  address: string;
  myCommunities: { id: string; name: string }[];
  communitiesJoined: { id: string; name: string }[];
}
