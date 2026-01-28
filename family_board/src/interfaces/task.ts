

export default interface Task{
    message: string;
    items: {
        id: number;
        task: string;
        isCompleted: boolean;
    }[];
}