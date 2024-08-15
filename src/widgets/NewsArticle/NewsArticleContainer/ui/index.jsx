import React from "react"
import "./newsContainer.scss"


const NewsArticle = ({src}) => {
  return (
    <div className="news-article-block">
      <img src={src} alt="NewsImg"/>
      <p className="title20-bold-urbanist">Instagram Introduced New AI Tool to enhace User Experience</p>
      <p className="title14-regular-urbanist">Meta is transforming enhancing Instagram features with AI tools. The tools, which are still under development, enable users to unleash their creativity and edit their photos and videos with ease, showcasing Meta’s commitment to innovation in social media.</p>
      <p className="title14-regular-urbanist">One of the features that Instagram is reportedly developing for its Story editor is an AI tool that can erase unwanted objects from photos. The tool would allow users to create cleaner and more professional-looking stories without needing external apps or manually editing their images. The Story editor is expected to work on static and moving images and preserve the background and lighting of the original photo.  </p>
      <p className="title14-regular-urbanist">Mobile developer Alessandro Paluzzi has shared some other leaks for Instagram. According to him, some of the upcoming features on the app include a Quiz game on Instagram Live, disappearing messages, events creation, and a new sharing option for Stories.</p>
    </div>
  )
}

export default NewsArticle
