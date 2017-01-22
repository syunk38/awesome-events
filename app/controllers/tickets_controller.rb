class TicketsController < ApplicationController
  def new
    raise ActionController::RoutingError, 'ログイン状態で TicketsController#newにアクセス'
  end

  def create
    tickets = current_user.tickets.build do |t|
      t.event_id = params[:event_id]
      t.comment = params[:ticket][:comment]
    end
    if tickets.save
      flash[:notice] = 'このイベントに参加表明しました'
      head 201
    else
      render json: { messages: tickets.errors.full_messages }, status: 422
    end
  end

end
