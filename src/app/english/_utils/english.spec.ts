import { describe, it, expect } from 'vitest'
import { splitPhoneticsSymbol, isWord } from '@/app/english/_utils/english'

describe('Test Split Phonetics Symbol', () => {
    it('should return success by single symbol', () => {
        const input = 'bɪkɔːz'
        const expectResult = ['b', 'ɪ', 'k', 'ɔ', 'z']
        const output = splitPhoneticsSymbol(input)
        expect(output).toEqual(expectResult)
    })

    it('should return success by double symbol', () => {
        const input = 'beɪbi'
        const expectResult = ['b', 'eɪ', 'b', 'i']
        const output = splitPhoneticsSymbol(input)
        expect(output).toEqual(expectResult)
    })
})

describe('Test is English Word', () => {
    it('should return true when input hello', () => {
        const input = 'hello'
        expect(isWord(input)).toBe(true)
    })
    it('should return true when input Hello', () => {
        const input = 'Hello'
        expect(isWord(input)).toBe(true)
    })
    it('should return false when input hello123', () => {
        const input = 'hello123'
        expect(isWord(input)).toBe(false)
    })
    it('should return false when input hello world', () => {
        const input = 'hello world'
        expect(isWord(input)).toBe(false)
    })
})
