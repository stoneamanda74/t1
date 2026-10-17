外链999!wailian999！

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163efiwowgx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pxmfqyri.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163mvfdeffv.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163xcoaefnf.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163shtmqtjn.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163azytdwbe.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163gthmfjaf.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163zhrwtxax.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163thegdsyy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163uvtqwndr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163sjqjudsn.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163mbfilfgf.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163pzjekkcd.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163jwhyllvf.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163jxfvdqaa.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163bcntlnnd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163etvaajre.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163mkjqrecc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pqetuctm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163qlqsikuc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163jesrkqzz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163qfoaswmc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ppumvquu.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163khnhqdim.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163fqeoawmk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163askohgdk.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163dajxpaoo.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fgursxdc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zwtfssjf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163nswetzjg.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163mmksfixx.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163bvjrztvk.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163exrwwclw.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163zehegqaq.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163uemnxqtt.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163odionmsx.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vdprscck.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nepoxqes.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163iuebsdzl.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163uqqalyiy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ygsypihj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163dgxtnxyw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gnepwewv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163xqfqwsam.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163coktsmfz.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163wnpalxfk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163snskwsyk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163fgwmgjly.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nnvuycnv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163nbjvcdov.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163mrmpzcim.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jyojrwmi.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ilkuvjoy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xjrzmanz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ssyglges.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163lmegvbzl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163yhlirnrt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163obrtvrve.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163uwaohvgc.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163rqoafdpa.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163gbpztyuk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163hxhfsiwg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163nwwbfbej.html

TS:   // 同上
来源：http://www.xuanzx.com/163wewptlct.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163xkbuoiva.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kkjgirqx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163euqtmhlv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163chfzijyt.html

================================================================================
来源：http://www.sxryk.cn/163oowxsxuq.html

G. 面向对象
来源：http://www.xuanzx.com/163tnhevezm.html

================================================================================
来源：http://www.aibaodan.cn/163wprlmkeb.html

[G01] 定义类
来源：http://www.sxryk.cn/163ltiwvhmq.html

Py:   class User: pass
来源：http://www.sxryk.cn/163spfilkcg.html

PHP:  class User {}
来源：http://www.xuanzx.com/163sumtlkqm.html

JS:   class User {}
来源：http://www.sxryk.cn/163cjcthkvs.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163kmjybayq.html

Java: class User {}
来源：http://www.xuanzx.com/163pltsblqp.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163lnqbdaae.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ubmgefjh.html

C#:   class User {}
来源：http://www.xuanzx.com/163jeaozetl.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ltpmulzo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163wcdskxhd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163bddceonl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163zmhfcuzh.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163cueaxiyj.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163cybyzfnp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163phaxwnii.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163tattsnea.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163nsajepmf.html

[G03] 实例属性
来源：http://www.sxryk.cn/163uwrprwos.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163qsjkbvft.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163gddhdmge.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163lmpoylkg.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ztmzkuza.html

Java: private String name;
来源：http://www.aibaodan.cn/163gepqtxzj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163xutfsyif.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163svdxvxdd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163fkgnomsm.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163evgglllk.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163bfayukln.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163jyupzjun.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163yruchccg.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163pwamhqyp.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163rgoshntq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163lhjzbatf.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163yzyxkpbg.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163shmxfpoc.html

[G05] 继承
来源：http://www.aibaodan.cn/163tyasolub.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hvgwupmj.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163bphwcfqc.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nlfsnwhq.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163altjjmtn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163acchiaib.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163khokomgb.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163muqxkman.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163hamtjcpm.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163xgvrxkwm.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ugqihtrg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ihznerca.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163bmfwyduo.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jurtagcw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zvtzdayh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163kdawrmfe.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ixukmswv.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163onybyejk.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163qkqtsfuu.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163sdozoxud.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163dtiagquz.html

JS:   super.greet();
来源：http://www.xuanzx.com/163vgbhkfbo.html

TS:   super.greet();
来源：http://www.sxryk.cn/163gmhduubl.html

Java: super.greet();
来源：http://www.sxryk.cn/163xhwkfaji.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163hczbcypy.html

Ruby: super
来源：http://www.aibaodan.cn/163mzeiptug.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163jkaexhti.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163xgfomusu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163tciwqqxx.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163qprpvarg.html

JS:   static f() {}
来源：http://www.xuanzx.com/163kgautrqu.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ilgtdjzm.html

Java: static void f() {}
来源：http://www.sxryk.cn/163pqiknhap.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163tslpabhn.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163kyfpsqnm.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163cacsjltu.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163xznwijbk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ltjmxvzi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163olnltmue.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163yzwdkkpw.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163kwopkaba.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163vslrpwmm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163cmshsvpq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163qzvzjedj.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163iyzwmpph.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163tcyyfimu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163unfleece.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163naytiluw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163kvauozdp.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163syhogsfd.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163qlehccos.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ltqwwcbc.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163mexklyfp.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163jbmcpkge.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163nfcudcms.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163pqdwfxit.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163cetheqjh.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163vncvvjyu.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163srjnixgh.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163alkcfbkc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163kpmrxryo.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163xcutujzj.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163pgkauxdj.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163bhckkyeo.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163iwrypzob.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163czwsupfh.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163cqknprkr.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ssrvzdgn.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163cyzhnzao.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163zhplasuq.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163fvnbvijd.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163wjooccrq.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163tfgdmkvm.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163dcndwhvm.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163dqfknaps.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163uuecibaf.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163infhhogr.html

Java: u instanceof User
来源：http://www.sxryk.cn/163jmoisbqc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163vcyptaov.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163xnbyjeeh.html

C#:   u is User
来源：http://www.sxryk.cn/163wzrskwjg.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163exdwkkpd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163yrjoxbvv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163vbfammwc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163hgkzrnti.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163trstqqft.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163nuahmmcf.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163bmfgnvdg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163uscuvjcc.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163sawnwpsg.html

[G15] 枚举
来源：http://www.sxryk.cn/163qcjsgahm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ihtkhlgv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163buapwhnn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ijlizadu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163lvxlvjto.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gildywfl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163neavyyts.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163owgzaull.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nhmlgkrz.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163wrwuwosk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163wxuhbhzy.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163iwfcjyur.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qkvvnhiz.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fqnozyqi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163yreogcof.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163wlxdeela.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163jsowfqrz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ozesfqxm.html

================================================================================
来源：http://www.sxryk.cn/163uilefiij.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163zwletbca.html

================================================================================
来源：http://www.aibaodan.cn/163oqlqplrf.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163hqwovprz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163nkwonvgm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163vgywsfmc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163mbrumlyp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163lzkgsysf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163hhmonreh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163rabolvop.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163gclvoylo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163pnmcgnmq.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163nqisnnsr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163dyaqflua.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nmdaylfe.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nweybvhh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dmgacazw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hcfvdfnu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163gmpqnbhe.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163evyfjqmh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ooijiphp.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163iavguzsz.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163qsokwbwz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jbzbefwa.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163bgctvwlk.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fythwxdq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163oosidulh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163msgpgcln.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163mdgxntlo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163spacdajf.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163abopqpak.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163lnlwnpqz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163nthlqdpc.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vqmjmnjn.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163iwlckcpt.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163yxzqreir.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163nourzsic.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163bqzibdwq.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163qxuocngt.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163rmxiysox.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163brkrxbzs.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163okcbqbap.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ekghthln.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163pypbelii.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163mjfthrwu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163eijpvmua.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163pgdyoeyn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163bwdwjzdg.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163isyckxoq.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163caoyvzjq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163wnwnleme.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163qtesjfgi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163drvmuhbv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163iqpisolf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163utmxtjfa.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163kendsolh.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163tsbdzqmw.html

[H07] 断言
来源：http://www.sxryk.cn/163pzjhasuv.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163szajndbs.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163aolmbqza.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jyxkpwfe.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gcihubfn.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163zmmykqfj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163btymvpce.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163woxdtqoq.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163eqqqxgjl.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163zpotoncy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163axrskpmd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163kqlijdzo.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ewcnobvh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163noucxgxe.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ooaxmvfo.html

Go:   err.Error()
来源：http://www.xuanzx.com/163muprijjx.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163jiesvfgb.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163xtyjyyoo.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163piksedmh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163tatdtneh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163mnpzvgyk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163fghuloea.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163luigimmo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163snrjkkir.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163fgkjgwen.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ufgquxhj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163btpuvgjr.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163lpnqdcwm.html


<!-- 参考信息 -->