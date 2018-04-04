#PWA
---

* En mode dev, la PWA qui par définition exploite un cache est un frein
* A partir de maintenant on utiliser l'application en mode prod
* Interrompre votre serveur

```bash
# Lancer ou non le serveur backend : 
npm run server

# Builder et lancer un serveur http : 
npm run serve:dist
```

Astuce, modifier package.json pour désactiver le cache-control : 
```JSON
{
	"scripts": {
		"serve:dist" : ""npm run build && http-server -p 8000 -c -1 dist","
	}
}
```
Le cache du Service Worker est toujours fonctionnel

@@
# Installation
---
L'application est installable grâce au manifest.json

![installation](img/installation.png)

<div class="tp">4</div>

@@
# Offline
---

Le mode offline est géré par le service worker créé par notre conf webpack

Celui-ci utilise les API FetchEvent (proxy réseau) et Cache du Service Worker afin de servir l'application en mode déconnecté pour les fichiers html,js,css

```JavaScript
new SWPrecacheWebpackPlugin({
	cacheId: 'clg-bzhcamp2018',
	filename: 'service-worker.js',
	staticFileGlobs: ['dist/**/*.{js,html,css}'],
	minify: true,
	stripPrefix: 'dist/'
})
```

_ <!-- .element: class="fragment" data-code-focus="1,7" style="color:white;" -->

_<!-- .element: class="fragment" data-code-focus="3" style="color:white;""  -->

_<!-- .element: class="fragment" data-code-focus="4" style="color:white;" -->

_ <!-- .element: class="fragment" data-code-focus="2" style="color:white;" -->

_ <!-- .element: class="fragment" data-code-focus="1-7" style="color:white;" -->

@@
# Offline
---

![offline](img/offline.png)

Le Service Worker une fois installé fonctionne en arrière plan des que le navigateur est lancé (soit tout le temps sur un smartphone)

<div class="tp">5</div>

@@
# Notification
---

SW contient d'autres API que Fetch/Cache

Notament une implémentation de Push API : 

<div>
`PushManager.getSubscription()`<br/>&nbsp;&nbsp;&nbsp;&nbsp;récupère une PushSubscription existante<br/>
`PushManager.subscribe()`<br/>&nbsp;&nbsp;&nbsp;&nbsp;retourne une Promise vers la PushSubscription<br/>
`PushEvent.data.arrayBuffer()`<br/>&nbsp;&nbsp;&nbsp;&nbsp;le message en temps qu'ArayBuffer (binaire)<br/>
`PushEvent.data.blob()`<br/>&nbsp;&nbsp;&nbsp;&nbsp;le message en temps que blob (fichier)<br/>
`PushEvent.data.json()`<br/>&nbsp;&nbsp;&nbsp;&nbsp;le message en temps que json (objet)<br/>
`PushEvent.data.text()`<br/>&nbsp;&nbsp;&nbsp;&nbsp;le message en temps que texte (string)<br/>
</div>
<div class="tp">6,7</div>