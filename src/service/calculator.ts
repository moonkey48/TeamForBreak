export const calculateTime = (start:number,end:number) =>{
    return Math.floor(((end-start)/1000/60/60/24)-30);
}
export const getTimeEnd = (year:number, month:number, day:number) =>{
    return Date.UTC(year,month,day);
}