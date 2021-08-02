# theWordsAPI - BackEnd

TheWordsAPI is a free English-English dictionary API developed for educational purposes.


>  **Important Note:** Only dummy database (100 entries each) is provided with this source code, please prepare your own database for deployment purposes.

## Testing

```bash
npm test
```

## Local Run

```bash
npm install && npm start
```
## API Usage :: Methods supported -> ['GET']

### API URLS 

[https://the-words.herokuapp.com/api/v2/definitions/en-US/entries/](https://the-words.herokuapp.com/api/v2/definitions/en-US/entries/)

[https://the-words.herokuapp.com/api/v2/audio/en-US/entries/](https://the-words.herokuapp.com/api/v2/audio/en-US/entries/)


### To fetch definations

Using Curl:
```
curl https://the-words.herokuapp.com/api/v2/definitions/en-US/entries/hello
   -H "Accept: application/json" 
```
Uing Python

```python 
URL = f"https://the-words.herokuapp.com/api/v2/definitions/en-US/entries/hello"
HEADERS={'Accept': 'application/json'}
response = requests.get(URL, headers=HEADERS)
print(response.text)
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

### To fetch pronunciation data

Using Curl:
```
curl https://the-words.herokuapp.com/api/v2/audio/en-US/entries/hello
   -H "Accept: application/json" 
```
Uing Python

```python 
URL = f"https://the-words.herokuapp.com/api/v2/audio/en-US/entries/hello"
HEADERS={'Accept': 'application/json'}
response = requests.get(URL, headers=HEADERS)
print(response.text)
```

Response:
```
{
    "id": 22998,
    "word": "hello",
    "contents": [
        {
            "pronunciation": "he-loh, huh-, hel-oh",
            "audio": "https://static.sfdict.com/audio/lunawav/H01/H0178500.ogg"
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
