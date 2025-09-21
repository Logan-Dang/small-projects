export type WeatherProps = {
  weather:
    | { status: "empty" }
    | { status: "loading" }
    | { status: "error"; error: any }
    | { status: "apiError"; error: any }
    | { status: "success"; data: any }; // you can replace `any` with a proper type later
};
