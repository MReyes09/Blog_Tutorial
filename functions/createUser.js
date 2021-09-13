const admin = require('firebase-admin');
//const twilio = require('./twilio');

function createUser(req, res){
    // res.status(200).send(req.body);
    const { email, phoneNumber, password, displayName } = req.body;

    // Validamos los campos necesarios
    if (!email) return res.status(404).send({ message: 'no se ha enviado un email' });
    if (!phoneNumber) return res.status(404).send({ message: 'no se ha enviado un numero de telefono' });
    if (!password) return res.status(404).send({ message: 'no se ha enviado una contraseña' });
    if (!displayName) return res.status(404).send({ message: 'no se ha enviado un nombre' });

    // Crear el usuario si los datos son correctos
    admin.auth().createUser({
        email,
        emailVerified: false,
        phoneNumber,
        password,
        displayName,
        photoURL: 'http://www.example.com/12345678/photo.png',
        disabled: false,
    }).then((usr) => res.status(200).send(usr))
    
    //{ // Retornar los datos
    //    const code = Math.floor(Math.random() * 9999);
    //    return twilio.client.messages
    //    .create({
    //       body: 'Your code is '+ code,
    //       from: '+14234558721',
    //       to: '+50256140515'
    //     })
    //    .then(message => res.status(200).send(usr));
    //    
    //}
    .catch((error) => res.status(501).send({ err: 'algo salio mal', error }));    
}

module.exports = {
    createUser
}