import React from 'react'

const BlogPosts = () => {
  return (
    <div>
      <h2 className="font-semibold uppercase text-[20px]">Publishers blog posts</h2>
        <ul className="text-[13px] pt-3 capitalize lg:space-y-2 space-y-3 pb-6">
            <li>62 of the best book series of all time </li>
            <li>find a book from a vague description</li>
            <li>top fantasy worlds in literature</li>
            <li>malcolm&apos;s gladwell&apos;s best books</li>
            <li>books to make you smarter</li>
            <li>book club kit: {"'"}Lilac Girls{"'"}</li>
        </ul>
        <hr className="pb-4 lg:hidden" />
    </div>
  )
}

export default BlogPosts
