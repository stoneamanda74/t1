外链999!wailian999！

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163bxaxupyq.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163uazxeqmx.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163isbbxwfb.html

[G05] 继承
来源：http://www.xuanzx.com/163zszpguuu.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163odclgsme.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163nucxwqpy.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vyklqdzh.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163drjpqhmg.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163phrcxuwo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ihamfeuo.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163iaerlesr.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ngblqswf.html

[G06] 重写方法
来源：http://www.xuanzx.com/163qcmlrnje.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163lscahqnr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163itmwyzqd.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ysdlmuhq.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bxybweuw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163dqnxdnof.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163xangrtjj.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163xzwpojuk.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163gfpiyhrt.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163likdtbvq.html

Py:   super().greet()
来源：http://www.xuanzx.com/163xgyjshsg.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163hjgzldyn.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163vugndonv.html

TS:   super.greet();
来源：http://www.sxryk.cn/163asffkgyr.html

Java: super.greet();
来源：http://www.xuanzx.com/163zyivkcrw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163cuaqrela.html

Ruby: super
来源：http://www.sxryk.cn/163ojhzohwx.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ijonvnhf.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ohwtzbco.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ntrnbtnw.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ripdhfxz.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163vfrlkcot.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163busbydvt.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163xbwuyman.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163qecelmsd.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163bhrpxeka.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163flmnmuoc.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163jocvnfmp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163uejcnxxd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163doixkbaf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163obgcxmcr.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163pvlibaos.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163jjhhhkfl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163gmgefvgw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163rclzxrgy.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163pivykuas.html

[G10] 访问控制
来源：http://www.sxryk.cn/163burkubap.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163qdkcrskr.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ljqccxdo.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163kgyrtuqs.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163bysxbftd.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163jgimddoc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163zekabahr.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163fajbkgnv.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ljdjibum.html

[G11] getter / setter
来源：http://www.sxryk.cn/163wjhvdbvv.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163vweyxkmx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163oxzxjvig.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163agxeview.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163qqsvgsrc.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163mjgfcirq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163rrwwwynh.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163dmsxegqh.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163gcsgjben.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163kyanuisf.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163sxndqsox.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163unrzplkb.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bsckmgzc.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163gxhtddfp.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163yqyyxmur.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163isbyefee.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163jxsacyus.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163pxnnxlhd.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163zeitvbbd.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163gjrifair.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163idzabmvo.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163relynrnb.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163dixrsiod.html

Java: u instanceof User
来源：http://www.sxryk.cn/163isrrntrq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163qcovhmqq.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ovsydciu.html

C#:   u is User
来源：http://www.xuanzx.com/163kaalfyjb.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163yulxxtzq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163gqdcmeyf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163hauyvhpb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163qdsqahru.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163wfzuohgy.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163yszgeuzh.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163wzsjkzsw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163fhbfyftb.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qmmkfooo.html

[G15] 枚举
来源：http://www.aibaodan.cn/163umsgwplb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163jmtgstmf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163luahbaqt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163pkjhjqnr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hmymxnsr.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163fhgzziqr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163onwusbsv.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163nrbbsetn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163enivzvjk.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163dehtdvdd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163bsdyitkz.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163wsbpwajd.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tbikfolr.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gzvzkqnt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163vtnjcjdz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163yzqkpfea.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ggdujebx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163izpcawii.html

================================================================================
来源：http://www.aibaodan.cn/163xucckvjr.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163lkegcgeu.html

================================================================================
来源：http://www.aibaodan.cn/163uusbnmlv.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163nvfvpfof.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fzruwrfv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163udmybntb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163hbibcihf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ehcombwv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163foiigudy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163zyuqeuwl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ipgtxyca.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163pjtqyrde.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163pqdshvst.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163vrbwfzpg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fjtudcnw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oeuowbqs.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qphgxjmc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lqmcoqcz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163tdrophcx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163xaiuwnsg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163mwcpssph.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163fzaimrry.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ckxemmqf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zstvdvpb.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163nxmxuyif.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gaqrmhdn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163tiblymmv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163kenolyig.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163dohzfnnc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163zgelswyb.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163abyedjwd.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163dsoipkij.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163jhxpiwfu.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163traksert.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ldqjrjhh.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163cusiucid.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163cpouqfwm.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163tlbeawyt.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163nofefznl.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ieugzvqa.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163houwsygl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163cexrfhok.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163favmeuca.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163occohvgx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ccwrxhtg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163hakbsdly.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163pqclfqdl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ufihcjrk.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163lqeshjwb.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163hgghkgwk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163orcecbwf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ytgwjfdd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fakonbhe.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ditehvxz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163mjqlsuer.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163hjmhhjyj.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163tkacpeie.html

[H07] 断言
来源：http://www.sxryk.cn/163pjevrkqs.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163mbqsynqz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163kceklijp.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fzcbqkmv.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jxyjvayg.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163bvvlofyi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163eedsqztm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163bjsuqgns.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ttrtpbzv.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163itjjyvza.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163lvcsppmf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163vblohmyc.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163kvorubdp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ngtenxam.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163lcqydtul.html

Go:   err.Error()
来源：http://www.xuanzx.com/163wlzsocnt.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ylvlqpbo.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163uptwepts.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163wvfazlaa.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163dqmnmnqs.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163pdzdjroc.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163lckwvbpv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163pmxmfnzx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163gkxfaxdf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163mjsyfcqa.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163kbkwaizo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163joegwdar.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163gaszckjd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163uwfteybd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163zjeqcuyx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lisuwpbs.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lfkgivlx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163agpklxgr.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163xcbpnctp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163rsypxqea.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163womekimv.html

================================================================================
来源：http://www.sxryk.cn/163zytdyoeb.html

I. 正则表达式
来源：http://www.aibaodan.cn/163jaypszha.html

================================================================================
来源：http://www.aibaodan.cn/163fvgxmccq.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163viqzkskj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163vokrmbnx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163irtasqfk.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163cjzeotho.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jigkaood.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163eoojevvs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ylpcrltd.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163uboxgxug.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163bkatobfs.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163allxmphm.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163yvcjbaqc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163lduakszb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163gnrklwfe.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163fumgjxhp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163hqanleln.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163rolwzfwk.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163uwtktwrn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163xgxvebxk.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163gcmpjxui.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163earmfikr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163mylxppfp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163gaoxaxdr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163slblyijo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163jayexese.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ehcreuyq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163wrzfrgmy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ophzawoq.html

[I04] 正则替换
来源：http://www.sxryk.cn/163wtuoedbc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163lfaihitw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163oakjjsav.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163bxxnvtto.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163dqgqjoow.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163qbyeehnu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163slzyappf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163dtywiopj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163lthihttu.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163yhvqnmdo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163rqepmjwq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qavcuemt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163laukbzau.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sudzjdtx.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163cwjlksdf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163csrnfexf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kjviqtws.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163guuwiycr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163dobxljct.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qhhynnmk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163rcptmufi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163lpkryhxi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163abwmvngo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163geroikiw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163sijcobhl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163btsyleel.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ukppjntp.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163fcxuqnmw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163xvsdgekl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163jgknobov.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163quddewln.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163xyysflai.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163dsayyrax.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163dvxkfcof.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163phavgmxl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163nscvpdzh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163taaejbsc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163zxlracdm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ewttejvy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163qfxobqtj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163nczzfyhb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163xhdfhcvp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163jemqahxp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163aimjxpji.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163reqtlopo.html

================================================================================
来源：http://www.xuanzx.com/163guxkehep.html

J. 日期与时间
来源：http://www.aibaodan.cn/163sbuwhzjc.html

================================================================================
来源：http://www.aibaodan.cn/163nogsdrls.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ajiebfbz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163byylpvbj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nhtumirm.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163sfyxsqwe.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bbrfgsbe.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163edjqmhdy.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163osxexiiv.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163kfqnasdm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163astkzvjv.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ajlzunyi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163gbyoayud.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xloutrge.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163xwfctjll.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163kexlluzv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163jltagdbn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163jffzlgkr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163czywjcqc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163qqbrzegx.html


<!-- 参考信息 -->