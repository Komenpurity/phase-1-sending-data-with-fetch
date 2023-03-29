
//includes the HTTP verb,header and body
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle",
      }),
}



//fetch request 
    fetch("http://localhost:3000/dogs",configurationObject) 
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err.message)
    })