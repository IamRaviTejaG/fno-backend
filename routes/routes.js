import baseController from '../controllers/baseController'
import optionChainController from '../controllers/optionChainController'

const routes = router => {
  router.route('/chain/:symbol')
    .get(optionChainController.getOptionChain)

  router.route('/list/:type?')
    .get(baseController.getList)

  router.route('/lotsize/:symbol?')
    .get(baseController.getLotSize)
}

export default routes
