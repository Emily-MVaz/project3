import React from "react";

// Temporarily hardcoded Posts
export default function Post() {
  return (
    <div class="card mb-6">
      <header class="card-header card-header-title has-background-grey-lighter">
        <div class="column">
          <p class=" has-text-primary-light">
            <a
              href="/post/1" // would actually be /post/id
              class="has-text-black is-capitalized is-pulled-left"
            >
              I need a study buddy. I just started javascript.
            </a>
          </p>
        </div>

        <div class="column">
          <span class=""> </span>
        </div>
      </header>

      <div class="card-content">
        <div class="content has-text-justified">
          I just started Codecademy. Prefer someone in the same timezone - GMT.
          Email me at gus123@gmail.com.
        </div>
        <div class="is-pulled-right">
          <b>user.username</b>
          <a href="https://twitter.com/{{user.twitter}}">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/{{user.github}}">
            <i class="fab fa-github"></i>
          </a>
          April 22, 2022
          <a href="#">24 comments</a>
        </div>
      </div>
    </div>
  );
}
