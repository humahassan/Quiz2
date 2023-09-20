var num;
num = prompt("Enter the number");
if(num >= 0 && num % 2 === 0)
{
    console.log("The Number",num, "is Even");
}
else if(num >= 0 && num % 2 !== 0)
{
    console.log("The Number",num, "is Odd");
}
else
{
    console.log("The Number",num, "is Negative"); 
}