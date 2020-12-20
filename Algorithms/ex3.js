const printStarSeries = function(num, count) {
    for ( let i = 1 ; i <= count ; i++ ) {
        for ( let j = 1 ; j <= 2*num ; j++ ) {
            if ( j <= num ) {
                console.log( '*'.repeat(j) )
            }
            else {
                console.log( '*'.repeat(2*num - j) )}}
 }
}

printStarSeries(5,3)