export interface IToken {
  token: string
}

export interface IUser {
  email: string
  password: string
}

export interface ILink {
  url: string
  name: string
}

export interface ICategory {
  name: string
  image?: string
  _id?: string
}

export interface IResponseMessage {
  message: string
}

export interface IPosition {
  name: string
  cost: string
  category: string
  _id?: string
  quantity?: number
  user?: string
}

export interface IModalInstance {
  open?(): void
  close?(): void
  destroy?(): void
}

export interface IPickerInstance extends IModalInstance {
  date?: Date
}

export interface IHistoryFilter {
  order?: number
  start?: Date
  end?: Date
}

export interface IOrderListPosition {
  name: string
  cost: string
  quantity: number
  _id?: string
}

export interface IOrder {
  date?: Date
  order?: string
  list: IOrderListPosition[]
  user?: string
  _id?: string
}

export interface IAnalyticsOverview {
  gain: IAnalyticsOverviewItem
  orders: IAnalyticsOverviewItem
}

export interface IAnalyticsOverviewItem {
  yesterday: number
  isHigher: boolean
  percent: number
  compare: number
}

export interface IAnalytics {
  average: number
  chart: IAnalyticsChartPart[]
}

export interface IAnalyticsChartPart {
  label: string
  order: number
  gain: number
}
