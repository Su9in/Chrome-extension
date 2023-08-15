// if possible use const else let

const inputBtn = document.getElementById("input-btn")       //const cannot be reassigned
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
let myLeads = []

inputBtn.addEventListener("click", function(){
    if (!inputEl.value==""){
        myLeads.push(inputEl.value)
        //ulEl.innerHTML = ""
        //ulEl.innerHTML += "<li>" + inputEl.value + "</li>"
    }
})

let listItems = ""
for(let i=0;i<myLeads.length;i++){
    listItems += "<li>" + myLeads[i] + "</li>"
}
ulEl.innerHTML = listItems
/* 
for(let i=0;i<myLeads.length;i++){
    FIRST METHOD:
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

    SECOND METHOD:
    const li = document.createElement('li')
    li.textContent = myLeads[i]
    ulEl.append(li)
}*/


tabBtn.addEventListener("click",function(){
    myLeads.push(document.URL)
    ulEl.innerHTML = ""
    for(let i=0;i<myLeads.length;i++){
        ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    }
    //ulEl.innerHTML += "<li>" + document.URL + "</li>"
})

deleteBtn.addEventListener("click",function(){
    myLeads = []
    ulEl.innerHTML = ""
})
