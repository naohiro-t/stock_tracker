class Friendship < ActiveRecord::Base
  belongs_to :user
  # friend model doesn't exit, but it is same as user id
  belongs_to :friend, :class_name => 'User'
end
