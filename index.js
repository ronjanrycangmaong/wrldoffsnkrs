const commands = require("./commands/commands.js");

const shoeDiscordBot = () => {
  commands.help();
  commands.nextDrop();
  commands.retail();
  commands.mostPopular();
  commands.monthDrop();
  commands.todayDrop();
  commands.infoShoesNumber();
};

shoeDiscordBot();
