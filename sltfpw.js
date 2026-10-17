外链999!wailian999！

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163zjqeeetw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ssgkvknj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163jrewkgwu.html

TS:   // 同上
来源：http://www.xuanzx.com/163fyqkxids.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163nrnoddun.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163fqsesmyz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163xcunjtgp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163hdsbylrm.html

================================================================================
来源：http://www.xuanzx.com/163cnzpvmvs.html

G. 面向对象
来源：http://www.aibaodan.cn/163lkafyqxu.html

================================================================================
来源：http://www.aibaodan.cn/163fmnieqtb.html

[G01] 定义类
来源：http://www.xuanzx.com/163ejpjkinn.html

Py:   class User: pass
来源：http://www.sxryk.cn/163xotwdnut.html

PHP:  class User {}
来源：http://www.xuanzx.com/163dtftmfcy.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ylwoyxsz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ihbfkzxm.html

Java: class User {}
来源：http://www.xuanzx.com/163yumsirdw.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163fhgztdzl.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fysvhaff.html

C#:   class User {}
来源：http://www.xuanzx.com/163jbbpeuay.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163mvgxlcyf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ismuxexm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163mewkldqx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vtuouaic.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163fizdnzsa.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163mtxocrjf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ofxnejuh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163uaddwpcd.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163fuhepoog.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163moggryxw.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163fgyfdihs.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163fhkapwbs.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163jczcranw.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ovpvgzxs.html

Java: private String name;
来源：http://www.aibaodan.cn/163zcdilyhj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163iihvjjsq.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163jsyodfmv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163qvrkptle.html

[G04] 定义方法
来源：http://www.sxryk.cn/163jyjfiiau.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163faiiehhb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163skgdhxzc.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163gevlqmsq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163hqogjgfi.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163mloluacm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163gufwuefk.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163xbvamjpf.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163xyusmssy.html

[G05] 继承
来源：http://www.xuanzx.com/163qeyenyak.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163wamrjfxc.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163whzqohju.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xvrtwgkb.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163cmgnsgpx.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163yrfunsfe.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163xjltjopd.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163iklfxcpk.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xfssikey.html

[G06] 重写方法
来源：http://www.xuanzx.com/163yghycdvg.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163uhypcavm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zxugcqml.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163eojghldv.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163zdwydwhk.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163coclbapp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163eczprjha.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163qrjvpqgv.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163aiuaajks.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163juijoqlp.html

Py:   super().greet()
来源：http://www.sxryk.cn/163eribebbd.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163sydeoiwt.html

JS:   super.greet();
来源：http://www.sxryk.cn/163mzllfjdh.html

TS:   super.greet();
来源：http://www.xuanzx.com/163zaggsetf.html

Java: super.greet();
来源：http://www.xuanzx.com/163nmslvrmv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163lmpluvuw.html

Ruby: super
来源：http://www.aibaodan.cn/163rdpohtwa.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163irrqnwca.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163phpkaeus.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163apqxscqx.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163vabbmhaf.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163vrksoptg.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163gokcbnia.html

Java: static void f() {}
来源：http://www.sxryk.cn/163biityicw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163adulrhvg.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163hlomrrov.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163kwrcjqfo.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163oykcwfjy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163zkvgjtgg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163xjodjitw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163luiaslzk.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163lgqmvxhw.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163cwfefyva.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163dmoybgzi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163snwiwylg.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ynshiono.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163mhkgakrt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163xvfuuqgk.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163pasbcyey.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163kvgpibse.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ehpyiaij.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163wqbwroml.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163gqsgbtnn.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163tqzezris.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163jyfdexuy.html

[G11] getter / setter
来源：http://www.xuanzx.com/163xrqndkqo.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163warwgtmh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mljovdnc.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ltmhbjft.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163rsudrpvo.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163dxjnlyco.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ptdogend.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163jpebddgn.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163mowruria.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163eketfeuh.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163jpjzghes.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163eahfdnxs.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163jmmtpzjy.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163nnmkmbvg.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163tvxcrezq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163mhriuehy.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163bgcvvcdn.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163yxfcjxfa.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163fitvuftz.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ftfiiism.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ptuyxbjr.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163encaphqj.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163wvfwyxxx.html

Java: u instanceof User
来源：http://www.sxryk.cn/163nhnxbehf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163lgrugymz.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163sxynhgxf.html

C#:   u is User
来源：http://www.sxryk.cn/163xhvfsrky.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163knpcocad.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163wendfqef.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163yvsjxvpw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163dnzwcggq.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163zmzocwsb.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163rzfslzdv.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163sqiennbn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163yqbemdcl.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163laxswwpx.html

[G15] 枚举
来源：http://www.aibaodan.cn/163zwyzlgfq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163bxokkmji.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163uosewwsz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163znogzgio.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bbkmfwkx.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163waxqsqdc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163rlzwtrtl.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163qdshprev.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xqajumzd.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163perkxvtt.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163udxnzxsm.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163mccrblsi.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tfrpvgbm.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zudqanvn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163snezezkd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163cxidtimc.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163nrgckvdl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163nhkomjmx.html

================================================================================
来源：http://www.aibaodan.cn/163cunrxsay.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163uhyhfzdm.html

================================================================================
来源：http://www.sxryk.cn/163dvqfyvyl.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163xccnpoji.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163pvdzjxyw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163uwggdydr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qmisiubs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163swueusaz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163wwetlwit.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163daflfjvc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163mibjmyws.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163gbsoxjkw.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163mxylirwn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163vrykfror.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jdvthhro.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tzvlacxh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qrminrce.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fqfwgfoh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163psrrxiug.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163jzpxhnze.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163pxavzacn.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163rxfzcarm.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163jgdmjhzz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rroeitii.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ewcdvefu.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qvfywfhr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vnkdjrms.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163juzlmrah.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163brxiigze.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163esxpirkg.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163zrokoxvz.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163hanewbth.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163tavthjjq.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163sglzlpsl.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163wevdbyfo.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163mmojelva.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163gzuucwwx.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163gpezetuv.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163cputntfs.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163gogbsrru.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163gyauudtm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163uclkyitz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wgzgwhqb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163hfqmjnen.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163oupvubmz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163fjcmtpve.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163mykiznzi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163tvvveacl.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163fmqujrar.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163crwaxjhy.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163fhkggrog.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163xyfcipwv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163lqrmfwev.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163qainuquj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163lcjxjbjy.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163kejalffh.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163clwzyeyp.html

[H07] 断言
来源：http://www.aibaodan.cn/163wziphdph.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163oqzygfvi.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ntsefwzx.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163aoehpjcp.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ncpryeag.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163hpxhiaci.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163jwnlligz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163guwiezxh.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163kzpqwryg.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163xttfgubj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163mcawdroy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163opsvztes.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163uncauxil.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163rwraylav.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163lasaxmqn.html

Go:   err.Error()
来源：http://www.sxryk.cn/163iimdqmye.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163alvygiuy.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163prkdcxtg.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163hmpvgkxe.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163jtdmeyrw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163lekwnpbn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163wirboyis.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163tuyfqaac.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163zbhlixka.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163bvnckdcs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163khrvhuiw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ivyhsfle.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163trcsnrpp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163wdyctikw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ilefbnej.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hivwjzoe.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163eguvwvnt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163smyhdloc.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163xrujcaeh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163wffbvrtt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ejnhjxqi.html

================================================================================
来源：http://www.sxryk.cn/163lcppimob.html

I. 正则表达式
来源：http://www.xuanzx.com/163neshatcg.html

================================================================================
来源：http://www.aibaodan.cn/163blcwltqc.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163xaebsucg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163hcswdtfm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163bdsagcjs.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fdgursnx.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163iefkwhab.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163vchuxsdk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163mmswvpsz.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163czveraro.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163pytukumq.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163qknqhpva.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163obgwnskm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163mmughqyk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163smiglyjy.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163clzmjkpd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163xulvinsd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163fgphkkrv.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ubhixbcc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163iqzpsqef.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163hpbgavky.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163cjfygxfl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163pmixfnhr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163bcrjyivg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163pwcdgazm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163tiabhmne.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ytbpckqg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163scnxzqgk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163bswgbwqe.html

[I04] 正则替换
来源：http://www.sxryk.cn/163nguoxric.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163fpiwaeql.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163zpnwatke.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qgrlxatp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163bqvqegon.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163oxdshbyw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163gbsouiqr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163xpabywpz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163pxncxift.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163gyvxsuek.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163kjnkslun.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163cqvtubse.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163samjqfbv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zgzlfvnh.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163nvqigzrk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163jvuhgskq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tsfvzvaq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163zvetwzhh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163mdmoxeff.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163awvlhtsp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163chkfhibm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163cqlzjveq.html


<!-- 参考信息 -->