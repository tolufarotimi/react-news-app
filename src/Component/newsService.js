import axios from 'axios';

const apiKey = '988add00124e467dba58c1b9349417fc';
//const nyapiKey = 'yKCQp5kkoGA6aqsvA8BLBUN7ReybfHop';

// Define your NewYorkTime API key and endpoint
const NYTapiKey = 'yKCQp5kkoGA6aqsvA8BLBUN7ReybfHop';



// Function to fetch news from NewsAPI
export async function fetchNewsFromNewsAPI() {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=newsapi&apiKey=${apiKey}`);
    if (response.status === 200) {
      return response.data.articles;
    }
  } catch (error) {
    console.error('Error fetching news from NewsAPI:', error);
  }
  return [];
}

export async function fetchNewsFromOpenNews() {
  try {
    const response = await axios.get('https://api.opennewsapi.com/v1/articles', {
      params: {
        apiKey,
        // Add any additional query parameters as needed
      },
    });

    if (response.status === 200) {
      return response.data.articles;
    }
  } catch (error) {
    console.error('Error fetching news from OpenNews:', error);
  }
  return [];
}

// Function to fetch news from NewYorkTime
export async function fetchNewsFromNewYorkTime() {
  try {
    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${NYTapiKey}`);
    if (response.status === 200) {
      return response.data.articles;
    }
  } catch (error) {
    console.error('Error fetching news from NewsAPI:', error);
  }
  return [];
}

