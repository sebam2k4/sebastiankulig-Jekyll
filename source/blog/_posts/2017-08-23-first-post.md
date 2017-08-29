---
layout: post
title:  "Welcome to my first blog post!"
date:   2017-08-23 22:05:00 +0000
categories:
type: basic
comments: true
heading_text:
subheading_text: just testing my blog styles :&#41;
button-top:
button-bottom: about
blog-post:
  id: 1
---

{::options parse_block_html="true" /}
{::options auto_ids="false" /}

# Heading 1

## Heading 2

### Heading 3

Hello there good sir!

This is my first blog post on my personal portfolio-slash-semi-professional website.

I'm going to talk about coding, my journey into full-stack web development, and other things that interest me such as realtime 3D architectural vizualizations and memes.

Hope you stay a while and visit often.

_Italic_

__Bold__

___Italic & Bold___

Code Block Sample using liquid and rogue highlighting:

{% highlight csharp linenos %}
using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApplication1
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello, world!");
    }
  }
}
{% endhighlight %}

Blockquote Sample (rather underwhelming atm):

> Hello. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et voluptatibus deleniti provident error vitae dolor eum numquam ad laborum maiores repellendus ullam iure deserunt, veritatis voluptas non mollitia architecto!
<div class="note blue">
#### Note
This is a sample note or warning
</div>

<div class="note blue">
#### Keep in mind
You can always fork this project on [github](https://github.com/sebam2k4/sebastiankulig-Jekyll) and deploy it locally on your machine using `bundle exec jekyll serve` terminal command. Then you can acces the preview on `localhost:4000` It is that easy.
</div>

Definition Lists:

HTML
:  HyperText Markup Language

Need this paragraph to break definition lists:

HTML
:  HyperText Markup Language

Otherwise you get this - multiple `<dt>` and `<dd>` in a single `<dl>` like this:

CSS
:  Cascading Style Sheets used to style a website.
:  Documents structured using XML or HTML are able to make use of them.

Jekyll
:  Jekyll is a simple, blog-aware, static site generator.
:  It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server
:  Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.

The styling is looking __AWESOME__ so far I think. Still needs a bit of work thought.