---
permalink: /
layout: index
title: Kristian David Rogelstad
---

<div class="row workPosts">
  {% for post in site.posts %}
    <a href="{{ post.url }}">
      <div class="medium-6 large-4 columns end" style="background-image:url({{ post.img }});">
        <h3><span>{{ post.title }}</span></h3>
      </div>
    </a>
  {% endfor %}
</div>
