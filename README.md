### Qoute API
This is a simple API that returns a random quote from a list of quotes.
## How to use
1. url: `lumoshive-academy-quote-api.vercel.app/api`
2. method: GET
3. headers:
```json
{
    "x-api-key": "your camp id",
    "accept": "application/json"
}
```
4. response:
```json
{
    "status": 200,
    "text": "Friendship is but another name for an alliance with the follies and the misfortunes of others. Our own share of miseries is sufficient: why enter then as volunteers into those of another?",
    "author": "Thomas Jefferson",
    "tag": [
        "Friendship"
    ]
}
```
