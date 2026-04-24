# CDN OCI APIs

Tenho uma CDN na Cloud da OCI e gostaria de criar ou usar APIs em python para:
1. Fazer um upload de uma imagem via base64 para uma pasta determinada dentro do CDN retornando o link que a imagem será disponibilizada na Web
2. Fazer um download de uma imagem que está na CDN via API
3. Listar as imagens existentes de uma pasta
4. Apagar todas as imagens dentro de uma pasta
5. Apagar uma imagem específica dentro de uma pasta

Para interagir com sua CDN na Oracle Cloud Infrastructure (OCI) usando Python, você pode usar a biblioteca `oci-python-sdk`, que oferece suporte para várias operações na OCI, incluindo o uso de serviços de armazenamento de objetos (Object Storage). Aqui está um exemplo básico de como você pode realizar as operações que mencionou:

Certifique-se de ter instalado a biblioteca `oci`:

```bash
pip install oci
```

Agora, vamos aos exemplos de código:

### 1. Fazer upload de uma imagem via base64 para uma pasta determinada dentro do CDN retornando o link da imagem na Web:

```python
import oci
import base64

# Configuração do cliente OCI
config = oci.config.from_file()
object_storage_client = oci.object_storage.ObjectStorageClient(config)

# Dados da imagem em base64
with open('imagem.jpg', 'rb') as f:
    image_data = f.read()
image_base64 = base64.b64encode(image_data).decode('utf-8')

# Upload da imagem para um bucket específico
bucket_name = 'seu_bucket'
object_name = 'pasta/imagem.jpg'
object_storage_client.put_object(
    namespace_name=config["namespace"],
    bucket_name=bucket_name,
    put_object_body=oci.object_storage.models.PutObjectBody(
        content_length=len(image_data),
        content_type='image/jpeg',
        object=object_name,
        put_object_body=image_base64
    )
)

# URL da imagem na web
image_url = f"https://objectstorage.{config['region']}.oraclecloud.com/n/{config['namespace']}/b/{bucket_name}/o/{object_name}"
print("URL da imagem:", image_url)
```

### 2. Fazer download de uma imagem que está na CDN via API:

```python
# Download da imagem
response = object_storage_client.get_object(
    namespace_name=config["namespace"],
    bucket_name=bucket_name,
    object_name=object_name
)

# Salvar a imagem
with open('imagem_baixada.jpg', 'wb') as f:
    for chunk in response.data.raw.stream(1024 * 1024, decode_content=False):
        f.write(chunk)
```

### 3. Listar as imagens existentes de uma pasta:

```python
# Listar objetos em um bucket/pasta
list_objects = object_storage_client.list_objects(
    namespace_name=config["namespace"],
    bucket_name=bucket_name,
    fields=["name"],
    prefix="pasta/"
)
for obj in list_objects.data.objects:
    print("Nome do objeto:", obj.name)
```

### 4. Apagar todas as imagens dentro de uma pasta:

```python
# Listar objetos em um bucket/pasta
list_objects = object_storage_client.list_objects(
    namespace_name=config["namespace"],
    bucket_name=bucket_name,
    fields=["name"],
    prefix="pasta/"
)

# Excluir objetos
for obj in list_objects.data.objects:
    object_storage_client.delete_object(
        namespace_name=config["namespace"],
        bucket_name=bucket_name,
        object_name=obj.name
    )
```

### 5. Apagar uma imagem específica dentro de uma pasta:

```python
# Excluir objeto específico
object_storage_client.delete_object(
    namespace_name=config["namespace"],
    bucket_name=bucket_name,
    object_name='pasta/imagem.jpg'
)
```

Lembre-se de substituir `'seu_bucket'` pelo nome real do seu bucket e ajustar os nomes de arquivo conforme necessário. Além disso, certifique-se de ter as permissões corretas configuradas na OCI para executar essas operações.
