
# Instagram Backend Clone API


## Kullanıcı İşlemleri

#### Giriş Yap

```http
  POST /login
```

| Veri | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | Kullanıcı adı |
| `pass`      | `string` | Şifre |

#### Kayıt Ol

```http
  POST /register
```

| Veri | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | İsim |
| `username`      | `string` | Kullanıcı adı |
| `email`      | `string` | Eposta Adresi |
| `password`      | `string` | Şifre |

---
#### Tüm Kullanıcılar

```http
  GET /user (Auth gerekli)
```

#### Tek Kullanıcı

```http
  GET /user:id (Auth gerekli)
```


| Veri | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | Ürün adı |
| `price`      | `integer` | Ürün fiyatı |



#### Takip İsteği Yolla

```http
  POST /user/follow (Auth gerekli)
```


| Veri | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `senderUsername`      | `string` | Takip yollayanın kullanıcı adı |
| `receiverUsername`    | `string` | Takip atılanın kullanıcı adı |


#### Takip İsteği Kabul Et

```http
  PUT /user/follow (Auth gerekli)
```

| Veri | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `requestUser`      | `string` | Takip isteği atan kullanıcı adı |
| `currentUser`      | `string` | Giriş yapan kullanıcı adı |

#### Takip İsteği Sil

```http
  DELETE /user/follow (Auth gerekli)
```

| Veri | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `requestUser`      | `string` | Takip isteği atan kullanıcı adı |
| `currentUser`      | `string` | Giriş yapan kullanıcı adı |

#### Eposta Doğrulama Kodu Gönder

```http
  POST /password/confirm
```

| Veri | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | Kullanıcı Adı |
| `email`    | `string` | Eposta Adresi |
  
#### Şifre Değiştir

```http
  POST /password/change
```

| Veri | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | Kullanıcı Adı |
| `password`    | `string` | Yeni Şifre |
| `confirmCode`    | `string` | Eposta'ya gelen doğrulama kodu |
  
---
## Gönderi (Post) İşlemleri

#### Post Oluştur

```http
  POST /post (Auth gerekli)
```

| Veri | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `postImg`      | `string` | Fotoğraf URL adresi |
| `description`  | `string` | Açıklama |

#### Post Sil

```http
  DELETE /post (Auth gerekli)
```

| Veri | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | Post sahibinin kullanıcı adı |
| `postID`  | `string` | Post ID |

#### Post'u Beğen

```http
  PUT /post (Auth gerekli)
```

| Veri | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | Beğenen kişinin kullanıcı adı |
| `postID`  | `string` | Post ID |

#### Kullanıcı Postları

```http
  GET /post (Auth gerekli)
```

| Veri | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | Kullanıcı Adı |

## Kullanılan Teknolojiler

**Node, Express, MongoDB, JWT, Nodemailer**


  