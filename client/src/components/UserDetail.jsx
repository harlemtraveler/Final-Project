import React, { Component } from 'react';

export default function UserDetail(props) {
  return (
    <div className="user-details">
      {/* <h2>{props.user.first_name} {props.user.last_name}</h2>
      <p>{props.user.email}</p>
      <p>{props.user.phone_number}</p> */}

      <div class="flip-container centered">
         <div class="flipper">
            <div class="front"><h1>{props.user.first_name} {props.user.last_name}</h1></div>
            <div class="back">
              <h1>{props.user.first_name} {props.user.last_name}</h1>
              <p>ScriptHub Member</p>
                <div class="font-a-icons">
                  <div class="icon-group">
                    <span class="bold">T: </span><span class="contact">{props.user.phone_number}</span>
                    <div class="icon-group">
                      <span class="bold">E: </span><a class="contact" href="#" target="_top">{props.user.email}</a>
                    </div>
                    <div class="icon-group">
                      <a class="contact" href="#" target="_blank">{props.user.repo_id}</a>
                    </div>
                  </div>
                </div>
                {/* <a class="icon-box" href="https://www.facebook.com/xpetrus.rex" target="_blank"><i class="fa fa-facebook"></i></a>
                <a class="icon-box" href="https://twitter.com/Gothburz" target="_blank"><i class="fa fa-twitter"></i></a>
                <a class="icon-box" href="https://plus.google.com/u/0/+PetrusRex/" target="_blank"><i class="fa fa-google-plus"></i></a>
                <a class="icon-box" href="https://www.linkedin.com/in/xpetrus" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a class="icon-box" href="https://codepen.io/Gothburz/" target="_blank"><i class="fa fa-codepen"></i></a>
                <a class="icon-box" href="https://github.com/Gothburz" target="_blank"><i class="fa fa-github"></i></a> */}
            </div>
         </div>
      </div>
    </div>
  );
}
