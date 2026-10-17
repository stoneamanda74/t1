外链999!wailian999！

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163yrlfkrap.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163tnrbgyqm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163avlzvroe.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163xiavecib.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163fjdcngyk.html

[G03] 实例属性
来源：http://www.xuanzx.com/163fwejtdis.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163pqdfbwyq.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163jeabwcwh.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163yrqqlnji.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163hwawiipz.html

Java: private String name;
来源：http://www.sxryk.cn/163hliaxcyl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163amdxqawh.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ketekygu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163xphadadp.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163zxstwwzu.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163tgkmppot.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ifqbdpoq.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163fztgofrr.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xjdqzuwb.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163vrnqbxsy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163cpajqbpu.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163bvhfcise.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163tswfmchu.html

[G05] 继承
来源：http://www.xuanzx.com/163pfrpqdsh.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163qpoltqeg.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163kuaoeuoc.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163urtzugka.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wjdzjkxo.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163djbqckko.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163zsdrrdjr.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163lpdtczud.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xrsjjrkc.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163wguyrzft.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163gnjzugaq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163enqmjebe.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163yzlcynzy.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jcckgbmt.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163pwsjfmya.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163etfyzerd.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163kcsigzme.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163rcylpwiu.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163djmrveli.html

Py:   super().greet()
来源：http://www.xuanzx.com/163lksqjlez.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163yxsiopop.html

JS:   super.greet();
来源：http://www.sxryk.cn/163sizkksra.html

TS:   super.greet();
来源：http://www.xuanzx.com/163gnuwclwh.html

Java: super.greet();
来源：http://www.sxryk.cn/163osvuziun.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163dxjeskgf.html

Ruby: super
来源：http://www.aibaodan.cn/163agebnsux.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ztaacxte.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163lnuxzsxt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163zlbkwcni.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163rusjydac.html

JS:   static f() {}
来源：http://www.xuanzx.com/163dytioenb.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ylqdsikb.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163oyviagro.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163hnsykklh.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ioxvloxh.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163klrpesfa.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163dautnmxg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ydhvejbj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163clhodblt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163cijvkqke.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163zlaiayea.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163nwuzdfjj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163tbubkloy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163myescisw.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163bzfojwzr.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lvholyfi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163suvmfwfl.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ahiphpkj.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163avmiobvi.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163yykumvmh.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163nztaohum.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163acjtbalc.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jbhtwurx.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163hpnbzztz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163hpvuwjoi.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163buvrotne.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163zjnhtcuv.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163xnrgeljy.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163kyzsposj.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163cepnllxd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163drkhbsbv.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ezvyxzpb.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163fisnydpl.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163nmnusvsz.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163aseujmtf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163enpicvyp.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163atldysbr.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163uvoqpoht.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163vlbrexci.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ctdltuua.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163mpylfozc.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163grlpwvnb.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163lwvqxptt.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163lzmmzcks.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163dbnwcyew.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163syvslviq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ljfjznre.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163jjjrcubm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163nkjqvyxy.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163vcjhuslb.html

C#:   u is User
来源：http://www.aibaodan.cn/163uylvwufp.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ocrdphdi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163iqzudtlr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163fjphikqy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163swzjrkif.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163rgroveys.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163elefgsuq.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163rmumiqtl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163dahxqnmz.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163otoutxxn.html

[G15] 枚举
来源：http://www.xuanzx.com/163vcuuenmt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163tapyrvxp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163tlspkrza.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163aiggxjjm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nnydjsoj.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163tncgmist.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163cotyxnoo.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163iqxkkiet.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163hsndfxfg.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163otzblwuk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ffnxksyu.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163fodiiefl.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163phzvmtke.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163djiyovji.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ikwpbtmn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163elrengnj.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ggejvchs.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163anthizdz.html

================================================================================
来源：http://www.sxryk.cn/163cxgwkqwf.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163qcsykdmf.html

================================================================================
来源：http://www.aibaodan.cn/163ctwrodut.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163lyuongst.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163yzlvxewx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163kyezuwlj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163yhovbdqd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ssvcsygg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163lyzmdkwt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163pomnctfl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163pmjuowkb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163nkafneqb.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163edtqhzls.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163fyiuyihd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xfiiwqdo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qoahvypk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163oegocrww.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hytoqgze.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163rwpgstao.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163kiudwtim.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163znxemqap.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163csfcrllu.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163uumzgnmz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ufukdfff.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163emkuuyhr.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cmglxvvh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163esppkygi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163pkhiepwu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163oslipdqe.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163giudjthh.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163lqkirmeb.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163hdtskkun.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163zarurxss.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163axwkonvu.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163mbgfydbh.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163cwqsorib.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163yjqolsgm.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163onwdnuvh.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163afwlvkkd.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163mrahuzlh.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163nswakcup.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kgmmhoty.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ipqafioa.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ndojkvdg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163idlnzafn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163nzajatpd.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163knkheehp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163lbzhxvfs.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163pvkdraer.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ktmfltnu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163uymbnpvt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cxeokxtu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163uaxaeueh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163rgtxzfsg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163sjoarglc.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163bwqdxqtn.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163kepyofie.html

[H07] 断言
来源：http://www.xuanzx.com/163slohepav.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163jyswhxnm.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ltqfwbij.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163clefipyb.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xzbvktyc.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163bbqexaei.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163nlpfjtpc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163wgjitcqq.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163mcbsghyc.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163vmfiqpfi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163fjwvqixl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163yjwdlmgz.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163jbvhymya.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163rcanifpa.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163gpulevck.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ddkrsmhx.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163aicpdkng.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163nwaituxc.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ozwojris.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163nfafofvv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hdediyhu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163samietmh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163wgjyngzo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163loufykhc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163pajfsvjl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163lkewxjaq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163vdijtumy.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163imtrmzgy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163nolpiges.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ntapmkth.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ijklxbqs.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wrzbvgmq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163wvfddofe.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163berxlncb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163fnaeakri.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ltljpiah.html

================================================================================
来源：http://www.sxryk.cn/163fqlldnvm.html

I. 正则表达式
来源：http://www.aibaodan.cn/163flkawrka.html

================================================================================
来源：http://www.xuanzx.com/163vnkzkvrd.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163fozfqwpm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ilxrjdbg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163nrohtfaq.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163sppioyra.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vprscgvt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163uysacwag.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163etyqkopr.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163qixndudw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zphkohpa.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163wjiunjsg.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163rfzpdvip.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163vuqcrjyv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163kqpsbnfk.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163zecahplw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163xautmmxq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163rtujqzeg.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163sapyygel.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163iunqoaam.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163thzwquac.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163bdvlrtmt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163zhgiahlk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163kitrikse.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163iezkigbt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ribweccz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ryzulewu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163aeueqibw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163bywfjkox.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xrtgesgy.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163dkbrwhug.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qcfarsrv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ihodtebo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163womsnktf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163nmxgvggq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ydqrogsm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163hoftbyvu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163jxdjzkyn.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163kbykqbgt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163fistaiqq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163jpcmoiwp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nuwahcfr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163athrloeq.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xknfvrwo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163qiryxjuk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163aeoitoyh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163xhoiorro.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163emeyogrs.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163uosmtpog.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163lvzrcsaa.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163uinivgjd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mdvyhlpj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163vibywkeg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163mwfqeblz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163jqdfboeg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vspncsrt.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163hcfildhh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163puqzfwbd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163yikixsrd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163zbrojxrz.html

TS:   /error/gim
来源：http://www.sxryk.cn/163waxctvbs.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163uxncoyrn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163gkythkxs.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163rchmaidn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163xajupjib.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163jdzfqomq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163nxnwwwcv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163dwkclbub.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wzdlomvk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tzdulkww.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163fsxrnzci.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163iybaushi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163kxqxyono.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163xgnhjvus.html

================================================================================
来源：http://www.xuanzx.com/163wlowimrx.html


<!-- 参考信息 -->