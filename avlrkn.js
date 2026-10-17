外链999!wailian999！

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163kfuzqtlq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163eatejngx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163nadjgnyb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163qmduvvtw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163fpctuzss.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163nusucpba.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163rehdfsob.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jlygirlp.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dkssdbaz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lwnzzbjj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163piebasjg.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163oqawhcxw.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ryyjxewn.html

[F06] 删除文件
来源：http://www.xuanzx.com/163luqprewq.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163mhugbzlr.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163qcrfjiap.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163brdhjljv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fraghovw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wycxcfom.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163cmlqfnoq.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163xabfrtgw.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163mvzbylkl.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163nziytxew.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163yyltxwkm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163hotqaqwp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163yefsxlak.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tevukrpi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163gqiudkdt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163fgftkqzn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163bghkhqzw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ejdlijct.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163rrtarkba.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ffsmzqqq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163fimhncqg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163txlsebqq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bcxzkrih.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163srbvrwrx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163oenotjys.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163nydqgwuu.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163hfpnbabu.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163daasxrro.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163nxmhzowt.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ghzhdrbl.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wzziuerq.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mmzqkvct.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mubrpdbw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163xnbljokm.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163yifmnlcv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ivwrdohl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163timutaqt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qukwcqpu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163igjtgcon.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mzabfxwy.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163pmcpqzju.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163roezngbx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163mahucuzq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nfdbhdrf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163xiyefalw.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163osapgagx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163iijtcdwq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163mtyokyxe.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163toqhuqyk.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mdtceozp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163nfghuycx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163paasbnhs.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cxlfhxcz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163klpkjyic.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163jbbxhqol.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163oskpfrpb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163kvgiqiiq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163wwcwukjv.html

TS:   // 同上
来源：http://www.sxryk.cn/163vgpeavzn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163tfvpyiov.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163uwegvvhj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163rsbdyhel.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163nwhhywwa.html

================================================================================
来源：http://www.xuanzx.com/163bgbzsgrw.html

G. 面向对象
来源：http://www.xuanzx.com/163cvblsqdl.html

================================================================================
来源：http://www.xuanzx.com/163xmsbsunz.html

[G01] 定义类
来源：http://www.xuanzx.com/163qzlzpksh.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163rwskwdci.html

PHP:  class User {}
来源：http://www.sxryk.cn/163mwajsxrd.html

JS:   class User {}
来源：http://www.aibaodan.cn/163nyfoonal.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163yvnqxexd.html

Java: class User {}
来源：http://www.xuanzx.com/163weyeryst.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ldvfqyaj.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163bayjvpen.html

C#:   class User {}
来源：http://www.sxryk.cn/163vxoioayz.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163sokkecqe.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ttbduehq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163uuogsgss.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163olhfirmw.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163pxostlje.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163erwawomy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163mvefpshh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ndxqdqcv.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163gjdlxiud.html

[G03] 实例属性
来源：http://www.sxryk.cn/163vjpgwpmt.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163drwrxxmg.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kothharx.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163gerzixtu.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163zciavsjo.html

Java: private String name;
来源：http://www.aibaodan.cn/163vtwluanv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163peftnxwl.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163hyzsaimi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163wfrptnmb.html

[G04] 定义方法
来源：http://www.sxryk.cn/163wcgvqjns.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163xmznhyle.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163djpclhrh.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163kkjputnq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163cglqhcgb.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163mgvtnjzw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163fdpdclff.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163nbvhkjuc.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163mvaacjew.html

[G05] 继承
来源：http://www.xuanzx.com/163zhjrubij.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163txmgysgw.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163uzysqucb.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163nnrorypg.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163iulpoqqo.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163bsmbtojq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163rziydawb.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163nrzksvls.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163duxqxeco.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163axjmsygl.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163gmlesfcf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fvqkqffk.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163hwngbiwc.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ujxmnqoq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163isrultgs.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163kxpneeqe.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163qltikauf.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163gcnqekko.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163gpkpynzm.html

Py:   super().greet()
来源：http://www.sxryk.cn/163dahrypur.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163jujrjnph.html

JS:   super.greet();
来源：http://www.xuanzx.com/163sfpwhzru.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163wdxhsitp.html

Java: super.greet();
来源：http://www.sxryk.cn/163osvvrjkz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163wwnojntk.html

Ruby: super
来源：http://www.aibaodan.cn/163hyjabwot.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163sirxdhlz.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ffbdgcwx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163dfegtbur.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163xvlmrkvj.html

JS:   static f() {}
来源：http://www.xuanzx.com/163hntfilce.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163mrthhjuq.html

Java: static void f() {}
来源：http://www.xuanzx.com/163sivjrcmb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163lrpyllla.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163qvkysltn.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163xkyaaakq.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163diyynuoa.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163evhimtyy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ayrlfzcw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163wzxpwpoe.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163etrnfbhj.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163zygazitz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163jiuommvu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163qzmqrzix.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163yodalmwx.html

[G10] 访问控制
来源：http://www.sxryk.cn/163foclbcrv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163nsegycrl.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163tmrtpmdu.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163koxfgwty.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163znhkuqji.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163egmmdvtt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ylaeachj.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163clfmoafc.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ppocvkqw.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ijmpkvxw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163vylibbhw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ocjchwpd.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163qvpusaau.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163lwxgbqas.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163mltzmofj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ryxfaffq.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163jkecwmcr.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163eavwtbrn.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163oedftwfv.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163zgicvvnt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fjshwfmp.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163kmbjmlxq.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163thlqfuwq.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163nuaaqvnj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163xjshqivc.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163yylttbwk.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163cycdfoga.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163nilwprkr.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163pnofjyxg.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163savcyiyp.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163erwuuffz.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163zemviqch.html

Java: u instanceof User
来源：http://www.sxryk.cn/163pwgmuwht.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163rmaedkka.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163fyqzxpem.html

C#:   u is User
来源：http://www.aibaodan.cn/163pqnqteul.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ujpqxksq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ejbsouht.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163figdedrw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163niqbtjwi.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163gidsvfme.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163czizrarz.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163asoxstjt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163dzxvfdyg.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163pvzroiiz.html

[G15] 枚举
来源：http://www.sxryk.cn/163ewrlclut.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ibocyaeh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163hzoqsfso.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163kkrraczx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zgehedjx.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163qjqzfeyq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163iifjwkyr.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163uvuihavo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xyauenmz.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163thiwmbpx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163vjjshfsb.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ugbbpjqz.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163akjesovj.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mownjkki.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163poylvktv.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ehgvhoua.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163fuihumfu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163glrvdbvc.html

================================================================================
来源：http://www.xuanzx.com/163mzauvynm.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163zcxojmca.html

================================================================================
来源：http://www.sxryk.cn/163uqycwezm.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163eosnbexo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163njuktggq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163xetglqdl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163plxlgfep.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163baxwvlii.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163vevyudbe.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163txpxgdlq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xxdawtjn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163owybkoce.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163rkwuhaos.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163hbuordzr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163apfsasdq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eucjosym.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eqbymyei.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163enpqyizy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163nsxoqvuq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163utlaexjx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163tvmaluqr.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163qzubcirl.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163pthbcepc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163vacvwjbi.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ozjksius.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163efvgpemx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163aaogetja.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163iqleyhmp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163doszkimt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163pfaakhtc.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163xxwmjugi.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163nhlanubp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163xllgldje.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gjilpvek.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gapkadoe.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163lglnobxk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163lcijzqgt.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ghypewze.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163fscdwiyc.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163glfazjir.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163luozrzgx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ivktkhtl.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163yfkmtyng.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163nhobjjcd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ktphrknw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163kpbblcud.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163jarjrfzs.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163krykdcum.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163dhypuwug.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163heskshlj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163abgjsvdw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xawcnvox.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163slpmkwqs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163vsxwxnrd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163zyvstpev.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163njolaydi.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163gzcaiaur.html

[H07] 断言
来源：http://www.xuanzx.com/163wfcoxknw.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163vxbwplex.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163cllqotne.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pmpvhcsz.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163nbsuzfla.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ioethxxu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163xongbucq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163xukxzqrr.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163nawnjcjj.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ccrufete.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163srqjaylr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163uvlarytt.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163pvkryyry.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163tyebtpmw.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163fzdpccbi.html

Go:   err.Error()
来源：http://www.xuanzx.com/163rlpsdrir.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163lrsdemms.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163wjytswtf.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ddesvwcu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163czlpddzy.html


<!-- 参考信息 -->