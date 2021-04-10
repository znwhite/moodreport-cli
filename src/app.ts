const program = require('commander');
const inquirer = require('inquirer');

program.version('0.1.0').description('Mood reporter CLI app');

const questions = [
  {
    type: 'input',
    name: 'mood',
    message: 'On a scale of 1-10, how is your current mood?',
  },
  {
    type: 'input',
    name: 'note',
    message: 'Include a small note (optional):',
  },
];
program
  .command('create')
  .alias('c')
  .description('create mood report')
  .action(() => {
    inquirer.prompt(questions).then((answers) => {
      console.log('submitting...');
      setTimeout(() => {
        console.log('Success. Your mood report was submitted.');
      }, 2000);
    });
  });

program.parse(process.argv);
