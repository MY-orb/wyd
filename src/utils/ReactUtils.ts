import ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { AnnotationsMap } from 'mobx/dist/internal';

export let reactMounted = false;
export const onReactMounted = () => {
  reactMounted = true;
};

const individualRenderedKeys: Set<string> = new Set();
export function individualRender(
  key: string,
  render: (onClose: () => void) => JSX.Element,
  options?: { onDuplicate?: () => void; afterClose?: () => void },
): void {
  if (individualRenderedKeys.has(key)) {
    return options?.onDuplicate?.();
  }
  individualRenderedKeys.add(key);
  const container = document.createElement('div');
  container.dataset.key = key;
  document.documentElement.appendChild(container);
  const onClose = () => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    individualRenderedKeys.delete(key);
    options?.afterClose?.();
  };
  ReactDOM.render(render(onClose), container);
}

export const CreateObservable = <T>(
  store: T,
  decorators: AnnotationsMap<T, never> = {},
): T => observable.object<T>(store, decorators, { autoBind: true });
