export default async function  userRegister(username:string,userEmail:string,phoneNum:string, userPassword: string) {

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: username,
            email:userEmail,
            tel: phoneNum,
            password: userPassword,
            role:"user"
        }),

   })
    
   if(!response.ok){
    throw new Error("Failed to register")
   }


   return await response.json();
    
}