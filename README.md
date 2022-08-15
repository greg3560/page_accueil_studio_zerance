# Page Accueil Studio Zerance
This project was developed with node js for the backend. 
On the front end I used CSS and javascript.

## Table of Contents

* [App](#App)
* [Api](#Api)
* [Use-case](#Use-case)
* [Available Scripts](#Available-Scripts)
* [Folder Structure](#Folder-Structure)

### App

The application uses the following librarie:
- [Axios v0.19.0](https://www.npmjs.com/package/axios)

### Api

The application uses the axios library. Promise based HTTP client for the browser and node.js

The entry point are in post method:
- `https://gender-api.com/v2/gender`
   

### Use case

When the user arrives on the home page, he can navigate through the menu which directs him to the corresponding section.
Then the user can make contact by clicking on the corresponding links. A popin opens with a contact form. The form is composed of a text field, an email field, a multiline text field and a submit button.
A request is then sent to the Gender API with the name as a parameter and a "male"/"femal" response is returned.
A second popin appears with the result "Rosebud", "We rob banks" or "It's a trap!".
The user clicks ok to close the 2 popins and a redirect to the homepage.
The menu automatically scrolls to the corresponding section. I thought about doing a scrollspy with a fixed header, but it wasn't requested in the test. In mobile I developed a menu that appears on the left of the screen when you click on the burger menu icon. This icon is replaced when opening by a closing cross. The movement is subject to animation. For the header, banner and portfolio sections, no major development concerns. For the slider part, I took some time to choose a good slider (without js with carousel scrolling with arrows and fullwidth). But then quite easy to customize in particular to leave part of the next slide visible. For the infinite text section, quite a bit of research time to hack the request.
The page is responsive, only the slider caption has been hidden below 600px for lack of space. It was asked not to use javascript, but I had to
- popin opening/closing.
- open/close mobile menu
- validation of the form

development time:
- Header => 1h30
- Banner => 1h30
- Customers => 1h
- Slider => 1h30
- popins => 1h
- API => 1 hour

## Available Scripts

Launches the dependencies install.<br>

### `npm install`

In the project directory, you can run (line command):

### `node bin/www`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Folder Structure

After clone, your project should look like this:

```
bin/
  www
public/
  images/
  javascripts/
    index.js
  stylesheets/
    style.css
  favicon.ico
  Karla-Regular.ttf
routes/
  contact.js
  index.js
views/
  page/
    banniere.twig
    clients.twig
    header.twig
    offres.twig
    popinConfirmation.twig
    popinContact.twig
  contact.twig
  error.twig
  index.twig
  layout.twig
app.js
package.json
package-lock.json
README.md
```

For the project to run, **these files must exist with exact filenames**:

* `views/layout.twig` is the page template;
* `bin/www` is the nodejs entry point.
