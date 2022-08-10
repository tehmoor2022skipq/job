import { gql } from '@apollo/client';

export const ALL_JOBS = gql`
    query {
       jobs{
    id
    title
    company{
      name
    }
    userEmail
    applyUrl
    description
  }
    }
`;