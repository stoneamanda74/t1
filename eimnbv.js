外链999!wailian999！

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163zsjsrege.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163yriotxcp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163zxscnusn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ajqgrpbx.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163csjrznmu.html

[G03] 实例属性
来源：http://www.sxryk.cn/163pipgymzc.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163qywigazh.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163mjbmiige.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163dzcatkfi.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163cixnprki.html

Java: private String name;
来源：http://www.sxryk.cn/163mqhophyl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xtpjitlp.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163waugauri.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163kegtwtwy.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ihariguj.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163fmmgsovl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qfxalykz.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163oejndysl.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163omjwsuzd.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163eypkukip.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163lajpbggt.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163lztzgsqu.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163uddtlraq.html

[G05] 继承
来源：http://www.xuanzx.com/163ljuzngwq.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163xzzgvyff.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163qkhxmepo.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qggahwkd.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163buqfoykl.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163csomtmrj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163czjakjum.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163syeplcwg.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163mcftirto.html

[G06] 重写方法
来源：http://www.sxryk.cn/163tedqgznd.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163jgrvzwaa.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wslfliap.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163koserqeq.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qtikkobi.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163tqeuzkga.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163jrtlibif.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163vowndwvf.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163viyhohdz.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163mrbhliqh.html

Py:   super().greet()
来源：http://www.xuanzx.com/163qmrbvpen.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xjadpysr.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ajdshbuu.html

TS:   super.greet();
来源：http://www.sxryk.cn/163hgdypiit.html

Java: super.greet();
来源：http://www.xuanzx.com/163jqlbyfxs.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163mrlswfyh.html

Ruby: super
来源：http://www.sxryk.cn/163rexnetst.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ndzkpxun.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ssjeymyp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ecatxthv.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ukidbcyx.html

JS:   static f() {}
来源：http://www.sxryk.cn/163lbwwjogn.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163guhgccno.html

Java: static void f() {}
来源：http://www.sxryk.cn/163vfdyybhd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163qvrexkdl.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163zfpixyoa.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163xphxjimb.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163znulvywm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hdsifzgl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163hbpdnkac.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rlcmfpsr.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163jipvpuuk.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163csqmnukl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ztofzpeq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163gmmjbyxb.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163jselihft.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163mvhcgywq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163vfhfrrso.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163cctwnwob.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163aujrlltv.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163roicamwl.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163btjnylgx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163horbzvxe.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163xmsntlqh.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163flvhbaxx.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163vndpstxn.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163xrxvwwzy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vlwwionr.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163mprqobux.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163lenvtxvq.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163kbzqesom.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163nkbozmtb.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163lzmlilwn.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163vnzeacmk.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ndlgszcj.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163gdbspmxn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ugkmxdta.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ecscuxsz.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163zmaexgfe.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ihdxqmnx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ajkordjv.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163gdgxasph.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163doymfzfc.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163qsrlqjgj.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163duflrbxe.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163byswqnpq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163tqgmdoxl.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163qotzjybt.html

Java: u instanceof User
来源：http://www.sxryk.cn/163plsueesf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163yxrdpvyv.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163qyjkujbm.html

C#:   u is User
来源：http://www.xuanzx.com/163lkzasfws.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163uguvgjoi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163oehwgvak.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163jveznemw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163wrjfoing.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163qbpggcpu.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163wfbuznfq.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163qcwpihup.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ovmceinn.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163lnlvmcuh.html

[G15] 枚举
来源：http://www.sxryk.cn/163pkpogluv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163fqljloiy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163wlcmwtdp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163johgohvq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xnuwhsyb.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163nfpeupdx.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ndrdzqbm.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163lcrvgpqv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163lggsgznx.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163volbuorg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163cncaecfy.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163frclwpte.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163plvzewml.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wkodzzls.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163jaocdvbk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163zwbrfyir.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ccailaew.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163mminqyyb.html

================================================================================
来源：http://www.aibaodan.cn/163kpspwvfs.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163vgpgcvnt.html

================================================================================
来源：http://www.sxryk.cn/163jpvbbcez.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163tcaaitjm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ezxymopm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163pgarrxzi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ifvxkhmz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163hrrfayzs.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163sajbjtvx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163qrmdbqnk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163pnttfowy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163frxqcurm.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163adpziedu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ojqajrml.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jisjbkkl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mwhtfenn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jqwcgmfs.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rrdvwwor.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163scsrskac.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163boxxrilv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163aepderry.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hvxwoynr.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163wuevihps.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163pvjesgis.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163swxshlri.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163tgyimdks.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163eifflmjo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163imchlipg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163xzweuwqz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jcxewgcx.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163fkgigkaj.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163qvtbrwmw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163mdetqbbu.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tbgpbjng.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163coxepxqo.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163hzykrgpt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jpymhpux.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163oarymvov.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163rbormzlk.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163wzjysdmu.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ykuhbsxx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163bwhyhbld.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163thfgctod.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163uhhygjkk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163lgnjjdhl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163jwtwmmqh.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ndmjpaiz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ldkvictw.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163bvdbrmzj.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ddsjsoqc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163xouqiekr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163dlflmrev.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qnrsfsfa.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163uphaxtaw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163tawwqegs.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163gffqskef.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ygzeuwop.html

[H07] 断言
来源：http://www.sxryk.cn/163fyjugxca.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rkvrfvix.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163gpfdddla.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nduvwjxk.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wsqfggjd.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163hilsfaxy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163mtvhoxtl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163gbzojgxw.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163gczdycgs.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163dobbingo.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163hwulmxtw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163hsmthjxr.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163gxbemgcc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163degrhxnw.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163nzcukmlj.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163vlltmdvr.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163cadzustf.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163genqcprj.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163eerkrjhq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163zqyxucks.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ohjfixnn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163dhomtkkg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wazdmbtt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ozdiihbs.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163wuaogofg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163vauishqx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163zjjtqczf.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163vypwitqm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163zafwlcvh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163cndsoufv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vayiwrxl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wcvkiymc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ksjalypx.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163hosrydjx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163pksjzmqc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163esjbxcng.html

================================================================================
来源：http://www.aibaodan.cn/163krnqpvqz.html

I. 正则表达式
来源：http://www.sxryk.cn/163vjxddayj.html

================================================================================
来源：http://www.aibaodan.cn/163bsqclkig.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ngcckwwg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163cvrubvfp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ybciqdfz.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163btjwqrby.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zvtnzofy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163pbdwknmc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163svgkmlwb.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163kurdymzq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ahtbpmuv.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163nsvlyrlg.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163bsdiponn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163qmebapwu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163vdymittf.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163gvhiepuu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163gvistkoj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163kmtezbth.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163yqyfzhsn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ofdyesdi.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163mbfgakcx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163dpaijjsz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163qrtsyulz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163unhmtoha.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163orihzaea.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163wnvbqfbb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163qfsofnvm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ibfzlnzn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163fixvljmd.html

[I04] 正则替换
来源：http://www.xuanzx.com/163yfbvsyfz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163zjrtjneo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163gikziyxt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163usbqcodv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163pcfobrxv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163brjlyblf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163rtvtqaml.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163saocbqad.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163vnyrfyec.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163dhzcslsw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163jtlgnkdo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163cijwxzmz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gfmgtogn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wyraczwq.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163smnghmkj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163oyeuwugq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nhqvfech.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163hhlssxql.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163exfxpvzo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ivwwptqn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163hedchrqt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163gyclqilb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163aaqwyfag.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163eekjkhge.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163jbtdwxoy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163svlklwpq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163polfomqr.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163rhhlgetc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163kgbxpjpk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ljmpvicx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163baugkuiv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163igzcsuep.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163xnoixicn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163varxpjbn.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163dfcehpxv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163vanhkkny.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163iyvegfcx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163uaadfson.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ycrgchfq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163odfgeswr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163isujorwa.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163gjupjoly.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163fylzfgcw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163dmoagrtu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163kwiwhdig.html

================================================================================
来源：http://www.aibaodan.cn/163urgobvyw.html


<!-- 参考信息 -->