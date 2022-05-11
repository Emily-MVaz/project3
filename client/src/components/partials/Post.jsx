import React from "react";
import Posts from "../../../../server/models/Post"

// Temporarily hardcoded Posts
export default function Post() {
  return (
    <div class="card mb-6">
      <header class="card-header card-header-title has-background-grey-lighter">
        <div class="column">
          <p class=" has-text-primary-light"></p>
          <a href="#"  class="has-text-black is-capitalized is-pulled-left"> <Posts/> </a>
        </div>

        <div class="column">
          <span class=""> </span>
        </div>
      </header>

      <div class="card-content">
        <div class="content has-text-justified">{/* {{post_content}} */}</div>
        <div class="is-pulled-right">
          {/* <b>{{user.username}}</b> |  */}
          <a href="https://twitter.com/{{user.twitter}}">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/{{user.github}}">
            <i class="fab fa-github"></i>
          </a>
          {/* | {{format_date created_at}} | <a href="/post/{{id}}">{{comments.length}} {{format_plural "comment" comments.length}}</a> */}
        </div>
      </div>
    </div>
  );
}
