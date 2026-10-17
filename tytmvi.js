外链999!wailian999！

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vwqybhjp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163azgmqaha.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vgvkjmcn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163esboglow.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163cyzpbmwp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yfzdjojq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mjprsrxc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163vyypqmtn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163vnrwiuco.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xlfgxazn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163iilxtkmj.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163podimhzn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163vlwlzvol.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163xourjdeq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163inlebqca.html

TS:   // 同上
来源：http://www.xuanzx.com/163adndkuut.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163dshtencu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163dsdnuzcx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163orijiprh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163gezbdixg.html

================================================================================
来源：http://www.aibaodan.cn/163eozadran.html

G. 面向对象
来源：http://www.xuanzx.com/163ejmjxpci.html

================================================================================
来源：http://www.aibaodan.cn/163ghhnclgt.html

[G01] 定义类
来源：http://www.sxryk.cn/163itiejoaz.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163xedsaccx.html

PHP:  class User {}
来源：http://www.sxryk.cn/163mqwnectk.html

JS:   class User {}
来源：http://www.sxryk.cn/163ruqchdmw.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163grkdbrcs.html

Java: class User {}
来源：http://www.aibaodan.cn/163udsymvkf.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163vkmzyscq.html

Ruby: class User; end
来源：http://www.xuanzx.com/163wuatzhud.html

C#:   class User {}
来源：http://www.sxryk.cn/163aqsxgkbs.html

[G02] 构造函数
来源：http://www.sxryk.cn/163stznflit.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163xzcfcbno.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ytguhdii.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163begxxcxu.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163mbhunpll.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163bhfdwsfr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163vogopeyo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163mbwcamqo.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rlcmdshw.html

[G03] 实例属性
来源：http://www.sxryk.cn/163btekaxgn.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163jiuekzhw.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163zjdvejvg.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163bzezfhlj.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163qbljfjtg.html

Java: private String name;
来源：http://www.aibaodan.cn/163cbydcykr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163fvkvomow.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163efkpjiwi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163fltnghix.html

[G04] 定义方法
来源：http://www.xuanzx.com/163hlrvoegb.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163shwffzvv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mlndnwew.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163nsxgoult.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163uaezugem.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163hjojjfps.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ragpdssa.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163bmxuiyhw.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163lbglcceq.html

[G05] 继承
来源：http://www.aibaodan.cn/163bytpzesk.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163lubjqyng.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163xoxytxpj.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wvizprgv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pdrliatq.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wspmynxq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163mhkuhrzq.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163wqxvzrvb.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ithkgctx.html

[G06] 重写方法
来源：http://www.sxryk.cn/163nwlwdzvk.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163innwakpe.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ibwjcxdb.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163aucyzfus.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jqndqere.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jvmhdpaq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163lwvrrilg.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163dlgcxoli.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ttjpdqzf.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ylqkwtlw.html

Py:   super().greet()
来源：http://www.sxryk.cn/163sxvoexyv.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163rbmboebz.html

JS:   super.greet();
来源：http://www.sxryk.cn/163anhymgjt.html

TS:   super.greet();
来源：http://www.sxryk.cn/163wvglptod.html

Java: super.greet();
来源：http://www.sxryk.cn/163sjxlicfb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163llyrtelw.html

Ruby: super
来源：http://www.xuanzx.com/163dbgeeejx.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163vncrptkt.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163lzlxfqwy.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163xepezuyt.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163wijwtxkx.html

JS:   static f() {}
来源：http://www.xuanzx.com/163sxewexkh.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163mlatoccw.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ixbjkpbl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ronfjdiq.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163bbfkmvrs.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163cpesofpo.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163mwvkyvmj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163wdmkzjfm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ufsvpscu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163neticuqy.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163holakziv.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163fpvkgjld.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163irtdadus.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163klofkjql.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163kwabhvvw.html

[G10] 访问控制
来源：http://www.xuanzx.com/163nhydebqk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163anfpbkur.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163coqyuphe.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163uihmulpo.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163bnwrzlxu.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163clqztvxd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163nzgjqlwa.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163zpoaujtv.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ukmjkopg.html

[G11] getter / setter
来源：http://www.xuanzx.com/163gvcergih.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163shbxlqzy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163sevbeute.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163gzliqoaz.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ylrmxzhq.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163dgvajtkd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163joanpuqg.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163nphdgvdh.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163xnwaduhg.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163qdncoyqa.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163uhhuuybe.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163eavfgmya.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163regnhhan.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163bihjxmsq.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163olczcgxr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163wcdnyyho.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163uxtdgith.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163eokpcsok.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ivvpjddk.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ljcdspwz.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163mjdcsbwu.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163vbngakkd.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163euidukze.html

Java: u instanceof User
来源：http://www.sxryk.cn/163skoxqjxr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163myghkdze.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163qlybdsxk.html

C#:   u is User
来源：http://www.aibaodan.cn/163ezbvcdvo.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163menmvrdd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163xtnkkrdd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163qsvhyttm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163lovkdaka.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163vfzdeiic.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163yhamypno.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163bfoibizg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163dhkogqke.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163yxbizdwu.html

[G15] 枚举
来源：http://www.xuanzx.com/163phkobhln.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163kktluaus.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163osuidnbh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163gjrzagld.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vkhkgjnn.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163qwsswabv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163hsoubsgj.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163mzhbnbxu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163qzhtlzvq.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qdmlqhgy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qgkzplif.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ttzupsoq.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163flqftiyl.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jgzxhgwe.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163rawkiimn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163mnowiudi.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163rmqmktiu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163tdrdjnlu.html

================================================================================
来源：http://www.xuanzx.com/163eoqmirru.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163pevbqcon.html

================================================================================
来源：http://www.xuanzx.com/163qexlqbgj.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163kvctzfde.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163udwbwpip.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163lojopkyz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163kokselnz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163bzvlrhvm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163kkatczpt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163tjbtgxip.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163tgiwuxvt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163pdhvfyvh.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163kmgmmpms.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163zvkkhmsv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wiavqmsl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yvukbhzw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qchxihor.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163svkoplsu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163xeeljxhc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163nucgduwb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163upkihfjs.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163jqjycdlr.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163uqlfvztb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163gtmahycn.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163sziidqow.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mrprmxlx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163kopuuwkg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163yilzjhqg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163uszproyc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xtbnqxax.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163gqqnwcxr.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163amaznfnx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163cevaabul.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163mmyxswlp.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ecunijjv.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163nurodoaq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ukwpuisu.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163akvyhgja.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163tfoubwad.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163mwqyytvj.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163qcmfsmat.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163onffivkv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163hstnjhfm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163crrhpxou.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163uaxptztf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163adkxquvj.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163xgsjdqcn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163xzhltjxc.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163cldhmzga.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ikaebxob.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163hvouzcsf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163uqfenukm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ltmgcdty.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163facsqctv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163rogelpez.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163lskqtqcm.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163pjojnekh.html

[H07] 断言
来源：http://www.sxryk.cn/163sdwrymgc.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ccbihgtj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163yjcwhzop.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pixmdwky.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gyrsfbac.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163oialkyop.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163yqxjixlg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163vlpsbjkf.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163yjsvsozk.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163fpjpehaw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ufdpibqd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163pvzfgsur.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ovnoomlc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163qtfpunpe.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163dvhobwak.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163czyjsxxs.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163mjksqvmy.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163mmdbucje.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163snhrislj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163fauarqot.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163hqqpvyvn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163hziudjbw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163qdsxqdid.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163lnsocequ.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163gwgfyfwx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ejafuldn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163qcwnrrwe.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ziwqtzte.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ltfuhqwh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163njdgvfzh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ixevbpsf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163obtimbqd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163jqvxklni.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163cvqvcerp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163fixopput.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163cqzsrpnk.html

================================================================================
来源：http://www.sxryk.cn/163ynitcgka.html

I. 正则表达式
来源：http://www.sxryk.cn/163okzekebn.html

================================================================================
来源：http://www.xuanzx.com/163gfphgbom.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163bhnkdimi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163swoceift.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163rvemexzf.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rdatcnso.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ursaamuk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163jhugxrtb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163nquljwxd.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jgqxpxmq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163zwxotxtw.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163axiphhga.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163nebidhhg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163yajzjkmv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163bycsoslz.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ujtddwhu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163hbiqgcic.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163rhdfzvaf.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163utficmnm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163xgrtxjye.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163wvhomeuq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163yqnibyag.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163vpoizdli.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163gzhreqrb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163njhvjeym.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163dkqwhxtd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163rttldttw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163fjfgpsbq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163vonskjuz.html

[I04] 正则替换
来源：http://www.xuanzx.com/163mgunlwsl.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163nejpqqor.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163qvnzpyym.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cjkxvrjs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163lqaxmvmr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163vwswnrhb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qdvwqxst.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163xonfposz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163zxjjzwsn.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163orwmbgsk.html


<!-- 参考信息 -->