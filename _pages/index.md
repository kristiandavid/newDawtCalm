---
permalink: /
layout: index
title: Kristian David Rogelstad
desc: Front End Web Developer
seoDesc: Hello. My name is Kristian. I'm a front end web developer from Toronto, ON. I love hockey, woodworking and making things on the internet. I hope you like my work.
---

<div class="row workPosts">
  {% for post in site.posts %}
    <a href="{{ post.url }}">
      <div class="medium-6 large-4 columns end">
      <div class="overlay"></div>
        <div class="inner" style="background-image:url({{ post.img }});">
          <h3><span>{{ post.title }}</span></h3>
        </div>
      </div>
    </a>
  {% endfor %}
</div>
