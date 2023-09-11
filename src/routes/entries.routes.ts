import { Router } from 'express'
// import { validateSchema } from '../middlewares/validateSchema.ts'

const entriesRouter = Router()

entriesRouter.post('/entry')
entriesRouter.get('/entries')
entriesRouter.get('/entry/:id')
entriesRouter.put('/entry/:id')
entriesRouter.delete('/entry/:id')

export default entriesRouter
