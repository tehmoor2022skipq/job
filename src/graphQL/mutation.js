import { gql } from '@apollo/client';

export const CREATE_JOB = gql`
    mutation postJob(
        $commitmentId: String!,
        $companyName: String!,
        $title: String!,
        $userEmail: String!,
        $description: String!,
        $applyUrl: String!
    ){
        postJob( 
            input: {
                commitmentId: $commitmentId,
                companyName: $companyName,
                title: $title,
                userEmail: $userEmail,
                description: $description,
                applyUrl: $applyUrl
            }){ 
            title
        }
    }
`;