#Odyssey Network Protocol

## Message Structure
|Byte(s)|Purpose|
|---|---|
|0  | System Id |
|1  | Message Id |
|2-3| Message Length |
|4-*| Message Payload |

## Systems
|Id|System|
|---|---|
|0|[Admin](network/systems/admin.md)|
|1|[Accounts](network/systems/accounts.md)|
