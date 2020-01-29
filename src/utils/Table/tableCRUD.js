export const addItemUtil = (cars, car) => {
    if (!cars || !car) {
        return [];
    }

    const newId = [...cars][[...cars].length - 1].id + 1;
    const newCars = [...cars];

    newCars.push({...car, id: newId})

    return newCars;
}

export const updateItemUtil = (cars, car) => {
    if (!cars || !car) {
        return [];
    }

    let newCars = [...cars];

    [...cars].map((item, id) => {
        if (item.id === car.id) {
            newCars[id] = car;
        }
    })

    return newCars;
}

export const removeItemUtil = (cars, car) => {
    if (!cars || !car) {
        return [];
    }

    let newCars = [...cars];

    [...cars].map((item, id) => {
        if (item.id === car.id) {
            newCars.splice(id, 1);
        }
    })

    return newCars;
}