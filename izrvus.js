外链999!wailian999！

[F09] 获取文件大小
来源：http://www.sxryk.cn/163dlfbjogx.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163nnddyvvr.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163bkzhlvgt.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ticjfqnh.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jqhjfyhr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xnmmqrzv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163excvhrdf.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163lfuincte.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163thsuvrjv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163swdoycyu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xmwoepki.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163tzrqwetp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jrzfrdes.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163thwxuiqg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163wapcdrpw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163zudymioo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ycnicqso.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163vocvmhjb.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163qlzcqoxh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qlsjjvgs.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163hxwrinam.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bccmncox.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uzgomdyn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163dufuxyid.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163valtslji.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mxismniq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163zcemlmsh.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163bojvfcwn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163nlvgaolb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163lkspufmj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163htkdrndz.html

TS:   // 同上
来源：http://www.xuanzx.com/163aijflwjs.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163eqsrtxqc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163xcmpmdzq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163kqrilgnv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163fraijefk.html

================================================================================
来源：http://www.sxryk.cn/163qhxetfch.html

G. 面向对象
来源：http://www.aibaodan.cn/163bimncxrz.html

================================================================================
来源：http://www.sxryk.cn/163msgvqcuy.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ehaodtar.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163uovrwvhq.html

PHP:  class User {}
来源：http://www.xuanzx.com/163emzceopz.html

JS:   class User {}
来源：http://www.xuanzx.com/163sgbbepjg.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ubskzxcx.html

Java: class User {}
来源：http://www.aibaodan.cn/163sxzlsumf.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ewdcnkjb.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163lcdszkvu.html

C#:   class User {}
来源：http://www.aibaodan.cn/163xjbbiwyo.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ohnlvjxo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163gwrikmly.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ezygcrti.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163wtelrbsm.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163wxgdivig.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ehbfvvnx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163phpnbagp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163fwdevpmv.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163tixrgilb.html

[G03] 实例属性
来源：http://www.xuanzx.com/163fuqfqnhd.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163cyfdfmkr.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163wftfcarj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163tefakjcl.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163zalujnsc.html

Java: private String name;
来源：http://www.aibaodan.cn/163supchovq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163cnzsemik.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163kohklkhg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ptjpqlko.html

[G04] 定义方法
来源：http://www.xuanzx.com/163iwsijlxl.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163scponjqp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163lpcobqie.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163yuugrpqu.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163vleczjha.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163rsbccoek.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163sjkmchzk.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163obfmxkgk.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163hixqtrrb.html

[G05] 继承
来源：http://www.aibaodan.cn/163tgtpelwh.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163iutcpdnj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163cqvbdhfd.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wlvomhcj.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ahutepld.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163wdwplsmn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163rzbrmhhd.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163uxutqlva.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163mjkbknwa.html

[G06] 重写方法
来源：http://www.sxryk.cn/163mrilyfxp.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163uxtvodfr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vgdulsun.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163qbjxilhm.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163snwkfsyw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wdtohezf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163awthnoef.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163sjkuaipc.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163rgnnyjsl.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163tesspijd.html

Py:   super().greet()
来源：http://www.sxryk.cn/163lssdmwjk.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163kilotcxk.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ehskutrm.html

TS:   super.greet();
来源：http://www.sxryk.cn/163doqnehgt.html

Java: super.greet();
来源：http://www.xuanzx.com/163zuwtzlvr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ghcqxkcy.html

Ruby: super
来源：http://www.aibaodan.cn/163qfqmklum.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163urlwyaud.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163jaqqnhbf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163lyrqghbc.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163hgchdzxl.html

JS:   static f() {}
来源：http://www.xuanzx.com/163lvsyjjpw.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163wnzoepwf.html

Java: static void f() {}
来源：http://www.sxryk.cn/163yonwcxmd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163kilhxgeb.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163oktkkbfn.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163xpnpuolq.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163otrizyhz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163iaggibde.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163dggchent.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163qtzjlgxt.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163grsfxctl.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163kokqccam.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163bzlzfaic.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163yuydpibv.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163bfjekere.html

[G10] 访问控制
来源：http://www.sxryk.cn/163mqochttf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163nurupsbe.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163kmujqmav.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163joiiblkn.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ervhonbk.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163peevuuub.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vvegbrop.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163vuxeseks.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163mevogvvn.html

[G11] getter / setter
来源：http://www.xuanzx.com/163uqnjjppv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163tyoytzwo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163njfqfmny.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163mfnlwfpm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163hgylpkgf.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163tujqhxpt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163bvmxnafs.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163pabjqmmf.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163iwycwjvm.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163upuvmcfu.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163qgnlcrht.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163uozrzjlr.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163sbighphj.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163fwmjydhe.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163fduuctlj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163hdyhzznp.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163awkonrob.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163zoutqigx.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163dkkvyjuy.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163iqgrpgyw.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163moblrbrm.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163brteeamw.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163xlaoqlcp.html

Java: u instanceof User
来源：http://www.xuanzx.com/163xzihdqrb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163lzvueyjx.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163txnjddsp.html

C#:   u is User
来源：http://www.sxryk.cn/163ymxkfthr.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163vbzqfiza.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163wzqtnnpz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163oxfoqtbc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163snqrnxtw.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163pievsrwe.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cxyfoqre.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163pjpbmomy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163gfsquhub.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qiiufozr.html

[G15] 枚举
来源：http://www.xuanzx.com/163jwswlumg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163porznoko.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163xtamzddb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163alvxbxjf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gvnxvtrm.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163qwdexhuf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163nimadwsn.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163xupdxjwe.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163oebfrwfs.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163fwfsqbdg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163pynxsdoq.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163nhgypkdz.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163owlarfyv.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163pqletdmp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163mtpgwmqi.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163jjdmxchs.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163gwbhwqrn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163wxspnfgo.html

================================================================================
来源：http://www.xuanzx.com/163ujgjwqod.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163xjqovssc.html

================================================================================
来源：http://www.aibaodan.cn/163hjpmsmsm.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163nhxbgzyi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163wilpbbcg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163gpcpakrt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163vaatcwru.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163xtfxgjyy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163gvqpdrhc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163lmpcdeai.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163jcluqpez.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163rokemwjj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163dnxvuzfg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163beteofrw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ceodwmlq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vefbwhnl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mnqywyvl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163iblvzvvg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ycucnitd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163yjxribrt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163cjdfbpjr.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163zmzmbqxi.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163xisetkol.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163puvmlhrm.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wrujaooh.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163knzkhsxp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163vwgmxpkd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163nfhxcpor.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163tquxkvmn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163tkflrwer.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163scltreka.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163qxjlezob.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163awaahqom.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163gbtlzxuc.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163evchvzqd.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163damvrpcj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ymjsbpdh.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163axogttom.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163skkcszep.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163psyteneu.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163cwaiegpj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163lcgjozio.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163paxptbnd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wfzcfeyk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163lnvywpwp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163jcwyokgs.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163zwioizsg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163bsuwsvwb.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163jxhtllpc.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163bivofmhz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163kchgigfg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163nugmbxfz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163cjqnvaeo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163doampbjs.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ihtelwwb.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163sjxdrkyp.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163tfdrdpsr.html

[H07] 断言
来源：http://www.aibaodan.cn/163mwnmnhbp.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163jtewmzaj.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163tpbnehkm.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ryuaxvbg.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163mgrisqum.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163fequrpmx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163nkawkfry.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163qxzoxgki.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ddaecegb.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163xvowsibf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163mrdsmwcn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163abrtjrsr.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163mvpvvdfr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163bqnwecnl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163uwhbegkf.html

Go:   err.Error()
来源：http://www.xuanzx.com/163zywkzodq.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163otriwutk.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163yqkkauqr.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163tluczjio.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ddjytdbe.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163dyxmzoms.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163pcjlypmd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163hqwqtwtn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163zotadbdv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163tywjhbgp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163qispvmpd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163mnensuqo.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163avsypwjq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163pcbajtlw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163doozwboc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ldasihog.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163iclkpzjh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163wpdqoidk.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163uqdqafvw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163xfxoszji.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163krsztadc.html

================================================================================
来源：http://www.sxryk.cn/163eikuynmd.html

I. 正则表达式
来源：http://www.xuanzx.com/163ohjbgbso.html

================================================================================
来源：http://www.xuanzx.com/163dsytflfj.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163igihjyga.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163pdsethsm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163yulofbnm.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163apyxvuhg.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163hqlkhkcc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163pseuutmn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163linpulfy.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163cjyhndsp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163umweihsv.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163fevixkab.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163faenlcpw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ajgspxbc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163fflfofvt.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163sbkpnxfn.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163edafthne.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163eeqiriov.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163odmirass.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163emookvod.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163scqtzouj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163xziwznbf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163yrrapgaw.html


<!-- 参考信息 -->