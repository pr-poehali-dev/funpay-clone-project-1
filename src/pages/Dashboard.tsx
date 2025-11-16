import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('offers');

  const myOffers = [
    { id: 1, game: 'CS:GO', title: 'Аккаунт Prime, 2000 часов', price: 1500, status: 'active', views: 234, sales: 12 },
    { id: 2, game: 'Genshin Impact', title: '5000 примогемов', price: 800, status: 'active', views: 156, sales: 8 },
    { id: 3, game: 'Valorant', title: 'Акк с Радиантом', price: 3500, status: 'paused', views: 89, sales: 3 },
  ];

  const recentSales = [
    { id: 1, buyer: 'User123', item: 'Аккаунт Prime, 2000 часов', amount: 1500, date: '15 ноя 2024', status: 'completed' },
    { id: 2, buyer: 'GamerPro', item: '5000 примогемов', amount: 800, date: '14 ноя 2024', status: 'completed' },
    { id: 3, buyer: 'Player999', item: 'Акк с Радиантом', amount: 3500, date: '13 ноя 2024', status: 'pending' },
  ];

  const stats = {
    totalSales: 23,
    revenue: 34500,
    activeOffers: 2,
    rating: 4.9,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="text-3xl">🎮</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                GameMarket
              </h1>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link to="/">
                <Button variant="ghost">
                  <Icon name="Home" size={16} className="mr-2" />
                  Главная
                </Button>
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Icon name="Bell" size={16} className="mr-2" />
              Уведомления
            </Button>
            <Avatar>
              <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-white">
                P
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Личный кабинет</h2>
          <p className="text-muted-foreground">Управляйте объявлениями и отслеживайте продажи</p>
        </div>

        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">Всего продаж</div>
                <Icon name="TrendingUp" size={20} className="text-primary" />
              </div>
              <div className="text-3xl font-bold">{stats.totalSales}</div>
              <p className="text-xs text-muted-foreground mt-1">+12% за месяц</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">Доход</div>
                <Icon name="DollarSign" size={20} className="text-secondary" />
              </div>
              <div className="text-3xl font-bold">{stats.revenue.toLocaleString()} ₽</div>
              <p className="text-xs text-muted-foreground mt-1">+8% за месяц</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">Активных объявлений</div>
                <Icon name="Package" size={20} className="text-primary" />
              </div>
              <div className="text-3xl font-bold">{stats.activeOffers}</div>
              <p className="text-xs text-muted-foreground mt-1">из 3 всего</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">Рейтинг</div>
                <Icon name="Star" size={20} className="fill-yellow-400 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold">{stats.rating}</div>
              <p className="text-xs text-muted-foreground mt-1">На основе 23 отзывов</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-2xl grid-cols-3 mb-8">
            <TabsTrigger value="offers">Мои объявления</TabsTrigger>
            <TabsTrigger value="sales">Продажи</TabsTrigger>
            <TabsTrigger value="create">Создать объявление</TabsTrigger>
          </TabsList>

          <TabsContent value="offers">
            <div className="space-y-4">
              {myOffers.map((offer) => (
                <Card key={offer.id} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant={offer.status === 'active' ? 'default' : 'secondary'}>
                            {offer.status === 'active' ? 'Активно' : 'На паузе'}
                          </Badge>
                          <Badge variant="outline">{offer.game}</Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Icon name="Eye" size={16} />
                            <span>{offer.views} просмотров</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="ShoppingCart" size={16} />
                            <span>{offer.sales} продаж</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary mb-4">{offer.price} ₽</div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Icon name="Edit" size={16} className="mr-2" />
                            Редактировать
                          </Button>
                          <Button variant="outline" size="sm">
                            {offer.status === 'active' ? (
                              <>
                                <Icon name="Pause" size={16} className="mr-2" />
                                Пауза
                              </>
                            ) : (
                              <>
                                <Icon name="Play" size={16} className="mr-2" />
                                Активировать
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sales">
            <Card>
              <CardHeader>
                <CardTitle>История продаж</CardTitle>
                <CardDescription>Последние транзакции и их статусы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSales.map((sale) => (
                    <div key={sale.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <div className="font-semibold mb-1">{sale.item}</div>
                        <div className="text-sm text-muted-foreground">
                          Покупатель: {sale.buyer} • {sale.date}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant={sale.status === 'completed' ? 'default' : 'secondary'}>
                          {sale.status === 'completed' ? 'Завершено' : 'В обработке'}
                        </Badge>
                        <div className="text-xl font-bold text-primary">{sale.amount} ₽</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle>Создать новое объявление</CardTitle>
                <CardDescription>Заполните информацию о товаре для продажи</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="game">Игра</Label>
                  <Select>
                    <SelectTrigger id="game">
                      <SelectValue placeholder="Выберите игру" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csgo">CS:GO</SelectItem>
                      <SelectItem value="dota2">Dota 2</SelectItem>
                      <SelectItem value="genshin">Genshin Impact</SelectItem>
                      <SelectItem value="valorant">Valorant</SelectItem>
                      <SelectItem value="lol">League of Legends</SelectItem>
                      <SelectItem value="fortnite">Fortnite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Категория товара</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="account">Аккаунт</SelectItem>
                      <SelectItem value="currency">Внутриигровая валюта</SelectItem>
                      <SelectItem value="items">Предметы</SelectItem>
                      <SelectItem value="boost">Буст рейтинга</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Название объявления</Label>
                  <Input id="title" placeholder="Например: Аккаунт Prime с 2000 часов" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Описание</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Подробно опишите товар, его характеристики и условия передачи..." 
                    rows={5}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="price">Цена (₽)</Label>
                    <Input id="price" type="number" placeholder="1500" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="delivery">Время доставки</Label>
                    <Select>
                      <SelectTrigger id="delivery">
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="instant">Мгновенно</SelectItem>
                        <SelectItem value="5min">5-10 минут</SelectItem>
                        <SelectItem value="1hour">1 час</SelectItem>
                        <SelectItem value="24hours">24 часа</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button className="flex-1 bg-gradient-to-r from-primary to-secondary">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать объявление
                </Button>
                <Button variant="outline">
                  Предпросмотр
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
