import mongoose from 'mongoose'

const Shema = mongoose.Schema

export const ContactShema = new Shema({
    firstname: {
        type: String,
        required: 'Entrer votre prenom'
    },

    lastname: {
        type: String,
        required: 'Entrer votre prenom'
    },

    email: {
        type: String
    },

    company: {
        type: String
    },

    phone: {
        type: Number
    },

    created_date: {
        type: Date,
        default: Date.now()
    }
})