# Set up Locale
export LC_ALL="en_US.UTF-8"
dpkg-reconfigure locales

# Update system
apt-get update
apt-get -y upgrade

# Install git
sudo apt-get install -y git

# Install RVM and ruby
curl -L https://get.rvm.io | bash
source /usr/local/rvm/scripts/rvm
rvm install 2.2.0
rvm use 2.2.0
rvm --default use 2.2.0
gem install bundler

# Install Node and NPM
apt-get -y install nodejs
apt-get -y install npm

# Postgres
sudo apt-get install -y postgresql postgresql-contrib libpq-dev

POSTGRE_VERSION=9.3

# listen for localhost connections
sudo sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/g" /etc/postgresql/$POSTGRE_VERSION/main/postgresql.conf

# identify users via "md5", rather than "ident", allowing us to make postgres
# users separate from system users. "md5" lets us simply use a password
echo "host    all             all             0.0.0.0/0               md5" | sudo tee -a /etc/postgresql/$POSTGRE_VERSION/main/pg_hba.conf
echo "local    postgres     postgres     peer" | sudo tee -a /etc/postgresql/$POSTGRE_VERSION/main/pg_hba.conf

sudo service postgresql start
# change password of user
sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD 'postgres';"
# create new database "database"
sudo service postgresql restart

# Set up the application
cd /vagrant

# Install gems
bundle install

# Create and seed the database
rake db:setup

rake db:migrate