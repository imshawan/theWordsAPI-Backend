import requests

def fetchFromAPI(query):
    '''Fetches response data from API'''
    URL = f"https://the-words.herokuapp.com/api/v2/definitions/en-US/entries/{query}"
    HEADERS={'Accept': 'application/json'}

    response = requests.get(URL, headers=HEADERS)
    print(response.status_code)
    #print(response.headers)
    print(response.text)

def fetchAudioFromAPI(query):
    '''Fetches pronunciation data from API'''
    URL = f"https://the-words.herokuapp.com/api/v2/audio/en-US/entries/{query}"
    HEADERS={'Accept': 'application/json'}

    response = requests.get(URL, headers=HEADERS)
    print(response.status_code)
    #print(response.headers)
    print(response.text)

fetchFromAPI("hello")
fetchAudioFromAPI("hello")