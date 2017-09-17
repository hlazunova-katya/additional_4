module.exports = function multiply(first, second) {
  // your solution
    const firstArr = first.split('').reverse();
    const secondArr = second.split('').reverse();
    let result = []; //новый массив
    const size = firstArr.length + secondArr.length-1; //длина нового массива

    for (let i = 0; i<size; i++){ //заполняем новый массив нулями
        result[i] = 0;
    }

    for (let i = 0; i<firstArr.length; i++){ //кастуем к интам
        firstArr[i]=parseInt(firstArr[i]);
    }
    for (let i = 0; i<secondArr.length; i++){
        secondArr[i]=parseInt(secondArr[i]);
    }

    for (let i = 0; i<firstArr.length; i++){ //умножаем
        for (let j=0; j<secondArr.length; j++){
            result[i+j]+=firstArr[i]*secondArr[j];
        }
    }

    for (let i=0; i<size-1; i++){ //переносим десятки
        result[i+1]+= Math.floor(result[i]/10);
        result[i]= result[i]%10;
    }

    result = result.reverse().join(''); //возвращаем правильный порядок
    return result;
}