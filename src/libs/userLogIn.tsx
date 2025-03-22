export default async function userLogin(userEmail:string, userPassword:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword
        }),
    })
    
    const data = await response.json(); 

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Fail to login");

      
    }

return data;
}