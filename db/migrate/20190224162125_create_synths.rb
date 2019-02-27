class CreateSynths < ActiveRecord::Migration
  def change
    create_table :synths do |t|
      t.string :name
      t.integer :user_id
    end
  end
end
