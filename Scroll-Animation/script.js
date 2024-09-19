var allCards = document.querySelectorAll('.card')
allCards.forEach((cards)=>{
    gsap.to(cards,{
        scale:0,
        opacity:0.5,
        scrollTrigger:{
            trigger:cards,
            start:'top 15%',
            end:'bottom 15%',
            scrub:'true'
        }
    })
})