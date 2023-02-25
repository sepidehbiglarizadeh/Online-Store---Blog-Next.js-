import { toPersianDigits } from "@/utils/toPersianDigits";
import {
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as SolidHeartIcon,
  BookmarkIcon as SolidBookmarkIcon,
} from "@heroicons/react/24/solid";

const PostInteraction = ({ item, isSmall }) => {
  const iconSize = `${isSmall ? "h-4 w-4" : "h-6 w-6"}`;

  return (
    <div className={`flex items-center ${isSmall ? "gap-x-2" : "gap-x-4"}`}>
      <button className="flex items-center rounded gap-x-1 bg-indigo-50">
        <ChatBubbleLeftEllipsisIcon className={`${iconSize} stroke-indigo-600`} />
        <span className="text-xs text-indigo-600">
          {toPersianDigits(item.commentsCount)}
        </span>
      </button>
      <button className="flex items-center rounded gap-x-1 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-rose-100 transition-all">
        {item.isLiked ? (
          <SolidHeartIcon className={`${iconSize} fill-current`} />
        ) : (
          <HeartIcon className={`${iconSize} stroke-current`} />
        )}
        <span className="text-xs">{toPersianDigits(item.likesCount)}</span>
      </button>
      <button className="bg-blue-100 rounded text-blue-500 hover:bg-blue-500 hover:text-white">
        {postMessage.isBookmarked ? (
          <SolidBookmarkIcon className={`${iconSize} fill-current`} />
        ) : (
          <BookmarkIcon className={`${iconSize} stroke-current`} />
        )}
      </button>
    </div>
  );
};

export default PostInteraction;
