// bottom tab stack interfaces
export type BottomTabParamList = {
  Shop: undefined;
  Feed: undefined;
  Cart: undefined;
  Account: undefined;
};

export enum BottomTabScreenNameEnum {
  SHOP = 'Shop',
  FEED = 'Feed',
  CART = 'Cart',
  ACCOUNT = 'Account'
}

// shop stack interfaces
export type ShopStackParamList = {
  Shop: undefined;
  Products: { filterBy: string };
};

export enum ShopStackScreenNamesEnum {
  SHOP = 'Shop',
  PRODUCTS = 'Products'
}

// feed stack interfaces
export type FeedStackParamList = {
  Feed: undefined;
};

export enum FeedStackScreenNamesEnum {
  FEED = 'Feed'
}

// cart stack interfaces
export type CartStackParamList = {
  Cart: undefined;
};

export enum CartStackScreenNamesEnum {
  CART = 'Cart'
}

// account stack interfaces
export type AccountStackParamList = {
  Account: undefined;
};

export enum AccountStackScreenNamesEnum {
  ACCOUNT = 'Account'
}
