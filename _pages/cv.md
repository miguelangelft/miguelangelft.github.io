---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* B.S. in GitHub, GitHub University, 2012
* M.S. in Jekyll, GitHub University, 2014
* Ph.D in Version Control Theory, GitHub University, 2018 (expected)

Work experience
======
* Summer 2015: Research Assistant
  * Github University
  * Duties included: Tagging issues
  * Supervisor: Professor Git

* Fall 2015: Research Assistant
  * Github University
  * Duties included: Merging pull requests
  * Supervisor: Professor Hub
  
Skills
======
* Computer skills
  * Languages: Python (+4 years of experience), Matlab (+8 years of experience), C, C++, Java, some use of Unix shell scripts.
  * Algorithms: Experience programming Deep Learning-based architectures (Keras, Tensorflow libraries) and Bayesian models.
  * LaTeX and Microsoft productivity tools: Word, Excel, etc.
  * Operating Systems: Linux/Unix, Mac, Windows. 
  * Experience with distributed computing in a clustered environment.
* Foreign languages
  * English: Complete professional competence.
  * French: Basic competence.
  * German: Limited basic competence.
* Driving licence B

Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
