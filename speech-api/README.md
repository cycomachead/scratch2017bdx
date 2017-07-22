# Simple Speech API

This a simple Express API. It has the following endpoints which all respond with JSON.

* `/` -- simply with a hello message.
* `/echo/:message` -- returns the `message` passed in as part of the path.
* `/speak` -- will speak a default hello message. It supports the following query params.
	* `message=Hello` -- will speak the message provided.
	* `voice=Alex` -- will change the voice used to speak the message.
	* `rate=250` -- will change how quickly the text is spoken (Words per minute.)

The `/speak` endpoint currently only works on macOS, but there should be similar functions available on Linux or Windows. The options for voices are dependent up each system's installed voices. You can find these by going to:
`System Preferences → Accessibility → Speech → System Voice`. You can use that menu to install additional voices.

## To Use:

You'll need [node.js][node] installed. Once that's installed you can use `npm install` to download the dependencies, and `npm run` to start the server on your computer.

Visit [http://localhost:3000/]() to see the API in action.
