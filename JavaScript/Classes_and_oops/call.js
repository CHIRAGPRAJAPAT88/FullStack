function SetUsername(username) {
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    SetUsername.call(this, username);

    this.username = username;
    this.email = email;
    this.password = password;
}

let user = new createUser("sachin", "sachin@123", "sachin123");
console.log(user)