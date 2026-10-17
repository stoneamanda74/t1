外链999!wailian999！

Py:   class User: pass
来源：http://www.xuanzx.com/163wnbgsbot.html

PHP:  class User {}
来源：http://www.xuanzx.com/163tfeopfgx.html

JS:   class User {}
来源：http://www.xuanzx.com/163xzrzisju.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ajwjcbnv.html

Java: class User {}
来源：http://www.aibaodan.cn/163xvpjfsbv.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163gygjjmor.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ffdfyjxr.html

C#:   class User {}
来源：http://www.aibaodan.cn/163cjzuwqji.html

[G02] 构造函数
来源：http://www.sxryk.cn/163tuzsdvuj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163mgjjkdqq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163gybhsvfh.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163jvcxgube.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ulwpmuwo.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163vptzqgvd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163cudxapan.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163vryuxksl.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163yssnyeep.html

[G03] 实例属性
来源：http://www.xuanzx.com/163idujhejy.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163bthzfdbx.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163dsipnmib.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163oesxihad.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163apjqgxdv.html

Java: private String name;
来源：http://www.xuanzx.com/163yxyoizmk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163hammxqpb.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163uwwotfqi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163xwthnaij.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163rtkfdtsz.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163kstaoycw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163qgpuizho.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163thxefalq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163dcwdriil.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163zzxmbwwc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163mfbudkzt.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163xtutttny.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163otcsmhha.html

[G05] 继承
来源：http://www.xuanzx.com/163tszhseir.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163lthbywbv.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163pvnpzzwp.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ftloebsn.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163nesocdme.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163nvxqirus.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163hciixfgz.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163kqlcrlkd.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163usqosaal.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163assupbhk.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163urkpwusn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163zypuwfww.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163afaxkdmr.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163lbqyrshb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163oxdnkqsf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163hzmkfzmp.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163slaqgmlt.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163hrnvxoax.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163dsblgbde.html

Py:   super().greet()
来源：http://www.sxryk.cn/163bybqcpiq.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163wzhgseuy.html

JS:   super.greet();
来源：http://www.sxryk.cn/163lttpdmpj.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ohmcglst.html

Java: super.greet();
来源：http://www.sxryk.cn/163bpmfvnch.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163abioywjr.html

Ruby: super
来源：http://www.sxryk.cn/163dkjxbytz.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163gjjbbbed.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ryshmppv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ioaegios.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ebkubqln.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ociigaal.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163cvpupioo.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163mazwiwtt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163hfnuizbl.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163chagpcyu.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163bzzecrzn.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ptcprkxx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ehpbfadv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163nmhylrcb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163iraaihay.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163cljnzyuj.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163fabxxgow.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163fuvfodru.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163tktfdmwz.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163wjudlqiz.html

[G10] 访问控制
来源：http://www.sxryk.cn/163sduthorq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ndfajjqe.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163hmshlvgk.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xawbojgu.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163gothlahz.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163fikbwlmv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163btoerdte.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163dctohcjw.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163fzhdltys.html

[G11] getter / setter
来源：http://www.sxryk.cn/163kwojdcwp.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163mggmrret.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163wpbwuzsw.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163pswvmxcn.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ljupqmve.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163jlnrenqe.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163hzwkprah.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163minwjajn.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163jvsejrlc.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ftssonmj.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163fdcnzwmx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163byjmrgeb.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ovmejmlx.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ygkfdkpo.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163gjyeifgp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163mgfvrctr.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163wppenhbc.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163bxwwvtji.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163nvmzjjxv.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ryqyqqjg.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163axhougmj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163gnanrark.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163nltoifjb.html

Java: u instanceof User
来源：http://www.sxryk.cn/163wkqhchaj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163zwxgxqkh.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ufheelne.html

C#:   u is User
来源：http://www.sxryk.cn/163hyhjztkl.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163suyyzdic.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163sgvrqorb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163skzvvqub.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163wwnwhggw.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163pznfactu.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163kembuoir.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163jvacaqnp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163gkeornmz.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163astvfmkp.html

[G15] 枚举
来源：http://www.aibaodan.cn/163zmizxzld.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163zbanocsm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163iarapsev.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163yqarsqic.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dpqzvlbs.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163wnlqjeuh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163jmmnemtd.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163xjobcwmk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163klfuqsad.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ihlvczjd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163hmpglukr.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163zsecxqzo.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163eveejdun.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ssqhkisq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ihbggvoj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163pqiioria.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163yqlimoyg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163mkymjqbo.html

================================================================================
来源：http://www.xuanzx.com/163oprqtwmj.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163bopztqhv.html

================================================================================
来源：http://www.aibaodan.cn/163enmcdhit.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163vnzjdtsf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163tidyketj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163koqawinp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163hfvvouct.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163jafdlyoq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163jofozaqr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163zgqdnpjc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163cfvcfnvx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163frdofzre.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163beluosdt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163vsgqrrro.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163diocfgca.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uwcobsqh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yspamufo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xfegdxrj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163fpmbmavc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163eqbiayym.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163bkaikioy.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163tbllqdyz.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ocruxspf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wkwcbxyj.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cqhgxfan.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163njixptmk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tbdzszql.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163bpcxrvwd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163hcxkcgje.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163vfaxbjpi.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163efrpzsow.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163mimugraq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163jxjxrdrq.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163oklcbede.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jeibvtcp.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163vndgvglx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163empesoyo.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163cxeoafwe.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163dysbxjgj.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163lezzdfkb.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163cxwkeivl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163xrrpwork.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163oqxckiry.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wzjheuet.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163wkgjgnij.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163qomnzdzz.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ggfcwggm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163gygzdppl.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163tipsxqhv.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163gupdqook.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163rgwrjais.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fcnqrjiy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fteegxka.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163xajxpxfs.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163vwylzeci.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163iqnzrhbf.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163cszbsect.html

[H07] 断言
来源：http://www.xuanzx.com/163gunmwddh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163xuhanuoz.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163eqejfnmb.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163komjieee.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163uqxhkyrd.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163zqlvcsbv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163kkzutyem.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163vhiyxebp.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rlfohaxw.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163nhkducrp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163bctihtrf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163jdewvqtf.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163kjdeslzq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163otksfhbj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163blxoonfe.html

Go:   err.Error()
来源：http://www.xuanzx.com/163meeoypok.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163tsostjau.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163yeskfvjb.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163nhqivvgo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163orydfyrh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163gdzezlhs.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163dbwjiggw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163hhijndpx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163uijdwtmw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163hfjohncf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163eiovfsix.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163pfpyxvfc.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163uvkxhdgz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163onfsxois.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ollmfayr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fnynitwd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qijzkjrz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163twavyeso.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163mkccqtbb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163mzrgraaf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163kxjouyuh.html

================================================================================
来源：http://www.sxryk.cn/163xifsvamg.html

I. 正则表达式
来源：http://www.xuanzx.com/163ntzrfefr.html

================================================================================
来源：http://www.xuanzx.com/163yaizhlek.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163huigccsr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163jlpdvdjn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ygexgmfp.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163pvbtrfnp.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163jgrzfwjd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163jxdbxuhs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163nlglhrej.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163iikdaoxl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163jkjyzxpx.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163sycxaozk.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163bbmpfdhb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ncyxaadm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163jooxvnuh.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163pgmmfyqu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163nsanjimj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163vlktzjgu.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163skajqnll.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163jhnpqspi.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ncompvan.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163avvpfybc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163olrajynr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163cmoijqpw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163rerycxfn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163skcjkbxx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ozwfiaav.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163kjphtkuv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163vglukzfe.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163qnybewvb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ezxvjnqf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163hecrddxm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163dkwpxkzm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ssmbtvvk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163tlihoyon.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ugwuqfjk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163afploudi.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163zqxxedtv.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163cnmwqghk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163nytgsqgc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163mjdfjuiy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bzkbkmlf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ywuhyqhy.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163megkrfsi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163cgsedopa.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jxvlnfez.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163yekywjnz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163vyzaxfxh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163rdbsdvle.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163emtntkbm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163xjceaywb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163kdkbzsvn.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163pyxsgems.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163hhctxege.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163zbljnftx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163abjwxrjv.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163jjzpphrc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ppdectva.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163troxzurk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ifhcokfe.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163vlvzcqfu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163sjbdgnwo.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163jioiybkv.html


<!-- 参考信息 -->