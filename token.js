import { get_encoding, encoding_for_model } from "tiktoken";

const encoderForGpt2 = get_encoding("gpt2");

const encoded = encoderForGpt2.encode("Hello Iam manu-mistry");

console.log(encoded);

const decoder = encoderForGpt2.decode(encoded);

console.log(new TextDecoder().decode(decoder));
