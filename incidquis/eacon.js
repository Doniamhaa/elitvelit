function intersectText(item, box) {
  const intersection = {
    x: Math.max(item.x, box.x),
    y: Math.max(item.y, box.y)
  };

  intersection.x = Math.min(intersection.x + Math.min(item.width, box.width), box.x + box.width);
  intersection.y = Math.min(intersection.y + Math.min(item.height, box.height), box.y + box.height);

  return intersection;
}
