const COLORS = [
  "#29A19C",
  "#F97316",
  "#8B5CF6",
  "#3B82F6",
  "#EF4444",
  "#EAB308",
];

export function getCurrentUser() {
  let user = sessionStorage.getItem("current-user");

  if (user) {
    return JSON.parse(user);
  }

  const id = crypto.randomUUID();

  user = {
    id,
    name: `Guest ${id.slice(0, 4)}`,
    color:
      COLORS[
        Math.floor(Math.random() * COLORS.length)
      ],
  };

  sessionStorage.setItem(
    "current-user",
    JSON.stringify(user)
  );

  return user;
}