
let answer = document.getElementsByClassName("inputField");
let toFindLength = document.getElementsByClassName("buttonScript");
  for (let i = 0; i < toFindLength.length; i++) {
    toFindLength[i].addEventListener("click", function () {
      if (this.value === '=') {
        answer[0].innerHTML = eval(answer[0].innerHTML);
      } else {
        answer[0].innerHTML += this.value;
      }
      if (this.value === "C") {
         answer[0].innerHTML = ""

      }
      
    }
  )
};
    
   
