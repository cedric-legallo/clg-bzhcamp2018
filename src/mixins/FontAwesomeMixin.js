import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart'
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff'
import faClipboardList from '@fortawesome/fontawesome-free-solid/faClipboardList'
import faCartPlus from '@fortawesome/fontawesome-free-solid/faCartPlus'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus'
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash'
import faQuestion from '@fortawesome/fontawesome-free-solid/faQuestion'
import faStickyNote from '@fortawesome/fontawesome-free-solid/faStickyNote'

export default {
  components: {
    FontAwesomeIcon
  },
  methods: {
    getIcon(type) {
      switch (type) {
        case 'shopping':
          return faShoppingCart
        case 'logout':
          return faPowerOff
        case 'store':
          return faClipboardList
        case 'addToCart':
          return faCartPlus
        case 'search':
          return faSearch
        case 'plus':
          return faPlus
        case 'minus':
          return faMinus
        case 'delete':
          return faTrash
        case 'help':
          return faQuestion
        case 'states':
          return faStickyNote
      }
    }
  }

}
