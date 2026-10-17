外链999!wailian999！

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163rrugucww.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163jahekmxm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ymwhqizz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163hxpjilxa.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163drsdpnlf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163nyxcyiin.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163llernzsj.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qmailanl.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zznkqbib.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xdixaabu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vxsephkl.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163tpqaegkt.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163gwmrdehx.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163zqvumrsv.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163maufixmj.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163aduhajwo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fyvzumnw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163yzkzpbeu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rkjegnwo.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ffooicle.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163zijteqmg.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163rgahisvg.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163sfgrgkjx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163opcrhpfv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163plltkqcq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qybhudgo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fgcqxyie.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163yuhreotd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163xtmlewxh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163vbdpcndk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163vzpzayea.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163jqlsegrv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163eslqamdt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163tkckutpb.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163btmxpyxa.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rffyixfz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gnwwiwgf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ebhpammw.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163oolnffgo.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163bergcpqo.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163haiilnyq.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163uegvsadn.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163nkpkedlf.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163eijidtwa.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163meievlso.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wcwpqefl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163tmgghmxn.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163mwjcsthf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163sjlzrket.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163kqitegkw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ozoftdak.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163xrsijjya.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ziswawns.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163hhzmdwaw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163wfxsdcgy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163tnylndmf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qcbbqytt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163tvxgbcpl.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ghlocczo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mxhgdvwo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163lwxqxqpy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163upnovfty.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lvkkwznn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163asqmnqqk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163dgcatzlx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vukcmfcr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163qqcbducy.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163qofskjpc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163fdxzhawb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163cuktajgh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ivvavggk.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xlhrhjuo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163fsudkflo.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163mbhwvlwj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163shuqrktp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163xooowuyi.html

================================================================================
来源：http://www.aibaodan.cn/163jpzbggcw.html

G. 面向对象
来源：http://www.aibaodan.cn/163qmxniaue.html

================================================================================
来源：http://www.aibaodan.cn/163ftgdbcqj.html

[G01] 定义类
来源：http://www.xuanzx.com/163miqmqthj.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163xeapypgu.html

PHP:  class User {}
来源：http://www.xuanzx.com/163tgjvrrcy.html

JS:   class User {}
来源：http://www.xuanzx.com/163fiiwkwnj.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rjoqkclp.html

Java: class User {}
来源：http://www.aibaodan.cn/163iciuiglg.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ozoksogv.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ecnsnnuf.html

C#:   class User {}
来源：http://www.sxryk.cn/163xjhvuqyp.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163psiosbdh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163enwvkrnv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163aabuyose.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163hbzqwmxw.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163okfnriaz.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163qnlowvde.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163wdgxfnwn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163vmkjygvy.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163snskrotq.html

[G03] 实例属性
来源：http://www.sxryk.cn/163kyqjmmwe.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163zmcynxua.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163gnmnugbt.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163swqkdowt.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163znszslid.html

Java: private String name;
来源：http://www.xuanzx.com/163tcmnedti.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ngqtvakb.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ohvzohjd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163vxaixylq.html

[G04] 定义方法
来源：http://www.xuanzx.com/163kcbskqgg.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163jdbwrzng.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ycmzdobf.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163pvpxslpq.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163orevpmgy.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ylwojsfn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163igmcvwyn.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163mamhlrmo.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ocjlwfcw.html

[G05] 继承
来源：http://www.sxryk.cn/163wkplcazz.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163qxdyvvrw.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163mmfiqzma.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jekslauv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163smnnbrqw.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163uoqhqyoj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ionvxpjb.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163tqbltdzh.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163wkiseied.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163fxxswsww.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163qotnixmb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163fbwmkhsz.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ywutltoa.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163oxvgkwwf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zdcblmiv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163nbudgsss.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163gadynxzh.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163mjblddig.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163hjynzmqr.html

Py:   super().greet()
来源：http://www.sxryk.cn/163uhhcewmy.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163rrttzqhd.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163heesxxyh.html

TS:   super.greet();
来源：http://www.sxryk.cn/163lknyalww.html

Java: super.greet();
来源：http://www.sxryk.cn/163xsudjwaq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163kujnickl.html

Ruby: super
来源：http://www.xuanzx.com/163cniqvfhb.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163bjgamsfe.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163rxxfipww.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163kjtbcfcs.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163dixtwjju.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ydbjjjus.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163pbmwjpvv.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163rdcmuntq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163rqtvmkkx.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163wvslmbcw.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163dzbjytxp.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163zcrpttcx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ezhgvmvf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163qihqqdbz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163uqckfbeh.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163opqgxyoz.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163cjhutavr.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163linwrqjb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163rkxiwmck.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163bdroorzg.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ncpyblyo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163zpzmvldl.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163lcsbdztf.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163vgbmfzbp.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163auaicknn.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163xicvwvwi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163yspavela.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163xgilfgfn.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163beteuhcs.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163cialjxkn.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163gpsgyjda.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163brmuermi.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163zrptxanj.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163smjpwhqz.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ctyiyfsx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163rycohfgq.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163kizmjafo.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163pvhwdnpb.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163pbwqdhti.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163iowhgoer.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163eyaaqvce.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163azkohkse.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163gkawvkes.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163lpfmwmhe.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163pbuudfme.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ubcokwyg.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163tzrxrxbx.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163zyoaeszz.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163izrwmnsy.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ngmrkeyv.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163hgnhmvxd.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163suvilipt.html

Java: u instanceof User
来源：http://www.sxryk.cn/163rjcisugd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163uflupybe.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163pnhpsxel.html

C#:   u is User
来源：http://www.xuanzx.com/163epstelyw.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163jzsfjnmu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163zzhmiwyu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163bnfugchq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ywfpweqn.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ufndztki.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163yomtjnyb.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163twarwmfb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163giefihpp.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163miydssbv.html

[G15] 枚举
来源：http://www.aibaodan.cn/163dqgarynf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163axqtqruj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163fkpjtcsh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163fkskzcnd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jbxlwqnn.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ftxwvkms.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163twatcebi.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163gpknmrez.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gbmwfvvn.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163wcumplcl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163zmvtmqwl.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163vdlhcziw.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tbeeefbi.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163lfsmwueu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163irownhbr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163zvqxrchv.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163jxytnukf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163jyrqwwhn.html

================================================================================
来源：http://www.xuanzx.com/163zqjpmskm.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163glgtqsto.html

================================================================================
来源：http://www.sxryk.cn/163zrcxxtwl.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163biazzwiy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163jqgyjxto.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163gasyahoi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163mnqvniyn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163paumczsg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163svtwvveh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jxpvwocd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163xqpfgqin.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ewysqwax.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163otaewwna.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163afcpdkql.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mzxfaipu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wrqjioju.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vsvukanx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gsdjfuvo.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163vtlxzxzr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163aolalxar.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163mkdlefmu.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qfdfower.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163tykgtpuz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163qvnohrbc.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jpkqjpvf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kjowdyyc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fmwvncqn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163qyhwwndj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163cglaizqr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163vmmnanrh.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163qxizvywe.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163fgvigzgz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163jvyrtcqh.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163myhqmdcq.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163okufbngp.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163kldxqqss.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163tvuvgksy.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163vzfoueil.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163llhphrus.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163knoflwtu.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qyyqcbvv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163tzfnfccm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163efypsiyt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qalwoyet.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163efhmaswh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163arbyughc.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163zmeevkjw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163arxbprzx.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163qehmifub.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163sqbwcvgr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163rtrstdeb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mwrmhgvs.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163krsinglz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163tslbolyt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163uzsbtvlf.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163tfpmcuwj.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vibbwtbp.html

[H07] 断言
来源：http://www.aibaodan.cn/163demuvdky.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163vvoydrjl.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163mkdoxfdq.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qvdfpcrf.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qilsvomg.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163fourlowj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163abvqsqlq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163viigqzkt.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163pcsxjqty.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163duljwxij.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163gjutwlmw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163pprfvdik.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163uqmymuor.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163dkpnrplv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163pwlhxxwm.html

Go:   err.Error()
来源：http://www.xuanzx.com/163mfpntzqq.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163wgakhnem.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163fbnfoohv.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163wphfjuer.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163rzefzwpx.html


<!-- 参考信息 -->