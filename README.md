# Car Catalogue App

A modern, responsive car rental and catalogue application built with Next.js for browsing and discovering cars.

## Overview

The Car Catalogue App is a sleek web application that allows users to explore a comprehensive database of vehicles. Search by manufacturer and model, filter by fuel type and year of production, and view detailed information about each car including specifications, MPG ratings, transmission type, drive system, and automatically calculated rental prices.

## Features

- **Advanced Search**: Search cars by manufacturer and model with an intuitive autocomplete interface
- **Smart Filtering**: Filter vehicles by fuel type (Gas, Electricity) and year of production (2015-2023)
- **Detailed Car Information**: View comprehensive specs including MPG, cylinders, transmission, drive type, and more
- **Dynamic Pricing**: Automatic rental price calculation based on vehicle specs and age
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Pagination**: Load more cars with the "Show More" feature
- **Real-time Search**: Instant feedback as you type

## Tech Stack

- **Frontend**: React 18, Next.js 13
- **Styling**: Tailwind CSS with PostCSS
- **Language**: TypeScript
- **UI Components**: HeadlessUI
- **Data Source**: Cars by API Ninjas (RapidAPI)
- **Authentication**: NextAuth.js (configured)

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd car_app

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will auto-update as you make changes.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app              - Next.js app directory with pages and layouts
/components       - Reusable React components (SearchBar, CarCard, Filters, etc.)
/constants        - Application constants (manufacturers list, fuel types, etc.)
/types            - TypeScript type definitions
/utils            - Utility functions (API calls, price calculation, etc.)
/public           - Static assets
```

## Key Pages

- **Home** (`/`) - Main catalogue page with search, filters, and car listings
- **Auth** (`/auth/signin`, `/auth/signup`) - Authentication pages

## API Integration

The app integrates with the [Cars by API Ninjas](https://rapidapi.com/api-ninjas/api/cars-by-api-ninjas) REST API, which provides comprehensive vehicle data including specifications and specifications.

## Features in Detail

### Search
- Type manufacturer name (e.g., "Volkswagen", "BMW", "Honda")
- Type car model name (e.g., "Tiguan", "Golf", "Civic")
- Supports partial matches with smart filtering

### Filters
- **Fuel Type**: Gas or Electric vehicles
- **Year**: Filter by year of production from 2015-2023

### Car Details Displayed
- Model and Make (Manufacturer)
- Year of Production
- Transmission Type
- Drive System (FWD, RWD, AWD, etc.)
- MPG Ratings (City, Highway, Combined)
- Engine Specifications
- Rental Price (dynamically calculated)

## Deployment

This app is ready to be deployed on [Vercel](https://vercel.com) (recommended for Next.js apps) or any other Node.js hosting platform.

```bash
# Deploy to Vercel
npm i -g vercel
vercel
```

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.

