export async function registerUser(req,res,next){

//     try{
//   throw new Error("encounter an error while registering new user")
//     } catch(err){
//         next(err)
//     }
   res.status(200).json({
    message: "User registered successfully"
   })
}
