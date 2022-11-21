const Router = require('express').Router()
const controller = require('../controllers/ReviewController')
// You Do

Router.get('/view/', controller.getAllReviews)
Router.get('/view/:review_id', controller.GetReviewDetails)

// Router.post('/:user_id', controller.CreateReview)
// Router.put('/:review_id', controller.UpdateReview)
// Router.delete('/:review_id', controller.DeleteReview)

// You Do
module.exports = Router
