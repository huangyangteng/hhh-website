import { fetchKimiAi } from '@/apis/ai'
import { getPrompt, PromptType } from '@/app/(tool)/ai/prompt'
import { useQuery } from '@tanstack/react-query'

export const useAiTool = (input: string, type: PromptType) => {
    const { isLoading, data } = useQuery({
        queryKey: ['ai', input, type],
        queryFn: async () => {
            return await fetchAi(input, type)
        },
        enabled: !!input,
    })
    return { isLoading, data: data || [] }
}
async function fetchAi(input: string, type: PromptType) {
    try {
        const res = await fetchKimiAi(getPrompt(type)(input))
        return eval('(' + res + ')')
    } catch (e) {
        console.log('error', e)
        return null
    }
}
