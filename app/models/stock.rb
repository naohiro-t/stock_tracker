class Stock < ActiveRecord::Base

  # this method is to query data from db
  def self.find_by_ticker(ticker_symbol)
    where(ticker: ticker_symbol).first
  end

  # this method is available without create instance
  def self.new_from_lookup(ticker_symbol)
    # look up stock info, store it in lookup_stock
    lookup_stock = StockQuote::Stock.quote(ticker_symbol)

    # if name is invalid return nil
    return nil unless lookup_stock.name

    new_stock = new(ticker: lookup_stock.symbol, name: lookup_stock.name)
    new_stock.last_price = new_stock.price

    new_stock
  end

  # get stock price
  def price
    closing_price = StockQuote::Stock.quote(ticker).close
    return "#{closing_price} (Closing)" if closing_price

    opening_price = StockQuote::Stock.quote(ticker).open
    return "#{opening_price} (Opening)" if opening_price
    'Unavailable'
  end

  # def price
  #   last_price = StockQuote::Stock.quote(ticker).close
  #   # if closing price is nil, get open price
  #   if !last_price
  #     last_price = StockQuote::Stock.quote(ticker).open
  #   end
  #   return last_price
  # end

end
