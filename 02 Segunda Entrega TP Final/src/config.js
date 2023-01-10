export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb+srv://aldo7919:spike7919@cluster0.tgkozu1.mongodb.net/ecommerce?retryWrites=true&w=majority',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "backendantivilo",
        "private_key_id": "76f9c17bc16843f8177c031c6a2381ad28566195",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCjg9Q9Vvj+pPp2\n3XOVGZEO2Xzi0D45Rr3oMGyPs4L4YGFXFIiQVcqOP3G4jb7E1mun4IwEymbQenqI\n/kOK1b+JPuCE21iGXgn3ip366yf9sBvkTJ/bJTAe7YzIThEHSuU+GYde/T0eIoDg\nx8wvQiEC55pjA7lOffepNWhrVIb4tF0qvUY70MPjCBbx8Xmargl52Y5gZMVAT0HV\nnHygaD/9ni/vMfx8SV+LjYn0WZAqTyJYLp0ga8YaYjMuSENBa4xl0W2vyts7uRzx\nIN0E5QvHjb5r77QQWPR2heuDRRvr5tWywbc8DEwk0LIQkwqTSrpXZW2jemIHrRbA\nwNR6CmrBAgMBAAECggEACkZbklqCPUzJo6l+Z1VFcmJD6468B5EEmEVetQL0jRNQ\nBTmi6+BFi6hnRs+6t+y6CWuzRg51Onl6dLGhizpWQFNlUVk6gqsAblUqtdyL//Aj\n4zXWFQkNBox/0bW8x9wIHrME+M4/Rm2oR+JWLXa201Nmtf0YalsWXRl1jR+xIYno\n1nGhsj0eAyrO2rylslLD5AOx6lmo+B8AwE6lGhJUaYxRtG8b7NOPQ1kjxRJPRj0M\nrfNiM1NXmNFgM87obSU6wjx6qzUBpLem6Qt+Gz+zG6K5pVkOQt7oGhyzGXnUdhXl\n0WfdK1AIUmfAxqh+2uFaO7KdNDHMT9eWN5HNGGO+bwKBgQDUUwZf5Z2BzAwamYaL\nkR2Yuu6z30aFzF5KD+0ifSibdzldxj747gEdHy/i0FxGCOwpMZ6Va+19lfTqcaK9\nBVST2ha/oVmlQ0I5bqAk3S/TIlQ9tgtLca5KEqR18eGnKmFC41+/macYRkTpJh5e\n2Nj7JaGKCW0jOYOKo6SllZPZbwKBgQDFJoI6Znpbkcy1fy/bm5FxRGM82CcgtLUE\n3pPcWLlRi0+jdZkiVK2kiJVynrSr3opmgbi6PHk2HgZB0KAUsIsjza4rkublUfOE\nzTq+rXmqxxKcwIpuMsgcsoz55Jam1X7TCYvPIli1sQRUWAsrBBW82Ys5BBzw9RqN\nRlVyQWsGzwKBgDrc/aJubPlEEYL6VyOwSo1CHdU+LDYBz44m1i4+lphrODs4L9Mh\nYKurLsJp03sTFC3jdLymHEQ545lvgZd3t9f5mV7tI4Y+nEiB0+IEdDLLjKFDK+Rx\nksk0W+Xa9h07EZXSpYPf3ERNjuM4TykqYxVVfHBhZqFiW4Z/EbFaQ4//AoGBAI5O\nr64MDsJOSd+wwRDaCHAkFyXyOLwo9IlhSIXDHXG5B3FMD49yZCzh0k58NJni9y/q\n7zavNCdWINodB5Anpyfe7ZvSXAynzQnNQlwkyC/3pn2zlbjZuwzL7WrsD7q5XORk\nfaC0gCgWcLOZIeaY+j/pH8+2IlXj9piHbmIcym6NAoGAa9CEkbYrfOyy8y5dXn0I\n/lg3b0HXSRig8P9duFNf53W1TzVVCv9Jiox7ypAbqnGTDdrixaD2k10DIg+QB+p0\nANk8n7BLHEV6ObkzabmyZWKl/Xyf49zuSsS6/ko8yfjX+TH31iaJJBfoMKAeCsUH\nTJ5rNeXcMHRE8otHrFj2tYs=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-4th1t@backendantivilo.iam.gserviceaccount.com",
        "client_id": "105747588934904811460",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4th1t%40backendantivilo.iam.gserviceaccount.com"
      },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
   
}
