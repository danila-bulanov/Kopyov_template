let btn = document.getElementById('but')
let table = document.getElementById('tab')
let btn2 = document.getElementById('but2')
let table2 = document.getElementById('tab2')
let btn3 = document.getElementById('but3')
let table3 = document.getElementById('tab3')
let block = document.getElementById('block5')
let block6 = document.getElementById('block6')
let block7 = document.getElementById('block7')
let btn4 = document.getElementById('but4')
let table4 = document.getElementById('tab4')
let block8 = document.getElementById('block8')
let blocklist = document.getElementById('block-list')


btn.onclick = function(){
	btn.style.display = 'none'
  table.style.maxHeight = '999px'
  block5.style.maxHeight = '999px'
	blocklist.style.maxHeight = '999px'
}

btn2.onclick = function(){
  btn2.style.display = 'none'
  table2.style.maxHeight = '999px'
  block6.style.maxHeight = '999px'
}

btn3.onclick = function(){
  btn3.style.display = 'none'
  table3.style.maxHeight = '999px'
  block7.style.maxHeight = '999px'
}
btn4.onclick = function(){
  btn4.style.display = 'none'
  table4.style.maxHeight = '999px'
  block8.style.maxHeight = '999px'
}
