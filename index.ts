const getOnClickEvents= ():void=>{
let arrayOfNum :number[]= [];
document.getElementById("addNum")?.addEventListener("click",()=>{
    const input = document.getElementById('add') as HTMLInputElement | null;
    const value = input?.value;
    arrayOfNum.push(Number(value));
});
document.getElementById("submit")?.addEventListener("click",()=>{
    console.log(sortList(arrayOfNum));
});
}
getOnClickEvents();
const getAverage=(array :number[]) :number=>{
    let sum=0;
    array.forEach(element => {
        sum+=Number(element);
    });
    return sum/array.length;
}
const getAmountOfPositive=(array :number[]):number=>{
    let positiveNumbers=0;
    array.forEach(element => {
        if(Number(element)>0){
        positiveNumbers++;
        }
    });
    return positiveNumbers;
}
const sortList=(array :number[])=>{
    return array.sort();
}
const regex=/[0-9]+/;
document.getElementById("numerOfCoins")?.addEventListener("keydown", (event) => {
    if(!regex.test(event.key)){
        event.preventDefault();
    }
});
//    *PART 2*
/*type Currency = {
    [key: string]: number
};


 class Changer { 
     readFile = async (filePath: string): Promise<Currency> => {
        const res = await fetch(filePath);
        const fileBlob = await res.blob();
        return new Promise<Currency>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const data = reader.result as string;
                const lines = data.toString().split('\n');
                const currencies: {[key: string]: number} = {};
                for (const line of lines) {
                    const currency = line.split(':');
                    currencies[currency[0].trim()] = Number(currency[1]);
                }
                resolve(currencies);
            };
            reader.readAsText(fileBlob);
        });
    };
}
const hello  =  new Changer();
hello.readFile('currency');
*/
