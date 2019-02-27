class CreateOscs < ActiveRecord::Migration
  def change
    create_table :oscs do |t|
      t.string :waveform
      t.integer :synth_id
      t.decimal :attack
      t.decimal :decay
      t.decimal :sustain
      t.decimal :release
      t.integer :detune
      t.integer :frequency
    end
  end
end
