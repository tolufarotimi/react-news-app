// newsService.js
const newsAPIKey = '988add00124e467dba58c1b9349417fc'; 
//const theGuadianKey = '5e2bb17b-a822-40b0-a5c0-d40e872e3bf8';


async function fetchNewsFromNewsApi() {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us', {
    headers: {
      'X-Api-Key': newsAPIKey,
    },
  });
  const data = await response.json();
  return data.articles;
}

// async function fetchNewsFromNewscred() {
//   const response = await fetch('https://api.example.com/newscred/articles', {
//     headers: {
//       'Authorization': `Bearer ${apiKey}`,
//     },
//   });
//   const data = await response.json();
//   return data.articles;
// }

// async function fetchNewsFromOpenNews() {
//   const response = await fetch('https://opennews.example.com/api/news', {
//     headers: {
//       'Authorization': `Bearer ${apiKey}`,
//     },
//   });
//   const data = await response.json();
//   return data.articles;
// }

export { fetchNewsFromNewsApi };
