var katzDeli = [];

// function takeANumber(katzDeliLine, name) {
//   katzDeliLine.push(name);
//   var n = katzDeliLine.indexOf(name);
//   return "Welcome, " + name + ". You are number " + (n+1) + " in line.";
// }

total = 0;

function takeANumber(katzDeliLine) {
  var n = total + 1;
  reset();
  katzDeliLine.push(n);
  total++;
  return n;
}

// function nowServing(deliLine) {
//   if (deliLine.length === 0) {
//     return "There is nobody waiting to be served!"
//   }
//   else {
//     var current = deliLine.shift();
//     return "Currently serving " + current + ".";
//   }
// }

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var current = deliLine.shift();
    return "Currently serving " + current + ".";
  }
}

function reset() {
  if (total > 500) {
    total = 0;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var string = "The line is currently: "
    for(let i=0; i < line.length; i++) {
      if (i == line.length - 1) {
        string += ((i+1) + ". " + line[i]);
      } else {
        string += ((i+1) + ". " + line[i] + ", ");
      }
    }
    return string;
  }
}