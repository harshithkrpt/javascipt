function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; // throw keyword is used here
  }
}

try {
  // statements to try
  monthName = getMonthName(10); // function could throw exception
} catch (e) {
  monthName = "unknown";
  console.log(e); // pass exception object to error handler (i.e. your own function)
}

function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(e);
    return true;
  } finally {
    console.log(3);
    return false;
  }
}

console.log(f());
