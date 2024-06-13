import { Skeleton } from 'antd'

interface HSkeletonProp {
    loading: boolean
    width?: number
    height?: number
    children: React.ReactElement
}

export default function HSkeleton({
    loading,
    width,
    height,
    children,
}: HSkeletonProp) {
    return loading ? (
        <div
            className="skeleton-wrapper"
            style={{
                width: width ? width + 'px' : '100%',
                height: height ? height + 'px' : '100%',
            }}
        >
            <Skeleton.Node active={true}></Skeleton.Node>
        </div>
    ) : (
        <>{children}</>
    )
}
