console.log("hello");
//Class   ////
// var dark = false;
// const section = document.querySelector(".main-class")
//     //console.log(section)
// if (dark == true) {
//     var new_added_class = section.classList.add(`bg-dark`);

// } else {
//     new_added_class = section.classList.add(`border-red`);

// }
// //const new_added_class = section.classList.add(`bg-dark`);
// console.log(new_added_class);

//add ////
//const section = document.querySelector(".main-class");
// //console.log(section.innerHTML)
// section.innerHTML = section.innerHTML + "<li>hello</li>";
// console.log();
// function bgColor(bg) {
//     switch (bg) {
//         case "blue":
//             document.querySelector("main-class").style.backgroundColor = "blue";
//             break;
//         case "yellow":
//             document.querySelector("main-class").style.backgroundColor = "yellow";
//     }
//}
// const section = document.querySelector(".main-class");
// const newElement = "this is my first class"
// console.log(section);
// section.append(newElement);

// //remove / //
// const new_elementSection = document.querySelector(".list2");
// new_elementSection.remove();
// console.log(new_elementSection);

//Event  /////

//const btn = document.querySelector(".btn-section");
//console.dir(btn);

//1st type 
// btn.onclick = function() {
//     console.log("clicked!!!!");
// }

//2nd type
// function clickme() {
//     console.log("clicked!!!!")
// }
// btn.addEventListener("click", clickme);
//btn.addEventListener("click", clickMe = () => {
//alert("hello");
//confirm("hello");
// });

//const btns = document.querySelectorAll(".btns button");
// for (let button of btns) {
//     button.addEventListener("click", function() {
//         //console.log("clicked !!!");
//         //console.log(this);
//         console.log(this.textContent);
//     })
//}

// for (let button = 0; button < btns.length; button++) {
//     btns[button].addEventListener("click", function() {
//         console.log(this);
//     })
// }

// btns.forEach(function(button) {
//     button.addEventListener("click", function() {
//         console.log(this);
//     })
// })

//event object

//callback function
//jo event perform hua hai uski information bhi deta haiobject ki form me

// function hello(abc) {
//     console.log(abc);
// }
// hello({ name1: "dinesh", name2: "dinesh1" });

// const btn = document.querySelector("#btn1");
// btn.addEventListener("click", function(button) {
//     console.log(button);
// })

// const btns = document.querySelectorAll(".btns button");
// btns.forEach(function(button) {
//     button.addEventListener("click", (event) => {
//         console.log(event.target)

//     });

// })
// const btns = document.querySelectorAll(".btns button");
// btns.forEach(function(button) {
//     setTimeout(function() {
//         button.addEventListener("click", (event) => {
//             console.log(event.target)

//         });

//     });
// }, 10000);
// const btns = document.querySelectorAll(".btns button");
// btns.forEach(function(button) {
//     button.addEventListener("click", (event) => {
//         await delay(10000);
//         console.log(event.target)

//     });

// // })
// const btns = document.querySelectorAll(".btns button");

// btns.forEach(function(button) {
//     button.addEventListener("click", (event) => {
//         let num = 0;
//         for (let i = 0; i < 1000000000; i++) {
//             num += i;
//         }
//         console.log(event.target);

//     });
//     let xyz = 0;
//     for (let j = 0; j < 1000000000; j++) {
//         xyz += j;
//     }
//     console.log("click by dinesh");

// })

//API Application programming interface
//get server se data lane ke liye
//POST server se data bhejne ke liye
//delete delete data from server
//patch particular data edit krne ke liye
//PUT edit krke bhejne ke liye

// fetch("https://reqres.in/api/users?page=2")
//     .then((response) => {
//         return response.json();
//     }).then((myJson) => {
//         console.log(myJson);
//     })
// fetch("https://reqres.in/api/users?page=2")
//     .then((response) => {
//         return response.json();
//     }).then((userdata) => {
//         userdata.data.forEach((d) => {
//             // console.log(d);
//             console.log(d.first_name);
//             console.log(d.email);
//         })
//     })
//     // const user = document.querySelector(".data")
//     // console.log(user)
// const user = document.querySelector(".para")
// const paragraph = user.textContent;
// console.log(paragraph);

//POST method
//data bhejta hai json ke form me server ko
// function getdata() {

//     fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
//         console.log(response);
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: "my name is dinesh",
//         body: "my name is dinesh",
//         id: 221,
//     }),
//     headers: {
//         'Content-type': "application/json"
//     }
// }).then((response) => response.json()).then((json) => {
//     console.log(json);
// })
// getdata();

// fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
//     method: 'GET',
//     headers: {
//         'Content-type': "application/json"
//     }
// }).then((response) => response.json()).then((json) => {
//     console.log(json);
// // })
// var form = document.getElementById('form');
// form.addEventListener('submit', function(e) {
//             e.preventDefault();
//             var name = document.getElementById('name').value
//             var body = document.getElementById('body').value
//             var userid = document.getElementById('userid').value
//console.log(name, body, userid)
fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
    method: 'GET',
    headers: {
        'Content-type': "application/json"
    }
}).then((response) => response.json()).then((json) => {
    // console.log(json.url);
    json.forEach((data) => {
        // console.log(data.url);
        imgurl = data.url;
        // document.getElementById("myimg").src = data.url.picture;
        // var results = document.getElementById('data');
        // console.log(results);
        // let img = document.getElementById("myimg").getAttribute("src");
        let img = document.getElementById("myimg").src = "https://images.unsplash.com/photo-1651024549642-694d0f0c1c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            // console.log(img);
    })

    // var img = document.getElementById('myimg');
    // console.log(img);
});


//     // now we can post data in API

//     fetch('https://jsonplaceholder.typicode.com/posts/', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: name,
//             body: body,
//             id: userid,
//         }),
//         headers: {
//             'Content-type': "application/json"
//         }
//         // }).then((response) => response.json()).then((json) => {
//         //     console.log(json);
//     }).then((response) => response.json()).then((data) => {
//         console.log(data);
//         var results = document.getElementById('data');
//         results.innerHTML = `<p> the title is ${data.title}and${data.body}and${data.userid}</p>`;
//     })
// })