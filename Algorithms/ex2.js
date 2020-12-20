const printBackwardsStars = function( num ) {
    let number = num;
    while (number > 0) {
        console.log( '*'.repeat(number) );
        number--; }
}
printBackwardsStars(5)