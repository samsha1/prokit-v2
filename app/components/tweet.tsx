import { getTweet } from "react-tweet/api";
import { EmbeddedTweet, TweetNotFound, type TweetProps } from "react-tweet";
import "./tweet.css";

const TweetContent = async ({ id, components, onError }: TweetProps) => {
  let error;
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          error = onError(err);
        } else {
          console.error("Tweet fetch failed:", err);
          error = err;
        }
      })
    : undefined;

  if (!tweet || (tweet as any).error || !(tweet as any).user) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={error || (tweet as any)?.error} />;
  }

  try {
    return <EmbeddedTweet tweet={tweet} components={components} />;
  } catch (err) {
    console.error("Failed to render tweet component:", err);
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={err} />;
  }
};

export const ReactTweet = (props: TweetProps) => <TweetContent {...props} />;

export async function TweetComponent({ id }: { id: string }) {
  return (
    <div className="tweet my-6">
      <div className={`flex justify-center`}>
        {/* <Suspense fallback={<TweetSkeleton />}> */}
        <ReactTweet id={id} />
        {/* </Suspense> */}
      </div>
    </div>
  );
}
