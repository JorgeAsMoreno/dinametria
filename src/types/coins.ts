export interface ICoinRoot {
  additional_notices: any[]
  asset_platform_id: null
  block_time_in_minutes: number
  categories: string[]
  community_data: CommunityData
  country_origin: string
  description: {
    en: string
    es: string
  };
  detail_platforms: DetailPlatforms
  developer_data: DeveloperData
  genesis_date: Date
  hashing_algorithm: string
  ico_data: IcoData
  id: any
  image: Image
  last_updated: Date
  links: RootObjectLinks
  localization: any
  market_cap_rank: number
  market_data: MarketData
  name: string
  platforms: Platforms
  preview_listing: boolean
  public_notice: null
  sentiment_votes_down_percentage: number
  sentiment_votes_up_percentage: number
  status_updates: any[]
  symbol: string
  tickers: Ticker[]
  watchlist_portfolio_users: number
  web_slug: any
}

export interface Image {
  large: string
  small: string
  thumb: string
}

export interface Platforms {
  "": string
}

export interface CommunityData {
  facebook_likes: null;
  reddit_accounts_active_48h: number
  reddit_average_comments_48h: number
  reddit_average_posts_48h: number
  reddit_subscribers: number
  telegram_channel_user_count: null
  twitter_followers: number
}

export interface DetailPlatforms {
  "": Empty
}
 
export interface Empty {
  contract_address: string
  decimal_place: null
}

export interface DeveloperData {
  closed_issues: number
  code_additions_deletions_4_weeks: CodeAdditionsDeletions4_Weeks
  commit_count_4_weeks: number
  forks: number
  last_4_weeks_commit_activity_series: any[]
  pull_request_contributors: number
  pull_requests_merged: number
  stars: number
  subscribers: number
  total_issues: number
}
 
 export interface CodeAdditionsDeletions4_Weeks {
  additions: number
  deletions: number
}
 
 export interface IcoData {
  accepting_currencies: string
  amount_for_sale: null
  base_pre_sale_amount: null
  base_public_sale_amount: number
  bounty_detail_url: string
  country_origin: string
  description: null
  hardcap_amount: null
  hardcap_currency: string
  ico_end_date: Date
  ico_start_date: Date
  kyc_required: boolean
  links: any
  pre_sale_available: null
  pre_sale_end_date: null
  pre_sale_ended: boolean
  pre_sale_start_date: null
  quote_pre_sale_amount: null
  quote_pre_sale_currency: string
  quote_public_sale_amount: number
  quote_public_sale_currency: string
  short_desc: string
  softcap_amount: null
  softcap_currency: string
  total_raised: null
  total_raised_currency: string
  whitelist_available: null
  whitelist_end_date: null
  whitelist_start_date: null
  whitelist_url: string
}

export interface RootObjectLinks {
  announcement_url: string[]
  bitcointalk_thread_identifier: null
  blockchain_site: string[]
  chat_url: string[]
  facebook_username: string
  homepage: string[]
  official_forum_url: string[]
  repos_url: ReposURL
  subreddit_url: string
  telegram_channel_identifier: string
  twitter_screen_name: any
  whitepaper: string
}

export interface ReposURL {
  bitbucket: any[]
  github: string[]
}

export interface MarketData {
  ath: { [key: string]: number }
  ath_change_percentage: { [key: string]: number }
  ath_date: { [key: string]: Date }
  atl: { [key: string]: number }
  atl_change_percentage: { [key: string]: number }
  atl_date: { [key: string]: Date }
  circulating_supply: number
  current_price: { [key: string]: number }
  fdv_to_tvl_ratio: null
  fully_diluted_valuation: { [key: string]: number }
  high_24h: { [key: string]: number }
  last_updated: Date
  low_24h: { [key: string]: number }
  market_cap: { [key: string]: number }
  market_cap_change_24h:  number
  market_cap_change_24h_in_currency: { [key: string]: number }
  market_cap_change_percentage_24h: number
  market_cap_change_percentage_24h_in_currency: { [key: string]: number }
  market_cap_fdv_ratio: number
  market_cap_rank: number
  max_supply: null
  mcap_to_tvl_ratio: null
  price_change_24h: number
  price_change_24h_in_currency: { [key: string]: number }
  price_change_percentage_14d: number
  price_change_percentage_14d_in_currency: { [key: string]: number }
  price_change_percentage_1h_in_currency: { [key: string]: number }
  price_change_percentage_1y: number
  price_change_percentage_1y_in_currency: { [key: string]: number }
  price_change_percentage_200d: number;
  price_change_percentage_200d_in_currency: { [key: string]: number }
  price_change_percentage_24h:  number
  price_change_percentage_24h_in_currency: { [key: string]: number }
  price_change_percentage_30d: number
  price_change_percentage_30d_in_currency: { [key: string]: number }
  price_change_percentage_60d: number
  price_change_percentage_60d_in_currency: { [key: string]: number }
  price_change_percentage_7d:  number
  price_change_percentage_7d_in_currency: { [key: string]: number }
  roi: Roi
  total_supply: number
  total_value_locked: null
  total_volume: { [key: string]: number }
}
 
export interface Roi {
  currency: string
  percentage: number
  times: number
}

export interface Ticker {
  base: any
  bid_ask_spread_percentage: number
  coin_id:  any
  converted_last: { [key: string]: number }
  converted_volume: { [key: string]: number }
  is_anomaly: boolean
  is_stale: boolean
  last: number
  last_fetch_at: Date
  last_traded_at: Date
  market: Market
  target: string
  target_coin_id?: any
  timestamp: Date
  token_info_url: null
  trade_url: null | string
  trust_score: any
  volume: number
}

export interface Market {
  has_trading_incentive: boolean
  identifier: string
  name: string
}
