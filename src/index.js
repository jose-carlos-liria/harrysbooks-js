const PRICE = 8.00;

/**
 * Return an array with all the combinations of books possible (2⁵ = 32) and its price with the discount applied.
 * 
 * @param {Map} cart 
 */
export const initArray = (cart) => {
    var dp = [];

    var basket = [];
    basket[0] = typeof cart.get(1) !== "undefined" ? cart.get(1) : 0;
    basket[1] = typeof cart.get(2) !== "undefined" ? cart.get(2) : 0;
    basket[2] = typeof cart.get(3) !== "undefined" ? cart.get(3) : 0;
    basket[3] = typeof cart.get(4) !== "undefined" ? cart.get(4) : 0;
    basket[4] = typeof cart.get(5) !== "undefined" ? cart.get(5) : 0;

    var aux = [[0, 0, 0, 0, 0], parseFloat(0).toFixed(2)];
    dp.push(aux);
    aux = [[0, 0, 0, 0, 1], parseFloat(PRICE).toFixed(2)];
    dp.push(aux);
    aux = [[0, 0, 0, 1, 0], parseFloat(PRICE).toFixed(2)];
    dp.push(aux);
    aux = [[0, 0, 0, 1, 1], parseFloat(PRICE * 2 * 0.95).toFixed(2)];        
    dp.push(aux);
    aux = [[0, 0, 1, 0, 0], parseFloat(PRICE).toFixed(2)];
    dp.push(aux);
    aux = [[0, 0, 1, 0, 1], parseFloat(PRICE * 2 * 0.95).toFixed(2)];    
    dp.push(aux);
    aux = [[0, 0, 1, 1, 0], parseFloat(PRICE * 2 * 0.95).toFixed(2)];    
    dp.push(aux);
    aux = [[0, 0, 1, 1, 1], parseFloat(PRICE * 3 * 0.90).toFixed(2)];    
    dp.push(aux);
    aux = [[0, 1, 0, 0, 0], parseFloat(PRICE).toFixed(2)];
    dp.push(aux);
    aux = [[0, 1, 0, 0, 1], parseFloat(PRICE * 2 * 0.95).toFixed(2)];    
    dp.push(aux);
    aux = [[0, 1, 0, 1, 0], parseFloat(PRICE * 2 * 0.95).toFixed(2)];    
    dp.push(aux);
    aux = [[0, 1, 0, 1, 1], parseFloat(PRICE * 3 * 0.90).toFixed(2)];    
    dp.push(aux);
    aux = [[0, 1, 1, 0, 0], parseFloat(PRICE * 2 * 0.95).toFixed(2)];    
    dp.push(aux);
    aux = [[0, 1, 1, 0, 1], parseFloat(PRICE * 3 * 0.90).toFixed(2)];    
    dp.push(aux);
    aux = [[0, 1, 1, 1, 0], parseFloat(PRICE * 3 * 0.90).toFixed(2)];    
    dp.push(aux);
    aux = [[0, 1, 1, 1, 1], parseFloat(PRICE * 4 * 0.80).toFixed(2)];    
    dp.push(aux);
    aux = [[1, 0, 0, 0, 0], parseFloat(PRICE).toFixed(2)];
    dp.push(aux);
    aux = [[1, 0, 0, 0, 1], parseFloat(PRICE * 2 * 0.95).toFixed(2)];
    dp.push(aux);
    aux = [[1, 0, 0, 1, 0], parseFloat(PRICE * 2 * 0.95).toFixed(2)];
    dp.push(aux);
    aux = [[1, 0, 0, 1, 1], parseFloat(PRICE * 3 * 0.90).toFixed(2)];    
    dp.push(aux);
    aux = [[1, 0, 1, 0, 0], parseFloat(PRICE * 2 * 0.95).toFixed(2)];
    dp.push(aux);
    aux = [[1, 0, 1, 0, 1], parseFloat(PRICE * 3 * 0.90).toFixed(2)];    
    dp.push(aux);
    aux = [[1, 0, 1, 1, 0], parseFloat(PRICE * 3 * 0.90).toFixed(2)];    
    dp.push(aux);
    aux = [[1, 0, 1, 1, 1], parseFloat(PRICE * 4 * 0.80).toFixed(2)];    
    dp.push(aux);
    aux = [[1, 1, 0, 0, 0], parseFloat(PRICE * 2 * 0.95).toFixed(2)];
    dp.push(aux);
    aux = [[1, 1, 0, 0, 1], parseFloat(PRICE * 3 * 0.90).toFixed(2)];    
    dp.push(aux);
    aux = [[1, 1, 0, 1, 0], parseFloat(PRICE * 3 * 0.90).toFixed(2)];    
    dp.push(aux);
    aux = [[1, 1, 0, 1, 1], parseFloat(PRICE * 4 * 0.80).toFixed(2)];    
    dp.push(aux);
    aux = [[1, 1, 1, 0, 0], parseFloat(PRICE * 3 * 0.90).toFixed(2)];    
    dp.push(aux);
    aux = [[1, 1, 1, 0, 1], parseFloat(PRICE * 4 * 0.80).toFixed(2)];    
    dp.push(aux);
    aux = [[1, 1, 1, 1, 0], parseFloat(PRICE * 4 * 0.80).toFixed(2)];    
    dp.push(aux);
    aux = [[1, 1, 1, 1, 1], parseFloat(PRICE * 5 * 0.75).toFixed(2)];    
    dp.push(aux);

    return [basket, dp];
}

/**
 * Returns true if aux can be belongs to a possible finale solution, otherwise returns false
 * 
 * @param { array } basket  Array with the books bought by the customer
 * @param { array } si      Array with the initial final solution
 * @param { array } sol     Array with a possible solution. If si and sol can be added then returns true
 */
export const solution = (basket, si, sol) => {
    var ps = [...sol];
    if (si.length > 0){
        for (var i = 0; i < si.length; i++){
            for (var j = 0; j < ps.length; j++){
                 ps[j] = parseInt(si[i][j] + ps[j]);
            }    
        }
    }    
    for (var i = 0; i < basket.length; i++){
        if (parseInt(basket[i] - ps[i]) < 0)
            return false;
    }
    return true;
}

/**
 * Returns true is a valid final solution, otherwise returns false
 * 
 * @param basket Array with the books bought by the customer
 * @param si Array with a initial solution
 */
export const validSolution = (basket, si) => {
    var aux = [...basket];
    for (var i = 0; i < si.length; i++){
        var sol = si[i];
        for (var j = 0; j < aux.length; j++){
            aux[j] = parseInt(aux[j] - sol[j]);
        }
    }
    var distinctZero = aux.filter(item => item > 0);
    return distinctZero.length == 0 ? true : false;
}

/**
 * Returns the best price for the purchase of the customer
 * 
 * @param cart Basket with all the books bought by the customer. If the customer has no bought some copy of a determinated book in the cart this
 * will be appear like {number_of_book, 0} 
 */
export const checkOut = (cart) => {
    const [basket, dp] = initArray(cart);
    var voa = Number.POSITIVE_INFINITY;
    var value = 0;
    var soa = [];
    var si = [];
    var level = 1;
    var i = 1;
    while (level < Math.pow(2, 5)){
        var aux = dp[i][0];
        if (solution(basket, si, aux)){
            si.push(aux);
            value = (value * 10 + dp[i][1] * 10)/10;
            i = level;
        }else if (i < (Math.pow(2, 5) - 1)){
            i++
        }else{
            level++;
            i = level;
            si = [];
            value = 0;
        }
        if (validSolution(basket, si)){
            if (value < voa){
                voa = value;
            }
            soa.push([si, value]);
            value = 0;            
            si = [];
            level++;
            i = level;            
        }
    }
    return voa;
}