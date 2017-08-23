---
layout: page
type: basic
title: Blog
description: Blogging about Coding and Full Stack Web Development
heading_text: Blog
subheading_text: collection
permalink: /blog/
button-top: contact
button-bottom: portfolio
---

<ul>
  {% for post in site.posts %}
    <li style="border: solid 3px grey;">
      <a href="{{ post.url }}">{{ post.title }}</a>
      <p>excerpt: </p>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>