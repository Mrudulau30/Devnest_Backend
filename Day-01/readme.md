# DAY-1
## Redis CLI Commands
#### 1) Create key-value pair
> SET Key Pair
#### 2) Display value 
> GET key
#### 3) Check particular Key exists
> EXISTS Key
#### 4) Display all keys
> KEYS *
#### 5) Delete single key
> DEL Key
#### 6) Expire key after some time
> EXPIRE Key Time
#### 7) Add key-value pair with expire time
> SETEX Key TIME Value
## ARRAY 
#### 8) Add element to start of Array
> LPUSH key Element
#### 9) Add element to end of Array
> RPUSH key Element
#### 10) show array
> LRANGE key start_index end_index
#### 11) Remove element from the start of array
> LPOP key
#### 12) Remove element from the start of array
> RPOP key
## OBJECTS
####  13) Add field to Object
> HSET key field value
####  14) Get field value from key
> HGET key field
####  15) Check filed exists in key
> HEXISTS key field
####  16) Display all field in key
> HKEYS key
####  17) Delete field in key
> HDEL key field
## POSTGRES COMMANDS
#### 18) Start Postgres
> psql -U postgres
#### 19) Create new user
> CREATE  USER username WITH PASSWORD password;
#### 20) Create Database
> CREATE DATABASE database_name;
#### 21) Drop database
> DROP DATABASE database_name;
#### 22) Grant privileges
> GRANT PRIVILEGES ON database_name TO username;
#### 23) List all database
> \l
#### 24) Display all tables
> \d
#### 25) Display structure of table
> \d table_name;
#### 26) Drop table
> DROP TABLE table_name



















<<<<<<< HEAD
## DAY-3

#### 1) subscribe to any channel
> SUBSCRIBE channel_name
#### 2) Display message to channel
> PUBLISH channel_name message
#### 3) Subscribe to all channel starting with particular letter
> PSUBSCRIBE letter*
#### 4) Usubscribe channel
> UNSUBSCRIBE channel_name
#### 5) Unsubscribe all channel starting with particular letter
> PUNSUBSCRIBE letter*
#### 6) Add stream
> XADD stream_name id key value
#### 7) To generate automatic timestamp ID in stream
> XADD stream_name * key value
=======

>>>>>>> 75ecafb5c5e05b565db712c631a022137ba6c609


