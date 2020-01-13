class FsOrdersController < ApplicationController
  before_action :set_fs_order, only: [:edit, :update, :quit, :index]

  def find
    # get first available order.
    active_order = FsOrder.where(status: "ACTIVE").where(in_process: [nil, false]).first
    if active_order
      # we have found an active order that is not being processed by another DP
      fs_order = FsOrder.lock(true).find(active_order.id)
      # set the in_process flag to true to stop other DPs trying to enter this record
      fs_order.in_process = true
      fs_order.save!
      redirect_to edit_fs_order_path(fs_order)
    else
      # there are no orders to process.
      redirect_to fs_orders_empty_path
    end
  end

  def quit
    # need to release the current order so it can be processed by another DP
    @fs_order.in_process = false
    @fs_order.save!
    redirect_to signout_path and return
  end

  def index
    @fs_order.in_process = false
    @fs_order.save!
    @fs_orders = FsOrder.where(status: "ACTIVE")
  end

  def edit
    @count = FsOrder.where(status: "ACTIVE").where(in_process: [nil, false]).count + 1
  end

  def empty
  end

  def update
    fp = fs_order_params
    if fp[:order_num].blank?
      # must enter an order number
      @count = FsOrder.where(status: "ACTIVE").where(in_process: [nil, false]).count + 1
      render :edit, notice: 'Order Number is required.' and return
    end
    fp[:dp] = current_user.email
    fp[:status] = "ENTERED"
    fp[:order_entered] = true
    respond_to do |format|
      if @fs_order.update(fp)
        format.html { redirect_to fs_orders_find_path, notice: 'Order was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

  private

  def set_fs_order
    @fs_order = FsOrder.find(params[:id])
  end

  def fs_order_params
    params.require(:fs_order).permit(
      :dp,
      :order_num,
      :order_entered,
      :status
    )
  end
end
