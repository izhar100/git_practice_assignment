let num=14;
function checkprime(num){
    let count=0;
    for(let i=2; i<num; i++)
    {
        if(num%i==0)
        {
            count++;
        }
    }
    if(count==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
if(checkprime(num)==true)
{
console.log(num,"is a prime number")
}
else
{
console.log(num,"is not a prime number")
}