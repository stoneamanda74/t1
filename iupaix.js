外链999!wailian999！

JS:   this.name = "x";
来源：http://www.sxryk.cn/163mamsepuc.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vbhbisoh.html

Java: private String name;
来源：http://www.aibaodan.cn/163omvexkmq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163nklynibo.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163egtanjai.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163rkwssjep.html

[G04] 定义方法
来源：http://www.xuanzx.com/163jxybxpcw.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ufplioyo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ekhexcoa.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163gzyklvcl.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163jdpvgksk.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163kijmezdt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163jibzjfcb.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163icgeypsk.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163wntpkors.html

[G05] 继承
来源：http://www.xuanzx.com/163vqhdimck.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163fecdnksb.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ruwxmipl.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qyvumlim.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163anjaclxh.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163bssbynok.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ejqubghv.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163quokcnva.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163uqufwepx.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163edfqcexm.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163jawsrsog.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163mzuvkmbp.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163nhcxxjwg.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wssiutdu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163snenuogk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163qdinxtld.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163erkbnglb.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163eppedhzq.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163iqhnyaql.html

Py:   super().greet()
来源：http://www.xuanzx.com/163utfhepaf.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163dvwvcygp.html

JS:   super.greet();
来源：http://www.sxryk.cn/163vfkfxdco.html

TS:   super.greet();
来源：http://www.xuanzx.com/163jvaibwcs.html

Java: super.greet();
来源：http://www.aibaodan.cn/163xuqxhifu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163yvspqgey.html

Ruby: super
来源：http://www.sxryk.cn/163vlixourx.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163idhirrwa.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163jnlewvna.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163wajznycr.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163zpkyodbl.html

JS:   static f() {}
来源：http://www.xuanzx.com/163qjrgysto.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ljhqtjoa.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ngdykdqf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163skadpuqs.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163xnnhyscw.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163uuqtnzmd.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163kvockspk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163khaksirq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163hinsfdbm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163sqjysdex.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ksaxbfqu.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rjxqekau.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163eshrnjqb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163dhcjecrb.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163xrsiqvez.html

[G10] 访问控制
来源：http://www.xuanzx.com/163cindxphc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163lhrglcdc.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163sltuhbpt.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163riabkfpi.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163pdboiewt.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163hwnvyyvy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163tfmseqbd.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ndznlaku.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163urqqfpoh.html

[G11] getter / setter
来源：http://www.sxryk.cn/163xckkiccg.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163jbnofzzd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163pziganem.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163cskretoh.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163xruudwtx.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163vyfxabvl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163frhkyvqm.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163jkvgsncl.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163iavyioiy.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163damgxdui.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163rrogrszk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163mgnhpigz.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163dfslwnln.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163wvfwnmcq.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ganpdqjq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163veppyooa.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163gnrzzfsw.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163dhohlsle.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163viihcwgm.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163vaogkoit.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tpqfosbe.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163gxtamekj.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163smdikluf.html

Java: u instanceof User
来源：http://www.sxryk.cn/163gajqayes.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hfqvsrti.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ogsjjrxg.html

C#:   u is User
来源：http://www.aibaodan.cn/163hpfqjerh.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163pkhstryf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hwynqtxi.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163wxcclbnv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163cwldutfy.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163gtmiuvfl.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ycvtcioy.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ufjjoium.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163yrendxpl.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163yjjdsorg.html

[G15] 枚举
来源：http://www.aibaodan.cn/163jwxkgvtx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zolzgvlg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163gjoavizt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163spozclgm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gwcurazk.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163vqdwqplw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163etgocuhf.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163kzyhfthi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163yexgfech.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163qmhtozuo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163vuctzqdi.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163xeblpunx.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163sqxyykip.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163mqvniegk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163uzxuujea.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163bjpydphz.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163hlqtonvp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163otluibru.html

================================================================================
来源：http://www.xuanzx.com/163licaordv.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163eratxrze.html

================================================================================
来源：http://www.xuanzx.com/163sjzdhdyo.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ctgwybpj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163jesypjek.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163tkwgvfep.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163yroeadxs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163bbfnmbkj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163zjydrdhx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163vzaqjexa.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ecyhcrpc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163gdlcndvb.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163pzrshhcd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163iwdtivko.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mzargwhm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tjcdhlwd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163crpdusim.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wadeyxfh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163pnbagtrg.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163walkrmef.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163dyfqqcvc.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163sxnzizmq.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163zasqzuwx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163iomswwpj.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zpsismge.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rbfnyhjk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163sujkkydm.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163xjfepcpw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163vvmbqnob.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pdsytgvd.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163vohlpqng.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163efdqngez.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163egpgvpyo.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163stlowqfk.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163cqygdqhk.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163nccbypkb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xzooyoth.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163kxqhghvf.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163wtgojfyb.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ndfivonx.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qacqexcj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ibbejrbt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gekktduh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rggrljni.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163eyjgprfw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163roosszze.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163dndbdugz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163wkiuwjth.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163wxjvpvdy.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163bkoxjztk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163egdcksuj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gearbapv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ffzmhscp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ieuvjxye.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163zbicsagg.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163iqwgjvvv.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163epelnjee.html

[H07] 断言
来源：http://www.aibaodan.cn/163uwqqcwtm.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163nloquefi.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163odegsfhk.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163cggleuvo.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163zyzgmfzq.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163qhpmbtdn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163zglxikdi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ggpmhedx.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163deeygfzl.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163kgdxhbax.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163thcqyesv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163mbeocsth.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163trucflzs.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163yecazoav.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163mmimghlc.html

Go:   err.Error()
来源：http://www.sxryk.cn/163opernqve.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163sjugpsqw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163hbofdyab.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163muapbtmi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163peddgzbk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ztifrutw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163adglnpco.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163drjeucsx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163hrdadjzh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163rwnmjntb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163cecobeoo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ciojfphm.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163yfwkbbuj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163nkstdaxi.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163lxsghoay.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vftbybcm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163nflqmahs.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163havfvnlp.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163lismhihu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163kvpdghus.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163bqadjxvj.html

================================================================================
来源：http://www.sxryk.cn/163qbauqkxj.html

I. 正则表达式
来源：http://www.xuanzx.com/163kgfdbssf.html

================================================================================
来源：http://www.sxryk.cn/163vvqdqtis.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163amsxmhxw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163aqfzpgjr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163pgxaaflc.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163emnwkppr.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163yppjmdaa.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163llckdnqc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163covbyilz.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163mtearvkl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163umvsofuf.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163inudurvc.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163dvefkqua.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163uqtldcvb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163buiwlryn.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ydgkkrux.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163molrvwir.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163sgezagbm.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163vzxocrpp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163hmgmvcnt.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163tropirjr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163nqbfjazb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163rgqmynji.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163pvzqpvvo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163gaeyahva.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163jenytdhd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163migrxsiq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163qisdhxxr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163kjomkxux.html

[I04] 正则替换
来源：http://www.xuanzx.com/163mthtuwlg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163qzixmdjb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163gyavkmit.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163aakikjei.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163kewycnft.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163kptlofyr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ylnhhdyy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163jkckjmsv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163skqovcuv.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163cdlyglfm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163zmsbvefj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163bhfafuyy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163okyiatif.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mtkcbppd.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163keggxuzi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163wcihmobf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ogxuneru.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163quvkniwg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163vjncuwli.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zrnpvpza.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163wkivryvl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163aveseuzz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163klwwylax.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163bftbwvqb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163lgdesqro.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163rcincpni.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xfpmmwuv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163czjikfwh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163jnkbfrct.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163cpixhosp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163oqkgadet.html

TS:   /error/gim
来源：http://www.sxryk.cn/163cjhftedk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163uneymuls.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163axzwterm.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ydpjpjji.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163fikbhrpp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163nbysjqeu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163afnrdcba.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163vyvnlwyl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163taiwbtvd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fwawvers.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ynksxnsx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163hncspfir.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163vsboghnw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163gyazklvu.html

================================================================================
来源：http://www.aibaodan.cn/163woqwcvns.html

J. 日期与时间
来源：http://www.sxryk.cn/163fjbuwnic.html

================================================================================
来源：http://www.aibaodan.cn/163sygpcvir.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163mdzonbet.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163mpygkhup.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vwzkavtq.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hfhvmyxm.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163zojtbeps.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163bhhgiasl.html


<!-- 参考信息 -->