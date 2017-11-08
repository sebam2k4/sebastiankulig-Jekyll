[www.sebastiankulig.com](https://www.sebastiankulig.com) is a personal portfolio of my web development projects. It is being developed using Jekyll and deployed using [Netlify](https://www.netlify.com)

[Jekyll](https://jekyllrb.com/) is a simple, blog-aware, static site generator perfect for personal, project, or organization sites. Jekyll takes your content, renders Markdown and Liquid templates, and spits out a complete, static website ready to be served by a web server. 

## Table of Contents

1. [Latest Release Notes](#v080)
2. [To Do](#to-do)
3. [Development Instructions](#development-instructions)
4. [Production](#production)
5. [Notes](#notes)

## v0.8.0
* Refactored css to scss
* Added Examination Platform project
* Added JS Calculator + Jasmine Unit Testing project
* Updated development instructions
* Added MTA & CompTIA A+ certified logos

// remove below on new version release:
## v0.7.0
* Forced TLS connections to redirect to HTTPS
* Moved portfolio images to subfolder
* images and blog notes are now includes
* Added [Blog Styles Guide Page](https://www.sebastiankulig.com/blog-styles)
* All page and asset links are now relative
* Switched deployment to Netlify
* Added syntax.css for code styling on blog posts
* Added Disqus commenting system for blog posts
* Added Blog page

## To Do:
* Remove all html from md - use only markdon and liquid inside of pages.
* Add this website as portfolio-item
* finish content for portfolio pages
* look at Jekyll Documentation
* Add CV
* Write a Blog Post

* Generate porfolio project list on home page from data?
* Generate top and bottom navigations form data?

## Good resources to have a look at (note to self)
* Look at this [tutorial](https://jekyllrb.com/tutorials/convert-site-to-jekyll/)
* See Jekyll related posts in (https://mademistakes.com/faqs/website-tools/)

## Development Instructions

To set up your environment to develop this website on MS Windows (tested with win7 and win10):

1. Clone or download this repo
2. Install [Ruby](https://rubyinstaller.org/) for Windows. Make sure `add Ruby executables to your PATH` is checked.
3. Open Command Prompt as administrator and navigate to the repo folder.
4. Install Bundler by running `gem install bundler` command.
4. run `bundle install` command from the root folder of the repo (where _config.yml file is) to install Jekyll and all dependancies required for this project.

To test the website locally as you make changes to it:
1. Build and serve the project by running `bundle exec jekyll serve` command from the root folder of the repo.
2. Open your browser and navigate to your localhost on port 4000: `http://localhost:4000/` or alternatively type `http://127.0.0.1:4000` 

`bundle exec jekyll serve` starts a Jekyll server using the website's files and content. Refresh your browser as modifications are made to see any changes.

For info on how to set up Jekyll development environment on Linux or MacOS, check out [Jekyll's Documentation](https://jekyllrb.com/).

## Production

1. Configure the _config.yml file with your own settings and info.
2. Remove my content and add your own (There are plans to release this as a theme in near future which will only contain generic content)
3. run `bundle exec jekyll build` from repo's root. This will build the website inside of a _site folder.
4. Deploy _site folder contents to your favourite web host.

I recommend using free static web hosting solutions such as: [Netlify](https://www.netlify.com/), [Surge](https://surge.sh/), or [Github Pages](https://pages.github.com/) for deploying this project on.

## Notes
1. Please feel free to fork/clone to play around with the code or develop your own project from it.
2. Please don't use any of my content: text and pictures. Do whatever you want with the code :)
3. Expect regular changes to this project as it is in constant active development.
4. At some stage I will release a theme version of the project that will be stripped of my own personal content and include only generic placeholders. This should make it easier for your own implementation.
