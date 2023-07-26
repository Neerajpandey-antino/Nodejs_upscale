const userController = async (req, res) => {
    res.status(200).send({
      message: "user Route",
      success: true,
    });
  };
  
  module.exports ={userController}