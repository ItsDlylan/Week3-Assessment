let url = 'http://localhost:3000';
let findRestaurant = (event) =>{
    axios.get(`${url}/restaurant`).then(res =>{
        console.log(res.data)
    })
}

document.querySelector('#restarauntCreate').addEventListener('click', findRestaurant)

