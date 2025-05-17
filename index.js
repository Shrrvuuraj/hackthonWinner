let searchButton = document.querySelector('.login');

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    let input1 = document.querySelector('#input1').value;
    let input2 = document.querySelector('#input2').value;
    
    let data = [
        {Name: "Shrrvvuu", password: "1234"},
        {Name: "Arslan", password: "1234"},
        {Name: "Proman", password: "1234"},
        {Name: "Admin", password: "123"}
    ];

    checkChangepage(data, input1, input2);
});

function checkChangepage(data, username, password) {
    const foundUser = data.find(user => 
        user.Name === username && user.password === password
    );

    if (foundUser) {
        window.location.href = "./superHero.html";
    } else {
        alert('Invalid credentials! Please try again.');
    }
}