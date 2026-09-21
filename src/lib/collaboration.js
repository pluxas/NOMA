import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { IndexeddbPersistence } from "y-indexeddb";

export function createCollaboration(documentId) {
  const roomName = `document-${documentId}`;

  const ydoc = new Y.Doc();

  // Offline storage
  const indexeddbProvider = new IndexeddbPersistence(
    roomName,
    ydoc
  );

  // Real-time WebSocket
  const provider = new WebsocketProvider(
    "ws://localhost:1234",
    roomName,
    ydoc
  );

  return {
    ydoc,
    provider,
    indexeddbProvider,
  };
}