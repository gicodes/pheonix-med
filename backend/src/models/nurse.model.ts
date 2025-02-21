import { DataTypes, Model } from 'sequelize';
import pool from './resources/sql_admin';

class Nurse extends Model {
  public id!: number;
  public user_id!: number;
  user_profile!: object;
  reviews!: object;
  location!: string;
}

Nurse.init(
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
    reviews: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: pool,
    tableName: 'nurses',
    timestamps: true,
  }
);

export default Nurse;
