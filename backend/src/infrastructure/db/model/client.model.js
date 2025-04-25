import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
        },
        mobile_number: {
            type: String,
            required: true,
            match: [/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"],
        },
        company: {
            type: String,
            required: true,
        },
        total_order: {
            type: Number,
            required: true,
            min: 0,
        },
        order_id: {
            type: Number,
            required: true,
            unique: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const ClientModel = mongoose.model("Client", clientSchema);

export default ClientModel;
