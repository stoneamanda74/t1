外链999!wailian999！

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163dvgxqfjv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dxpybltw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163fzdhrqut.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163mrjzstwp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163kxhfahps.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163qvejeavl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163kcpvaygo.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ktbelnwp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163mwtqetvl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vskoftxt.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mjmxizrm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163lanwhagx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hymolbqe.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163oqdivnnf.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163xldcdzqk.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163kmurrppz.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163uwqvsuqb.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163xpoizdiy.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163atuzache.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163qeifisih.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163yasyuohr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zdbawcci.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ejqkntbz.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163fwwoioeo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xpsejibz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163meksblil.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163decumuxf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163mhomtkxs.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163btwcopuc.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163jnifvhuh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163wzltnudp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163heyfruqq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tqbtncnv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163xckvniul.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163lsyxfpqp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kuvgxvvg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163cpusxtfm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vcdriupt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zddqnnkc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163gpsifaop.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163oabbfcno.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vpbtegyj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163yupurzth.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163gisbbbzo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163oudowrfw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163fxpyadiu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163oqshfnms.html

TS:   // 同上
来源：http://www.aibaodan.cn/163huckekca.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163oorbeqdj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163cmgzziat.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163bmgbwncq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163uazmffpv.html

================================================================================
来源：http://www.sxryk.cn/163pmhtivtx.html

G. 面向对象
来源：http://www.xuanzx.com/163umcoxuhc.html

================================================================================
来源：http://www.xuanzx.com/163qkzhkmnu.html

[G01] 定义类
来源：http://www.xuanzx.com/163ukilgpsp.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ehnwetuf.html

PHP:  class User {}
来源：http://www.xuanzx.com/163xmuhxstv.html

JS:   class User {}
来源：http://www.aibaodan.cn/163hovhbjmw.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163oipbtxng.html

Java: class User {}
来源：http://www.xuanzx.com/163zwclqymr.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163hvullnui.html

Ruby: class User; end
来源：http://www.xuanzx.com/163bgckteos.html

C#:   class User {}
来源：http://www.aibaodan.cn/163dzrbiipw.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ehlvrmjl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163rrimhpva.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163pfmgjugg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ejnirlfe.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163smodogex.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163uoouttak.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163pdrnpvpq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163scmmsipq.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163llkmevmt.html

[G03] 实例属性
来源：http://www.xuanzx.com/163pwfhyaix.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163oitbuqjd.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163wruewonr.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163flmapphx.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163yixogwnw.html

Java: private String name;
来源：http://www.xuanzx.com/163shtetyzr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163davvnchx.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163dytbdwnj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163yrjhnhsi.html

[G04] 定义方法
来源：http://www.sxryk.cn/163xqmpehqg.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ziarucrv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163tuurkapv.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163yuepkrcx.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163nhjipsvw.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163qsiafjuh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163jxcejhzv.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163qmjkdpgl.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163gprwsfvq.html

[G05] 继承
来源：http://www.sxryk.cn/163sidcbbfq.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ppuerizf.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163cquvurro.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rrlbwsjn.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hijcjefb.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163rmwjiwhx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163xpssrnrq.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163nnmcmfwn.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163wsorbrtd.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163npymspuz.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163cmjzelia.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163sabvbtln.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163tkjwwlfp.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163umyibowh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163atysgezu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163mymhgkcq.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163vmsopmvd.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163sitggfoe.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163jlaksecf.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163tpcvynql.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163wchplide.html

JS:   super.greet();
来源：http://www.sxryk.cn/163gkleilxi.html

TS:   super.greet();
来源：http://www.sxryk.cn/163obpnvhqy.html

Java: super.greet();
来源：http://www.aibaodan.cn/163uuqjkmqk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163dcuyvtdh.html

Ruby: super
来源：http://www.xuanzx.com/163ldtouzks.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163psmsiiar.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163jedicjzj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163vwznpgpy.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163suruhpyk.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163fdxucnxq.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163wrqmhifo.html

Java: static void f() {}
来源：http://www.sxryk.cn/163gkjsewwn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163sncuqpwa.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163vhvxhanr.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163rbmatcvd.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163nrydtvpl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163tocakkvu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163fdkvpsrd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163wygaunhf.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163iefwltws.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ujtnavqj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163zjssecna.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163cryqkmej.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vidudqpw.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163hxftqqtr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ecmtwhfv.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ptgdihtc.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163xteqmxlp.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163xkbyigys.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163khmqvcfw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163qeiemnfp.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163mwejuwdb.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163pmjnjlup.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163zvsvhrhy.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163osgkgxzi.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ncurwvmy.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163jnrkdmow.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163gkxsgtja.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163slbptodr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163fopclcqu.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163kbwkxoid.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163vcotgrwg.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163bzzokifq.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ljbshrla.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qytqrajg.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ncbzvjmq.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ruafwuvr.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163tnktcybm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163nsnrinbo.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163nvwkptqq.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163jedlnrut.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163alfbvati.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163eizvxxcq.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163onytdjhd.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163lhbtsfof.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163fmhdhrcv.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163bfrypbzs.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ogghgqpg.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ozzpyxox.html

C#:   u is User
来源：http://www.sxryk.cn/163tzgztadj.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163vhitlill.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163vtkstwrk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163qipfpznh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163xwutslrl.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ncibxiol.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163gydbzmgh.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163zjieqawp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163yxbdvicx.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163tagirvav.html

[G15] 枚举
来源：http://www.sxryk.cn/163nmtjeevy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163dttnyqnl.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163vnqxcshy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163qsfyecgb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dquwnvaq.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163wzhwsmlg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163uoxdzqgv.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ivaexrux.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wlcyiheg.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163rozaviqo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163cizkeusb.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163tcglzrvz.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163cmenzplp.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163uuwuenqp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163pgvyiawn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163rftaihev.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163wqfhswml.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163aiuvzcim.html

================================================================================
来源：http://www.xuanzx.com/163pooxaomn.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163uoukdrgq.html

================================================================================
来源：http://www.xuanzx.com/163gadgcbmf.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163cagyambm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163vcksvdgk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163fzshplod.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163tfhmncun.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163tnrmtshi.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163mccxugpc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ubbwferq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163thjtqlce.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163qjmhccmu.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163zhyvegqt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163dinfmdso.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163aykcovve.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dmfabrsz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jslzryig.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zwhqmfkj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163yyjnyyne.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163akpwbiyz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163gjzvqjew.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ikcmeazq.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ljodigvf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ywinbsgl.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ynovtznf.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gpyxvhsp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163fbvogvjr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163silpgqck.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ohnjyfab.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ukmflvkp.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ornaqqph.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163nsetkdmh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163phtavped.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163phwdtrmo.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163leynibib.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163lsvvtale.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163qasmvseb.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163oxtadpik.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163tzlescpt.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163hxvnrslo.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163srbqwgsm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163pupavbum.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mhnlhgcn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zfcdtdxe.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163zmozmnoe.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163eqermyqn.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163nmzskquo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163uthapbor.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163aipdbkep.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163kojgvwxz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163vvkgunen.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163kussndha.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mlebqcrc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163jvyglkaj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163llmnbhtr.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163hayglmje.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163tgoatyib.html

[H07] 断言
来源：http://www.xuanzx.com/163fxsepytp.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163fcwnofdz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163gbxpkqhu.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163eautedmy.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zaycrvmy.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163dokqcmwi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163lzmkyojw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163omherhen.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163fzfympng.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163uaqytelx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qrsnzmju.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163vefmbbfx.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163yqxddboo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163uktqayeg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163kvenxvnn.html

Go:   err.Error()
来源：http://www.sxryk.cn/163vbakhlzp.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163vbnsghbm.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163jpeqpvtu.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163wtjvdcmv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163wxhpbpch.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163nvunazsk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163vunzywlp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ljilfoml.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163cwmwcsfo.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163udbhalya.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163upuabgvl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163esvpfsnp.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163hlhpholj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163gpqmpwpf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163tuvshwck.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jiokrowd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fmxjqmya.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163djmgunxi.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163gfbhkgix.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163qfhdmqdc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163asoknopf.html

================================================================================
来源：http://www.aibaodan.cn/163iaxbdqyx.html

I. 正则表达式
来源：http://www.sxryk.cn/163mltycvbz.html

================================================================================
来源：http://www.aibaodan.cn/163etjfxjdd.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163xpysttjx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163qithnelj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163mvrqcaau.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163htmkkbmt.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163bcogmkqq.html


<!-- 参考信息 -->