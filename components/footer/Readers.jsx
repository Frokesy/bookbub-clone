import React from 'react'

const Readers = () => {
  return (
    <div>
      <h2 className="font-semibold uppercase text-[20px]">Readers</h2>
      <ul className="text-[13px] lg:flex lg:flex-col grid grid-cols-2 pt-3 pb-6 space-y-2">
            <li>What Is Bookbub?</li>
            <li>Free Ebooks</li>
            <li>Free Kindle Books</li>
            <li>The Bookbub Blog</li>
            <li>Invite Your Friends</li>
            <li>Help</li>
            <li>All Authors</li>
            <li>All Books</li>
        </ul>
        <hr className="pb-4 lg:hidden" />
    </div>
  )
}

export default Readers
