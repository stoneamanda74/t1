外链999!wailian999！

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163qholwhwp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163kfgyznnj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163xbfhfpiq.html

TS:   // 同上
来源：http://www.sxryk.cn/163jevksurr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163uyerngdu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163sxmbnstt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163kzejdmwt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ewndgqat.html

================================================================================
来源：http://www.sxryk.cn/163rzmwcest.html

G. 面向对象
来源：http://www.aibaodan.cn/163hixqdusx.html

================================================================================
来源：http://www.aibaodan.cn/163prnslalh.html

[G01] 定义类
来源：http://www.sxryk.cn/163hrheilzn.html

Py:   class User: pass
来源：http://www.xuanzx.com/163fronjmoz.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xnczidks.html

JS:   class User {}
来源：http://www.xuanzx.com/163npxifnew.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163gtqvvawz.html

Java: class User {}
来源：http://www.sxryk.cn/163cjbzrcus.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163yvqsahsh.html

Ruby: class User; end
来源：http://www.xuanzx.com/163cwfntugc.html

C#:   class User {}
来源：http://www.sxryk.cn/163dqxyonan.html

[G02] 构造函数
来源：http://www.xuanzx.com/163jfbolcmi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163fjatubfe.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ykewlzox.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163jpmylhnt.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163txmykafk.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163wcfmevgm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163nwzyauij.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163jbowijaa.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163krnzisoj.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ajxriclc.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163evzphzwq.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163exowuucw.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163wadljprf.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ayaorprl.html

Java: private String name;
来源：http://www.aibaodan.cn/163dgbterhh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163jfvfezsl.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163lowhqbir.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163zeltptdl.html

[G04] 定义方法
来源：http://www.sxryk.cn/163uaoqrrcu.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163atczkvag.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ftsbwvwa.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163kcrnuvwx.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163mawvnvxj.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163cwttfewn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163xibwdjpk.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163zpnuftrx.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ypxbnkas.html

[G05] 继承
来源：http://www.sxryk.cn/163tcoxigmj.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163fqwxdfkr.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163acabcmso.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163oawjmzau.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wlbohunp.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163zzuncduo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163scagtpxx.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163bvqrdgtj.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163pysnqith.html

[G06] 重写方法
来源：http://www.sxryk.cn/163nnqzwobl.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163rtxovbus.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163taswwrip.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wyymzmqv.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163tvhrkkcn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163yqnkpzck.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163efpzglnl.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163wujqzvrq.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ryypdlsk.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163davxvqyo.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163aqewitkm.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163mkpsszyg.html

JS:   super.greet();
来源：http://www.sxryk.cn/163juubkuxp.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dpgeajnt.html

Java: super.greet();
来源：http://www.sxryk.cn/163jauefday.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163oqoytxct.html

Ruby: super
来源：http://www.sxryk.cn/163ydqebmzt.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zotkftbx.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163bissdbko.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163fqwgpcqk.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163qdbaxgdv.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163sgmwnjdi.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163jziijvjn.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163tjikpgpk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163oqfqujhf.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ikfqmnad.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163obomvtzq.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163vjmjcuog.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163oozkutiv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163mxqwmsie.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163dgjmxxss.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163sagflxhf.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163eozdbtex.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163miycliwg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163frctmgjb.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163djevmsfy.html

[G10] 访问控制
来源：http://www.xuanzx.com/163qhdhezzj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163rvombarm.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163eutgdgte.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163alnnvdjy.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ajugipwe.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163bjfzedfw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ermylcpa.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163yscdxiwn.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163nsnrdjph.html

[G11] getter / setter
来源：http://www.xuanzx.com/163rytkdydh.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163sbrazdga.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163fasvjxlx.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163jznwfdpr.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163warpjmga.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163oqsovlsv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163mokubuju.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163mbatvesv.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ripcyjdq.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ethjmlcp.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ooszrwbe.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163pidbtsxq.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163pjoxktze.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163mianmcjf.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163xaeyvrbk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163umsbcwgp.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163qqeujtbn.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163qtbfvdqa.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163jttgznzf.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163hfnhbbfh.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163zvcwqchq.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163prmleiac.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163kpugifmg.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ofzgsrsw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163gazcuyzv.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163lgyyluru.html

C#:   u is User
来源：http://www.xuanzx.com/163mqdspeln.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163jwadbptt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163veokydne.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163fyzlhiqh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163hsptkiyy.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163buvaqiex.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163hdnypzlq.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163gtajfhuf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163vezywdsp.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163zsacggoo.html

[G15] 枚举
来源：http://www.xuanzx.com/163afmvzcvx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163vewuglkc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163anylhbmu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163zpzqscwg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163orqlqcnp.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163voxoxajz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163wvfkuydm.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163zlcseech.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hvphkumg.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163buohglge.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163igmsrprp.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163xgdomdwa.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qmzptwsr.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163szdwnhwc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163uesstjsz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163regvlaoz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163tlsvushl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163vfyfknqx.html

================================================================================
来源：http://www.xuanzx.com/163qpnbudan.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163calxgllu.html

================================================================================
来源：http://www.aibaodan.cn/163bnwisktt.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ubilcdjz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163yptgpgie.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163plfkzuep.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163abizdwdl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163tzgvrxkj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ayiwsdrl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163bqvqscrq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163siokgedr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163rasbyezs.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163pespczkc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163uunqrxhd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163syevlhxz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163grzyjjaq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zbxusgtl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ggbxugla.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163dfgjtloj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163gjdvxuqz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163wwingeyf.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163iimoreyk.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ohvjeulm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163yvpcbwtu.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dikapyvp.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bholnwjt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163jzkimami.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163thyzhrwi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163nblkzkug.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163rdrgdnwg.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ruuccljk.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163shzsnvbg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163gmvhhdve.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dhzfnzvs.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163buaxgbbe.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163krdcbizc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ucukaddq.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163wgzuvxxe.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163jcgyzgnm.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163kwyagyxv.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163cguguejr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163wopiitnv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163osogpfmv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163lrznpifs.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163osfmqgmj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ognlntun.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163unnadwlq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163hmmswfza.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163yelxptag.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163cmutxhrf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163celgcjzu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163rzmlusqf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163sgtrterc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163csjvpnpu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163otvcfvyv.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ygxpuqie.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163qdvybrlj.html

[H07] 断言
来源：http://www.sxryk.cn/163ixyahybg.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163irntyotx.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163zimloyht.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163itpsgqpj.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163knxppwen.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163obhzhhvc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163wclczwer.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163tkxcpqvu.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163rhseaiyr.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163hujjpbuq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163tcdbfdpe.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163grginnwj.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163sgstsrqf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163qjycvdoc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163cznfwfqc.html

Go:   err.Error()
来源：http://www.xuanzx.com/163bdnuzyma.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163xedxfesj.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163hrbbmbcb.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163knpibftl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163afgtcrxa.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ljoatptk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163penpmqiy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163htnnpbno.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163fysdukxl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163nhctdzbk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ckcqrmrm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163qjotdfhi.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163yrlogztb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163knxltzfq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ezzshtce.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163rvdkhegr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qhcghnpl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163kbfwruqy.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163cksinrsb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163nogqbieu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163vdccqmif.html

================================================================================
来源：http://www.xuanzx.com/163wibopano.html

I. 正则表达式
来源：http://www.aibaodan.cn/163dfmpgeyr.html

================================================================================
来源：http://www.sxryk.cn/163zyfgzbrx.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163swcosgnh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163zdaczfto.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163cztmrxlb.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tsqubjlr.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163mrztilif.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ojpqkojp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163fkpeuzhz.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zritugpc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163qwypyphv.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163bdbijxdq.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163gmylyxtm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ioulybzz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163rgotjyst.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163vkqmyizf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163gmjanhrn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163vxodderp.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163vtlxleeq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163umosqtpu.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163jhvhffup.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163xyaaqzks.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163varezqxg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163xfsfqkke.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163xyxirtwd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163cqclpoku.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163cvkjlsgx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163zxxunwzq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163bpfgmsxl.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163rehxiavo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163xnixannn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163dcqyoxsq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163dieqpbsg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163vzxndtmi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163qxxvkdpl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163dpycgobn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163aahsqnbo.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163nrfthvkp.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163itnbwmuf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163guydnfxn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163udfmturc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bjabipdv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163egyhqkhl.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163zpjctimf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163idiqbvgv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gtsjnqxz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163cahuqqws.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163xynfegyu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ktvqavae.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163cmhbzxdz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vxxbvpnn.html


<!-- 参考信息 -->