export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Word = {
    id: number;
    word: string;
    definifion: string;
    definifion_level: Difficulty;
};
