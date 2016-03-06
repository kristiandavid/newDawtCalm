---
permalink: /
layout: index
title: Kristian David Rogelstad
---

<div class="row workPosts" data-equalizer data-equalize-on="medium">
  {% for post in site.posts %}
    <div class="medium-6 large-4 columns end" data-equalizer-watch style="background:url({{ post.img }}) no-repeat 0 0;">
      <a href="{{ post.url }}">
        <span>{{ post.title }}</span>
      </a>
    </div>
  {% endfor %}
</div>


<!-- ![My Beard Logo]({{ site.url }}/assets/img/logoGrey.svg) -->
