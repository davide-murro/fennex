# Fennex

Site for a company specialized in the creation of websites, ecommerce and web applications, it s just a CV of the projects it has worked on. <br>
This site is developed started from a template, it is written with HTML, CSS and JQuery with the use of some libraries and is completely responsive

## File structure

- _root_
  HTML pages
- **css**
  Only css files
- **fonts**
  Fonts of the site
- **images**
  All images, icons and logos of the site, divided in subfolders:
  - profiles
  - projects (also divided into projects)
  - fennec (assets like logo)
- **js**
  Only javascript files including internal js, libraries and a file for DB

## Libraries

- **jQuery**
  It is a JavaScript library that makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler
- **particles**
  A lightweight, dependency-free and responsive javascript plugin that generate a particle backgrounds
- **skel**
  A lightweight framework for building responsive sites and web apps
- **fontawesome**
  Internet's icon library and toolkit

## Database

Not having a server side it was decided to make a database with a js file (**_db.js_**). <br>
The tables are simple arrays of objects and for each there is a js file that manages it.

- **projects**
  Projects we made as a company
- **profiles**
  The components of the company

To insert an element into DB just add an object to array into db.js file <br>
Here an example of **_projects_** array (table of DB):

```javascript
var projects = [
  {
    insert: new Date("2018/06/29 19:50"),
    img: "images/projects/people/img01.png",
    title: "People.",
    demo: "http://demo.fennex.it/people",
    description:
      "Sito semplice e moderno realizzato per l'universit&agrave; IUAV di Venezia. Il sito a fatto guadagnare un bel 30 e lode alla nostra amica. <span class='icon fa-smile-o'></span>",
    features: ["Completamente responsive", "Bootstrap 4"],
  },
  {
    insert: new Date("2018/07/10 20:04"),
    img: "images/projects/michelangeli/img01.png",
    title: "Michelangeli",
    demo: "http://michelangeli.fennex.it",
    description:
      "Sito per la vendita di prodotti artigianali. Michelangeli pu&ograve; sembrare un semplice mercatino d'artigianato, ma non lasciatevi ingannare! nei suoi prodotti c'&egrave; tutto l'amore di una mamma! <span class='icon fa-heart'></span>",
    features: ["Completamente responsive", "Vetrina prodotti"],
  },
];
```

## HTML structure

The site is made creating the skeleton in HTML and then including parts and information by javascript

- **home page**
  The home page contains the overview of the site and is divided in:
  - **_header_**
    The menu navigation
  - **_section_**
    That contains the overview of the main topics:
    - **_profiles_**
      Information about developers
    - **_projects_**
      General information about projects
- **detail**
  This is the page that shows a project with all of its informations
- **footer**
  Included in each page contains the contact informations
- **contact us**
  Page for the contact informations

## Demo link

https://davide-murro.github.io/fennex/

## Screenshots

![davidemurro github io_Fennex_](https://github.com/DavideMurro/Fennex/assets/118051417/839ce6dd-022e-4237-8599-95c52778eccf)
![davidemurro github io_Fennex_chi-siamo](https://github.com/DavideMurro/Fennex/assets/118051417/85fe89e1-540d-4311-a1a2-2fd44c6d21b2)
![davidemurro github io_Fennex_detail html_project=0](https://github.com/DavideMurro/Fennex/assets/118051417/5186f4b9-070b-4876-b3ac-23d6335bca8e)
