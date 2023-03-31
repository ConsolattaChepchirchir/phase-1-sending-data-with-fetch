// Add your code here
function submitData(name,email){
  const personalData = {
    name: "Steve",
    email: "steve@steve.com",
  };
  //data insertion
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(personalData),
  };
  
  fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      const givendata = data.id;
      document.body.append(givendata)
    })
    .catch(error => {
      let returnmessage = 'invalid data';
      document.body.append(error.returnmessage);
    }
      )
    }
    submitData();
    