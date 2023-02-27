const clock = document.getElementById("firstA")

let number= 60;
const Timer = (date) => {
    clock.innerText = `남은시간 : ${number}초 남았습니다.`
    if (number == 0) {
        clearInterval(inter)
        alert("Time Over")
    }
    number--;
}
Timer();
let inter = setInterval(Timer, 1000);

const input = document.getElementById(input);
const form = document.getElementById(form);
 

function printName()  {
    const name = document.getElementById('name').value;
    document.getElementById("result").innerText = name;
  }



form.addEventListener("submit", )





