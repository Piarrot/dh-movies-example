provider "aws" {
  profile    = "default"
  region     = "sa-east-1"
}

resource "aws_instance" "example" {
  ami           = "ami-081a078e835a9f751"
  instance_type = "t2.micro"
}

