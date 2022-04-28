export const KEY_DERIVATION_PATH: "m/44'/397'/0'";
export function generateSeedPhrase(entropy: any): {
    seedPhrase: any;
    secretKey: string;
    publicKey: string;
};
export function normalizeSeedPhrase(seedPhrase: any): any;
export function parseSeedPhrase(seedPhrase: any, derivationPath: any): {
    seedPhrase: any;
    secretKey: string;
    publicKey: string;
};
export function findSeedPhraseKey(seedPhrase: any, publicKeys: any): {};
