import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  segment: string = 'usuarios';
  lista_de_treinos = [
    { 
      nome: 'Crucifixo', 
      aplicacao: 'Peito', 
      descricao: 'Trabalhar a parte inferior do peito.', 
      foto: 'https://images.pexels.com/photos/4754001/pexels-photo-4754001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      nome: 'Supino Reto', 
      aplicacao: 'Peito', 
      descricao: 'Desenvolve a parte superior do peito e os tríceps.', 
      foto: 'https://images.pexels.com/photos/2261481/pexels-photo-2261481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      nome: 'Agachamento Livre', 
      aplicacao: 'Pernas', 
      descricao: 'Exercício básico para o desenvolvimento das pernas e glúteos.', 
      foto: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      nome: 'Remada Curvada', 
      aplicacao: 'Costas', 
      descricao: 'Fortalece a musculatura das costas e dos ombros.', 
      foto: 'https://images.pexels.com/photos/3927387/pexels-photo-3927387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      nome: 'Elevação Lateral', 
      aplicacao: 'Ombros', 
      descricao: 'Trabalha a parte lateral dos ombros.', 
      foto: 'https://images.pexels.com/photos/1160787/pexels-photo-1160787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      nome: 'Rosca Direta', 
      aplicacao: 'Braços', 
      descricao: 'Exercício básico para o desenvolvimento dos bíceps.', 
      foto: 'https://images.pexels.com/photos/3823075/pexels-photo-3823075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      nome: 'Leg Press', 
      aplicacao: 'Pernas', 
      descricao: 'Fortalece os músculos das coxas e glúteos.', 
      foto: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      nome: 'Desenvolvimento com Halteres', 
      aplicacao: 'Ombros', 
      descricao: 'Trabalha a parte frontal dos ombros.', 
      foto: 'https://images.pexels.com/photos/3076515/pexels-photo-3076515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      nome: 'Pulldown', 
      aplicacao: 'Costas', 
      descricao: 'Exercício para o desenvolvimento do latíssimo do dorso.', 
      foto: 'https://images.pexels.com/photos/3041367/pexels-photo-3041367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      nome: 'Tríceps Testa', 
      aplicacao: 'Braços', 
      descricao: 'Fortalece os músculos tríceps.', 
      foto: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      nome: 'Cadeira Extensora', 
      aplicacao: 'Pernas', 
      descricao: 'Exercício focado no quadríceps.', 
      foto: 'https://images.pexels.com/photos/5473185/pexels-photo-5473185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  treinos = [
    {
      nome: 'Pulley',
      series: 3,
      foto: 'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Triceps-Pulley-Barra.gif'
    },
    {
      nome: 'Agachamento Sumô',
      series: 3,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/agachamento-sumo-sem-halter.gif'
    },
    {
      nome: 'Supino Reto',
      series: 4,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif'
    },
    {
      nome: 'Remada Unilateral',
      series: 4,
      foto: 'https://static.wixstatic.com/media/2edbed_cf8feb6f79494833b887104bc358843d~mv2.gif'
    },
    {
      nome: 'Levantamento Terra',
      series: 4,
      foto: 'https://www.hipertrofia.org/blog/wp-content/uploads/2017/11/barbell-deadlift.gif'
    },
    {
      nome: 'Flexão de Braços',
      series: 3,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/flexao-de-bracos.gif'
    },
    {
      nome: 'Cadeira Abdutora',
      series: 3,
      foto: ''
    },
    {
      nome: 'Rosca Direta',
      series: 3,
      foto: 'https://static.wixstatic.com/media/2edbed_8a612c33a1f649578ade7454653f7f30~mv2.gif'
    },
    {
      nome: 'Prancha',
      series: 3,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/prancha-com-elevacao-das-pernas-prancha-aranha.gif'
    },
    {
      nome: 'Extensão de Tríceps na Polia',
      series: 3,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-no-pulley-atras-ca-cabeca.gif'
    }
  ];
  

  usuarios = [
    {
      foto: '',
      nome: 'Dolores Fuertes de Barriga',
      idade: 20,
      genero: 'Feminino',
      rotinas: [
        {
          dia: 'segunda-feira', 
          treinos: [
            'Supino Fresco',
            'Rosca Estreita',
            'Mesa Esticadora'
          ]
        },
        {
          dia: 'quarta-feira', 
          treinos: [
            'Crucifixo Henri',
            'Trícips Corda',
            'Remada Costelinha'
          ]
        },
        {
          dia: 'sexta-feira', 
          treinos: [
            'Tríceps do Hulk',
            'Good Morning Papai',
            'Agachamento Sumô'
          ]
        }
      ]
    },
    {
      foto: '',
      nome: 'Marciano Verdinho Silva',
      idade: 30,
      genero: 'Masculino',
      rotinas: [
        {
          dia: 'terça-feira', 
          treinos: [
            'Supino',
            'Rosca Direta',
            'Mesa Flexora'
          ]
        },
        {
          dia: 'quinta-feira', 
          treinos: [
            'Crucifixo',
            'Supino Fechado',
            'Tríceps Coice'
          ]
        },
        {
          dia: 'sábado-feira', 
          treinos: [
            'Tríceps Corda',
            'Tríceps Francesa',
            'Pulley'
          ]
        }
      ]
    },
    {
      foto: '',
      nome: 'Joaquina Pé de Mesa',
      idade: 25,
      genero: 'Feminino',
      rotinas: [
        {
          dia: 'segunda-feira', 
          treinos: [
            'Agachamento Livre',
            'Leg Press',
            'Flexora Sentada'
          ]
        },
        {
          dia: 'quarta-feira', 
          treinos: [
            'Elevação Lateral',
            'Desenvolvimento com Halteres',
            'Crucifixo Invertido'
          ]
        },
        {
          dia: 'sexta-feira', 
          treinos: [
            'Puxada Aberta',
            'Remada Curvada',
            'Encolhimento com Barra'
          ]
        }
      ]
    },
    {
      foto: '',
      nome: 'Carlos Monstro Pinto',
      idade: 28,
      genero: 'Masculino',
      rotinas: [
        {
          dia: 'segunda-feira', 
          treinos: [
            'Supino Reto',
            'Crossover',
            'Peck Deck'
          ]
        },
        {
          dia: 'quarta-feira', 
          treinos: [
            'Desenvolvimento Militar',
            'Elevação Frontal',
            'Encolhimento de Ombros'
          ]
        },
        {
          dia: 'sexta-feira', 
          treinos: [
            'Levantamento Terra',
            'Stiff',
            'Leg Press'
          ]
        }
      ]
    },
    {
      foto: '',
      nome: 'Ana Palito Verde',
      idade: 22,
      genero: 'Feminino',
      rotinas: [
        {
          dia: 'terça-feira', 
          treinos: [
            'Puxada Frontal',
            'Remada Alta',
            'Rosca Scott'
          ]
        },
        {
          dia: 'quinta-feira', 
          treinos: [
            'Leg Press 45',
            'Agachamento Hack',
            'Elevação de Quadril'
          ]
        },
        {
          dia: 'sábado-feira', 
          treinos: [
            'Tríceps Testa',
            'Tríceps Coice',
            'Pullover'
          ]
        }
      ]
    },
    {
      foto: '',
      nome: 'Fernando Nando do Espanto',
      idade: 32,
      genero: 'Masculino',
      rotinas: [
        {
          dia: 'segunda-feira', 
          treinos: [
            'Supino Inclinado',
            'Crucifixo Inclinado',
            'Rosca Direta'
          ]
        },
        {
          dia: 'quarta-feira', 
          treinos: [
            'Puxada Unilateral',
            'Remada Cavalinho',
            'Rosca Concentrada'
          ]
        },
        {
          dia: 'sexta-feira', 
          treinos: [
            'Agachamento Frontal',
            'Leg Press Unilateral',
            'Panturrilha em Pé'
          ]
        }
      ]
    },
    {
      foto: '',
      nome: 'Gabriela Malhação Pesada',
      idade: 26,
      genero: 'Feminino',
      rotinas: [
        {
          dia: 'terça-feira', 
          treinos: [
            'Agachamento Búlgaro',
            'Stiff',
            'Flexora deitada'
          ]
        },
        {
          dia: 'quinta-feira', 
          treinos: [
            'Desenvolvimento com Barra',
            'Elevação Lateral',
            'Tríceps Pulley'
          ]
        },
        {
          dia: 'sábado-feira', 
          treinos: [
            'Puxada Fechada',
            'Remada Alta',
            'Rosca Martelo'
          ]
        }
      ]
    },
    {
      foto: '',
      nome: 'Roberto Forte Braço',
      idade: 34,
      genero: 'Masculino',
      rotinas: [
        {
          dia: 'segunda-feira', 
          treinos: [
            'Rosca Direta',
            'Rosca Martelo',
            'Rosca Inversa'
          ]
        },
        {
          dia: 'quarta-feira', 
          treinos: [
            'Supino Declinado',
            'Crucifixo Declinado',
            'Pullover'
          ]
        },
        {
          dia: 'sexta-feira', 
          treinos: [
            'Levantamento Terra',
            'Agachamento Livre',
            'Flexora em Pé'
          ]
        }
      ]
    },
    {
      foto: '',
      nome: 'Camila Malha Bem',
      idade: 24,
      genero: 'Feminino',
      rotinas: [
        {
          dia: 'terça-feira', 
          treinos: [
            'Leg Press 90°',
            'Agachamento Livre',
            'Stiff com Halteres'
          ]
        },
        {
          dia: 'quinta-feira', 
          treinos: [
            'Desenvolvimento com Halteres',
            'Elevação Frontal com Barra',
            'Tríceps Pulley Invertido'
          ]
        },
        {
          dia: 'sábado-feira', 
          treinos: [
            'Puxada Alta',
            'Remada Curvada',
            'Rosca Scott'
          ]
        }
      ]
    },
    {
      foto: '',
      nome: 'Tiago Tratorzão',
      idade: 29,
      genero: 'Masculino',
      rotinas: [
        {
          dia: 'segunda-feira', 
          treinos: [
            'Supino Reto com Barra',
            'Crucifixo com Halteres',
            'Flexão de Braço'
          ]
        },
        {
          dia: 'quarta-feira', 
          treinos: [
            'Levantamento Terra',
            'Remada Serrote',
            'Rosca Martelo'
          ]
        },
        {
          dia: 'sexta-feira', 
          treinos: [
            'Agachamento Livre',
            'Leg Press',
            'Panturrilha Sentada'
          ]
        }
      ]
    },
    {
      foto: '',
      nome: 'Beatriz Peso Pesado',
      idade: 27,
      genero: 'Feminino',
      rotinas: [
        {
          dia: 'terça-feira', 
          treinos: [
            'Puxada Frontal',
            'Remada Curvada',
            'Rosca Concentrada'
          ]
        },
        {
          dia: 'quinta-feira', 
          treinos: [
            'Leg Press 90°',
            'Agachamento Hack',
            'Stiff com Halteres'
          ]
        },
        {
          dia: 'sábado-feira', 
          treinos: [
            'Tríceps Coice',
            'Tríceps Pulley',
            'Supino Fechado'
          ]
        }
      ]
    },
    {
      foto: '',
      nome: 'Rodrigo Massa Bruta',
      idade: 31,
      genero: 'Masculino',
      rotinas: [
        {
          dia: 'segunda-feira', 
          treinos: [
            'Desenvolvimento com Barra',
            'Elevação Lateral com Halteres',
            'Encolhimento com Barra'
          ]
        },
        {
          dia: 'quarta-feira', 
          treinos: [
            'Rosca Direta',
            'Rosca Inversa',
            'Rosca Scott'
          ]
        },
        {
          dia: 'sexta-feira', 
          treinos: [
            'Agachamento Sumô',
            'Levantamento Terra',
            'Leg Press 45°'
          ]
        }
      ]
    }
  ];
  
  constructor(){}

  trocar(event: any){
    this.segment = event.detail.value;
  }

}
