---
layout: post
type: post
title: On the journey to Full-Stack Developer
description: The Beginnings
date: 2017-09-08 22:05:00 +0000
categories:
comments: true
button-top:
button-bottom: about
blog-post:
  id: 1
---

{::options parse_block_html="true" /}
{::options auto_ids="false" /}

I've started to dabble in some front-end web development last year and managed to grasp some basics of HTML and CSS. A few people even approached me to build them a website and I decided to give it a try.

I found Jekyll really awesome for this purpose

All you gotta do is make sure you have ruby and jekyll installed and run this command:

{::options parse_block_html="true" /}
<div class="terminal">
bundle exec jekyll serve
{: .command}
</div>
{::options parse_block_html="false" /}

Then you can access the preview in your browser by typing `localhost:4000` in the address bar. It is that easy.

If you'd like Jekyll to build your website, just run:

{::options parse_block_html="true" /}
<div class="terminal">
bundle exec jekyll build
{: .command}
</div>
{::options parse_block_html="false" /}

and all your layouts, includes, pages, posts, and etc. are going to be combined to regular HTML, CSS, and JavaScript. It is a joy!

{% include note.html
heading="See the source files"
content="This project is open source and you can always fork or download it from [github](https://github.com/sebam2k4/sebastiankulig-Jekyll) I only ask that you don't use my content which includes text and images."
%}