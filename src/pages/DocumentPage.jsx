import { useEffect, useMemo, useRef, useState } from "react";

import { getCurrentUser } from "../lib/currentUser";
import { useParams } from "react-router-dom";

import { createCollaboration } from "../lib/collaboration";

import Sidebar from "../components/Sidebar";
import DocumentHeader from "../components/DocumentHeader";
import Editor from "../components/Editor";

function DocumentPage() {
  const { id } = useParams();

  const currentUser = useMemo(
    () => getCurrentUser(),
  []);

  const collaborationRef =
    useRef(null);

  const [title, setTitle] =
    useState("Untitled document");

  const [ydoc, setYdoc] =
    useState(null);

  const [provider, setProvider] =
    useState(null);

  const [
    connectionStatus,
    setConnectionStatus,
  ] = useState("connecting");

  useEffect(() => {
    const {
      ydoc,
      provider,
      indexeddbProvider,
    } = createCollaboration(id);

    provider.awareness.setLocalStateField(
      "user",
      currentUser
    );

    collaborationRef.current = {
      ydoc,
      provider,
      indexeddbProvider,
    };

    setYdoc(ydoc);
    setProvider(provider);

    const yTitle =
      ydoc.getText("title");

    const updateTitleFromYjs = () => {
      const newTitle =
        yTitle.toString();

      if (newTitle) {
        setTitle(newTitle);
      }
    };

    yTitle.observe(
      updateTitleFromYjs
    );

    let reconnectTimer = null;
    let connectionFailed = false;

    const handleStatus = (event) => {

      if (
        event.status === "connected"
      ) {
        connectionFailed = false;

        if (reconnectTimer) {
          clearTimeout(
            reconnectTimer
          );

          reconnectTimer = null;
        }

        setConnectionStatus(
          "syncing"
        );

        return;
      }

      if (
        event.status ===
        "disconnected"
      ) {
        connectionFailed = true;

        if (reconnectTimer) {
          clearTimeout(
            reconnectTimer
          );

          reconnectTimer = null;
        }

        setConnectionStatus(
          "offline"
        );

        return;
      }

      if (
        event.status === "connecting"
      ) {
        if (connectionFailed) {
          setConnectionStatus(
            "offline"
          );

          return;
        }

        if (!reconnectTimer) {
          setConnectionStatus(
            "connecting"
          );

          reconnectTimer =
            setTimeout(() => {
              if (
                !provider.wsconnected
              ) {
                connectionFailed =
                  true;

                setConnectionStatus(
                  "offline"
                );
              }

              reconnectTimer = null;
            }, 2000);
        }
      }
    };

    const handleSync = (
      isSynced
    ) => {
      if (isSynced) {
        setConnectionStatus(
          "synced"
        );
      } else {
        setConnectionStatus(
          "syncing"
        );
      }
    };

    provider.on(
      "status",
      handleStatus
    );

    provider.on(
      "sync",
      handleSync
    );

    return () => {
      if (reconnectTimer) {
        clearTimeout(
          reconnectTimer
        );
      }

      yTitle.unobserve(
        updateTitleFromYjs
      );

      provider.destroy();
      indexeddbProvider.destroy();
      ydoc.destroy();
    };
  }, [id, currentUser]);

  function handleTitleChange(
    newTitle
  ) {
    setTitle(newTitle);

    const collaboration =
      collaborationRef.current;

    if (!collaboration) {
      return;
    }

    const yTitle =
      collaboration.ydoc.getText(
        "title"
      );

    collaboration.ydoc.transact(
      () => {
        yTitle.delete(
          0,
          yTitle.length
        );

        if (newTitle) {
          yTitle.insert(
            0,
            newTitle
          );
        }
      }
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7F6]">
      <Sidebar />

      <main className="ml-[64px] min-h-screen bg-[#F4F6FA]">
        <DocumentHeader
          title={title}
          setTitle={
            handleTitleChange
          }
          provider={provider}
          connectionStatus={
            connectionStatus
          }
        />

        <div className="px-10 pb-24 pt-10">
          <div className="mx-auto max-w-[920px]">
            {ydoc && provider && (
              <Editor
                ydoc={ydoc}
                provider={
                  provider
                }
                user={currentUser}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default DocumentPage;