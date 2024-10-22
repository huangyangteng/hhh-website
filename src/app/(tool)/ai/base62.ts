const STANDARD_BASE = 256
const TARGET_BASE = 62

const CharacterSets = {
    GMP: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        .split('')
        .map((c) => c.charCodeAt(0)),
    INVERTED: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        .split('')
        .map((c) => c.charCodeAt(0)),
}

function getBytes(string: string): number[] {
    return Array.from(string, (c) => c.charCodeAt(0) & 255)
}

function getString(byteArray: number[]): string {
    return String.fromCharCode(...byteArray)
}

function createLookupTable(alphabet: number[]): number[] {
    const lookup = new Array(256).fill(null)
    alphabet.forEach((charCode, index) => {
        lookup[charCode] = index
    })
    return lookup
}

function translate(array: number[], table: number[]): number[] {
    return array.map((item) => table[item])
}

function convert(array: number[], fromBase: number, toBase: number): number[] {
    const result: number[] = []
    while (array.length > 0) {
        let remainder = 0
        const newArray: number[] = []

        for (const item of array) {
            const accumulator = item + remainder * fromBase
            const digit = Math.floor(accumulator / toBase)
            remainder = accumulator % toBase

            if (newArray.length > 0 || digit > 0) {
                newArray.push(digit)
            }
        }

        result.push(remainder)
        array = newArray
    }

    result.reverse()
    return result
}

function encode(bytes: number[], alphabet: number[]): number[] {
    const encoded = convert(bytes, STANDARD_BASE, TARGET_BASE)
    return translate(encoded, alphabet)
}

function decode(encoded: number[], lookup: number[]): number[] {
    const bytes = translate(encoded, lookup)
    return convert(bytes, TARGET_BASE, STANDARD_BASE)
}

function encodeStr(
    string: string,
    characterSet: number[] = CharacterSets.GMP,
): string {
    const bytes = getBytes(string)
    const encoded = encode(bytes, characterSet)
    return getString(encoded)
}

function decodeStr(
    encodedString: string,
    characterSet: number[] = CharacterSets.GMP,
): string {
    const encoded = getBytes(encodedString)
    const lookup = createLookupTable(characterSet)
    const decodedBytes = decode(encoded, lookup)
    return getString(decodedBytes)
}

export { encodeStr, decodeStr }
