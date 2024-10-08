//variable naming

export enum PromptType {
    VariableNaming,
}
export const getVariablePrompt = (input: string) => {
    return `
variable naming
Input: 用户是否登录
Output: 
["isLoggedIn","isUserLoggedIn","userLoggedIn"]
Input:${input}
Output:
`
}

const map = {
    [PromptType.VariableNaming]: getVariablePrompt,
}
export const getPrompt = (type: PromptType) => {
    return map[type]
}
