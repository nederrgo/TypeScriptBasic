let arrayOfNum :number[]= [];
document.getElementById("addNum")?.addEventListener("click",()=>{
    const input = document.getElementById('add') as HTMLInputElement | null;
    const value = input?.value;
    arrayOfNum.push(Number(value));
});
document.getElementById("submit")?.addEventListener("click",()=>{
    console.log(sortList(arrayOfNum));
});
function getAverage(array :number[]) :number{
    let sum=0;
    array.forEach(element => {
        sum+=Number(element);
    });
    return sum/array.length;
}
function getAmountOfPositive(array :number[]):number{
    let positiveNumbers=0;
    array.forEach(element => {
        if(Number(element)>0){
        positiveNumbers++;
        }
    });
    return positiveNumbers;
}
function sortList(array :number[]){
    return array.sort();
}