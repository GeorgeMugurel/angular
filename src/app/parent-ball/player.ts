export class Player {
    username: string;
    childBall: boolean[];
    id: number;

    removeBall() {
        this.childBall.pop();
    }
    
    pushBall() {
        this.childBall.push(true);
    }
}