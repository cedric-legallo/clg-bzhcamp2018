<template>
  <div class="main scroll">
    <div class="tabs">
      <ul>
        <li :class="{'is-active': tab === ind}" @click="tab = ind" :key="ind" v-for="ind of steps"><a>Step {{ind}}</a></li>
      </ul>
    </div>
    <ol :class="{'hidden': tab !== 0}">
      <li>Modifier le fichier src/router/index.js</li>
      <li>Importer les composants Product, Cart, Detail</li>
      <li>Creer les routes correspondantes à ces composants</li>
      <li>Modifier le composant src/components/Navbar.vue</li>
      <li>Lier le router-link Catalogue à la route Product</li>
      <li>Lier le router-link Panier à la route Cart</li>
      <li>Lier le router-link Détail du produit à la route Detail</li>
      <li>Cette dernière route n'est pas testable pour le moment</li>
    </ol>
    <ol :class="{'hidden': tab !== 1}">
      <span>Modifier le composant Product.vue afin qu'il permette :</span>
      <li>D'afficher un carré de couleur correspondant au type de produit</li>
      <li>D'afficher en ligne le nom et le prix du produit</li>
      <li>D'ajouter le produit au panier (CartService)</li>
      <li>D'accéder à la vue détaillée du produit en cliquant dessus (router)</li>
      </li>
      <code><br/>
        data() {<br/>
          &nbsp;&nbsp;return {<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;product: {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Nature",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"price": 2,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 1,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "galette"<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
          &nbsp;&nbsp;}<br/>
        }<br/>
      </code>
    </ol>
    <ol :class="{'hidden': tab !== 2}">
      <span>Créer un composant Quantity.vue qui :</span>
      <li>Remplace l'input type="text" dans Cart.vue</li>
      <li>Reçoit quantity et name dans ses props</li>
      <li>Possède une quantity interne dans ses datas</li>
      <li>Affiche un input type text contenant la quantity interne</li>
      <li>Permette la modification de la quantity interne par saisie</li>
      <li>Affiche 2 boutons + et -</li>
      <li>Permette la modification de la quantity interne par les boutons</li>
      <li>Notifie son parent quand la quantity interne est changée</li>
    </ol>
    <ol :class="{'hidden': tab !== 3}">
      <span>Créer un composant Store.vue qui :</span>
      <li>Remplace Product dans les routes</li>
      <li>Affiche une liste de produits (StoreService & Product)</li>
      <li>Permette de filtrer la liste avec un champ recherche</li>
      <span>Modifier Product.vue :</span>
      <li>Supprimer le product en data</li>
      <li>Recevoir le product en props de la part de Store</li>
    </ol>
    <ol :class="{'hidden': tab !== 4}">
      <li>builder l'application : npm run serve:dist</li>
      <li>accéder à http://localhost:8000, félicitations c'est une PWA</li>
      <li>Consulter manifest.json</li>
      <li>Remplacer le logo Vue par le logo Breizhcamp</li>
      <li>Ajouter les résolutions désirées</li>
      <li>Rebuilder</li>
      <li>Installer l'application sur votre Desktop (fonctionne aussi sur mobile)</li>
      <span>Il est possible de supprimer l'application : </span>
      <li>Supprimer le raccourci sur le bureau</li>
      <li>Effacer le service worker associé à http://localhost:8000 dans la dev tool</li>
    </ol>
    <ol :class="{'hidden': tab !== 5}">
      <li>Passer le navigateur en mode offline</li>
      <li>Rafraichir l'application http://localhost:8000</li>
      <li>La police BTTF n'est pas servie dans le SW</li>
      <span>Modifier build/webpack.prod.conf.js</span><br/>
      <span>Le plugin SWPrecacheWebpackPlugin, s'occupe du cache servi par SW</span>
      <li>Ajouter ttf aux extensions</li>
      <li>Rebuilder</li>
      <li>Passer le navigateur en mode online</li>
      <li>Rafraichir l'application http://localhost:8000</li>
      <li>Passer le navigateur en mode online</li>
      <li>Rafraichir l'application http://localhost:8000</li>
      <li>La police BTTF est servie dans le SW</li>
    </ol>
    <ol :class="{'hidden': tab !== 6}">
      <span>Modifier build/webpack.base.conf.js</span>
      <li>Ajouter messaging.js en entry à coté de app</li>
      <span>Modifier build/webpack.prod.conf.js</span>
      <li>Exclure messaging.js de l'action webpack.optimize.CommonsChunkPlugin</li>
      <code>chunks: ['app'],</code>
      <li>Modifier SWPrecacheWebpackPlugin dans build/webpack.prod.conf.js : </li>
      <code><br/>
      importScripts: [{<br/>
        &nbsp;&nbsp;chunkName: 'messaging'<br/>
      }],<br/>
      </code>
      <span>Cela permet d'ajouter messaging dans le service worker généré</span>
      <li>Ajouter l'action de souscription aux notifications sur le clic sur entrer dans Hello.vue</li>
      <li>Rebuilder et Rafraichir http://localhost:8000</li>
      <li>Tester le push notification dans la dev tool : </li>
      <code>{"body":"Test push message from DevTools.", "title":"YEAH"}</code>
    </ol>
    <ol :class="{'hidden': tab !== 7}">
      <li>Traiter le todo dans build/service-worker-prod.js</li>
      <li>Rebuilder et Rafraichir http://localhost:8000</li>
      <li>Tester l'upgrade de service worker dans la dev tool</li>
      <span>Cette opération est automatique si le service change et que l'utilisateur recharge</span>
    </ol>
  </div>
</template>

<script>
import FontAwesomeMixin from '@/mixins/FontAwesomeMixin'
export default {
  name: 'bzh-enonce',
  mixins: [FontAwesomeMixin],
  data() {
    return {
      tab: 0,
      steps: [0, 1, 2, 3, 4, 5, 6, 7]
    }
  }
}
</script>

<style scoped>
div {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
ol > * {
  font-size: 2em;
  margin-left: 2em;
}

ol > span {
  font-weight: bold;
}
</style>
