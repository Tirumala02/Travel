import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Function to dynamically add meta keywords
const addMetaKeywords = () => {
    const keywords = `
        Kumbh Mela, Prayagraj Kumbh Mela, Maha Kumbh Mela, Ardh Kumbh Mela, Triveni Sangam,
        Hindu pilgrimage, Kumbh Mela 2025, Prayagraj tourism, Holy bath, Shahi Snan, Makar Sankranti,
        Mauni Amavasya, Basant Panchami, Maghi Purnima, Maha Shivratri, Sacred rivers, Ganga river,
        Yamuna river, Saraswati river, Spiritual journey, Hindu rituals, Devotees gathering, Religious festival,
        Spiritual discourse, Cultural heritage, Indian culture, Heritage festival, Sadhus at Kumbh, Naga sadhus,
        Akharas at Kumbh, Kumbh traditions, Hindu mythology, Indian spiritual events, Prayagraj fairs, Religious tourism,
        Kumbh accommodation, Kumbh tent city, Kumbh mela schedule, Kumbh mela dates, Kumbh mela events,
        Kumbh mela history, Kumbh mela importance, Kumbh mela rituals, Bathing ghats, Holy dip, Kumbh mela registration,
        Prayagraj hotels, Pilgrim amenities, Ganga aarti, Indian festivals, Largest human gathering, Pilgrimage India,
        Holy cities of India, Prayagraj attractions, Prayagraj landmarks, Kumbh transportation, Kumbh travel guide,
        Pilgrimage planning, Kumbh photography, Religious harmony, Indian spirituality, Pilgrim camps, Tent accommodations,
        Festival India, Hindu festivals, Devotee services, Historical events India, Kumbh tourism packages, Kumbh festival highlights,
        Kumbh media coverage, Sacred sites, River confluence, Kumbh mela management, Crowd management, Kumbh security,
        Divine blessings, Ascetics at Kumbh, Religious processions, Kumbh mela tents, Spiritual seekers, Yoga and meditation,
        Kumbh festival camps, Prayagraj history, Heritage city Prayagraj, Pilgrim safety, Pilgrimage activities, Indian fairs,
        Cultural performances, Prayagraj religious sites, Religious gatherings, Festivals of faith, Kumbh attractions,
        Cultural tourism, Pilgrimage services, Divine confluence, Hindu traditions, Prayagraj events, Indian spirituality tours,
        Kumbh festival offerings, Prayagraj travel tips
    `;

    const metaTag = document.createElement('meta');
    metaTag.name = 'keywords';
    metaTag.content = keywords.trim();
    document.head.appendChild(metaTag);
};

// Add meta keywords to the document
addMetaKeywords();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
