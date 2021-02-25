// You should implement your task here.

module.exports = function towelSort(matrix) {
    debugger
    if(!matrix || matrix.length === 0) return [];

    const res = matrix.reduce((acc, el, i) => {
        if (i % 2 === 0) {
            return acc = [...acc, ...el];
        } else return acc = [...acc, ...el.reverse()]

    })
    return res;
}


