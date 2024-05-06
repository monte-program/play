let cards = document.querySelectorAll(".card")
let isflippe = false
let lockBoard = false
let firstCard 
let secondCard
let live = 8
let win = 0 
function tus(){
   [...cards].forEach(card => {
       let rundom = Math.floor(Math.random() * 12)
       card.style.order = rundom
    })
    live = 8
}
tus()

function flipCard(){
    let item = event.target.parentElement
    if (lockBoard ) {
        return lockBoard
    }
    console.log(item);
    if (event.target.parentElement==firstCard) {
        return firstCard
    }
    item.classList.add("return")
    
    
    if(!isflippe){
        isflippe = true
        firstCard = event.target.parentElement
        return
    }
    secondCard = event.target.parentElement
    if(firstCard.dataset.ed==secondCard.dataset.ed){
        win = win+1
       decidle()



        if(win==12){
            alert("win")
            tus()
            cards.forEach(item => item.classList.remove("return"))
            win = 0
        }



    }
    else{
        turn()
    }
}


function turn() {
    lockBoard=true
    setTimeout(function(){
    firstCard.classList.remove("return")
    secondCard.classList.remove("return")
    secondCard=null
    firstCard=null
    isflippe=false
    lockBoard=false
},2000
    )
}
function decidle(){
    firstCard.removeEventListener("click",flipCard)
    secondCard.removeEventListener("click",flipCard)
    reset()
}


function reset() {
    secondCard=null
    firstCard=null
    isflippe=false
    lockBoard=false
}




cards.forEach(card =>  {
    return card.addEventListener("click",flipCard) 
   }
)







