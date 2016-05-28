# Docker Example

Build an image

```
docker build -t pjimage .
```

# From the image create and run a container

```
docker run --name pjcontainer --restart=always -p 3000:3000 -d pjimage
```

after that

```
docker ps
```

should show that it is running. If not try `docker logs pjcontainer` or `docker ps -a` to see what went wrong.

# Test

```
http://youripaddress:3000/pjsecret
```
