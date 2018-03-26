<template>
  <div class="main scroll">
    <div class="tabs">
      <ul>
        <li :class="{'is-active': tab === 'bulma'}" @click="tab = 'bulma'"><a>CSS Bulma</a></li>
        <li :class="{'is-active': tab === 'icon'}" @click="tab = 'icon'"><a>Mixin d'icones</a></li>
        <li :class="{'is-active': tab === 'sw'}" @click="tab = 'sw'"><a>Service Worker</a></li>
      </ul>
    </div>
    <div  :class="{'hidden': tab !== 'bulma'}">
      <div class="help">
        <code>&lt;div class="button">Bouton&lt;/div></code>
        <div class="button">Bouton</div>
        <code>&lt;label class="control" title="Label pour input"><br/>
            &nbsp;&nbsp;&lt;input class="input" type="text"/><br/>
          &lt;/label>
        </code>
        <label class="control" title="Label pour input">
          <input class="input" type="search"/>
        </label>
        <code>&lt;label class="control has-icons-left" title="Label"><br/>
            &nbsp;&nbsp;&lt;span class="icon is-left"><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;font-awesome-icon :icon="getIcon('search')"/><br/>
            &nbsp;&nbsp;&lt;/span><br/>
            &nbsp;&nbsp;&lt;input class="input" type="text"/><br/>
          &lt;/label>
        </code>
        <label class="control has-icons-left" title="Label pour search">
          <span class="icon is-left">
            <font-awesome-icon :icon="getIcon('search')"/>
          </span>
          <input class="input" type="search"/>
        </label>
        <code>&lt;div class="box">Boite&lt;/div></code>
        <div class="box">Boite</div>
        <code>&lt;div class="notification">Notification&lt;/div></code>
        <div class="notification">Notification</div>
        <code>&lt;div class="is-primary">Principale&lt;/div></code>
        <div class="notification is-primary">Principale</div>
        <code>&lt;div class="is-danger">Danger&lt;/div></code>
        <div class="notification is-danger">Danger</div>
        <code>&lt;div class="is-success">Succès&lt;/div></code>
        <div class="notification is-success">Succès</div>
        <code>&lt;div class="is-info">Information&lt;/div></code>
        <div class="notification is-info">Information</div>
        <code>&lt;div class="is-warning">Avertissement&lt;/div></code>
        <div class="notification is-warning">Avertissement</div>
      </div>
    </div>
    <div :class="{'hidden': tab !== 'icon'}">
      <code>
        &lt;template><br/>
          &nbsp;&nbsp;&lt;div><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;font-awesome-icon :icon="getIcon('search')"/><br/>
          &nbsp;&nbsp;&lt;/div><br/>
        &lt;/template><br/>
        <br/>
        &lt;script><br/>
        import FontAwesomeMixin from '@/mixins/FontAwesomeMixin'<br/>
        export default {<br/>
          &nbsp;&nbsp;name: 'bzh-comp',<br/>
          &nbsp;&nbsp;mixins: [FontAwesomeMixin]<br/>
        }<br/>
        &lt;/script>
      </code>
      <ul class="list">
        <li>Importer FontAwesomeMixin</li>
        <li>l'ajouter au tableau mixins du composant</li>
        <li>Utiliser la balise font-awesome-icon</li>
        <li>passer en paramètre d'icon la méthode getIcon avec la chaine désirée</li>
        <li>Les chaines possible sont visible dans FontAwesomeMixin.js</li>
        <li>Il est possible de modifier le Mixin pour ajouter vos icones FA</li>
      </ul>
    </div>
    <div :class="{'hidden': tab !== 'sw'}">
      <ul>
        <li>Le fichier build/service-worker-prod.js enregistre le service worker automatiquement généré</li>
      </ul>
      <code>navigator.serviceWorker.register('service-worker.js')</code>
      <ul>
        <li>La ligne window.swRegistration = registration sert au subscription service, afin de proposer explicitement la souscription sur une acction utilisateur, le navigateur propose naturellement la souscription sous certaines conditions.</li>
      </ul>
      <ul>
        <li>Pousser une notification : </li>
      </ul>
      <code>
        const title = 'Titre'<br/>
        const options = {<br/>
          &nbsp;&nbsp;body: 'Corps de la notif.',<br/>
          &nbsp;&nbsp;icon: 'images/icon.png',<br/>
          &nbsp;&nbsp;badge: 'images/badge.png'<br/>
        };<br/>
        registration.showNotification(title, options)<br/>
      </code>
    </div>
  </div>
</template>

<script>
import FontAwesomeMixin from '@/mixins/FontAwesomeMixin'
export default {
  name: 'bzh-help',
  mixins: [FontAwesomeMixin],
  data() {
    return {
      tab: 'bulma'
    }
  }
}
</script>

<style scoped>
div {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
code, li {
  font-size: 2em;
}
.help {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1em;
  align-items: start;
}
.list li {
  list-style-type: square;
  margin-left: 2em;
}
</style>
