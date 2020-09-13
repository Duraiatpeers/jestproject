const fetch = require('node-fetch');



export let fetchUser = async function () {
    let response = await fetch("https://reqres.in/api/users/2");
    
    if (response.status == 200) {
        let user = await response.json();
        return user;
    } else {
        return Promise.reject("Failed to fetch the countries");
    }

}

