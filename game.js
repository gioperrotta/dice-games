const positions = [
  ['point5'],
  ['point1', 'point9'],
  ['point1', 'point5', 'point9',],
  ['point1', 'point3', 'point7', 'point9'],
  ['point1', 'point3', 'point5', 'point7', 'point9'],
  ['point1', 'point3', 'point4', 'point6', 'point7', 'point9']
]
const points = document.querySelectorAll('.point');


function resetPlay() {
  setFaceResult(positions[4], dice = 'a');
  setFaceResult(positions[3], dice = 'b');
}


async function clearFace(dice) {
  await new Promise(resolve => setTimeout(resolve, 100))
  points.forEach(elm => {
    const [preFix] = elm.id.split('-');
    if (preFix === dice) {
      elm.style.backgroundColor = 'beige'
    }
  })
  await new Promise(resolve => setTimeout(resolve, 100))
}

async function setFaceResult(position, dice) {
  await clearFace(dice)
  position.forEach(elm => {
    const idPoint = `#${dice}-${elm}`
    const point = document.querySelector(idPoint);
    point.style.backgroundColor = 'black'
  })
}

async function animationPlay() {
  let drawnNumber = 0
  for (let j = 0; j < 6; j++) {
    await setFaceResult(positions[j], 'a')
    await setFaceResult(positions[j], 'b')
  }
  drawnNumber = Math.floor(Math.random() * 6)
  await setFaceResult(positions[drawnNumber], 'a')
  drawnNumber = Math.floor(Math.random() * 6)
  await setFaceResult(positions[drawnNumber], 'b')
}

resetPlay();

