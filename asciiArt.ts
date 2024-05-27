import figlet from "figlet";

export default function asciiArt(text: string) {
  return  figlet.textSync(text);
}