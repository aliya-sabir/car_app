import { CarProps, FilterProps } from "@/types";

const basePricePerDay = 50; // Base rental price per day in dollars
const mileageFactor = 0.1; // Additional rate per mile driven
const ageFactor = 0.05; // Additional rate per year of vehicle age

export const calculateCarRent = (city_mpg: number, year: number) => {
  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const apiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;
  if (!apiKey) {
    throw new Error(
      'NEXT_PUBLIC_RAPID_API_KEY is not set. Please add your RapidAPI key to .env.local.'
    );
  }

  // Set the required headers for the API request
  const headers: HeadersInit = {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  };

  // Build query params dynamically, only including non-empty values
  const params = new URLSearchParams();
  if (manufacturer) params.append('make', manufacturer);
  if (year) params.append('year', year.toString());
  if (model) params.append('model', model);
  if (limit) params.append('limit', limit.toString());
  if (fuel) params.append('fuel_type', fuel);

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${params.toString()}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  return result;
}