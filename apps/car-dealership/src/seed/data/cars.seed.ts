import { v4 as uuid } from 'uuid';

import { Car } from '../../cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Gt86',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Cherokee',
  },
];
