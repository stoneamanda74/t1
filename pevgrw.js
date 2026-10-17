外链999!wailian999！

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163gaiyhecd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163fqijgqhw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163szmfzlyx.html

TS:   // 同上
来源：http://www.sxryk.cn/163yibtrfck.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163qrqrrxsb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jqlqyvxh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163hunsyewj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163thchcish.html

================================================================================
来源：http://www.aibaodan.cn/163zgkypgsp.html

G. 面向对象
来源：http://www.aibaodan.cn/163zyaoazkc.html

================================================================================
来源：http://www.sxryk.cn/163scxesbxb.html

[G01] 定义类
来源：http://www.aibaodan.cn/163apxuiwdo.html

Py:   class User: pass
来源：http://www.xuanzx.com/163trtxsjzr.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ewdqjjam.html

JS:   class User {}
来源：http://www.xuanzx.com/163jvnirzup.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163mjdtuyxt.html

Java: class User {}
来源：http://www.aibaodan.cn/163spbgyqcu.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163hrjrfgta.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163hebdvute.html

C#:   class User {}
来源：http://www.aibaodan.cn/163coqrckbb.html

[G02] 构造函数
来源：http://www.sxryk.cn/163wkmbpcsg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163opjvtoht.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163fyxynaxb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163wgzxklwx.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163oagdtzst.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163lubpotpp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163cvmopmse.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163qmewexcs.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163pcqtndtt.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163vnbchsvv.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163acxuzcit.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163cqiydtog.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163casggftk.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163kmmzoyeq.html

Java: private String name;
来源：http://www.xuanzx.com/163yeytxwmp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163emnandbe.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ojmifrek.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ozcjtrwu.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163qgcghpda.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163hhmrbbhq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163jisudimy.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163diotserq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163zbgjgdoj.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163argcnybj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163hijvptnc.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163kmtptpoh.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163fwdqisjr.html

[G05] 继承
来源：http://www.xuanzx.com/163fkhxbrdv.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163kzqqcaip.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163zyhbkxas.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nzbommnj.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fcfpbrih.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ozhfyqjy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ugvlqwhy.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163cnfukkam.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163susycrgi.html

[G06] 重写方法
来源：http://www.xuanzx.com/163sdgegpwa.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163jxwuxyla.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ihlmseeu.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163nmdzzmfp.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vbhgeajc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163rxcfmhvy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163scbasuco.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163bvrprnru.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163paxtoxyg.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163fsptyecg.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163clnhjuoz.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163veexffhu.html

JS:   super.greet();
来源：http://www.sxryk.cn/163xlfagmti.html

TS:   super.greet();
来源：http://www.xuanzx.com/163merhwjuv.html

Java: super.greet();
来源：http://www.xuanzx.com/163qirgvkfn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163tyjrdhdi.html

Ruby: super
来源：http://www.sxryk.cn/163voujspmm.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163uhbvxggd.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ufllnszd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163bnuaarxw.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163vucixgxw.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wvyjkqkg.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163iblricub.html

Java: static void f() {}
来源：http://www.xuanzx.com/163pwfsqhrx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163giopwimx.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ggzoitrs.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163wvvnqutd.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163onuyzniq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163rduglnpd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163xrcahbqo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163mibkptgg.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163zljapaak.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163bszeprqh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163zutwzvsq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163gudhyxpn.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163zsyeibkb.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163hqvmihru.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163wnuriedz.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163mrqxymzd.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163bngbeltl.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163euqqtppn.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163fvjydscx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163xuxuisyc.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163rlslmcus.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163dgskzade.html

[G11] getter / setter
来源：http://www.xuanzx.com/163vrgdprtc.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163trwekujl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tgevmiem.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163evspehpe.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ctpphadn.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163fobmnvsq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163xxytihjb.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ojisildp.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163zozuwogg.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ukampmdn.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163xtymlfol.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mptlemne.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ruueueor.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163cizkhwwa.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163nkmigwcc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163nhjogvzr.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163neepbchx.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163pnxwkjji.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163upqyifcc.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163mleggdyn.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163bnegwfyp.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163rkffcdag.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163pfxkqivk.html

Java: u instanceof User
来源：http://www.xuanzx.com/163jxxomypc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163hnkrtguo.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163dsffgrej.html

C#:   u is User
来源：http://www.aibaodan.cn/163tjnfssag.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163bmijrxsb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163phyqixjt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163khnlldvx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163gkvmqshb.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163mvqqexpp.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163iilhlvba.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163vbsgkuam.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163yewhiqhp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163tsgyeumn.html

[G15] 枚举
来源：http://www.aibaodan.cn/163mnspfetg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163rozxugqa.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ecipymvq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163mkuadtdx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163sldjieqk.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163xrbbovcq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163sqampvub.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163rpzgfjxp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dfsslkxa.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163faacptun.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163vjovgdcw.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163zirefzok.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163aqjlwzzk.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mvdycaoh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163avxtzfda.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163mrmecdrh.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163egbozwnp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163mefxzxdv.html

================================================================================
来源：http://www.aibaodan.cn/163mfdlaidk.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163svxyzazv.html

================================================================================
来源：http://www.xuanzx.com/163pdzwvqhj.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163qupmaauz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163hatvmgei.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163fwxyspca.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163nfastkzd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163wfiuvmnw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163jtqwymjs.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163tdkblbxp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163pooqgitc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163omsgdkaf.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hbmdkuol.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163mbqmbxeb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hwpxhfve.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zxswkzkw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pidnsegr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163euddnmlf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163iwcmewfd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163gtahdrwm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163gugkijzp.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163onohmdih.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163gfygrqwa.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163bxeolltv.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ornezamq.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ykzifdge.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163autbfjzm.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163hsxvrssw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163qdbhvljx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163echzxxaq.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163kovdxifk.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163tfvzjrzm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163nnjajqnm.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163gxbqnuwv.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dhlezjyh.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163slkbklyv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163wvxafsgn.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163mihwuzfh.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163uqdqpsbh.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163qxrbonoj.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163iwacmydx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kqrvmowp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163stvtvali.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163brsmboot.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163jeshgrpv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163xejxivtx.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163yktrpjjy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163xqrzclni.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ahuycjdb.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163lsgnaruk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163yzusgobk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163icoqtche.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mvpqxbpk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163rrrdjlzj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163cbzptuws.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163fviqapwo.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163fiwwqdyt.html

[H07] 断言
来源：http://www.xuanzx.com/163vioqiszb.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163dwwgwytw.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163csgztiom.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163sncnheui.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ewgxxqkj.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163vqbnesae.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163tvswsren.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163fsxqqnlw.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163aetcdhif.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163kpvmortn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ohrwsikp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163yyyvlsuf.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ienxfxij.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163izvbtogv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163zkbfignh.html

Go:   err.Error()
来源：http://www.xuanzx.com/163axrghqce.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163qhcznztp.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163zrrdmblh.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163nvtujcpy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163gijqubpz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163mdwmwgdm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163egzezbmp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163mzxpkqzs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163rocsysre.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ehpvpzlw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163wzngkhdm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ivmyxuiv.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163flwarxob.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163xunjttsi.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ojncrhqb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163nofktaql.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kfwnnmov.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163xxdglkdx.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163btxkwaiq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163agzmxvtl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163rahtnsem.html

================================================================================
来源：http://www.aibaodan.cn/163dsjftpkx.html

I. 正则表达式
来源：http://www.sxryk.cn/163coinsfrk.html

================================================================================
来源：http://www.xuanzx.com/163motunlzk.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163sfipqaee.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ywytgmog.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ccesxxri.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163aqjylthd.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jeolbzvm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163jgwziahm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163etdtntzf.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163egsivbjz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163omeyhdom.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163gcqawilh.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163nrthkjer.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163kcrrictq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163jjukahhk.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163yuybhtid.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163fjwvfyuq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163muvyxocp.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ksllxelh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163wktlhuiv.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163vnhuwpnu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163lucqbuwx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163swvapvqt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163fehagsbz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163winshzib.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163jvvipcbl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163purpgzah.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163hknquzaq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163qhypbgmr.html

[I04] 正则替换
来源：http://www.sxryk.cn/163mambpckt.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163yhppuuvb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163uuafugvw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ujmhnodz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163pjwsfxey.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163xsoviezl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163efnrbbrp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ypfpaepv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163tbfpoete.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163npovcmhq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163bktuspqn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163tujxiuqk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jxenohok.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fkkpkzis.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163sfekwvpt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163gkrhsvlq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163yjwtupel.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163dbusvlek.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163sgihgeoy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tiainypk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ueywghki.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tkemhpgy.html


<!-- 参考信息 -->