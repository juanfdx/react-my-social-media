import './PostList.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserProfileBadge } from '../../ui/UserProfileBadge/UserProfileBadge'
import { LinkBtn } from '../../ui/LinkBtn/LinkBtn'
import { FormInput } from '../../form/FormInput/FormInput'
import { posts } from '../../../data/posts'
import { comments } from '../../../data/comments'



export const PostList = () => {

  const [favoriteId, setFavoriteId] = useState('');
  const [openCommentsId, setOpenCommentsId] = useState<string | null>(null);

  const handleFavorite = (id: string) => {
    if (favoriteId === id) setFavoriteId(''); 
    else setFavoriteId(id);
  }

  const toggleComments = (postId: string) => {
    setOpenCommentsId(prev => (prev === postId ? null : postId));
  };



  return (
    <div className='post-list'>
      <div className='post-list__container'>

        {posts.map(post => (

          <div className='post-list__item' key={post.id}>

            <Link to={`/profile/${post.user.id}`}>
              <UserProfileBadge 
                name={post.user.name} 
                avatarUrl={post.user.image || ''} 
                big 
                timestamp={post.createdAt} 
              />
            </Link>
            
            <p className='post-list__item-comment'>{post.comment}...</p>

            <div className='post-list__item-img-container'>
              <img className='post-list__item-img' src={post.image} alt={post.user.name} />
            </div>

            <div className='post-list__item-actions'>
              <LinkBtn 
                iconName={favoriteId === post.id ? 'liked' : 'like'} 
                label='Likes' 
                onClick={() => handleFavorite(post.id)} 
              />
              <LinkBtn 
                iconName='comment' 
                label='Comments' 
                onClick={() => toggleComments(post.id)}
              />
              <LinkBtn iconName='share' label='Share' />
            </div>


            {/* ADD COMMENT INPUT */}
            {openCommentsId === post.id && (

              <div className="post-list__comments">
                <div className="post-list__comments-form">

                    <FormInput 
                      name='comment'
                      type='text'
                      placeholder='Add a comment...'
                      variant='comment'
                    />

                  <button
                    type="submit"
                    className="post-list__comments-btn"
                  >
                    Post
                  </button>
                </div>

                {/* COMMENTS LIST */}
                {comments?.map(comment => (
                  <div key={comment.id} className="post-list__comments-list">
                    <div className="post-list__comment-header">
                      <UserProfileBadge 
                        name={comment.user.name} 
                        avatarUrl={comment.user.image || ''} 
                      />
                      <span className='post-list__comment-time'>{comment.createdAt}</span>
                    </div>
                    <div className="post-list__comment-body">
                      <p className='post-list__comment-text'>{comment.comment}</p>
                    </div>
                  </div>
                ))}

              </div>

            )}

          </div>
        ))}

      </div>
    </div>
  )

  
}