class AddBackOrderToFsOrderParts < ActiveRecord::Migration[5.1]
  def change
    add_column :fs_order_parts, :back_order, :boolean
  end
end
