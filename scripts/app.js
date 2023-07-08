const form = document.querySelector('#form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const payload = new FormData(form)
//     console.log([...payload])

//     fetch('http://127.0.0.1/testdb', {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(payload)
//     })
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
// })

// async function postData(url = "", data = {}) {
//     const response = await fetch(url, {
//         method: "POST",
//         mode: "cors",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     });
//     return response.json();
// }

// postData('http://127.0.0.1/testdb', { information: 'boa' })
//     .then((data) => {
//         console.log(data);
//     })