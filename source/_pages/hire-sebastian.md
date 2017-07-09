---
layout: page
title: Hire Sebastian - Front-end Developer and Web Designer
description: Enquire about hiring me for your project. I'm here to help you make it a reality.
heading_text: Hire Sebastian
subheading_text: Let's talk about your project
permalink: /hire-sebastian/
---
        
{% include button.html relative_url="/contact/" title="General Enquiry" text="General enquiry?" %}

<div class="content" markdown="1">
  Please fill out the form below to enquire about hiring me. I'd love to become part of a dynamic and talented team!
  
  I can also work as a freelancer and make you an awesome business or personal website.
  
  I'm currently on a journey to become a Full-Stack web developer - learn more about that [here]({{ site.url }}/personal-curriculum). To find out more about what I do, refer to my [about page]({{ site.url }}/about/), and to see some of my recent work, check out my [portfolio]({{ site.url }}/).
  
  After you submit this form, I'll be happy to call you to discuss how we can work together.
  
  <p class="note">Required fields are followed by <strong>*</strong></p>
  
   <form accept-charset="UTF-8" name="sendMessage" id="contactForm" action="{{ site.url }}/contact.php" method="post">
    <h2>Your Details</h2>

    <p><label for="name">Your name <strong>*</strong></label>
    <input id="name" name="name" type="text" placeholder="eg. Sebastian Kulig" autocomplete="off" required></p>

    <p><label for="email">Email address <strong>*</strong></label>
    <input id="email" name="_replyto" type="email" placeholder="eg. info@gmail.com" autocomplete="off" required></p>

    <p><label for="phone">Phone Number</label><input id="phone" name="phone" type="text" placeholder="eg. +353 (0)86 8814964" autocomplete="off"></p>

    <p><label for="businessname">Company Name</label><input id="businessname" name="businessname" type="text" placeholder="eg. Your awesome company" autocomplete="off"></p>

    <p><label for="referral">How did you hear about me?</label><input id="referral" name="referral" type="text" placeholder="eg. Twitter, Google, reffered by..." autocomplete="off"></p>

    <h2>Message</h2>

    <p><label for="message">Briefly describe your project, what you aim to achieve, what you'd like me to do. <strong>*</strong></label><textarea id="message" name="message" cols="40" rows="10" required></textarea></p>

    <div class="button-submit">
      <input type="submit" value="Send">
    </div>

  </form>
</div>
