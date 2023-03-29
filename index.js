// Add your code here
   


    // submit data function
    function submitData(name,email){

        return fetch("http://localhost:3000/users",{
            method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com",
        }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data) 

        })
        .catch(err => console.log(err.message))  
    }

    