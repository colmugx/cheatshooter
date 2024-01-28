import { CheatShooter } from './main';

const cheatShooter = new CheatShooter({
  hello: () => {
    console.log('hello world');
  },
  bye: () => {
    console.log('bye');
  },
  ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba: () => {
    console.log('bravo!');
  },
});

cheatShooter.on('command', event => {
  console.log(event);
});

window.cheatShooter = cheatShooter;
