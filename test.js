let x = document.getElementById("text");
let y = document.getElementById("text1");
let z = document.getElementById("text2");


let btn = document.getElementById("button");

let result = document.getElementById("demo");


btn.addEventListener("click", write2);


function write2() {
    for (let i = 0; i < 3; i++) {
        let a = document.getElementsByClassName("res")[i];
        if (i == 0) {
            a.innerText = x.value;
        } else if (i == 1) {
            a.innerText = y.value;
        }
        else if (i == 2) {
            a.innerText = z.value;
        }

    }
}

