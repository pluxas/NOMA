import { useEffect, useState } from "react";

function LivePointers({ provider }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!provider) return;

    const awareness = provider.awareness;

    function updateUsers() {
      const states = Array.from(
        awareness.getStates().entries()
      );

      const remoteUsers = states
        .filter(
          ([clientId]) =>
            clientId !== awareness.clientID
        )
        .map(([clientId, state]) => ({
          clientId,
          user: state.user,
          mouse: state.mouse,
        }))
        .filter(
          ({ user, mouse }) =>
            user &&
            mouse &&
            mouse.visible
        );

      setUsers(remoteUsers);
    }

    awareness.on(
      "change",
      updateUsers
    );

    updateUsers();

    return () => {
      awareness.off(
        "change",
        updateUsers
      );
    };
  }, [provider]);

  return (
    <>
      {users.map(({ clientId, user, mouse }) => (
        <div
          key={clientId}
          className="
            pointer-events-none
            absolute
            z-[100]
            transition-[left,top]
            duration-75
          "
          style={{
            left: `${mouse.x * 100}%`,
            top: `${mouse.y * 100}%`,
          }}
        >
          <svg
            width="22"
            height="26"
            viewBox="0 0 22 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              color: user.color,
            }}
          >
            <path
              d="M2 2L19 12L10 14L6 23L2 2Z"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>

          <div
            className="
              ml-4
              -mt-1
              w-max
              rounded-md
              px-2
              py-1
              text-[11px]
              font-semibold
              text-white
              shadow-sm
            "
            style={{
              backgroundColor: user.color,
            }}
          >
            {user.name}
          </div>
        </div>
      ))}
    </>
  );
}

export default LivePointers;