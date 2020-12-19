const axios = require('axios')
const modelDatos = {
 getData: async () => {
 return await axios.get('https://gaia.inegi.org.mx/wscatgeo/mgee')
 .then(data => data )
 .catch(err => {console.log(err); return err })
 },
 getData2: async (cd) => {
    
    return await axios.get(`https://gaia.inegi.org.mx/wscatgeo/mgee/buscar/${cd}`)
    .then(data => data )
    .catch(err => {console.log(err); return err })
   
    },
getData3: async (clv) => {
    
    return await axios.get(`https://gaia.inegi.org.mx/wscatgeo/mgem/${clv}`)
    .then(data => data )
    .catch(err => {console.log(err); return err })
   
    }    
}

module.exports = modelDatos;