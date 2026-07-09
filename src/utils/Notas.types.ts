export type Nota =
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#"
  | "A"
  | "A#"
  | "B";

export type Oitava = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

export type NotaComOitava = `${Nota}${Oitava}`;

export type NotaType = {
  nota: Nota;
};