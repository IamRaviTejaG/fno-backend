import baseController from '../controllers/baseController'
import oiController from '../controllers/oiController'
import optionChainController from '../controllers/optionChainController'

const routes = router => {
  router.get('/', baseController.index)
  router.route('/list/:type?').get(baseController.getList)
  router.route('/lotsize/:symbol?').get(baseController.getLotSize)

  router.route('/chain/:symbol').get(optionChainController.getOptionChain)

  router.route('/oi/live/:symbol').get(oiController.getLiveOi)
  router.route('/oi/change/:symbol').get(oiController.getOiChange)
}

export default routes
