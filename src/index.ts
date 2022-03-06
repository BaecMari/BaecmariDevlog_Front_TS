import axios from '../node_modules/axios/index';

// const button = document.getElementById("button");

// button.addEventListener("click", () => {
//   alert("clicked!");
// });
// function concat(left:string, right:string):string {
//     return left + right;
// }

// let hello:string = concat("hello", "world");

// console.log(hello);

// let title = document.querySelector('#title');
// // let title = document.getElementById('title');
// if (title instanceof Element) {
//     title.innerHTML = '123'
// }
// console.log("test");

// fetch('/test1234')
//   .then(response => response.json())
//   .then(data => console.log(data));

axios
.get('/test1234')
.then((Response) => {
    console.log(Response.data);
}).catch((Error) => {
    console.log(Error);
})
// axios({
//     method: 'get',
//     url: '/test1234',
//     data: {}
// })
//     .then(response => {
//         let title = document.getElementById('title');
//         if(title instanceof Element) {
//             title.innerText = response.data[0].Name;
//             console.log(response.data);
//         }
//     })
//     .catch(error=> {
//         let title = document.getElementById('title');
//         if(title instanceof Element) {
//             title.innerText=error;
//             console.log(error);
//         }
//     })

