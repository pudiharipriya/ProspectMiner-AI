# ProspectMiner AI

ProspectMiner AI is a simple AI-powered lead scraping and enrichment project.

## Project Description
This project scrapes business names from Google Maps based on a search query, enriches the leads with sample service data, scores them, and exports the results to a CSV file.

This is a demo project built for academic review and evaluation purposes.

## Features
- Google Maps business scraping
- Lead enrichment (services & email guess)
- Lead scoring
- CSV export
- Simple API endpoint

## Tech Stack
- Node.js
- Express.js
- Puppeteer
- CSV Writer

## Installation
cd backend
npm install

## Run the Project
npm start

## Usage
Open browser and visit:
http://localhost:3000/scrape?q=dentists in chicago

## Output
- JSON response in browser
- leads.csv file generated in backend folder

## Author
Haripriya


//prospectminer-ai
├── backend
├── frontend
├── .env
└── README.md
