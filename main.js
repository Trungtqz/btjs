let array = [];

function getInputArray() {
    return document.getElementById("inputArray").value.split(',').map(Number);
}

function displayResult(operation) {
    array = getInputArray();
    let result;

    switch (operation) {
        case 'sumOfPositives':
            result = getSumOfPositives(array);
            break;
        case 'countPositives':
            result = getCountPositives(array);
            break;
        case 'minNumber':
            result = getMinNumber(array);
            break;
        case 'minPositiveNumber':
            result = getMinPositiveNumber(array);
            break;
        case 'lastEvenNumber':
            result = getLastEvenNumber(array);
            break;
        case 'swapArray':
            result = swapArrayElements(array, 1, 2);
            break;
        case 'sortArray':
            result = sortArray(array);
            break;
        case 'firstPrimeNumber':
            result = getFirstPrimeNumber(array);
            break;
        case 'countIntegers':
            result = countIntegersInArray(array);
            break;
        case 'compareCounts':
            result = comparePositiveAndNegativeCount(array);
            break;
        default:
            result = 'Invalid operation';
    }

    displayResults(`${operation}: ${result}`);
}

function getSumOfPositives(array) {
    return array.reduce((acc, num) => num > 0 ? acc + num : acc, 0);
}

function getCountPositives(array) {
    return array.filter(num => num > 0).length;
}

function getMinNumber(array) {
    return Math.min(...array);
}

function getMinPositiveNumber(array) {
    return Math.min(...array.filter(num => num > 0), Infinity);
}

function getLastEvenNumber(array) {
    const evenNumbers = array.filter(num => num % 2 === 0);
    return evenNumbers.length > 0 ? evenNumbers[evenNumbers.length - 1] : -1;
}

function swapArrayElements(array, pos1, pos2) {
    const swappedArray = [...array];
    [swappedArray[pos1], swappedArray[pos2]] = [swappedArray[pos2], swappedArray[pos1]];
    return swappedArray;
}

function sortArray(array) {
    return [...array].sort((a, b) => a - b);
}

function getFirstPrimeNumber(array) {
    return array.find(isPrime) || -1;
}

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function countIntegersInArray(array) {
    return array.filter(num => Number.isInteger(num)).length;
}

function comparePositiveAndNegativeCount(array) {
    const countPositives = array.filter(num => num > 0).length;
    const countNegatives = array.filter(num => num < 0).length;
    return countPositives > countNegatives ? 'More positive numbers' : 'More negative numbers';
}

function displayResults(results) {
    document.getElementById("result").innerHTML = results;
}