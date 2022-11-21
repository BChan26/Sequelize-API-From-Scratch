const { Review} = require('../models')

const getAllReviews = async (req, res) => {
    try {
        const review = await Review.findAll()
        res.send(review)
    }catch (error) {
        throw error
    }
}

const GetReviewDetails = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.review_id)
    //review_id needs to match in reviewrouter.js, line 6
    res.send(review)
  } catch (error) {
    throw error
  }
}

// const CreateTwert = async (req, res) => {
//   try {
//     let ownerId = parseInt(req.params.user_id)
//     let reviewBody = {ownerId, ...req.body}
//     let review = await Review.create(reviewBody)
//     res.send(review)
//   } catch (error) {
//     throw error
//   }
// }

// const UpdateTwert = async (req, res) => {
//   try {
//     let reviewId = parseInt(req.params.user_id)
//     //this is referencing the model's ID
//     let updatedTwert = await Twerts.update(req.body, {
//       where: {id: twertId},
//       returning: true
//     })
//     res.send(updatedTwert)
//   } catch (error) {
//     throw error
//   }
// }

// const DeleteTwert = async (req, res) => {
//   try {
//     let twertId = parseInt(req.params.twert_id)
//     await Twerts.destroy({where: {id: twertId}})
//     res.send({msg: `deleted Twert with ID of ${twertId}`})

//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
GetReviewDetails,
getAllReviews
//   CreateReview,
//   UpdateReview,
//   DeleteReview
}
