import axios from "axios";
import cheerio from "cheerio";

const VOGUE_SEARCH_URL = "https://www.vogue.com/fashion/trends";

const getTopArticles = async () => {
  try {
    const { data } = await axios.get(VOGUE_SEARCH_URL);
    const $ = cheerio.load(data);

    const articleUrls = [];
    $("a").each((i, elem) => {
      if (i > 30 && i < 34) {
        const url = $(elem).attr("href");
        if (url && url.startsWith("/")) {
          articleUrls.push(`https://www.vogue.in${url}`);
        }
      }
    });
    return articleUrls;
  } catch (error) {
    console.error("Error fetching article URLs:", error);
    return [];
  }
};

const scrapeArticleText = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    const paragraphs = $('.body__inner-container');
    const articleText = [];
    paragraphs.each((i, elem) => {
      articleText.push($(elem).text());
    });
    return articleText.join('\n');
  } catch (error) {
    console.error('Error scraping article text:', error);
    return '';
  }
};

export async function GET(req) {
  try {
    const urls = await getTopArticles();
    const articles = await Promise.all(urls.map(scrapeArticleText));

    return new Response(JSON.stringify({ urls, articles }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
