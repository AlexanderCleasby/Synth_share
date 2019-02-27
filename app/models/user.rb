class User < ActiveRecord::Base
    has_many :synths
    has_secure_password
end