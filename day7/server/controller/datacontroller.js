
  let arr = [];

  //body

export const bodydatas = async(req,res)=>{

try{

    console.log(req.body);

    const{name,email,course,age} = req.body

    if(!name || !email || !course || !age){

        res.status(404).json({message:"please fill the form "})

        return
    }

    let obj = {id:Date.now(),name,email,course,age}

    arr.push(obj)

    res.status(200).json({message:"successfully added...", arr})

}catch(error){

     console.log("error.message",error.message  );

}

}

//params

export const paramsDatas = async (req,res)=>{

try{
 
    console.log(req.params)

    const{userid}= req.params

    if(userid){

       res.status(200).json({message:"I get the data userID",userid})

        return

    }

}catch(error){

    console.log('Error',error)

}

}

//query

export const queryDatas= async(req,res)=>{

try{

console.log(req.query);

const{name,mobile,filterbyprice} = req.query

res.status(200).json({message:"success",name,mobile,filterbyprice})


}catch(error){

    console.log("Error",error)

}

}

//headers

export const headersDatas = async(req,res)=>{

try{

    console.log(req)

    const{token} = req.headers

    arr.push(token)

    res.status(200).json({message:"success",arr})

       

}catch(error){

   console.log(error);

}

}