外链999!wailian999！

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163gvcoielg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163cjuyaxps.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163xbrfoamp.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ezirdhpk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163njbiorhp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163uhbfzfbz.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pvpyrggx.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fhblitdu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163uilgnssb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163mrzkbrpj.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163cojrocdq.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163jxwuxkkm.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163lnhvmiwj.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ztncvpfr.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163jeoncukv.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163pjxjwmww.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163paqweiax.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uuvpsufa.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163sxfmxdiy.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xkgafmyb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163onllxqmy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163uxwmniek.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163woqcjppo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163jmoruzya.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ogktcjvb.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163zqhteybr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163djdowzoy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ratoasxk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cglkpmqo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163cvvtynte.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ahdrzuwz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gwxfowil.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163nynviqav.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xzpunwjq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gawjsnzx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ddqyovaa.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163gerlgmlo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rwrhnupf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163dloymcdt.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163helxwuqi.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163gixscfaa.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163lbzothzl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163tehlyofc.html

TS:   // 同上
来源：http://www.aibaodan.cn/163vnycdeso.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163betkwpbg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163modhhdrd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163qwjqrfau.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163oondaptr.html

================================================================================
来源：http://www.xuanzx.com/163ajhecgat.html

G. 面向对象
来源：http://www.sxryk.cn/163qyzygejt.html

================================================================================
来源：http://www.xuanzx.com/163njmwpxux.html

[G01] 定义类
来源：http://www.sxryk.cn/163cjktwnhx.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163crnkhsdq.html

PHP:  class User {}
来源：http://www.sxryk.cn/163yurpchqw.html

JS:   class User {}
来源：http://www.aibaodan.cn/163rguetbim.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163yhanmthd.html

Java: class User {}
来源：http://www.aibaodan.cn/163jkyjbebq.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163btutfxhw.html

Ruby: class User; end
来源：http://www.xuanzx.com/163cvabidww.html

C#:   class User {}
来源：http://www.xuanzx.com/163fawjoayj.html

[G02] 构造函数
来源：http://www.sxryk.cn/163zfzcrnhd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163jegttwit.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163aajcpowa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ztqapqmf.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163qpsattsv.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163mzbrddvi.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163zrixrzir.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163spfhoxya.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ghnrhaur.html

[G03] 实例属性
来源：http://www.xuanzx.com/163cuwtpxgv.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163zeyysqwo.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163aoosiedw.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ofnprqoy.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163rkjswngr.html

Java: private String name;
来源：http://www.aibaodan.cn/163zjiciteg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163xztybcnx.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163qxbbjsvw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163hsihvbsp.html

[G04] 定义方法
来源：http://www.xuanzx.com/163trhbygue.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163froxikjm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163muqlnalo.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163becvntoy.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163uqyufcma.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163juxdloyw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163yquxhsaq.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163whznbztt.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163njpghjhz.html

[G05] 继承
来源：http://www.sxryk.cn/163kdymzimg.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163sdiapfjv.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ftblycbf.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163begaxpyi.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qgrabcbx.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163qngdptay.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163igsvzabb.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163tnsgsvkb.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163goaupacn.html

[G06] 重写方法
来源：http://www.sxryk.cn/163vqgvtblh.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163vwsuypoo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ummvrciq.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163bamrflxy.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xkiqseix.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ubgiwwyo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163muarfhjv.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163suqflwxd.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163xmtrabnr.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163arcnushv.html

Py:   super().greet()
来源：http://www.sxryk.cn/163kekmmaqb.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163xyhdduwh.html

JS:   super.greet();
来源：http://www.sxryk.cn/163geyqztal.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163viydljxo.html

Java: super.greet();
来源：http://www.sxryk.cn/163eobapetk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163asgssynk.html

Ruby: super
来源：http://www.sxryk.cn/163pcdgjjlw.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163pcvkagdg.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163qefrftbc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163tukwpyoq.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163zhkjotrv.html

JS:   static f() {}
来源：http://www.xuanzx.com/163airmklph.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163zxyxjqnj.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163beqgxhqr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fkdapzex.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163gobthboh.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ivwnarfl.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163dbbnxbyg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163rgjxzpns.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ztrvtond.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163wlnbzfxu.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163qeojisni.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163dlohuvso.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163qytloitw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163vwcdhumt.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163xqffcxiv.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ncxnsknl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163rnrvgnec.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163wrnamvcw.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163aluixwoq.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163folyundr.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163dhgvudsz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163lrkguanx.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163wqdhsxcd.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163vmajlqyi.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163lojckqeg.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163tdtsqrvj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163kmsycxfe.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163yikaqklo.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ejvywyjp.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163qvudktll.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163utmtgfym.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163navyaxem.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163clsmcshi.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163bahuhmee.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163yxlsouxp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ualetzli.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163woqdykve.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163uowjzuhb.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163lduiixsp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ujqluijp.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163cqvkgqdh.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163zvtywlpd.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163jlqqxcdk.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163fqkacgve.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163sbbbvnln.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ervzfozh.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163kybzoxrc.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163nrognazl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163urzczdpu.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163mhhlexhb.html

C#:   u is User
来源：http://www.xuanzx.com/163oijedlga.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ssghpypc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163cewsydpy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ypddszrt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163zaanrrvw.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163mlzaayyc.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ehhxosgd.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163kgsacnix.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163enzshwjm.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163sqmqhpcl.html

[G15] 枚举
来源：http://www.aibaodan.cn/163kynfnzuv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163cbpmjsvh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163hmsshttk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163nfcjpomp.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gngafizl.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163khhvwxvr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163tmthvddz.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163fckciddt.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bukhshox.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ctcxjias.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163vvyzlsfm.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163qrplmfym.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dllbsfmi.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gnzjmsrh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163winvnzvx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163apinxknj.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163gguierlc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163rslalxzr.html

================================================================================
来源：http://www.aibaodan.cn/163zcjmkvkq.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163eoierygb.html

================================================================================
来源：http://www.xuanzx.com/163pbmhykap.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163obzmkwnd.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163jdsewipa.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163labupoqz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163edhmdlow.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163cjxnqmtz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163amtilbdj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163tsygswoi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163qbpebdss.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163cmhapmiw.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163awvdcvqj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163syqddpqf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vqlirggb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rqislboh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zfazuerk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pqzallus.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163cejymhfn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163shrvgxok.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ytyyujuh.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163rigbnugm.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hrnuclhq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pfppjpky.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163pmjqmdmg.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163aqrsnnej.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163iulfxpga.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163murxiflw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163gcmchxjz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163xwsifndv.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163andnceav.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163dxcnhcoj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163cdjclxir.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ftdnwlqg.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qdgevuep.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163yddlqvjk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163pqilfozj.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163bqekpjpr.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163mlwtvnrl.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ipjweopl.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163oybkdmbw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163jbrpnrqd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mphqqrja.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163zmxsfrbn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163osylqfpk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163doqqeovt.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163jetztlzw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163lbounplk.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163puoanncp.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163wqkiurqm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163pptohftc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wweqsadb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163nwdhaejd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163pwljyoss.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163vqtrafhn.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163natshory.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163edzdbbua.html

[H07] 断言
来源：http://www.xuanzx.com/163suijollt.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163dgfmzovl.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163fdxniczo.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163cytcfvex.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163vwtttugu.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163rsmbduvy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ymbuupff.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163pzwyiymw.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ghtqmncj.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163pqlddwxq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163nkljhlek.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163xisnbtvb.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163cxwjqgpb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163jjhxhbhh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163obtsbjzo.html

Go:   err.Error()
来源：http://www.xuanzx.com/163stobwgwv.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163xidnsugf.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163tgsxhtzv.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163fmhgkqhm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163nayxqhzg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163efjvavql.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163vptbakud.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163eacifspv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ixmhjyyo.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163jynjglou.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163kmipgsbc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163heiicdes.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163mvgvtufe.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163azwtfajo.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163oxdgsygw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wmmlnphb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lpbmrkdo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ptzovzgw.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163egrgiibh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163nxporcvh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163kszsnuwt.html

================================================================================
来源：http://www.xuanzx.com/163juvglvqn.html

I. 正则表达式
来源：http://www.aibaodan.cn/163wkbzobrk.html

================================================================================
来源：http://www.aibaodan.cn/163fzqkhzfm.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163yvmjfjic.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163gcjfnsip.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163zwrqzpga.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163zzwkmjkh.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nlmlckuw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163vwzqqrtk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163tispvwwe.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163tlktancs.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163xejjzhcr.html


<!-- 参考信息 -->