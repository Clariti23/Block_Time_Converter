const yargs = require('yargs');

const argv = yargs
    .option('getTime', {   
        alias: 't',
        description: 'Tell the present Time',
        type: 'boolean',
    })
    .help()
    .alias('help', 'h')
    .argv;

if (argv.getTime) {
    console.log('The current time is: ', new Date().toLocaleTimeString());
}


// console.log(argv);