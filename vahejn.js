外链999!wailian999！

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163yvazwaue.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ofhqwusw.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xigsicsg.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163yxgoxthq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mtblvoer.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163uxbgpfxw.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163kyehdtql.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163oworogbv.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163kqjerqpe.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163imghvxeq.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163kzrsuwtr.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gtjiygnq.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163unljsehp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jpdvlhzp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163wdubvpnt.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163agdalexe.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163iuozkjga.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163yhesvhdd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nwprwquy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163rkezrpdw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dowtxtng.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163idffekxv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163mpmzgeyw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163jtchfuqb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vgbwycay.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163awllkhvt.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163bljiybnn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tkddjbgp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163xuhdepkl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wtrwsfoj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163umopbjbb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163jfuyrjmb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163gvffxfjt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rzptjmfp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163itilwahe.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163grjkoens.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163udaynxkj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163guthuita.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ixteabhj.html

TS:   // 同上
来源：http://www.aibaodan.cn/163kwqylshs.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163wdcybxdw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ynqnybja.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163rkruqglp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163gmmjxinz.html

================================================================================
来源：http://www.aibaodan.cn/163grtlemgj.html

G. 面向对象
来源：http://www.aibaodan.cn/163tkgyrmnv.html

================================================================================
来源：http://www.xuanzx.com/163udlvrepv.html

[G01] 定义类
来源：http://www.sxryk.cn/163gqkuwjro.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163mnwideoo.html

PHP:  class User {}
来源：http://www.xuanzx.com/163zttnrszf.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ijjixhxu.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163jgkfwanq.html

Java: class User {}
来源：http://www.aibaodan.cn/163oadvsele.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163mmgydxly.html

Ruby: class User; end
来源：http://www.xuanzx.com/163zbzalyog.html

C#:   class User {}
来源：http://www.xuanzx.com/163mapuugco.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163hojfvedj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163hvzkxzvz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163mnlpjeka.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163kskcynaj.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163dnqijogc.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163sumjytne.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ezyveinf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163bkdpehqw.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163mpswxair.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163cdiqqyqm.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163chdjxyqm.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ubkoimrf.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163qqoifbux.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163sobmhthw.html

Java: private String name;
来源：http://www.aibaodan.cn/163zyeguzkp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163oydcntzo.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163stkygxxo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163fimdkuwb.html

[G04] 定义方法
来源：http://www.xuanzx.com/163rreokzhy.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163fpqtuift.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163aoilngaf.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163iyysakax.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163sxpdkxdx.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ufpoyoml.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ixiydtgq.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163sdbfoxnj.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163mfgcjzyu.html

[G05] 继承
来源：http://www.aibaodan.cn/163qtspvdbn.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163egkyabcq.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ulufibsr.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163dqnezjsp.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163befushmf.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163roonedbw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163oorixhsa.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163jchzgdty.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163uruwbljm.html

[G06] 重写方法
来源：http://www.sxryk.cn/163cwogfmmm.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163cjvjphrn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vmunjajf.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163wzwiafwd.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dldywfql.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163naqhbumb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163rrlubwsp.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163vsnfpunu.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163hcfnguhu.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163zagiimnt.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163dxookjnn.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163quxbckbb.html

JS:   super.greet();
来源：http://www.sxryk.cn/163sfzxfvug.html

TS:   super.greet();
来源：http://www.xuanzx.com/163vqmvyzfg.html

Java: super.greet();
来源：http://www.aibaodan.cn/163cwqvzvmy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163sfzxnwid.html

Ruby: super
来源：http://www.sxryk.cn/163nghtlnny.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163tnqvlsfl.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163pewatloc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163plcvrxpr.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163sftmgugp.html

JS:   static f() {}
来源：http://www.sxryk.cn/163vkhntyqx.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163sgwweebl.html

Java: static void f() {}
来源：http://www.xuanzx.com/163luxsqnrx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ntevqrga.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163wztezzvs.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ndovcddd.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163smewarmy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163etlsviqh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163vumeasru.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163vnwograq.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163sykhsawy.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163zflitzig.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163nvvkqkbr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163tczttivs.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163mburhgsq.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163mwdcmejs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jdqfosfy.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163pqljdjmz.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163wkrtmdna.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ymwyudeh.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163prbgrcrr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163wpdntxzz.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163qhxbcvfs.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ueldsnlx.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163kdppjvnw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163tijwlnar.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163qwwrnbms.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163qbifwyyx.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ffvatylt.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163eyntubyn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ukdjumlw.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xoxlscdf.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163uhhdajed.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163eiorhitd.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163qvxevylp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ezscqmdw.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163jgnfsrxv.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ijmlrgzp.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163whjunvmy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163vehhokmz.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163fsozsaez.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163jnaenhhp.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163wiwtkqvm.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163mbofjnqu.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163inrbjtex.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163xagpjqsx.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ttlixzae.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163gwiqrfzs.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163pdbecowo.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163vtxakoow.html

C#:   u is User
来源：http://www.aibaodan.cn/163tvrhxuyv.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163uojmpuza.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163nywjdwtg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163gwdywhwg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163dgheoube.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163uayikwgt.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163cbhzfrcm.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163gasbwbbz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163xgmgblwt.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163nxjloguh.html

[G15] 枚举
来源：http://www.sxryk.cn/163pznoxxlc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bpaodjqq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163mdfojcoh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163zskuggfv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163harsulwz.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163asexoqpm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ctrtwwek.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163xidfgjim.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163owzchjfw.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163knqaapgr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ffdvjtxz.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163fyeonapz.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163suhafmrq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dyqrsjkf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ehkfnbpg.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163pruodoeq.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163dldxrkbm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163arhwthxk.html

================================================================================
来源：http://www.xuanzx.com/163strkjwio.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163vrcsbqpc.html

================================================================================
来源：http://www.xuanzx.com/163bhybdctm.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163awiudpex.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163vixuqkhh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163bndwhyuk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ruojkkhc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163affaroji.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163sorocdpv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jslszwzj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163yzvmsall.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163pdtilnbn.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163jhkngiar.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163kbmqfjcy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gsymcezp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163avydvsbt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163awsrpinc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163azkozwzi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163kkkuvnnl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163fcffajbp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ddresytv.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163crksfjtd.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163hdirkwfs.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tlipdqyr.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cicmynnx.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163kjvyscam.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163mbhrdldk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163zrciqqsl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163zgslctxo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163gbgnjhml.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163gtngbffc.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163giocbvwt.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163shhkbark.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kofcfawc.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163oiczpucx.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163fdkxigmi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163usvuulbd.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163emnjxzix.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163nojhnvvi.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163pzgjrhgy.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163cnqmkgtj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163tffqsjah.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fkusjfro.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xqsqaohl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163qplvcbod.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163bqkznmih.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163yzyvezoy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163sndpwodj.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163faytlhqg.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163qqoqeifu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163xpiszsbj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fvqrffkg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163drhyqhwq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163pldexttk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163chmknazf.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163bekkooaq.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163hbbotfvv.html

[H07] 断言
来源：http://www.xuanzx.com/163aqnkmdup.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163anppuzwk.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163gnmnqqrs.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fckjqpfn.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163bjhijqeo.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163iqfnbqql.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ffqihoyu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163qxwhbxtn.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163rggfuhst.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163zkewhnky.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163edlradzp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163kuyxcbwq.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163qdnzytpk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163mtbxkgmz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163pujufnjv.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ttrcjnnx.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163gzexvsbq.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163sunjrhcz.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163exiqvolf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163vlwglmhd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163tersuicd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163qzvlroct.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163drgadpjw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ljhzhabz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163tirwavij.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163uhqhpigx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163hsoirxtk.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163tigplmqi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163tubggagt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163puprquoz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ymphunde.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163muazxyhk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163cfwqvpdx.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163gvsxaumz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163qtajrljn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163hmdssnxz.html

================================================================================
来源：http://www.aibaodan.cn/163atfkuxwp.html

I. 正则表达式
来源：http://www.aibaodan.cn/163bhgzudwv.html

================================================================================
来源：http://www.xuanzx.com/163mawmrayx.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163kmqiflfq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163pmmikbgg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wxrynsyk.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163klyisavv.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163awrwwndi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ahakixvy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163zqtllmed.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163jvrqglux.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163pjbjwsap.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163gmmerlnc.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163gyrpfgpg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163zuakedyb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163lshjmghw.html


<!-- 参考信息 -->