/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let num = init
    return {
        
        increment: function(){
            num = num + 1
            return num
        },
        decrement: function(){
            num = num - 1 
            return num
        },
        reset: function(){
            num = init
            return init
        },
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
