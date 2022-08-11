import { gql } from '@apollo/client';

export const CREATE_JOB = gql`
    mutation postJob(
        $commitmentId: ID!,
        $companyName: String!,
        $title: String!,
        $locationNames:String!
        $userEmail: String!,
        $description: String!,
        $applyUrl: String!
    ){
        postJob( 
            input: {
                commitmentId: $commitmentId,
                companyName: $companyName,
                title: $title,
                locationNames:$locationNames,
                userEmail: $userEmail,
                description: $description,
                applyUrl: $applyUrl
            }){ 
            id,
            title
        }
    }
`;