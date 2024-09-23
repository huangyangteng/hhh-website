//variable naming
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
