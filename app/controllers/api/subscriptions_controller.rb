class Api::SubscriptionsController < ApplicationController

  def create
    @subscription = Subscription.new()
    @subscription.subscriber_id = current_user.id
    @subscription.user_id = params[:user_id]

    @subscription.save
    render :info
  end
  
  def destroy
   @sub = current_user.subscriptions.find_by(user_id: params[:user_id])
   
   if @sub
    @sub.destroy
   end
  end

end