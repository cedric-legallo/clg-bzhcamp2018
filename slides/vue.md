# Vue.js
---

Reactive Components for Modern Web Interfaces

note:
- micro-framework pour écrire des App Web (SPA ou PWA)
- Reactive : Binding,  expression, évènement, avec transparence
- Components : Briques de légo réutilisables (ou non)

@@
# Vue-router
---

`vue-router` est un plugin officiel, c'est à dire qu'il est maintenu par la même équipe que la core librairie.

Il s'intègre parfaitement aux applications et composants vue.js, et embarque des fonctionnalités similaires aux concurrents.

Il a été initialisé par `vue init pwa` dans router/index.js


@@
# Routes
---

```JavaScript
export default new Router({
	routes: [{
		path: '/',
		name: 'home',
		component: Hello
	}, {
		path: '/users/:id',
		name: 'user',
		component: UserDetail
	}, {
		path: '/users',
		name: 'users',
		component: UserList
	}]
})

```

@@
#Naviguer
---

Déclaratif dans les template
```html
<nav>
	<router-link to="/">Accueil</router-link>
	<router-link to="/users">Utilisateurs</router-link>
	<router-link :to="{name: 'users'}">Utilisateurs</router-link>
	<router-link :to="'/users/' + id1">Utilisateur 1</router-link>
	<router-link :to="{name: 'user', params: {id:id2}}">Utilisateur 2</router-link>
</nav>
```

Programmatique dans les composants Vue
```JavaScript
this.$router.push('/users')
this.$router.push({ name: 'users' })
this.$router.push(`/users/${id1}`)
this.$router.push({ name: 'user', params: { id:id2 }})
```

<div class="tp">0</div>

@@
# Composant Vue
---

```html
<template>
	<div>
	</div>
</template>

<script>
export default {
	name: 'bzh-comp',
	data() {
		return {
			// propriétés internes
			// elles seules peuvent muter dans ce composant
		}
	},
	props: {
		// contrat interface d'entrée
	},
	methods: {
		// Fonctions utilisée en interne
		someFunction() {
			//contrat interface sortie
			this.$emit('topic', optionalParams) 
		}
	},
	computed: {
		// Props transformées
		// ES6 get/set pour composant vues
	},
	//...
})
</script>
```

@@
# Composant Vue
---

```JavaScript
{
	//...
	components: {
		// déclaration de composant locaux à ce composant
	},
	filters: {
		// déclaration de 'filtres' locaux
	},
	directives: {
		// déclaration de directives locales
	},
	mixins: [
		// "héritage" par mixin
	],
	created() { },
	mounted() { },
	updated() { },
	destroyed() { },
	mixins: []
}
```

@@
# template
---

```HTML
<template>
		<span>{{ number + 1 }}</span>
		<div :id="'item-' + id"></div>
		<div v-html="inner_html"></div>
		<span v-once>{{ amount | capitalize | currency '€' }}</span>
		<p v-if="greeting">Hello!</p>
		<input type ="text" v-model="searchFilter"/>
		<ul>
				<li v-for="item in items | filterBy searchFilter">
						{{ item.attr }}
				</li>
		</ul>
		<a v-bind:href="url"></a>
		<a :href="url"></a>
		<a v-on:click="doSomething">
		<a @click="doSomething">
		<a @click.stop.prevent="doSomething">
		<input @keyup.enter="onEnter"><input @keyup.13="onEnter">
		<div :class="[classA, classB]"></div>
</template>

```

Interpolation<!-- .element: class="fragment" data-code-focus="2-3" style="color:white;""  -->

Raw HTML<!-- .element: class="fragment" data-code-focus="4" style="color:white;" -->

Filters <!-- .element: class="fragment" data-code-focus="5" style="color:white;" -->

Directives <!-- .element: class="fragment" data-code-focus="6-12" style="color:white;" -->

Bind <!-- .element: class="fragment" data-code-focus="13-14" style="color:white;" -->

Event <!-- .element: class="fragment" data-code-focus="15-16" style="color:white;" -->

Modifiers <!-- .element: class="fragment" data-code-focus="17-18" style="color:white;" -->

All <!-- .element: class="fragment" data-code-focus="1-20" style="color:white;" -->

<div class="tp">1,2,3</div>
