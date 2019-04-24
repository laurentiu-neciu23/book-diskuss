#!/bin/bash


ruby-install -V
source ~/.bashrc
chruby ruby-2.4.1 
rails -v


# https://github.com/docker-library/rails/issues/10
# cd /$server_dir  && bundle install --system && rails s


# Stop the op from exiting
tail -f /dev/null