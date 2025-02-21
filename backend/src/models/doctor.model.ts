import { DataTypes, Model } from 'sequelize';
import pool from './resources/sql_admin';

class Doctor extends Model {
  public id!: number;
  public user_id!: number;
  user_profile!: object;
  notifications!: object;
}

Doctor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_profile: {
      type: DataTypes.JSONB,
      allowNull: false,
      unique: true,
    },
    notifications: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  },
  {
    sequelize: pool,
    tableName: 'doctors',
    timestamps: true,
  }
);

export default Doctor;
