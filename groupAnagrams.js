/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let objetoAnagrama = {};
    let anagrama;
    strs.map(function(value, index){
        anagrama = value.split('').sort().join('')
        objetoAnagrama[index] = anagrama;
    })
    let valoresAnagram = Object.values(objetoAnagrama);
    let anagramasDistintos = [... new Set(valoresAnagram)];
    let arrayFinal = [];

    anagramasDistintos.map(function(obj, indice){
        let arrayPorAnagrama = [];
        let arrayBase = []
        valoresAnagram.filter((value, index) => {
            if(obj.toString() == value.toString())
            return arrayPorAnagrama.push(index);
        })

        arrayPorAnagrama.map(function(value, index){
            arrayBase.push(strs[value]);
            arrayFinal.push(arrayBase);
        })
    })
    arrayFinal = [... new Set(arrayFinal)];
    return arrayFinal;
};

//groupAnagrams(["eat","tea","tan","ate","nat","bat"])