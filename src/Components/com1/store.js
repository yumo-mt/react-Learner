
import {observable} from 'mobx'

class Store{
  @observable data={a:'mobxstate'}
}

export default new Store();