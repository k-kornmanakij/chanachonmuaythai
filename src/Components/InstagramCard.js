import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
import './InstagramCard.css'

export const InstagramCard = () => {
  return (
    <div className="instagram-grid">
        <div className="instagram-card">
          <InstagramEmbed 
            url="https://www.instagram.com/p/C5JaMjTJGaY/?img_index=1" 
            maxWidth={328}
            hideCaption={false}
            protocol=''
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
        <div className="instagram-card">
          <InstagramEmbed 
          url="https://www.instagram.com/p/C5RDO1Bs0Hr/"
          maxWidth={328}
          hideCaption={false}
          protocol=''
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
           />
        </div>
        <div className="instagram-card">
          <InstagramEmbed 
          url="https://www.instagram.com/p/C5BO35XOZ0W/"
          maxWidth={328}
          hideCaption={false}
          protocol=''
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
          />
        </div>
      </div>
  )
}
