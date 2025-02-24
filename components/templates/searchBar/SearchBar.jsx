import React from 'react'

function SearchBar() {
  return (
    <div className="search-style-2">
    <form action="#">
        <select className="select-active">
            <option>همه دسته‌بندی‌ها</option>
            <option>لباس زنانه</option>
            <option>لباس مردانه</option>
            <option>تلفن همراه</option>
            <option>کامپیوتر و اداری</option>
            <option>لوازم الکترونیکی مصرفی</option>
            <option>جواهرات و لوازم جانبی</option>
            <option>خانه و باغ</option>
            <option>چمدان و کیف</option>
            <option>کفش</option>
            <option>مادر و کودک</option>
        </select>
        <input type="text" placeholder="جستجو برای کالاها…" />
        <button type="submit"><i className="far fa-search"></i></button>
    </form>
</div>
  )
}

export default SearchBar