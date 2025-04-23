let divs=document.querySelectorAll(".MyClass");   // accessing all 9 blocks of game board
let res=document.querySelector("#result");        // element that shows the winner at end of each round

let player1=prompt("ENTER THE NAME OF PLAYER 1 !");  // asking name of first player
let player2=prompt("ENTER THE NAME OF PLAYER 2 !");   // name of second player


// writing name of players in score table

document.querySelector("#P1NAME").innerText=player1;   
document.querySelector("#P2NAME").innerText=player2;

// showing the symbol assigned to each player

let P1=document.querySelector("#P1");
let P2=document.querySelector("#P2");
P1.innerText= player1+" => SYMBOL IS 'O' ";
P2.innerText= player2+" => SYMBOL IS 'X' ";

// score of each player p1s=player1score & p2s player2score
let p1s=0,p2s=0;
let p1se=document.querySelector("#P1S");
let p2se=document.querySelector("#P2S");

// element that displays the name of player whoose turn is to mark symbol on game board
let chance=document.querySelector("#turn");


// result that leads to win 
match=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let turn=1;  // turn 1 => player1's turn & 2 => player2's turn

// initially player1's turn
chance.innerText=player1+"'S CHANCE";

// adding event listener to each block
divs.forEach((div)=>{
    div.addEventListener("click",()=>{
        
        if(turn===1){
            div.innerText="O";// 'O' is the symbol of player1
            turn=2; // after his chance turn changes to 2 that means player2's chance
            chance.innerText=player2+"'S CHANCE"; // refecting the current player chance on screen
        }
        else{
            div.innerText="X"; // 'O' is the symbol of player1
            turn=1; // after his chance turn changes to 1 that means player1's chance
            chance.innerText=player1+"'S CHANCE";
        }
        div.disabled=true; // once the div block is marked then the block is disabled to avoid duplicate marking on block

        check(); 

    });
});

// function to check weather it is a winning situation
let check=()=>{
    match.forEach((val,idx)=>{
        let x=val[0];
        let y=val[1];
        let z=val[2];
        
        if(divs[x].innerText!=="" || divs[y].innerText!=="" || divs[z].innerText!==""){
            if(divs[x].innerText===divs[y].innerText && divs[x].innerText===divs[z].innerText){
                let win="";
            if(turn===1){
                win=player2;
                p2s++;
                p2se.innerText=p2s;
            }
            else{
                win=player1;
                p1s++;
                p1se.innerText=p1s;
            }
            res.innerText=res.innerText+win;
            return ;
            }
        }
    });

};

// funtion to reset the blocks and start next round
let newgame=document.querySelector(".start");
newgame.addEventListener("click",()=>{
    divs.forEach((val)=>{
        val.innerText=""; 
        val.disabled=false; //enabling each block
    });
    res.innerText="WINNER IS :";
});


let endgame=document.querySelector(".end");
endgame.addEventListener("click",()=>{
    document.querySelector(".outerdiv").remove();
    document.querySelector(".seconddiv").remove();
    let finalwinner="";
    if(p1s!==p2s)
    {
        document.querySelector("body").innerHTML="<br><br><p style='font-size:100px;'> CONGRATULATION'S 🥇 </p><P id='final_winner_name' style='font-size:150px;'></P>";
        if(p1s>p2s){
            finalwinner=player1;
        }
        else if(p2s>p1s){
            finalwinner=player2;
        }
        document.querySelector("#final_winner_name").innerText=finalwinner;
    }
    else{
        document.body.innerHTML="<br><br><P style='font-size:100px;'>MATCH TIED</P>"
    }
    
});
