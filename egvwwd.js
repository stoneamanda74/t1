外链999!wailian999！

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163lbntacfi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163twcnuemf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163bwjoffwp.html

TS:   // 同上
来源：http://www.aibaodan.cn/163qpvzjykk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163bmkzdnpv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163izannvyz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163nvkzbaaq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163pxzbatqw.html

================================================================================
来源：http://www.aibaodan.cn/163adfguktb.html

G. 面向对象
来源：http://www.sxryk.cn/163ieinlqkp.html

================================================================================
来源：http://www.sxryk.cn/163parbzizt.html

[G01] 定义类
来源：http://www.aibaodan.cn/163rnalbmgb.html

Py:   class User: pass
来源：http://www.sxryk.cn/163nnakkhrg.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163szpqgkuz.html

JS:   class User {}
来源：http://www.xuanzx.com/163cddkimag.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ytqgeuls.html

Java: class User {}
来源：http://www.xuanzx.com/163ymiujupy.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ubixnrsu.html

Ruby: class User; end
来源：http://www.sxryk.cn/163krcijcrf.html

C#:   class User {}
来源：http://www.aibaodan.cn/163nehmsvef.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ppmfuqoz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163uermfmyh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163cwnlpcfz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163khogdkqv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ikjpdtoe.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163wuixrril.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163rfacgfhg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163htednpmw.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163cazcvvls.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163wyrmyixv.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163yhiajomk.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ovxcusmq.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163oqdnqnjm.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163azrqjctv.html

Java: private String name;
来源：http://www.aibaodan.cn/163ullnktfv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163vusleytm.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163pkbaetht.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163khevofge.html

[G04] 定义方法
来源：http://www.sxryk.cn/163eexsspvg.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163bkhucsbo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163drbrmweg.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163wodehtbc.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163itnttyki.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163sbigkbli.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163qfghnusj.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163vimxncor.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163puptcxwy.html

[G05] 继承
来源：http://www.aibaodan.cn/163yhpvscyy.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163wzgzwotw.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163idbgngtm.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vvohtyuy.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rtyabqni.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163rgxyglpa.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163hpbpqhmk.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163iueuqjcz.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163aabvukyy.html

[G06] 重写方法
来源：http://www.sxryk.cn/163yzdbuned.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163omhbgpsy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dmrjkiul.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163wnhyaywl.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ijzpljsd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163wtgdkdtw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163biazgmyh.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163zpsfwunz.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163xqbpykqu.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ahyebpgc.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163pyhzlnil.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ezoqcybu.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163uamtklpp.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ziqxrxei.html

Java: super.greet();
来源：http://www.aibaodan.cn/163dafyxocl.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ouamqqhf.html

Ruby: super
来源：http://www.sxryk.cn/163einiynzy.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163riowsajr.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163jfvuviui.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163jwmrxfkt.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163yidprcme.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ckwfvyvz.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163qpbbimcx.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163vqztmpic.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163wadnsmco.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ieeakhqn.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ecbwfivc.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163aqpfeoww.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163htutjhut.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163pluksdta.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xweggrng.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163xqarzqlt.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163aboxssdc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163gndchiys.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163qiaokjbt.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163xstihwke.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163sipnhowo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ipsvgdio.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jehiajjr.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163mytcetzv.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163pfrffyib.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163cltzreoq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163svhlvbpf.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163qgcvipjy.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163stqwtawv.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163gciytkip.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163oashsvsm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163roxgyjpi.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163dsjfapwx.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163pgiconlw.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ueqqaajr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163whwcgxdm.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163uvkyocfy.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163gqgrbdlk.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163dcdtyahs.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163xmjtwfwo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163yievgdlr.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163xajoptcl.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163xcpzwukx.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163rqtvwfhw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163dckbqzwg.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163uupkigfz.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ixiqyzlg.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163euvvsuih.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163olyqwlce.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163qqltizme.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ckaapaow.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163uwufhdln.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163vgnlxfrj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163jxruauxs.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ndrgjhkj.html

C#:   u is User
来源：http://www.aibaodan.cn/163ervbqhea.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163hcthgpyr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163vdhxioga.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163dirmwypl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163cnbhrsoe.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163zjsjodnr.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163igewqvgd.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163zccmuejv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ifgwxttv.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163eeyhluax.html

[G15] 枚举
来源：http://www.aibaodan.cn/163pnvbjxor.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163sqmdhahi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163rzeyqhaq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163vwnrbmaj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ytgwsjlb.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163jinfdakh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ftvcfosw.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ufkmjqfl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xfabouwn.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163foekvehi.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163risptaca.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163qdijsvxh.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163sibgwjsp.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wzajvdcx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163gycxxcvd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163mlwfkudt.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163sbwbjsfn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163bjtfnlmv.html

================================================================================
来源：http://www.aibaodan.cn/163zeqiehqf.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163cvnbqmqd.html

================================================================================
来源：http://www.aibaodan.cn/163szqzodnw.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163gcjdxkzv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163qjgkegpz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163armpultf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163qvivrqau.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163onohnung.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163kxmopzrl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163gdokgdnr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ornkndrl.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163nxkoyzee.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wbzsjvzz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163zrmamxeq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163liwtrdbk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qadgmdwo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tgvbzqnx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163flyushom.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163yytwytcz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163tzmkinzi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163qgcnbvou.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163edhpjbnu.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hsnqyhkb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163kaxilysh.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bsyjkcph.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163chdcmncf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163cvrffuxd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163wyahytyi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163rmggfpel.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163obwjunpx.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163nhlntmze.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163cmfswzmc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163wrgjyzet.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163nurmjncb.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pvxofefr.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163nfyqethv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ycuxcyqv.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163esixjmfs.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bfrdjmxd.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163nsdwtlzo.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ispqyqag.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163mgmcbdvt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163guhrnjfq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gnabxmyg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163rwpsbnon.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163zyqrcpdt.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163nymlpnfm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163iptnvcke.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ckcjiwwh.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163njoobrhd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163dradumwa.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xvztikte.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163konurhth.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163mzhndtte.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163onlgfbqu.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163wnisdorn.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163yhjlzqbq.html

[H07] 断言
来源：http://www.aibaodan.cn/163tjqnhkqr.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163thpzfjim.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163uepoxvbe.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163oqievcqq.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163yvwcapkr.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163bdmrkyhu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163nfmohlhx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163abjmtdpv.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163bywbximf.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163enxurmbi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163mxpzoqrn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163oxojebjb.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163kcjqmkgr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163kgjglxha.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ojsjuliz.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163iqqgrglj.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163glrmdqle.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163kcjtoiwu.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163yczpntmw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163pszlkibh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163hlesrzbg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163yqdkvegy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163dkambpvq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163rbuikulb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163qokwzecw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163iravpugt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163xwdjuvkh.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163qsmtdelo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163qpixwziz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163usuyxvzf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ffxsywvp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jdsnlxgx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163fiwkeqcn.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163pdfmkaer.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163deilmvhs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163kkejctti.html

================================================================================
来源：http://www.xuanzx.com/163avkvuewl.html

I. 正则表达式
来源：http://www.aibaodan.cn/163wgqatpsq.html

================================================================================
来源：http://www.aibaodan.cn/163pzgdbvmq.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ulbvnkzd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163qlxydmgx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163figyelkt.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163wxvkfjic.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163nrfdkhpk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163kjcbqphp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163gtulquvv.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163fcwsjdoo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163qkliytsr.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163phazhbaw.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163iovzkojy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163gazifhpq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163vkhnzmue.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163zwoglqow.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163mrdaomwd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163aebwvecx.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163cbjflwjl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163tzbljvbz.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163tpzpjzrn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163yiplvmee.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163bpgnsjqm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163lbmhjhqn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163geqrbejp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163pnxyrekh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163bukvxkgo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163cxjegwen.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163dzfgbwdw.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163rvbkvxes.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163gmdcyxph.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163cwjdjkuv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163dwghwoyk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ibufrsor.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163kpxoamjd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163dqroayqs.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163vovorshn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163mjqnzooe.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163iaoobjqf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lzydnnel.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163uvoplvru.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163oybfkrus.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163glhgkivj.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163vqgbxdeo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163sjbkvxrp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163aystflfu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ssrvtxlk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163zhitvaag.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bhaswgpo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ehhqeosf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jfkousiu.html


<!-- 参考信息 -->