import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import './Profile.scss'
export default function Profile() {
    return (
        <div className="profile">
            <div className="picture" />
            <div className="name-and-email">
                <div>
                    <p>
                    John Doe
                    </p>
                        <BsFillCheckCircleFill fontSize={'16px'}  color='#2b9f0f' />
                </div>
                <p>
                    johndoe@gmail.com
                </p>
            </div>
            <div className="company">
                <p>The John Doe Company</p>
                <div className='address'>
                    <p>Jakarta,Indonesia
                        <p>
                            +62 1234567890
                        </p>
                        <p>
                            test@gmail.com
                        </p>
                    </p>
                </div>
            </div>
        </div>

    )
}
