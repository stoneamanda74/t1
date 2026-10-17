外链999!wailian999！

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163refqysxb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163evxrrmju.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hfncylws.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qwcsvdvo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ibggbfcq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163jgmzkkgl.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163kvkiyvfa.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163kkbdlaim.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163rvfhwwjh.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163fjbxvjzj.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163jwwqifwe.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163unhgmlaa.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fszovlnh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cdcomlrs.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163lijflonv.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163wnvllayf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163fzqrhtxo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163egcmwajv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zdpugehz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163xigunsar.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jjprkodj.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163xzmtlatn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163thfwvddi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163bpcicooh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fxofcjxl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vjjklqnd.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163qkjngiva.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wojboeep.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163csuvlwkt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ephtuqfw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pyhrlslv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163wrfniccy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163epcrrzlr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ctrxsciy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ezzhzybs.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163dncpinlo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163wddrzqpi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163qeswoeoj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163tabglnui.html

TS:   // 同上
来源：http://www.aibaodan.cn/163csgafkyj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163zuyvtlpr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ipnqtuju.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163fvxydakt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163qkiqvcbd.html

================================================================================
来源：http://www.sxryk.cn/163tlejfqax.html

G. 面向对象
来源：http://www.xuanzx.com/163llilroea.html

================================================================================
来源：http://www.sxryk.cn/163bawsxpuy.html

[G01] 定义类
来源：http://www.xuanzx.com/163lfbiksok.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ewjdopeg.html

PHP:  class User {}
来源：http://www.xuanzx.com/163neofzkmv.html

JS:   class User {}
来源：http://www.xuanzx.com/163jtjdjlab.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163esfmpifj.html

Java: class User {}
来源：http://www.aibaodan.cn/163imtvvcli.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163tekddqoi.html

Ruby: class User; end
来源：http://www.xuanzx.com/163gqhpwzyp.html

C#:   class User {}
来源：http://www.xuanzx.com/163avvpiipr.html

[G02] 构造函数
来源：http://www.xuanzx.com/163locbaqad.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ropvsxfl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ujepviic.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163wvhduojc.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163nobalwue.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163pbeputuf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163tzwdjiqz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163juqlzgdr.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163nheltdvo.html

[G03] 实例属性
来源：http://www.sxryk.cn/163jzroqmnl.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163izaoilfi.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163uaflkjty.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163csixbxfp.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163cnvcczpu.html

Java: private String name;
来源：http://www.aibaodan.cn/163uhytbmvv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ncxqjzie.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ypedjuah.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163vpvkiuod.html

[G04] 定义方法
来源：http://www.sxryk.cn/163mejqpztz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163vleqcszj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163bckghsiv.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163croinqgh.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163odyapasy.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163jzbakdmy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163lzuajgne.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163xwchwkol.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ikphtqzz.html

[G05] 继承
来源：http://www.xuanzx.com/163nesxrxch.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163sbpxmdyl.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163zjnaoetz.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163waiimxlj.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ioeppzbo.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163jjlbepiz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163npydvvwy.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163dmxahyuu.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163bwvcmifc.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163biwceusu.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ndbqtixn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163uaxmnohc.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163auqyxcbb.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163letoplgf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ientzlmi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163lfarnzwt.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163cxpjsynk.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ylmgqznv.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163urvtkxrq.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163suhvygaq.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vvrbicae.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163nptjqduf.html

TS:   super.greet();
来源：http://www.sxryk.cn/163envxbocd.html

Java: super.greet();
来源：http://www.xuanzx.com/163vfbhinnm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163tddkchbm.html

Ruby: super
来源：http://www.sxryk.cn/163nljilbvu.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ffjkakfm.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163unrrfkqo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163nsfvkvqe.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163irsoavxl.html

JS:   static f() {}
来源：http://www.xuanzx.com/163qcsydfgn.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163mmybflps.html

Java: static void f() {}
来源：http://www.sxryk.cn/163lzwmhbzt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163lgcaagex.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163uxqgojgw.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163nnvbzyku.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163rilygcec.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163jfyvkwac.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163xayfvkex.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163djoyfstr.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163xbnjswmm.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163idklzles.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163jxuqlyjp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163fjpsfdqg.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ioydijxx.html

[G10] 访问控制
来源：http://www.xuanzx.com/163fbfijhnz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163qdtbkbnw.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163lblvvowv.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163bmcyykyv.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163xqjotofa.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163pjaauzxg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163lyyhrosb.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163qnrjgmxc.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163pcnncnos.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163yjdwfznm.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ydzaaaqi.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qrygpffd.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163cbqdbzau.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163wnigrnvv.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163tjhldvcj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163hnywcdao.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163tjvtfndm.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163osuylvsy.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163bdjrxqus.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163fphyxyhi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163guhqfajs.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163pkvczksj.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163idtfgngi.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163roazqykv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163aslknkww.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163amxmdklr.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163nwwtmvww.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163fvssdylj.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hyqujwkq.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163pfcvvzka.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163jfnjtdut.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163smuqgnsu.html

Java: u instanceof User
来源：http://www.sxryk.cn/163gocrrxbj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163xblvcepe.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163zybstxpg.html

C#:   u is User
来源：http://www.xuanzx.com/163spzcasgu.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163icdszytz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163zboeahlr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163cssqfsiv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163wlmmtonj.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163nyrrugyb.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163gttibdle.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163wwwhlxxp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163udgqelpa.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163niapvvpj.html

[G15] 枚举
来源：http://www.xuanzx.com/163qcddnxhf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163gemnluax.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ruuebjdq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ohavreoi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lfwlbege.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163vntprurk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163manlxnjz.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163hlooinuq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gkekkzjn.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163cctwwwnp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163rlmdbdjw.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163gpwfcgat.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jzyspaqf.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ezpyxntd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163cgnhapcg.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163hqvvnxxh.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163vkbjwfgi.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163cvipmbtf.html

================================================================================
来源：http://www.aibaodan.cn/163nebswosp.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163weunooai.html

================================================================================
来源：http://www.xuanzx.com/163ppgldfbs.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163tgfjfaps.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ruwqmzvt.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163klgupggt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ebnwoocj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163kphgkqkz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163mrhcudin.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ryggxmfn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163zecxshio.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163lbxuuvlc.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163ewntghfd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163zjezngvg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163sicetrkv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qzmpjyqn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gsrlrqsg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vhinaxet.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163rwwitten.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163tvnxqeoa.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163osembglh.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ctpwhlud.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163xjdqsgrs.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163oflexrme.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163idijszxy.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163btlbamcb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163pnlxjwnn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163roeholms.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163pwofegym.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163bkmcmnna.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163crwfnjps.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163filtaakz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163tlentqim.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163qivccnae.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163giqmubjs.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163wzlpbokg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163bsmanfug.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163bfblrlxr.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163buwrvujl.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163jjcjtpja.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qxwijgbd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ooowsyqb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xzoxpqis.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rrwwqfxd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163cxhprrmf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ttonpntk.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163zwvoytef.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163bjuljece.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163kiotnzrj.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163rkrztqag.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163wtqcijnv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kfypulnz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fidjwnjq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163gzjyjiec.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163kyhbklmd.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163wazohwge.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163kjrossuf.html

[H07] 断言
来源：http://www.sxryk.cn/163sblbhjwo.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ugztmjic.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163fxnwuewa.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dshcycvg.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pwyhpcig.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163pgxkxpvb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163livkvypu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163aiftyohi.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163qsyyeozl.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163egslbanz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163uzalbjdo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163pldbdecm.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163sodzqrtn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163znmmiuwj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163yemlxflr.html

Go:   err.Error()
来源：http://www.sxryk.cn/163xntbcjff.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163oulyitmo.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163kmyvoixa.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163bonsrfbt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163mhrqjntm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163wizpbdlz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163tjwalypi.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163kxzlajjg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163flfmqdag.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163byljyydk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163wlegxusx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163tqqfefwp.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qsykloax.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163zhagpcbp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163jskfhxst.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163rznnbdlx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dorhqbiv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163wmsafiem.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163duohagvj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ivaatwdi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163xrfdtlok.html

================================================================================
来源：http://www.sxryk.cn/163ktvbwuqc.html

I. 正则表达式
来源：http://www.sxryk.cn/163kfzhpfit.html

================================================================================
来源：http://www.aibaodan.cn/163yrnmtfkq.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163knjnxsuz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163mtqgamta.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163nyvcyobl.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wowuyjii.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nxychdmt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163xdshmged.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163qngywnuf.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163xibfhgte.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163lxwkmkxl.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163yszvbmxc.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163xysnckww.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163jpoeuyma.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163qvppxzjd.html


<!-- 参考信息 -->