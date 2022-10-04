var array = new Array(0,13,5,-4,6);
console.log(array);
var iSize = array.length;
console.log("arr.length is"+array.length);

for(var i =0; i<iSize; i++)
{
if(array[i]<0)
array[i] *= array[i];
else if(array[i]==0){}
else if(array[i]%2==0)
array[i] += array[i];
else if(array[i]%2!=0)
array[i] += 2;
}
for(var i=0;i<iSize;i++){
    console.log(array[i]);
}
