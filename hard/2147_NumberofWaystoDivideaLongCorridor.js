/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
    const modul = 10**9 + 7
    let gr1 = 1
    let gr2 = 0
    let last = 0 

    for (let i = 0; i < corridor.length; i++){
        const j = corridor[i]
        if ( j == "S"){
            gr2 += 1
            if (gr2 > 2 && gr2 % 2){
                gr1 = gr1 * (i-last) % modul
            }
            last = i
        }
    }
    if (gr2 && gr2 % 2 == 0){
        return gr1
    }
    return 0
};