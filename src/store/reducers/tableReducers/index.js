import {ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, SEARCH_ITEM} from "../../actions/Table";
import {addItemUtil, removeItemUtil, updateItemUtil} from "../../../utils/Table/tableCRUD";

const initialContentCharacteristic = {
    id: 'id',
    name: 'Марка',
    model: 'Модель',
    bodyType: 'Тип кузова',
    transmission: 'Тип трансимиссии',
    engine: 'Двигатель',
    mileage: 'Пробег',
    color: 'Цвет',
    // configMenu: 'Настройка'
};

const initialContentCars = [
    {
        id: 0,
        name: 'VW',
        model: 'passat',
        bodyType: 'sedan',
        transmission: 'mechanical',
        engine: 'BSE 1.6',
        mileage: 170000,
        color: 'black'
    },
    {
        id: 1,
        name: 'VW',
        model: 'polo',
        bodyType: 'universal',
        transmission: 'robot',
        engine: 'AER 1.8T',
        mileage: 90321,
        color: 'white'
    },
    {
        id: 3,
        name: 'Skoda',
        model: 'octavia',
        bodyType: 'sedan',
        transmission: 'automatic',
        engine: 'BSE 1.6T',
        mileage: 110400,
        color: 'black'
    },
    {
        id: 4,
        name: 'Volvo',
        model: 's40',
        bodyType: 'sedan',
        transmission: 'mechanical',
        engine: '2.3T',
        mileage: 235400,
        color: 'blue'
    },
    {
        id: 5,
        name: 'Mazda',
        model: '6',
        bodyType: 'sedan',
        transmission: 'mechanical',
        engine: '2.5T',
        mileage: 210453,
        color: 'black'
    },
    {
        id: 6,
        name: 'Nissan',
        model: 'Qashqai',
        bodyType: 'crossover',
        transmission: 'mechanical',
        engine: '1.8',
        mileage: 3289,
        color: 'white'
    },
    {
        id: 7,
        name: 'Kia',
        model: 'cerato',
        bodyType: 'hatchback',
        transmission: 'automatic',
        engine: '1.4',
        mileage: 145331,
        color: 'white'
    },
    {
        id: 8,
        name: 'Toyota',
        model: 'corola',
        bodyType: 'sedan',
        transmission: 'automatic',
        engine: '1.6',
        mileage: 147070,
        color: 'blue'
    },
    {
        id: 9,
        name: 'Lada',
        model: 'priora',
        bodyType: 'sedan',
        transmission: 'mechanical',
        engine: '1.4',
        mileage: 95664,
        color: 'black'
    },
    {
        id: 10,
        name: 'Range Rover',
        model: 'Sport',
        bodyType: 'crossover',
        transmission: 'robot',
        engine: '2.5',
        mileage: 121067,
        color: 'black'
    },
]

export const initialState = {
    data: {
        characteristic: {...initialContentCharacteristic},
        cars: [...initialContentCars],
    },
    searchString: ''
}

export function defaultReducers(state = initialState, action) {

    const data = {...state.data};
    const cars = [...data.cars];

    let newCar = {};
    let newCars = [];

    let searchString = '';

    switch (action.type) {

        case ADD_ITEM:

            newCar = action.data
            newCars = addItemUtil(cars, newCar);

            return {
                ...state,
                ...{
                    data: {
                        ...data,
                        cars: [...newCars]
                    }
                }
            }

        case UPDATE_ITEM:

            newCar = action.data;
            newCars = updateItemUtil(cars, newCar);

            return {
                ...state,
                ...{
                    data: {
                        ...data,
                        cars: [...newCars]
                    }
                }
            }

        case REMOVE_ITEM:

            newCar = action.data;
            newCars = removeItemUtil(cars, newCar);

            return {
                ...state,
                ...{
                    data: {
                        ...data,
                        cars: [...newCars]
                    }
                }
            }

        case SEARCH_ITEM:

            searchString = action.data;

            return {
                ...state,
                ...{
                    searchString: searchString
                }
            }

        default:
            return state
    }
}