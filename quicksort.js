var quickSort = function (arr) {
  var arr_int = [];
  // console.log("typeof(arr[0])", typeof (arr[0]))
  arr.forEach(function (data) {
    arr_int.push(+data);
  });
  arr = arr_int;
  if (arr.length <= 1) { return arr; }

  var middleIndex = Math.floor(arr.length / 2);
  // console.log("arr.length", arr.length)
  // console.log("typeof(arr)", typeof (arr))
  // console.log("typeof(arr[0])", typeof (arr[0]))
  // console.log("middleIndex", middleIndex)
  // console.log("'11'<'2'", '11' < '2')
  // javascript字符串在进行大于(小于)比较时，会根据第一个不同的字符的ascii值码进行比较
  var middle = arr[middleIndex];

  // console.log("middle", middle)


  var left = [];
  //console.log(arr)
  var right = [];

  // console("arr[0] < middle13123", arr[0])
  for (var i = 0; i < arr.length; i++) {
    if (i == middleIndex) continue;
    // console("arr[0] < middle13123", arr[0])

    if (arr[i] < middle) {
      // console.log("进入left arr[i]", arr[i], "middle", middle)

      // console.log("middle", middle)
      left.push(arr[i]);
    } else {
      // console.log("进入right arr[i]", arr[i], "middle", middle)
      // console.log("middle", middle)
      right.push(arr[i]);
    }

  }
  // console.log("left", left)
  // console.log("right", right)
  return quickSort(left).concat([middle], quickSort(right));

};
var arr = [];
var QuickSort = function () {
  // alert(1)
  // var shu = document.getElementsById("quicksort").value;
  // var arr = shu.split(",");
  // // for (var i = 0; i < shu.length; i++) {
  // //   if (shu[i].value.length > 0) {
  // //     arr.push(shu[i].value);
  // //   }
  // alert(Object.prototype.toString.call(arr))
  var buffer = document.getElementById("quicksort").value;
  var arr = buffer.split(",");

  // console.log("typeof(arr_int[0])", typeof (arr_int[0]))
  // console.log("arr.length", arr.length)
  // console.log("arr", arr)
  // console.log("arr[5] > arr[0]", arr[5] > arr[0])//1,3,4,5,6,22
  document.getElementById("qkbefore").innerHTML = arr
  array = quickSort(arr);
  document.getElementById("qkafter").innerHTML = array;
  return array;
}

var Unique = function () {
  // alert(123)
  // console.log(12312313)
  var buffer = document.getElementById("unique").value;
  var arr = buffer.split(",");
  document.getElementById("unique_before").innerHTML = arr;
  arr = quickSort(arr);
  // console.log("arr.length", arr.length)
  // arr.splice(arr.length - 1, 1);
  // console.log("arr.length", arr.length)
  // arr.splice(arr.length - 1, 1);
  // console.log("arr.length", arr.length)
  // delete arr[arr.length - 1]
  // console.log("arr.length", arr.length)
  // console.log(arr[arr.length - 1])
  // delete arr[arr.length - 1]
  // console.log(arr[arr.length - 1])
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      while (arr[i] == arr[i + 1])
        arr.splice(i + 1, 1);
      continue;
    }

  }
  document.getElementById("unique_after").innerHTML = arr
}