import React from "react"
import "./newsContainer.scss"
import { NewsBlock } from "../../../../features"
import { TestNews } from "../../../../shared/lib/icons/icons"

const InfoBlocks = () => {
  return (
    <div className="info-blocks">
      <NewsBlock
        img={TestNews}
        text={"Instagram Introduced New AI Tool to enhace User Experience"}
      />
      <NewsBlock
        img={TestNews}
        text={"Instagram Introduced New AI Tool to enhace User Experience"}
      />
      <NewsBlock
        img={TestNews}
        text={"Instagram Introduced New AI Tool to enhace User Experience"}
      />
      <NewsBlock
        img={TestNews}
        text={"Instagram Introduced New AI Tool to enhace User Experience"}
      />
      <NewsBlock
        img={TestNews}
        text={"Instagram Introduced New AI Tool to enhace User Experience"}
      />
      <NewsBlock
        img={TestNews}
        text={"Instagram Introduced New AI Tool to enhace User Experience"}
      />
      <NewsBlock
        img={TestNews}
        text={"Instagram Introduced New AI Tool to enhace User Experience"}
      />
    </div>
  )
}

export default InfoBlocks
