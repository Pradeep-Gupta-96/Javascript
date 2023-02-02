//in javascripte everything is either primitive and object datatype

// =============delete============
// const arr=[1,2,3,4,5]
// let position=2
// for(let i=0; i<arr.length; i++){
//     if(i>=position){
//         arr[i]=arr[i+1]
//     }
// }
// arr.length=arr.length-1
// console.log(arr)

// =================search =============
// const data = [1, 2, 3, 4, 5, 4]
// const search = 4
// let index = undefined;

// for (let i = 0; i < data.length; i++) {
//     if (data[i] == search) {
//         index = i;
//         break;
//     }
// }
// console.log(index)

// let arr =[20,30,40,20,50,70,20];
// let searchId = 20
// let index =[];
// for(let i =0;i<arr.length;i++){
//     if(arr[i]===searchId){
//          index.push(i);
//     }
// }
// console.log(index);


//================== adding two array ==================
// const arr=[1,2,2,4,5,5]
// const arr1=[1,2,2,4,5,5]
// const arr2=[]

// for(let i=0; i<arr.length; i++){
// arr2[i]=arr[i]
// }
// for(let i=0; i<arr1.length; i++){
// arr2[arr.length+i]=arr1[i]
// }
// console.log(arr2)

//  let arr2=([...arr,...arr1])
//  console.log(arr2)

// for(let i=0; i<data.length;i++){
//     for(let j=0; j<data.length; j++){
//         if(data[j]>data[j+i]){
//             let temp=data[j];
//             data[j]=data[j+1];
//             data[j+1]=temp;
//         }
//     }
// }
// console.log(data)
// var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

// const Arr = [20, 84, 63, 92]
// for (let i=0; i<Arr.length; i++){
//     console.log("iiiiii",Arr)
//     for(let j=0; j<Arr.length; j++){
//         if(Arr[i]<Arr[j]){
//             let temp=Arr[i]
//             Arr[i]=Arr[j]
//             Arr[j]=temp
//             console.log("j--",Arr)
//         }
//     }
// }
// console.log("----",Arr);

//================ direct  recursion ==============
// const factorial = (item) => {
//     if (item == 0) {
//         return 1;
//     }
//     return item * factorial(item - 1)
// }
// let num = 5;
// console.log(factorial(num))

// =========revers with recursion============
// const data="abcdef"
// const data1=data.split('')
// const sort=(item,start,end)=>{
//    if(start<=end){
//     let temp=item[start]
//     item[start]=item[end]
//     item[end]=temp
//     sort(item,start+1,end-1)
//    }
// }
// sort(data1,0,data1.length)
// console.log(data1.join(''))

//===========stack ============================
// const arr = []
// let cureentlenth = arr.length;
// let size = 5;
// const push = (cval) => {
//     if(cureentlenth>=size){
//         console.log("stack is full")
//     }
//     arr[cureentlenth]=cval
//     cureentlenth+=1;
// }
// push(20)
// push(20)
// push(24)
// push(29)
// console.log(arr)

//=========palindrome==========================
// let str="level"
// let result=true;
// const checkpalidrome=(item,start,end)=>{
//     if(start<end){
//         if(item[start]!==item[end]){
//              result=false
//             }
//             checkpalidrome(item,start+1,end-1)
//     }
//     return result
// }
// console.log(checkpalidrome(str,0,str.length-1))

//======= max accuring letters =======================
// let str = "hellooooow world"
// let strobj = {}
// let maxkey = ''
// for (let i = 0; i < str.length; i++) {
//     let key = str[i]
//     if (!strobj[key]) {
//         strobj[key] = 0
//     }
//     strobj[key]++;
//     if (maxkey == '' || strobj[key] > strobj[maxkey]) {
//         maxkey = str[i]
//     }
// }
// console.log(maxkey)

//=====shiftint digit to the last ============
// const data=[5,7,4,0,3,0,5]
// for(let i=0; i<data.length; i++){
//     for(let j=0; j<data.length;j++){
//         if(data[j]==0){
//             let temp= data[i]
//             data[i]=data[j]
//             data[j]=temp
//         }
//         console.log("jj",data)
//     }
// }
//===============================
// const string = "helloworld";

// const rot13 = string.split('')
// .map(char => String.fromCharCode(char.charCodeAt(0) + (char.toLowerCase() < 'n' ? 1 : -1)))
// .join('');

// console.log(rot13)

//===============================
// for(let i=0; i<3; i++){
//     setTimeout(()=>console.log("let",i),1) 
// }

// for(var i=0; i<3; i++){ 
//     setTimeout(()=>console.log("var",i),1)
// }

// ================================
// console.log(+true)
// console.log(typeof true)
// const str = "abcde"


// console.log(!!"hellow")
// console.log(typeof(!"hellow"))


// const a={name:"Raj"}
// var  b;
// b=a;
// a.name="satyam"
// console.log(b.name)


// let num=0;
// console.log(num++)
// console.log(++num)
// console.log(num)


// const getage=(...age)=>{
//     console.log(age)  
//     console.log(typeof age)
// }
// getage(22)


// const getage=()=>{
//     'use strict'
//     let  age=30
//     console.log(age)  
// }
// getage()


// let num=eval('10*10+5') 
// console.log(num)


// let data= {1:"a",2:'b'}
// console.log(data.hasOwnProperty('1'))
// console.log(data.hasOwnProperty(1))


// const data= {1:"a",2:'b',1:'c'} // overwrite with possiton same
// console.warn(data)


// for(let i=0; i<5; i++){
//     if(i===3){
//         continue;
//     }
//     console.log(i)
// }


// const third=()=>console.log("third")
// const second=()=>setTimeout(()=>console.log('second'))
// const first=()=>console.log("first")
// first()
// second()
// third()


// const person={name:"bahubali"}
// const call=(age)=>{
//     return `the name is ${person.name} and his age  ${age}`
// }
// console.log(call.call(person, 21))
// console.log(call.bind(person, 21)())


// const sayhi=()=>{
//     return (()=>0)()
// }
// console.log(typeof sayhi())


// console.log(typeof typeof 1)

// const arr=[1,2,3]
// arr[6]=6
// console.log(arr)

// const arr=[1,2,3] //circuler
// arr[3]=arr
// console.log(arr)

// console.log(!null)
// console.log(!"")
// console.log(!1)
// console.log(!true-true)
// console.log(1+ +"10")