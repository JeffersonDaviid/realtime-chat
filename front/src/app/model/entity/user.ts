export interface User {
  id: string;
  cedula: string;
  name: string;
  lastName: string;
  email: string;
  address: string;
  myCommunities: community[];
  communitiesJoined: community[];
}

export interface community {
  id: string;
  name: string;
}

export const MOCK_USER = {
  id: `uno`,
  cedula: '1752768999',
  name: 'Jefferson',
  lastName: 'Chileno',
  email: 'jefferson@gmail.com',
  address: 'Quito - Guaraní',
  communitiesJoined: [
    { id: 'uno', name: 'Grupo Angular' },
    { id: 'dos', name: 'Grupo React' },
    { id: 'tres', name: 'Grupo Astro' },
  ],
  myCommunities: [
    { id: 'uno', name: 'Desarrollo web' },
    { id: 'dos', name: 'Desarrollo Ágil' },
    { id: 'tres', name: 'Tips Angular' },
  ],
};
