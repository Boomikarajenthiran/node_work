

let arr = [];

export const stuController = async(req,res)=>{

    try{

      const {name,course,pnumber} = req.body  
      
       console.log("Controller executed");

      arr.push({name,course,pnumber})

      console.log(arr);

      res.status(200).json({message:"succesfully done..",arr})

     }
   catch(error){

       console.log(error)

   }

}



export const getcotroller = async(req,res)=>{


try{

   res.status(200).json({datas:arr})


}catch(error){


    console.log(error);


}


}

//put
export const updatecontroller = async(req,res)=>{

   try{

       const{id} = req.params;

       const{name,course,pnumber}=req.body;

       arr[id] = {name,course,pnumber};

       res.status(200).json({message:"updated successfully",arr});


   }catch(error){

   console.log(error);

}

}


//delete
export const deletecontroller = async(req,res)=>{
 
    try{

      const {id} = req.params;

      arr.splice(id,1);

      res.status(200).json({message:"deleted successfully",arr})



    }catch(error){


     console.log(error);


    }

}