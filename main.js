const url=new URL(window.location.href)

var str=url.searchParams.get("encode").trim()
var newstr=""
var color=""
    for (let i = 0; i < str.length; i++) {
        let ascii = str.charAt(i).charCodeAt(0);
        newstr+=String.fromCharCode(ascii-1)+""+String.fromCharCode(ascii+1)
    }
document.write(newstr)
