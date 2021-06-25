import axios from 'axios'

export function getData () {
  axios.get('https://central.wordcamp.org/wp-json/wp/v2/wordCamps')
    .then(res =>
      console.log(res.data))
    .catch(e =>
      console.log(e))
  console.log(new Date(1633132800 * 1000))
}
