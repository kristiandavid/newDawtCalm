---
permalink: /
layout: index
title: Kristian David Rogelstad
---

farts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>


<!-- ![My Beard Logo]({{ site.url }}/assets/img/logoGrey.svg) -->
