export const searchItemUtil = (data, value) => {

    let flag = false;
    let result = [];

    data.map(obj => {
        Object.keys(obj).map(key => {
            if (obj[key].toString().toLowerCase() === value.toLowerCase()) {
                flag = true;
            }
        })

        if (flag) {
            result = [...result, obj];
            flag = false;
        }
    })

    if (result.length > 0) {
        return result;
    }

    return data;
}