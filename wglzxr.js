外链999!wailian999！

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163jysrzhjj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163tzmwlvly.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mxupjhgj.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fctnbdpz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gpttxdks.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163yezmuvlf.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163qzmfzjne.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163noqofnyc.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ixavapwm.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163yxwrlvyd.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163zosacsva.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xcclpsbh.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ujilkytd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vjxxowiq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163mtnphvgp.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163hlfsqsob.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163uncebksd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163oqdmfrms.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tggldfpy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ecwiajye.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dlqtrefl.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163onbbogeu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163fxqtgqhm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163jmzxtbsh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qllqptad.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163uqxvmtpn.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163agzvzcej.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fudhprhs.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163bioujffm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dqlloqdh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nqlnfqcg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ohxejclg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163oenbeanq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wbptftvk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163oyfovaua.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163jpxtmlsd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163iwduwnds.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ldmrntdc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163tuevbrbk.html

TS:   // 同上
来源：http://www.aibaodan.cn/163pprqumqq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163abvghrkk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163umuqebkv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163xhexexfc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ieaumbdu.html

================================================================================
来源：http://www.xuanzx.com/163ksdwfzdg.html

G. 面向对象
来源：http://www.sxryk.cn/163kqmjegef.html

================================================================================
来源：http://www.xuanzx.com/163hktvbfnf.html

[G01] 定义类
来源：http://www.sxryk.cn/163adrjbilk.html

Py:   class User: pass
来源：http://www.sxryk.cn/163xfhpxxua.html

PHP:  class User {}
来源：http://www.xuanzx.com/163udpvkelp.html

JS:   class User {}
来源：http://www.sxryk.cn/163lagzzszg.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163otbxyqyj.html

Java: class User {}
来源：http://www.sxryk.cn/163zzmstdkc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163hgpbxnbt.html

Ruby: class User; end
来源：http://www.sxryk.cn/163kxnaygdo.html

C#:   class User {}
来源：http://www.sxryk.cn/163vkkzbdlg.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163cgyqhhva.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163yuqfhstt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163fuzqzkpt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163dmuanudb.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163mhgpfeuq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ittmepne.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163rtdfhswk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163mtlbpvhg.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163mclbsysa.html

[G03] 实例属性
来源：http://www.sxryk.cn/163yyzgzdqi.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163olqnolpb.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163qozqqhnf.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163biuihtdr.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163zbfghetj.html

Java: private String name;
来源：http://www.sxryk.cn/163dnkwqzqd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163eonyxnrj.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ddmbuhgs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163itqkkovu.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163pytkagcu.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163eavorrgy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hjfooona.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163uognhfqn.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163vibotdvw.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163hceqeyhb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163gtsminfv.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163kcujmttl.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163mwneqqvp.html

[G05] 继承
来源：http://www.xuanzx.com/163ejbofrlc.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163rxklkjav.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163vzdxgclp.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mogezrtt.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163outtobku.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163eeauulap.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163wqqvxien.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163jirzzexl.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163iusfbzch.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163bpjjirhi.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163aaanutjq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163bawyrkfw.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163lztqfoiz.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jpzqdwkp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163tnqgvqte.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163maxrkwip.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163qqxrdyde.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163fafvgjvu.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ashufano.html

Py:   super().greet()
来源：http://www.xuanzx.com/163bwgopodb.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163vervarkd.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163kuwqidyx.html

TS:   super.greet();
来源：http://www.xuanzx.com/163orjjkydg.html

Java: super.greet();
来源：http://www.sxryk.cn/163otbmmijo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163jcfrogza.html

Ruby: super
来源：http://www.aibaodan.cn/163dopqqylq.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163fbumwtqt.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163aeqmtdpr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163nzkyzfeq.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163xaqqvzhn.html

JS:   static f() {}
来源：http://www.sxryk.cn/163cneywliw.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163hmpumqin.html

Java: static void f() {}
来源：http://www.sxryk.cn/163lavgmqmw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163xzzvrayy.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163amefhuek.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163jfjmgfwh.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163mwnqzics.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163qbtiiire.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163nwdeyeqy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163slvpyawc.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163rfpownpk.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163amllyxxr.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ndgdazft.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163grawqmjj.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163gfzekrwy.html

[G10] 访问控制
来源：http://www.xuanzx.com/163dvudqwbn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163yemkudyc.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163rouvjepb.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163aqfkkiwj.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163mxrttugh.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163xpzfywud.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163kscfwyzu.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163yxwmguhh.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ffjohieb.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ipjkaeop.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163mkxmoidy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vcmtumvx.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ujombhej.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163akvscgwc.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163rqmrvdeq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163bjxgnxgg.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163vaptbxlt.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163syhqnxqo.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163knjmtiun.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163pvwbdtiu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163rzdufkzm.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163yjvyihkn.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163zbweoiec.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163hlsscuuz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163lxetpuvp.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ljbxqytx.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163jhmdkqbk.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163slslorhh.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163wpymwdkf.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163blnxthlw.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163qbsbafoz.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163appyzxbr.html

Java: u instanceof User
来源：http://www.sxryk.cn/163rjqtyjqn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163zjqvgmaj.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163nqznluxa.html

C#:   u is User
来源：http://www.sxryk.cn/163gtojslvm.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163jtcedqwp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163qaindqyr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163lnohgdap.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163dflliuyc.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163vhwqmoek.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163futrjdlt.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163yltbazgd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163deaerjdp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163cvsmuezc.html

[G15] 枚举
来源：http://www.aibaodan.cn/163bynkwbmi.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163dwnxrgua.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163htkczogl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ukwsazok.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163kpuqhjcr.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163exvegozz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163edhrfnto.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163usvgqybb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163piyvymbo.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163yqtwaroj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ubxiqiko.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163lecnlnsj.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zenagetc.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gcyiuxup.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163wbanrtdk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163mbnbialo.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163htsbaytb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163noorlgvl.html

================================================================================
来源：http://www.aibaodan.cn/163aupvpbtk.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163mrffweah.html

================================================================================
来源：http://www.xuanzx.com/163kwipcosq.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163iablswng.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163eehrzwal.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163hjabeqrg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ahmoyesv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163zhctmthb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ywnzcmyv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163rjaxftlc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163vidrpejn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163jgstuiwe.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163rsyrwhvd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163eqhzdzxa.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gepfsvhh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163molzoqsm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tvmgjqyz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163thoopvem.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163eerwrikl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163dswtlusq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163zvmrhnnm.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163jjqkrckm.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163anplhwch.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163giexbflf.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163excpythx.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fitjyksq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163frujvgzw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163iebkffwd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163twnjnviy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163xggdvygx.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ikippanm.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ajqejhia.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163eguvetbz.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163yrxtkhxa.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hxqyhrxg.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163unhpvria.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163wrdqfrzs.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163adksfppp.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163fhimyisl.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163kylhungz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ioyglvsg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163alkmnsjm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wtrfaqli.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163igrqpwfa.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163tqobeceg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dynmcwaj.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163quyaraxp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163juioqjkj.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163kknycytg.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163opdvpcug.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163qfwnzbcs.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163sgrmnogr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zejyrpzg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163uryepamq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163usjzeizx.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163fuupsuux.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163cmjwwvfm.html

[H07] 断言
来源：http://www.xuanzx.com/163jxdizxee.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163mgtybqqn.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163cfusyhor.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ogbyykzk.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163awbwclwf.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ifqdzkrr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163jkstavkj.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163fnpxzqmc.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163nnshsjnp.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163rxovpdlr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163uocwrqiv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163feofiqbl.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163iyhoaigz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163bmfzjddw.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163jsqtxirl.html

Go:   err.Error()
来源：http://www.xuanzx.com/163tbgnezws.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163gfygjvdo.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163lhyygrvj.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163doljgfiy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163dtxhuwsl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163pfxquavx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163smcekeyk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163pxyuwask.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163guaooakx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163uawfabdm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163jxsmkhoy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163tzrdwwtt.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163zbgdyybx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163igdanubk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163qmywplze.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163eolqldkj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vuoigckb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163vnayfrvy.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163nzwyuiat.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163smeaxaji.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163rzhuypwl.html

================================================================================
来源：http://www.aibaodan.cn/163uhmwmfay.html

I. 正则表达式
来源：http://www.aibaodan.cn/163gogdklbk.html

================================================================================
来源：http://www.xuanzx.com/163qqidclet.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ighvbfyd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163verpaggz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163cgwxprko.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163emygrxgw.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163edzpllcy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ehjhznuu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163dzwyexvv.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163etjpfdaw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ginmzyhv.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163jnmlepnx.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163hzndkhuk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163fywiwcxc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163dzwvvnup.html


<!-- 参考信息 -->