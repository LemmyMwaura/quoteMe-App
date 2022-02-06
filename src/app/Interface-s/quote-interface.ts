export class QuoteInterface {
    isMostLiked: boolean;
    upvoteNo:number;
    downvoteNo: number;

    constructor( public message: string, public author:string,){
        this.isMostLiked = false
        this.upvoteNo = 1;
        this.downvoteNo = 0;
    }
}
