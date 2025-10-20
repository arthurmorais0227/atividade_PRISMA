import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  console.log('🌱 Inserindo comidas no banco...')

  await prisma.comidas.deleteMany()
  await prisma.$executeRaw`ALTER TABLE comidas AUTO_INCREMENT = 1`

  // insere 20 comidas
  await prisma.comidas.createMany({
    data: [
      { nome: 'Feijoada', tipo: 'Brasileira', preco: 35.50, descricao: 'Feijão preto com carnes defumadas, servido com arroz e farofa.' },
      { nome: 'Moqueca de Peixe', tipo: 'Brasileira', preco: 42.00, descricao: 'Peixe cozido no leite de coco, azeite de dendê e temperos.' },
      { nome: 'Coxinha', tipo: 'Brasileira', preco: 8.00, descricao: 'Salgado frito recheado com frango desfiado e catupiry.' },
      { nome: 'Pizza Margherita', tipo: 'Italiana', preco: 45.00, descricao: 'Molho de tomate, mussarela e manjericão fresco.' },
      { nome: 'Lasanha à Bolonhesa', tipo: 'Italiana', preco: 39.90, descricao: 'Camadas de massa, molho bolonhesa e queijo gratinado.' },
      { nome: 'Risoto de Cogumelos', tipo: 'Italiana', preco: 48.00, descricao: 'Arroz arbório com cogumelos frescos e parmesão.' },
      { nome: 'Sushi Combo', tipo: 'Japonesa', preco: 60.00, descricao: 'Seleção de sushis variados com peixe fresco e arroz temperado.' },
      { nome: 'Tempurá de Camarão', tipo: 'Japonesa', preco: 55.00, descricao: 'Camarões empanados fritos servidos com molho shoyu.' },
      { nome: 'Yakissoba', tipo: 'Japonesa', preco: 35.00, descricao: 'Macarrão frito com legumes, carne e molho oriental.' },
      { nome: 'Taco de Carne', tipo: 'Mexicana', preco: 25.00, descricao: 'Tortilha crocante recheada com carne e guacamole.' },
      { nome: 'Burrito de Frango', tipo: 'Mexicana', preco: 28.00, descricao: 'Tortilha macia recheada com frango, feijão e queijo.' },
      { nome: 'Nachos com Queijo', tipo: 'Mexicana', preco: 22.00, descricao: 'Chips de milho com molho cheddar derretido.' },
      { nome: 'Hambúrguer Artesanal', tipo: 'Americana', preco: 30.00, descricao: 'Pão brioche, carne bovina e queijo cheddar.' },
      { nome: 'Hot Dog Clássico', tipo: 'Americana', preco: 18.00, descricao: 'Salsicha com ketchup, mostarda e cebola crocante.' },
      { nome: 'Panqueca de Blueberry', tipo: 'Amer  icana', preco: 20.00, descricao: 'Panquecas doces servidas com mel e blueberries.' },
      { nome: 'Curry de Frango', tipo: 'Indiana', preco: 40.00, descricao: 'Frango cozido em molho de curry e leite de coco.' },
      { nome: 'Naan com Alho', tipo: 'Indiana', preco: 10.00, descricao: 'Pão indiano assado com manteiga e alho.' },
      { nome: 'Pad Thai', tipo: 'Tailandesa', preco: 38.00, descricao: 'Macarrão de arroz salteado com camarão, ovo e amendoim.' },
      { nome: 'Falafel', tipo: 'Árabe', preco: 15.00, descricao: 'Bolinhas fritas de grão-de-bico temperado com especiarias.' },
      { nome: 'Kebab de Cordeiro', tipo: 'Árabe', preco: 32.00, descricao: 'Espetinho de cordeiro grelhado com molho de iogurte.' },
    ],
  })

  console.log('✨ 20 comidas inseridas com sucesso!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })