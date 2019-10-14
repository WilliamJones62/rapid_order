class CreateFsOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :fs_orders do |t|
      t.string :customer
      t.string :shipto
      t.date :date_required
      t.string :rep
      t.string :status
      t.string :cancel_rep
      t.date :cancel_date
      t.string :po_number
      t.text :notes
      t.boolean :order_entered
      t.boolean :second_run
      t.string :order_num
      t.boolean :in_process

      t.timestamps
    end
  end
end
