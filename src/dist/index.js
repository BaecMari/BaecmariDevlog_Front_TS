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
// axios
// .get('http://localhost:8080/test1234')
// .then((Response) => {
//     console.log(Response.data);
// }).catch((Error) => {
//     console.log(Error);
// })
axios({
    method: 'get',
    url: 'https://localhost:8080/test1234',
    data: {}
})
    .then(function (response) {
    var title = document.getElementById('title');
    if (title instanceof Element) {
        title.innerText = response.data;
        console.log(response);
    }
})["catch"](function (error) {
    var title = document.getElementById('title');
    if (title instanceof Element) {
        title.innerText = error;
        console.log(error);
    }
});
//# sourceMappingURL=index.js.map