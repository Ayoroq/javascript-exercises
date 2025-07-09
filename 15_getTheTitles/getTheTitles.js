const getTheTitles = function(array) {
    let titles = [];
    for (book in array) {
        titles.push(array[book].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
