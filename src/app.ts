const program = require('commander');
const inquirer = require('inquirer');

program.version('0.1.0').description('Mood reporter CLI app');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Your name',
  },
];
program
  .command('add')
  .alias('a')
  .description('Add a customer')
  .action(() => {
    inquirer
      .prompt(questions)
      .then((answers) =>
        console.log(answers.name + "? That's seriously your name? yikes lol")
      );
  });

program.parse(process.argv);
