# Fennex

Site for a company specialized in the creation of websites, ecommerce and web applications, it s just a CV of the projects it has worked on. <br>
This site is developed started from a template, it is written with HTML, CSS and JQuery with the use of some libraries and is complitely responsive

## File structure

- **css**
  Only css files
- **fonts**
  Fonts of the site
- **images**
  all images, icons and logos of the site, divided in subfolders:
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

## Summary

- Demo link: https://davidemurro.github.io/Fennex/
- Screenshots:
  ![davidemurro github io_Fennex_index html](https://github.com/DavideMurro/Fennex/assets/118051417/f76fb696-3063-400e-86b2-f803635dbbab)
  ![davidemurro github io_Fennex_index html (1)](https://github.com/DavideMurro/Fennex/assets/118051417/a12b8150-97dc-4172-8214-f2566faa9443)
  ![davidemurro github io_Fennex_detail html_project=0](https://github.com/DavideMurro/Fennex/assets/118051417/5186f4b9-070b-4876-b3ac-23d6335bca8e)
