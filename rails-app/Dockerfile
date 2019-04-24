FROM debian:9
LABEL author="Neciu Laurentiu Florin"
LABEL class="343C5"
LABEL email="laurentiuflorinneciu@gmail.com"

RUN apt-get update

# Install ruby install
RUN apt-get install -y build-essential wget
RUN wget -O ruby-install-0.7.0.tar.gz https://github.com/postmodern/ruby-install/archive/v0.7.0.tar.gz
RUN tar -xzvf ruby-install-0.7.0.tar.gz
RUN cd ruby-install-0.7.0 && make install


# Install ruby
RUN ruby-install ruby-2.4.1

# Install chruby 
RUN wget -O chruby-0.3.9.tar.gz \
  https://github.com/postmodern/chruby/archive/v0.3.9.tar.gz
RUN tar -xzvf chruby-0.3.9.tar.gz
RUN cd chruby-0.3.9/ && make install

# Source chruby files
RUN echo 'source /usr/local/share/chruby/chruby.sh' | tee -a ~/.bashrc 
RUN echo 'source /usr/local/share/chruby/auto.sh' | tee -a ~/.bashrc
RUN cat ~/.bashrc

# Install rails gem
RUN /bin/bash -c "source ~/.bashrc && \
                  chruby ruby-2.4.1 && \ 
                  gem install rails -v 5.1.2 --no-rdoc --no-ri"

# Install pg lib wrapper
RUN apt-get install -y libpq-dev

# Replace with copy on deployment on ec2
VOLUME /book-server
EXPOSE 3000

# Entrypoint for starting server and configuring chruby 
COPY ./entrypoint.sh /
RUN chmod 777 /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"] 
