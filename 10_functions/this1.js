// this keyword ~ Refers current context

// using this keyword

// Current context starts of this obj
const user = {
    userName: "Satvik",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.userName}, welcome to our website`);
    }
}
// Current context end of this obj

user.welcomeMsg()
// Changing the name of user
user.userName = "Sat"
user.welcomeMsg()           // it will also changes at we haven't hardcoded the variable


// But if we don't use the this keyword

const user2 = {
    userName: "Satvik",
    price: 999,
    welcomeMsg2: function(){
        // console.log(`${userName}, welcome to our website`);
    }
}

// user2.welcomeMsg2()             // Error, userName is not defined here


// ++++++++++++POINT TO REMEMBER++++++++++++++++++

// In node environment, if we print this keyword, it show {} object
// But in browser engine, the very global object is "Window" object which helps in DOM



function chai() {
    var userName = "Satvik"
    console.log(this.userName);
}

chai()                      // shows undefined and also won't work here but in fnc it will work, and also same for expressional func