const getPhones = function(req,res)
{
    res
    .status(200)
    .json({"status" : "success"});
};

const createPhone= function(req,res)
{
    res
    .status(200)
    .json({"status" : "success"});
};
const getSinglePhone= function(req,res)
{
    res
    .status(200)
    .json({"status" : "success"});
};
const updatePhone = function(req,res)
{
    res
    .status(200)
    .json({"status" : "success"});
};
const deletePhone = function(req,res)
{
    res
    .status(200)
    .json({"status" : "success"});
};

module.exports = {
    getPhones,
    createPhone,
    getSinglePhone,
    updatePhone,
    deletePhone  
};