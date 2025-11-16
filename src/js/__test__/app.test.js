import sortHeroes from '../app.js';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const correctHeroes = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('Проверка сортировки массива', () => {
  const result = sortHeroes(heroes);
  expect(result).toEqual(correctHeroes);
});
