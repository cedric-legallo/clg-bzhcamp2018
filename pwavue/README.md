# Formation XXX

## Présentation

La formation utilise le framework de présentation web [reveal.js](http://lab.hakim.se/reveal-js/).
Le contenu est stocké dans des fichiers markdown situés dans le dossier slides. Il y a un fichier par chapitre.

Le mode présentateur est disponible après avoir lancé la formation en local avec un serveur apache. Un serveur http/node.js est disponible dans ce dossier.
L'installation et le démarrage se font avec :

```shell
npm install
npm start
```

## Raccourcis clavier

F : mode plein écran
S : mode speaker avec notes et timer
Echap : en mode normal, affiche une vue globale des slides

## Création du contenu

Le contenu est rédigé en markdown. Chaque chapitre est référencé dans la page index.html

Les séparateurs horizontaux sont des triples @ : @@@
Les séparateurs verticaux sont des doubles @ : @@

Les notes présentateurs sont situées dans un bloc : "note:"

Si vous voulez qu'une diapositive(un slide) ne soit pas imprimée, il suffit d'y ajouter la ligne suivante : <!-- .slide: class="noprint" -->

### Enchainements de blocs dans une slide

Le bloc <!-- .element: class="fragment" --> doit être ajouté en fin de ligne pour permettre un affichage point par point.

## Export PDF

1. Ouvrez votre presentation avec la query string `?print-pdf`
2. Ouvrez la fenêtre d'impression avec (CTRL/CMD+P).
3. Changer la **Destination** en **Enregistrer au format PDF**.
6. Activer l'option **Graphiques d'arrière plan**
7. **Enregistrer**.
