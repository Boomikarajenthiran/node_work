
 let arr = [];

export const addData= async(req,res)=>{

     
    try{

        // console.log(req.body);

         const {name,subject} = req.body

         arr.push(name,subject)

         console.log(arr);

         res.status(200).json({mes:"Successfully done",arr})

    }catch(error){

         console.log(error)

    }

}


export const getDatas = async(req,res)=>{

try{

   res.status(200).json({datas:arr})

}catch(error){

    console.log(error);

}


}