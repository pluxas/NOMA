import {
  useEffect,
  useState,
} from "react";

function Participants({
  provider,
}) {
  const [users, setUsers] =
    useState([]);

  useEffect(() => {
    if (!provider) {
      return;
    }

    const awareness =
      provider.awareness;

    function updateUsers() {
      const states =
        Array.from(
          awareness
            .getStates()
            .entries()
        );

      const uniqueUsers =
        new Map();

      states.forEach(
        ([clientId, state]) => {
          if (!state.user) {
            return;
          }

          const user = {
            clientId,
            ...state.user,
          };

          const key =
            user.id || clientId;

          uniqueUsers.set(
            key,
            user
          );
        }
      );

      setUsers(
        Array.from(
          uniqueUsers.values()
        )
      );
    }

    updateUsers();

    awareness.on(
      "change",
      updateUsers
    );

    return () => {
      awareness.off(
        "change",
        updateUsers
      );
    };
  }, [provider]);

  return (
    <div className="flex items-center">
      {users.map((user) => (
        <div
          key={
            user.id ||
            user.clientId
          }
          title={user.name}
          style={{
            backgroundColor:
              user.color,
          }}
          className="
            -ml-2
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border-[3px]
            border-[#F5F7F6]
            text-[10px]
            font-bold
            text-white
          "
        >
          {user.name
            ?.replace(
              "Guest ",
              ""
            )
            .slice(0, 2)
            .toUpperCase()}
        </div>
      ))}
    </div>
  );
}

export default Participants;