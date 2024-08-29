import { Writer } from "../types";

interface ComponentProps {
  writer: Writer;
}
const WriterCardMini: React.FC<ComponentProps> = ({ writer }) => {
  return (
    <div className="flex gap-3">
      <img
        className="w-12 h-12 rounded-full"
        src={
          writer.profileImage
            ? writer.profileImage
            : writer.gender == "M"
            ? "/images/profile-man.jpg"
            : "/images/profile-woman.jpg"
        }
        alt={writer.userName}
      />
      <div>
        <p>
          <strong>
            {writer.firstName} {writer.lastName}
          </strong>
        </p>
        <p>@{writer.userName}</p>
      </div>
    </div>
  );
};
export default WriterCardMini;
