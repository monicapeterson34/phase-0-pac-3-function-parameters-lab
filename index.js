function introduction(name1) {
    return `Hi, my name is ${name1}.`
}

function introductionWithLanguage (name1, language) {
    return `Hi, my name is ${name1} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional (name1, language = "JavaScript") {
    return `Hi, my name is ${name1} and I am learning to program in ${language}.`
}