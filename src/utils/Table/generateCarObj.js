// генерирую новый пустой объект
// что-бы эталонно делать новые записи в базу объектов

export const generateCarObj = (car) => {
    let newCarObj = {};

    Object.keys(car).map(key => newCarObj = {...newCarObj, [key]: ''});

    return newCarObj;
}