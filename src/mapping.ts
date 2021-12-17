import { AuctionCreated } from '../generated/SaleAuction/SaleAuction'
import { Auction } from '../generated/schema'

export function handleAuctionCreated(event: AuctionCreated): void {
    let auction = new Auction(event.params.auctionId.toHex())
    auction.hero = event.params.tokenId
    auction.winner = event.params.winner.toString()
    auction.price = event.params.startingPrice
    auction.save()
}