class Api::SubscriptionsController < ApplicationController

  def create
    @subscription = Subscription.new()
    @subscription.subscriber_id = current_user.id
    @subscription.user_id = params[:userId].to_i
    @subscription.save
    render :info
  end
  
  def destroy
    # debugger
    @sub = current_user.subscriptions.find_by(id: params[:id])
    # debugger
    if @sub
      @sub.destroy
    end
  end
end