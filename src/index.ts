import { CheatShooter } from './main';

const cheatShooter = new CheatShooter({
  ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba: () => {
    console.log('bravo!');
  },
});

console.log(cheatShooter.commands);

cheatShooter.on('command', event => {
  console.log(event);
});
