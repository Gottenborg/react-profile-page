function TagListItem({ value }:{value:string}) {
  return (
    <li className="h-8 border rounded-2xl border-gray-600 text-gray-800 text-sm font-normal px-2 leading-7">
      {value}
    </li>
  );
}

export default TagListItem;
