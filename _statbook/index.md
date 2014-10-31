---
layout: page
title: "Statbook index"
description: "This is what I do."
header-img: "img/about-bg.jpg"
---

<ul>
{% for chap in site.statbook %}
  <li>
    {% if chap.title %}<a href="{{ chap.url | prepend: site.baseurl }}">{{ chap.title }}</a>{% endif %}
  </li>
{% endfor %}
</ul>