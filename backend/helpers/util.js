const _ = require('lodash');
const x2jConverter = require('xml-js');


isValidInput = (input) => {
    let validInput = true;
    if (_.isNull(input) || _.isEmpty(input) || _.isUndefined(input)) {
        validInput = false;
    }

    return validInput;
}

convertXmlToJson = (xml) => {
    return (x2jConverter.xml2json(xml, { compact: true, spaces: 4 }));
}


module.exports = { 
    isValidInput, 
    convertXmlToJson
}