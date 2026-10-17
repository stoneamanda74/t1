外链999!wailian999！

Ruby: @name = "x"
来源：http://www.xuanzx.com/163mkolqpcc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163cbjodsjr.html

[G04] 定义方法
来源：http://www.xuanzx.com/163kthkihbe.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163zrubccjg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163cwscohuk.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163sgbujhfa.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163flydcjhg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ewmdnqkn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163wasafbtf.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163vzfpywuo.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163dorrprxm.html

[G05] 继承
来源：http://www.xuanzx.com/163avetzwui.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163axcdqpqr.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wqyulrnw.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ynbmcafl.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xxhmnypt.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163iicwtvxt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163oxoupkwq.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163mohspfvq.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163mprnydtu.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163yslynzpx.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163jznnpnph.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163uyzazgsb.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ireuzqhz.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ohpkjsbn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163mxpegtzy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163hvirknnw.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163sukugmgr.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163rkjrbrpt.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163hehgvrar.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163nmoxxfrn.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163kpqwauml.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163grqvqguy.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163fhwocbsj.html

Java: super.greet();
来源：http://www.aibaodan.cn/163eogjyagr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163xclsqhef.html

Ruby: super
来源：http://www.aibaodan.cn/163skhojrsb.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ebjopgkf.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163plizvngc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163upxtzhrv.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163wnzgdexx.html

JS:   static f() {}
来源：http://www.sxryk.cn/163staykutv.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163uhmycjjn.html

Java: static void f() {}
来源：http://www.sxryk.cn/163agahznpm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163xczectfb.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163cucwzlos.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163paepwbqr.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163eumvpgth.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163uwtbfauw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163tyricrom.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163apcjvbet.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163bgppfvus.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163rcrtpxqb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163assexwwx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163lpacrujw.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163vjotbfmk.html

[G10] 访问控制
来源：http://www.sxryk.cn/163sdyfflwk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163hztxzvnl.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163bwdljnqq.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ylpemrdx.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163brwdnkae.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163gbounfyj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163amjawxid.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163wfdqdben.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163nncckyjr.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163sjwvdxoo.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ojyrbynr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lyydrohd.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163okpgjxcu.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163nfbtjfxp.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163hhrafkfx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163cvmevxix.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163eohrhtcr.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163dgolsyzq.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163txopnhfx.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163amvzzswt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163pxoepdnl.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163lqyujbdh.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163xumyyobi.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ivlfbyss.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163dnxcdrxj.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163xxvvsgfp.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163wdihsjzl.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163qmrrotps.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163iicqnurc.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163gjddylqg.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163jkjilvuw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163gqyazwnq.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163onjwxqju.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163wtmmxrfe.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ixxdmtzd.html

C#:   u is User
来源：http://www.sxryk.cn/163dfjbhchn.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163rohzzens.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163jfkiiwlx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ipadijpd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163cqkanmak.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163grvzkvou.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ebqaajjk.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163rptloipk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163idpzewqi.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qygfuqys.html

[G15] 枚举
来源：http://www.sxryk.cn/163zeevjcda.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163nuilwbfr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163eayvbkjf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163xbmcgqqn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qkfjfztd.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163bkjjbyiw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163oyhbgqlm.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163hmjicwwf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163qprjggct.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163uhlaozyo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163lipcirac.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163rsmwnlki.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163crhdxkly.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jlledjpx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163bybqlszt.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163nrmqjvqj.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163qcopzrkm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163hrekcwit.html

================================================================================
来源：http://www.sxryk.cn/163cfcgbvth.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163mxailffm.html

================================================================================
来源：http://www.aibaodan.cn/163djywlcjb.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163dwpaxxln.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qvyixene.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163rmtgjjns.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163vwoucoim.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163lpofovbt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163vbmmhddq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163mmvcgqna.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163kbhjkgqq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163dqgpkknx.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163cjxtybgh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ekqfgfyb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wryquree.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bbemfbvc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163csczgisf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hdzumwxd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163jsrlbupn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163nwgjfhmt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163vndutyqz.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163kjnmsnmk.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163lmosujfw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163vdcerhor.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ufrjvwjp.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163olmopdmp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163vgusiqkt.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ldstriod.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163jxxxnpbr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ohfaqagg.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ivlsmytn.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163qdlxnuap.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163xcnlnpvq.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zneexvme.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163gbnlqeng.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163mukzeoom.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163hndkxuww.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163bnkyezqx.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163helhxqbs.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163rsuxvhfl.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163eountnca.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ixpkdhdv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163doirmkdl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163inxdscvh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163nedtozfn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163gtenkxev.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163yafvkchr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163niuyuvou.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ubgfnetd.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ededepql.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163uexzxiou.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pcwiboum.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163rplsikml.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163boekcoiv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163bywjjpae.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163zazwzqhx.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163hlnmjzgb.html

[H07] 断言
来源：http://www.sxryk.cn/163bxqryhzn.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163oljxvpjw.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163tivqqlhu.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163msdstsfr.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cfhgqffg.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ktooefya.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163zojkcboa.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xzqehgtg.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jzuowjwe.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163cexwdijs.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163wdsrkaxa.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163qrhgpebx.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ejaeldwx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163bfthrxju.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163naoktsxf.html

Go:   err.Error()
来源：http://www.sxryk.cn/163qexooszx.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163vwcblzym.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163aoxpvkbh.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163umaqgkpu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163yotxistf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163pzjuonhn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163gxxfcnlr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163dxceehow.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163hxedvmfy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ofxaxbwn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163lwwpqbnh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163nhlsfcbt.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163xtgevlqi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163rbjuxukv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163arwxlbmv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wtxrwnbc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163frgeukpx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163wmrpiouc.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163erwrnkri.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163qocbewbt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163negwkecu.html

================================================================================
来源：http://www.sxryk.cn/163twmzspfb.html

I. 正则表达式
来源：http://www.aibaodan.cn/163rdfajjcp.html

================================================================================
来源：http://www.aibaodan.cn/163hzhhkihu.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163poikidrm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163lhtqtbho.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163glsifnvf.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ozsnpmtd.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ccsljpxy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163lichkhzz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163vdpcihls.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163wdbqqypi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zqsaezss.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ugqkleck.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ykdkqxuy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163uupahxts.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163fsgyflgw.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qktwvyoy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163nuxjtwdc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163xvwnqxdp.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163kdfmrmyu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163qotligrp.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vnskkxlq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163xumlijsp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163hphlasmq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163aygpdtuh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163rqsgncdb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163asturijv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163luecqzvt.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163mzgcpplw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163qptujmgc.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163zpvnnjcl.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163vjtdclws.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zbcdeijt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ahwrjevp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163juexfkbq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163rgrtlcwu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163laifpnvc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163lczhwpwg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163lbtkwimi.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163lkzeeeyi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ogmmbhpn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163zekxkbjz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ukvqohln.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ealhwboc.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163lpwuexys.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163qntmloyw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yewyzyao.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163kvdmqgcu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163mbddjaaa.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163rpmgghfo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163vkagqvch.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rzkaswxa.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gxsxwiji.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163xuphgfzv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163nmkonljw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xwzkciec.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fiaxjcwu.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163yatbyysh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163sguqinqt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163wxizfjah.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163zkkltsbl.html

TS:   /error/gim
来源：http://www.xuanzx.com/163yxttvfzk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163knudgmcp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163fxzsuxtf.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163aetjnftz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163sgbbnppa.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163iyzdurfn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163gofxhilx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163qgagpsdl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xkafweua.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163bjuohhpk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163gikqtoao.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163fqwcobcw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163twwdwjpq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163lseyhzck.html

================================================================================
来源：http://www.xuanzx.com/163cumplkij.html

J. 日期与时间
来源：http://www.sxryk.cn/163nmvrmzen.html

================================================================================
来源：http://www.aibaodan.cn/163gkkrcjdu.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163bbpgmhgw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163bdcatbhp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qiojrfhv.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163fapzposl.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rxvbzkvq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163qsoonmkg.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ixohxrjw.html

Ruby: Time.now
来源：http://www.xuanzx.com/163glicxtaz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163vadmfegx.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163eiskrbbd.html


<!-- 参考信息 -->