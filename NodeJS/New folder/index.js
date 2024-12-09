const fs=require('node:fs')

// fs.mkdirSync('myfiles')

// fs.writeFileSync('myfiles/sample1.txt','This is the content of sample1.txt')

// const dirName = 'myfiles';

// for (let i = 1; i <= 10; i++) {
//     fs.writeFileSync(`${dirName}/sample${i}.txt`, `This is the content of sample${i}`);
// }



//Q1   fs.mkdirSync('newfiles')

// const dirName = 'newfiles';

// for (let i = 1;  i <= 10; i++) {
//     fs.writeFileSync('newfiles/sample' + i + '.txt', 'file no' + i)
// }

//Q2 delete odd file

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         fs.unlinkSync('newfiles/sample' + i + '.txt')
//     }
// }


//Q3 wiki pedia script


// fs.writeFileSync('wikipedia.txt','Amber (pronounced Amer) is at a distance of about 11 kilometres from Jaipur. Now a UNESCO World Heritage Site, it was the bastion of the Kachwahas of Amber, until the capital was moved to the plains, to what is today Jaipur. The palace, located in craggy hills, is a beautiful melange of Hindu and Mughal styles. ')



//Q4 wiki pedia script > all S replace with X

// const wiki = fs.readFileSync('wikipedia.txt', 'utf-8');

// const removeS = wiki.replace(/s/g, 'x');
// fs.writeFileSync('wikipedia.txt', removeS);


// Q5 write a script to create a file with data and filename and data should be inserted by user from console(prompt-Sync)


const fileName = prompt('Enter the file name: ');
const data = prompt('Enter the data: ');

fs.writeFileSync(fileName, data);



 


//Q6 provide a script to delete any file in current folder using prompt-sync











