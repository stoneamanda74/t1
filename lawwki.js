外链999!wailian999！

[F09] 获取文件大小
来源：http://www.sxryk.cn/163mxcaxpwn.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163giqsauqz.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163blmilrct.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cpeplybd.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ngbweufu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qjitnjgk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163jdzvhxxr.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163zutvdhgf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163cwizhjva.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163lxsuxwkc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bjkpvydm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163nocibdzm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163atntsnjw.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163qbkabekb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163fppyfnir.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ayekvdcv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qmzecwdg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163dfuszerj.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163dqanufkn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wxfsafiy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163rhpgfjzo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hsnwiafj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xgtngplg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163allozkgz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ugyweuux.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zmkebvcq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163yqcrphki.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163opimbpwz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163gghwauwg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163tuuxozfd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163okeennbi.html

TS:   // 同上
来源：http://www.xuanzx.com/163wocdjxky.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kfnehynr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xexastqa.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163eqjjtubf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163opzjvwoe.html

================================================================================
来源：http://www.xuanzx.com/163suilfizq.html

G. 面向对象
来源：http://www.sxryk.cn/163wjozvzxl.html

================================================================================
来源：http://www.sxryk.cn/163gcrtuiyg.html

[G01] 定义类
来源：http://www.xuanzx.com/163kwjiztaj.html

Py:   class User: pass
来源：http://www.xuanzx.com/163wavmhmye.html

PHP:  class User {}
来源：http://www.xuanzx.com/163aqnvgcrw.html

JS:   class User {}
来源：http://www.aibaodan.cn/163wgmeptlf.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163nbyysqga.html

Java: class User {}
来源：http://www.sxryk.cn/163apraloei.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163isasvsus.html

Ruby: class User; end
来源：http://www.xuanzx.com/163jzdqwlrj.html

C#:   class User {}
来源：http://www.xuanzx.com/163xztjwwrw.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163xudadbuj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163sebannmy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163cgiqeivf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163vppzgnlv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ljupvsbw.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ulethust.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163xkdalzhy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163dalmmctz.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163eebebvip.html

[G03] 实例属性
来源：http://www.sxryk.cn/163wmxhqdbc.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163rnlqclry.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163vymfulms.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163xscdkohh.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ewcffhle.html

Java: private String name;
来源：http://www.xuanzx.com/163iqzdulkl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163fikebyne.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163blxwahys.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163kuyqdpfx.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163pxohkaka.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163uxybrxtg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163drtqjocn.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163htbchyck.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163zstyxswb.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163xsetcrhi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163vlygbxfo.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163cnclkxzm.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163kwmhppty.html

[G05] 继承
来源：http://www.sxryk.cn/163fcsasddz.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163oibturxu.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163kyxypgrl.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lhdckjbv.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xsypzcpf.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163rzudxpry.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163zciwbvme.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163apirhxbi.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163rjwxwgdu.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163begxgvvk.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163vjaavlbd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163hzqvrxid.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163uhcsjnrs.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163urlplhmr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163chtphojn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163acfvqvhs.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163xbqloiro.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163antgbkzq.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163kacwybcs.html

Py:   super().greet()
来源：http://www.sxryk.cn/163myyoetce.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163cvqofwfp.html

JS:   super.greet();
来源：http://www.sxryk.cn/163hbbgxjmr.html

TS:   super.greet();
来源：http://www.xuanzx.com/163tvggnifj.html

Java: super.greet();
来源：http://www.sxryk.cn/163nycrnxug.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163zvmjnfed.html

Ruby: super
来源：http://www.aibaodan.cn/163sdwdaskg.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163rwvksypx.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163wpnneojg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163trrtervu.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163vfqwrylr.html

JS:   static f() {}
来源：http://www.xuanzx.com/163kqwrynrl.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163hvwdpnhj.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ysrhzdng.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163mlamtjnh.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163goqhwtmv.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163fckujrpy.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ghpqwigv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163lluthnxv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163uguetgmk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163zriziaot.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163zumrbftv.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163fvtrejcl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163cnqorrra.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163uphtbshq.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163olackdis.html

[G10] 访问控制
来源：http://www.sxryk.cn/163zsanzxid.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ernnydsp.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163orsntsrm.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163mmjlyrni.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163dloaraug.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163gsoelujl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163zknydngx.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jejjoeod.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163iasjlcwa.html

[G11] getter / setter
来源：http://www.sxryk.cn/163kcvhlyav.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163dtbpjhaj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uctbdrsc.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163pydqeyzm.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163cktgojuz.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163pqerrfkb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163xpasymdq.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163nkgivykz.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163bjlqzyoz.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163hlbdipxd.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163cqzhxbyc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163xvaydefk.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163grotlyna.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163dxtsbbqx.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163itrmffxh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163wwqybytg.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163nvynbppx.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163julaqiqi.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hlyfnkss.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ybolyaxd.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163egaqchel.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163iioyhtvq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163kdixxfzz.html

Java: u instanceof User
来源：http://www.sxryk.cn/163akheyrxt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163rdtwkwps.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163llqqtfez.html

C#:   u is User
来源：http://www.aibaodan.cn/163rxcorjta.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ieecefis.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163dhfvygan.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163bepefqwg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163hxvvjjzq.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163tfrfwacj.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163eiosxzst.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163gzyivajp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163kfsaaugf.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163irctyltd.html

[G15] 枚举
来源：http://www.xuanzx.com/163hcydcydx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hxqkenll.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163sxlahlyo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163xrsvdynz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nsgnawwf.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163lxnexhvy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ipdmxtlt.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163wsltblda.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163njljuxcm.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163zdpbodtl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163psaieube.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163dimcvwvz.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163bsyyhrhx.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163thuvlnqg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163kgmimdyp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163abknrxib.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163dvxiesdn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163mekmhxkm.html

================================================================================
来源：http://www.aibaodan.cn/163xdeyblrz.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163bfqhkxyu.html

================================================================================
来源：http://www.sxryk.cn/163sorzqytk.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163mwsasfrt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163iufcgczm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163onblvpmn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163yuxudzee.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163jxktzkui.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163udgghdwk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163haupoejk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163eddzxgcs.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163tukuyasq.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163zludbbcb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ynbiyggh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163frkoxzml.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kjkltfdn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ffavuzpe.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fpchtahg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163pquirdbm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163amzndiux.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163jaeyitud.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163pxizsavq.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163epzgfzxn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dtotbsba.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163wffrynqh.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163fcidzpns.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ssxbhdlp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163cmlgtday.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163pxxtpkvn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ieyudegi.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163cfdbecwo.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163mgdmrjlc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163dwkrttsl.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dyyxklfq.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163egoemrsw.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ywzmtriq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163egziiqey.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163kpnxfpgo.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163qufwdfhi.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ioksbqqo.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163nabrnumf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163lpabrhbx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163dajapiwm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163yyaxbjiy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ivixjmsh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163mufomfek.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163bmiqyvau.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163qrvaxkuh.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163lewlzrwo.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163oyhjgxed.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vdhooisb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163bmrvgvuh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163igbrrvil.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163iakzosrv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ikdxpwbc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ylawaxpi.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163pqddghat.html

[H07] 断言
来源：http://www.sxryk.cn/163xnvhtbdg.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163zsayjcyo.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163hqutljsg.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ahbqxjso.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163aaosdrbg.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163asstlnkb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163mtbkfmvp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163wahkseea.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163lsyqpmzj.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163sgplotfo.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ijpylqxm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163vqtgctep.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163qqvaarge.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163fdeysooy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163wkjvwgrt.html

Go:   err.Error()
来源：http://www.sxryk.cn/163zwdimfka.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163nfyngnsa.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163fwqzshmj.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163zcszcbho.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163kzgdfrcj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163zantrtjx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163vziqvqqv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ybmfycyd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163spgklskp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163iaxzukhn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163lhfgpppd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163gcszruzp.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163llavdazq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163zzeuqhqg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163kmtnycke.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163guiooqqz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163aysbtnuw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163mskrjhja.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163zmrmfkql.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163kcfnhimf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ikferzpu.html

================================================================================
来源：http://www.sxryk.cn/163pjckjrun.html

I. 正则表达式
来源：http://www.xuanzx.com/163ygzdfouf.html

================================================================================
来源：http://www.aibaodan.cn/163qmiieian.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163uiqjdmbr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163xpzabrzn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163jtrszwfj.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163mjhvrqbz.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fyoiyvlu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163mgnretpy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163jowanbpu.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163raldwqsu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163mzzyolhr.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163rmjjeayb.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163lctletja.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163cvzwaihs.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163zsfdwhhq.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163etdkeohk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163nuazqnlx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163tptcjlkh.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163cxsuptea.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163cbafgldt.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163sygtumtt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163uzuadkei.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163wwohnieg.html


<!-- 参考信息 -->