[www.sebastiankulig.com](https://www.sebastiankulig.com) is a personal portfolio of my web development projects. It is being developed using Jekyll and deployed using [Netlify](https://www.netlify.com)

[Jekyll](https://jekyllrb.com/) is a simple, blog-aware, static site generator perfect for personal, project, or organization sites. Jekyll takes your content, renders Markdown and Liquid templates, and spits out a complete, static website ready to be served by a web server. 

## Table of Contents

1. [Latest Release Notes](#v080)
2. [To Do](#to-do)
3. [Development Instructions](#development-instructions)
4. [Notes](#notes)

## v0.8.0

## v0.7.0
* Forced TLS connections to redirect to HTTPS
* Moved portfolio images to subfolder
* images and blog notes are now includes
* Added [Blog Styles Guide Page](https://www.sebastiankulig/blog-styles)
* All page and asset links are now relative
* Switched deployment to Netlify
* Added syntax.css for code styling on blog posts
* Added Disqus commenting system for blog posts
* Added Blog page

## To Do:
* Refactor CSS into SCSS
* Test deployment Instruction on fresh Windows VM.
* Add MTA & CompTIA A+ certified logos
* Remove all html from md - use only markdon and liquid inside of pages.
* Add this website as portfolio-item
* finish content for portfolio pages
* look at Jekyll Documentation
* See Jekyll related posts in (https://mademistakes.com/faqs/website-tools/)
* Add CV
* Look at this [tutorial](https://jekyllrb.com/tutorials/convert-site-to-jekyll/)

## Development Instructions (Not Tested)

To set up your environment to develop this website:
1. Clone this repo
2. run `bundle install` from the root folder of the repo (where _config.yml file is).

To test the website locally as you make changes to it:
1. Run `bundle exec jekyll serve` from the root folder of the repo and open your browser to `http://localhost:4000/`. 

This starts a Jekyll server using the website's files and content. Refresh your browser as modifications are made to see any changes.

For more information about Jekyll and how it works, check out [Jekyll's Documentation](https://jekyllrb.com/)

## Notes
1. Please feel free to fork/clone to play around with the code or develop your own project.
2. This project will most likely develop into a full Jekyll theme in the future for anyone to use.
3. Please don't use any of my content: text and pictures.
