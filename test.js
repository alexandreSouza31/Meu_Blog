const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000,
    },
  ],
  imprimirResumo: function () {
    //SOLUCAO item C
    let totalDeItens = 0;
    for (let item of this.produtos) {
      totalDeItens += item.qtd;
    }
    let totalAPagar = 0;
    for (let preco of this.produtos) {
      totalAPagar += (preco.precoUnit * preco.qtd) / 100;
    }
    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    console.log(`Total de itens: ${totalDeItens} itens`);
    console.log(`Total a pagar: R$ ${totalAPagar.toFixed(2)}`);
  },
  addProduto(produto) {
    const produtoExiste = this.produtos.id;
    if (produtoExiste) {
      produtoExiste.qtd += produto.qtd;
    } else {
      this.produtos.push(produto);
    }
  },
  imprimirDetalhes() {
    let numeroDoItem = 1;
    for (const produto of this.produtos) {
      const subtotal = (produto.qtd * produto.precoUnit) / 100;
      console.log(
        `Item ${numeroDoItem} - ${produto.nome} - ${
          produto.qtd
        } und - R$ ${subtotal.toFixed(2)}`
      );
      numeroDoItem++;
    }
  },
};

//carrinho.imprimirResumo();

const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000,
};
// SOLUCAO ITENS D e E

function addProdutoAoCarrinho(carrinho, produto) {
  const produtoExiste = carrinho.produtos.id;
  if (produtoExiste) {
    produtoExiste.qtd += produto.qtd;
  } else {
    carrinho.produtos.push(produto);
  }
}

addProdutoAoCarrinho(carrinho, novaBermuda);
carrinho.imprimirResumo();

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000,
};

addProdutoAoCarrinho(carrinho, novoTenis);
carrinho.imprimirResumo();

carrinho.addProduto(novaBermuda);
carrinho.imprimirResumo();

carrinho.imprimirDetalhes();

// SOLUCAO ITENS A e B
// function imprimirResumoDoCarrinho(carrinho) {
//   let totalDeItens = 0;
//   for (let item of carrinho.produtos) {
//     totalDeItens += item.qtd;
//   }
//   let totalAPagar = 0;
//   for (let preco of carrinho.produtos) {
//     totalAPagar += (preco.precoUnit * preco.qtd) / 100;
//   }
//   console.log(`Cliente: ${carrinho.nomeDoCliente}`);
//   console.log(`Total de itens: ${totalDeItens} itens`);
//   console.log(`Total a pagar: R$ ${totalAPagar.toFixed(2)}`);
// }

// imprimirResumoDoCarrinho(carrinho);

//SOLUCAO ITEM H

// const carrinho = {
//   nomeDoCliente: "Guido Bernal",
//   produtos: [
//     {
//       id: 1,
//       nome: "Camisa",
//       qtd: 3,
//       precoUnit: 3000,
//     },
//     {
//       id: 2,
//       nome: "Bermuda",
//       qtd: 2,
//       precoUnit: 5000,
//     },
//   ],

//   addProduto(produto) {
//     const produtoExiste = this.produtos.id;
//     if (produtoExiste) {
//       produtoExiste.qtd += produto.qtd;
//     } else {
//       this.produtos.push(produto);
//     }
//   },

//   calcularTotalDeItens() {
//     let totalItens = 0;
//     for (const produto of this.produtos) {
//       totalItens += produto.qtd;
//     }
//     return totalItens;
//   },
//   calcularTotalAPagar() {
//     let totalPagar = 0;
//     for (const produto of this.produtos) {
//       totalPagar += produto.qtd * produto.precoUnit;
//     }
//     return totalPagar;
//   },
//   imprimirResumo() {
//     const totalItens = this.calcularTotalDeItens();
//     const totalPagar = this.calcularTotalAPagar();

//     console.log(`Cliente: ${this.nomeDoCliente}`);
//     console.log(`Total de itens: ${totalItens} itens`);
//     console.log(`Total a pagar: R$ ${(totalPagar / 100).toFixed(2)}`);
//   },
//   imprimirDetalhes() {
//     console.log(`Cliente: ${this.nomeDoCliente}`);

//     let itemNumber = 1;
//     for (const produto of this.produtos) {
//       const subtotal = (produto.qtd * produto.precoUnit) / 100;
//       console.log(
//         `Item ${itemNumber} - ${produto.nome} - ${
//           produto.qtd
//         } und - R$ ${subtotal.toFixed(2)}`
//       );
//       itemNumber++;
//     }

//     const totalItens = this.calcularTotalDeItens();
//     const totalPagar = this.calcularTotalAPagar();
//     console.log(`Total de itens: ${totalItens} itens`);
//     console.log(`Total a pagar: R$ ${(totalPagar / 100).toFixed(2)}`);
//   },
// };

// carrinho.imprimirDetalhes();

//SOLUCAO ITEM FINAL I)

// const carrinho = {
//     nomeDoCliente: "Guido Bernal",
//     produtos: [
//       {
//         id: 1,
//         nome: "Camisa",
//         qtd: 3,
//         precoUnit: 3000,
//       },
//       {
//         id: 2,
//         nome: "Bermuda",
//         qtd: 2,
//         precoUnit: 5000,
//       },
//     ],
  
//     addProduto(produto) {
//       const produtoExiste = this.produtos.id;
//       if (produtoExiste) {
//         produtoExiste.qtd += produto.qtd;
//       } else {
//         this.produtos.push(produto);
//       }
//     },
  
//     calcularTotalDeItens() {
//       let totalItens = 0;
//       for (const produto of this.produtos) {
//         totalItens += produto.qtd;
//       }
//       return totalItens;
//     },
//     calcularTotalAPagar() {
//       let totalPagar = 0;
//       for (const produto of this.produtos) {
//         totalPagar += produto.qtd * produto.precoUnit;
//       }
//       return totalPagar;
//     },
//     calcularDesconto() {
//       const totalItens = this.calcularTotalDeItens();
//       const totalPagar = this.calcularTotalAPagar();
  
//       let descontoPorItens = 0;
//       let descontoPorValor = 0;
  
//       // Desconto por itens
//       if (totalItens > 4) {
//         let menorPreco = this.produtos[0].precoUnit;
//         for (const produto of this.produtos) {
//           if (produto.precoUnit < menorPreco) {
//             menorPreco = produto.precoUnit;
//           }
//         }
//         descontoPorItens = menorPreco;
//       }
  
//       // Desconto por valor
//       if (totalPagar > 10000) {
//         descontoPorValor = totalPagar * 0.1;
//       }
  
//       if (descontoPorItens >= descontoPorValor) {
//         return descontoPorItens;
//       } else {
//         return descontoPorValor;
//       }
//     },
//     imprimirResumo() {
//       const totalItens = this.calcularTotalDeItens();
//       const totalPagar = this.calcularTotalAPagar();
//       const desconto = this.calcularDesconto();
  
//       console.log(`Cliente: ${this.nomeDoCliente}`);
//       console.log(`Total de itens: ${totalItens} itens`);
//       console.log(`Total a pagar: R$ ${(totalPagar / 100).toFixed(2)}`);
//       console.log(`Desconto: R$ ${(desconto / 100).toFixed(2)}`);
//       console.log(
//         `Total com desconto: R$ ${((totalPagar - desconto) / 100).toFixed(2)}`
//       );
//     },
//     imprimirDetalhes() {
//       console.log(`Cliente: ${this.nomeDoCliente}`);
  
//       let itemNumber = 1;
//       for (const produto of this.produtos) {
//         const subtotal = (produto.qtd * produto.precoUnit) / 100;
//         console.log(
//           `Item ${itemNumber} - ${produto.nome} - ${
//             produto.qtd
//           } und - R$ ${subtotal.toFixed(2)}`
//         );
//         itemNumber++;
//       }
  
//       const totalItens = this.calcularTotalDeItens();
//       const totalPagar = this.calcularTotalAPagar();
//       const desconto = this.calcularDesconto();
//       console.log(`Total de itens: ${totalItens} itens`);
//       console.log(`Total a pagar: R$ ${(totalPagar / 100).toFixed(2)}`);
//       console.log(`Desconto: R$ ${(desconto / 100).toFixed(2)}`);
//       console.log(
//         `Total com desconto: R$ ${((totalPagar - desconto) / 100).toFixed(2)}`
//       );
//     },
//   };
  
//   carrinho.imprimirResumo();