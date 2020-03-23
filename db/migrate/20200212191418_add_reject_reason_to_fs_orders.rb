class AddRejectReasonToFsOrders < ActiveRecord::Migration[5.1]
  def change
    add_column :fs_orders, :reject_reason, :string
  end
end
