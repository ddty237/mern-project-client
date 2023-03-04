import './singlePost.css'

export default function SinglePost() {
  return (
      <div className='singlePost'>
          <div className="singlePostWrapper">
              <img src="https://images.pexels.com/photos/5758466/pexels-photo-5758466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="singlePostImg"
              />
              <h1 className="singlePostTitle">
                  Lorem ipsum dolor sit amet.
                  <div className="singlePostEdit">
                      <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
                      <i class="singlePostIcon fa-solid fa-trash"></i>
                  </div>
              </h1>
              <div className="singlePostInfo">
                  <span className='singlePostAuthor'>Author : <b>Datty</b></span>
                  <span className='singlePostDate'>1 hour ago</span>
              </div>
              <p className='singlePostDesc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed hic quo quos consequuntur cupiditate officiis sapiente error aliquid laborum, quod, praesentium ea? Sunt quisquam, nulla fugit cupiditate numquam minima,
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed hic quo quos consequuntur cupiditate officiis sapiente error aliquid laborum, quod, praesentium ea? Sunt quisquam, nulla fugit cupiditate numquam minima,
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed hic quo quos consequuntur cupiditate officiis sapiente error aliquid laborum, quod, praesentium ea? Sunt quisquam, nulla fugit cupiditate numquam minima.
              </p>
          </div>
      </div>
  )
}
