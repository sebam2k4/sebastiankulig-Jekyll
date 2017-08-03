([www.sebastiankulig.com](http://www.sebastiankulig.com)) is a personal website and portfolio of my web design and development projects. It is being developed using Jekyll.

[Jekyll](https://jekyllrb.com/) is a simple, blog-aware, static site generator perfect for personal, project, or organization sites. Jekyll takes your content, renders Markdown and Liquid templates, and spits out a complete, static website ready to be served by a web server. 

## Table of Contents

1. [Latest Release Notes](#v050)
2. [To Do](#to-do)
3. [Development Instructions](#development-instructions)
4. [Notes](#notes)

## v0.5.0
* Removed redundant 'general enquiry' contact form

## v0.4.0
* Converted thanks page to markdown
* Contact forms are now includes
* Added contact form liquid logic to page layout
* Now using button-top and button-bottom variables for button position and type
* Mostly everything now in markdown except home.html and some parts of portfolio items
* Minor tweaks to homepage content

## To Do:

* Remove all html from md - use only markdon and liquid inside of pages.
* Add this website as portfolio-item
* Consider creating a home layout.
* finish content for portfolio pages
* set up better includes and work on getting this look more like a Jekyll Theme with front-matter
* look at liquid
* look at Jekyll Documentation
* Note to self: Check this out (https://mademistakes.com/faqs/website-tools/)
* setup TravisCI and deploy to [Surge](https://surge.sh/tour)
* find an alternative to contact.php for static pages
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
2. This project will most likely develop into a full Jekyll theme in the future for anyone to use.
3. Please don't use any of my content: text and pictures.
