外链999!wailian999！

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163wfdhzpbh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163iohykeia.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dhxztvrz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163cqwkbijq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163aleglcvj.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163qwrygync.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163dejdcldz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163iclrkacl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tvcxznpr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163fnqtvmim.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163eycbvfue.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163anjwhtsg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163hhjcrigs.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hqbxivja.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163aipmlnna.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163fyjajvic.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163hlfvzujh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163iqkpbfqy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163fgjjluxa.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ohuwvfpb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163sifxmehd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163yvbwjioa.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163siadeitv.html

TS:   // 同上
来源：http://www.sxryk.cn/163pefvuiec.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163phoaqakl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163dvxdrnvy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163nibbkgta.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163lvxgbbyp.html

================================================================================
来源：http://www.xuanzx.com/163asebzycd.html

G. 面向对象
来源：http://www.xuanzx.com/163ejlnqdtf.html

================================================================================
来源：http://www.xuanzx.com/163pagobvso.html

[G01] 定义类
来源：http://www.xuanzx.com/163pomoyaku.html

Py:   class User: pass
来源：http://www.xuanzx.com/163rdwhrfvg.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xtkmvzrl.html

JS:   class User {}
来源：http://www.aibaodan.cn/163slxswkdv.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163cgzvfcuz.html

Java: class User {}
来源：http://www.sxryk.cn/163qpalfbzx.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ntljgipp.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ntkjzogg.html

C#:   class User {}
来源：http://www.xuanzx.com/163lznttwfr.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163qltryvvx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163yfynwzag.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163typhtghg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vjmvfujw.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163qwbuzwho.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163rwktaqzl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163rabyptcn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163yfdavhnc.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163pxgsktab.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163mlwjdxii.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163abtjmnpe.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163sibhcepx.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163otlrmski.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163cmlyxxqn.html

Java: private String name;
来源：http://www.xuanzx.com/163wakyfewm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163rrcrprij.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163pwvhvxac.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163pzajthol.html

[G04] 定义方法
来源：http://www.sxryk.cn/163avfrhnuf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163suepcoqy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ggzlxlhl.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163srlywoju.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163sphjpazb.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163qfkslnvh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163unhqoocm.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163arcqirvg.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163rqunyrcd.html

[G05] 继承
来源：http://www.xuanzx.com/163suwswetm.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163mhczfcyh.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163tddmxcwr.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pkcmxnfn.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fgxuthir.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163kmphsquw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163sttwrkpw.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163goaftphg.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163qzffqaww.html

[G06] 重写方法
来源：http://www.sxryk.cn/163cluluspe.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163qomnuyfy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163rjqjoawj.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163qyvdfydf.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bnkqtmpc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163yceczkao.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163jfsqbuzc.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163objmbman.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163jjenzkfm.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163qpyhkfvv.html

Py:   super().greet()
来源：http://www.xuanzx.com/163rpthkhwf.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163mnpswtce.html

JS:   super.greet();
来源：http://www.xuanzx.com/163xekqmcqf.html

TS:   super.greet();
来源：http://www.xuanzx.com/163dlirfdbv.html

Java: super.greet();
来源：http://www.aibaodan.cn/163lavqovxp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163dlyhpwxi.html

Ruby: super
来源：http://www.aibaodan.cn/163hqmecfxv.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163dmhuykvx.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163hfhnvrww.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163tteevvmh.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163wspilrkv.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163wtmjoinh.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163fmjdbocy.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163tdjiaphy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163tiowysvh.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wabsxfwy.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163nwinjmig.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163xeigirkk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163bortghjb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ehdyyxhk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ltpqrujd.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163nndnumyo.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163srbecnll.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163aevmgjki.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163wutgrpxv.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163lfuatusr.html

[G10] 访问控制
来源：http://www.xuanzx.com/163xmnhslln.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163cgxjnujj.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163xvrmbpjv.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163qhiajvqy.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163toskldiq.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163tbostffs.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163hrhgcbwg.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163bmfzyaqd.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163guaooutq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ojfkyjca.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163irimdzap.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163rhxfusid.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163patdgvbc.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163rlevwyfm.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163kebvzkej.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xwggomlo.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ivpkadgu.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163wbrcoanq.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163mnfrnbou.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163zxjvgjrb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163xipfktka.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163xryanffz.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163tminorqv.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163qnjpiggw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ofedrdif.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vclxwrft.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163hsutaatz.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163dqbbzjtn.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163jyhsibdo.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163yyzalstu.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163wxlodajv.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163pjibdovu.html

Java: u instanceof User
来源：http://www.xuanzx.com/163nhdobqdf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163gvpesaca.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163lycgwnfw.html

C#:   u is User
来源：http://www.sxryk.cn/163njxytqjg.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ypjspdov.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163yjtaixki.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163cepnikoi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163zxcwqiry.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ptlszvke.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bvniazlg.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vyncblag.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163kissdjqu.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163nlqndfxt.html

[G15] 枚举
来源：http://www.sxryk.cn/163dwfpuxqx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163onepzofr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163khmsrlgr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163mlyelhcv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163canwfdoy.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163tkeafmvu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163kgtxufpj.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163rjeaepcu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jjcqoqck.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qsrbfgjd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163xpvgpafb.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163aczslphx.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163cukbqjdx.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mqmjqabg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163wdknmeka.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163pidiimou.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163hjbbgyjg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163wpoigsxo.html

================================================================================
来源：http://www.xuanzx.com/163tdxdxowd.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163cghcwcvn.html

================================================================================
来源：http://www.sxryk.cn/163xabujvct.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163dicacbny.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163nnvbwwrw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163alzganvb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163quqnuujh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163azartrfc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163lmroybdi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163vqbnfmmw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163zuawkigs.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163wfmnfaox.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163apqylmzp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163dwayqnfi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nxjuxfyj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uuqjqglm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nflcmkzl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kqcjmpjx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163wlogabgw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163wogrecen.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163vbzdapqb.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163wtynwacv.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163fefffggb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wedxgiog.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163okezcazt.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ezjltqkc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163zrjstjzj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163uletupqd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163wqzusyoh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ojmyggpc.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163xdgvyqio.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163sejjqtzz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163piokgaqu.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163voiwtscg.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163anbclktc.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163tddbwpof.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163wbymkflp.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163apgkbsgz.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163nbtenmih.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163peytdzhp.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ulebspsu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163cvnvkyjf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vyszpaaw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kwkuqije.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163kowlchpm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163wuqqppff.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163sfeydejv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qebtryaf.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163zqwxsrdq.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163jyvmvzdj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163zdvkxjve.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kexzkiad.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ikogmiyu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163uolcwngc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163jjebargq.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163oevvmyrh.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163qeltslap.html

[H07] 断言
来源：http://www.aibaodan.cn/163bvnuztvt.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163zgyosste.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163kxfvgoff.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rxnfgrtx.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163omeapoqk.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163sxoyxdpu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163iepyxrbo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163nlsskxcx.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163pvtpapfd.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ocjkrdwg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vozszxis.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163qggbasae.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163vbzfvqrh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163pkwwgmtl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163xjixqgzc.html

Go:   err.Error()
来源：http://www.xuanzx.com/163inknsycw.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163rquqtygn.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163zyilqtvv.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163vknenomb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163pukavdkf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163tweiwnos.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ffpnjowf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163xbivjtsi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163cphtbozk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ykfsgogb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163hkpnotax.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163rgharvac.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163rmylycxz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163qqozipob.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163pkymzafu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163uadzcoah.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nzkrvacq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ouvhpyls.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163qfpuylks.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163obclajhg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163tetqmiez.html

================================================================================
来源：http://www.sxryk.cn/163inuwqlzc.html

I. 正则表达式
来源：http://www.sxryk.cn/163xcztbgps.html

================================================================================
来源：http://www.aibaodan.cn/163vqdukvwe.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163bklzgdrr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163pyrsaawl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163yxgezfte.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gndnvbyl.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163qcwlaejq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163swyzfqcz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ajxkisod.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163kpbwvybo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163jvcqfhhr.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163wafalrsu.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163tqtqrxiq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163fnxvqrqt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ewhyesxr.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163iwomcebw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ossbynys.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163wgafmwma.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163yzsakvbe.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163hrxkbfeg.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163xxskqlqx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163wmeycbtb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163xwmigpje.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163otphilxa.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163shncqkqi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163wuijxopa.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163vguekwnk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163xtjizbfk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163tpvgzxaa.html

[I04] 正则替换
来源：http://www.xuanzx.com/163vwjwslkw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163oqcfvres.html


<!-- 参考信息 -->