interface BasePageParams<T extends object> {
  params: {
    [key in keyof T]: string | string[] | T[key];
  };
  searchParams: {
    [key in keyof T]: string | string[] | T[key];
  };
}
export default BasePageParams;
