import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import "../styles/InstagramCard.css";

export const InstagramCard = () => {
  return (
    <div className="instagram-grid">
      <div className="instagram-card">
        <InstagramEmbed
          url="https://www.instagram.com//p/C5mnEK3LB5u/"
          maxWidth={328}
          hideCaption={false}
          protocol=""
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
      <div className="instagram-card">
        <InstagramEmbed
          url="https://www.instagram.com/p/C5emu8QpBQL/?utm_source=ig_embed&ig_rid=6907933c-0a88-42b6-95ff-dc43c6b0fd59&img_index=1"
          maxWidth={328}
          hideCaption={false}
          protocol=""
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
          protocol=""
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    </div>
  );
};
