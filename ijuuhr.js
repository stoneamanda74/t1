外链999!wailian999！

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163fnggpqdd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163oyrawvmn.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ilayqmod.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163jbfuycdf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163iopjsjio.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163cjaetbcm.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163jfdnshng.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163wqzpmwsd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163vfrtygwe.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ovjgksvp.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163dhuhhwlx.html

[G05] 继承
来源：http://www.xuanzx.com/163zbrxnvlg.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163pvxiefdn.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ajmryvsx.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bwipmvrp.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163thesxfgu.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163xvkhxskl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163jefndoal.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163arkhrctz.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163aiutrzik.html

[G06] 重写方法
来源：http://www.xuanzx.com/163nlcoankc.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163vwxjwdjl.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163iwtzwlea.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ukmrcnug.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mevembme.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163gnmiwfqt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163khwwncgc.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kipimrtv.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163emvvgtbv.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163uwdqkrlw.html

Py:   super().greet()
来源：http://www.xuanzx.com/163zbkiicco.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163nwckzivv.html

JS:   super.greet();
来源：http://www.xuanzx.com/163phpjwagt.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163uslctngw.html

Java: super.greet();
来源：http://www.aibaodan.cn/163islbrgry.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163zciblaho.html

Ruby: super
来源：http://www.aibaodan.cn/163jjhaxyxr.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163kgysdxfs.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wlshnjvu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163sepjlork.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163yfkrnvdv.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163viplcctu.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163krjnfbbu.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163rjhbtyso.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163nsxpectg.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163svsohhfp.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163zdydlygk.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163lxjsrodc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163qsiryyay.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163tttkpgbo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163vgjferxm.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163gcwbinpb.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rhkecyfb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163rwwuvvui.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163dvdjnyuf.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ijbelhno.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163bokrmufr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163vqneqoik.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163dlxhugcp.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163sffuwayp.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163iohuabgt.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163afbahplh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hsadjzrm.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163qxkbhsik.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163kcojpcyf.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163swdyvstx.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163qzswzjjp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kvqxojur.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163vnhxrnlj.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163cmgpscrj.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163hgmrfogl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163jhtpburo.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163vqhcoxyo.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163wvhsejzd.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ltjgynmk.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163dxfxdnyo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163uoobsmwr.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163vaspgqur.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163mxgffdmv.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163usmnryzg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163qlgfxeng.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163dmcoxrzc.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163aetfwmbs.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163yhovfgqc.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163kyqsuwhk.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163jqdpmfxo.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163hikcgdzv.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163vgobzucs.html

Java: u instanceof User
来源：http://www.xuanzx.com/163rmifykha.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163jqiqctiw.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163weteabwf.html

C#:   u is User
来源：http://www.aibaodan.cn/163vvbeiony.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163hhfxndrr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ivxebopk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163xxxvyvxl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163pgrmnrza.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163clyzvqds.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163qiquxfty.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163jqpkcxaj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163yqdhdlij.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ecfbeqwb.html

[G15] 枚举
来源：http://www.xuanzx.com/163zmabfqzf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zllskshn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163maaubqjf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163kpjoonjo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163msbcdugj.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163zqxdkqvi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ejwzavqt.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163qlmlwvuz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pkyuqrlk.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163isjdaeut.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163hpdyxcfx.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ugzskvbg.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yrkbizyt.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163sczlbflr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163jzbnekxx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163cykdsehd.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163gdphgmye.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163xlzoeiyd.html

================================================================================
来源：http://www.xuanzx.com/163ibkuihxd.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ffacadhz.html

================================================================================
来源：http://www.sxryk.cn/163trrpagrd.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163wzgrwitw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163tvyjpiuk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163yogogbgv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ueotmsxe.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163lrmfpqjf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163rgbjxtnt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163hxnfflvz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163cvjwaqxc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163oavfnotk.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ucxtvtvv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ecevoaxq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lhssyjlo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qszbmeay.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163agqoeuss.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vvpsbvqu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163woqfdfyf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163kfeegsyk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163whfjkthj.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ceuyeaqw.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163eoqbllzo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163eyizuewr.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dszkaxfr.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jscbfaqy.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163glzoitvi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qvadabah.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163eesihiea.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gxbzubzs.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163rntwhpsf.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163owwfbsrn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163aiatxlvl.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hftioogy.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mrbktiqd.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163tgokvmot.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163qlezwcoj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163txsqbfhg.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163bsxsopiw.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163yvfxyjbo.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ijwzdasc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163vfzihjyu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rjgttqdo.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mqveugmk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163fcwmoxnr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dikdnhcy.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163sdrgrnsr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163xhwiknrv.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163imjxbjwi.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163atiywvup.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163jzixkecw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mrlnvkmb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wwrazlts.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163vlelqiae.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163qydtebjf.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ltiffhxt.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163dyjayjxi.html

[H07] 断言
来源：http://www.aibaodan.cn/163umwgulmx.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163vpqezpbk.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163culkxubr.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cvhzpoit.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zwqytska.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163htsmodok.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163oyrjypbj.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163hzuhgvpi.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jgbnnrue.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163cehuaofq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163jamluuby.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163pgeybswi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163petspngs.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163gdtdhydq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163bsincpvt.html

Go:   err.Error()
来源：http://www.sxryk.cn/163xgpbeain.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163mqstttnq.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163dshsaupu.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163bigwxseh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163lqqlastb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hnqydcgn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163vfukdefl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163hpmbwlzy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ruisdwin.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163sjknqwfn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163rgagctdj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163nexzkrgz.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163jloeztui.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163klzoulgs.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ytfgtxks.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pqkixmgd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hwfzwjjp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163sbsdgsja.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163hvjuunsz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163mmhnmayj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163cvzrnlqj.html

================================================================================
来源：http://www.aibaodan.cn/163ofzxsroq.html

I. 正则表达式
来源：http://www.xuanzx.com/163dpdtcqla.html

================================================================================
来源：http://www.xuanzx.com/163sawdgyhd.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ybzlmshi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163xxacmnrc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163nnrgndcz.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rgzicgxx.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wmcgzdcl.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163hkqfxjiw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163hcamkypu.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163cmeucsfv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163qmtwplqi.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163gsazvxuj.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163wreqjvze.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xogqgbak.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163whgshjsb.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163zjgfyfak.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163jophsgqq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163iltzamey.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163xmikyqgh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163siwwtbqw.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163eoiqpzuq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163itmsehjj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163knvxgvll.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163aalhkgqq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163gnptzuwt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163stpedhzm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163dlpgumdm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163gcmbaejr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163gkriphek.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163pkdhhzxi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163itjeqwll.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163lbvrssox.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cwdwojip.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163orkmmuqb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163lchykmpw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163tdzpbkaw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163mkldysfl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163kpqmymbj.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163jnadzwbo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163yhojywnx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163msfsvyxk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rqzlenwl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nvudpeim.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163czpommua.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163rvevrjho.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hvfclssg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163sjeojztx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163izqwkbsq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163exkqxvqi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163cqljzfzg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163likavpkv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163scsidnsx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163oiqbwtec.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163novkjqqu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163xnmmyfns.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163cuhfntyv.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ajaovevd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163rcznlbah.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163qmltkuvh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163igqbtuwa.html

TS:   /error/gim
来源：http://www.sxryk.cn/163qnxepzcu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163zhefvcdw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163syrftuas.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ceyufsaa.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163veqnomvb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163crtdzjkf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163tfymoxmq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163xubzfhwt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xfezacxk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dxffadqn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zhbdhndz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163rqwhlbiu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ijlownry.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163kfwchccf.html

================================================================================
来源：http://www.sxryk.cn/163hipjmaxo.html

J. 日期与时间
来源：http://www.aibaodan.cn/163rjzmdjeg.html

================================================================================
来源：http://www.sxryk.cn/163ukjigprn.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163xywxwblp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163rxtuxkav.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163eianhznz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hoezanbl.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163otbysbcb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163bjmozfgv.html

Go:   time.Now()
来源：http://www.sxryk.cn/163icxptwkv.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163zpilpalj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163mjjeaayx.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163usoapemj.html


<!-- 参考信息 -->