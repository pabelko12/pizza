import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={300}
        height={500}
        viewBox="0 0 300 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"

    >

        <circle cx="138" cy="121" r="119" />
        <rect x="-2" y="248" rx="10" ry="10" width="280" height="25" />
        <rect x="-3" y="287" rx="10" ry="10" width="280" height="88" />
        <rect x="3" y="390" rx="6" ry="6" width="90" height="30" />
        <rect x="124" y="387" rx="18" ry="18" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton