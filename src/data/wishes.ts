import { Wish } from '../types';

export const wishes: Wish[] = [
  {
    id: 1,
    text: 'Listen to music',
    sphere: {
      id: 4,
      name: 'Entertaimant',
      color: '#102893',
    },
  },
  {
    id: 2,
    text: 'Watch a film',
    sphere: null,
  },
  {
    id: 3,
    text: 'Kiss somebody',
    sphere: {
      id: 2,
      name: 'Relationship',
      color: '#204345',
    },
  },
  {
    id: 4,
    text: 'Eat halvah',
    sphere: {
      id: 1,
      name: 'Food',
      color: '#525200',
    },
  },
  {
    id: 5,
    text: 'Ride a bicycle',
    sphere: {
      id: 3,
      name: 'Sport',
      color: '#521393',
    },
  },
];
