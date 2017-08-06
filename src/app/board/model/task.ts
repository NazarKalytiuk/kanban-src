import { TaskState } from './taskState';
export class Task {
    public name: string;
    public description: string;
    public priority: Priority;
    public creationTime: Date;
    public state: TaskState;
    constructor() {
        this.state = TaskState.doIt;
    }

}
export enum Priority {
    low,
    normal,
    high
}
