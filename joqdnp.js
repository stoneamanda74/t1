外链999!wailian999！

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jpmceckr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gpvdutoy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pdzxjojp.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163htenpyqg.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163mhjgpqsk.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ijmnnpvy.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163gpdxjucv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163xqkfrzxo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zmgjtsdb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hmssdxax.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163adxutxsj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163nuuatbrq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163hwpmwnjc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163kirhaafw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163dpmhreok.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163huqosiop.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163avkebkln.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vqapxqdg.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ocqetkqy.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163sdmgadms.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163wdvdfvkf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163rdskklfg.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163wwiztiba.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163pgcfhbht.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163zjwembtr.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kjdguxcw.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163nblehadh.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ektwgqxk.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ewoxpmjv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hcobdyfo.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163hibeprnh.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163yquormyo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163peixzkle.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163wfmfecve.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gciywdcj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163mjwcbxxi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163flldgufx.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tdokvhjh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163jxolzwco.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ajffduww.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163izedagbx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ktwgfqls.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163iybhccua.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bcjtycdd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163oklslktz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rlwwcsmo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vmaoxwfl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ezktcivs.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163yrrozccj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ecgrsuyc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163hmegcvqh.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163jzyapucs.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163bflmoggb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163buuckpdg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163cayyqslf.html

TS:   // 同上
来源：http://www.sxryk.cn/163fjjdrpnw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163fwiwpkat.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163glnjfxxv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163hpmkuwdw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163xynmueei.html

================================================================================
来源：http://www.xuanzx.com/163bzonsjbo.html

G. 面向对象
来源：http://www.sxryk.cn/163plgoyhrl.html

================================================================================
来源：http://www.aibaodan.cn/163llpxcije.html

[G01] 定义类
来源：http://www.sxryk.cn/163pzicmtre.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163urtyhibf.html

PHP:  class User {}
来源：http://www.xuanzx.com/163gsptefgn.html

JS:   class User {}
来源：http://www.xuanzx.com/163uuyweblz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163tzcqedwg.html

Java: class User {}
来源：http://www.aibaodan.cn/163zwpgyofr.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ftcheihp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163xobaaqtg.html

C#:   class User {}
来源：http://www.xuanzx.com/163hlwwzxnl.html

[G02] 构造函数
来源：http://www.xuanzx.com/163glecxdjf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ruwhptji.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ydbhtbsn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163zoptsruz.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163zbukbarc.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163swpiphwt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163vcjnvitm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ssqpzawy.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163qwluyele.html

[G03] 实例属性
来源：http://www.xuanzx.com/163keffmaae.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163rnpljylb.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163xldwjopq.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pdtpaxfe.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163tlllrvrx.html

Java: private String name;
来源：http://www.aibaodan.cn/163bxnqpddp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163elcgkuwk.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ncruazgp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163tuhiyjcc.html

[G04] 定义方法
来源：http://www.xuanzx.com/163tkomxdpr.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163judqleol.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163gnxscqun.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163idkavxku.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163fkumuquj.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ygvxsevl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163mnvpesrl.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163zswjhjli.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163umcivhri.html

[G05] 继承
来源：http://www.aibaodan.cn/163vlxoknxn.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163okniccfy.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163zcpqbwxc.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rrtyeeod.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163axxbrsrl.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163zisqvaft.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163fzviklbg.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163lrvrfydg.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163adtslcnl.html

[G06] 重写方法
来源：http://www.sxryk.cn/163fefhkjun.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163rrahjwkg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163tqaxqaxj.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163snsrkzdg.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pcrnocjp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163klrzuseb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163pvaoqkyc.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163xfxwpnda.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dsaexwib.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163rzsxlixn.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163dtelzguh.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163leeccaur.html

JS:   super.greet();
来源：http://www.xuanzx.com/163xktvathz.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163nukslibg.html

Java: super.greet();
来源：http://www.aibaodan.cn/163hxujdrxo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ezahjkyt.html

Ruby: super
来源：http://www.aibaodan.cn/163ofmifvsg.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163rwdqgaao.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163wfvwjuyx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163oerezskp.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163fraqgohx.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163hhyecdfx.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163unzvuvmq.html

Java: static void f() {}
来源：http://www.sxryk.cn/163alpcphux.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ktgmerwi.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163yprnptqg.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163hpvevgjs.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163twaqcqvr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ykqquriq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163abthctbc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163igrkznww.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163wzmmteto.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163iyozlgwl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163yvrubiao.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163znnrrkmb.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163vpxsiwgy.html

[G10] 访问控制
来源：http://www.sxryk.cn/163hkfhbeqd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ofrqqcbt.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163huxwbrkf.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163kinemnea.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163jvmcsuaf.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163bvsyfvpn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163acgodyoo.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163xevikkpv.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163bjybxdfx.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163coqnbjrv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163luqwffcl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lhzxmymm.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163bqrellll.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163uvnqlvkv.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163qmuphazr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xskwaivh.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ecjandqi.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163siomgjwl.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163gqcwiyfc.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163fyklvpbk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yuufcicd.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163dbfeweyg.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163oluqmvaa.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163iuggquup.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163mnpermzl.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163syrmepwa.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163zpczkctg.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163lftrmlba.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163clstricf.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163aktziitm.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163dxqkntmk.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163trvjgmdm.html

Java: u instanceof User
来源：http://www.xuanzx.com/163rcvhmqcd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163vitqwmqr.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163hsmthgow.html

C#:   u is User
来源：http://www.sxryk.cn/163hqbepuxy.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163yseugwnz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163xfjwhuvj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163tjduweqk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163yxqdvohm.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163zhrowacc.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ivtrxmlh.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163qjlfpwch.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163eiedeica.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163dsdullov.html

[G15] 枚举
来源：http://www.xuanzx.com/163zbldipcm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bqrsclle.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163evsfcavu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ztzkoofg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hvahkpsd.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163dpddhnwa.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163aobyqaea.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163edozqjjx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dzhnooje.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ehyyfdsv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163vxelpopz.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163xkthuopi.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wklpmrnc.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163aofbdxfz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163nfbnruft.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ijvpyjqq.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ebgtzymg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163huddsxbo.html

================================================================================
来源：http://www.aibaodan.cn/163qugivtyr.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ygjzobjg.html

================================================================================
来源：http://www.xuanzx.com/163cwyhbrnd.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163lhcmzpoc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163sfgvtwec.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163dxovggow.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163xwcdbfly.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163utmunixv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163hiukkyfr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163hrdcdfhp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163akzvpspp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163uuowbxxm.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163szweispz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163seuonyos.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jjmmsvky.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fqlblggl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qswgoapq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dkgnroum.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163esmdgszz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zhoqrlip.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163lcinapqg.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163xtahxpig.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163tinjudif.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163atfwiifk.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163yineprid.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lhvpvdih.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gjfvtueq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163qjhkzbkr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163yekrsqvf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163apfxbaku.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163uhywzlzf.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163pxvzmdmu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ggczvxga.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lzyscfdy.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ruhxnztq.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163evudrvgs.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163uakicsoe.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163vevtxuza.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163dloyorlq.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163criulbod.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163estwuvbm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163pamanlxl.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163klhhdttg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163esrutxxm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163oklalwdb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163nyuwhcfy.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163qqedaasv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163biyfuvem.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163iewtwjsz.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163kgcriryk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163fbgqtqrn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163egakyien.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163cjytduan.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163tswjzcco.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163koicadpd.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163vjsjumdz.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163sfxiotvb.html

[H07] 断言
来源：http://www.xuanzx.com/163qvefwrzu.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163kujhbjmn.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163gwbxcpjs.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163mfinxuzy.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163tjcogavl.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163nzcmetiy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qbsekcit.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163jiwklozh.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rznftexg.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163vgigrlsi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163djqtspvo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163gxvdbdgl.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163cqnlmdtd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163twypmjcs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163avwxwdux.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163pjtglbgh.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163axkfyqhg.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163uucmleec.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163aarlrshx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ufcbhtlg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163pxccrhdt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163bzdcmaxu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163mbaqgabe.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163tlzzagao.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163akmtvmni.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163hutrirnc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163hlwcdewa.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163yczimjmx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163wpldnsrl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163rvqkzsxt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163taycgsyr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ceghqoqe.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ulqndgxi.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163rhsfesza.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163jpudhqwx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163aabvpwsi.html


<!-- 参考信息 -->