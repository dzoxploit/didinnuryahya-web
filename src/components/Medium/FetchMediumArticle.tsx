import axios from "axios";

const fetchMediumArticles = async () => {
  try {
    // Replace `medium-username` with the actual username or use a suitable API
    const response = await axios.get(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@didinnuryahya_94403"
    );
    return response.data.items; // Assuming 'items' contains the articles
  } catch (error) {
    console.error("Error fetching Medium articles:", error);
    return [];
  }
};

export default fetchMediumArticles;
