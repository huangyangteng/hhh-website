import { fetchKimiAi } from '@/apis/ai'
import { getVariablePrompt } from '@/utils/prompt'
import { useQuery } from '@tanstack/react-query'

export const useVariable = (input: string) => {
    const { isLoading, data } = useQuery({
        queryKey: ['ai', 'variable', input],
        queryFn: async () => {
            return await fetchVariable(input)
        },
        enabled: !!input,
    })
    return { isLoading, data: data || [] }
}

async function fetchVariable(input: string) {
    try {
        const res = await fetchKimiAi(getVariablePrompt(input))
        return eval('(' + res + ')')
    } catch (e) {
        console.log('error', e)
        return null
    }
}
