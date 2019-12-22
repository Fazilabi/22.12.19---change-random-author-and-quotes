let quotes=[
    {
        name:"J.D. Salinger, The Catcher in the Rye",
        quote:' “What really knocks me out is a book that, \
        when you are all done reading it \
        you wish the author that wrote it was a terrific \
        friend of yours and you could call him up on the \
        phone whenever you felt like it. \
        That doesnt happen much, though.”'
    },
    {
        name: 'Thomas Mann, Essays of Three Decades',
        quote: " “A writer is someone for whom writing \
        is mor'e difficult than it is for other people.” "
    },
    {
        name: 'G.K. Chesterton, Heretics',
        quote: '“A good novel tells us the truth about its hero; \
         but a bad novel tells us the truth about its author.”'
    },
    {
        name: 'Carlos Ruiz Zafón, The Shadow of the Wind',
        quote: '“A story is a letter that the author writes to himself, \
        to tell himself things that he would be unable to discover otherwise.”'
    },
    {
        name: 'Charles Bukowski, Hot Water Music',
        quote: '“What is your advice to young writers?” \
        “Drink, fuck and smoke plenty of cigarettes.”'
    }
]

let authorName=document.querySelector(".authorName");
let authorQuote=document.querySelector(".authorQuote");

let btn=document.querySelector(".btn");
btn.addEventListener("click", changeRandom);

function changeRandom(){
    let random=Math.floor(Math.random()*quotes.length)
    authorName.innerHTML=random +" <br> " +quotes[random].name;
    authorQuote.innerHTML=quotes[random].quote;
}
