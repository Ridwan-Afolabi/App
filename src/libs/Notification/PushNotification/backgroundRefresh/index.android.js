import Onyx from 'react-native-onyx';
import * as App from '../../../actions/App';
import Visibility from '../../../Visibility';
import ONYXKEYS from '../../../../ONYXKEYS';

function getLastOnyxUpdateID() {
    return new Promise((resolve) => {
        const connectionID = Onyx.connect({
            key: ONYXKEYS.ONYX_UPDATES.LAST_UPDATE_ID,
            callback: (lastUpdateID) => {
                Onyx.disconnect(connectionID);
                resolve(lastUpdateID);
            },
        });
    });
}

/**
 * Runs our reconnectApp action if the app is in the background.
 *
 * We use this to refresh the app in the background after receiving a push notification (native only). Since the full app
 * wakes on iOS and by extension runs reconnectApp already, this is a no-op on everything but Android.
 */
export default function backgroundRefresh() {
    if (Visibility.isVisible()) {
        return;
    }

    getLastOnyxUpdateID().then((lastUpdateID) => App.reconnectApp(lastUpdateID));
}
