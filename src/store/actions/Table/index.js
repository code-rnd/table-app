export const ADD_ITEM = "ADD_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SEARCH_ITEM = "SEARCH_ITEM";

export const addItem = item => ({
    type: ADD_ITEM,
    data: item
});

export const updateItem = item => ({
    type: UPDATE_ITEM,
    data: item
});

export const removeItem = item => ({
    type: REMOVE_ITEM,
    data: item
});

export const searchItem = string => ({
    type: SEARCH_ITEM,
    data: string
})