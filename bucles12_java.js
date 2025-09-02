function findMutantByPower(mutants, power) {
  const foundMutants = [];
  for (const mutant of mutants) {
    if (mutant.power === power) {
      foundMutants.push(mutant.name);
    }
  }

  if (foundMutants.length > 0) {
    if (foundMutants.length === 1) {
      return `Se encontró 1 mutante con el poder '${power}': ${foundMutants[0]}.`;
    } else {
      return `Se encontraron ${foundMutants.length} mutantes con el poder '${power}': ${foundMutants.join(', ')}.`;
    }
  } else {
    return `No se encontró ningún mutante con el poder '${power}'.`;
  }
}

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'regeneration'));
console.log(findMutantByPower(mutants, 'flying'));
console.log(findMutantByPower(mutants, 'teleportation'));

// Para probar el caso de múltiples mutantes con el mismo poder, modificamos un poco el array original
const mutantsWithDuplicates = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' },
    { name: 'Psylocke', power: 'telepathy' } // Añadimos otro con telepatía
];

console.log(findMutantByPower(mutantsWithDuplicates, 'telepathy'));