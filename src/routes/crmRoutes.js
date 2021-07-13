import { 
  adNewContact,
  getContact,
  getContactWdthId,
  updateContact,
  deleteContact
 } from '../controllers/crmControllers'

const routes = (app)=>{

    app.route('/contact')
      .get((req, res, next)=>{

          console.log(`La route est ${req.originalUrl}`)
          console.log(`la methode est ${req.method}`)

          next()
      }, getContact)
      

      .post(adNewContact)


      app.route('/contact/:contactId')
      // Recherche du contact avec son id
      .get(getContactWdthId)


      // Mise a jour d'un conttact 
      .put(updateContact)



      //Supression d'un contact  
      .delete(deleteContact)
}


export default routes