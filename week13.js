//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = currentDate.getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date(2023, 11, 21);
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 33);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
const diff = futureDate -currentDate;
const result = new Date(diff);
console.log(Math.round(result.getDate()));

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.

const pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 5);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate

const diffDays = futureDate - pastDate;
const resultDays = new Date(diffDays);
console.log(Math.round(resultDays.getDate()));

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.

const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7)
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = new Date();
futureYear.setFullYear(futureYear.getFullYear() + 5)
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date(2024, 11, 21);
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
const diffYears = futureYear.getFullYear() - currentDate.getFullYear();
const resultYears = new Date(diffDays);
console.log(Math.round(resultYears.getDate()));

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = new Date(Date.parse('2023-06-15T08:30:00.000Z'));
console.log(strDate);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
console.log(Date.parse('2023-06-15T08:30:00.000Z'));

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = '2023/06/15';
const wrongDate = new Date(Date.parse(date));
if (wrongDate === NaN){
    console.log('Неправильный формат даты');
}
else{
    console.log('Правильный формат даты');
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 123;
if (number >= 0){
    console.log(number + ' - положительное чсило');
}
else{
    console.log(number + ' - отрицательное чсило');
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 === 0){
    console.log(number + ' - четное чсило');
}
else{
    console.log(number + ' - нечетное чсило');
}

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 === 0){
    console.log(number + ' - чсило является кратным 3');
}
else{
    console.log(number + ' - чсило не является кратным 3');
}

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number < 10 && number >= 0){
    console.log(number + ' - чсило однозначное');
}
else{
    console.log(number + ' - чсило не однозначное');
}
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number < 100 && number > 9){
    console.log(number + ' - чсило двухзначное');
}
else{
    console.log(number + ' - чсило не двухзначное');
}

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number > 0){
    console.log(number + ' - положительное чсило');
}
else if(number === 0){
    console.log(number + ' - ноль');
}
else{
    console.log(number + ' - отрицательное чсило');
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 === 0 || number % 7 === 0){
    console.log(number + ' - чсило является кратным 5 или 7');
}
else{
    console.log(number + ' - чсило не является кратным 5 или 7');
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number < 0){
    console.log(number + ' - отрицательное чсило')
}
else if(number === 0){
    console.log(number + ' - ноль');
}
else{
    console.log(number + ' - положительное чсило');
}

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number < 1000 && number > 99 && number > 0 ){
    console.log(number + ' - чсило трехначное положительное');
}
else{
    console.log(number + ' - чсило не трехначное положительное');
}

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).

switch(Math.round(Math.random() * 6)) {
case 0:
    day = 'воскресенье';
    break;
case 1:
    day = 'понедельник';
    break;
case 2:
    day = 'вторник';
    break;
case 3:
    day = 'среда';
    break;
case 4:
    day = 'четверг';
    break;
case 5:
    day = 'пятница';
    break;
case 6:
    day = 'суббота';
    break;
default:
    day = 'неизвестный день недели';
}
console.log(day); 

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'N';
let fullName;

switch (direction) {
    case 'N':
    fullName = "Север";
    break;
case 'S':
    fullName = "Юг";
    break;
case 'E':
    fullName = "Восток";
    break;
case 'W':
    fullName = "Запад";
    break;
default:
    fullName = 'неизвестное направление';
}
console.log(fullName);
