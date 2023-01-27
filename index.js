import fetch from "node-fetch";
import cheerio from "cheerio";

// function to get the raw data
const getRawData = (URL) => {
   return fetch(URL)
      .then((response) => response.text())
      .then((data) => {
         return data;
        }).then(data => {
            return data;
        });
};

// URL for data

const PATTERN = / war /i;

// start of the program
const scrap = async (url, level = 1) => {

   if(level > 2) return;
      try{

         const page = await getRawData(url);
         const $ = cheerio.load(page);
      
         // Analyse paragraphs
      
         var paragraphs = $('p').each((i,el) => {
            let p = $(el).text();
            let matches = p.match(PATTERN);
            if(matches) console.log(`source : ${url}`,matches);
         });
      
         // Check abjacent pages
      
         var links = $('a').each((i,el) => {
            let link = $(el).attr('href');
      
            scrap(link, level + 1);
         })

      }catch(err){}
};

const filter1 = () => {
   
}; 

scrap("https://www.britannica.com/topic/ARPANET"); 
scrap("https://en.wikipedia.org/wiki/ARPANET"); 
scrap("https://study.com/academy/lesson/arpanet-definition-history-quiz.html"); 