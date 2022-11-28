class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :due_date
      t.string :status
      t.integer :user_id
      t.integer :project_id
      t.boolean :complete

      t.timestamps
    end
  end
end
