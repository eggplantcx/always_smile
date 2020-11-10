chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.local.set({enabled:true});
});
let e;
chrome.webRequest.onBeforeRequest.addListener((d)=>{
    chrome.storage.local.get(["enabled"], (i)=>e = i.enabled);
    if(e == true){
        console.log("redirected " + d.url);
        return{redirectUrl: d.url.replace("www", "smile")};
    }
}, 
{urls:["*://www.amazon.com/", "*://www.amazon.com/*/dp/*, *://www.amazon.com/gp/cart/*"]}, 
["blocking"]);