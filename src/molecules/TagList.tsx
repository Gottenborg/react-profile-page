import TagListItem from '../atoms/TagListItem';

interface TagsListProps {
  tags: string[];
}

function TagsList({ tags }: TagsListProps) {
  return (
    <ul className="flex flex-row gap-3">
      {tags.map((tag, index) => (
        <TagListItem key={index} value={tag} />
      ))}
    </ul>
  );
}

export default TagsList;
