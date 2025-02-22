enum Path {
  ROOT = '/',
  DASHBOARD = '/dashboard',
  XVS = '/xvs',
  MARKET = '/market',
  MARKET_DETAILS = '/market/:vTokenId',
  TRANSACTION = '/transaction',
  HISTORY = '/history',
  VAULT = '/vault',
  VOTE = '/vote',
  VOTE_LEADER_BOARD = '/vote/leaderboard',
  VOTE_PROPOSAL_DETAILS = '/vote/proposal/:id',
  VOTE_ADDRESS = '/vote/address/:address',
  CONVERT_VRT = '/convert-vrt',
  FAUCET = '/faucet',
}

export default Path;
