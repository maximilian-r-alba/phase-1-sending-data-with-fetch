// Add your code here
function submitData(userName, userEmail){

    const methodObj = { method: "Post", 
                         headers: {"Content-Type": "application/json", "Accept": "application/json"},
                        body: JSON.stringify({name : userName, email : userEmail})
                        
    }
    return fetch('http://localhost:3000/users',methodObj)
    .then(response => response.json())
    .then(object => {
            let child = document.querySelector('body').appendChild(document.createElement('p1'))
            child.textContent = object.id
    })
    .catch(error => handleError(error))

}

function handleError(error){
    let message = document.createElement('p1')
    message.textContent = error.message
    document.querySelector('body').appendChild(message)
}