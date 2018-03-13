# Accounts System
## Message Ids
|Message Id|Meaning|
|---|---|
|0|[Create Account](#CreateAccount)|
|1|[Login](#Login)|

## Message Data
### Create Account
#### Client -> Server
|Byte|Meaning|
|---|---|
|0 - m|Username|
|m + 1|Null Separator (must be 0)|
|(m + 2) - n|Password|

#### Server -> Client
|Byte|Meaning|
|---|---|
|0|Result code|

|Code|Meaning|
|---|---|
|0|Success|
|1|Username Invalid|
|2|Password Invalid|
|3|Username Taken|
|255|Unknown Error|

### Login
#### Client -> Server

#### Server -> Client
