外链999!wailian999！

[G02] 构造函数
来源：http://www.sxryk.cn/163hzpfkoef.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163oixledsn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ntqpgnnd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163kotqsuuw.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ojvnmixc.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163xnpxxfjp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163xlvklliw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163zriftcql.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163knvpkfaa.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ntyjqjwr.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163dfiedpyp.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ellosyzy.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163pwfgmvcq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ftnarkvi.html

Java: private String name;
来源：http://www.aibaodan.cn/163fjgycsow.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163nhedygab.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163btfaiffk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163mqklgtxf.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163czximrsk.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163pwyprijw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ldmppfvq.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163zlelleft.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163kirhpouj.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163otvvmzyg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163yltebajp.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163lxhqwazs.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163jkeyyuke.html

[G05] 继承
来源：http://www.xuanzx.com/163byiodnhe.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163vsspamod.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163zpmgovnp.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163aucjyzxw.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lxtuqibp.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163pzkttvbe.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163mgexjfhf.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163foqivxqk.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163hyplygxp.html

[G06] 重写方法
来源：http://www.xuanzx.com/163exukvzjg.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163brhivkvn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pbnqcoxj.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163fehlokwx.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fyirdywp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163sppamhvj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163cepilviz.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kwkfcnsq.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163mqrxwpfx.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163sgryaizk.html

Py:   super().greet()
来源：http://www.sxryk.cn/163movjjfqx.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ougjxhki.html

JS:   super.greet();
来源：http://www.sxryk.cn/163jvjmcian.html

TS:   super.greet();
来源：http://www.xuanzx.com/163mkvemqoc.html

Java: super.greet();
来源：http://www.xuanzx.com/163ztnqorwq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163akoxcjti.html

Ruby: super
来源：http://www.sxryk.cn/163rfoxevjz.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163tolwmrnv.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163xaklvksj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163zfqjoagk.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163tisxugjy.html

JS:   static f() {}
来源：http://www.xuanzx.com/163grnihtgn.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163drcstitz.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ovyuwtwq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163rummdoza.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163rieufnjt.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163phishtll.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163slimkitl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163vdjmtgrj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163qurqdemq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163uhlclrxy.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ckxfwiek.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163zhbxwpzq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163sfcvtbdw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163hbcqhgwg.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163plkcljte.html

[G10] 访问控制
来源：http://www.sxryk.cn/163orjmkdal.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163osiqjakc.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163tetjmdhb.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163dcpweauv.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163uwccmfkh.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163alyryhfq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163kbzwcqjn.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163orbgkysg.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163pzbnxgss.html

[G11] getter / setter
来源：http://www.sxryk.cn/163tjfcckuj.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163vqorqalf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163pnckjxlv.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163cbbsdfhs.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ynkvsijb.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163zpllawrf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163lifgmcei.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163imnbrfli.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163ljgrwcpi.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ctkakzat.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163knvvygah.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163xrlvecdz.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163kedxxeqh.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163uhefmcsd.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163qhlrbfkw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163xxgfkitl.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163scraiouv.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163yoboenuk.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163igthyjgy.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ywnsexdl.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163fjriwcio.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163pmgthbfw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163corsdqba.html

Java: u instanceof User
来源：http://www.xuanzx.com/163gkqhoaqf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163yijvzfcd.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163twtdwiam.html

C#:   u is User
来源：http://www.xuanzx.com/163lywhrzhj.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163atelugan.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ntthlfop.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163jxwrjoja.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163sodvvihk.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ygiibmex.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163hyawlmhr.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163brnjupuc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163gpjawkpd.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163nsoiuxfp.html

[G15] 枚举
来源：http://www.sxryk.cn/163ebqrnnqb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163iyoubiug.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ixtmwxhu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163bpakuuka.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jlddffei.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163lgbnmknb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ssvuhxno.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163tquxtlri.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ijeehceh.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ozpucyxj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163rruallip.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163aiyjprhh.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163pgfujawh.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163iohcltkh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163knkkespr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163qromdsoa.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163dzdkqueh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163prjkrlkl.html

================================================================================
来源：http://www.sxryk.cn/163stkfhwep.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163xtsecobf.html

================================================================================
来源：http://www.sxryk.cn/163mprboziv.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ybkffwjc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ryjdsqaz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163awksaflz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rwtxnpfu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163btjadqsv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163oqppfsrk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163nkzpqsms.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163qrierbue.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163verwonro.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163oapoiwtj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163txsippit.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jugtqxqn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163twtmtrer.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163camztork.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lydfetfg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163bxxoglsa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163thderlsq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163giuvsmey.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163gqqbafgg.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163fyrcfzdk.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163coxrcann.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tvxhdosi.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163kjwkxdzh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ftjzpjua.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163acsmxzha.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ogyhwsmi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ldctelcj.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163cacwdond.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163iplwdhbw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163kwozcmsk.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gcwoyidv.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163laqxarae.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163wfsnybfq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xhlgdsrh.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163wyrkrkef.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163pgqxdqkv.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163orbronxe.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163gzwdkvjt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163lvpucahp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163mqnfftsz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163krziimig.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163bapyosfy.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ghtlpfua.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163mlfhlgsn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163eyppsepp.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163mqhujjyd.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qxubvnqb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163bdsjnhaj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163yvudqbkv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163miqfcohy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163hxnenjvv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163wixzuzvw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163lionxpat.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163djmrvmvx.html

[H07] 断言
来源：http://www.sxryk.cn/163mqunskkp.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163zprowchy.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163axhztvpl.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fklgcsgy.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pcqokcer.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163mmqtlhtt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163pudluuqx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163shfqphpi.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163rfdgzwxy.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163zsgmtegs.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163kkreawwt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163lamqidbm.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163mtsxwdgw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ukqgbnmy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163xwaqdhyp.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163xbasvqka.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163qfqskghm.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163mpcdvghn.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ymjsxeae.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163uxfdcrgb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163plzxlhus.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163idnpmmwi.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ogxdtlwq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163qdbgokpt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163lrvivohg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163txgjydhr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163iucljnap.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163sawxactx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163kfnvhmsq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163zkqkrpgc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vhfugiri.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wgwgcbqf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163znagrkbd.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163aefuuxgv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163funbokwt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163nuufckbn.html

================================================================================
来源：http://www.sxryk.cn/163rvcbukaw.html

I. 正则表达式
来源：http://www.aibaodan.cn/163jltaysey.html

================================================================================
来源：http://www.aibaodan.cn/163tmjbprao.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163yecxjhen.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163zsmrdwfg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163foumdtvr.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zzhsdnbm.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ixnzdcwl.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163apbofnkv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163lqzmxehs.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163wikbewyh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ujkzudel.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163fueuaxgb.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163gtgvdzum.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163fzqbowzt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163dzabyehx.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163jxpkxrgt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163urhlnfnd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163fpisspuz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163alebgijs.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163cmkvjqcc.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163svmenjss.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163hrlsmsfm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163fxideeis.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163fsacxrze.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163xyymeuqv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163bfjjacmh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163umubnqwz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163jufexlqm.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163bahkojvy.html

[I04] 正则替换
来源：http://www.xuanzx.com/163zpltieew.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ypmjoxvz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163iodbfhtr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sxltajuw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163yddgosos.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163gofmgdys.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163sfjfzdbi.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163kczecwip.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ljteufsz.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163quujaivg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163vxxvatmg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163czlsjdvt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zzzvuigf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ewzsxsqp.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163oekthvqs.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163txatlgey.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vzmvcmnp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163icgppfhk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163sfabvtdf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ykskibjj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163bdofxams.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ocfqxjeu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163sbgfrhgl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163eaxnehkg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163leymmhjh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163dezbsnmz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xworhllr.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163erzqhzgf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163lrxhojeh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163rlwfukji.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163uwsssqnv.html

TS:   /error/gim
来源：http://www.xuanzx.com/163pelybsre.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163lbcsmatl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163vcidtnrq.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163cgfwpygh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163evuhrvsl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163csysmvcr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163edjtrmlx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163zyjqkywc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163kllmtajb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vbnrpltx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163zhajmyyd.html


<!-- 参考信息 -->