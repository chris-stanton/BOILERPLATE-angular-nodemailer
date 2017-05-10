# Node Mailer Example

## Technologies Used
  1. Angular
  2. Node.js
  3. Node Mailer
  4. Node Mailer smtp-transport
  5. Express
  6. Body-Parser
  7. Notyf
  8. dotenv-node


## How To Install App
  1. Download zip file
  2. Open terminal and navigate into folder
  3. Run commands:
    - ``` npm install ```
    Installs Node Packages

* note:
App was written with intended use with an Yahoo account.  This app will work with Gmail account but will need some services turned off in your Google account.  You will also need to update this code:

```
  service: 'yahoo', (update email service provider)
  auth: {
     user: 'xxxxxxxxx@yahoo.com', (update email address that will be sending emails)
     pass: 'xxxxxxxxxx' (update password for account above)
  }
```
found in ``` app.js ```


---

## License
##### Copyright 2017 Chris Stanton

###### Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

###### The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

###### THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
