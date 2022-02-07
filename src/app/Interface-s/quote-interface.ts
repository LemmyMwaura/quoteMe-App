export class QuoteInterface {
    isMostLiked: boolean;
    upvoteNo:number;
    downvoteNo: number;
    totalVotes: number;
    date:any;

    constructor( public message: string, public author:string, public user:string){
        this.isMostLiked = false
        this.upvoteNo = 1;
        this.downvoteNo = 0;
        this.totalVotes = 1;
        this.date = new Date()
    }
}
