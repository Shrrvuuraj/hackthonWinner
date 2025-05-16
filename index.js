let searchButton = document.querySelector('.search') ;
// console.log(searchButton) ;

searchButton.addEventListener("click",(e)=>{
    e.preventDefault() ;
    let input1 = document.querySelector('#input1').value ;
    let input2 = document.querySelector('#input2').value ;
    let data = {input1, input2} ;

    checkChangepage(data) ;
})


function checkChangepage(data) {
    // console.log(data)
    
    let arr = {name:'Admin' , password:'123' } ;

    if (data[name] === arr[name]) {

        window.location = "./superHero.html"
        
    }else{
        console.log('ye nahi chaa')
    }


}