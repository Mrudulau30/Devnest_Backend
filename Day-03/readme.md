
## DAY-3

#### 1) subscribe to any channel
```
 SUBSCRIBE channel_name
 ```
#### 2) Display message to channel
```
PUBLISH channel_name message
```
#### 3) Subscribe to all channel starting with particular letter
```
 PSUBSCRIBE letter*
 ```
#### 4) Usubscribe channel
```
 UNSUBSCRIBE channel_name
 ```
#### 5) Unsubscribe all channel starting with particular letter
```
 PUNSUBSCRIBE letter*
 ```
#### 6) Add stream
```
 XADD stream_name id key value
 ```
#### 7) To generate automatic timestamp ID in stream
```
 XADD stream_name * key value
 ```
#### 8) To limit no of entries
```
XADD stream_name MAXLEN ID * key value
```
#### 9) To read stream data
```
XREAD COUNT no_of_entries STREAMS stream_name id_after_which_data_you_want

e.g: XREAD COUNT 200 STREAMS myStream 0
```
#### 10) Dis-connect user after inactivity
```
XREAD BLOCK time_in_ms STREAMS stream_name id
```
#### 11) To establish conection for some time
```
XREAD BLOCK time_in_ms STREAMS stream_name $
```
#### 12) Show data in particular range of streams
``` 
XRANGE stream_name start_id end_id 
```
#### 13) Show data in particular range of streams having limited row
```
XRANGE stream_name start_id end_id COUNT no_of_rows
```
#### 14) If we dont know start id and end id then this show data in reverse order
```
XRANGE stream_name - + COUNT no_of_rows
```





