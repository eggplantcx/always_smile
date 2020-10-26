let btn = document.getElementById("enableBtn");
chrome.storage.local.get(null, (i)=>btn.value = i.enabled ? "Disable" : "Enable");
btn.onclick = ()=>{
    if(btn.value == "Disable"){
        chrome.storage.local.set({enabled:false});
        btn.value = "Enable";
    }
    else{
        chrome.storage.local.set({enabled:true});
        btn.value = "Disable";
    }
    chrome.storage.local.get(null, (i)=>console.log("Button -> " + i.enabled));
}