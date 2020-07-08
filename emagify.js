const sentence = require('./emagi-symbol.js');
const picture= require('./emagi-words.js');




// does the function
const creation =function(output){
    let newArray= []
    for(const i of output ){
        if (words.includes(sentence)){
            newArray.push(sentence[picture.indexOf(i)])
        }
        else {
            newArray.push(i)
        }
    }return newArray
}
// creation()   test

module.exports = creation 

    // const selection = function(){
    //     if ('smile'){
    //         console.log('😁')
    //     }
    //     else if ('cool'){
    //         console.log('😎')
    //     }
    //     else if ('laugh'){
    //         console.log('😆')
    //     }
    //     else if ('angry'){
    //         console.log('😠')
    //     }
    //     else if ('cry'){
    //         console.log('😭')
    //     }
    //     else if ('wink'){
    //         console.log('😜')
    //     }
    //     else if ('scream'){
    //         console.log('😱')
    //     }
    //     else if ('computer'){
    //         console.log('💻')
    //     }
    //     else if ('heart'){
    //         console.log('💓')
    //     }
    //     else if ('dog'){
    //         console.log('✅')
    //     }
    //     else if ('praise'){
    //         console.log('🙌')
    //     }
    //     else if ('ghost'){
    //         console.log('👻')
    //     }
    //     else if ('poop'){
    //         console.log('💩')
    //     }
    //     else if ('heartbreak'){
    //         console.log('💔')
    //     }
    //     else if ('dog'){
    //         console.log('🐕')
    //     }
    //     else if ('unicorn'){
    //         console.log('🦄')
    //     }
    //     else if ('burger'){
    //         console.log('🍔')
    //     }
    //     else if ('fries'){
    //         console.log('🍟')
    //     }
    //     else if ('drink'){
    //         console.log('🍹')
    //     }
    //     else if ('pizza'){
    //         console.log('🍕')
    //     }
    //     else if ('burrito'){
    //         console.log('🌯')     
    //     }
    //     else if ('taco'){
    //         console.log('🌮')      
    //     }
    //     else if ('grapes'){
    //         console.log('🍇')      
    //     }
    //     else if ('strawberry'){
    //         console.log('🍓')      
    //     }
    //     else if ('pineapple'){
    //         console.log('🍍')      
    //     }
    //     else if ('watermelon'){
    //         console.log('🍉')      
    //     }
    //     else if ('banana'){
    //         console.log('🍌')      
    //     }
    //     else if ('sushi'){
    //         console.log('🍣')      
    //     }
    //     else if ('popcorn'){
    //         console.log('🍿')      
    //     }
    //     else if ('bento'){
    //         console.log('🍱') 
    //     }
    //     else if ('cake'){
    //         console.log('🍰') 
    //     }
    //     else if ('beer'){
    //         console.log('🍺') 
    //     }
    //     else if ('wine'){
    //         console.log() 
    //     }
    //     else if ('meat'){
    //         console.log() 
    //     }
    //     else if ('donut'){
    //         console.log() 
    //     }
    //     else if ('candy'){
    //         console.log() 
    //     }
    //     else if ('bottle'){
    //         console.log() 
    //     }
    //     else if ('celebrate'){
    //         console.log()
    //     }
    //     else if ('cocktail'){
    //         console.log()
    //     }
    //     else if ('eat'){
    //         console.log()
    //     }
    //     else if ('drive'){
    //         console.log()
    //     }
    //     else if ('train'){
    //         console.log()
    //     }
    //     else if ('fly'){
    //         console.log()
    //     }
    //     else if ('world'){
    //         console.log()
    //     }
    //     else if ('boat'){
    //         console.log()
    //     }
    //     else if ('rain'){
    //         console.log()
    //     }
    //     else if ('snow'){
    //         console.log()
    //     }
    //     else if ('thunderstorm'){
    //         console.log()
    //     }
    //     else if ('sun'){
    //         console.log()
    //     }
    //     else if ('tornado'){
    //         console.log()
    //     }
    //     else if ('fire'){
    //         console.log()
    //     }
    //     else if ('halloween'){
    //         console.log()
    //     }
    //     else if ('christmas'){
    //         console.log()
    //     }
    //     else if ('tv'){
    //         console.log()
    //     }
    //     else if ('music'){
    //         console.log()
    //     }
    //     else if ('movie'){
    //         console.log()
    //     }
    //     else if ('birthday'){
    //         console.log()
    //     }
    //     else if ('book'){
    //         console.log()
    //     }
    //     else if ('note'){
    //         console.log()
    //     }
    //     else if ('key'){
    //         console.log()
    //     }
    //     else if ('fix'){
    //         console.log()
    //     }
    //     else if ('?'){
    //         console.log()
    //     }
    //     else if ('!'){
    //         console.log()
    //     }
    //     else if ('phone'){
    //         console.log()
    //     }
    //     else if ('call'){
    //         console.log()
    //     }





        
    // }