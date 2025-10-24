import { Message } from './Message';

export interface Community {
  id: string;
  name: string;
  description: string;
  members: member[];
  messages: Message[];
}

export interface member {
  id: string;
  name: string;
}

export const MOCK_COMMUNITY = {
  id: 'adivina',
  name: 'Angular Pro',
  description: 'Grupo de programación para compartir tips',
  members: [
    { id: 'uno', name: 'Angel' },
    { id: 'dos', name: 'Juan' },
    { id: 'tres', name: 'Noemi' },
  ] as member[],
  messages: [] as Message[],
};
