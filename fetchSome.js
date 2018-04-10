/* eslint-disable */
const fetch = require('node-fetch')
const fs = require('fs')

const gqlUrl = 'https://ppldo-graphql-test.herokuapp.com/graphql'

fetch(gqlUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then(result => result.json())
  .then((result) => {
    // here we're filtering out any type information unrelated to unions or interfaces
    result.data.__schema.types = result.data.__schema.types.filter(type => type.possibleTypes !== null)
    fs.writeFile('./src/store/fragmentTypes.json', JSON.stringify(result.data), (err) => {
      if (err) console.error('Error writing fragmentTypes file', err)
      console.log('Fragment types successfully extracted!')
    })
  })
