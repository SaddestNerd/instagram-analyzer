import React from "react"
import "./newsContainer.scss"
import { NewsBlock } from "../../../../features"
import { TestNews } from "../../../../shared/lib/icons/icons"

const InfoBlocks = ({ text, onClick }) => {
  return (
    <div className="info-blocks">
      <NewsBlock
        img={TestNews}
        text={"Instagram Introduced New AI Tool to enhace User Experience"}
        link={"/news-article"}
      />
      <NewsBlock
        img={TestNews}
        text={"Instagram Introduced New AI Tool to enhace User Experience"}
        link={"/news-article"}

      />
      <NewsBlock
        img={TestNews}
        text={"Instagram Introduced New AI Tool to enhace User Experience"}
        link={"/news-article"}
      />
      <NewsBlock
        img={TestNews}
        text={"Instagram Introduced New AI Tool to enhace User Experience"}
        link={"/news-article"}
      />
      <NewsBlock
        img={TestNews}
        text={"Instagram Introduced New AI Tool to enhace User Experience"}
        link={"/news-article"}
      />
      <NewsBlock
        img={TestNews}
        text={"Instagram Introduced New AI Tool to enhace User Experience"}
        link={"/news-article"}
      />
      <NewsBlock
        img={TestNews}
        text={"Instagram Introduced New AI Tool to enhace User Experience"}
        link={"/news-article"}
      />
    </div>
  )
}

export default InfoBlocks
