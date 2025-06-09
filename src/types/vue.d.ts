import Interact from '@interactjs/types/index';

declare global {
    interface Vue {
        $interact: Interact.Static;
    }
}
