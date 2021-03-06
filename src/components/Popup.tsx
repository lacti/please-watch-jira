import * as React from "react";
import * as rpcTypes from "../rpc-types";

import {
  Button,
  Col,
  Collapse,
  CssBaseline,
  Row,
  Spacer,
  Text,
  ZeitProvider,
} from "@zeit-ui/react";

import { Eye } from "@zeit-ui/react-icons";
import InputForm from "./InputForm";
import WatcherGroup from "../models/watcherGroup";
import { errorAlert } from "../utils/windowAlert";
import { render } from "react-dom";
import useMessageRPC from "chrome-extension-support/lib/rpc/useMessageRPC";
import useWatcherGroups from "../state/useWatcherGroups";

const updateContextMenu = useMessageRPC().stub<rpcTypes.UpdateContextMenu>(
  rpcTypes.updateContextMenu
);

const {
  getAllWatcherGroups,
  addWatcherGroup,
  updateWatcherGroup,
  deleteWatcherGroup,
} = useWatcherGroups();

function App() {
  const [watcherGroups, setWatcherGroups] = React.useState<WatcherGroup[]>([]);

  React.useEffect(() => {
    getAllWatcherGroups().then(setWatcherGroups).catch(errorAlert);
  }, []);

  function onAdd() {
    addWatcherGroup({
      groupName: `Group #${watcherGroups.length + 1}`,
      watchers: [],
    })
      .then(setWatcherGroups)
      .then(updateContextMenu);
  }
  function onUpdate(watcherGroup: WatcherGroup) {
    updateWatcherGroup(watcherGroup)
      .then(setWatcherGroups)
      .then(updateContextMenu)
      .catch(errorAlert);
  }
  function onDelete(watcherGroupId: string) {
    deleteWatcherGroup(watcherGroupId)
      .then(setWatcherGroups)
      .then(updateContextMenu)
      .catch(errorAlert);
  }

  return (
    <div
      style={{
        minWidth: 600,
        minHeight: 540,
        padding: 24,
      }}
    >
      <Row gap={0.8} style={{ marginBottom: "15px" }}>
        <Col span={18}>
          <Eye size={24} /> <Spacer inline x={0.35} />
          <Text span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Please watch!
          </Text>
        </Col>
        <Col span={6} style={{ textAlign: "right" }}>
          <Button shadow type="secondary" size="mini" onClick={onAdd}>
            New
          </Button>
        </Col>
      </Row>
      <Collapse.Group>
        {watcherGroups.map((wg, index) => (
          <InputForm
            key={wg.id}
            watcherGroup={wg}
            onDelete={onDelete}
            onUpdate={onUpdate}
            initialVisible={index === watcherGroups.length - 1}
          />
        ))}
      </Collapse.Group>
    </div>
  );
}

render(
  <ZeitProvider>
    <CssBaseline />
    <App />
  </ZeitProvider>,
  document.getElementById("App")
);
