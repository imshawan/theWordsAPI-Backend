const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter_1 = new FileSync('./resources/en-en/dictionary/dummy_database.json')
const db_1 = low(adapter_1)

const Audio_adapter_1 = new FileSync('./resources/en-en/audio_dictionary/dummy_audio_dictionary.json')
const audio_db_1 = low(Audio_adapter_1)

function getDefinition(queryString){
    var str = queryString[0].toLowerCase();
    var errorString = {};
    if (!str){
        errorString = {
            status: "error",
            message: "You passed on a blank query, please pass a query to be searched for."
        };
    }
    else{
        errorString = {
            status: "error",
            message: "Your query '" + str + "' was not found in our database"
        };
    }

    var defination_arr_1 = db_1.get('dictionary');

    var field_1 = defination_arr_1.find({"word": str}).value();
    if (field_1 == null || field_1 == []){
        return errorString
    }
    else{
        return field_1;
    }
}

function getAudioSpeech(queryString){
    var str = queryString[0].toLowerCase();
    var errorString = {};
    if (!str){
        errorString = {
            status: "error",
            message: "You passed on a blank query, please pass a query to be searched for."
        };
    }
    else{
        errorString = {
            status: "error",
            message: "Your query '" + str + "' was not found in our database"
        };
    }
    
    var audio_arr_1 = audio_db_1.get('audio_dictionary');

    var field_1 = audio_arr_1.find({"word": str}).value();
    if (field_1 == null || field_1 == []){
        return errorString;
    }
    else{
        return field_1;
    }
}

module.exports = {getDefinition, getAudioSpeech};