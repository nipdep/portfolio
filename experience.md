---
title: Experience
layout: landing
description: 'From Intern to Expert: My Professional Evolution'
image: assets/images/experience_pic1.jpg
nav-menu: true
order: 4
---

<!-- Main -->
<div id="main">

<!-- Two -->
<section id="two" class="spotlights">
	{% for post in site.posts %}
		{% if post.type == 'experience' %}
			<section>
				<div class="thumbnail">
					<a href="{{ site.baseurl }}{{ post.url }}" class="image">
						<img src="{% link {{ post.image }} %}" alt="" data-position="center center" />
					</a>
				</div>
				<div class="content">
					<div class="inner">
						<header class="major">
							<h3>{{ post.title }}</h3>
							<a href="#" class="button special small disable">{{ post.tag }}</a>
						</header>
						<p>{{ post.description }} {{ post.categories }}</p>
						<ul class="actions">
							<li><a href="{{ site.baseurl }}{{ post.url }}" class="button">Learn more</a></li>
						</ul>
					</div>
				</div>
			</section>
		{% endif %}
	{% endfor %}
</section>

</div>