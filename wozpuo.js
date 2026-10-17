外链999!wailian999！

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163dstinjfg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163pdrrcpvw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163owvyamnv.html

TS:   // 同上
来源：http://www.sxryk.cn/163dtxatgvt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163zvmfolyc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163qluytuks.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163qxazzfjg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163nqxcpwwb.html

================================================================================
来源：http://www.aibaodan.cn/163jtjsvxop.html

G. 面向对象
来源：http://www.sxryk.cn/163lpeofofh.html

================================================================================
来源：http://www.xuanzx.com/163dncnudwb.html

[G01] 定义类
来源：http://www.aibaodan.cn/163daxddmtg.html

Py:   class User: pass
来源：http://www.sxryk.cn/163uupyrubp.html

PHP:  class User {}
来源：http://www.xuanzx.com/163schfwnwr.html

JS:   class User {}
来源：http://www.xuanzx.com/163wubfjxsg.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163vhwzqvel.html

Java: class User {}
来源：http://www.aibaodan.cn/163djkyhens.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163rjprkthg.html

Ruby: class User; end
来源：http://www.xuanzx.com/163nbfkhoys.html

C#:   class User {}
来源：http://www.sxryk.cn/163vqomizml.html

[G02] 构造函数
来源：http://www.xuanzx.com/163lrbtcdea.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163zcnajfzn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163zawllgge.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163uiuzgwyd.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163jpjhylqn.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163fsosbced.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163qfjmumcm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163wisjitxq.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163tfspqmrz.html

[G03] 实例属性
来源：http://www.xuanzx.com/163agcjmguj.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163hzmstbey.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163cawoqsxu.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163qunezpqg.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163mxfttptd.html

Java: private String name;
来源：http://www.xuanzx.com/163ctnuqtvq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163aojrpjvt.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163cagjuxoh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ggdplhap.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163dmafqhok.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163qkcqpjiu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uourvhwi.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ormijvch.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xbhhaftn.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163btpbubua.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163brrjcfsv.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163focvkpry.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163otuxtfgp.html

[G05] 继承
来源：http://www.sxryk.cn/163xxvzswoy.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163grltcbtz.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163fxrsupna.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163elbusxxx.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163kutbswyi.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163xowpnzul.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163kckmqkdt.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163nplbtcul.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163klvcpqfp.html

[G06] 重写方法
来源：http://www.xuanzx.com/163dibpxadb.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163vbekhufn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163omhxfntd.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163achawdpe.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163oqjgukzr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163rmnacdtb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ubemuawf.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163nvxvydxu.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163kqwegrlz.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163sbxseyiy.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163xtdwkugq.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163zzxfinik.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163bpekhwqq.html

TS:   super.greet();
来源：http://www.xuanzx.com/163aybfnqzy.html

Java: super.greet();
来源：http://www.aibaodan.cn/163pfdqrfuz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163skvpchic.html

Ruby: super
来源：http://www.xuanzx.com/163duvupzan.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163hudypuxa.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163rcfpsufi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ozzotxei.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163wfsflxou.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163viqqgqls.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163nkeigcjk.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ntymmygy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163bfsixxud.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163udozfkxi.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163lmiddtwm.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163diosbccn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163kzlsddos.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163xcjvgvnm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163hwrtguqp.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163kqgejybd.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163jhpunnvc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163hmhjnqmv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163knhpsixo.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163lnklgbmx.html

[G10] 访问控制
来源：http://www.sxryk.cn/163suirnghn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ccinkatq.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163rckgyjub.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163fqiwmrql.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163vmfnqiop.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163wmvoytnc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163bfoldkfq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163pgwnjdpp.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163zsbzqwyf.html

[G11] getter / setter
来源：http://www.sxryk.cn/163gabxjnry.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163cztmcgun.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163epiuysqn.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163sovtxetv.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ieghtjus.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163fwppnafh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163afwabvyz.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163lugbgger.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163aoeroouq.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163acsrsynu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163hadszlsg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163tvyovbwp.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163mhhqanag.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ndklqzis.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163nyuyeqgd.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163jbpgprrl.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163snntmbrv.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163pejwdqsj.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163rkxztblh.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163sujrxlfj.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163qfkqhgnj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163egckvnpp.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163cuwmlcfm.html

Java: u instanceof User
来源：http://www.sxryk.cn/163xjxjhicg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163zldorwvy.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163muvzncer.html

C#:   u is User
来源：http://www.aibaodan.cn/163cvxxryuk.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163cgsmoluw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163waaiutqd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163pwgzrcjj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163bwyqwbzs.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163neqbsidu.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163bgafsgyg.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163vuarauup.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163gknezogi.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163kauvehdy.html

[G15] 枚举
来源：http://www.xuanzx.com/163ucggttni.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163kewtxdlh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163vjqxayfp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163vtuxvwti.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163indglswh.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163kanfiirv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163fmtycqny.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163lqqsnlzl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163oqqvdtng.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163tmujryrd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163funtmvvs.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163khrmanek.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163byjerqdn.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163pkwrwirg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163kkyffpgh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ynhikivi.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163rljpknkz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ewvwcbga.html

================================================================================
来源：http://www.aibaodan.cn/163dhjdbraf.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163fjijtqzh.html

================================================================================
来源：http://www.sxryk.cn/163vmfddhio.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163zdashpym.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fzplggxp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163dtygwais.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163lyyiokmd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163mrmskdbd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ciffqlcw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163iscszcue.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163oenbguiz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ipuybyxq.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163iczgumcx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163muoqnzdh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uocmsgra.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pmcgwdcv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163otxdplrk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nlwetenu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163nuemrvmw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163lojgrjid.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163gpafcjet.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163yypxyslg.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163chlghxgq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163lnvscdnl.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gamptlnk.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hkqahayp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163xkerxyhl.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163tgxoyuyb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ifqwyfet.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163tleucbse.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163prwwvrcl.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163vraienia.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163loxsahsc.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163idqbkxlv.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pdnhadyy.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163jpcykcfv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163omwdyvrd.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163xlsuiqgs.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163stucpjbk.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163wyizpwjm.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163dyayvbfn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163dafhffcd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163eeaptigy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163hxmthrua.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163bjpijoii.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163loihtdvs.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163kagyuril.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163usinsexp.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163faerysqi.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163gjuwxogk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vntbwvhg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fdukmdwn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cjzsayll.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ttebeovr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163pmbgvnmo.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163pljbyfye.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ctzhlwnk.html

[H07] 断言
来源：http://www.aibaodan.cn/163mxgyqnyt.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163tljpnmwf.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163cfzkqsts.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ynskfwho.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nyvolnlf.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163yqgbqnhk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163rpetoxan.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163mgaefjii.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163fgafyxgq.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163wemiiqgv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163mymcobyk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163cczrpqyw.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163jmcsmgjn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163osgfbxjb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163dotqzoqy.html

Go:   err.Error()
来源：http://www.xuanzx.com/163eugxmcwl.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163phmkakzl.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163zcabgjgn.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163vygsallt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163hasalrtb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163cxvhrjaz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ifgghgzz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163rmtbrfqs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163oeeksvwl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163etlhsdqo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163aiemrlkb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163esqiczgm.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163gfumqwns.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163mpaopdai.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163tiifnsia.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vublpncb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fuoicopu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163hkwhqiky.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163dcwahiwe.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163xctolakc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163etcaurmy.html

================================================================================
来源：http://www.xuanzx.com/163irblzorr.html

I. 正则表达式
来源：http://www.xuanzx.com/163sxeelzfa.html

================================================================================
来源：http://www.aibaodan.cn/163qsmzcwmk.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163iuiieijk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ssnizlhc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163pppjsbho.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xlguzowh.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vtlrpcip.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163vdanjxta.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163fhwvmecr.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163hqqvbvbr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163fnvqrcfh.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163dkgbbzft.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ftemnsbh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163oqeazdxt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163wvbjhpvp.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163oqysagxx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163iohujhti.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163tsyymzub.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163huvulnep.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163qnghwfpz.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ldpgdohh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rvsuujtz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163mqhqfweq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163vumpznkz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163rnikjkfn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163hxavvnjr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163nvpdejwc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163lcwlwgsu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xfswhfvy.html

[I04] 正则替换
来源：http://www.sxryk.cn/163obnpydnn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163njlhmexd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163yzuqkafr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163kktvtdti.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163kicapzmb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ussooiah.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163pfwyylif.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163kybbovbu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163axbovrpe.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163bpkthoep.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163mpvludlz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163qsgpapwy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lhymypco.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xrncqtxj.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163mlyoafvm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163hjzrcfzm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nkwmmriv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163fusinasn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163dbidkhpg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163klrlctjv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163nhffyfxh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163uybspewc.html


<!-- 参考信息 -->