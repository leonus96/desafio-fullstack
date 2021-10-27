import express from 'express'
import customerController from './controllers/customer.controller'
import { awaitHandlerFactory } from './utils/commons.utils'

const router = express.Router()

router.get('/customer/', awaitHandlerFactory(customerController.index))
router.get('/customer/average/', awaitHandlerFactory(customerController.average))
router.post('/customer/', awaitHandlerFactory(customerController.create))

export default router
