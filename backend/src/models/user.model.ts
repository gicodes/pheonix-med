import { DataTypes, Model } from 'sequelize';
import pool from './resources/sql_admin';

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public hashed_password!: string;
  public role!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    hashed_password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize: pool,
    tableName: 'users',
    timestamps: true,
  }
);

export default User;