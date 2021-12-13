json.sub do 
  json.extract! @subscription, :id, :user_id, :subscriber_id
end

json.subbed_to do
  json.extract! @subscription.channel_owner, :id, :username
end