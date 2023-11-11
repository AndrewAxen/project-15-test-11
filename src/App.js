import React, { useState, useEffect } from 'react'
import Menu from './components/Menu'
import NewsGrid from './components/NewsGrid'

function App () {

    // State to store news items

const [items, setItems] = useState([])

// State to track the active menu item

const [active, setActive] = useState(1)

// State to store the selected news category

const [category, setCategory] = useState("general")

 // Fetch news data based on the selected category
 
useEffect (() => {
fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=0028e61e140c407799f335f17f55f68b`)
.then(res => res.json())
.then(data => setItems(data.articles))
},
[category]
)



return (
<div className="App">
<div className="title-image-container">
<img className="title-image" src="https://i.ibb.co/Tmt5zJR/title2.png" alt="The Breaking News" />
</div>
<Menu active={active} setActive={setActive} setCategory={setCategory}/>
<NewsGrid items={items}/>
</div>

)

}

export default App