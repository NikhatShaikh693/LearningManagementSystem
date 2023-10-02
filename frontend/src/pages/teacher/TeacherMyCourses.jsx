import React from 'react'
import './TeacherMyCourses.css'
import image from '../../assets/image.jpg'
function TeacherMyCourses() {
  return (
    <div>
        <div>
            <h1>My Course</h1>
            <div className="video-component">
                <p className="heading">Web Development</p>
                <div className="videos">
                    <div className="video-box">
                        <div className="video-img"><img src={image} alt="react video"/></div>
                        <div className="video-info">
                            <h1>Basic of JS</h1>
                        </div>
                        <small>Duration:16 Hours</small>

                    </div>
                    <div className="video-box">
                        <div className="video-img"><img src={image} alt="react video"/></div>
                        <div className="video-info">
                            <h1>Basic of JS</h1>
                        </div>
                        <small>Duration:16 Hours</small>

                    </div>
                    <div className="video-box">
                        <div className="video-img"><img src={image} alt="react video"/></div>
                        <div className="video-info">
                            <h1>Basic of JS</h1>
                        </div>
                        <small>Duration:16 Hours</small>

                    </div>
                </div>
            </div>
            <div className="video-component">
                <p className="heading">Web Development</p>
                <div className="videos">
                    <div className="video-box">
                        <div className="video-img"><img src={image} alt="react video"/></div>
                        <div className="video-info">
                            <h1>Basic of JS</h1>
                        </div>
                        <small>Duration:16 Hours</small>

                    </div>
                    <div className="video-box">
                        <div className="video-img"><img src={image} alt="react video"/></div>
                        <div className="video-info">
                            <h1>Basic of JS</h1>
                        </div>
                        <small>Duration:16 Hours</small>

                    </div>
                    <div className="video-box">
                        <div className="video-img"><img src={image} alt="react video"/></div>
                        <div className="video-info">
                            <h1>Basic of JS</h1>
                        </div>
                        <small>Duration:16 Hours</small>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TeacherMyCourses