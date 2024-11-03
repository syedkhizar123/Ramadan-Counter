var ramadan2025 = "28 February 2025 12:00 AM"
var date2 = new Date(ramadan2025)
var date1 = new Date()
var diff = (date2 - date1)

var months = Math.floor(diff/(1000*60*60*24*30))
var days = Math.round(diff/(1000*60*60*24))-(30*months)
var hrs = Math.round(diff/(1000*60*60)) - Math.round((diff/(1000*60*60*24))-1)*24
var min = Math.round(diff/(1000*60)) 
document.getElementById("months").innerHTML = (`${months}`)
document.getElementById("days").innerHTML = (`${days}`)
document.getElementById("hrs").innerHTML = (`${hrs}`)
document.getElementById("min").innerHTML = (`${min}`)