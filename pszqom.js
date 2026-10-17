外链999!wailian999！

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163jhxzqura.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163pvdchazg.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ceavyblo.html

[G05] 继承
来源：http://www.aibaodan.cn/163ywupmhsg.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163vjoichnt.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163mqjyrrks.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163urtjdmlg.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163uedllxjp.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163bwibyyyr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163wrboummk.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163qojhagjs.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163gdskbixu.html

[G06] 重写方法
来源：http://www.sxryk.cn/163jremuofv.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163vwmrover.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gzavissn.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163dbmempop.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163hplfahko.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163fvqpvnwk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163rlmjxxmd.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163bzpnbzhz.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163phptikva.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163scqombvn.html

Py:   super().greet()
来源：http://www.sxryk.cn/163rjbuwahr.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163dprrbfnw.html

JS:   super.greet();
来源：http://www.xuanzx.com/163assbpkvg.html

TS:   super.greet();
来源：http://www.sxryk.cn/163joqakncb.html

Java: super.greet();
来源：http://www.xuanzx.com/163qeurxcwi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163yyeizrlo.html

Ruby: super
来源：http://www.xuanzx.com/163rpnosolp.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163dryrbjzp.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163wdiogerm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ndufpnqi.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163tkcyiads.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163pctfqpyl.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163gkdmdima.html

Java: static void f() {}
来源：http://www.sxryk.cn/163geaugpoi.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163iraekypw.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163vzvdutnc.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163silzifdn.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qropvmzc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163cllmnpfo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163gtvdddyu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163pgjxwhxr.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163oitkmork.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163gyoerokx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163xolhyugj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163bqhqsmhv.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163yweykrpv.html

[G10] 访问控制
来源：http://www.xuanzx.com/163clspojby.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163olvjwfrc.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163mflvkcqz.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163atfijuao.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163dwdejezu.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163sszxenua.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163zjtvqjzj.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163enhmiuyd.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163somamstw.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ntedinac.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163pzjsjslq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163krevqoab.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163mkzqmxll.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163voavxqgk.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163arcoowhh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163xkfoyouj.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163rmqxcsru.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163dsyzsbah.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163frmkwsic.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163lotvzhep.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nbjkgxba.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163suaequqk.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163mjxedkww.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163zywretdy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ivtvsuzi.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163xbctbklc.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ewrgvbpy.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ahzzjuzr.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163fbxdfuiq.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163diivcznq.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163phvbsohf.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163xzdsiboo.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163esidfcnn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163iletnqyo.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163lxizrehc.html

C#:   u is User
来源：http://www.aibaodan.cn/163ppddvtxs.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163xhqqeqoo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163nflzjzbr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163okyuikoy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163dkmmnvlf.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163nxxvmdfp.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163jvmdragf.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163oodpjktn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163tgromubc.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163eqzrqykx.html

[G15] 枚举
来源：http://www.sxryk.cn/163zlldgfpk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ijsxmabi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163edokddcc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ifqgiqdk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hkjdbuyd.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163hlhyggxr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163kfgalvsp.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163mkdfkpgo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163loaiuoas.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163psohziat.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163eiwffgjv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163veymzfaf.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zuyueesg.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qkcpqsql.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ivcpbuzc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163dytwlkcs.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163oxtlipzx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163mbrebrnx.html

================================================================================
来源：http://www.aibaodan.cn/163onglpipo.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163zygghcik.html

================================================================================
来源：http://www.sxryk.cn/163siairigc.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163hdgujgie.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163rvuhozlo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163xsgoiayc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163vyiewvgh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163fvvgadql.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163kbizxptw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163kinzzxyi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163iybftkew.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163iceavpdb.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163inlqmbie.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163csjnjwte.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mitpleqo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kuoqtfqz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163raddajyo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163imodtdyq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163cndtjppk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163xsvmqmeg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163dbgqlyli.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163eaqrkbqu.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163gjjddxfx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163hljjeayy.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bhffvlzg.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lrvfxaxf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163jyalqnsb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163qugjzxzu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163iutnoqgr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hcxzfatd.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163oeuszzko.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163dbdlvzik.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mcqedshd.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vrmqdqog.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rvtcopba.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163botniuup.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ygjljpzr.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163xqhwqoou.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163kroxrxkk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163wvlpszmr.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163muyllmxh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163lmdmetqc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163aaqbnbkn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dncnhpqt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163pdzizhcx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163lgrabyry.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163mzqlaoco.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163oebbhbiw.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163nepzeluw.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163rpdxkapf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163rythipdc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ocexdlue.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163cqwyilhn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163smvmisjg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163psbxvcku.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163hsqvqdoc.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163rogrammx.html

[H07] 断言
来源：http://www.aibaodan.cn/163zyajyqoe.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163riwzieii.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163uyoezpyc.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jpdpudro.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163adagqkbb.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163nbgxqtvc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163fnmbbjhj.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163jujmtppc.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163phgrqwpt.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163crjngpem.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163hpmdrsxd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163rideepzz.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163wqjyojpi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163gnvqqarz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163sglfmafz.html

Go:   err.Error()
来源：http://www.xuanzx.com/163pcidnevt.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163vvfrusoe.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163scwnlpro.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163pargotyv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163sjzcqcgs.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163myqvjwsx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163tahuqeit.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163yqzxvsps.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163kdayfaqs.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163zgpitdbf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163aeiwkxpi.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163rovholpd.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163tnjxzied.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163kvceiszh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ybtxmaur.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tzuswtyc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163dixwxhef.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163zehabqyi.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163eaodftue.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163hbmtowqk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163tttposba.html

================================================================================
来源：http://www.xuanzx.com/163oauegtpg.html

I. 正则表达式
来源：http://www.aibaodan.cn/163vmjbvqgt.html

================================================================================
来源：http://www.xuanzx.com/163ydxmywwu.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163hsxmrxaw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163xsmrubml.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ktmankha.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163elyxdprq.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163husfhbhh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163fhbzlvzf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163fsdiucik.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163bzorodlv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163nnnalixc.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163vwwuosvv.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163gvxrsgul.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163aqqzzypi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163bnqomatl.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163dfyjjjkv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163eafdlegk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163magvhhpc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163hwmwwiyr.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163euxusunh.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163cnxanoxn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163pzhsbvgq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163hrcdvuqb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163jloizigi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ohtqiagw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ktrtidvd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163gcggffhl.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163qphajhxp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163oyenmfnw.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163izdmhekb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163evjzoxzg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ieqmfrrm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kkzxurpp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163kxuzenxj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163lnuyqljp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ttetwbro.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163cpjteqqk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163wvxegktj.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163bmylnhsb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ohxkkkws.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163rtjsyyxj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163yjrrtvak.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qpnjahwi.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163jqmbycev.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163yqzpglya.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ldeqdygt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163dauezbqp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qqviitcd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wviulcap.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163hugrdttc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163imcdvkjo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hvtdaqym.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163aocqdrsa.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ngkxdtmd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163nuzondjl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163lurfjekp.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163embbjbpc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163tjzaawaf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163nxowghyr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163jidbizgo.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ztmzgmmw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163oqzrxmzd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163avmgybcs.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163pdcecjbh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163cxxydhsy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163jftuqnen.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163uvvsejgn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163janckvzj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ugspwvhn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ntmpcqpy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163npriafts.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163lpvcfdtg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163rclxueav.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163uwmfgujm.html

================================================================================
来源：http://www.xuanzx.com/163nftdebso.html

J. 日期与时间
来源：http://www.sxryk.cn/163kjzygxrz.html

================================================================================
来源：http://www.sxryk.cn/163vrpbfcwp.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163srjfvbcs.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163jznaidbo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gphifvld.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lustjuir.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ljwgnutd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163gyqqyktr.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163lmusxouv.html

Ruby: Time.now
来源：http://www.xuanzx.com/163essjtesz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163uagiftec.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163btitggcp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qdnhlpuu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163cbbxoetp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163awvbpcrg.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163utlhmriv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163fnbkoyom.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ktfqottf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dgeutkgl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163zedtwuco.html


<!-- 参考信息 -->