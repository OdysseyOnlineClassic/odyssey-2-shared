# Accounts System
## Message Ids
|Message Id|Meaning|
|---|---|
|0|[Create Account](#create-account)|
|1|[Login](#login)|
|2|[Logout](#logout)|

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
|Byte|Meaning|
|---|---|
|0 - m|Username|
|m + 1|Null Separator (must be 0)|
|(m + 2) - n|Password|

#### Server -> Client
|Byte|Meaning|
|---|---|
|0|Result Code|

|Code|Meaning|
|---|---|
|0|Success|
|1|Failure|
|2|Client Already Logged In|

*We don't use specific error messages to reduce account info phishing. Either the login was successful or was not.*

### Logout
#### Client -> Server
Empty Message

#### Server -> Client
Empty Message
