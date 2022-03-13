
const ar =[ 20, 100, -100, -3, 5, 0, -2 ];
function remove(array,x){
    var i=0;
    while(x != array[i] && i < array.length){
        i++;
    }
    
    for( j=i; j < array.length - 1 ; j++){
        array[j]=array[j+1];
    }
    array.length=array.length - 1;
    return array;
}
console.log(ar);
console.log(remove(ar,20));
console.log(remove(ar,100));
console.log(remove(ar,-2));



const vecteur =[ 0, 0, 3, 6, 10, 10, 10, 30,30 ,30];
function remove_dup(array){
    for(var i=0 ; i < array.length - 1; i++){
        for(var j=i+1 ; j < array.length ;){
            if(array[i]!=array[j]){
                j++;
            }
            else{
                for(var k=j; k < array.length ; k++){
                    array[k] = array[k+1];
                }
                array.length = array.length - 1;
            }
            
        }
       
    }
    return array;
}

console.log(remove_dup(vecteur));




