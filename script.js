// const getFirstName = (callback) => {
//     setTimeout(() => {
//         callback ("Binar")
//     }, 3000)
// }
// const getLastName = (panggil) => {
//     setTimeout(() => {
//         panggil ("Academy")
//     }, 1000)
// }

// const handleOnClick = () => {
//     getFirstName(response =>{
//         getLastName(result =>{
//             const firstName = response
//             const lastName = result
//             const fullName = `${firstName} ${lastName}`
        
//             document.querySelector("#hasil").innerHTML = fullName
//         })
//     })
// }

// const getFirstName= () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return (true) ?
//             resolve("Binar") : reject(Error("gagal"))
//         }, 3000)
//     });
//     return promise;
// }
// const getLastName= (first) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return (true) ?
//             resolve(`${first} Academy`) : reject(Error("gagal"))
//         }, 3000)
//     })
// }
// const handleOnClick = () => {
//     console.log("Clicked...")
//     getFirstName()
//         .then(hasil => getLastName(hasil))
//         .then(hasil2 => {
//             document.querySelector("#hasil").innerHTML = hasil2
//         })
//         .catch(error => console.log(error))
// }
const getFirstName= () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            return (true) ?
            resolve("Binar") : reject(Error("gagal"))
        }, 3000);
    });
    return promise;
}
const getLastName= () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return (true) ?
            resolve("Academy") : reject(Error("gagal"))
        }, 3000)
    })
}
const handleOnClick = async () => {
    console.log("Clicked...")
    try{
    const firstName = await getFirstName();
    const lastName = await getLastName();
    const fullName = `${firstName} ${lastName}`

    document.querySelector("#hasil").innerHTML = fullName
} catch (error) {
    console.log(error)
}
}