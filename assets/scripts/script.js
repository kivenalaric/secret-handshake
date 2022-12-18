const input = document.querySelector('#element1')
const submitBtn = document.querySelector('#submit')
const displayBox = document.querySelector('#display')

const arrayGreetings = ['wink', 'double blink', 'close your eyes', 'jump']

const arrayActions = (array) => {
  const filteredList = array.filter(item => item !== undefined)
  if (filteredList.length === 0) { alert('No handshakes for this number, try another') }
  filteredList.forEach((el, i, array) => {
    i === (filteredList.length - 1)
      ? array[i] = `${el}.`
      : array[i] = `${el}, `
  })
  displayBox.innerHTML = filteredList.join('').toString()
}

const secretHandShake = () => {
  const shakeFriend = []
  const numberToCheck = Number(Math.floor(input.value)).toString(2)
  if (isNaN(numberToCheck) || numberToCheck < 0) alert('Please put in a number greater than 0')
  const newArray = numberToCheck.toString().split('')
  const reverseArray = newArray.reverse()
  reverseArray.forEach((el, i) => {
    if (el === '1')shakeFriend.push(arrayGreetings[i])
  })
  if (reverseArray[4] === '1')shakeFriend.reverse()
  arrayActions(shakeFriend)
}

submitBtn.addEventListener('click', secretHandShake)
