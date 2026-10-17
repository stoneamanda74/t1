外链999!wailian999！

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163gtwpqupb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163clvvhvxi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163omjgkxpt.html

TS:   // 同上
来源：http://www.sxryk.cn/163pdrywzbk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ffhpuxwn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ddbeokqe.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163mxkcquvo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ftijdtgr.html

================================================================================
来源：http://www.aibaodan.cn/163iqtbcdwr.html

G. 面向对象
来源：http://www.xuanzx.com/163lalwgcdl.html

================================================================================
来源：http://www.sxryk.cn/163ffzcgugd.html

[G01] 定义类
来源：http://www.sxryk.cn/163pzupjybc.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163souzfspd.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ssnhnprl.html

JS:   class User {}
来源：http://www.aibaodan.cn/163wbmcehzi.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163xketirau.html

Java: class User {}
来源：http://www.sxryk.cn/163ugciypfy.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ykdbpqjm.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163yyuhsqmn.html

C#:   class User {}
来源：http://www.sxryk.cn/163oneesrwj.html

[G02] 构造函数
来源：http://www.xuanzx.com/163fnxtlrzw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ydtuqsfq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163lmajomwk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163xowiztnt.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163sxdvrkrr.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163zmkqlgcf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163fzhietpy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163zuvyyplk.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163espwenjg.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ddjokjhl.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163pumxlkqf.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163lhcrxphv.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ftqbqltr.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163unenioyu.html

Java: private String name;
来源：http://www.xuanzx.com/163zjrvpuhd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163zgtptjcb.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163vqtearqq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163lgwzqoak.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ztkusyss.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ybxwaplr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ksvmfopv.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163lnxkqthr.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163cukbvnla.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ejslepbe.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163bpkeoaco.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163tdzkjvqd.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163vtqrwfqi.html

[G05] 继承
来源：http://www.xuanzx.com/163yptbwiqi.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163pefvhjtq.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163vnjkrwja.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163tfwayiwi.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vdowmoys.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163mqtygezm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163kcfoecet.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163vutngfep.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163marpsibt.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163qoygowud.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163zvaluwfh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ifghvvxq.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ljkznild.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163hzwntevj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ztsapeng.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163tcnflknb.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163baubhjvo.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163zngahwiy.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163xhervkgw.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ahszfnfk.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163gbkzyfsp.html

JS:   super.greet();
来源：http://www.xuanzx.com/163nobxbgle.html

TS:   super.greet();
来源：http://www.sxryk.cn/163exhynckn.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ekhscztx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163yasijyeh.html

Ruby: super
来源：http://www.sxryk.cn/163qxjfstsl.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163qpfabrkt.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ljnndwmz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163rzokymej.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163nxviuzib.html

JS:   static f() {}
来源：http://www.xuanzx.com/163jirzgruu.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163atmalejj.html

Java: static void f() {}
来源：http://www.sxryk.cn/163zdcvhgru.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163rpgkebmr.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163yqwdnqrb.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163lxblxuae.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ulcrjseq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qvkdryph.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163sqxtamht.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163efamrewy.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163oqhkrlmj.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163mkjimiwt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163snvlinsj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163pvtxfehb.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163acaggqzu.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ibwpysyc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ascvnnqx.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163rsskwatz.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163bwuaxlip.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ykeatmot.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163dztumhue.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163zhqrbtjz.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163yqzksplz.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163dwqmooog.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163vforduvl.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163jwjieckk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hyjiibgk.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163nixxmjpg.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163nobrjmti.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163mrywbxky.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163snmwxcqy.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163eowyvroq.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163bceupkok.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163bistogzd.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163dtlmtnpj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ifrgtxey.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163qfdqmzif.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ienrsfwr.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163savkubec.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163nkjhngdr.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163qaxgefoy.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163fgxidzhl.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163vtzaczym.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163twacsljz.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163lidcdkbi.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163cctqpayo.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163eidlcsci.html

Java: u instanceof User
来源：http://www.sxryk.cn/163hltjyrix.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ybxeuolm.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163uklgxjhu.html

C#:   u is User
来源：http://www.aibaodan.cn/163mbdutgmg.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163jopicdzs.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163kvzzgeoh.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163nspmbpmz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ptfteuqo.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163lnyusilb.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163tbhzkzkn.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163aycgqmci.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163srlrdwhx.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163gteqwuuk.html

[G15] 枚举
来源：http://www.aibaodan.cn/163dcwofnrl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163mvnvylns.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163grhjjtwi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163bplxahiz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wdrupcog.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163nslewape.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163vycdhyxb.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ostlzvwl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163lponrkkx.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163cdqyvmfi.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163hsaftbbj.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163zxdrnfcf.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jmjifqrl.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163nmflswcx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163qwbwsjiu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163gmnuovov.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163epwvxbuh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163qgsqwyve.html

================================================================================
来源：http://www.sxryk.cn/163yzhxytxu.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ewmzmkse.html

================================================================================
来源：http://www.xuanzx.com/163mngsacme.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163idrvlikd.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163dhyyiase.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163pyzpwawv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163zwshmjei.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163zalekwsg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163keycxkew.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163bihvtxlc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163tzzdzqyk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163trfpicoq.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163rlgqiqik.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163msrtargi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nhmipnnz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wescrzvv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vjikgwwn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jaxzocjh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163dxgawcgx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163pncsnwdf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163cklsogoh.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163kxgbwrnc.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163zplgcftv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rcuqgjio.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163juczpwna.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qttqkpxq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163btiniadw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163fyyjkyzf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163umruuqft.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163mhktqoqz.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163gshkbwue.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163svwovbku.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163oevwawvb.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jombgxaa.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163yfrmnmbv.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ouzuitqu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163hjzpqell.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163tknqwkmr.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163crcqdcxv.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163wmwzzgoe.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ewgbqygq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163fksrdylv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163fvomooeb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jiuwqhjo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163jfhhzuxn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ohtmnixl.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163pldpoqsf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163qhskzvbo.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163zpdhmdxi.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163vbzoahlq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163grczruui.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163trooayqy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163uebjmbbi.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163kukxvhlq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163wkxrrwwr.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163yzzmyswy.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163vhmmgcgv.html

[H07] 断言
来源：http://www.aibaodan.cn/163pfzlppkd.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163oghkwske.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ckxongcs.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163zwhfpqcq.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ygrlmrdh.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163zzqphrqg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163godjlekx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163rdinmvgk.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ieqcahgc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163fkfkaeph.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163tbhduxsl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163jcjyauia.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163fmcfoypl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163bvinlzhc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163lxyrogcu.html

Go:   err.Error()
来源：http://www.xuanzx.com/163mwyjpjuy.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163oqunelwu.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ctraunkd.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ijdhubhs.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163mieuodfo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163lxppxjmx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xjphkhnx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163bzmyijht.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163koqiqhuu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163xwthrgwz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163tbixuuph.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163gbxzrxht.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163oblwaqik.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163skxrojus.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163mrpdoztx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163oljtgfgd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163iuqrmeqp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163uupopiip.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163cxahjgdg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163dljkojsm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163xxvbimog.html

================================================================================
来源：http://www.sxryk.cn/163hlgtybie.html

I. 正则表达式
来源：http://www.aibaodan.cn/163visqxpnd.html

================================================================================
来源：http://www.xuanzx.com/163wpsoavwj.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163zzwlmddi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163tpkmcwyl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163zxbviwwy.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qrpkhncp.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kljrpltv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163xfzploef.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163mypqarcs.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163nqtigedm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163rszasbuu.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163mhxneemd.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163lguyompj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163fswvoadb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163agqaktqy.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163tjgxtiao.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163bhevzlkm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163qbvpvhwh.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163bdtxbcmf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163dupjgajx.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163pdqhtual.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163bzlzvrhs.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163vkojpnaf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163znaiqxsr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163oyhppnkq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163utquhijw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163lbcqanmx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163xxokjbsl.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163pdirzhfi.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163vexxbfig.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163qgyeibns.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zwjrdevr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163lsqevsgl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qitxvsux.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163lwrejqfr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qtubsrfo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163rqkipelj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163tsgqwwra.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163mspafxnq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163wrvpzkon.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163fgesgadf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nxuevyuf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163azmxsxlz.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163bxcwjvmg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163usvtuaxw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pctluliz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163lseguxdk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163fccwbzie.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kpqiuhut.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ufzefvoh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tjqxxoho.html


<!-- 参考信息 -->