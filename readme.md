([www.sebastiankulig.com](http://www.sebastiankulig.com)) is a personal website and portfolio of my web design and development projects. It is being developed using Jekyll.

[Jekyll](https://jekyllrb.com/) is a simple, blog-aware, static site generator perfect for personal, project, or organization sites. Jekyll takes your content, renders Markdown and Liquid templates, and spits out a complete, static website ready to be served by a web server. 

## Table of Contents

1. [Latest Release Notes](#v030)
2. [To Do](#to-do)
3. [Development Instructions](#development-instructions)
4. [Notes](#notes)

## v0.3.0

* Changed some pages content
* Added Curriculum Page
* Using three layouts:
  1. default - used for homepage and as main layout - other layouts are derrived form it.
  2. page - used for pages such as About, Contact, etc.
  3. portfolio - used for work portfolio items/projects.

## To Do:

* fixed kramdown formatting on curriculum page. Need to use HTML-code for special characters - fix this! 
* Change all .html pages to .md and move as much html to _layouts
* Add Web Development courses' progress from my [Repo](https://github.com/sebam2k4/Web-Development-Curriculum)
* Add this website and to the portfolio
* Change pages to .md and convert as much html to markdown as possible. Use layouts for repeating html.
* Consider creating a home layout.
* Update some site content
* Create a How to run this on local machine HOW-TO on this readme
* finish content for portfolio pages
* set up better includes and work on getting this look more like a Jekyll Theme with front-matter
* look at liquid
* look at Jekyll Documentation
* Research a deployment method.
* Note to self: Check this out (https://mademistakes.com/faqs/website-tools/)
* how to intergate this with github and push updates to external host: register365?
* Start a blog
* learn learn learn....

## Development Instructions

To set up your environment to develop this website:
1. Clone this repo
2. run `bundle install` from the root folder of the repo (where _config.yml file is).

To test the website locally as you make changes to it:
1. Run `bundle exec jekyll serve` from the root folder of the repo and open your browser to `http://localhost:4000/`. 

This starts a Jekyll server using the website's files and contents. Refresh your browser as modifications are made to see any changes.

For more information about Jekyll and how it works, check out [Jekyll's Documentation](https://jekyllrb.com/)

## Notes
1. Please feel free to fork/clone to play around with the code or develop your own project.
2. This project will most likely develop into a full Jekyll theme in the future.
3. Please don't use any of my content: text and pictures.
