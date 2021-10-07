const app = document.querySelector('#app')
const appWidth = app.offsetWidth


const figures = document.querySelectorAll('.areaFigure .listFigure li img ');
const car = document.querySelectorAll('.areaFigure2 .listFigure li img ');
const map = document.querySelectorAll('.areaFigure3 .listFigure li img ');

const containerFigure = document.querySelector('.container-figure ')
const containerCar = document.querySelector('.container-car ')
const containerMap = document.querySelector('.container-map ')
const containerSpecialPlay = document.querySelector('.container-specialPlay')

const positionFigure = containerFigure.offsetTop
const positionCar = containerCar.offsetTop
const positionMap = containerMap.offsetTop
const positionSpecialPlay = containerSpecialPlay.offsetTop

const blockCar = document.querySelector('.areaPlay .left .container-type .type .car')
const blockMap = document.querySelector('.areaPlay .left .container-type .type .map')
const blockFigure = document.querySelector('.areaPlay .left .container-type .type .figure')
const blockSpecialPlay = document.querySelector('.areaPlay .left .container-type .specialPlay')


// figure
const figure_arrowUp = document.querySelector('.areaFigure .selectFigure .arrow-up')
const figure_arrowDown = document.querySelector('.areaFigure .selectFigure .arrow-down');
const figure_listFigure = document.querySelector('.areaFigure .listFigure')

// car
const car_arrowUp = document.querySelector('.areaFigure2 .selectFigure .arrow-up')
const car_arrowDown = document.querySelector('.areaFigure2 .selectFigure .arrow-down');
const car_listCar = document.querySelector('.areaFigure2 .listFigure')

// map
const map_arrowUp = document.querySelector('.areaFigure3 .selectFigure .arrow-up')
const map_arrowDown = document.querySelector('.areaFigure3 .selectFigure .arrow-down');
const map_listCar = document.querySelector('.areaFigure3 .listFigure')


const areaHeader = document.querySelector('.header')
const areaPlay= document.querySelector('.container-areaPlay')
const positionAreaPlay = areaPlay.offsetTop


const listRank = document.querySelector('.areaPlay .right .boardRank .container-rank')

// --- height list 
const heightListFigure = document.querySelector('.areaFigure .listFigure').offsetHeight
const heightListCar = document.querySelector('.areaFigure2 .listFigure').offsetHeight
const heightListMap = document.querySelector('.areaFigure3 .listFigure').offsetHeight

var count = 0


//---------- change Img -------------

function selectFigure(){
    figures.forEach((figure)=> {
        figure.onclick = function() {
         const srcFigure =  this.getAttribute('src');
         const mainFigure = document.querySelector('.areaFigure .mainFigure img');
         mainFigure.setAttribute('src',srcFigure)
     }})
}
selectFigure()

function selectCar(){
    car.forEach((car)=> {
        car.onclick = function() {
         const srcFigure =  this.getAttribute('src');
         const mainFigure = document.querySelector('.areaFigure2 .mainFigure img');
         mainFigure.setAttribute('src',srcFigure)
     }})
}
selectCar()

function selectMap(){
    map.forEach((map)=> {
        map.onclick = function() {
         const srcFigure =  this.getAttribute('src');
         const mainFigure = document.querySelector('.areaFigure3 .mainFigure img');
         mainFigure.setAttribute('src',srcFigure)
     }})
}
selectMap()




//  click list figure
figure_arrowDown.addEventListener('click',(e)=> {
    figure_listFigure.scroll({top:588,behavior:'smooth'})
})
figure_arrowUp.addEventListener('click',(e)=> {
    figure_listFigure.scroll({top:0,behavior:'smooth'})
})

//  scroll list car
car_arrowDown.addEventListener('click',(e)=> {
    car_listCar.scroll({top: 800,behavior:'smooth'})
    // if(heightListCar == 517){
      
    // }
  
    
    // else if(heightListCar == 420){
    //     car_listCar.scroll({top:count += 420,behavior:'smooth'})
    // }
    // else if(heightListCar == 346){
    //     car_listCar.scroll({top:count += 346,behavior:'smooth'})
    // }  else if(heightListCar === 236){
    //     console.log('236 down');
    //     car_listCar.scroll({top:count += 236,behavior:'smooth'})
    // }
   
    
})
car_arrowUp.addEventListener('click',(e)=> {
    car_listCar.scroll({top: 0,behavior:'smooth'})
    // if(heightListCar == 517){
       
    // }
  
    // else if(heightListCar == 420){
    //     car_listCar.scroll({top: count -= 420,behavior:'smooth'})
    // }
    // else if(heightListCar == 346){
    //     car_listCar.scroll({top: count -= 346,behavior:'smooth'})
    // }
    // else if(heightListCar === ){
    //     console.log('236 up');
    //     car_listCar.scroll({top: count -= 236,behavior:'smooth'})
    // }
  
})

//  scroll list map
map_arrowDown.addEventListener('click',(e)=> {
    map_listCar.scroll({top:500,behavior:'smooth'})
    
})
map_arrowUp.addEventListener('click',(e)=> {
    map_listCar.scroll({top:0,behavior:'smooth'})
})



// to section figure
blockFigure.onclick = function(){
    
     
    if(appWidth > 1200){
        console.log('>1200');
        window.scrollTo({top:positionFigure})
    }
    else if(appWidth <= 376){
        console.log('376');
        window.scrollTo({top:positionFigure })
    }
    else if(appWidth <= 650){
        console.log('650');
        window.scrollTo({top:positionFigure - 100})
    }
   
    else if(appWidth <= 768){
        console.log('768');
        window.scrollTo({top:positionFigure - 80})
    }
    else if(appWidth <= 1200 ){
        console.log('1200');
        window.scrollTo({top:positionFigure - 30})
    }
    

}

// to section car
blockCar.onclick = function(){
    if(appWidth > 1200){
        console.log('>1200');
        window.scrollTo({top:positionCar})
    }
    else if(appWidth <= 376){
        console.log('376');
        window.scrollTo({top:positionCar })
    }
    else if(appWidth <= 650){
        console.log('650');
        window.scrollTo({top:positionCar - 100})
    }
   
    else if(appWidth <= 768){
        console.log('768');
        window.scrollTo({top:positionCar - 80})
    }
    else if(appWidth <= 1200 ){
        console.log('1200');
        window.scrollTo({top:positionCar - 30})
    }
    
}

// to section map
blockMap.onclick = function(){
    if(appWidth > 1200){
        console.log('>1200');
        window.scrollTo({top:positionMap})
    }
    else if(appWidth <= 376){
        console.log('376');
        window.scrollTo({top:positionMap})
    }
    else if(appWidth <= 650){
        console.log('650');
        window.scrollTo({top:positionMap - 100})
    }
   
    else if(appWidth <= 768){
        console.log('768');
        window.scrollTo({top:positionMap - 80})
    }
    else if(appWidth <= 1200 ){
        console.log('1200');
        window.scrollTo({top:positionMap - 30})
    }
}

// to section map
blockSpecialPlay.onclick = function(){
    if(appWidth > 1200){
        console.log('>1200');
        window.scrollTo({top:positionSpecialPlay})
    }
    else if(appWidth <= 376){
        console.log('376');
        window.scrollTo({top:positionSpecialPlay })
    }
    else if(appWidth <= 650){
        console.log('650');
        window.scrollTo({top:positionSpecialPlay - 100})
    }
   
    else if(appWidth <= 768){
        console.log('768');
        window.scrollTo({top:positionSpecialPlay - 80})
    }
    else if(appWidth <= 1200 ){
        console.log('1200');
        window.scrollTo({top:positionSpecialPlay - 30})
    }
}






