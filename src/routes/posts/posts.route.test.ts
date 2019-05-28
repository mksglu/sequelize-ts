process.env.NODE_ENV = "test";
import * as request from "supertest";
import server from "../../app";
import { IUser } from "../../interfaces/IUser";
import { IPost } from "../../interfaces/IPost";
import truncate from "../../helpers/truncate";

describe("Posts Route", () => {
    let author;
    let mockPost;

    beforeAll(async () => {
        author = await request(server)
            .post("/create")
            .send(<IUser>{
                name: "Test User"
            });

        mockPost = <IPost>{
            body: "Mock Body",
            authorId: author.body.data.id
        };
    });

    describe("/POST add", () => {
        it("it should add post", async () => {
            const post = await request(server)
                .post("/add")
                .send(mockPost);
            expect(post.status).toBe(201);
            expect(post.body.status).toEqual(true);
            expect(post.body.data.body).toEqual(mockPost.body);
            expect(post.body.data.authorId).toEqual(mockPost.authorId);
        });

        it("it shouldnt add post", async () => {
            const post = await request(server).post("/add");
            expect(post.status).toBe(400);
            expect(post.body.status).toEqual(false);
        });
    });

    describe("/GET posts", () => {
        it("it should list posts", async () => {
            const posts = await request(server).get("/posts");
            expect(posts.status).toBe(201);
            expect(posts.body.status).toEqual(true);
        });
    });

    afterAll(async () => {
        await truncate();
    });
});
