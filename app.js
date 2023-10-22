// Программа угадай число на nodejs
// используется стандартный модуль чтения входного потока данных. 
// А также модуль await для синхронного ввода данных.

const readline = require('readline');
const await = require('await');


async function question(){
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Введите число: '
    });
    rl.prompt();
    for await (const line of rl) {
        your_number = line;
        rl.close();
    }
}

let number = Math.floor(Math.random() * 100);
let your_number;
let trials = 5;

async function Start(){
    while(trials>=0){
        console.log(`Колличество попыток: ${trials}`);
        if(trials > 0){
            await question();
            if(number == your_number){
                console.log(`Угадали!\nЗагаданное число: ${number}`);
                break;
            }else{
                if(number > your_number){
                    console.log("Загаданное число больше!");
                }else if(number < your_number){
                    console.log("Загаданное число меньше!");
                }
            }
        }else{
            console.log("Попытки закончились, ты проиграл!");
        }
        trials--;
    }
}
Start();