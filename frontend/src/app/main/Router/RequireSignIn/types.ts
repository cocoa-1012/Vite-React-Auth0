export type Props = {
  children?: React.ReactElement,
  only?: (args: { routeQuery: URLSearchParams }) => boolean,
}
