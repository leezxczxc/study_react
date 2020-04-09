import { RouteComponentProps, match } from 'react-router'

type ProfileParam = {
  username: string
}

export interface ProfileCompoRouteProps extends RouteComponentProps {
  match: match<ProfileParam>
}

export type ProfileData = {
  name: String,
  description: String
}

