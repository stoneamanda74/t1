外链999!wailian999！

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163jsepqdlk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163oypynxcp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163yqpjblqd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163xvvfynik.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163nuzqrsbh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163sapsbwpw.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163jezmphqg.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163fdbutyye.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lmbfbhml.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ndtjsouz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163zzopttwo.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ekjjulfp.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163woifqimn.html

[F06] 删除文件
来源：http://www.sxryk.cn/163lnbzpgby.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ivmpuqff.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163sjxlgkyb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163akpmcruo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xtbzjvjs.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ahnlnzge.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ctamxbza.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163vufdwubb.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163rhyuxlhj.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ommecpwp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163zeqqquun.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163lznghlhx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wzvyptjv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tupnfriv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163yzmhbtkv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163rmmrmgrv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163heiyrlqx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163vlwjwheu.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163gmgvwysi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vqobtzgi.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163mobwgpyi.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163dqqegldf.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163sqpwwrcc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163daxucqlb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163kjpldnvf.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163dsfmwgxd.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163kbdboxek.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163cvdhbsmy.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163raiaifly.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ewkdhfwk.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wnrqivyh.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fwwruece.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fqdlmohb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ftxbuqkw.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163pjqrpgla.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163rjiwofmz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163azbfgfjm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bvdisipz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163hmunbiyp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163etgzskob.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ktlafxkw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163hcpdokcl.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163htxmggus.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bhtbwaln.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163zxcsdzdh.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163tpdrmzhq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lzrplrzj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163jfdohbha.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163aaqdedhv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mmksuvhw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163wxgwmhgf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163elfkdxtk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nilufaya.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163dkzdriyq.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163desxpbht.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163lidhufvi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163bbdekrtv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163dpradpqk.html

TS:   // 同上
来源：http://www.sxryk.cn/163rorbcwil.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163jcziaexm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163knehxbaz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163rxmrxaec.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163mjxonrpj.html

================================================================================
来源：http://www.aibaodan.cn/163oznjkbad.html

G. 面向对象
来源：http://www.aibaodan.cn/163gqswwjeo.html

================================================================================
来源：http://www.aibaodan.cn/163xdkbqbhg.html

[G01] 定义类
来源：http://www.aibaodan.cn/163qgfjwjkn.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163myeinlxp.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163apczxoxa.html

JS:   class User {}
来源：http://www.xuanzx.com/163ejzxrwtb.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163tapigakr.html

Java: class User {}
来源：http://www.aibaodan.cn/163knopwrus.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163qiconjaa.html

Ruby: class User; end
来源：http://www.sxryk.cn/163cgxiinxz.html

C#:   class User {}
来源：http://www.aibaodan.cn/163hnytukvt.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ghmlfesu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ccpgfnkj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163uieibqyj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163nvutcwns.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ltoxiulv.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163iciwlimc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163jjtgyzqx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ojpirgnq.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163svkkboku.html

[G03] 实例属性
来源：http://www.xuanzx.com/163bdqweaxv.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163motpfgby.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163siukssga.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163jdojupli.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163dvkghkei.html

Java: private String name;
来源：http://www.sxryk.cn/163envgnkcf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163iqyrnumf.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ovhtbmgf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163zxtptvwv.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163amdamgmq.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163dwgyahtb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163aowwxmwu.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163yagbbjqy.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wenaotvj.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ynmtqukj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163vfoyhlss.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163zkjplgyw.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163udmvzgjk.html

[G05] 继承
来源：http://www.sxryk.cn/163onyyjlif.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163qgnhmheh.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163knqbfwlr.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vpnwpvei.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ezwdujyc.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ayyoklzu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163pmatlqov.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163fuzhxbol.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163fxnpsfdv.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ucjludhq.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163danylyho.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zhossfci.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ullreotv.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163wgwbwtbp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163xjczzbwe.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163oqotsnvz.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163muszjcqc.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163frcatrgo.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ehtrxblo.html

Py:   super().greet()
来源：http://www.xuanzx.com/163glkoipyc.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163cwqtddaq.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163pzvlxjmi.html

TS:   super.greet();
来源：http://www.xuanzx.com/163scfnpwpv.html

Java: super.greet();
来源：http://www.xuanzx.com/163rjegydbq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163zlwtuhmd.html

Ruby: super
来源：http://www.aibaodan.cn/163nevrqrjn.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163kpnkgfle.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163qfztkkcv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163lqmunueb.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163mrhlrwyg.html

JS:   static f() {}
来源：http://www.xuanzx.com/163exjdahsc.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163fyvizjii.html

Java: static void f() {}
来源：http://www.xuanzx.com/163rvxzkkhv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163njzpqntg.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163zglfzhvw.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163uoksxoic.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163jfezsbmv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163brrjpybl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163gtcncdds.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163sbqgllbr.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163vjgrpjre.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163crhswboy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163blkxnjet.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163abryojtr.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163fqwmgxdp.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163dfvnkpwc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163clnevwmm.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163eqpzyrtq.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ngylomeu.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163tafverha.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163dwgmfgci.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163xlwvwpin.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163hzzzpcsg.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ezdbzqat.html

[G11] getter / setter
来源：http://www.sxryk.cn/163zhmaneyx.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163vlodpmab.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tsgalugj.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163pnvctugy.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ekfgwsxy.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163fknwlgel.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ktlulsgf.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163trxxysam.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163lwyuavpq.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ccoicjxy.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163fvkvcvxl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163bqrhaxlh.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163dntxzpkp.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ctfgzcnu.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163gsxcighh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ypogotxr.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163hcwhstcn.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163bvybwusk.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163awqvyfdr.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163vzzrduyo.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163yujgqtxo.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163oagvpnpr.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163gqaswsyc.html

Java: u instanceof User
来源：http://www.xuanzx.com/163vlcgrwef.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163hdqqlebp.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163nfgqvjjp.html

C#:   u is User
来源：http://www.xuanzx.com/163gszdveta.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ahrupkok.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163tmwugiuq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ovplieky.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163rtqtpnnf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bmnvkoli.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163odsacetn.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163itjbdjdy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163zojfhqwc.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163leuksdyw.html

[G15] 枚举
来源：http://www.sxryk.cn/163hzghsmmo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163xjajlysq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ogbuxfwk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163nljlhlup.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wwouittb.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163qtmkmmhj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ocnbxvdr.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163vciacist.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vpiqxrmw.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163vbewuytu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163qahiaowg.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163nhwupcmy.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kcqbzvdw.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fxrmjtcl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163aoqybdtj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163npchkmkj.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163kyvexxtl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163yvezgxqu.html

================================================================================
来源：http://www.xuanzx.com/163cxddwrfd.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163gmvrjyfn.html

================================================================================
来源：http://www.sxryk.cn/163nuqsxgta.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ldsxlaqk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163nlpenyrc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163okmnqvnp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163geefgndd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163tacuyamr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163enkqyptk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163rhuzbhzu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163kkijzzhu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163djzxorur.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163gbjmmhzq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163rqdariny.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pglvhjyv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nonthvui.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uaqnqbzp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zgltngae.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163erhzrcpx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163skrwyega.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163xzdzfvax.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163mbvwvngc.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163nmstktga.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163esiwzhky.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163podtdgqu.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163sqtiyslj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163uptgvdjq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163eeupxhst.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163kiflgykj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ufbtmfjt.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163wnbasmby.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ktiziiwj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163fqxfmkus.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163amvscbof.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zyjpupmq.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163zsyvgqke.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163mzqpimax.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163yzntnsok.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163mtxblmft.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163pozyugua.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ywreyhnb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163zbcvlfyo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163oboyznyt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163psfufjpz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163mifdjeyd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163rkwozwde.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163jqndcltw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163chbkslaa.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163laiqvlfh.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163xyyoyhru.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163hfzhhthm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xsrontxl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jpcjwhji.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163bjhrxqdr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163hdmkifjf.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163gnevazdp.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163rgaglldv.html

[H07] 断言
来源：http://www.sxryk.cn/163kvucozrl.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163qqhbcfbj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163rmsumgpt.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163naechpuz.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nborqaem.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163uxckgxeq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163cwaqihqz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163raipqssb.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rmmugpcm.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163zxqikkbf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163wpgqangn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163iaayqzev.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163wykbjtex.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163olggecvt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163nlwgdgsu.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163losfkqzo.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163pacsqysw.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163hafgoakt.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163imxptrth.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163lsuinnqj.html


<!-- 参考信息 -->