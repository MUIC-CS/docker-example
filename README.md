# Docker Example

Build an image
  docker build -t pjimage .

# From the image create and run a container

  docker run --name pjcontainer --restart=always -p 3000:3000 -d pjimage
