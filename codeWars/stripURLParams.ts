function stripUrlParams (url: string, paramsToStrip?: string[] )  {
   const patternFirstParam = '/\?\w+\=\w+\=/g';
   const patternMidParam = '/\=\w+\=\w+\=/g';
   const patternLastParam = '/\=\w+\=\w+\W*/g';

   return [url.match(patternFirstParam), url.match(patternMidParam), url.match(patternLastParam)]

}

stripUrlParams('www.codewars.com?a=1&b=2&a=2')