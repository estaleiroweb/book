```mongodb
show dbs
use mydatabase
show collections
```

```python
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')  # Replace with your connection string

# List all databases
database_names = client.list_database_names()
print("Databases:")
for db_name in database_names:
    print(f"- {db_name}")

# List collections in a specific database
db = client['mydatabase']  # Replace 'mydatabase' with the desired database name
collection_names = db.list_collection_names()
print("\nCollections in 'mydatabase':")
for col_name in collection_names:
    print(f"- {col_name}")

client.close()
```
