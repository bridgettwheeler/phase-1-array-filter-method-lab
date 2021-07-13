//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//const result = words.filter(word => word.length > 6);

function findMatching(array, name) {
     return array.filter(element => element.toUpperCase() === name.toUpperCase())
}
function fuzzyMatch(array, letters) {
    return array.filter(element => element.slice(0,letters.length).toUpperCase() === letters.toUpperCase())
}
function matchName(array, string) {
    return array.filter(object => object.name === string)

}

