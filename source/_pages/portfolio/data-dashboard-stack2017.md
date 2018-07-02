---
layout: page
type: portfolio
title: Interactive Data Dashboard - project
description: Coding Language Popularity based on Stack Overflow Survey 2017 Results
heading_text: Interactive Data Dashboard
subheading_text: Python, Flask, MongoDB, DC.js, Crossfilter, Bootstrap 3, JavaScript
permalink: /portfolio/data-dashboard-stack2017/
button-top:
button-bottom: contact-portfolio
project:
  devices-image: /assets/img/projects/devices-data-dashboard-stack2017-devices-preview.png
  devices-alt: JavaScript calculator with Jasmine unit tests
  link: https://stack-overflow-2017-dev-survey.herokuapp.com/
  source: https://github.com/sebam2k4/StackOverflow-2017-Survey-Data-Visualization
---

{% include image.html file=page.project.devices-image alt=page.project.devices-alt title=page.description %}

This project is a dashboard for interactive data visualization that represents coding languages popularity among over 51,000 Stack Overflow's 2017 Developer Survey respondants. The dashboard visualizes data in bar, row, and pie charts, as well as provides select menus to filter the data. The graphs are interactive and react to user selections.

The app uses D3.js and DC.js to renders charts from a large MongoDB database and uses Crossfilter.js to allow exploration of the datasets for analysis. The charts are styled with Dc.css and then bootstrap is used in conjuction with keen.js & keen-dashboards.css to layout the dashboard elements.

Flask is used for building the server that interacts with MongoDB and renders the HMTL page that contains the charts.

The data used is a set of responses from Stack Overflow's 2017 Annual Developer Survey. The original Data set is available in .csv format only and needed to be imported into MongoDB.

<div class="button-visit-website">
  <a href="{{ page.project.link }}" target="_blank" title="External link - visit {{ page.project.link }}">Visit Website <i class="fa fa-external-link"></i></a>
</div>

View the source code on: [Github]({{page.project.source}})
