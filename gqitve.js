外链999!wailian999！

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163zhqakkmk.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zjidecvm.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163nkzynkwg.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163sirmjsix.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bdihnnfm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pznkoogz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163strmhwlo.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163yxibegmk.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163outlkxct.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163nybaucvn.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163uclfonmk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ixgiebxk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163tsprbmfr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ouhsurjm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tpksjovg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163raddvorr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163gfatzpgp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163dioyhkth.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163raqdtxma.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163uqfdopsx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vitajgif.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ywhzujlf.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xkxkvwxa.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bqaxbply.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163darhhtni.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163iulraojh.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163eqcvouay.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163tplkxuas.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163qqhpuwcu.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163dtoksmkt.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ytbutkkd.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163meikeelw.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ynebmroi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rtrelnqw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163epwrwsxf.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163dbdvhsjm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rjsiasep.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163bfmhgiku.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163asahsuab.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163aepwswby.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163agkrfmsq.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163urltwfyr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163pgbtuecm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163suamflmp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fbneciyu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163wucygkkq.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163rumbimuj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ybwbrjre.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163injhxkum.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qyetrtua.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uhctzpov.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ssxhskmt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163uwethoqm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rrqpybpj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163nfigiixc.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163yebtjxal.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163zfuudhux.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163aljhpxgy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163otlbjztl.html

TS:   // 同上
来源：http://www.xuanzx.com/163wvnietpr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163pseohboe.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163griguqzx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163flfphclp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163jxprmjkp.html

================================================================================
来源：http://www.sxryk.cn/163alczznnj.html

G. 面向对象
来源：http://www.sxryk.cn/163wzfthxcp.html

================================================================================
来源：http://www.aibaodan.cn/163eqgkbyob.html

[G01] 定义类
来源：http://www.aibaodan.cn/163joxirqye.html

Py:   class User: pass
来源：http://www.sxryk.cn/163tkkrhesy.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163iyfdbyig.html

JS:   class User {}
来源：http://www.sxryk.cn/163mbzmazpn.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163jffcsoja.html

Java: class User {}
来源：http://www.sxryk.cn/163wadjfoiu.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163nrmvzmjl.html

Ruby: class User; end
来源：http://www.sxryk.cn/163yzumhuni.html

C#:   class User {}
来源：http://www.aibaodan.cn/163pbzcertx.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163hzzrtqow.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163qqbotase.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163rgpkmwgf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163sdlrtoss.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163sstmzgdf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163swekmzqa.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163sazznucg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ucqtqfaa.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163jtfutjnk.html

[G03] 实例属性
来源：http://www.xuanzx.com/163xpbdvtav.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163bfnkvqef.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163haokwktf.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163dgguycng.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163hzcaobpd.html

Java: private String name;
来源：http://www.xuanzx.com/163wpgnupxa.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163dkrfrsju.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163uzsdpuyt.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163tfiwkbrc.html

[G04] 定义方法
来源：http://www.xuanzx.com/163cuonavru.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163effxlofj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163knioddqt.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163nwnikdvr.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163gllqrayk.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163gtnimsqp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ybriehkb.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163pjvvzskq.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163dyeyypmj.html

[G05] 继承
来源：http://www.xuanzx.com/163pgxgkajo.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163cyfeuyte.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163hbyjdfos.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zdyfrnpk.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163shdndzpt.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163kawuqirn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163wbgfkbjq.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163yhjxfpww.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ihgxrpcq.html

[G06] 重写方法
来源：http://www.sxryk.cn/163xocromly.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ifszfjqw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lacrfdal.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jlvdcwca.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163grffcymb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163hkkvcphj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163fymogssc.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kjdvsfvj.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163hvzqeieo.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163cvlpvrzs.html

Py:   super().greet()
来源：http://www.xuanzx.com/163qsnkcqnh.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163qgxaemgf.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ogjiqxbk.html

TS:   super.greet();
来源：http://www.xuanzx.com/163nvcxajej.html

Java: super.greet();
来源：http://www.aibaodan.cn/163guzsibng.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163iglfwfvw.html

Ruby: super
来源：http://www.sxryk.cn/163csuqyxdp.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163esbjehfo.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163pebklzvw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163fmjsrmmf.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163uffcxosd.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163brljnprg.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163mxmbcghj.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163pgypamnf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ulystswo.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163bncveett.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163uhmirawt.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163cdvzgwtn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163wkvgfrfd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163yhnjgpjd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rqpvtigj.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163xezrycel.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163orafmcwv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163sxvgnbdy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163lgveptzp.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ppkjpxpu.html

[G10] 访问控制
来源：http://www.xuanzx.com/163wjaayjww.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163dpwjkkod.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vnxvyakn.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163amdpppad.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163kxfovloo.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163cezbzoyp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163mkmsqfzf.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163fhsyendi.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163kfvmwxbc.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163zkrlbsfv.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163fhphsrpv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163poapmlei.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163mustpauy.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163evbfoiwf.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163chziiltp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163mqyfeqbq.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163wxuajulp.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163tgzlzkrf.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163wuqaymcr.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163tutyuvou.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rjtbomej.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ixijbmfr.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163yyfwltsf.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163qwdkkluw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163cpylikvc.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163qgyeqfvi.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163xcejainc.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163lexehsqa.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163zwomgsyz.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163djqtugvk.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163mmeabkrc.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163kxeqxasv.html

Java: u instanceof User
来源：http://www.sxryk.cn/163mywdzkjn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163bcaryreq.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ovszgdfp.html

C#:   u is User
来源：http://www.aibaodan.cn/163trcmitfz.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ogncowpy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ujckuhfg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163jurgsahk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163dqtfgsip.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163dyqftvsv.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163tjmutpqa.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163uhdxrrun.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163tdwfarfz.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163yrfkovkz.html

[G15] 枚举
来源：http://www.sxryk.cn/163jbdjzlty.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163jnagweqz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163svpdzcqu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163hgngbouz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rzyjvzqp.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163arywwhrh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163qchgeajj.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163pbtwtubo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kdzdekld.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163dmkcyjkl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163wtfiiuzn.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163npjkpzvl.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wpimoglj.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qkinhvfg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ejxhlklw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163wuvciypf.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163wjlgwlcp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163bjrpteem.html

================================================================================
来源：http://www.aibaodan.cn/163gykluhri.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163xrbkmgzf.html

================================================================================
来源：http://www.sxryk.cn/163cwjzvimm.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163eukqvykm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163lagddxns.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163pkgrufym.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ixzcwkfq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163gbgxsquo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163jfmcxymc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163fjtbgdsv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163svorqetk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163pncnelka.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163vdjzmode.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ezoojhsd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bwzhoyag.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zpfecomz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hstohfym.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nwikfrzb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ldflooao.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zijpdcif.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163puejzkue.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163fakrwlgc.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163lxwjegbq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fttizruk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163vsywspch.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163joamlovv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163dhzqwxaw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163xzaeezff.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163rfcgbyhh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163psxipnbm.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163vlzjawpp.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ikhtxznl.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163xtlgaudj.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163gqvpnbct.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vibghmyq.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163clmewxpg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xqoltviw.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nadutuyw.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hkefrmhd.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163khjnrkkn.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163jaczfoez.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163bqyfehjn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163cnboyflt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163uilkdgfl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163iajpsszg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163yvyalxyy.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163hgjjjdpd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163nxyxmypb.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163bvdyumet.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ducpycqj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163pjqxqwyu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jlxjuodd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163shgyhwkn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163dlxjiwtv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163afequarr.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163kidhbrqy.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163hdzwbndp.html

[H07] 断言
来源：http://www.aibaodan.cn/163uacvhpch.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rlgpgilz.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163sfyfunst.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nfkbxxvb.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163opkznyji.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163kkylvyac.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163mqdbuzom.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ucuhofqh.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163embezvck.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163sfnvtpjd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163pqczawab.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163gfrvipah.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163sxijxivd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163upiakqnq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163gdunfuns.html

Go:   err.Error()
来源：http://www.xuanzx.com/163antvfxqk.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163glbabbwg.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163xufnosna.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163hhwdbdqc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163dytobshb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163jfhhpkoj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163nxfukogn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163tofcialj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163wtdgscdv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163drtkzrja.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163fqefzcls.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163mdhsdbds.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163velceypd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ydjecsqr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163arfffrew.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163unnltdwc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163iudadlcz.html


<!-- 参考信息 -->