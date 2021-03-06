import { Tweet } from '../../store/ducks/tweets/contracts/state'
import {instance} from '../../core/axios'

interface Response<T> {
    status: 'success' | 'error',
    data: T | any,
    userComment: any
}


export const TweetsApi = {
    async fetchTweets(id?: string): Promise<Tweet[]> {
        const { data } = await instance.get<Response<Tweet[]>>(!!id ? `/tweet/user/${id}` : 'tweets')
        return data.data
    },

    async fetchTweet(id: string): Promise<Tweet> {
        const { data } = await instance.get<Response<Tweet>>('/tweet/' + id)
         await Object.assign({}, data.data, data.userComment)
        return data.data
    },

    async AddTweet(payload ): Promise<Tweet> {
        const { data } = await instance.post('/tweets/', payload)
        return data.data
    }, 

    async deleteTweet(id: string): Promise<Tweet> {
        const { data } = await instance.delete(`/tweet/${id}`)
        return data.data
    }, 

    async likeToggleTweet(payload): Promise<Tweet> {
        const { data } = await instance.patch(`/tweet/like/${payload.id}`, {userId: payload.userID} )
        return data
    }, 
  
    async AddComment(payload) {
        const { data } = await instance.post(`/tweet/comment/${payload.tweetID}`, {userId: payload.userID, text: payload.text, images: payload.images, fullname: payload.author.fullname, username: payload.author.username, avatar: payload.author.avatar})
        return data
    }, 
    async bookmarksToggleTweet(payload) {
        const { data } = await instance.put(`users/bookmarks/${payload.userID}`, {tweetID: payload.tweetID})
        return data
    }, 
}