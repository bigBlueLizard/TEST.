let user=0;
let comp=0;
let time=0;
let choices=["Slave","Citizen"];
let uscore = document.querySelector("#user-score");
let cscore = document.querySelector("#comp-score");
let disimg = document.querySelector("#disimg");
let flag = true;
let cng = document.querySelector(".change1");
let es = document.querySelector("#Emp");

const reset = ()=> {
    if(flag==true){
        choices[0]="Emp";
        es.setAttribute("id","Slave");
        cng.setAttribute("src","Slave.png");
    }
    else{
        choices[0]="Slave";
        es.setAttribute("id","Emp");
        cng.setAttribute("src","Emporer.png");
    }
    time++;
}

let msg = document.querySelector(".msg");

const playgame = (userChoice) => {
    const compChoice = choices[Math.floor(Math.random()*2)];
    if(compChoice=="Slave"){
        disimg.setAttribute("src","Slave.png");
    }
    if(compChoice=="Citizen"){
        disimg.setAttribute("src","Citizen.png");
    }
    if(compChoice=="Emp"){
        disimg.setAttribute("src","Emporer.png");
    }
    if(userChoice=="Emp"&&compChoice=="Slave"){
        comp+=3;
        cscore.innerText=comp;
        msg.innerText = "Git Gud";
        msg.style.backgroundColor = "red";
        reset();
        if(flag==true){
            flag=false;
        }else{
            flag=true;
        }
    }
    if(userChoice=="Emp"&&compChoice=="Citizen"){
        user++;
        uscore.innerText = user;
        msg.innerText = "You win nerd";
        msg.style.backgroundColor = "green";
        reset();
        if(flag==true){
            flag=false;
        }else{
            flag=true;
        }
    }
    if(userChoice=="Citizen"&&compChoice=="Emp"){
        comp++;
        cscore.innerText = comp;
        msg.innerText = "Git Gud";
        msg.style.backgroundColor = "red";
        reset();
        if(flag==true){
            flag=false;
        }else{
            flag=true;
        }
    }
    if(userChoice=="Slave"&&compChoice=="Emp"){
        user+=3;
        uscore.innerText = user;
        msg.innerText = "You win nerd";
        msg.style.backgroundColor = "green";
        reset();
        if(flag==true){
            flag=false;
        }else{
            flag=true;
        }
    }
    if(userChoice=="Slave"&&compChoice=="Citizen"){
        comp++;
        cscore.innerText = comp;
        msg.innerText = "Git gud";
        msg.style.backgroundColor = "red";
        reset();
        if(flag==true){
            flag=false;
        }else{
            flag=true;
        }
    }
    if(userChoice=="Citizen"&&compChoice=="Slave"){
        user++;
        uscore.innerText = user;
        msg.innerText = "You win nerd";
        msg.style.backgroundColor = "green";
        reset();
        if(flag==true){
            flag=false;
        }else{
            flag=true;
        }
    }
}

let ucard=document.querySelectorAll(".ucard");
ucard.forEach((card)=>{
    card.addEventListener("click",()=>{
        const c = card.getAttribute("id");
        if(time<13){
        playgame(c);
        }else{
            
            if(comp>user){
                msg.innerText = "Game Over\nComputer Wins";
            }else if(user>comp){
                msg.innerText = "Game Over\nUser Wins";
            }else{
                msg.innerText = "Game Over\n DRAW";
            }
            msg.style.backgroundColor="black";
            msg.style.color = "red";
        }
    })
})