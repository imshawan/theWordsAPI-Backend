# theWordsAPI - BackEnd

TheWordsAPI is a free English-English dictionary API developed for educational purposes.

## Testing

```bash
npm test
```

## Local Run

```bash
npm install && npm start
```
## API Usage :: Methods supported -> ['GET']

Using Curl:
```
curl https://the-words.herokuapp.com/api/v2/definitions/en-US/entries/hello
   -H "Accept: application/json" 
```

Response:

```
{
    "id": 27833,
    "word": "hello",
    "meanings": [
        {
            "partOfSpeech": "noun",
            "definitions": [
                {
                    "definition": "An utterance of “hello”; a greeting.",
                    "synonyms": [
                        "greeting",
                        "welcome",
                        "salutation",
                        "saluting",
                        "hailing",
                        "address",
                        "hello",
                        "hallo"
                    ],
                    "example": "she was getting polite nods and hellos from people"
                }
            ]
        },
        {
            "partOfSpeech": "intransitive verb",
            "definitions": [
                {
                    "definition": "Say or shout “hello”; greet someone.",
                    "example": "I pressed the phone button and helloed"
                }
            ]
        },
        {
            "partOfSpeech": "exclamation",
            "definitions": [
                {
                    "definition": "Used as a greeting or to begin a phone conversation.",
                    "example": "hello there, Katie!"
                }
            ]
        }
    ]
}
```


## Deployment

After signing up on Heroku, create a new app, and proceed to download Heroku CLI

```bash 
heroku login -i
heroku builds:create -a <name_of_your_app>
```
