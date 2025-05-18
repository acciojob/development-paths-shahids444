//your JS code here. If required.
let elem = document.getElementsByClassName("list")

Array.from(elem).forEach((ele)=>{
	console.log(ele)
	ele.textContent += " development"
})