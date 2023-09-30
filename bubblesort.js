function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
var sortedArray = bubbleSort(unsortedArray);
console.log("Sorted Array:", sortedArray);

