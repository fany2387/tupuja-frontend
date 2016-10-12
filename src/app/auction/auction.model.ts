export class AuctionModel {
    objectId: string;
    name: string;
    pictures: string[];
    description: string;
    starting_price: number;
    list_price: number;
    status: string;
    current_winner: string;
    current_amount: number;
    placed_bids: number;
    updatedAt: Date;
    createdAt: Date;

    constructor(attributes) {
        
    }
}