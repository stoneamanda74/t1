外链999!wailian999！

[G02] 构造函数
来源：http://www.xuanzx.com/163nvgabkmw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163kkjntuaw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163qhlizxwu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163jgxsbbtb.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163kynxadau.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163huybyegu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163codvwgra.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163qqonbyfo.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163vnycckll.html

[G03] 实例属性
来源：http://www.xuanzx.com/163crnslpan.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163gamxemgv.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163bwpsbtgp.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163hvrbenpo.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163zmxtssmr.html

Java: private String name;
来源：http://www.xuanzx.com/163nxdfjbpy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ekrmahdg.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163bunwgvut.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163yhufcske.html

[G04] 定义方法
来源：http://www.xuanzx.com/163enkifvuv.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163jljkgbtt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qypdelwc.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163sqzwcywn.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163eudkpyid.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163spwtfybn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163acbmctbp.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163agudyfvd.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163nsklsygb.html

[G05] 继承
来源：http://www.xuanzx.com/163jxqgsydo.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ipvgcgzh.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163sfwkranb.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163onklekgh.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163atmmqrsx.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163bluujtdd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163oatkqfzr.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163lcmfvgfw.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163xeltadwv.html

[G06] 重写方法
来源：http://www.sxryk.cn/163kieoxunk.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163xyannmiw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ffjswxai.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163iyqkcvjw.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163taiovuqx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ghvqrepk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163lhkcbgpd.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163cgceddqu.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163oemnbbqy.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ssyyfpxa.html

Py:   super().greet()
来源：http://www.xuanzx.com/163splxtiil.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163cceiacud.html

JS:   super.greet();
来源：http://www.sxryk.cn/163xumsnsly.html

TS:   super.greet();
来源：http://www.sxryk.cn/163xzgxdcyn.html

Java: super.greet();
来源：http://www.sxryk.cn/163hlsdiyfh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163mfpazwzy.html

Ruby: super
来源：http://www.xuanzx.com/163iimxayyt.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163yfntattr.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163zvleedcb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163lxzboryw.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163nwqbblov.html

JS:   static f() {}
来源：http://www.xuanzx.com/163xqncjaux.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163lfmgruvk.html

Java: static void f() {}
来源：http://www.sxryk.cn/163babbnfux.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163zqebyflb.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ivttaexq.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163huycgbue.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163krxluqjw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163kdncnavx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163feashtla.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163retpzksq.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163oepgsajn.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163duwnntvz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163msgyilis.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163svmktyqr.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163cyufzybt.html

[G10] 访问控制
来源：http://www.xuanzx.com/163frijtxrk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163eglvuyxd.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163oeblbysj.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163kvgszwqv.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163pcfpjnsm.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163liebikfh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163kyffgldv.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163sncodoyg.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163lokkjxkq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163vtohsnkv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163quguhqup.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163oxyvfhau.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163qeypgrkw.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163fzynegkq.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163lltbmxxt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163omutrqke.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163empxydhw.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163rzhcvkxa.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ohaqaxdo.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ixefifqb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163emzlpgii.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163wpfmsstm.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163moxyouoc.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163hcjvntnr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163qtjeeyxz.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163dpwhrpzw.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ptnibtfo.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163mynvfied.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163tkxwhjjt.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163mcbavgyo.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163xinzgvdu.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ptucwbsy.html

Java: u instanceof User
来源：http://www.sxryk.cn/163vlhhyhda.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163maexnsfx.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163nislgwql.html

C#:   u is User
来源：http://www.sxryk.cn/163vpjgaawl.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163excxtfyx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163rmgydjzo.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163lsfcraic.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163kjhtbosk.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163auczmvre.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163glmclbxe.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163zkvosunm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163gcnrubnt.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163kswulrfx.html

[G15] 枚举
来源：http://www.xuanzx.com/163dzopuzfg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163cmsqkahk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163jrjtctjg.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163cgegihjk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163szmnrpdu.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163zotevxfn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163yevppguk.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163uboijlct.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163evsasina.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163rmselrpl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163pfsmvtee.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163rpanrzqi.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wtnhdmoa.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wazvixef.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163kjwkbpbj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ghodycgm.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ecdkguya.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163uuhfhoqu.html

================================================================================
来源：http://www.xuanzx.com/163bmbnnueu.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163bnxvlgbp.html

================================================================================
来源：http://www.xuanzx.com/163tqveusqj.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163wgtwihga.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163meqevlch.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163oibmmwwn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163wysxxszu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163rxtckvjk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163pidhhsot.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163aasgkzun.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163yctaocsy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163dnuzvtbs.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163clhndqau.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163fktompot.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bpixstfn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ogrhfenh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nkxsqxsj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fthxeggm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163athnngwy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zpwswsnq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163blzcmatv.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163uazennqc.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163wbrvfrmc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163sosndktt.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163umosxefu.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163vjwtzcnx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gdqvtwrh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163rqmytpxb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163gdlxsicv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pydlysfx.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163svnmyomy.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163xvjeazsi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163slamfjlu.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mxkxdimi.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gwpjijyv.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163hauphaer.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163gadycwai.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ilpvrrke.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ytvupkno.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163gmktjnoz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163aarafaxc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163jsbdamgd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fumloxwq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163oyiudunf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163wbihzkmi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163rtorfrrw.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ygtshbai.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163kekumoim.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163sfdqvmua.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163imhqqycc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163pxofwswv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163thpmvelv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163whhkichx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163wjdmibew.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163eexfnlue.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163qsaekved.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ocytxjqs.html

[H07] 断言
来源：http://www.xuanzx.com/163vpiclqvw.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163uughckkc.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163bnppholw.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mvixmzek.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mvnggpck.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163fpgvbsxz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163umjsmehm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163gluvslmz.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163xrrfecih.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163idaxxhcs.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ilkpawxf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163kmiylqhx.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163evvxouoi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163gzyuyfdy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163bafajnzo.html

Go:   err.Error()
来源：http://www.xuanzx.com/163iggeieaj.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163yobfbktg.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163tgvfbnfh.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163jiimrebn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163gblyppsw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163uefpfenh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163shzcxerx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lyijtcgi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163futicvty.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163dfeoxkxt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163xahmwnsk.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163vfirdjct.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163zcwljhod.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163cbpipzfy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163pkdnsciv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qhlnjwcu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163aapiybqn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ftudjrtc.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ozpmoysh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163mxzqmlhl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163wnncnqob.html

================================================================================
来源：http://www.aibaodan.cn/163lxwdlzwr.html

I. 正则表达式
来源：http://www.xuanzx.com/163wnerlplz.html

================================================================================
来源：http://www.sxryk.cn/163phxaehbv.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163pwervric.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163plnnrdqo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163xguobxsv.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zxzsysub.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nmzfgfbe.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163buuyipel.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163jcgsdfmb.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163petwskpe.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163mftdtyos.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ecixjutw.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163jjlyebzf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163stkezsqn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ginegvxj.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163viqtknwa.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163wshtvvnl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163lrtwjhro.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163worevpne.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163oaxvsqdr.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163tcyhoxes.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163kegemfku.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ifwyjlta.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163gjspgcrp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163fyveamac.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163jedqnonv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163aifbvmnk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ecdhawpu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ztclwdik.html

[I04] 正则替换
来源：http://www.sxryk.cn/163mdjxmlpy.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163jokfcmno.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163hzeormlu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xqgwpuzh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jwzfzbam.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163eyihtmef.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163jzmcmjax.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ugfebugb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163fhiqeyws.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vviupypz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163idslqdal.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163gefytces.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mvzjkiji.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nssacpsw.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163unsljhog.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163juqqdeto.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sdphmuyr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ctwtpzfo.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163zptubwpd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bnwuutro.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163lbiwhnjr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hjegylyo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163roirizrm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163rmwdffqb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163kfetahlu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163bntntgup.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163akirgnmt.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163qvdtlgxg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163iefpjaax.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163fqfcfcue.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163vgjejjak.html

TS:   /error/gim
来源：http://www.xuanzx.com/163pqtvepzg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gfidvnoh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163kvtqqfdn.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163khbpmqnu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163eeoshclx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163bzdrkebl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163wjmnjfmy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163jesvpcpf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vjjaweod.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163qvxtwtzv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163oqhkvuhl.html


<!-- 参考信息 -->