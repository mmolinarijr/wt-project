import type { ApiResponse } from './mondaySdkType';

export interface ModalViewProps {
    isOpen: boolean;
    onClose: () => void;
    country: ApiResponse;
}

export interface WeatherProps {
    current: {
        temp_c: number;
    };
    location: {
        name: string;
    };
}