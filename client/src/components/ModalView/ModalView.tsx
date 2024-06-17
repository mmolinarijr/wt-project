import { Modal, Chips, Loader, Divider } from 'monday-ui-react-core';
import { useEffect, useState } from 'react';
import { getWeather } from '../../api/weatherApi';
import { setRegionColor } from '../../utils/regionColor';
import type { ModalViewProps, WeatherProps } from '../../typing/modalViewType';
import './ModalView.css';

const ModalView = ({ isOpen, onClose, country }: ModalViewProps) => {
    const [weatherData, setWeatherData] = useState<WeatherProps | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchWeatherData = async () => {
            if (country?.column_values && country.column_values.length > 2) {
                const capitalCity = country.column_values[2]?.text;

                if (capitalCity) {
                    try {
                        const response = await getWeather(capitalCity);
                        setWeatherData(response);
                    } catch (error) {
                        console.error('Error fetching weather:', error);
                        setWeatherData(null);
                    }
                }

            }
            setIsLoading(false);
        };

        fetchWeatherData();
    }, [country]);

    const handleOnClose = () => {
        setWeatherData({ current: { temp_c: 0 }, location: { name: '' } });
        onClose();
    };

    if (!country || !country.column_values || country.column_values.length < 3) return null;

    return (
        <Modal
            title={country.name || 'Country'}
            show={isOpen}
            onClose={handleOnClose}>
            <Divider />

            {country.column_values[0].text ? (
                <Chips
                    label={country.column_values[0].text}
                    color={setRegionColor(country.column_values[0].text)}
                    showBorder
                    readOnly
                />
            ) : (
                <></>
            )}

            <br />
            <br />

            <div>
                <span>
                    <strong>Capital: </strong>
                    {country.column_values[2].text || 'No Capital'}
                </span>{' '}
                <br />
                <span>
                    <strong>Sub Region: </strong>
                    {country.column_values[1].text || 'No Sub Region'}
                </span>{' '}
                <br />
                <span>
                    <strong>Phone Code: </strong>
                    {country.column_values[7].text}
                </span>{' '}
                <br />
                <span>
                    <strong>Currency: </strong>
                    {country.column_values[8].text + ' - ' + country.column_values[9].text}
                </span>
            </div>

            {isLoading ? (
                <>
                    <br />
                    <Loader size={20} />
                </>
            ) : weatherData ? (
                <h4>
                    Weather Temperature now:{' '}
                    {weatherData.current.temp_c !== 0 ? (
                        `${weatherData.current.temp_c} º Celsius`
                    ) : (
                        <span className='error'>No Data Available</span>
                    )}
                </h4>
            ) : (
                <>
                    <h4>
                        Weather Temperature now: <span className='error'>Error: Server Unavailable</span>{' '}
                    </h4>
                </>
            )}
        </Modal>
    );
};

export default ModalView;
