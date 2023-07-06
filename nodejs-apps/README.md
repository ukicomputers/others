# nodejs-apps
Apps coded with Node.js developer language
__________________________________________________________________________

#sender-email.js

You are needed a node.js program to run this code.

## Methods
Initialize quick-email
```javascript
require('quick-email').init(user, password, host, port, ssl);
```

Send an email
```javascript
require('quick-email').sendEmail(path, subject, sender, to, variables, callback);
```
## How to run?
Use command ``` node sender-email.js require('quick-email').init(user, password, host, port, ssl);``` to initalize, 
and ``` node sender-email.js require('quick-email').sendEmail(path, subject, sender, to, variables, callback);``` to send a email.
______________________________________________________________________________

##localhost-port-text.js

## What to do?

Shows Hello World! on port localhost:8080

## How to run?

Run with command ``` node localhost-port-text.js ``` and open your browser and go to link or port : localhost:8080.

______________________________________________________________________________

##text-command.js

## What to do?

Shows in command-line interface text Hello World!

## How to run?

In command-line type ``` node text-command.js ``` and press Enter.

______________________________________________________________________________

##input--answer.js

## What to do?

Asking for you name, and answer Hi yourusername (e.g. Ugljesa, Uki).

## How to run?

Firstly open command prompt and type: ``` npm install inquirer ```.
After that, you can run program by typing in cmd : ``` node input--answer.js ```.
