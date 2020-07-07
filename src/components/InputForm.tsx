import { Button, Collapse, Fieldset, Input, Spacer } from "@zeit-ui/react";

import MemberSearchInput from "./MemberSearchInput";
import React from "react";
import { UserX } from "@zeit-ui/react-icons";
import WatcherGroup from "../models/watcherGroup";
import { errorAlert } from "../utils/windowAlert";
import { isAcceptableDocumentUrl } from "../models/documentUrlPatterns";
import { queryTabs } from "chrome-extension-support";
import unique from "../utils/unique";

export default function InputForm({
  watcherGroup: initialWatcherGroup,
  onUpdate,
  onDelete,
  initialVisible,
}: {
  watcherGroup: WatcherGroup;
  onUpdate: (watcherGroup: WatcherGroup) => void;
  onDelete: (id: string) => void;
  initialVisible: boolean;
}) {
  const [watcherGroup, setWatcherGroup] = React.useState<WatcherGroup>(
    initialWatcherGroup
  );
  const [memberSearchable, setMemberSearchable] = React.useState(false);

  React.useEffect(() => {
    queryTabs({ active: true, currentWindow: true })
      .then((tabs) => {
        if (isAcceptableDocumentUrl(tabs[0]?.url)) {
          setMemberSearchable(true);
        }
      })
      .catch(errorAlert);
  }, []);

  function updateData(partial: Partial<WatcherGroup>) {
    const updated = { ...watcherGroup, ...partial };
    setWatcherGroup(updated);
    onUpdate(updated);
  }
  return (
    <Collapse
      title={`${watcherGroup.groupName} (${watcherGroup.watchers.length})`}
      className="GroupName"
      initialVisible={initialVisible}
    >
      <Fieldset>
        <Fieldset.Subtitle>
          <Input
            placeholder="Group name"
            label="Group name"
            width="100%"
            value={watcherGroup.groupName}
            onBlur={(event) =>
              updateData({
                groupName: event.target.value,
              })
            }
          />
          <Spacer y={0.5} />
          <Input
            placeholder="Project key"
            label="Project key"
            width="100%"
            value={watcherGroup.projectKey}
            onBlur={(event) =>
              updateData({
                projectKey: event.target.value,
              })
            }
          />
          <Spacer y={1} />
          {watcherGroup.watchers.map((w) => (
            <div key={w.accountId}>
              <Button
                icon={<UserX />}
                type="error"
                ghost
                auto
                onClick={() =>
                  updateData({
                    watchers: watcherGroup.watchers.filter(
                      (each) => each.accountId !== w.accountId
                    ),
                  })
                }
              >
                {w.userName}
              </Button>
              <Spacer y={0.5} />
            </div>
          ))}
          <Spacer y={0.5} />
          <MemberSearchInput
            projectKey={watcherGroup.projectKey}
            searchable={memberSearchable}
            onSearch={(ws) =>
              updateData({
                watchers: unique(
                  [...watcherGroup.watchers, ...ws],
                  (w) => w.accountId
                ),
              })
            }
          />
        </Fieldset.Subtitle>
        <Fieldset.Footer>
          <Fieldset.Footer.Actions>
            <Button
              auto
              size="mini"
              type="error"
              onClick={() => onDelete(watcherGroup.id)}
            >
              Delete
            </Button>
          </Fieldset.Footer.Actions>
        </Fieldset.Footer>
      </Fieldset>
    </Collapse>
  );
}
