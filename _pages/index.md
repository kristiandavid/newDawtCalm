---
permalink: /
layout: index
title: Kristian David Rogelstad
---

Over 10 years of web development, 1 year of woodworking, 15 years of beard-growing, and 35 years of bacon appreciation. 

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>


<!-- ![My Beard Logo]({{ site.url }}/assets/img/logoGrey.svg) -->
