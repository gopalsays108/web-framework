function rev(n) {

  n = n + "";
  var arr = n.split("");
  var arr1 = [];

  for (var i in arr) {
    arr1[arr.length - i - 1] = arr[i]
  }

  var num = arr1.join("");
  return num;
}

function palindrome(n) {

  var reverse = rev(n);
  var flag = true;

  n = n + "";

  var arr = n.split("");
  var arr1 = reverse.split("");

  for (let i = 1; i < n.length; i++) {
    if (arr[i] == arr1[i]) {
      flag = true;
    }
    else {
      flag = false;
    }
  }

  if (flag == true) {
    return "Palindrome";
  }

  else {
    return "Not a palindrome";
  }

}

function substrings(str1) {

  var array1 = [];

  array1 = str1.split("");

  var combi = [];
  var temp = "";
  var slent = Math.pow(2, array1.length);

  for (var i = 0; i < slent; i++) {
    temp = "";
    for (var j = 0; j < array1.length; j++) {
      if ((i & Math.pow(2, j))) {
        temp += array1[j];
      }
    }
    if (temp !== "") {
      combi.push(temp);
    }
  }
  console.log(combi.join("\n"));
}

function sortA(l) {
  let arr = l.split("");
  arr.sort();
  l = arr.join("");
  return l;
}

function upper(l) {
  var arr = l.split(" ");
  var arr1 = [];

  for (var x = 0; x < arr.length; x++) {
    arr1.push(arr[x].charAt(0).toUpperCase() + arr[x].slice(1));
  }
  return arr1.join(' ');
}

function longest(l) {
  let arr = l.split(" ");
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max.length < arr[i].length) {
      max = arr[i];
    }
  }
  return max;
}

function countV(l) {
  var vlist = 'aeiouAEIOU';
  var vcount = 0;

  for (let i = 0; i < l.length; i++) {
    if (vlist.indexOf(l[i]) !== -1) {
      vcount += 1;
    }

  }
  return vcount;
}

function prime(n) {

  if (n === 1) {
    return "Not Prime";
  }
  else if (n === 2) {
    return "Prime";
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return "Not Prime";
      }
    }
    return "Prime";
  }
}

function tellType(n) {
  return typeof (n);
}

function matrix(n) {

  var i;
  var j;

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i === j) {

        document.write(1);
      }

      else {
        document.write(0);
      }
    }
    document.write("<br>");
  }
}

function gl(arr) {

  arr.sort();

  let arr1 = [];
  arr1[0] = arr[1];
  arr1[1] = arr[arr.length - 2];

  return arr1;
}

function perfect(n) {

  var temp = 0;

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      temp += i;
    }
  }

  if (temp === n && temp !== 0) {
    document.write("Perfect number");
  }
  else {
    document.write("Not perfect number");
  }
}

function factors(n) {

  var fact = [];
  let i;

  for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
    if (n % i === 0) {
      fact.push(i);
      if (n / i !== i)
        fact.push(n / i);
    }

  fact.sort();

  return fact;
}

function amountTocoins(amount, coins) {

  if (amount === 0) {
    return [];
  }
  else {
    if (amount >= coins[0]) {
      left = (amount - coins[0]);
      return [coins[0]].concat(amountTocoins(left, coins));
    }
    else {
      coins.shift();
      return amountTocoins(amount, coins);
    }
  }
}

function power(b, n) {
  return Math.pow(b, n);
}

function unique(l) {
  var str = l;
  var uniql = "";
  for (let i = 0; i < str.length; i++) {

    if (uniql.indexOf(str.charAt(i)) == -1) {
      uniql += str[i];

    }
  }
  return uniql;
}

function count(l) {

  let l1 = l.split("").sort().join("");
  let counter = 1;
  for (let i = 0; i < l.length; i++) {
    if (l1[i] == l1[i + 1]) {
      counter++;
    } else {
      document.write(l1[i] + " " + counter + "<br>");
      counter = 1;
    }
  }
}

document.write(rev(32243));
document.write("<br>");
document.write(palindrome(1221));
document.write("<br>");
substrings("dog");
document.write(sortA("webmaster"));
document.write("<br>");
document.write(upper("test case"));
document.write("<br>");
document.write(longest("Web Development"));
document.write("<br>");
document.write(countV("Web Development"));
document.write("<br>");
document.write(prime(7));
document.write("<br>");
document.write(tellType("Sup"));
document.write("<br>");
document.write("<br>");
matrix(5);
document.write("<br>");
document.write(gl([1, 2, 3, 4, 5]));
document.write("<br>");
perfect(6);
document.write("<br>");
document.write(factors(15));
document.write("<br>");
document.write(amountTocoins(46, [25, 10, 5, 2, 1]));
document.write("<br>");
document.write(power(2, 3));
document.write("<br>");
document.write(unique("thequickbrownfoxjumpsoverthelazydog"));
document.write("<br>");
count("thequickbrownfoxjumpsoverthelazydog");