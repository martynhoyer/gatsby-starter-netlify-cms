import React from 'react'

const Content = ({ content }) => <div>{content}</div>

export const HTMLContent = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
)

export default Content
