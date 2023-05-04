export class StringUtility {
    static showXWords(sentence: string, x: number): string {
        return sentence.split(" ").slice(0, x).join(" ")
    }
}