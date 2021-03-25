const url = "http://localhost:32405/api/users";

let newuser= {
    id: 0,
    username: "hk456",
    password: "2019",
    email: "helenkeller@yahoo.com",
    firstname: "Helen",
    lastname: "Keller",
    phone: "513-456-9111",
    isAdmin: true,
    isReviewer: false,
    
    
    
    

}


$().ready(() => {



// $.ajax({
//     method: "POST",
//     url: url,
//     data:JSON.stringify(newuser), //turns keys into strings
//     contentType: 'application/json'

// })
//     .done((res) =>{
//         console.log(res);
//     })

//     .fail((err) =>{
//         console.error(err);
//     })

console.log("Before call to getJSON");
$.getJSON(url) //the call //
    .done((users) => {
       console.log(users);
       console.log("After call completed to JSON"); 
    }) //method gets called if JSON operates successfully

    .fail((err) => { //what happens if it does not work
    console.error (err);  //will show in Red
    })
    console.log("After call to getJSON");
  })