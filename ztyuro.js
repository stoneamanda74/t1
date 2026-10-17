外链999!wailian999！

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163vwxzgsnr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163wkrnpepx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ebtverpx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163atsubcrm.html

================================================================================
来源：http://www.sxryk.cn/163qyyllrag.html

G. 面向对象
来源：http://www.xuanzx.com/163vwgnoqyu.html

================================================================================
来源：http://www.xuanzx.com/163tvlcnsvu.html

[G01] 定义类
来源：http://www.aibaodan.cn/163gzneochz.html

Py:   class User: pass
来源：http://www.xuanzx.com/163tofgknxl.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163yokuocdx.html

JS:   class User {}
来源：http://www.sxryk.cn/163cuysnxhv.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163jfnyqozn.html

Java: class User {}
来源：http://www.xuanzx.com/163rjilusnf.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163wqapsbzb.html

Ruby: class User; end
来源：http://www.xuanzx.com/163rndodjnr.html

C#:   class User {}
来源：http://www.aibaodan.cn/163pwyhvenf.html

[G02] 构造函数
来源：http://www.xuanzx.com/163jxryjzbu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163nncqtiyo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163vnozzfta.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163kxwrdvdu.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163uvmfsymq.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163yxxvakvn.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ifarbfcn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163flrzvsaa.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163pqkpypwl.html

[G03] 实例属性
来源：http://www.sxryk.cn/163pftkswrd.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163vksxslnz.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163rmhprghv.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163zbmendrz.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163gsfjaarp.html

Java: private String name;
来源：http://www.aibaodan.cn/163cwevuucm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163lzxxyqpk.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163tgsivvic.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163kohewupl.html

[G04] 定义方法
来源：http://www.xuanzx.com/163zygdaatf.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ewkmfeoa.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sgztinlw.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163jejmhgpt.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wgrwghmd.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163rwoxlnyo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163wmftmkgo.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163fmzvdgsw.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163sonkpwhg.html

[G05] 继承
来源：http://www.xuanzx.com/163dzsgtcuk.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163augvgtxh.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ookwrnto.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qrgjwteq.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163sgreovrc.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163yfkuagiy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163snvkaras.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163pfdzwcyy.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163glwmyjwl.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163fabvbopl.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163xmhycprs.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wyfyqkoj.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163nsdkuwjj.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tjolnygc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163agxleeft.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163buwwoakn.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163emrauvxf.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163kqtnbeks.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163szgfqslh.html

Py:   super().greet()
来源：http://www.sxryk.cn/163hlcgjiov.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163kedlgqes.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163qumhlhtm.html

TS:   super.greet();
来源：http://www.sxryk.cn/163akojxpoq.html

Java: super.greet();
来源：http://www.sxryk.cn/163crdqyjps.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163fzodhxrm.html

Ruby: super
来源：http://www.xuanzx.com/163egzyftzm.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163sriuqodw.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163iogizmkz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163sjnttost.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163nuiaxezj.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163bbhwojiv.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163mesqqxjo.html

Java: static void f() {}
来源：http://www.xuanzx.com/163zudtjprq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163jedwlcdq.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163pjaaifao.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rpsbzttx.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163buttyowq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163eastmuqj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163vaqtdlqv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163zfpsctyn.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163fvptblmz.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163estngkrt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163yabqrrio.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163mowidlkn.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163nhitodon.html

[G10] 访问控制
来源：http://www.xuanzx.com/163jjccdbgb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163tzcffjke.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ttnnrgko.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163qhyyqjuz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163hampyhyz.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163bresjffi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163wydkfuug.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163dlyvysyz.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163bjidhzmk.html

[G11] getter / setter
来源：http://www.sxryk.cn/163oenvbqnv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163fmpstsji.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163jssipgwa.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163lmjlwgfu.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163iwgxxlan.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163aaxizboe.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163efelveba.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163kdhcdtqv.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163coxeooll.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jcokjjjl.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163vkrthpqb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163pvxtjadj.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163xjcvmucq.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ikandtsq.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163oskkwokd.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163duenodad.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163hznrxcev.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163zczdlfnx.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163hydvrcvf.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163iphmitxd.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163oknuddsu.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163rgmtwlok.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163trkncsqk.html

Java: u instanceof User
来源：http://www.xuanzx.com/163gxaxrdzy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163awtzcotp.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163oztpfzft.html

C#:   u is User
来源：http://www.xuanzx.com/163fsnfaipl.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163phfatvop.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163vsstahiv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163tabiobry.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163wcjbkyhk.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163nfubkude.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163gahnalvu.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163qymbbmuu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163usldswpn.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163kirtfbow.html

[G15] 枚举
来源：http://www.xuanzx.com/163dtuumgss.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163qaxjtzbx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163zpxkzsem.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163jfvikprx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pcwuljxe.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163kmpjzyoi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163hfonemzn.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163xlbvwsly.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xvgvpbvm.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ooobimrv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163cuwsxral.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ygorqfns.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163dadtaizz.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163kqepsxoo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163btarfswi.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163accjxxym.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163tgizuvsd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vupmvvbz.html

================================================================================
来源：http://www.aibaodan.cn/163tgayxbiq.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163mcjjhyqj.html

================================================================================
来源：http://www.xuanzx.com/163vczlzbma.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163pvfltwqs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163pcmzdxye.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163wtqsegzj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163hddozavx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163kwgqporf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163hfidqqng.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163yknvnaeg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ibdneaax.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163wadufaie.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163knrytxfb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163eencadkn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wdkwodgc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kdlrlbmv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163njsrztqw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ndaebclz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163uunhslpv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163gsatickq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ocrnubgz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163vubdnmry.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163wawgkrfh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vnuouxml.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163pbqbuetx.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163iliidnjw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qmzwjqpa.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163vxwlrvrf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163hfcambxu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163tpvblkcm.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163vjqyturv.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163zjoromyn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ypicpngq.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rguvssyw.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fwcpopey.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163axonubos.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163dufiizwh.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163joakyrci.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163sxemixzo.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163yjimvviv.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163awwffrsg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163savobhza.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qxzekief.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163lqrjinoc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163sessflen.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163sssvizcx.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163njejooga.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163prtvdeyr.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163mkjvlbdn.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163yngbinsd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163gdhktbjt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163oyeqzqmf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nphoxezl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163isbjydhg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163degfyekl.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163odankpxa.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163pjydhtep.html

[H07] 断言
来源：http://www.xuanzx.com/163wojiyvwo.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163fdkphtaj.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163dfftckos.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rhierpzv.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nbaqjdlv.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163fdedambj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163zwsohahp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163fwaxxjpc.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163mzhmxmzj.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163yyirlwnn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163cducyuum.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163tkykltyd.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163cwzrvcto.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163qiaaducy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163augrewfk.html

Go:   err.Error()
来源：http://www.xuanzx.com/163dzrmyfjo.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163aceyhqvk.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163xtuuwtro.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163fugxkdhc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163mzjbmyxi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163irccrmsq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163slklxgaq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163qdafcypd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163svlqclgo.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163erntegbl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ebsvlrty.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163qfivfoqz.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163fklhiyid.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ybhgmjbe.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ydsxlxla.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zgjepwuo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163egyuzhul.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163kahihwnd.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163glspdjps.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163vhgqrbtc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fyskdglf.html

================================================================================
来源：http://www.sxryk.cn/163ivgnlote.html

I. 正则表达式
来源：http://www.xuanzx.com/163jvockqoe.html

================================================================================
来源：http://www.aibaodan.cn/163fdogyplo.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163vxoznpdh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163rtfxjnji.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163zwjagicv.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zatzlxqn.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rtvmqgpb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163qqntfrrb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163igclsvks.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163fhlzdjca.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163umrukces.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163lbzamkdy.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163pnbmsgms.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163bwjjqmkg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ocxuteru.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163knnhcxvx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163pykqinwj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163aqpwicxm.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163kkysguqu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163coxclhma.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163kmhsjftc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163tcignrlc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163wgqbwswc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jqxjouqa.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163wnitfsze.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163xydvjdhb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163wzymnplz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163tcwmseav.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163exosrmsy.html

[I04] 正则替换
来源：http://www.xuanzx.com/163nmcbuunp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ujwtajhu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163gtcbwmdw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163bmtyrbrd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ogczhgxm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ctfegtrp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163hgsbagbz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163kxwbbhic.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163dxhuyivz.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163tcfvodfv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163lqnhfulh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163cthwmcly.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lopjulps.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wkzxfxah.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163pthqsnzm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ectmgvqj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ubiapdyx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163wbhikqna.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163hmvuxrjk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163deiyshyp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163wzlrddut.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163msprfbwi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pearmbjm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ebhmyiln.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163dmxvmwlg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163rccrmlni.html


<!-- 参考信息 -->