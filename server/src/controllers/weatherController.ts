import { Request, Response } from 'express';
import axios from 'axios';
import type { WeatherResponse } from '../types';

const apiKey = process.env.WEATHER_API_KEY || 'a5b44db005ad4c6cacb195319241206';
const apiUrl = process.env.WEATHER_API_URL || 'http://api.weatherapi.com/v1/current.json';

export const getWeather = async (req: Request, res: Response) => {
    const { city } = req.query;

    try {
        const response = await axios.get<WeatherResponse>(apiUrl, {
            params: {
                q: city,
                key: apiKey,
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: `Failed to fetch weather data`, error: error});
        console.error('Failed to fetch weather data', error);
    }
};
