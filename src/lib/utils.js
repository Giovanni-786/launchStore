module.exports = {

    
    date: function(timestamp){
        const date = new Date(timestamp)

            

        //yyyy
        const year = date.getUTCFullYear()

        //mm
        let month = `0${date.getUTCMonth() + 1}`.slice(-2)

        //dd
        let day = `0${date.getUTCDate()}`.slice(-2)

        return{
           day,
           month,
           year,
           iso: `${year}-${month}-${day}`, // Tipo iso.
           birthDay: `${day}/${month}`,
           format: `${day}/${month}/${year}`
        } 
        
    },

    formatPrice(price){
        return new Intl.NumberFormat('pt-BR',{
            style: 'currency', //1.00
            currency: 'BRL' // R$

        }).format(price/100)

    }

  
    


}