import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category = "general" }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Access the API key from environment variables
        const apiKey = import.meta.env.VITE_API_KEY;

        // Check if API key is defined
        if (!apiKey) {
            console.error('API key is missing. Please check your .env file.');
            return;
        }

        // Construct the API URL
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        console.log('Fetching from URL:', url); // Log the URL to verify

        // Fetch news articles from the API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'ok') {
                    console.log('Fetched articles:', data.articles); // Log the data to verify
                    setArticles(data.articles);
                } else {
                    console.error('Error fetching news:', data.message);
                }
            })
            .catch(error => console.error('Error fetching the news:', error));
    }, [category]);

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {articles.length === 0 ? (
                <p className="text-center">No articles available.</p>
            ) : (
                articles.map((news, index) => (
                    <NewsItem
                        key={index}
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage} // Image URL from API
                        url={news.url}
                    />
                ))
            )}
        </div>
    );
}

export default NewsBoard;

