function stripUrlParams(url, paramsToStrip = []) {
   const regexForUrlQueryStrings = /(\?|\&)\w+\=\w+/g;
   const urlQueryStrings = url.match(regexForUrlQueryStrings);
   const keyStore = {}
   let resultUrl = url;

   if (urlQueryStrings) {
      for (let i = 0; i < urlQueryStrings.length; i++) {
         const pair = urlQueryStrings[i].slice(1);
         const key = pair.split('=')[0];

         if (keyStore[key] || (paramsToStrip.indexOf(key) >= 0)) {
            resultUrl = resultUrl.replace(urlQueryStrings[i], "");
         }
         else {
            keyStore[key] = pair.split('=')[1];
         }
      }
   }

   return resultUrl;
}
