import React from 'react';

const NewsCard = ({ article }) => {
    // Convert timestamp to Date object
    const date = new Date(parseInt(article.timestamp));

    // Format date and time
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    const formattedTime = `${date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}`;

    return (
        <div className="news-card">
            <div className="title-date">
                <h3>{article.title}</h3>
                <p className='date'>{formattedTime} / {formattedDate}</p>
            </div>
            <div className="content-link">
                <p>{article.snippet}</p>
                <a href={article.newsUrl} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        </div>
    );
};

export default NewsCard;