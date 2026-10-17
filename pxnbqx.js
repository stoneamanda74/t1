外链999!wailian999！

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163rkdgroqw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xithngvk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163bgtpacjy.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163mluzhjcu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ifidvjwn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163lvpqscbn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163lrmzxlih.html

TS:   // 同上
来源：http://www.xuanzx.com/163pmxvbtwc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163dpauudyn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163tznpywtu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163yembjqcx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163jrorxaes.html

================================================================================
来源：http://www.xuanzx.com/163zavuafjt.html

G. 面向对象
来源：http://www.sxryk.cn/163wgafyutp.html

================================================================================
来源：http://www.xuanzx.com/163qdumqsse.html

[G01] 定义类
来源：http://www.sxryk.cn/163slhzawwm.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ljsortkj.html

PHP:  class User {}
来源：http://www.sxryk.cn/163rmqgiipx.html

JS:   class User {}
来源：http://www.aibaodan.cn/163culrisyv.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163pdwdokqy.html

Java: class User {}
来源：http://www.sxryk.cn/163oeevaich.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163bwqlbhdv.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163khiiknzy.html

C#:   class User {}
来源：http://www.sxryk.cn/163mhdtdvzc.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163rkzjqgzz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163wiusslze.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163lyrozmjp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163kkysbazh.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163hdptricf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163dmjelbgh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163xujqfzjs.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163lfgdwlvq.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163hzbtitzf.html

[G03] 实例属性
来源：http://www.sxryk.cn/163xyqeitnq.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163djdzghzc.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ltwhwpfx.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163bgighqve.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163kuhesdex.html

Java: private String name;
来源：http://www.xuanzx.com/163uqozafsh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163arhckuwu.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163nltmwvdr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163hwvsroja.html

[G04] 定义方法
来源：http://www.xuanzx.com/163yfzmrwbx.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163adyzgiaq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163rzlqbbuf.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ueqbqmiq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163inxusyiy.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ktvflxch.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163odhsgjuz.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163yzbbuxop.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163vwvftoeu.html

[G05] 继承
来源：http://www.aibaodan.cn/163wtvsezdj.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163cztpkbrz.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163aayzxqim.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rsmylcjl.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163bslblxkc.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163mgoebucs.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163kfehnmww.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163yelmcgvg.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163iwjswkyt.html

[G06] 重写方法
来源：http://www.sxryk.cn/163idmmnvwl.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163tbctyeuf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163forywcsm.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163jbuhpcuj.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bltaxsxj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163xcsqurlg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ygpppclj.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163xrujmfdp.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ptumdgps.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163wldizeqe.html

Py:   super().greet()
来源：http://www.sxryk.cn/163mxojfwjx.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163gnzxmjad.html

JS:   super.greet();
来源：http://www.xuanzx.com/163rsvrnkxj.html

TS:   super.greet();
来源：http://www.sxryk.cn/163puahnjkf.html

Java: super.greet();
来源：http://www.aibaodan.cn/163xzoioxsd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163erqvnolr.html

Ruby: super
来源：http://www.sxryk.cn/163yxjluspf.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163sjgqedlx.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163cvcrmdxn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163tvbuancn.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163tqyotkri.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wrrsrkdv.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163fhitygao.html

Java: static void f() {}
来源：http://www.xuanzx.com/163wmkfksqf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163jjnjjndl.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163jkxkiqry.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163nukyvssp.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163hkhkdtdh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163nuqhtpez.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163sslondkb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163vtfhacgn.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163czhpfdgd.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163kfwpiikc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ccrccwea.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163vqqryzal.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163srildqdg.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163xgnhfpxp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163iznmpbmu.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163dawuonkn.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163hvoiuglc.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ysrlxemq.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163mbrauaxt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163xbrgxqjr.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163uzkraiug.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163chmxabff.html

[G11] getter / setter
来源：http://www.xuanzx.com/163qewimvhr.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163wvqdpqim.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163lewjgimx.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163nootropr.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163gsbttnck.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163lbbqical.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163aijjvqcc.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163hxsylepf.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163ujrlbwed.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163izsquegu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163konanlff.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163eatelfgd.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163upbhjzys.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163mgvucuau.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163zlveueys.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163lpxdaqcx.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163jdsvwnio.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163lapxexzw.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hrgpybxy.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163olgoqxca.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163dqutsklo.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163fdwedmph.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163jwbvkfod.html

Java: u instanceof User
来源：http://www.sxryk.cn/163rgilvodo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163tenrxlkv.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163jpaxkodu.html

C#:   u is User
来源：http://www.xuanzx.com/163ejpolkup.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163nzkhpcjb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163yrbmkvzc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163lvuevcxz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163uvsmuqmn.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163qsszbzbh.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163aazrcyjd.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163twkbnvdt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ovvadjba.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163xahzomte.html

[G15] 枚举
来源：http://www.sxryk.cn/163mueljjse.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163anknptgi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ijpvmrvf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163umyzhxvz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tjdppaga.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163uekrplee.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163aygndkiy.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ozuopnwb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163syqtpakv.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163vmugepgw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163vqeyqjqm.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163nqcfunqo.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vwqumvcz.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163euscfoub.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ehoovdyc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163akgajrxw.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163coelpdal.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163hzoblrrn.html

================================================================================
来源：http://www.xuanzx.com/163tjsfcjnt.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163wzkjjxmh.html

================================================================================
来源：http://www.aibaodan.cn/163bfghrosv.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ficqpgnq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163drvypbtt.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163pwdqufyq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ckvhmmwb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163uxqxsyeb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163rhpecwzb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163diwpcovb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163nrpmtxkc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163rdjdbxgd.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163wqzpmwns.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163xagyskzw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jxctkyxg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fhzrvwyd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wmivrrid.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bekbyqws.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163fppigpdf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163xqdwpfbd.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163dypribdg.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163dylaxypi.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163qssrrstn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163bpplmasf.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ufwxvvoh.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jxrsirux.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ebnvxgmn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163elrqlygc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163rvlrtprl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163kblvyudr.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163hhjwldqo.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163onczarey.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163wrcxgeee.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vbprlafb.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qqjkeert.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163gyzqdkus.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163hzloabjh.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ksgedatn.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163hpnschak.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163catiazkz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163rpgxytfn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163efptlmew.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rwdsrcad.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163eovcssgm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163jifgyxia.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ccxaeaph.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163bcrbtfbv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163xdrjflbq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163rhqhsoac.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163jgsmxcte.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163kpynvxoy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163tvkekpmj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163yzkraniw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163fgjdzrqy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163lmfqhfso.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163oodaaolt.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163hzcwpoos.html

[H07] 断言
来源：http://www.sxryk.cn/163uiqsxaik.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163lsgilhdb.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163fwmqmnvl.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hzhzhqly.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zgkhkejg.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163amaukyem.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163gwgupmwc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163gefxkopr.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163neatpydc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163qynwgxtp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163bycshplt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163btnlbyhr.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163wgditxmy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163taafctjy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163nkuaoypj.html

Go:   err.Error()
来源：http://www.sxryk.cn/163mdeklijt.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163bjmpiufj.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163etdgztji.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163gqheubxk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163hiylzduv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163fbyakwcp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163tefawrwm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ewrgkmpz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163svusiqyl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163tmiasufq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163apmjgxtf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163syiqxvpt.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ghkuepsr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163inlmqbtw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163uotymhsw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163pkjoatat.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163cvepjrmk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163mhpfswae.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163bpiyalbs.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163wacrqtrf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hwxksjik.html

================================================================================
来源：http://www.sxryk.cn/163biqnfgoo.html

I. 正则表达式
来源：http://www.aibaodan.cn/163dqholxpo.html

================================================================================
来源：http://www.aibaodan.cn/163ywoyuxbq.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163itbyddrr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163rbcretpu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163kcckrlwg.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163umeknmpe.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hzbedquk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163fdhqcbfh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163afzlcwoo.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163vdfvuqlz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163tfubhykg.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163wepbvxpg.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ycchgavh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163zkjmntyz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163sdatsbbc.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163sukojtiy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ysadedeu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163huacuvdn.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163kxujpjfk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163hpaohoob.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vanbtjba.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163dlyvlsxc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163iahwhknf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163cbpddvpv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163eqaorpph.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163cjbqkxgv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163jwtsqqrl.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ftlmjqdh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163bixlfjfx.html

[I04] 正则替换
来源：http://www.xuanzx.com/163wvvxsrar.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163aybdtvoa.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163hgsywuuz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163swdqtrxv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dxakixdy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ixkqjqoc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163lpzdcddk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163jkakhcsy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163zfpxbifo.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xlcfhrtc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163bthbhdou.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163pdqijexs.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ipegrhwa.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hmiobbnk.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163mzbselrl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163hwbvfzuo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cgjacseo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163kclxkomp.html


<!-- 参考信息 -->