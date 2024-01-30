export const addData = (obj) => {
    return { type: "ADD", payload: obj }
}
export const DeleteData = (index) => {
    return { type: "DELETE", payload: index };
};
export const EditData = (index, item) => {
    return { type: "EDIT", payload: { editIndex: index, record: item } }
}