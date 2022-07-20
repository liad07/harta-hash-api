const url=new URL(window.location.href)

var str=url.searchParams.get("encode").trim()
var newstr=""
    for (let i = 0; i < str.length; i++) {
        let ascii = str.charAt(i).charCodeAt(0);
        newstr+=String.fromCharCode(ascii-1)+""+String.fromCharCode(ascii+1)
    }
//אין צורך לבדוק שהמספר זוגי הרי כל מספר אי זוגי או זוגי כפול 2 הוא זוגי
document.title=newstr
document.write(newstr)
