import './PostList.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { PostWithAuthorAndComments } from '../../../types/postResponses'
import { UserProfileBadge } from '../../ui/UserProfileBadge/UserProfileBadge'
import { LinkBtn } from '../../ui/LinkBtn/LinkBtn'
import { FormInput } from '../../form/FormInput/FormInput'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface Props {
  posts: PostWithAuthorAndComments[]
}


export const PostList = ({ posts }: Props) => {

  const [favoriteId, setFavoriteId] = useState('');
  const [openCommentsIds, setOpenCommentsIds] = useState<Set<string>>(
  () => new Set()
);

  const toggleFavorite = (id: string) => {
    if (favoriteId === id) setFavoriteId(''); 
    else setFavoriteId(id);
  }

  const toggleComments = (postId: string) => {
    setOpenCommentsIds(prev => {
      const newSet = new Set(prev);

      if (newSet.has(postId)) {
        newSet.delete(postId); // close if already open
      } else {
        newSet.add(postId); // open if closed
      }

      return newSet;
    });
  };


  return (
    <div className='post-list'>
      <div className='post-list__container'>

        {posts.map(post => (

          <div className='post-list__item' key={post.id}>

            <div className='post-list__item-header'>
              <Link to={`/profile/${post.author.id}`}>
                <UserProfileBadge 
                  name={post.author.name} 
                  avatarUrl={post.author.image || ''} 
                  big 
                  timestamp={post.createdAt} 
                />
              </Link>

              <button className='post-list__item-menu'>
                <MoreHorizIcon />
              </button>  
            </div>
            
            <p className='post-list__item-comment'>{post.comment}...</p>

            <div className='post-list__item-img-container'>
              <img className='post-list__item-img' src={post.image} alt={post.author.name} />
            </div>

            <div className='post-list__item-actions'>
              <LinkBtn 
                iconName={favoriteId === post.id ? 'liked' : 'like'} 
                label='Likes' 
                onClick={() => toggleFavorite(post.id)} 
              />
              <LinkBtn 
                iconName='comment' 
                label='Comments' 
                onClick={() => toggleComments(post.id)}
              />
              <LinkBtn iconName='share' label='Share' />
            </div>


            {/* ADD COMMENT INPUT */}
            {openCommentsIds.has(post.id)  && (

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
                {post.comments?.map(comment => (
                  <div key={comment.id} className="post-list__comments-list">
                    <div className="post-list__comment-header">
                      <Link to={`/profile/${comment.author.id}`}>
                        <UserProfileBadge 
                          name={comment.author.name} 
                          avatarUrl={comment.author.image || ''} 
                        />
                      </Link>
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