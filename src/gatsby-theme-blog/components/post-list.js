import React from "react"

import PostLink from "./post-link"

const PostList = ({ posts }) => (
  <>
    {posts.filter(node => !(Array.isArray(node.tags) && node.tags.includes("hidden"))).map((node) => (
      <PostLink key={node.slug} {...node} />
    ))}
  </>
)

export default PostList
