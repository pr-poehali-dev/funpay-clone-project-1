import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const [activeTab, setActiveTab] = useState('catalog');

  const popularGames = [
    { id: 1, name: 'PUBG MOBILE', icon: 'https://cdn.poehali.dev/files/ea11e63f-ba4d-4078-93d3-091d1bb355fe.jpg', offers: 1520 },
    { id: 4, name: 'Valorant', icon: '🔫', offers: 756 },
    { id: 5, name: 'Standoff 2', icon: '💥', offers: 634 },
  ];

  const topSellers = [
    { id: 1, name: 'ProGamer2024', rating: 4.9, deals: 1523, verified: true },
    { id: 2, name: 'TradeMaster', rating: 4.8, deals: 987, verified: true },
    { id: 3, name: 'GameDeals', rating: 4.7, deals: 756, verified: false },
    { id: 4, name: 'AccountKing', rating: 4.9, deals: 2341, verified: true },
  ];

  const offers = [
    { 
      id: 1, 
      game: 'CS:GO', 
      title: 'Аккаунт Prime, 2000 часов',
      price: 1500, 
      seller: 'ProGamer2024',
      sellerRating: 4.9,
      image: '🎮',
      delivery: 'Мгновенно'
    },
    { 
      id: 2, 
      game: 'Genshin Impact', 
      title: '5000 примогемов',
      price: 800, 
      seller: 'TradeMaster',
      sellerRating: 4.8,
      image: '✨',
      delivery: '5-10 минут'
    },
    { 
      id: 3, 
      game: 'Dota 2', 
      title: 'Редкие предметы Arcana',
      price: 2500, 
      seller: 'GameDeals',
      sellerRating: 4.7,
      image: '⚔️',
      delivery: 'Мгновенно'
    },
    { 
      id: 4, 
      game: 'Valorant', 
      title: 'Акк с Радиантом',
      price: 3500, 
      seller: 'AccountKing',
      sellerRating: 4.9,
      image: '🔫',
      delivery: '1 час'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="text-3xl">🎮</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                GameMarket
              </h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <Button variant="ghost" onClick={() => setActiveTab('catalog')}>
                Каталог
              </Button>
              <Button variant="ghost" onClick={() => setActiveTab('sellers')}>
                Рейтинг продавцов
              </Button>
              <Button variant="ghost" onClick={() => setActiveTab('support')}>
                Поддержка
              </Button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Личный кабинет
              </Button>
            </Link>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="UserPlus" size={16} className="mr-2" />
              Регистрация
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-secondary p-12 text-white">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">
                Покупай и продавай игровые товары безопасно
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Более 10,000 активных продавцов. Защита сделок. Мгновенная доставка.
              </p>
              <div className="flex gap-3 max-w-xl">
                <Input 
                  placeholder="Поиск по играм и товарам..." 
                  className="bg-white text-foreground"
                />
                <Button size="lg" variant="secondary">
                  <Icon name="Search" size={20} />
                </Button>
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
              <div className="text-[200px] rotate-12">🎮</div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Популярные игры</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularGames.map((game) => (
              <Card 
                key={game.id} 
                className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer border-2 hover:border-primary"
              >
                <CardContent className="p-6 text-center">
                  {game.icon.startsWith('http') ? (
                    <img src={game.icon} alt={game.name} className="w-16 h-16 mx-auto mb-3 rounded-lg object-cover" />
                  ) : (
                    <div className="text-5xl mb-3">{game.icon}</div>
                  )}
                  <h4 className="font-semibold mb-1">{game.name}</h4>
                  <p className="text-sm text-muted-foreground">{game.offers} предложений</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-2xl grid-cols-3 mb-8">
            <TabsTrigger value="catalog">Каталог товаров</TabsTrigger>
            <TabsTrigger value="sellers">Топ продавцов</TabsTrigger>
            <TabsTrigger value="support">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="catalog">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offers.map((offer) => (
                <Card key={offer.id} className="hover:shadow-xl transition-all hover:scale-[1.02] overflow-hidden group">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center">
                    <div className="text-6xl mb-2">{offer.image}</div>
                    <Badge className="bg-primary">{offer.game}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 line-clamp-2">{offer.title}</h4>
                    <div className="flex items-center gap-2 mb-3">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs bg-primary text-white">
                          {offer.seller[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{offer.seller}</span>
                      <div className="flex items-center gap-1 ml-auto">
                        <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{offer.sellerRating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Icon name="Clock" size={14} />
                      {offer.delivery}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">{offer.price} ₽</div>
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-secondary">
                      Купить
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sellers">
            <div className="grid md:grid-cols-2 gap-6">
              {topSellers.map((seller, index) => (
                <Card key={seller.id} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-white text-xl">
                            {seller.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        {seller.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                            <Icon name="Check" size={12} className="text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-lg">{seller.name}</h4>
                          {seller.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Проверен
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{seller.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="ShoppingBag" size={14} />
                            <span>{seller.deals} сделок</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-muted-foreground/30">
                        #{index + 1}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="support">
            <div className="max-w-3xl">
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Icon name="ShieldCheck" size={20} className="text-primary" />
                        Как защищены сделки?
                      </h4>
                      <p className="text-muted-foreground">
                        Все платежи проходят через систему гарантии сделок. Деньги поступают продавцу только после подтверждения получения товара.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Icon name="Clock" size={20} className="text-primary" />
                        Как быстро я получу товар?
                      </h4>
                      <p className="text-muted-foreground">
                        Большинство товаров доставляются мгновенно или в течение 5-10 минут. Время доставки указано в каждом объявлении.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Icon name="MessageSquare" size={20} className="text-primary" />
                        Как связаться с продавцом?
                      </h4>
                      <p className="text-muted-foreground">
                        После оплаты откроется чат с продавцом, где вы сможете обсудить детали сделки и получить товар.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Icon name="AlertCircle" size={20} className="text-primary" />
                        Что делать при проблемах?
                      </h4>
                      <p className="text-muted-foreground">
                        Обратитесь в службу поддержки через форму на сайте. Мы разберём ситуацию и поможем решить проблему в течение 24 часов.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Icon name="HelpCircle" size={24} className="text-primary mt-1" />
                      <div>
                        <h4 className="font-bold mb-2">Остались вопросы?</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Свяжитесь с нашей командой поддержки, мы работаем 24/7
                        </p>
                        <Button variant="outline">
                          <Icon name="Mail" size={16} className="mr-2" />
                          Написать в поддержку
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">О платформе</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Правила</li>
                <li>Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Как купить</li>
                <li>Гарантии</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продавцам</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Как продавать</li>
                <li>Комиссия</li>
                <li>Стать продавцом</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>FAQ</li>
                <li>Контакты</li>
                <li>Помощь</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-sm text-muted-foreground">
            © 2024 GameMarket. Безопасная торговля игровыми товарами.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;