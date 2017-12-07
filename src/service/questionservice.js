import axios from 'axios'

const BASE_URL = 'http://192.168.4.210:8081/api/'

const QUESTION_URL = 'question/'

function getAll () {
  return axios.get(BASE_URL + QUESTION_URL + 'getAll')
}

function getDetail (id) {
  return axios.get(BASE_URL + QUESTION_URL + 'detail/' + id)
}

function deleteById (id) {
  axios.delete(BASE_URL + QUESTION_URL + 'delete/' + id)
  .then(response => {
    console.info(response)
  }).catch(err => {
    console.info(err)
  })
}

function update (id, question) {
  axios.put(BASE_URL + QUESTION_URL + 'update/' + id, question)
  .then(response => {
    console.info(response)
  }).catch(err => {
    console.info(err)
  })
}

function testUrlB () {
  axios.post(BASE_URL + QUESTION_URL + 'testUrlB', {
    currentPage: '1',
    pagesize: '2'
  }).then(response => {
    console.info(response)
  }).catch(err => {
    console.info(err)
  })
}

function testUrlA () {
  axios.post(BASE_URL + QUESTION_URL + 'testUrlA/' + 'testA=1&testB=2&testC=3')
  .then(response => {
    console.info(response)
  }).catch(err => {
    console.info(err)
  })
}

export default{
  getAll,
  getDetail,
  deleteById,
  update,
  testUrlB,
  testUrlA
}
