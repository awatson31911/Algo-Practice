function stripUrlParams(url, paramsToStrip) {
    let regexForUrlQueryStrings = /(\?|\&)\w+\=\w+/g;
    let urlQueryStrings = url.match(regexForUrlQueryStrings);
    let resultUrl = "";
    let keyStore = {}

    for (let i = 0; i < urlQueryStrings.length; i++) {
        const pair = urlQueryStrings[i].slice(1);
        const key = pair.split('=')[0]

         if (keyStore[key]) {
            resultUrl = url.replace(urlQueryStrings[i], "");
         } 
         else {
            keyStore[key] = pair.split('=')[1];
         }
    }
    
    
    
    return resultUrl;
}

console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2'));
