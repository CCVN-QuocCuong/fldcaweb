import Config from 'react-native-config'

const identity_pool_id = Config.IDENTITY_POOL_ID
const region = Config.AWS_REGION
const user_pools_id = Config.USER_POOL_ID
const client_id = Config.CLIENT_ID
const bucket = Config.AWS_BUCKET

export const aws_config = {
    Auth: {
        identityPoolId: identity_pool_id,
        region: region,
        userPoolId: user_pools_id,
        userPoolWebClientId: client_id,
    },
    Storage: {
        AWSS3: {
            bucket: bucket,
            region: region,
        }
    }
}