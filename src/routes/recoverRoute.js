import Router from 'express'
import School from '../models/school'
import transporter from '../config/nodemailer'

const recoverRoute = Router()

recoverRoute.post('/pass', async (req, res) => {
	try {
		const school_info = await School.findOne({email_resp: req.body.email_resp})
		if(!school_info)
			return res.status(400).send({ message: 'O e-mail informado não está cadastrado no nosso banco de dados.' })

		const { email_resp } = school_info


		const email = await transporter.sendMail({
			from: "Astro support <astrosupport@astrooo.com.br>",
			to: email_resp,
			subject: "Recuperação da senha de acesso",
			html: '<h1>Recuperação da senha de acesso</h1><p>Para recuperar a sua senha clique no link e você será redirecionado a uma página para redefinir a sua senha.</p><a href="https://astrooo.herokuapp.com/home">redefinir senha<a/>'
		})
		console.log(email)
		 return res.status(200).send({message: 'Um e-mail com orientações para a recuperação da sua senha foi enviado para o seu e-mail. Verifique a sua caixa de entrada.'})
	} catch(err) {
		return res.status(400).send({ message: err })
	}	
})


export default recoverRoute
