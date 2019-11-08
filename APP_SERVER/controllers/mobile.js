var mobileArray = [
    {title:"Samsung" ,model: "Galaxy Note9"},
    {title:"Motorola Moto" ,model:"G7 Power"},
      {title:"Google" ,model:"Pixels"},
    {title:"IPhone", model:"XS Max"}
    
   
];

const mobile =function(req,res)
{
    res.render('list-display', {mobiles: mobileArray});
};
module.exports = {
    
    mobile
};