// проверям объект, на пустоту
// каждого лежащего в нём ключа
export const checkForEmptiness = (obj) => {
    let count = 0;

    Object.keys(obj).map(key => {
        if (obj[key] !== '') {
            count = count + 1
        }
    })

    if (count) {
        return false
    }

    return true
}