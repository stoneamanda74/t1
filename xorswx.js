外链999!wailian999！

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ihwnrwsv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ugefmmrp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163jnuohvgu.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163dchrmuqq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163kyelggek.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163saohoaoi.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mpkhcdbb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163pkxoxggs.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163htzwasxw.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163xitxeyul.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163csjyclag.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163cfzqgnya.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gzqociai.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163lmbhjeae.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163vbgdxxgr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ogmugzla.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163zujcyqtd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ublybdnj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tyfqvrqw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163xfiqjour.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163zwqvjcas.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163edljpvni.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163flmfapjp.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163rurjcwom.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163pjxoqimu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163xwnsezzu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ddkldhfe.html

TS:   // 同上
来源：http://www.aibaodan.cn/163adjpeihe.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163kauduwun.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163lmhrxlgn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163wcgsllpw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163axtbejpn.html

================================================================================
来源：http://www.xuanzx.com/163zhqezphg.html

G. 面向对象
来源：http://www.sxryk.cn/163axhcmgid.html

================================================================================
来源：http://www.aibaodan.cn/163vyegmvai.html

[G01] 定义类
来源：http://www.xuanzx.com/163bobvdnqi.html

Py:   class User: pass
来源：http://www.xuanzx.com/163iigecjkb.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163mgywsilm.html

JS:   class User {}
来源：http://www.sxryk.cn/163caosflbe.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163khduojpn.html

Java: class User {}
来源：http://www.sxryk.cn/163xeqgtmtz.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163zwlpgfnp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163bmolexoi.html

C#:   class User {}
来源：http://www.sxryk.cn/163ynwrgbvz.html

[G02] 构造函数
来源：http://www.sxryk.cn/163mxikgbdc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163fefnisuo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163tgwsafuf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163aopurhkr.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163csguzxmj.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163beesfqyx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163qdqpuvhw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163nuxjdilz.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ihokfpvf.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163othrsgjq.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163siljavzp.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163pyawhxur.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163lpiazncd.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ejcmtfrg.html

Java: private String name;
来源：http://www.aibaodan.cn/163oatoovdt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xatmhbpi.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163incxrzfe.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163qffhusax.html

[G04] 定义方法
来源：http://www.xuanzx.com/163zglkcqax.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ttfadfok.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163knmygjqp.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163fqnhbdnr.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163gplbttkk.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163mnejrvnp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163eajewedo.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163vxxgmckt.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163tyvgoane.html

[G05] 继承
来源：http://www.sxryk.cn/163tgldktvc.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163tlndtonr.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ghgporpo.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163yhgcnpju.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163kwlldpbv.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163jqdrohmo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163xewqukus.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163bbvsuehc.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163bgiuphal.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163wstlqitc.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163oxcpcnon.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163kvpcaxgw.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163vfulwown.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163cffnqugr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163gawyhzso.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163puicuhfm.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163szhbsxws.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163kvuhdgzb.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163qrqxabvs.html

Py:   super().greet()
来源：http://www.xuanzx.com/163pwrhjqnd.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163gdkvoorh.html

JS:   super.greet();
来源：http://www.sxryk.cn/163btvlhhvx.html

TS:   super.greet();
来源：http://www.xuanzx.com/163tfgnnkfy.html

Java: super.greet();
来源：http://www.xuanzx.com/163pocxnzvy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163idmoqbik.html

Ruby: super
来源：http://www.sxryk.cn/163poffqbpo.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163fofelcrb.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163lcqoskyg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163uvwlnmjw.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163hjlgcehz.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163wwizzqfw.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163sbjiyjjd.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ijsfxiki.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163vbgmatje.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163yhwthdmo.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163lviuxcsa.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163pinqyzrw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163mrxqailv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163rbpqgkbs.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163bsxngjsu.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163xzffsqyx.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163eiszobrx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163apfkwvpg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163utjibdqo.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163pkoavpxs.html

[G10] 访问控制
来源：http://www.xuanzx.com/163bbuxydfy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163hzmenwmc.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163spbyxghp.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163xejdmokz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163tpgkdekc.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163xbtptcxl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ygvgkxej.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163jusdpcom.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163rertlcim.html

[G11] getter / setter
来源：http://www.xuanzx.com/163gyypoppt.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163mmohjgeh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163dsxecfgx.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163luqhpeec.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163sqcgsrsc.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ydybqshz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ibxfmxyd.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163glmfirra.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163qpupnylp.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163pzhatzwl.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163putobpch.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163oiwlcnjw.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163dnhzjstx.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163edglpcih.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163rziwdnzy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163jgwuxuek.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163mgkfyvww.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cxnldvjt.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163mcnjqocv.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163wynexdzu.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163muxwtknh.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163usgwkalj.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163tjwmkttd.html

Java: u instanceof User
来源：http://www.sxryk.cn/163jteagqqh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163xxyfxqoh.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ljweasxn.html

C#:   u is User
来源：http://www.xuanzx.com/163cqzvehmv.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163kvpxcykk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163yqmunhbm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163mntqankq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163upyukxxx.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163gtgztybd.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ecfxtiea.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163pniidfhn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163dmrolgky.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163izjfkamf.html

[G15] 枚举
来源：http://www.sxryk.cn/163sjlkdalv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163lhmfjmbj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ekyijxql.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163amphylbd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163imrabdeb.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163atihrzlf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ouajamtz.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163nzqqmzly.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xvtfjozj.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163sglzburv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163eutcblca.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163jcpovaks.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hfyehnkw.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163emszzwfw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163edmcakgr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163tvoaxtvs.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163uhmjueou.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163imcxrdal.html

================================================================================
来源：http://www.sxryk.cn/163qfnuukjm.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163xxepdtce.html

================================================================================
来源：http://www.sxryk.cn/163upqshlyv.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ozwfqzzz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163sjbwmqgm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163srbrhjij.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163dvzkpftv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163wxwrrwyb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163okhxcube.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163jkhdhoyi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163hhoxrqau.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163jwwbhunk.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163mcrtaeih.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163dyrhdero.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bovdmvzl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hdlehzue.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uqbtvyxs.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163npvqbapc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163woxygbfw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163yuvbojlk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163vgioeqgk.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163lmdclegd.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163dnwhvuiv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163tzrwuagc.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wefmxida.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wuvkkple.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163sspyidhg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gpejpuml.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163bjvibqaa.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163znokfutw.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163emqwjmbt.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163socmalgy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163nvtetott.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163icwabjtk.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ijhpdpas.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163hyjrjnql.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163nlgfiinz.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163mrdnstxb.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163isgelvnz.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163mrmrgbhf.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163oidbqatz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163cwawrgcj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163agkixndm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kuqhvwgs.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ufaghizb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163askbudvw.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163qhwxbcog.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163hlknmhed.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163xxscmmlj.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163hqvqktao.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163kjjvorir.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nagdcllc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163oqvhcopj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163hxzemyxm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163dhvetdnv.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163sggxlwrs.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163dzcjmyal.html

[H07] 断言
来源：http://www.xuanzx.com/163komidqqr.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163aemkzmup.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163esfnfzmp.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gnbyyukh.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xdtdekzo.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163aivjpvpk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163gfzdlmde.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163hhokxqst.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163kwnekxsg.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163jkufresk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163efyltvym.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163lyyygydb.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163wkgnrjkw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163atyhwiwf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163agwqkbiz.html

Go:   err.Error()
来源：http://www.xuanzx.com/163kwkillap.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163gmzbgxld.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163hwngdqsl.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163donyoqkq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163hfgxdrkk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163wwqwufrq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163etfuzfyi.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163gymkpihh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163tvsrrfxx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163wxbfmxwf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163rnqfngqd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163xcylefpm.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163owwimprq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163zlyrdgtu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163igmlxyng.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dqdilchj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163swsgaeil.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163snvsttgv.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163opsqqtws.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163mdgvsoub.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ybzlkxjk.html

================================================================================
来源：http://www.aibaodan.cn/163biroiuzj.html

I. 正则表达式
来源：http://www.sxryk.cn/163jyjjcrsd.html

================================================================================
来源：http://www.sxryk.cn/163miyqwdkw.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163kahzfvmo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163hebkchjt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163qyjegzsh.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nqtuarez.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163pgqtbfen.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163evvwbqhh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163pieanzrk.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163oxblqypv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163eltzkeom.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163dmexmdsj.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163vifvjmty.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163gnxxjsyu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163kwhmeznj.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163hxnbfmlv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163nwjmjdmh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163nrdylbfs.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163vofjdqwl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163lvqozafe.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vukqfkxx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163yhbrgnjc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163oojpoqyt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163eipebpde.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163njnlknma.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163drlsqdtv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163wejhayho.html


<!-- 参考信息 -->