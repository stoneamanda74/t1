外链999!wailian999！

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163vpyqfytl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163euktpyxf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163tcqpcwch.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163odetxbel.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163qorhlxek.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ynymsxcw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163udhvbjcv.html

TS:   // 同上
来源：http://www.aibaodan.cn/163gdoolwbk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163wgbvujbf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ipzxrrgl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163kswrrehd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163wrojheav.html

================================================================================
来源：http://www.aibaodan.cn/163kjcevgyu.html

G. 面向对象
来源：http://www.xuanzx.com/163rlbrgfnl.html

================================================================================
来源：http://www.sxryk.cn/163exrxfmvq.html

[G01] 定义类
来源：http://www.aibaodan.cn/163dhcbxkrk.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ttknvzxw.html

PHP:  class User {}
来源：http://www.xuanzx.com/163cfaoymmf.html

JS:   class User {}
来源：http://www.aibaodan.cn/163qcgzhlua.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163dywnvlgd.html

Java: class User {}
来源：http://www.aibaodan.cn/163qbdgnmvt.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163zqsrpnxw.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163qabodbjy.html

C#:   class User {}
来源：http://www.xuanzx.com/163loogykwk.html

[G02] 构造函数
来源：http://www.xuanzx.com/163pxxzyohb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163yukunhbq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163kzgdibbw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163meqlkllt.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163thlikymn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163sewslwbv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163rvfoqlco.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163xucywach.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163cnkjqypp.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163nbvxhfxk.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163shyqhgke.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163hdwbtwcc.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163cofxvgaa.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163aaloopmi.html

Java: private String name;
来源：http://www.xuanzx.com/163pkzytybv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163tliufpsb.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163lilvfuxh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163uscaiiue.html

[G04] 定义方法
来源：http://www.xuanzx.com/163zznbrtge.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163yimgxgab.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sefvukyj.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163hjqxlobg.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163oiekflhn.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163pevozdmy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163fvzkovaf.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163rrhdhwfe.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163xecfipox.html

[G05] 继承
来源：http://www.aibaodan.cn/163zzlqicci.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163xbwhfsfi.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163rjzilmhi.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rmwqmmnp.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ywusotcl.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163tywbbusk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163psxphpjh.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163yzmkembj.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163qodtxnir.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ufbfdsmm.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163srmdmxwl.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163hcxfkxyv.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163xppubfvq.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gxnipeqv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163nqphndwm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ilgydwiv.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163edsgqexy.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dhuneefk.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163trnxejpw.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163xkvshizk.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163txoujikk.html

JS:   super.greet();
来源：http://www.xuanzx.com/163cjiokily.html

TS:   super.greet();
来源：http://www.sxryk.cn/163puqkomom.html

Java: super.greet();
来源：http://www.sxryk.cn/163btbjayju.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ycaqsnnj.html

Ruby: super
来源：http://www.aibaodan.cn/163plcwitvw.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163rykophea.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163fodiupnj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163bkuscgkm.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163miymtgyn.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ogiybohe.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163rdwbhnai.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163gebtierf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163cerlclgg.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163uonrquhz.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163beitmigs.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163uwvuhiub.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163bwffalar.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ujjtozxb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163yuawdsnb.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163oypowocm.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163yvzedwxo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vovsdyvb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163eaabwxfh.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163khptpuhq.html

[G10] 访问控制
来源：http://www.sxryk.cn/163kjqiqagp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163xzcutqoc.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163dyoxzxul.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163aevoptmn.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163fxrcvhub.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ebbnytjx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163stfkcgib.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163oqqdkkwn.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163tpxtlnzg.html

[G11] getter / setter
来源：http://www.xuanzx.com/163dxchcmge.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ioeskcds.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qzihupsy.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163huehwpyj.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163dnkxjuor.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163krnogmsq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163zikajzkj.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163mtghvpwn.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163xgsayhkc.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163xtexthno.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163uhoqfscf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163fvqhgzrt.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163fviayuiw.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163pckozgsu.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163vzxhecyk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163dcdcrmdx.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163pbczvjth.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ykvwrhcq.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163zjwjhtgn.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163qsjmptwh.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ltahzolo.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163sbgnikit.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163jcieqqki.html

Java: u instanceof User
来源：http://www.xuanzx.com/163wdlnuxla.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163obpasjit.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163dqiulsrf.html

C#:   u is User
来源：http://www.aibaodan.cn/163cfluggaq.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163xerkzfcr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163zeppflms.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ofklglge.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163vaaovwkl.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163wvbbmogw.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163gmlsehbu.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163egeigwcj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163diaqirll.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163obzckerp.html

[G15] 枚举
来源：http://www.aibaodan.cn/163bnzvxelt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163kbmpmydn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163gzwqrzgm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163htyzphog.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pbnrzwwz.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163gmebxayd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ybflgblk.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163awcrhbli.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163swfagtxb.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ulehgaek.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163vrnxjmlh.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163fwwvwcrn.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163eqiodcik.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163smkmfjxm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163wgfewsws.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ifoduepo.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163qpxksmnh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163jrfvchtt.html

================================================================================
来源：http://www.xuanzx.com/163kqnfcfii.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ddfwloky.html

================================================================================
来源：http://www.sxryk.cn/163hmgkpojg.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163valknupc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163hagewssd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163itnrpscj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163wqvcquad.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163qnqdzyeo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163yszqsegl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ypfjezzy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163lhrmkagw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163lbqzzupg.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163mogqnkam.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163riomwumn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cibtbyhv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nlbxkoys.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163llwusilf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163eojtixch.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163fhktokwj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163nqtqrzpt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163kmrckdtn.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163mgtytlgo.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163kembxmii.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163etqgihbm.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163inbbvjdx.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163tnwinzmd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163bytaunae.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163migvqhhv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163qrxmcbwo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163shchlagb.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163fczqcnul.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ckrgbtpu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xbyfrssi.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mutrqvuv.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rycdjhlb.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ephrewgy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163oqkoaktb.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163odsgjnlu.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ltkkmymc.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163aujtgfue.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163urcjrwuu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163hvpqpphf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163buxtacxb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ajgjendy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163gqyssczs.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ykwvtsff.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ykusznqz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163apeofvti.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163siehsuuo.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ejyussrh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163fnhgncrs.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qlcvoeib.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ijgosotd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163lbcmxnkr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163bmemuudz.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163qofaqmcb.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163gjddobgb.html

[H07] 断言
来源：http://www.aibaodan.cn/163qnpdgfxj.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163khkdoych.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163cqtdfywb.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ynbtkgcn.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163tdqfsgjo.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163emmnuefm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163bwjcgzng.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163tglxqljd.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ynwdheto.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163gtcvkljm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163xhbdaxde.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163urhjvwgg.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163qjeglfsl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163aoblvlhf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163wvajxvyf.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163uzmnhgvh.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163wgmzghtt.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163kppowkju.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163nunctrjg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ogwftjww.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163gejemffd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163mxcsfanl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163zsygjmxm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163finrdohs.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ydsbwspr.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163zihefnuj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163zipvdcsi.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163vqeekwub.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163oikkpyqw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163smucdprs.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hmmiausc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tnrlplko.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163xaraqcrv.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ytjomjay.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ujicdtby.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163bsugrrom.html

================================================================================
来源：http://www.xuanzx.com/163llauhcpg.html

I. 正则表达式
来源：http://www.xuanzx.com/163qkvnkqrq.html

================================================================================
来源：http://www.xuanzx.com/163hyxdabyz.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163dkavaneu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ejwgmjjk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163pghkctwf.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bgwjvkwk.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dsjcfimq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163mmwvvsba.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163htfvykrh.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163uqdhgfpb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163yuaydwic.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163zogvhdif.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163vfqubmta.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ciwgfoqp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ebhixmst.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163esmrrwyj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163wcguojqd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163hjgvbznf.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163nohtufke.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163mwxeazjq.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ntgboopw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163mcwatxxe.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ednaednf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163hazncqcs.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163snhinybc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163kfugeews.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163zigxonqa.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163qlrxozlp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163riyidoit.html

[I04] 正则替换
来源：http://www.sxryk.cn/163gowmezjj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163xbensmcv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163jwvynbbj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rsvmjttu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163piriotwc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163kyyojlck.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163manljvse.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163jxfqfxfl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ejidhyke.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163bgrfzrty.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163fghldjyy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163nvmifddr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xtbgnlpo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jgnbshjo.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163niaysifz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163emssardf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xlrhswyj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163vdnpswcz.html


<!-- 参考信息 -->