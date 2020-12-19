const modelDatos = require('./modelo');
const ctrlDatos = {
 findDatos: async (req, res) => {
 const data = await modelDatos.getData();
 //console.log("----->",data); //tiene muchas mas informacion que la que necesito
 console.log("----->",data.data);
 res.json(data.data); //la respuesta del servidor se genera aqui
 },
 findDatos2: async (req, res) => {
    const data = await modelDatos.getData2(req.params['nom']);
    console.log("----->",data.data);
    res.json(data.data); //la respuesta del servidor se genera aqui
    },
 findDatos3: async (req, res) => {
    const data = await modelDatos.getData3(req.params['clave']);
    console.log("----->",data.data);
    res.json(data.data); //la respuesta del servidor se genera aqui
    }   
}

 module.exports = ctrlDatos