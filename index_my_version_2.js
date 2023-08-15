// if possible use const else let
// DOM manipulation is constly 
myLeads = []
const inputBtn = document.getElementById("input-btn")       //const cannot be reassigned
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
if(localStorage.length>0){
    for (let i=0;i<localStorage.length;i++){
        myLeads.push(localStorage.getItem(`myLeads${i}`))
    }
    renderLeads()
}
inputBtn.addEventListener("click", function(){
    if (!inputEl.value==""){
        myLeads.push(inputEl.value)
        inputEl.value = ""
        renderLeads() 
    }
})

function renderLeads(){
    let listItems = ""
    for(let i=0;i<myLeads.length;i++){
        localStorage.setItem(`myLeads${i}`,myLeads[i])
        listItems += `
            <li>
                <a href='${myLeads[i]}' target='_blank'>
                    ${myLeads[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = listItems
}
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
    renderLeads()
})

deleteBtn.addEventListener("click",function(){
    myLeads = []
    ulEl.innerHTML = ""
    localStorage.clear()
})
