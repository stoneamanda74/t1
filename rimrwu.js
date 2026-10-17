外链999!wailian999！

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163sszrugcz.html

[F06] 删除文件
来源：http://www.xuanzx.com/163avvalbvi.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163hmyazidh.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163kdfsqqbk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pvqrrelh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ifwwtrhf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rqkqndkw.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163zzwnnquy.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163hooaczce.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ydvsxltf.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163dypjudme.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163vtmbdwpg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163goskwyoe.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163aqjlahfc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fzsllcfj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163uklyhgsm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163gzssauzx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163posmgodu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163snuwiioi.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163fjjacvia.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163mphufmbw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163yrapqzqh.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rujzefkr.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ouuzbhbn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cnalbiem.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163tgepokwz.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163etxqbzxh.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163kfdpqlvf.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163gvvkhbiu.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163inyuukcp.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163treezbug.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ddbmirou.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gmycmcyk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163juvjpkzc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163gartgjce.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163jaaygnax.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163epdabech.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163atvgeohh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qlrgxlsv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ojywifss.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xvlompqe.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163zheqtrqg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163qkctbntw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163tbrmmmor.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mdmakweg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163jgmqbxus.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163rmwgusys.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uaekabou.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163sqoglvnx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163npxbbedg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ylqzhhps.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163oyipnegk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163xayautdp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bjnmczdi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163gnzozwaz.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163rwsfjxjv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163redfozeh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163jrbpstxv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163feguqvgu.html

TS:   // 同上
来源：http://www.sxryk.cn/163hodjwwbt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ddoxwarn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163twneqock.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163pjbhqyfy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163xdugpemx.html

================================================================================
来源：http://www.xuanzx.com/163szaytdpe.html

G. 面向对象
来源：http://www.xuanzx.com/163fwuteinx.html

================================================================================
来源：http://www.sxryk.cn/163lmiljvld.html

[G01] 定义类
来源：http://www.aibaodan.cn/163wxlggmzb.html

Py:   class User: pass
来源：http://www.xuanzx.com/163xyraovki.html

PHP:  class User {}
来源：http://www.sxryk.cn/163lsirywqs.html

JS:   class User {}
来源：http://www.xuanzx.com/163izmukwfj.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163irvxsopl.html

Java: class User {}
来源：http://www.aibaodan.cn/163yeggclma.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163bflqxuyg.html

Ruby: class User; end
来源：http://www.xuanzx.com/163zrmgnzeb.html

C#:   class User {}
来源：http://www.aibaodan.cn/163dpvhsrbg.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163jstxnduu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163mewtyail.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ttkighwr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163bmkzncxb.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163richxzzq.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163impoaxvd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ufirqtxz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163epxseyhi.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163nykabidb.html

[G03] 实例属性
来源：http://www.sxryk.cn/163wvunymiw.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163epuqqboo.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163hjxnyqxh.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163hszavltf.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163jhtvdolz.html

Java: private String name;
来源：http://www.sxryk.cn/163kjwyqxdg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163twgixbgk.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ymioegce.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ybblupta.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vtcghtga.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ydgnwfxl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163eyyuoxqr.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163btympsfh.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ncridlnd.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163tqwvknld.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163kgjxevqv.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ldxcasoj.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ofuzpumh.html

[G05] 继承
来源：http://www.aibaodan.cn/163xbcvaghe.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163aeilrxsu.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163usahcofp.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163esilaxjk.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nafxsakp.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163psybwkim.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163rrsmdzzv.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163qajcxvwe.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ctsufito.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163bddcxauc.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163exmlwots.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163smgkvfaf.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wohquogq.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163erpbucib.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163irqhsivv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163fmodvjle.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163acnjknqt.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163talwqmmj.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163yneybyyc.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163trkgabrx.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vttbaupf.html

JS:   super.greet();
来源：http://www.xuanzx.com/163rhlcqznz.html

TS:   super.greet();
来源：http://www.sxryk.cn/163vboiexzb.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ioawdjpe.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163pmmuiiwv.html

Ruby: super
来源：http://www.aibaodan.cn/163eeiicekw.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163pnlnorcn.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163mpkfdrow.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163vcalqiok.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163wfwtoqiq.html

JS:   static f() {}
来源：http://www.sxryk.cn/163zzawvvoz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163xydrhyzc.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163qcdmwsqz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163asmkohyn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163mzrwpsuk.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rtkbbpyh.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163fdukwhrb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163gmgrnqao.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xhnuuklp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163lrjbifmg.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163exsbmmur.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163jzbmpeng.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ngxmsswj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163iwoezecy.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163bnipglli.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163pqzhsaom.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ievommrj.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163twvstnfj.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163yryjnrwy.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ddjnfvqo.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163durddwjh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163vpivxpuz.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163tatkclsd.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163bcfcjzze.html

[G11] getter / setter
来源：http://www.sxryk.cn/163mbuedezx.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163pezoowry.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mrbygfif.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wcvwtixx.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163tnwfduzf.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163xatebrgd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163rtffzqfn.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163cxguzydx.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163lkzesubf.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163mxudcecg.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163uiadoeal.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163cnxqhvvb.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163hnbrxpaj.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163njlchdba.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163xxmvcubg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ousisddl.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163htrczdxi.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163bizavimn.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163szyhgvtx.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163lihtppgs.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tbchtvgq.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163rnpqaisx.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163pfxousjh.html

Java: u instanceof User
来源：http://www.xuanzx.com/163lpahfsiq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163gdpcdqvy.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163rwwidtlx.html

C#:   u is User
来源：http://www.sxryk.cn/163rtnuozfg.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163cgixdelo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163pcjzulvh.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163iskqlicz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163nrhejjmu.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bomaqkwh.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163osxaspav.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163cvgfpxka.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163dohtkwmq.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ceitqqgq.html

[G15] 枚举
来源：http://www.aibaodan.cn/163jbkxbhsw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ehsgxskf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163loxanlxp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163pdvtyxuv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163vxtkyohl.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163dksvvohz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163utnjndvr.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163hiyvzrux.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163kkdrkkkw.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163uomsxnpt.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163hhsqxifm.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163wetnrock.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163upvccksc.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wydsgfhw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163fcvkwypn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163jwoeaiju.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163hylhkxet.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163xsavoeue.html

================================================================================
来源：http://www.sxryk.cn/163ituhnayh.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ddssisba.html

================================================================================
来源：http://www.sxryk.cn/163cnhkqfty.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163lxykmyaw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163oljsmnld.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163flzjfmal.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qxhzaeze.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163hirmeykt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163yklbrdpf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163tkgmdaze.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163nupipcha.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ulxjobpv.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163jqjoslkq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163rnlnuawr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163iycsvajx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nomdexdk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dasrnnel.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kroidaci.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163iqvblyud.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163urgvztja.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163kwcfcftp.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hgstssfn.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163jnzfiyqm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163wfobyxwq.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wwcsknpl.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fznqsoqa.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163oycyuopm.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163vrgbpojg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163mnbirbzi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bmfluqds.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163pbofdoxx.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163qckdpfkf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163xtrcprug.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163oxrcvbgd.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163mpgiwobv.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163iucavcnp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163yuthxipa.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163fnlryexi.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163qsfhasnz.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163dmumhfpy.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163smyeosdx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163mpyuvrgy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wakxrqbv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163hipngdly.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163vkzrtomh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163rqquflac.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163aplexisp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ltewdrpt.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163lytsivic.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163vugmpsmi.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163xhhdmban.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163twospide.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vfamvfvr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163mbtjeufa.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163jodqkyeg.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163vszfzccs.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163pjsspjgn.html

[H07] 断言
来源：http://www.xuanzx.com/163sciszllh.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163alhwtiis.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163aetcncfr.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wcqxfuab.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163skzxxser.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163lqqqqxkf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163pcecalzw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163qeyjnbed.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163sdrpwfva.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163vjpdbpbd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163owokqmpy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163qowtshqa.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163xefrhsla.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163pizmfqkz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163mgskxjyf.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163rjkoyarq.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qkbuwyhb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163zyrhmfoi.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ntmahvsk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163pqehbyuw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163zvlrxfct.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163getyuxmh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163xxkclmwq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163klezaelh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163vmwnfjtp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163nvvsswkr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163qvtskmge.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163kkwdtkiw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163owobljag.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163efyredkc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nklxzkik.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163iuomqjpj.html


<!-- 参考信息 -->