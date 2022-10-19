/* eslint-disable */
import Vue from 'vue';

declare global {
    interface Vue {
        vueInteractInstalled?: boolean;
        $interact: any | null;
    }
}

/* eslint-disable */