export interface Project {
    title: string
    info: ProjectInfoType[]
}
export interface ProjectInfoType {
    label: string
    list: ProjectItemType[]
}
export interface ProjectItemType {
    type: ItemType
    label: string
    link?: string
    text?: string
}
export enum ItemType {
    Link,
    Text,
}
