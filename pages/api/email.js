
import sgMail from '@sendgrid/mail'


export default function email(req, res){

    switch(req.method){

        case 'POST':
            res.status(200).json({status: 'OK'});

            sgMail.setApiKey(process.env.SENDGRID_API_KEY)

            const data = JSON.parse(req.body)

            const conf = {
                to: data.email,
                from: 'no-reply@mikehenshaw.com',
                subject: 'Confirmation: Received message',
                text: `Thank you ${data.firstName} for reaching out to me! I will follow up on your message within 24-48 hours.`
            }
        
            const myMessage ={
                to: 'mike.henshaw.code@gmail.com',
                from: 'Web-Message@mikehenshaw.com',
                subject: `new Message from ${data.firstName} ${data.lastName}`,
                text: 
                `
                Name: ${data.firstName} ${data.lastName}
                Email: ${data.email}
                Message: ${data.message}
                `
            }

            sgMail.send(myMessage)
            .then(() =>{
                console.log(`Email from ${data.email} received.`)
                
                sgMail.send(conf)
                .then(() => {
                    console.log(`Confirmation email sent to ${data.email}.`)
                })
                .catch((error) => {
                    console.log(error)
                })
            })
            .catch((error) => {
                console.log(error)
            })

        break;


    }

}

