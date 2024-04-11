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
          url="https://www.instagram.com/p/C5emu8QpBQL/"
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
          url="https://www.instagram.com/p/C5dv0_6LSrs/"
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
