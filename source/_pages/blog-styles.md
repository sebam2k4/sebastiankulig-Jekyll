---
layout: post
title: Style Guide
type: basic
description:
heading_text:
subheading_text: just testing my blog styles :&#41;
button-top:
button-bottom: about
permalink: /blog-styles
image:
  path: https://unsplash.it/600/?image=1040
  alt: Unsplash Image
image2:
  path: https://unsplash.it/600/?image=1041
  alt: Unsplash Image
---

{::options auto_ids="false" /}

# Heading 1

## Heading 2

### Heading 3

* * *

# Heading 1
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et voluptatibus deleniti provident error vitae dolor eum numquam ad laborum maiores repellendus ullam iure deserunt, veritatis voluptas non mollitia architecto.

## Heading 2
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et voluptatibus deleniti provident error vitae dolor eum numquam ad laborum maiores repellendus ullam iure deserunt, veritatis voluptas non mollitia architecto.

### Heading 3
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et voluptatibus deleniti provident error vitae dolor eum numquam ad laborum maiores repellendus ullam iure deserunt, veritatis voluptas non mollitia architecto.

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

Add this code: (no line numbers sample)

{% highlight css %}
.terminal {
  border-top: 22px solid #bbb;
  width: 100%;
  background-color: #151515;
  margin: 2em 0;
  border-top-right-radius: .6em;
  border-top-left-radius: .6em;
  color: #9CD9F0;
  font-family: monospace;
  padding: 2em 1.5em 2em 2em;
}
{% endhighlight %}

Lorem ipsum dolor [sit amet](#), consectetur adipisicing elit. Aliquam et voluptatibus deleniti provident error vitae dolor eum numquam ad laborum maiores repellendus ullam iure deserunt, veritatis voluptas non mollitia architecto.

> This is a Blockquote Sample. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et voluptatibus deleniti provident error vitae dolor eum numquam ad laborum maiores repellendus ullam iure deserunt, veritatis voluptas non mollitia architecto!

Lorem ipsum dolor sit amet, [consectetur adipisicing elit](#). Aliquam et voluptatibus deleniti provident error vitae dolor eum numquam ad laborum maiores repellendus ullam iure deserunt, veritatis voluptas non mollitia architecto.

{% include image.html
file=page.image.path
alt=page.image.alt
title=page.image.alt
%}

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et voluptatibus deleniti provident error vitae dolor eum numquam ad laborum maiores repellendus ullam iure deserunt, veritatis voluptas non mollitia architecto.

{% include image.html
file=page.image2.path
alt=page.image2.alt
title=page.image2.alt
caption="This is a picture"
%}

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et voluptatibus deleniti provident error vitae dolor eum numquam ad laborum maiores repellendus ullam iure deserunt, veritatis voluptas non mollitia architecto.

{% include note.html
heading="Keep in mind"
content="You can always fork this project on [github](https://github.com/sebam2k4/sebastiankulig-Jekyll) and deploy it locally on your machine using `bundle exec jekyll serve` terminal command. Then you can acces the preview on `localhost:4000` It is that easy."
%}

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et voluptatibus deleniti provident error vitae dolor eum numquam ad laborum maiores repellendus ullam iure deserunt, veritatis voluptas non mollitia architecto.

Here is a sample terminal window with commands and output:

{::options parse_block_html="true" /}
<div class="terminal">
bundle exec jekyll serve
{: .command}

Configuration file: .../sebastiankulig-Jekyll/_config.yml

Source: source/
Destination: _site/
Incremental build: disabled. Enable with --incremental
Generating...done in 0.611 seconds.

Please add the following to your Gemfile to avoid polling for changes:
gem 'wdm', '>= 0.1.0' if Gem.win_platform?
Auto-regeneration: enabled for 'source/'
Server address: http://127.0.0.1:4000/
Server running... press ctrl-c to stop.
</div>
{::options parse_block_html="false" /}

Can apply class to element like a paragraph using Kramdown: 


paragraph text `{: .blue}` - Could be useful for changing paragraph color

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et voluptatibus deleniti provident error vitae dolor eum numquam ad laborum maiores repellendus ullam iure deserunt, veritatis voluptas non mollitia architecto.

Definition Lists:

HTML
:  HyperText Markup Language

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et voluptatibus deleniti provident error vitae dolor eum numquam ad laborum maiores repellendus ullam iure deserunt, veritatis voluptas non mollitia architecto.

HTML
:  HyperText Markup Language


Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et voluptatibus deleniti provident error vitae dolor eum numquam ad laborum maiores repellendus ullam iure deserunt, veritatis voluptas non mollitia architecto.

CSS
:  Cascading Style Sheets used to style a website.
:  Documents structured using XML or HTML are able to make use of them.

Jekyll
:  Jekyll is a simple, blog-aware, static site generator.
:  It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server
:  Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et voluptatibus deleniti provident error vitae dolor eum numquam ad laborum maiores repellendus ullam iure deserunt, veritatis voluptas non mollitia architecto.

The styling is looking __AWESOME__ so far I think. Still needs a bit of work though.
