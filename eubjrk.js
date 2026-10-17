外链999!wailian999！

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163utdzrkht.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163xmcfostu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vilqqbhg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163aoyuzsla.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hphdyvdk.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163dssumffi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163icsclkvg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163dumbpkys.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163njgfhiiu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163rdftwtue.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163olhrmgfa.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sopvxnts.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ajpvtttl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ncuvtymr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163onzxktnf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163wszlvbet.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163juxkntto.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wxityexg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ifrbcpoy.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163bgrnqpxc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163bbgquifc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163gjmxdnsm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163bbqpcuue.html

TS:   // 同上
来源：http://www.sxryk.cn/163aakvdfri.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163fwoakarj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163gpovgpbb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163qtevobki.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163rxrxuqai.html

================================================================================
来源：http://www.sxryk.cn/163iaafnppv.html

G. 面向对象
来源：http://www.sxryk.cn/163bdjdzbmr.html

================================================================================
来源：http://www.aibaodan.cn/163gnevalvj.html

[G01] 定义类
来源：http://www.xuanzx.com/163tqxjeuxq.html

Py:   class User: pass
来源：http://www.sxryk.cn/163nhujpdqo.html

PHP:  class User {}
来源：http://www.sxryk.cn/163qfgaxsrl.html

JS:   class User {}
来源：http://www.xuanzx.com/163fcxywzur.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163utokyzuq.html

Java: class User {}
来源：http://www.aibaodan.cn/163wdxqbvsb.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163mlxkyaoy.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ydylpijn.html

C#:   class User {}
来源：http://www.xuanzx.com/163udxjzxyd.html

[G02] 构造函数
来源：http://www.sxryk.cn/163pglbbppf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163pqdadwhs.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163hgrgkxpm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fcwgccdy.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163nctbekvo.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163mszxpiyt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ifrbbjjp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163dhqzjfdi.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163kyhbcuel.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ylifbflf.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ortvpnwo.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kgisngym.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163sysfjzln.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163jlxatmyu.html

Java: private String name;
来源：http://www.aibaodan.cn/163wclwpbyr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163jjyrapsy.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ymiwjziq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163dbkzuvmo.html

[G04] 定义方法
来源：http://www.xuanzx.com/163nswtrsvm.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163nhqnfxyw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xxhrbxoz.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163bjfqgwvu.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ygublnul.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163nweqqexa.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163cfohultl.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163avuvhnpj.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163beqtknbj.html

[G05] 继承
来源：http://www.aibaodan.cn/163qpdojvxb.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163hhkmpbkf.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163fskybdso.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qlausivs.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163sxbxevsr.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163mojdlvem.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ntcpayhf.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163dfohhwbh.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163vkmpnvui.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163gcxajoxi.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163yyqfzwkv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163xhsuctsk.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163vfcfihoj.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ejzhziyo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163wrplvcag.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163rvrmnzxa.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163vhzehlqs.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163mhzpxqst.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163hnehgbkw.html

Py:   super().greet()
来源：http://www.xuanzx.com/163fxkqzdpy.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163uarrksss.html

JS:   super.greet();
来源：http://www.sxryk.cn/163gwcxcbta.html

TS:   super.greet();
来源：http://www.xuanzx.com/163hxzpsivl.html

Java: super.greet();
来源：http://www.xuanzx.com/163hjazadix.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163jwcsbigo.html

Ruby: super
来源：http://www.aibaodan.cn/163zplrpapg.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163rkvdglfh.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163kbxmcfpm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163jfmtxlqw.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163odxvcvql.html

JS:   static f() {}
来源：http://www.xuanzx.com/163pxxbyuth.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163cvogdqlz.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163rkajykhj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163kvqgfojc.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163hkyiholi.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163uockuajv.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qqgrgpcz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163fzxpuyph.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163fspchqln.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163swkjhewc.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163tjoylflm.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163hvitchbo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ixmcritg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163lfmyghqa.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ijdgqkgc.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163nanzizxl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163khnzoirt.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163vvlmqcje.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ofivbnbz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163pmhecpky.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163nrldhuei.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163gminfcuy.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163rzihwric.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163dykktgdb.html

[G11] getter / setter
来源：http://www.xuanzx.com/163raiymcry.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163yanhogej.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163qnpqnzer.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163cjqcgjgi.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163zpdjpwlx.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ijdrwrfh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163wpabpxic.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163lfeflodk.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163asidilyb.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163xjlwmeky.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163cbszxpaj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xoxmtbdq.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163uumtqjqa.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ltkpevxe.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163bkpucuww.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163jfefcifx.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163hlsqfzqm.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163okvbjfuh.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163bbdjdllj.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163jmmwcmkz.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jdhedvgv.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163vybrnwwr.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163hebtrhsm.html

Java: u instanceof User
来源：http://www.xuanzx.com/163phqfncxu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163jpxwgccb.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163qxhoslvp.html

C#:   u is User
来源：http://www.aibaodan.cn/163rhliqbxg.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163gurqluym.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ysttswst.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163iepgitxl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ntphhrif.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163wfovwhoc.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163qurbqsfo.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163akpjqbfy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163lasicppo.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163jmlzsvxq.html

[G15] 枚举
来源：http://www.sxryk.cn/163xmtfymzx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163wijztxxx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163tgftzgzb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163kcdjmhhi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163umbavdlj.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163bvwiuwiv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ecjndvra.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163phcdccej.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ysjnlhyf.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163krqggeck.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ygiqjdkf.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163mshsdtvu.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jruhknce.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163bnoloxca.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163llwtddru.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163qcxjcyng.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163hpajndjv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163icowvskv.html

================================================================================
来源：http://www.sxryk.cn/163dvzczpom.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ykhlseed.html

================================================================================
来源：http://www.aibaodan.cn/163fupdbkas.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163furbdrsx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163xtsjqkod.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163uznwklgr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ibbonlhe.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163tlxbrsmw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ufzqxwzy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163uowxulif.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163dgagryma.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163yewouuuy.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163jkuvpqjd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163wiyewzhf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163acldnrrs.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163eamladjh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ukuxaqrl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sjbalqdr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163hejoiyxn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163yjpberkf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163zhegxpqk.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163mshcmwkk.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163vqnhamqx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xuwawixb.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ldyfcbqq.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163trqztaxv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hqjefurf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163dvgdkced.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163iybrooaf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163gappydvr.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ozktkygq.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163vxudvdxz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163kuxlrwns.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163nakqxfeg.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rtsgymdk.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163patcfnhq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163mrerhbdv.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ixdoausk.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163rmdbuzet.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163puxmwsjc.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163jvzwgcow.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163jfdvagpm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cfyaapjo.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163eczpovdl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163jyzxhxor.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163nlsbhuev.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163otuvmpgh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163vyjztoec.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163uzzwimob.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163xddmeqrw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163cecjyner.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163snwsbnvy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163anokprlv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163akpckvea.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ejpknzad.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163bpzzvjbw.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163mzpmdiks.html

[H07] 断言
来源：http://www.sxryk.cn/163umziwdwc.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163zmkrnity.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163qhzutlgf.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zbawjlhk.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163psekoyav.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ltcmnkjt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163nskghxuz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163eqbhtuoa.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163bpcknfqa.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163fbfhymkm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163fuaeihjs.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163gqnihrlc.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163mzsslbiz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ivgeymrl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163mfmtqhfm.html

Go:   err.Error()
来源：http://www.sxryk.cn/163rlhxkngi.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163dscrryit.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163mukviltt.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163xbizeuqf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163hcwhakav.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163qbudlzrg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163fmiyshnj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163rbdzcjkj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ztszxszy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163fbnpdyyt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163atuasrrf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ppkxmnrj.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163nwegdbhr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163gnuvnnot.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163kheddkdj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163akspxcwn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163legxgyiw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163oipeynps.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163lealvnwv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163rzqkidmt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163xnleuysf.html

================================================================================
来源：http://www.sxryk.cn/163icbmitcj.html

I. 正则表达式
来源：http://www.aibaodan.cn/163zkbtittp.html

================================================================================
来源：http://www.xuanzx.com/163bdsmttpb.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163hbdaeidb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163fuholewj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163gjplpaji.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163inehsbpq.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163biqqubiz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ftmlbsca.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163wfwxqxjh.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163udsujvkh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163aqgjhnjx.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163mrjosdkl.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163tmydjdlp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163wsooikvw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163pgxnruez.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163lvvnpypj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ciprcrcr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163klbclwur.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163vtproddv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163zayrbfan.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163gndclnhu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163rmjlnqvm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163nedudnhj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163zrftgvll.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163kzpwjxue.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163dfknyuxz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163yldcsrcm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163frkzmjpe.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163pjgjcthp.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163bzcesmbg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163jfoqbkza.html


<!-- 参考信息 -->