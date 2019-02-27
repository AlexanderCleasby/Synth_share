class Synth < ActiveRecord::Base
    has_many :oscs
    belongs_to :user
end