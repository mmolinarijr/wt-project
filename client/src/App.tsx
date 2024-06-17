import { useState, useEffect } from 'react';
import 'monday-ui-react-core/tokens';
import { Flex } from 'monday-ui-react-core';
import SearchBar from './components/SearchBar/SearchBar';
import DataTable from './components/DataTable/DataTable';
import ModalView from './components/ModalView/ModalView';
import { fetchBoardItems, startContextListener } from './api/mondaySdk';
import type { ApiResponse, Item } from './typing/mondaySdkType';

function App() {
    const [data, setData] = useState<Item[]>([]);
    const [filteredData, setFilteredData] = useState<Item[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState({} as ApiResponse);
    const [modalOpen, setModalOpen] = useState(false);
    const [context, setContext] = useState<number | void>(0);

    useEffect(() => {
        startContextListener((res) => {
            setContext(Number(res.data.boardId));
        });
    });

    useEffect(() => {
        const fetchData = async () => {
            if (typeof context === 'number' && context > 0) {
                const mondayData = await fetchBoardItems(context);

                if (mondayData) {
                    setData(mondayData);
                    setFilteredData(mondayData);
                }
            }
        };

        fetchData();
    }, [context, data]);

    useEffect(() => {
        setFilteredData(
            data.filter((country: Item) => {
                const searchTermLower = searchTerm.toLowerCase();

                return (
                    country.name.toLowerCase().includes(searchTermLower) ||
                    country.column_values
                        .find((cv) => cv.id === 'region')
                        ?.text.toLowerCase()
                        .includes(searchTermLower) ||
                    country.column_values
                        .find((cv) => cv.id === 'capital')
                        ?.text.toLowerCase()
                        .includes(searchTermLower)
                );
            })
        );
    }, [searchTerm, data]);

    const handleRowClick = (country: ApiResponse) => {
        setSelectedCountry(country);
        setModalOpen(true);
    };

    return (
        <Flex
            gap={Flex.gaps.SMALL}
            direction={Flex.directions.COLUMN}>
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <DataTable
                data={filteredData}
                onRowClick={handleRowClick}
            />

            <ModalView
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                country={selectedCountry}
            />
        </Flex>
    );
}

export default App;
