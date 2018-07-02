---
layout: page
type: portfolio
title: RTarchViz - project
description: Marketplace for high quality assets specially created for Real-Time Architectural Visualizations in Unreal Engine 4
heading_text: RTarchViz
subheading_text: Python, Django, PostgreSQL, Bootstrap 4, FontAwesome 5, Stripe API
permalink: /portfolio/rtarchviz/
button-top:
button-bottom: contact-portfolio
project:
  devices-image: /assets/img/projects/devices-rtarchviz-devices-preview.png
  devices-alt: JavaScript calculator with Jasmine unit tests
  link: http://rtarchviz.herokuapp.com/
  source: https://github.com/sebam2k4/RTarchViz
---

{% include image.html file=page.project.devices-image alt=page.project.devices-alt title=page.description %}

RTarchViz is a (fictional) marketplace for high quality assets specially created for use in real-time architectural visualizations in Unreal Engine. These assets can consist of, but are not limited to, in-engine 3d models, sounds, blueprints, scripts, and full environments.

Registered users have the ability to not only buy products, but also list their own digital products. Each user has access to their own private dashboard containing a list of their products for easy management (edit or remove product), sales analytics, total profit, and download links to any product they may have purchased from other users.

The project is built using Django, Python based full-stack web framework with conjunction with other back-end modules and front-end libraries. The web application communicates with a PostgeSQL database for storing and retrieving user account and profile information, products, orders, blog posts, and sessions.

Some notable features:
- Private user dashboard for listing products and sales information
- Ability to edit user Profile page information
- Ability to Add, edit, and remove products
- Ability for user to change or recover their password
- Adding to cart happens without page refresh (Ajax)
- Stripe API for checkout
- Blog writing with TinyMCE editor (WYSIWYG)
- Continuous Integration with Django Tests

As RTarvhViz is a large project, more detailed info about all of its features can be found in the github repository linked below.

<div class="button-visit-website">
  <a href="{{ page.project.link }}" target="_blank" title="External link - visit {{ page.project.link }}">Visit Website <i class="fa fa-external-link"></i></a>
</div>

View the source code on: [Github]({{page.project.source}})
