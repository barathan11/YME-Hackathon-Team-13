const { Router } = require('express')
const UserActivities = require('../../models/UserActivity')
 
const router = Router()
 
router.get('/', async (req, res) => {
   try {
       const userActivities = await UserActivities.find()
       if (!userActivities) throw new Error('No userActivities')
       const sorted = userActivities.sort((a, b) => {
           return new Date(a.date).getTime() - new Date(b.date).getTime()
       })
       res.status(200).json(sorted)
   } catch (error) {
       res.status(500).json({ message: error.message })
   }
})
 
router.post('/', async (req, res) => {
   const newUserActivities = new UserActivities(req.body)
   try {
       const userActivity = await newUserActivities.save()
       if (!userActivity) throw new Error('Something went wrong saving the userActivity')
       res.status(200).json(userActivity)
   } catch (error) {
       res.status(500).json({ message: error.message })
   }
})
 
router.put('/:id', async (req, res) => {
   const { id } = req.params
 
   try {
       const response = await UserActivities.findByIdAndUpdate(id, req.body)
       if (!response) throw Error('Something went wrong ')
       const updated = { ...response._doc, ...req.body }
       res.status(200).json(updated)
   } catch (error) {
       res.status(500).json({ message: error.message })
   }
})
 
router.delete('/:id', async (req, res) => {
   const { id } = req.params
   try {
       const removed = await UserActivities.findByIdAndDelete(id)
       if (!removed) throw Error('Something went wrong ')
       res.status(200).json(removed)
   } catch (error) {
       res.status(500).json({ message: error.message })
   }
})
 
module.exports = router