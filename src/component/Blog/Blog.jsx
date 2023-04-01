import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { ToastContainer } from 'react-toastify';
import saveBookmarksIcon from '../../utilities'

const Blog = (props) => {

    const { firstName, lastName, title, tags, image, thumbnail, readTime, id, postDate } = props.post
    const { bookMarkHandler, totalReadTime, showToast, bookmarkPosts } = props

    const checkBookmarksIcon = bookmarkPosts.find(post => id == post.id)

    return (
        <>
            <div>
                <img className='rounded-lg w-full' src={thumbnail} alt="thumbnail" />
                <div className='flex justify-between items-center pt-5'>
                    <div className='flex items-center'>
                        <img className='w-[15%] rounded-full mr-3 ' src={image} alt="author-pic" />
                        <div>
                            <h3 className='font-bold'>{firstName + ' ' + lastName}</h3>
                            <p>{postDate}</p>
                        </div>
                    </div>
                    <div>{readTime} min read
                        <FontAwesomeIcon onClick={() => bookMarkHandler(id)} className='ml-2 cursor-pointer'
                            icon={
                                !checkBookmarksIcon ? faBookmark : saveBookmarksIcon
                            }
                        ></FontAwesomeIcon>

                        {/* Show Toast Notification */}
                        {showToast && (
                            <ToastContainer
                                position="top-right"
                                autoClose={3000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="colored"
                            />
                        )}
                        {/* End show Notification */}
                    </div>
                </div>
                <h1 className='text-3xl font-bold md:w-[70%] py-5'>{title}</h1>
                <p className=''>
                    {
                        tags.map(tag => `#${tag} `)
                    }
                </p>

                {/* Total read time EVENT Handler Button */}
                <a onClick={() => totalReadTime(id)} className='underline underline-offset-4 text-purple font-bold cursor-pointer' >Mark as read</a>
                <hr className='opacity-10 my-8' />
            </div>
        </>
    );
};

export default Blog;