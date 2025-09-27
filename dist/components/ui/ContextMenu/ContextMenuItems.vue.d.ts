import { PropType } from 'vue';
import { default as ContextPanel } from './ContextPanel.vue';
import { ContextMenuItem } from './ContextMenu.model';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    items: {
        type: PropType<Required<ContextMenuItem>[]>;
        required: true;
    };
    contextMenu: {
        type: PropType<InstanceType<typeof ContextPanel>>;
        required: true;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    items: {
        type: PropType<Required<ContextMenuItem>[]>;
        required: true;
    };
    contextMenu: {
        type: PropType<InstanceType<typeof ContextPanel>>;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=ContextMenuItems.vue.d.ts.map