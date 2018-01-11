import service from './baseServcie'

// const BASE_URL = 'http://localhost:8080'

// const USER_URL = '/user'

function getAll (query) {
  return service.get('/user/all', {
    params: query
  })
}

export default {
  getAll
}
