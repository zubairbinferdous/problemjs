console.log('bangladesh bank school college');

function fibonacci(n) {
    if (n == 0) {
        return [0];
    }

    else if ( n == 1) {
        return [0 , 1];
    }
    else{
        // find nth elemant array
        var fibo = fibonacci(n-1);
        var nextElemant = fibo[n-1] + fibo[n-2];
        fibo.push(nextElemant);
        return fibo

    }

}

var result = fibonacci(5);
console.log(result);