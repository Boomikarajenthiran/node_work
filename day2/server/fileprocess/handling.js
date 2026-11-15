
import fs from 'fs'

export const fileHandling  = async()=>{

try{

const files = fs 

console.log(files);
    
     await files.writeFile("intro.txt","this is file processing", ()=>{

        console.log('File Created successfully');

     })

       await files.appendFile("intro.txt","this is node process",()=>{

         console.log('File append successfully');

     })

     await files.readFile("intro.txt","utf-8",(error,data)=>{
  
         console.log(data);

     })

   



}


catch(error){

console.log('Error',error);

}

}


// import fs from 'fs'

// fs.writeFile("index.jsx","This is React",()=>{

// console.log('successfully created')

// })

// fs.readFile("index.jsx","utf-8",(error,data)=>{

// console.log(data)

// })

// fs.unlink("index.jsx",()=>{

// console.log('successfully deleted')

// })


