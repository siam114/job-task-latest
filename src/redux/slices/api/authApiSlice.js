import {apiSlice} from "../apiSlice"

const AUTH_URL = "/user"

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        login: builder.mutation({
            query: (data)=>({
                url: `${AUTH_URL}/login`,
                method: "POST",
                body: data,
                credentials: true
            })
        })
    })
})

export const {useLoginMutation}=authApiSlice