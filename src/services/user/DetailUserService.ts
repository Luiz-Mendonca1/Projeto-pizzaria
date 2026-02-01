import prismaClient  from "../../prisma/index";



class DetailUserService {
    async execute(user_id: string) {

        try {
        // Buscar o usuário no banco de dados pelo ID
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        return user;
        }
        catch (error) {
            console.log(error);
            throw new Error("Erro ao buscar detalhes do usuário");
        }
    }
}

export { DetailUserService }