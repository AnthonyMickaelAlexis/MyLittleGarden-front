import React from 'react'
import { Form, TextArea, Button } from 'semantic-ui-react'
import './Contact.scss';


const ContactForm = () => (
<div className="contactForm">
  <Form>
    <h2 className="connectionTitle">Nous contacter</h2>
    <h3>Vous avez besoin d'aide ?</h3>
    <p className="contactText">Envoyez-nous votre question en remplissant le formulaire suivant, nous vous recontacterons dans les plus brefs délais.</p>
    <Form.Field>
        <label>Nom d'utilisateur</label>
        <input placeholder="Nom d'utilisateur" />
    </Form.Field>
    <Form.Field>
        <label>Adresse e-mail</label>
        <input placeholder="e-mail" />
    </Form.Field>
    <TextArea placeholder='Votre message' />
    <div className="divButtonContact">
        <Button type='submit'>Envoyer votre message</Button>
    </div>
  </Form>
  </div>
)

export default ContactForm;