import React from "react"
import "./newsContainer.scss"
import { NewsBlock } from "../../../../features"
import {
  Prev1,
  Prev2,
  Prev3,
  Prev4,
  Prev5,
} from "../../../../shared/lib/icons/icons"

const InfoBlocks = () => {
  return (
    <div className="info-blocks">
      <NewsBlock
        link={"/news-article-1"}
        img={Prev1}
        text={"Instagram Introduced New AI Tool to enhace User Experience"}
      />
      <NewsBlock
        link={"/news-article-2"}
        img={Prev2}
        text={"Instagram Introduces New Features for Direct Messaging"}
      />
      <NewsBlock
        link={"/news-article-3"}
        img={Prev3}
        text={"New Instagram Analytics Tools for Business Accounts"}
      />
      <NewsBlock
        link={"/news-article-4"}
        img={Prev4}
        text={"Instagram Launches Collaborative Posts for Wider Reach"}
      />
      <NewsBlock
        link={"/news-article-5"}
        img={Prev5}
        text={"Instagram Expands 'Add Yours' Sticker to All Users"}
      />
    </div>
  )
}

export default InfoBlocks
