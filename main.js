const countWords = string => {
    let output = {};
    const splitString = string.split(" ");
    const words = splitString.filter(word => word !== "");
    words.map(word => output[word] === undefined ? output[word] = 1 : output[word] += 1);
    return output
};

console.log(countWords('titi toto Tata Titi titi     ti ti'));