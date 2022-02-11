var today = new Date()
var curHr = today.getHours()
var seconds = new Date()
var curSe = seconds.getSeconds()
var date = new Date()
var curDt = date.getDate()
var month = new Date()
var curMt = month.getMonth()
var year = new Date()
var curYr = year.getFullYear()


if (curHr < 12 && curHr > 6) {
  console.log('Bom dia')
} else if (curHr < 18 && curHr > 12) {
  console.log('Boa tarde')
} else if (curHr > 18 && curHr < 24) {
  console.log('Boa noite')
} else {
    console.log('Já é madrugada, descanse um pouco');
}
console.log(`Agora é ${curHr}:${curSe} do dia ${curDt}/${curMt}/${curYr}`);