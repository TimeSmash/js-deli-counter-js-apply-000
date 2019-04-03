function takeANumber(currentLineup, newName) {
  currentLineup.push(newName)
  return `Welcome, ${newName}. You are number ${currentLineup.indexOf(newName)+1} in line.`
}

function nowServing (currentLineup) {
  if (currentLineup.length !== 0) {
    return `Currently serving ${currentLineup.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (currentLineup) {
  var orderedCust = []
  if (currentLineup.length !== 0) {
  for (var i = 0; i<currentLineup.length; i++) {
  orderedCust.push(` ${i+1}. ${currentLineup[i]}`)
  }
  return `The line is currently:${orderedCust}`
  } else {
    return "The line is currently empty."
  }
}