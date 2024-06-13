import { describe, it, expect } from 'vitest'
import { splitPhoneticsSymbol } from '@/app/english/_utils/english'

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
