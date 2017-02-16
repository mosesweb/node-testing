
// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

var i = 0, howManyTimes = 10;
function f() {
    return( "hi! " + i );
    i++;
    if( i < howManyTimes ){
        setTimeout( f, 1000 );
    }
}

exports.world = function() {
  console.log('Hello World');
}
exports.counter = function()
{
    console.log(f());
}
exports = function()
{
    return 'hasdsadasdasd';
}