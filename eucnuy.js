外链999!wailian999！

Ruby: @name = "x"
来源：http://www.sxryk.cn/163btvozvfb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163dlhuyvid.html

[G04] 定义方法
来源：http://www.sxryk.cn/163zfldmhrp.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163gjrhwrgx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163tlsjkpnv.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163mnagsiqn.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163xduxnpdk.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163xvyuchxe.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163hbyaugjo.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163jmukhuvc.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163mufrxnob.html

[G05] 继承
来源：http://www.aibaodan.cn/163ksshpbjd.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ougrwxne.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163cliduuja.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qbusagbg.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vuzgbuwl.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163aqlxqprm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ktoyrdbv.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163onlpyzfn.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163epfxjdlm.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163xznzcfeo.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163lfkgayyp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dfaaojji.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163vvdlsjjl.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ynfbwepd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163yfhovrdd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163vpxovmyy.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163desxirph.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dxbnnmqo.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ebsdlmyd.html

Py:   super().greet()
来源：http://www.xuanzx.com/163grriwawo.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163pksjsokx.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163vyqqdlxt.html

TS:   super.greet();
来源：http://www.sxryk.cn/163hdjojghe.html

Java: super.greet();
来源：http://www.sxryk.cn/163ayqnvbge.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163chcgpdpe.html

Ruby: super
来源：http://www.sxryk.cn/163jceozbzf.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163kuneszih.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163arxnqegq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163huqwnftd.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163fihmijwy.html

JS:   static f() {}
来源：http://www.sxryk.cn/163shdvqdgf.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163jsattmti.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163olhgryfu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163crljyzec.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163lpdqilfb.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163kcepxuhp.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163giejdpsc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163tmjmtwkh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163rombahrp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ktyolpkc.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163vnvhskbx.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163nynhrpsl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163gvynzwqf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163wqkurues.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163nbnitwdk.html

[G10] 访问控制
来源：http://www.sxryk.cn/163mitxmgou.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163rdrcirbl.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163dkgfklcb.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163sbcmupom.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163eehagzsj.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163rzrntzja.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hbnxdrzs.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163lmifwxzg.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163cpycxyie.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ljzfpfkz.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163dsabatkx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163bnbcavpd.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163hzlzcorj.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163rncecehw.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163xyiimram.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163qkmpimds.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163hxrcbvez.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163wuqsgcqw.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163oyjezhwc.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163dvuzudrf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163usbhwhxk.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163xucljwyl.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163sylqpedt.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163fgtldbyy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163gwmtrwna.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163jdrvcalf.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163yxgihjzp.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163tjpbfcib.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hbzffmya.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163yznqjhak.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163vneeppmj.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163qjoudjii.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163khidmjim.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163hbueegld.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163xpmnsxwc.html

C#:   u is User
来源：http://www.aibaodan.cn/163zbhrgdwv.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163hdyzpddo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ujwsrowz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163bwubbcyy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163kbckvfco.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163lsuykixz.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163wgzewiob.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163gwfhtjqz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163swjkzzvd.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ysiccsau.html

[G15] 枚举
来源：http://www.aibaodan.cn/163kkjflenu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163wbdbtdso.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163faoxwzfe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ikkqjdsv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pfqfziff.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gczrprjs.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163bmeeqcbo.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163enepyswi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163epuhsmhm.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163jsrwvwxq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163jfroxbkk.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163kgqtpczl.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163sjuldgmk.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163qnrthdny.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ecutlymb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163dnejwfkl.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163fyyiocrf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163izbbxfhs.html

================================================================================
来源：http://www.sxryk.cn/163bgkopvbo.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163lgcrlbcs.html

================================================================================
来源：http://www.xuanzx.com/163oiwpzgcr.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163lpiohdgq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163whhfzgde.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163sjshbdme.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ediyjnuo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163upwavraw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163vtiskbxf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163bcigeahr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163efdjtbad.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163duehmedo.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163suyynpag.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163dnowkbfp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tzedkmvp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ycadifnm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163irpwfftv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zfdldkcr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ddeutmxw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163oqivvnve.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163bzkpswaf.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163kdxwqvyz.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163serhbkhk.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163knsplouv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tumbfyij.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ngivqsgv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163rqtviczr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163npnmpeml.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163qdalptay.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xhkiakly.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163lspsdlnz.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163uwaxkgxr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ndzqazda.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163gplrzelk.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ywytkjwp.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163sgcblhgt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xtkwbzkr.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163roayciak.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163owdphhor.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163gfxxcaad.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163icurewqc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ucodsesn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zysedmuk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163avdprycf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zyotvlso.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163cllxamso.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163menrndks.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163prxcckia.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ubsdrpxg.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163wiijhdgr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163lhrmleep.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hrzkyheq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163puqpvidr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163yzklvjsh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163momslcti.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163xqctsiri.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163frnemxwy.html

[H07] 断言
来源：http://www.sxryk.cn/163fqzlongl.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163slwxzaph.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163jubjlkuf.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qusxolyo.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pnyqfyyx.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163lcejxlvz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163nowpbinq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163qcuheyfp.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ymnpwcui.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163mzzeocpg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163axchrtgv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163vhjnbngb.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163eqjzdlyd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163harrjbgy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163bdppcvlm.html

Go:   err.Error()
来源：http://www.sxryk.cn/163oiigqoiu.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ghqhwdcb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163rqedgtjw.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163gtgrsema.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ojiaztjz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163iclosubc.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163dhzolymp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ollpruiw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ytzqqaaz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163wcuhzqya.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163klycqtye.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163jhhedkwl.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163pyyjojvv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163fwsnxfac.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163qvwmpjyg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163mkdhsxgu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163gqthvarv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163yhjiimfr.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163xxeqpkbx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ymrfrdty.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163leslylxk.html

================================================================================
来源：http://www.aibaodan.cn/163xybiimcd.html

I. 正则表达式
来源：http://www.xuanzx.com/163slnnegbf.html

================================================================================
来源：http://www.sxryk.cn/163nahlzluq.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163mhgwrcss.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163lkfelouw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163sieujysv.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163inhrtuwc.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yiinpxbx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163osjhbosd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163hwpfkfgj.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ywlhmqxo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163hctrbzqw.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163oyxzlxbu.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ovzzxear.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163nqvortcr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163boajbqsa.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163uhbwjsmk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163bthpklms.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163edmdenuh.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163dlsbvofb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163uzatvgep.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163pwzftqlr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163kledlxac.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163fvykinnq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163rixauwrh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163zcngtppf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163knocibgh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163xxpnmhbn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163bfbnirwj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163inihqmie.html

[I04] 正则替换
来源：http://www.sxryk.cn/163lspjjgvr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163bjgbsydo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163uitmmlwm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wgnyopvr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cplreedn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163gpcuzjui.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163glayodgf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163xgdgxqrh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163nxawqjnl.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163tndinlal.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163bjskdjtj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163tfjrvzek.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bsobrwwy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ghnesnui.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163gwtscgcg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163anrdgkfh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163opahokqb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163eqameebq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ksonaxca.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dkasfrjw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163lyryzefb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yrcjqlbr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tpgsvcer.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163tibcketa.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ssvhdncg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ucqgnslb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163rczmlxhn.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163bdulhvzg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163niisezab.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163irkxufbw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163brgcgiyg.html

TS:   /error/gim
来源：http://www.xuanzx.com/163galeicme.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163yalypslb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163klwjauku.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163atuuerjd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163xrhyojry.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163sfecyddw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163vqpeyojm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163chrrrcvn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ntravkgh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163fwvhkyge.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ligjqqzk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163qynjocpk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163pswnautf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163afgjbrpp.html

================================================================================
来源：http://www.xuanzx.com/163mfrysava.html

J. 日期与时间
来源：http://www.aibaodan.cn/163iaynrqts.html

================================================================================
来源：http://www.aibaodan.cn/163lngwodva.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ipaylosx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163chtlnugp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163frrvoliq.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ognnpusy.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163taskiiqu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163fhfufcaf.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163dnrwyvlz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163bnnhvine.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163skwmavpu.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ietwgdnp.html


<!-- 参考信息 -->