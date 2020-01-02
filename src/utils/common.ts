/**
 * 模拟 Promise 请求
 */
export function mockFetch(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout((): void => {
      resolve('Promise is OK');
    }, 1000);
  });
}
