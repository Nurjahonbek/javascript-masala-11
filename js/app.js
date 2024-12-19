
// Destructuring Assignment

// 1)Quyidagi obyektni name, age, va location maydonlariga ajratib oling va ularni konsolga chiqaring.

// const user = { name: "Ali", age: 25, location: "Toshkent" } ;
// let { name, age, location: joylashuv } = user;
// console.log(name , age, joylashuv);

// 2) Funksiya parametrlari sifatida obyekt berilgan. Funksiya ichida destructuring orqali title va price maydonlarini oling va konsolga chiqaring

// const product = { title: "Telefon", price: 300, brand: "Samsung" };
// let {title, price} = product;
// console.log(title, price);

// Scope 

// 3) Quyidagi kodda x qiymatini global, local va block scope’da o‘zgartirib, ularning o‘zgarishlarini kuzating.

// let x = 10; => global 

// function testScope() {
//   let x = 20; // Local scope
//   console.log("Local scope:", x);
// }
// if (true) {
//   let x = 30; // Block scope
//   console.log("Block scope:", x);
// }
// console.log("Global scope:", x);

// 1) Quyidagi kodda qaysi scope`da xatolik yuz berishini aniqlang va tuzating

// function calculate() {
//     let result
//     if (true) {
//         result = 10;
//     }
//     console.log(result);
// }
// calculate();

// 2) Global scope’dagi o‘zgaruvchini funksiyada va blok ichida o‘zgartirish qanday natija berishini kuzating.

// let count = 5;

// function increment() {
//   count++;
//   console.log("Function scope:", count); // 6
// }
// increment();
// if (true) {
//   count += 2;
//   console.log("Block scope:", count); // 8
// }
// console.log("Global scope:", count); // 8


// 3. Spread/Rest Operator

// 3)Quyidagi ikkita massivni spread operator yordamida bitta massivga birlashtiring

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// let res = [...arr1, ...arr2]
// console.log(res);

// 1) Funksiyaga istalgan miqdordagi argumentlarni yuboring va rest operator yordamida ularni bir massiv sifatida qabul qiling. Har bir elementni kvadratga ko‘paytirib qaytaring.

// function squareNumbers(...numbers) {
//     return numbers.map(value => value ** 2)
// }

// console.log(squareNumbers(2, 3, 4));

// 2)Quyidagi obyektga yangi maydonlar qo‘shish uchun spread operatoridan foydalaning

// const user = { name: "Ali", age: 25 };
// const updatedUser = {
//     lastname: "John",
//     joylashuv: "Toshkent"
// };

// console.log(updatedUser);

// 4. Hoisting va TDZ (Temporal Dead Zone)

// 3) Quyidagi kodni hoisting qoidasiga asoslanib tahlil qiling va qaysi qatorda xatolik yuz berishini tushuntiring

// console.log(a); // xatolik shu yerda oldin elon qilingan yani (hoisting boladi)
// var a = 10;

// console.log(b); // xatolik shu yerda oldin elon qilingan yani (hoisting boladi)
// let b = 20;

// test();         // bu yerda ham  hoisting boladi regular functionda tanasi bn olib chiqib qoyadi shuning uchun code hato bolmaydi

// function test() {
//   console.log("Test function called");
// }

// 1)TDZ haqida tushuncha hosil qilish uchun quyidagi kodni to‘ldiring va xatoni tushuntiring.

// console.log(x); // TDZ yuz berdi
// let x = 5;

// let x = 5
// console.log(x); // togri bolgan kod

// 2) Quyidagi kodning ishlash tartibini tushuntiring.

// var x = 10;

// function example() {
//     var x
//   console.log(x); // chiqarilgan ammo qiymati mavjud emas hoisting
//   var x = 20;
//   console.log(x); // qiymati mavjud 
// }

// example();

// 5. Modul

// 3)Ikkita fayl yarating. Birinchi faylda sum va multiply funksiyalarini yozing va ularni eksport qiling. Ikkinchi faylda ushbu funksiyalarni import qiling va ulardan foydalaning.

// import {sum, multiply } from "./sum.js";

// console.log(sum(3, 4)); // 7
// console.log(multiply(6, 7)); // 42

// 1)Default eksportdan foydalaning. Bir faylda greet funksiyasini default qilib eksport qiling va boshqa faylda uni import qilib ishlating.

// import {default } from "./greet.js";

// console.log(default);

// 1-5. Foydalanuvchilarga oid masalalar

// 1) Funksiya massiv ichidagi isActive: true qiymatiga ega foydalanuvchilarni qaytarishi kerak.

// const users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Laylo", age: 30, isActive: false },
//     { id: 3, name: "Sardor", age: 22, isActive: true },
//     { id: 4, name: "Madina", age: 28, isActive: false },
//   ];
//     function massiv(users){
//         return users.filter(value =>
//             value.isActive
//         )
//     }
//     console.log(massiv(users));
    

// 2)Funksiya foydalanuvchilarni age qiymatiga qarab o‘sish tartibida saralashi kerak.

// const users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Laylo", age: 30, isActive: false },
//     { id: 3, name: "Sardor", age: 22, isActive: true },
//     { id: 4, name: "Madina", age: 28, isActive: false },
//   ];
//     function massiv(users){
//         return users.sort((a, b) => a.age - b.age)
//     }
//     console.log(massiv(users));
    
// 3) Funksiya ismni qabul qilib, massivdan shu ismga ega foydalanuvchini topishi kerak.

// const users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Laylo", age: 30, isActive: false },
//     { id: 3, name: "Sardor", age: 22, isActive: true },
//     { id: 4, name: "Madina", age: 28, isActive: false },
//   ];
//     function massiv(users, name){
//         return users.find(value => value.name == name)
//     }
// console.log(massiv(users, 'Ali'));
// console.log(massiv(users, 'Madina'));

// 5) Funksiya minimal va maksimal yoshni qabul qilib, shu yosh oralig‘idagi 
// foydalanuvchilarni qaytarishi kerak.

// const users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Laylo", age: 30, isActive: false },
//     { id: 3, name: "Sardor", age: 22, isActive: true },
//     { id: 4, name: "Madina", age: 28, isActive: false },
//   ];
  
//   function massiv(users, minage, maxage){
//     return users.filter(value => value.age >= minage && value.age <= maxage)
//   }
//   console.log(massiv(users, 25, 28));
  

// 6-10. Mahsulotlarga oid masalalar

// 6)Funksiya kategoriya nomini qabul qilib, shu kategoriyaga tegishli mahsulotlarni qaytarishi kerak

// const products = [
//     { id: 1, name: "Telefon", price: 1200, category: "electronics" },
//     { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
//     { id: 3, name: "Stol", price: 150, category: "furniture" },
//     { id: 4, name: "Kitob", price: 50, category: "books" },
//   ];
//     function massiv (products, category){
//         return products.filter(products =>products.category == category)
//     }
// console.log(massiv(products, 'furniture'));

// 7) Funksiya massivdagi eng qimmat mahsulotni qaytarishi kerak

// const products = [
//     { id: 1, name: "Telefon", price: 1200, category: "electronics" },
//     { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
//     { id: 3, name: "Stol", price: 150, category: "furniture" },
//     { id: 4, name: "Kitob", price: 50, category: "books" },
//   ];
// function massiv(products){
//     return products.reduce((max , value) => value.price > max.price ? value : max  )
// }
// console.log(massiv(products));

// 8) Funksiya barcha mahsulotlarning narxlari yig‘indisini qaytarishi kerak.

// const products = [
//     { id: 1, name: "Telefon", price: 1200, category: "electronics" },
//     { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
//     { id: 3, name: "Stol", price: 150, category: "furniture" },
//     { id: 4, name: "Kitob", price: 50, category: "books" },
//   ];
// function massiv(products){
//     return products.reduce((sum , value) => sum + value.price, 0)
// }
// console.log(massiv(products));

// 9)Funksiya mahsulotlarning narxini 10% ga kamaytirib, yangi massivni qaytarishi kerak.

// const products = [
//     { id: 1, name: "Telefon", price: 1200, category: "electronics" },
//     { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
//     { id: 3, name: "Stol", price: 150, category: "furniture" },
//     { id: 4, name: "Kitob", price: 50, category: "books" },
//   ];
// function massiv (products){
//     return products.map(value => value.price * 0.9)
// }
// console.log(massiv(products));

// 10) Funksiya ma'lum bir minimal narxni qabul qilib, shu narxdan yuqori bo‘lgan mahsulotlarni qaytarishi kerak.

// const products = [
//     { id: 1, name: "Telefon", price: 1200, category: "electronics" },
//     { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
//     { id: 3, name: "Stol", price: 150, category: "furniture" },
//     { id: 4, name: "Kitob", price: 50, category: "books" },
//   ];
// function massiv (products, min){
//     return products.filter(value => value.price > min)
// }
// console.log(massiv(products, 1000));

// 11-15. Murakkab kombinatsiyalar

// 11) Foydalanuvchilar va mahsulotlarni ulovchi funksiya yozing: har bir foydalanuvchiga tasodifiy mahsulot biriktiriladi va natija qaytarilad

// const users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Laylo", age: 30, isActive: false },
//     { id: 3, name: "Sardor", age: 22, isActive: true },
//     { id: 4, name: "Madina", age: 28, isActive: false },
//   ];
  
//   const products = [
//     { id: 1, name: "Telefon", price: 1200, category: "electronics" },
//     { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
//     { id: 3, name: "Stol", price: 150, category: "furniture" },
//     { id: 4, name: "Kitob", price: 50, category: "books" },
//   ];
  
// function massiv(users, products){
//     return users.map(value =>{
//         let x = products[Math.floor(Math.random() * products.length)]
//         return {...value, product: x }
//     })
// }
// console.log(massiv(users, products));
