const myName = prompt("enter my name");
const crushName = prompt("enter crush name");
const percentage = (Math.round(Math.random()* 101)+ 1) ;
if(percentage > 70){
    alert("your match percentage is : " + percentage + "  " + " your love is excellent");
} 
  else if ( percentage < 70 && percentage > 50 ) {
    alert("your match percentage is : " + percentage + " " + " your love percentage is average")
}
if(percentage < 50){
    alert("your match percentage is : " + percentage + " " + " your love is poor")
}
