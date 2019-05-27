process.env.NODE_ENV = "test";
import { IPost } from "../../interfaces/IPost";
import { IUser } from "../../interfaces/IUser";
import postsService from "./posts.service";
import usersService from "../users/users.service";
import truncate from "../../helpers/truncate";

describe("Posts Service", () => {
    let user;
    let mockPost;

    beforeAll(async () => {
        user = await usersService.createUser(<IUser>{
            name: "Test User"
        });
        mockPost = <IPost>{
            body: "Mock Body",
            authorId: user.data.id
        };
    });

    describe("/POST add", () => {
        it("it should be create a post", async () => {
            const { data, status } = await postsService.addPost(mockPost);

            expect(status).toBe(true);
            expect(data.body).toEqual(mockPost.body);
            expect(data.authorId).toEqual(mockPost.authorId);
        });
    });

    describe("/GET posts", () => {
        it("it should be get all posts", async () => {
            const { data, status } = await postsService.getPosts(<IPost>{});

            expect(status).toBe(true);
            expect(data[0].body).toEqual(mockPost.body);
            expect(data[0].author.id).toEqual(mockPost.authorId);
        });
    });

    afterAll(async () => {
        await truncate();
    });
});
