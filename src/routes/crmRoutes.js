const routes = (app)=>{

    app.route('/contact')
      .get((req, res, next)=>{

          console.log(`La route est ${req.originalUrl}`)
          console.log(`la methode est ${req.method}`)

          next()
      }, (req, res)=>{
          res.send("Demande GET avec succès")
      })
      

      .post((req, res)=>{
        res.send("Demande POST avec succès")
      })


      app.route('/contact/:contactId')
      .put((req, res)=>{
          res.send("Demande PUT avec succès")
      })

      .delete((req, res)=>{
        res.send("Demande DELETE avec succès")
      })
}


export default routes