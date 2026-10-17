外链999!wailian999！

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163dmfqjkby.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163nwhrsumm.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163jdykwcdq.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163pcwwrgkb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163kgtmylra.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163cofouoeh.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163tptlyhcj.html

[G05] 继承
来源：http://www.xuanzx.com/163hetvpopm.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163dxxnkfaf.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163svsxxxzk.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163tahoruhd.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163yvlesmew.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163srzedfbv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163xjkswkle.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163kxwzcvxf.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ezowmefg.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163enkxlsfl.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163xniaqwom.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nnyqhhko.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163mxgtczkr.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163onefclia.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163pgfiaaml.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163iayllvnj.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163hnjnrdxz.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163rvxxyvcd.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163cfuynoqf.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163qljlpqlq.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163kubvzczk.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wtpautks.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163lxwsbyjx.html

Java: super.greet();
来源：http://www.xuanzx.com/163puhwoyah.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163najtlmhp.html

Ruby: super
来源：http://www.xuanzx.com/163dksjzzto.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163msitjvxr.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163xxpvzxba.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163njlfbnaj.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ylzjbdre.html

JS:   static f() {}
来源：http://www.sxryk.cn/163xubmbmou.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163kkkhxhhk.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163znmhowlo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163xzxttoas.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163zmviljcs.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ficwmvvn.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ivqjzwhj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163nkclshqv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163hkzkryvx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rrmxfpzk.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163vsxtrmqs.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163dyhozcua.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163wyaatomp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163sjaiavpw.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163gonrmohr.html

[G10] 访问控制
来源：http://www.xuanzx.com/163wganqlnx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163nmzmlkft.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163hyvlrkwp.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163jozioqtx.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163xdizyxmx.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163acxcwvwb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ybtbltmx.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jbbrlyvi.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163fufltodc.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163lucnzshf.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163rbzffghf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163cjjpxcug.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163tsfvylzk.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163csmeasjq.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ibdbiyuf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163pocjlrcy.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163vfrfubaj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163gzsyvysw.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ezqmwkbw.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163mmtslxbv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ehqiwgfg.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163vqcmlite.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ehboxqze.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163lglavydh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163utgxtekc.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163mqljsbpe.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163mfkajstb.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163jucbielr.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163qdlpmxig.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163drsgrmqg.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163xttszecz.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163jqmhnbxj.html

Java: u instanceof User
来源：http://www.xuanzx.com/163xexaqzvg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163gcebwbnm.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163tvnjeqmi.html

C#:   u is User
来源：http://www.sxryk.cn/163ifyswoqk.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163hcquvszs.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163fqhutmke.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163mgiihlnk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163pgtjwkma.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163rdwjttdb.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163hkdzenyz.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163dqaqridr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163dukwmpbq.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163dlojzjpt.html

[G15] 枚举
来源：http://www.aibaodan.cn/163amgizazs.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163lvpxxzxm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163rwgxcjhq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ageltcgd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ymjfuosd.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163qcnbmkwq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163emvjewyl.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163koipgywt.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163yhqkhlcn.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163macvjbgb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163vgvdlpwk.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ewvjexhe.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163yaxnoqbq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163yffiigwk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163wmusdhpj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163irtclpyg.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163hbqvvxid.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163rmgpyvel.html

================================================================================
来源：http://www.aibaodan.cn/163zdhuewdu.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163wroqtovs.html

================================================================================
来源：http://www.xuanzx.com/163pcqlngmj.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163wgcwqrqy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ifgekqjl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ahmsmotx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163kwsnvphd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ykxrpvxf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163brfmjgch.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163mgsxvyae.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163plphduwy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163jacmvivs.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163aedoudrf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163iuaedaky.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cugqhcmw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jbjamihc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eiesdioj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bfybrqlv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163vvwusibm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ttdyinkq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ruxzgwtm.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163nhcrrpgf.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163mkocwpme.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xisboedr.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wqqxgswe.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163slefoidv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163shqsyund.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163yxdsgjgo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ktqtofnw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163iccrrwur.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163vrtrdqqs.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163myxqiiwe.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163lfyuqbcr.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kxqsjhbg.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163djzsoeby.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163vucrkxsv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163xiljutwg.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rksduttx.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ntbzlsqg.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hulaccyo.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163pntwayia.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163qptyfrek.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pyiyprqm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kvybwbah.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163azonqugo.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163zujycoue.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163qlsjrriy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163oegvoiks.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163grorptnc.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163xtgyscjh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163zllmjvll.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163giixodcm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163djbccvso.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163fgxrngav.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163mjexyllt.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163iuvwvaoo.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163pjqxjygp.html

[H07] 断言
来源：http://www.xuanzx.com/163vqkvhaji.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163bmaevaxp.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163suhbkohj.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163yqthdebm.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163exadusgm.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163nakinllj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163cacivtbs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163kcnpaiku.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163sadqvuyp.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163pkrzwzmy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163jvasgijs.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163qeziqvxw.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163rpqpacfs.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163flcsqsec.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163zsqciadb.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163tqfcfkbe.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163vgtmeyje.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163gizqclue.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163qlxrfylg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163exavcpnx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163tcyeiloz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163slyavhhp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163srapezww.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163mjlpemut.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163uedrtchj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163phxsavcl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163qkrrlyqy.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163btmvenfu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163yfxnkkzf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163xedqmygw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163yywitsee.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dwvhdrvg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163jkueaznl.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163iojqwfzm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163enkmpelm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163wtegjgow.html

================================================================================
来源：http://www.xuanzx.com/163fbgsadxk.html

I. 正则表达式
来源：http://www.sxryk.cn/163uldvmcoy.html

================================================================================
来源：http://www.xuanzx.com/163pkuutmmm.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163rgnyxttc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163eorfuahq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163jwbrjgxd.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163olocshsr.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163aqhkgiqi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163yjwlzkuj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163mtbglhrh.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163vovwfedo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163vtjcipkw.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163darqxchm.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163eufsynix.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163auzhgtlt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163jlbaxufa.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163iwxcrdyb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163vxdxndyc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163fbjfmfni.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163xtobfbyh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163zzwlpeng.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163pgbxlqxn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163qaqpzpba.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163pccazdnc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jdewemlt.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163xsweguty.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163yuxgygio.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163lovakjmv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163iihlbfdc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163jqgrjzxx.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ickccksz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163tznxmivs.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163otugyfrx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163asgkwyxg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163bzrxorbp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163grfvetot.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163gzbaljuv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163lxdkmgop.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163oiaftxxm.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163lyzwiatu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163avbzqxrn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163dfkdglzz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163uijhjhqf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zjxcrsws.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163xpropxji.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163aqvodnci.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bzqkxqjo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163jfsglmby.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163fxrmhijq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163njnymqfn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163yvuppnyi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163iyrchtyv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kfwebodm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163bqsdmtyv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163gbrjbnlr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163pwkwuqoe.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163heqrorbk.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163uxdsvkag.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163xqvaffxq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ioiapmdl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163esdxmwrz.html

TS:   /error/gim
来源：http://www.sxryk.cn/163pkzpjmiv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163wyrkohrr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163umtofuzv.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163lzfstzxz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163khuywdqo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163lwrlrvrk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163tndxlevm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163kyyxepvi.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tkxqcxbj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163piywewun.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163wppaftgi.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163iyevthbg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163gmubbthv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163hhehjquv.html

================================================================================
来源：http://www.aibaodan.cn/163faubvogd.html

J. 日期与时间
来源：http://www.xuanzx.com/163wwyuoswu.html

================================================================================
来源：http://www.sxryk.cn/163ldugfyxk.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163oyqrwkks.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163alzjrqxl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sdwyrbiq.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163kictresb.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wqibdakg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163hsshftlw.html

Go:   time.Now()
来源：http://www.xuanzx.com/163fripxocz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ygdbuict.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163bvzuqtwc.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163kolfonug.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lqwkiero.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163eqbewmzx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163efydfags.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163pogssltn.html


<!-- 参考信息 -->