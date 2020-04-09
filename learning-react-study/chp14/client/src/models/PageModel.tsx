import { RouteComponentProps, match } from "react-router-dom";

type PageParam = {
  category: string
}

export interface PageRouteProps extends RouteComponentProps {
  match: match<PageParam>
}
