const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");

const getData = async function (numUsers) {
    const userRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`
    );
    const data = await userRequest.json();
    //console.log(data);

    const userResults = data.results;
    displayUser(userResults);  
};
getData(1);



const displayUser = function (userResults) {
    randomFolks.innerHTML = "";
    for (user of userResults) {
        let names = user.name.first;
        let country = user.location.country;
        let imageUrl = user.picture.medium;
   
        userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${names}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar" />`;
        randomFolks.append(userDiv);
        
    }    
};

selectUserNumber.addEventListener("change", function (e) {
    const numUsers = e.target.value;
    getData(numUsers);

})


