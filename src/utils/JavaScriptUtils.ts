/**
 * abort = Abort run when another process is running
 *
 * queue = Run after all queued processes finished
 *
 * throw = Throw an error when another process is running
 */
export type AsyncLockMode = 'abort' | 'queue' | 'throw';
export class AsyncLock {
  mode: AsyncLockMode;
  process?: Promise<void>;

  constructor(mode: AsyncLockMode) {
    this.mode = mode;
  }

  wrap<R extends unknown[], T>(
    asyncFunction: (...args: R) => T | Promise<T>,
  ): (...args: R) => Promise<T> | void {
    return (...args) => this.run(() => asyncFunction(...args));
  }

  run<T>(asyncFunction: () => T | Promise<T>): Promise<T> | void {
    if (this.mode === 'abort') {
      if (this.process) {
        return;
      }
    }
    if (this.mode === 'throw') {
      if (this.process) {
        throw new Error('[AsyncLock] Another process is running.');
      }
    }
    if (this.mode === 'queue') {
      if (this.process) {
        const p = this.process.then(asyncFunction);
        this.setProcess(p);
        return p;
      }
    }
    const p = Promise.resolve().then(asyncFunction);
    this.setProcess(p);
    return p;
  }

  private setProcess<T>(p: Promise<T>): void {
    const op =
      this.mode === 'queue'
        ? () => {
            if (process === this.process) {
              this.process = undefined;
            }
          }
        : () => {
            this.process = undefined;
          };
    const process = p.then(op, op);
    this.process = process;
  }
}
