import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

const apiKey = process.env.REACT_APP_NEWS_API_KEY;

const News = () => {
    const [selectedOption, setSelectedOption] = useState('latest'); // Default option
    const [newsData, setNewsData] = useState([]);
    const [res, setRes] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const url = `https://google-news13.p.rapidapi.com/${selectedOption}?lr=en-US`;
                const headers = {
                    'x-rapidapi-host': 'google-news13.p.rapidapi.com',
                    'x-rapidapi-key': apiKey,
                };
                const response = await fetch(url, { headers });
                const parsedData = await response.json();

                if (parsedData.status !== 'success') {
                    setRes('Failed to fetch news');
                } else {
                    setNewsData(parsedData.items);
                    setRes(''); 
                }

                console.log(url);
                console.log(parsedData);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, [selectedOption]);

    return (
        <div className='news-page'>
            <div className="sidebar">
                <h3>Select Category:</h3>
                <select onChange={handleOptionChange} value={selectedOption}>
                    <option value="latest">Latest</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="world">World</option>
                    <option value="business">Business</option>
                    <option value="health">Health</option>
                    <option value="sport">Sport</option>
                    <option value="science">Science</option>
                    <option value="technology">Technology</option>
                </select>
            </div>

            <div className='main-container'>
                <p>{res}</p>
                <div className='news-list'>
                    {newsData && newsData.map((article, index) => (
                        <NewsCard key={index} article={article} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default News;