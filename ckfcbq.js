外链999!wailian999！

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vjenyrde.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kzkijeht.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163avmykggj.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163rduoexru.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163dvrzptud.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163fwasindu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nigluock.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163lfzgdhto.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kroutswa.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163gsetmktb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163emskmujj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163rhtppoys.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tedfgeem.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vkqdgixx.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163sjntfrds.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ghnozxnk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163natgvxlu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vjqarvpg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zpdzdtai.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163qrfavtve.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163gwwhneaz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lkkjqjoi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163qizksgjc.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ncyjnflu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163rnsphxki.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163aunztxkh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163pmtrubrz.html

TS:   // 同上
来源：http://www.xuanzx.com/163spcxfoox.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163kvewxkeo.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163zjmdpxqo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163dxvnpuqc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163wcdeiphp.html

================================================================================
来源：http://www.xuanzx.com/163tqewhnes.html

G. 面向对象
来源：http://www.sxryk.cn/163rjjaxats.html

================================================================================
来源：http://www.aibaodan.cn/163gbngwlcs.html

[G01] 定义类
来源：http://www.xuanzx.com/163tqrapdeo.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163vaaimwuq.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ajcfcepr.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zlizzhbc.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ruoticgf.html

Java: class User {}
来源：http://www.xuanzx.com/163ykvietnk.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163yuyronig.html

Ruby: class User; end
来源：http://www.sxryk.cn/163xnknrmtb.html

C#:   class User {}
来源：http://www.aibaodan.cn/163tmanstiu.html

[G02] 构造函数
来源：http://www.xuanzx.com/163smcqqglv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163vknpqpbx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ccrirpwz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ecqpurzy.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ogrbwaxt.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163zahkatpb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163qrkvvnea.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163tmhhduyk.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163eteamcav.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ducvyunx.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163nzmwxnms.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kfryvuhh.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163pzigcrxj.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ygujqrnn.html

Java: private String name;
来源：http://www.xuanzx.com/163sduricmy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163xuxxpfwc.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163qbleewuc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163kneeyckc.html

[G04] 定义方法
来源：http://www.xuanzx.com/163swtcqscp.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163shooaycj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163iwsbgwad.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163pcsncqpp.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163dcmaiaxa.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163aoxlwjth.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163rfotmtcp.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163xaxaqqwx.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163wykvoqcl.html

[G05] 继承
来源：http://www.sxryk.cn/163izerfknt.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hmftgjck.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163rxluvebh.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wmlmouef.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qzofuqdz.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163jiakkqxk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163isyooefr.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163idqqlwes.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ohtjvefl.html

[G06] 重写方法
来源：http://www.sxryk.cn/163tlyzqypp.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163abwqpjsm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vdbehhev.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163mjtkoyyi.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fotviakr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163zzjrahvd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163mskpxspu.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163cpqjkgbh.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163phvjjoyx.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163wrslqjpk.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163aecjiqwj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163sxaxhxqw.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163jrrdxljq.html

TS:   super.greet();
来源：http://www.sxryk.cn/163czdgsfbj.html

Java: super.greet();
来源：http://www.xuanzx.com/163hwnpcmsf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163inomnwnz.html

Ruby: super
来源：http://www.sxryk.cn/163htiddzet.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163jjwcbevj.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163wqalzqlg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163abxrrkkd.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163gpmnqdpq.html

JS:   static f() {}
来源：http://www.sxryk.cn/163sahjnkrf.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163hpozhxju.html

Java: static void f() {}
来源：http://www.sxryk.cn/163nxousapt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163abzeiskd.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163rdkwosjj.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163lclsrada.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163unfscyvu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163tutsqxdi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163mrkrgaem.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163iakrqsma.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163bdvslsqc.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ardmfngt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163uyowzzue.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163grgsypor.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163mgnutqvx.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163oryzaklv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jqhibivs.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163mttrcxkv.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163dbiurboj.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ciobqlnj.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ktvxekng.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163unfekmss.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163rcbutprj.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163yzgixrgd.html

[G11] getter / setter
来源：http://www.xuanzx.com/163kqkrfdvx.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ellmucls.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163fxmvejuv.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163opptsuyq.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ychieetm.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163zpecsrgb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163yexqbvpt.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163avcawfzq.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163zafdjppy.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163fojvozhp.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163bnecvrjk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163hrketxjw.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163mjfonjns.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163zlegfagx.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163lsxilrcq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163qgnwsjjx.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163nbdzcfdd.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163umvuwqoy.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163pdkxpjzk.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ywbewbht.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163eiijzjns.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163xctlaoii.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ptwjdrpg.html

Java: u instanceof User
来源：http://www.xuanzx.com/163kyxhucrn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163pwqzxgqg.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ykqcihdb.html

C#:   u is User
来源：http://www.xuanzx.com/163nvjqmbgj.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163yvlgevsq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163yfgiubmp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163wfmicoqc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163nxmfcmpz.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163uneurtvm.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163lhbtcezr.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163qymgezcb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ojshheai.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163bdgibdbb.html

[G15] 枚举
来源：http://www.xuanzx.com/163krtfehnb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ppuoltdg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163arroypli.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163zkittxpl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163zvhocohh.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163gcrdaber.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163lcihofwg.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163okarksme.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vlxxtgix.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163jhmkckxc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163lhewrbye.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163jqstrfcs.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ybconogv.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rftlhoqr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ufrbbgce.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163cqihhoxq.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163fzzleidk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163nsksvgno.html

================================================================================
来源：http://www.aibaodan.cn/163wtvebgdn.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163wcwnnphz.html

================================================================================
来源：http://www.xuanzx.com/163bsboklyw.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163vlqfsepo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163kbgehkhd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163jrgqzwrk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rizsxgmg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163trpysbhg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163qventjvm.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163iaqlxabi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163dsohawpd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163mhbnrnor.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163wvanfyqq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163tnxoeivs.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163villmega.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kxgywfid.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tvscpreg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163oknnhdfp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163mycvpnwf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ajeixlzy.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163yhaotkzg.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qmksisei.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163dnmdxeab.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163fgfrdjvy.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163sqizqukv.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163alsbosfi.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xsekfezx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163kbobhuzy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163eopssnws.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163znweaudc.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163gjxqcyuq.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163vfjzedsf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163urpvvrxk.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163meywivak.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fqlnuijs.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163aobyhfmt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163pvpnmozh.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163gdagaweb.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ryhwnhsj.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163zwuepkuo.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163vectsgwk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163qahkakcf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163elfcrdpo.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ytcpsqqd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163uztjvevi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ibdaitao.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163varbkvys.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163kdellogk.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163gxndaath.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163bwckbpot.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163tvdheyec.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ngkhkdjq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zpdahtsu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163criaacba.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163jdsxbmpu.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163urfohbnh.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163nqvnnigh.html

[H07] 断言
来源：http://www.sxryk.cn/163bnbidbjk.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163mtekanwm.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163jciutkgf.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wjpsrine.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bjbqrhpz.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ypburnkz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163vhndjvte.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163zhtcyooi.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163koegpgmq.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163jsnjcvbg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163akefrzyy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163qqhtpgbn.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163trznevnr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163xutoingl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ionmiivx.html

Go:   err.Error()
来源：http://www.xuanzx.com/163iljowvgz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163brlcpfbc.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ylunshwm.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163hkusnlse.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163cqgveaog.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163inthzekt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ygfquikx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163btdeleep.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163qbecrisk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163jcfguiuq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ciynqsch.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163iijrzcrl.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163bepfrjru.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163nsizklva.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163dyuvbejx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ruvjkque.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vxyljdgb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163iwkdnyea.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163tvwjclwt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163foyqjenz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163btmxexeo.html

================================================================================
来源：http://www.xuanzx.com/163zxdtlgbp.html

I. 正则表达式
来源：http://www.aibaodan.cn/163rinfzcfy.html

================================================================================
来源：http://www.aibaodan.cn/163hfgctjya.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163svzvpzin.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163fmbrsnrv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163zyhmocnx.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163gvsxrtam.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vzofdncl.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163nrlrxmdt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163udjheijv.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163crdywrwe.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163rvrzssco.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163irozfvde.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163thpnagen.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163kpjoculp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163dbpcdfry.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163zhnolddp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163rlroxfdp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163sofwttzl.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163hvzzndxk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163rhgzlsbf.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163zptldapp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163qmpqekxl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163lhyexeuq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163pffabysa.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ifunyrdx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163covmnrpa.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163goobheoi.html


<!-- 参考信息 -->