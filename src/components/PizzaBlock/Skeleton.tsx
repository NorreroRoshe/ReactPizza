import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="75" y="274" rx="0" ry="0" width="0" height="1" />
    <rect x="101" y="306" rx="0" ry="0" width="1" height="0" />
    <circle cx="134" cy="136" r="125" />
    <rect x="-1" y="282" rx="15" ry="15" width="280" height="32" />
    <rect x="-1" y="331" rx="10" ry="10" width="280" height="88" />
    <rect x="-1" y="441" rx="10" ry="10" width="95" height="30" />
    <rect x="52" y="449" rx="0" ry="0" width="1" height="1" />
    <rect x="123" y="433" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton

