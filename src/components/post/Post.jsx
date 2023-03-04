import './post.css'

export default function Post() {
  return (
      <div className='post'>
          <img
              className='postImg'
              src="https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="" />
          <div className="postInfo">
              <div className="postCats">
                  <span className="postCat">Music</span>
                  <span className="postCat">Life</span>
              </div>
              <span className='postTitle'>
                  Lorem, ipsum dolor sit amet
              </span>
              <br />
              <span className="postDate">1 hour ago</span>
          </div>
          <p className='postDesc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque magnam deserunt ipsum nisi placeat! Rerum, consectetur! Cupiditate quibusdam illo, alias sequi quo veritatis laborum quia corrupti, ipsa tempore deleniti.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque magnam deserunt ipsum nisi placeat! Rerum, consectetur! Cupiditate quibusdam illo, alias sequi quo veritatis laborum quia corrupti, ipsa tempore deleniti.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque magnam deserunt ipsum nisi placeat! Rerum, consectetur! Cupiditate quibusdam illo, alias sequi quo veritatis laborum quia corrupti, ipsa tempore deleniti.
          </p>
    </div>
  )
}
