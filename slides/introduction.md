
# Git : https://t.co/6A3J56gPHB  npm install
---

# Une PWA en 2H avec Vue.js

note:

@@
# Git : https://t.co/6A3J56gPHB npm install https://t.co/6A3J56gPHB
---
# Cédric Le Gallo

![Bloody Bear](img/grumly.jpeg)<!-- .element: class="center" -->
![Bloody Bear](img/cedric.jpg)<!-- .element: class="center" -->

<span class="fa fa-twitter center">&nbsp;@legallocedric</span>
<span class="fa fa-github center">&nbsp;cedric-legallo</span>
<span class="fa fa-globe center">&nbsp;cedriclegallo.fr</span>

note:
- Consultant / Formateur freelance
- Angular, Polymer, Vue.js, Vanilla.
- Développeur qui aime ses outils, un outil c'est fait pour gagner du temps

@@
# Git : https://t.co/6A3J56gPHB npm install
---
# En théorie une PWA c'est : 

* App qui fonctionne sous Lynx (sans JS)<!-- .element: class="fragment" -->
* App qui fonctionne un peu mieux sur navigateur obsolète<!-- .element: class="fragment" -->
* App riche (Web) sur les navigateurs modernes<!-- .element: class="fragment" -->
* App riche (Responsive) sur les téléphones/tablettes<!-- .element: class="fragment" -->
* App qui s'installe sur le bureau(manifest)<!-- .element: class="fragment" -->
* App qui fonctionne sans réseau (Service Worker)<!-- .element: class="fragment" -->
* App qui reçoit des notifications même fermée (Service Worker)<!-- .element: class="fragment" -->

note:

En pratique notre TP garantie les 5 dernières puces

@@
# Git : https://t.co/6A3J56gPHB npm install
---

![home](img/home.png)

![store](img/store.png)

![detail](img/detail.png)

@@
# Git : https://t.co/6A3J56gPHB npm install
---
# Une PWA en 5 minutes

```bash
# Vue 2.X stable
npm i -g vue-cli 

#Vue 3.X beta
npm i -g @vue/cli
```

```bash
cd myAwesomePwa
vue init pwa
npm i
npm run build
```

note:
C'est le starter utilisé pour ce TP

@@

# Git : https://t.co/6A3J56gPHB npm install
<!-- .element: style="position:absolute;top:600px;"-->

<!-- .slide: data-background-image="img/fourniture.png" data-background-color="white" data-background-size="contain" -->

@@
# Fournitures
---

[Demo](http://localhost:8001)

```JSON
{
	"scripts": {
		"dev": "node build/dev-server.js",
		"server": "json-server servers/store.json",
		"build": "node build/build.js",
		"serve:dist": "npm run build && http-server -p 8000 dist",
		"start": "npm-run-all --parallel server dev",
		"dist": "npm-run-all --parallel server serve:dist",
		"lint": "eslint --ext .js,.vue src"
	}
}
```

# Git : https://t.co/6A3J56gPHB npm install

Il y a des branches step1, step2, ... qui "corrige" la step précédente

Si besoin en cours de TP

note:
le plus simple pour commencer c'est npm run start