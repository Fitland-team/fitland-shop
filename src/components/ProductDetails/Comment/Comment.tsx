import "./Comment.css";

type CommentProps = {
  name?: string;
  text?: string;
  rating?: number;
};
function Comment({ name, text, rating = 2 }: CommentProps) {
  return (
    <div className="comment-wrapper">
      <div className="comment-header">
        <div className="comment-user__profile">
          <div className="comment-user__avatar">
            <img src="/images/profile.jpg" alt="avatar" />
          </div>
          <p className="comment-user__name">متین</p>
        </div>
        <div className="comment-rate">
          {[1, 2, 3, 4, 5].reverse().map((star) => (
            <span
              key={star}
              style={{
                color: rating >= star ? "#FF991F" : "#CBCBCB",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.33736 3.37847C7.61791 2.84672 8.37948 2.84672 8.66004 3.37847L9.86478 5.66189C9.97298 5.86695 10.1702 6.01023 10.3986 6.04976L12.9426 6.48993C13.535 6.59243 13.7703 7.31672 13.3513 7.74787L11.5519 9.59927C11.3904 9.76553 11.315 9.99736 11.348 10.2269L11.7155 12.7823C11.8011 13.3774 11.185 13.825 10.6455 13.5598L8.32864 12.4206C8.12058 12.3183 7.87682 12.3183 7.66876 12.4206L5.35194 13.5598C4.81241 13.825 4.19628 13.3774 4.28187 12.7823L4.64937 10.2269C4.68237 9.99736 4.60705 9.76553 4.44545 9.59927L2.64608 7.74787C2.22705 7.31672 2.46238 6.59243 3.05481 6.48993L5.59875 6.04976C5.82722 6.01023 6.02442 5.86695 6.13261 5.66189L7.33736 3.37847Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          ))}
        </div>
      </div>
      <div className="comment-body">
        <p className="comment-body-paragraph">
          سلام دقیقااندازه ی سایز پامون سفارش بدیم یایه شماره کوچیکتر؟چون شنیدم
          این کفش‌ها به مرورجاباز میکنن!
        </p>
      </div>
    </div>
  );
}

export default Comment;
