import React from 'react'

const PublishersAndAuthors = () => {
  return (
    <div>
      <h2 className="font-semibold uppercase text-[20px]">Publishers &amp; Authors</h2>
      <ul className="text-[13px] lg:flex lg:flex-col grid grid-cols-2 pt-3 pb-6 space-y-2">
            <li>partner&apos;s overview </li>
            <li>submit new deal</li>
            <li>partner dashboard</li>
            <li>claim an author profile</li>
            <li>bookbub partners blog</li>
            <li>partner FAQ</li>
        </ul>
        <hr className="pb-4 lg:hidden" />
    </div>
  )
}

export default PublishersAndAuthors
