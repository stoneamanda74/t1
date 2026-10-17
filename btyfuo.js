外链999!wailian999！

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163vugsiycb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163aabcnqfy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163vfrvklhk.html

TS:   // 同上
来源：http://www.aibaodan.cn/163slxzczxi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163jyoxayqa.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ysercbau.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ojftclbi.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163dyollzva.html

================================================================================
来源：http://www.xuanzx.com/163sflewdry.html

G. 面向对象
来源：http://www.aibaodan.cn/163baiqxjms.html

================================================================================
来源：http://www.sxryk.cn/163cvwzjxfp.html

[G01] 定义类
来源：http://www.sxryk.cn/163zbtqzjrl.html

Py:   class User: pass
来源：http://www.sxryk.cn/163dgdaaymq.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163jhnsedav.html

JS:   class User {}
来源：http://www.xuanzx.com/163fnvjnvvh.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ibyubigz.html

Java: class User {}
来源：http://www.sxryk.cn/163lqrwjgge.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163cgwgkkip.html

Ruby: class User; end
来源：http://www.xuanzx.com/163hphrmqso.html

C#:   class User {}
来源：http://www.sxryk.cn/163ydjnvnfz.html

[G02] 构造函数
来源：http://www.xuanzx.com/163hncvhvvg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163aurjaygq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163npbhnmvz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ufzjfboo.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163rbmgwwss.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ideuoyog.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163puzbazhs.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163wjslyadt.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ipnwdbhb.html

[G03] 实例属性
来源：http://www.xuanzx.com/163pezvyglo.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163wfqupqnb.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163flpemyag.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163srbqxhve.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163mvmnrucl.html

Java: private String name;
来源：http://www.sxryk.cn/163xqakkvaq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ucxrweuk.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163bqumusbe.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163nkiaulke.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163navmayxb.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163znpccpou.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163pckuvyte.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163hphsbizp.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163tiikrhrg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163uvznzdne.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163gstlkkve.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163zyjqirtr.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163eumrcoof.html

[G05] 继承
来源：http://www.sxryk.cn/163yyofiidp.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163rnthcdkn.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ibrwijrz.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163dqpqbufv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mrjsgdny.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163yvhxqvwv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163fgmjexwx.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ywjnhmho.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163pqgpqqqd.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ktdyzxul.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163kwdggkrh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163wkftunuo.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163eykwsyki.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vaumfayv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163okksumxy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163zzuujohe.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kxrpsogv.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163fpmilcpq.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163xeiwlcbt.html

Py:   super().greet()
来源：http://www.sxryk.cn/163pyoipsbh.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163baopwgst.html

JS:   super.greet();
来源：http://www.xuanzx.com/163aznkbeeb.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163pumjijbc.html

Java: super.greet();
来源：http://www.xuanzx.com/163azjjyatr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163xryboulf.html

Ruby: super
来源：http://www.xuanzx.com/163nvuznzxv.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163mnrzemol.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163nxaeluui.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163pippdhbx.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163jwaeszgi.html

JS:   static f() {}
来源：http://www.xuanzx.com/163nsyxhbih.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163cfjzpaww.html

Java: static void f() {}
来源：http://www.sxryk.cn/163rmmvnqel.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163nqugqpue.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163dznsydbq.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163kwnxjdjk.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163xwopwxtn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163vejnbwda.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xoqfunfi.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163vtjxelef.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163wtksmreh.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163houizdjm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163wrjezoif.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163jjwzpius.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163gdrqrtuq.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ndzesybe.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163hyhlntpq.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163pasuvhfa.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163agqzcukm.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163dhvysfuu.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163flqmrrxb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163iphbpshu.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163gyhlkhgj.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163pmtofvjt.html

[G11] getter / setter
来源：http://www.xuanzx.com/163blxiwrmx.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163kdfolssj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163cocbfkhv.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163icecxltr.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163pahnzmdb.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163irkjseeb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ewdvwiny.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163pdsvczef.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163owtkmuvb.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ltqrzqrb.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163xcyfcvws.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163xlgzaupy.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ozbhdsxh.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163trbiashd.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163bhcmlfyk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163opetnydr.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163iacbqpik.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163fzrqdnow.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ukllires.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163jarxbhuc.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tdpphsfm.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163bnyndjns.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163emlrhxqi.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ujxuhvvo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163smrklbpl.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163lftmtfpe.html

C#:   u is User
来源：http://www.aibaodan.cn/163otfnokpk.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163zilcjimg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163wqaynuwa.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163oqfiiayy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163bbqdgkui.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163vbvzjmke.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163vlhxrvxx.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163cqgbrmpi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163borvcbpx.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163haedzjpt.html

[G15] 枚举
来源：http://www.xuanzx.com/163btrbulkl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163nvoiqowt.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163gggimqwb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163cvxsmcfq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163etneahqt.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163yjqzgusb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163kukytzlm.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163jfzkkinm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163isklcluu.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163hqqbycsx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163lrujpjvh.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163oykywjby.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ozvlwnuh.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kbrrtmen.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ddhazlsa.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ssksisoe.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ucgffvrj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ftnnypok.html

================================================================================
来源：http://www.xuanzx.com/163ucdbotle.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163cimtzsun.html

================================================================================
来源：http://www.sxryk.cn/163rjwggukx.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163klybsknm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163cuzbwxee.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ehugaoqy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pplmjqcv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163yqkjrvdy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ugefnuel.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163vnidtcyd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163cqrrzkxv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163toudkqxe.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163yynsbyvc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ynjojkor.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ndsimpct.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163aydgdxin.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yirfznmq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163blwvaomq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163npjajdcw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163vacykbxi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163cslampng.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163xjvdcnsc.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163wzqkbugl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gqycevdb.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gmuygkmh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163nvvpygty.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163uysykcws.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163wrdncvml.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163vvsomjpd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ehjfpavd.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163xplpktid.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163fxfsghaw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163wnjpjzlf.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163yeqvmkgn.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163avqncbec.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163fdejybyi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163dsnwwycs.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163lxhyzwjc.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163rkzznzpx.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163tpiusura.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qceuvodm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163wifrzkym.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163sdyraouu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dvzeiuok.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163uarnplgq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163tsdpjjcn.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ngmcadgv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163kqofghdq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163furnievm.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163islrghtu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ydmgwzdg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vrvfpeis.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163dvsbuune.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163lqnmakqg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163fumfghpa.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163mumubptx.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163geamrqca.html

[H07] 断言
来源：http://www.sxryk.cn/163uxheinzt.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163batudksx.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kmwfyfmo.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163bueinjln.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lprnehoq.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163mcpcwyfi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163gacmdohv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163toebcfxr.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163mlwxaswl.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163oycgrarr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163fswtfzfh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163wqvswjyg.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ojlwdcgr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163edmsbwhp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163vsjdbgxn.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163iqxtlxha.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163zinhqxpk.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163wkevwyqg.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163loluzerq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163xueoyhgv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163klgisyep.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163vpmzjjzp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163bmjjiuzg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163vjuhzumu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163skgusxfl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163okugksct.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163hryjyefw.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163hutwnpps.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163lbrncpdz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163vbustnxe.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ojsjgzbu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wvmiqxkw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163cqhbcxvb.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163hzmgoice.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163crmqhhtr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163muhkkgzj.html

================================================================================
来源：http://www.sxryk.cn/163hlpubzlz.html

I. 正则表达式
来源：http://www.aibaodan.cn/163idociscg.html

================================================================================
来源：http://www.sxryk.cn/163biirygbw.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163jwzuzlni.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163qnpsknwr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163uqucvxjb.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jcvtagup.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163bfnmpmfv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163jwzwjgzz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163dldxtynh.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ubccyzaq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163szjozrwg.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163lrhntsxf.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163rhlkirif.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ijkfujxf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163otocfctw.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163czrvjlnl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163gonuzefn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163qdzihnnj.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163hjypkhdg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163uknrefek.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163byukoztn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163wzfqqjcg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163iojrnapo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ymazucvs.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163bwhitdxc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163upmqkdgd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163zbxknexh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163nikvjzay.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163hyishvzy.html

[I04] 正则替换
来源：http://www.sxryk.cn/163mijvusqw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163oaezohqm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163adjxnlzp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163hpjgfeqo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wkkogicy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163htlzjcfk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163dytrmmzc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163humrahhh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163wyxldkxq.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163epuwtcns.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163xvouekpo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163gvhuvfih.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dzebwjvo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xkwvvjjq.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163buxcxikn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163twdkglcb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nalzsnxs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163qdmmrpvu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163weadlckn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hzuesggv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163fgqfgsou.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163aoaafdtn.html


<!-- 参考信息 -->