import baseController from '../controllers/baseController'
import oiController from '../controllers/oiController'
import optionChainController from '../controllers/optionChainController'

const routes = router => {
  router.get('/', baseController.home)

  router.get('/api', baseController.index)

  router.route('/api/list/:type?').get(baseController.getList)
  router.route('/api/lotsize/:symbol').get(baseController.getLotSize)

  router.route('/api/chain/:symbol').get(optionChainController.getOptionChain)

  router.route('/api/oi/live/:symbol').get(oiController.getLiveOi)
  router.route('/api/oi/change/:symbol').get(oiController.getOiChange)

  router.route('/api/status').get(baseController.getMarketStatus)
}

export default routes
