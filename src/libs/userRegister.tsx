export default async function  userRegister(username:string,userEmail:string,phoneNum:string, userPassword: string) {
//console.log(process.env.NEXT_PUBLIC_BACKEND_URL)

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/register`,{
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
    
   const data = await response.json(); 

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Fail to register");

      
    }

return data;
    
}