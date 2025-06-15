import { ref } from 'vue';
import useResizable from '../useResizable';
import type { InteractContext } from '../useInteractContext';
import type { ResizableOptions } from '@interactjs/actions/resize/plugin';

describe('useResizable', () => {
    let context: InteractContext;
    let resizableMock: jest.Mock;
    let setMock: jest.Mock;

    beforeEach(() => {
        resizableMock = jest.fn();
        setMock = jest.fn();
        context = {
            interactable: ref({
                resizable: resizableMock,
                set: setMock,
                target: document.createElement('div'),
            } as any),
            interact: {} as any,
            position: ref({ x: 0, y: 0 }),
            size: ref({ width: 100, height: 100 }),
        };
    });

    it('init should call resizable on interactable with default edges', () => {
        const { init } = useResizable(context, {});
        init();
        expect(resizableMock).toHaveBeenCalledTimes(1);
        const options = resizableMock.mock.calls[0][0];
        expect(options.listeners).toBeDefined();
        expect(typeof options.listeners.start).toBe('function');
        expect(typeof options.listeners.move).toBe('function');
        expect(typeof options.listeners.end).toBe('function');
        expect(options.edges).toEqual({
            left: true,
            right: true,
            bottom: true,
            top: true,
        });
    });

    it('init should call resizable on interactable with provided options', () => {
        const customOptions: ResizableOptions = {
            edges: { left: false, right: true, bottom: false, top: true },
            inertia: { enabled: true },
        };
        const { init } = useResizable(context, customOptions);
        init();
        expect(resizableMock).toHaveBeenCalledTimes(1);
        const options = resizableMock.mock.calls[0][0];
        expect(options.edges).toEqual(customOptions.edges);
        expect(options.inertia).toEqual({ enabled: true });
        expect(options.listeners).toBeDefined();
    });

    it('resizableOptions getter should return merged initial options', () => {
        const initialOpts: ResizableOptions = {
            inertia: { enabled: true },
            edges: { left: false, right: true, bottom: false, top: true },
        };
        const { init, resizableOptions } = useResizable(context, initialOpts);
        init();

        const currentOptions = resizableOptions.value;
        expect(currentOptions.inertia).toEqual(initialOpts.inertia);
        expect(currentOptions.edges).toEqual(initialOpts.edges);
        expect(currentOptions.listeners).toBeDefined();
    });

    it('resizableOptions setter should call interactable.set and update options', () => {
        const { init, resizableOptions } = useResizable(context, {});
        const mockResizableInteractable = {
            set: jest.fn(),
        };
        resizableMock.mockReturnValue(mockResizableInteractable);

        init();

        const newSpecificOptions: ResizableOptions = {
            inertia: { enabled: false },
            edges: { top: false, bottom: false, left: true, right: true },
        };

        resizableOptions.value = newSpecificOptions;

        expect(mockResizableInteractable.set).toHaveBeenCalledTimes(1);
        expect(mockResizableInteractable.set).toHaveBeenCalledWith({
            resize: expect.objectContaining(newSpecificOptions),
        });
        const updatedOptions = resizableOptions.value;
        expect(updatedOptions.inertia).toEqual(newSpecificOptions.inertia);
        expect(updatedOptions.edges).toEqual(newSpecificOptions.edges);
        expect(updatedOptions.listeners).toBeDefined();
    });

    it('should handle resize events correctly', () => {
        const { init, isResizing, position, resizeData } = useResizable(
            context,
            {},
        );
        init();
        const options = resizableMock.mock.calls[0][0];
        const startEvent = {
            target: context.interactable.value?.target,
        } as any;
        const moveEvent = {
            rect: { width: 150, height: 120 },
            deltaRect: { left: 5, top: 10, right: 0, bottom: 0 },
            target: context.interactable.value?.target,
        } as any;

        options.listeners.start(startEvent);
        expect(isResizing.value).toBe(true);

        options.listeners.move(moveEvent);
        expect(position.value).toEqual({ x: 5, y: 10 });
        expect(resizeData.value).toEqual({ width: 150, height: 120 });
        const style = (context.interactable.value?.target as HTMLElement).style;
        expect(style.width).toBe('150px');
        expect(style.height).toBe('120px');
        expect(style.transform).toBe('translate(5px, 10px)');

        options.listeners.end(moveEvent);
        expect(isResizing.value).toBe(false);
    });

    it('should handle resize move when event.deltaRect is undefined', () => {
        const { init, position } = useResizable(context, {});
        init();
        const options = resizableMock.mock.calls[0][0];
        const moveEvent = {
            rect: { width: 150, height: 120 },
            deltaRect: undefined,
            target: context.interactable.value?.target,
        } as any;

        options.listeners.move(moveEvent);
        expect(position.value).toEqual({ x: 0, y: 0 });
    });

    it('should handle resize move when event.deltaRect.left is undefined', () => {
        const { init, position } = useResizable(context, {});
        init();
        const options = resizableMock.mock.calls[0][0];
        const moveEvent = {
            rect: { width: 150, height: 120 },
            deltaRect: { top: 10, right: 0, bottom: 0 },
            target: context.interactable.value?.target,
        } as any;

        options.listeners.move(moveEvent);
        expect(position.value).toEqual({ x: 0, y: 10 });
    });

    it('should handle resize move when event.deltaRect.top is undefined', () => {
        const { init, position } = useResizable(context, {});
        init();
        const options = resizableMock.mock.calls[0][0];
        const moveEvent = {
            rect: { width: 150, height: 120 },
            deltaRect: { left: 5, right: 0, bottom: 0 },
            target: context.interactable.value?.target,
        } as any;

        options.listeners.move(moveEvent);
        expect(position.value).toEqual({ x: 5, y: 0 });
    });

    it('should call interactable.set when resizableOptions are set', () => {
        const { init, resizableOptions } = useResizable(context, {});
        const mockResizableInstance = { set: setMock };
        resizableMock.mockReturnValue(mockResizableInstance);

        init();

        const newOptions = { enabled: false, edges: { top: false } };
        resizableOptions.value = newOptions;

        expect(setMock).toHaveBeenCalledTimes(1);
        expect(setMock).toHaveBeenCalledWith(
            expect.objectContaining({
                resize: {
                    listeners: expect.objectContaining({
                        start: expect.any(Function),
                        move: expect.any(Function),
                        end: expect.any(Function),
                    }),
                    ...newOptions,
                },
            }),
        );
    });

    it('init throws when context.interactable.value is null', () => {
        context.interactable.value = null;
        const { init } = useResizable(context, {});
        expect(() => init()).toThrow('Interactable context is not set');
    });
});
