import React from 'react'

function People() {
  return (
    <article className="people-section">
    <div className="section-heading">People</div>
    <div className="people-card">
      <div className="people-item">
        <img
          src="https://avatars.githubusercontent.com/u/40751854?v=4"
          alt=""
        />
        <div className="people-user-name">@Carlo</div>
      </div>
      <div className="people-item">
        <img
          src="https://avatars.githubusercontent.com/u/40751854?v=4"
          alt=""
        />
        <div className="people-user-name">@Jenny</div>
      </div>
      <div className="people-item">
        <img
          src="https://avatars.githubusercontent.com/u/40751854?v=4"
          alt=""
        />
        <div className="people-user-name">@Jaswanth</div>
      </div>
    </div>
  </article>
  )
}

export default People