let email = ['email01@gmail.com' , 'email02@gmail.com' , 'email03@gmail.com' , 'email04@gmail.com']

email.forEach( (email, cadastro, ArrayCompleto)=> {
    console.log(`E-mail enviado para: ${email}`);
    console.log(`ID do e-mail: ${cadastro}`);
    console.log(`Lista: ${ArrayCompleto}`);
    console.log(`---------------------------------------------------------`);
})

