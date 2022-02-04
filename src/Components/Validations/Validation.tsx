export const AuthValidation = {
    name: {
        required: {
            value: true,
            message: "Name cannot be empty"
        }
    },
    email: {
        required: {
            value: true,
            message: "Email cannot be empty"
        }
    },
    phone: {
        required: {
            value: true,
            message: "phone cannot be empty"
        }
    },
    password: {
        required: {
            value: true,
            message: "Password cannot be empty"
        }
    }
}

export const categoryValidation = {
    categoryName: {
        required: {
            value: true,
            message: "category cannot be empty"
        }
    } 
}

export const menuValidation = {
    productName: {
        required: {
            value: true,
            message: "productName cannot be empty"
        }
    },
    productPrice: {
        required: {
            value: true,
            message: "productPrice cannot be empty"
        },
        min: {
            value: 1,
            message: "productPrice must be greater than zero"
        }
    },
    hour: {
        required: {
            value: true,
            message: "hour cannot be empty"
        },
        min: {
            value: 1,
            message: "hour must be greater than zero"
        },
        max: {
            value: 23,
            message: "hour must be less than 24"
        }
    },
    minute: {
        required: {
            value: true,
            message: "minute cannot be empty"
        },
        min: {
            value: 1,
            message: "minute must be greater than zero"
        },
        max: {
            value: 59,
            message: "minute must be less than 60"
        }
    },
    allergyInfo: {
        required: {
            value: true,
            message: "Cannot be empty"
        }
    },    
}