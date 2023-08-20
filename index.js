// if possible use const else let
// DOM manipulation is constly 
myLeads = []
const inputBtn = document.getElementById("input-btn")       //const cannot be reassigned
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")

//myLeads = JSON.stringify(myLeads)     array into string
//myLeads = JSON.parse(myLeads)         string into array

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage){     // is laadsFromLocalStorage truthy?
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click", function(){
    if (!inputEl.value==""){
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads) 
    }
})

function render(leads){
    let listItems = ""
    for(let i=0;i<leads.length;i++){
        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
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
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        inputEl.value = ""
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
    
})

deleteBtn.addEventListener("dblclick",function(){
    myLeads = []
    // ulEl.innerHTML = ""
    localStorage.clear()
    render(myLeads)
})
