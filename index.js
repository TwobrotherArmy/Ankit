let str="Divya"
console.log(str.toUpperCase())
for(let str=0;str<=4;strs++)
{
    console.log(str[str])
}
let person = prompt("Please enter your age");
if(person>=18)
{
    console.log("you are eligible");
}
else{
    console.log("you are not eligible");
}
confirm("Press a button!");
let conf=confirm('are you happy')
console.log(conf)
if(conf)
{
    console.log("welcome")
}
else
{
    console.log("get out")
}
function sum(a)
{
    let sum=0
    for(let i=1;i<=a;i++)
    {
     sum=sum+i;
    }
    return sum 
}
const sum1=sum(10)
console.log(sum1)
for(let i=1;i<=20;i++)
{
if(i%2==0)
{
 continue;
}
console.log(i)
}