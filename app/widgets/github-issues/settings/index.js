import Controller from "./Controller";

import {Window, ValidationGroup, TextField, Button, FlexRow} from 'cx/widgets';
import {LabelsLeftLayout} from 'cx/ui';

export default (
	<cx>
		<Window
            title="Settings"
            controller={Controller}
            visible:bind="settings.visible"
            modal
            center
            bodyStyle="padding: 20px"
        >
			<ValidationGroup layout={LabelsLeftLayout} invalid:bind="settings.invalid">
                <TextField
                    value:bind="settings.repo"
                    label="GitHub Repo"
                    required
                />
            </ValidationGroup>
            <FlexRow putInto="footer" spacing justify="end">
                <Button mod="primary" onClick="save" disabled:bind="settings.invalid">Save</Button>
                <Button dismiss>Cancel</Button>
            </FlexRow>
		</Window>
	</cx>
);
