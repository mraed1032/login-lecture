"use strcit"

const id = document.querySelector('#id');
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("#button");

registerBtn.addEventListener("click", login)

function login() {
    const req = {
        id: id.value,
        psword: psword.value
    };

    fetch("/login", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        if (res.success) {
            location.href = "/";
        } else {
            console.log("실패!")
            alert(res.msg)
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"))
    })
}