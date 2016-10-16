# Crawler

## Installation

Dependencies must be installed via the `npm install` command.

## Tests

Tests are written in Jasmine and can be run via the `npm test` command.

## Usage

Run the `index.js` file, passing in the url option:

```shell
$ node ./index.js --url http://example.com
```

This will output JSON formatted data, with a key for each page and a corresponding object for links and images found within:

```javascript
{
    "http://example.com": {
        "links": [
            "http://example.com/about",
            "http://example.com/more"
        ],
        "assets": [
            "http://static.example.com/main.css",
            "http://static.example.com/main.js",
            "http://static.example.com/image.png"
        ]
    },
    "http://example.com/about": {
        "links": [
            "http://example.com",
            "http://example.com/more"
        ],
        "assets": [
            "http://static.example.com/main.css",
            "http://static.example.com/main.js",
            "http://static.example.com/about.png",
            "http://static.example.com/image.png"
        ]
    },
    "http://example.com/more": {
        "links": [
            "http://example.com",
            "http://example.com/about"
            ],
        "assets": [
            "http://static.example.com/main.css",
            "http://static.example.com/main.js",
            "http://static.example.com/more.png",
            "http://static.example.com/image.png"
        ]
    }
}
```

## Known Issues

* CSS background images will not be reported.
    * This could be implemented by checking every element in the document for a background image, but is likely to perform poorly.
* The app follows redirects, but attributes these to the original URL, rather than the redirected one.
* JavaScript referenced by the document is not executed, therefore any assets loaded via JavaScript will not be reported.
