import {CENTRAL_PANE_WORKSPACE_SCREENS} from '@libs/Navigation/AppNavigator/Navigators/FullScreenNavigator';
import NAVIGATORS from '@src/NAVIGATORS';
import SCREENS from '@src/SCREENS';

const SCREENS_WITH_AUTOFOCUS: string[] = [
    ...Object.keys(CENTRAL_PANE_WORKSPACE_SCREENS),
    SCREENS.REPORT,
    SCREENS.REPORT_DESCRIPTION_ROOT,
    SCREENS.PRIVATE_NOTES.EDIT,
    SCREENS.SETTINGS.PROFILE.STATUS,
    SCREENS.SETTINGS.PROFILE.PRONOUNS,
    SCREENS.NEW_TASK.DETAILS,
    SCREENS.MONEY_REQUEST.CREATE,
    SCREENS.SIGN_IN_ROOT,
];

function getScreenWithAutofocus(isAuthenticated: boolean) {
    if (!isAuthenticated) {
        return [...SCREENS_WITH_AUTOFOCUS, NAVIGATORS.BOTTOM_TAB_NAVIGATOR];
    }
    return SCREENS_WITH_AUTOFOCUS;
}

export default getScreenWithAutofocus;
