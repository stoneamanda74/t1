外链999!wailian999！

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ziwmjepu.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163jynffdxd.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ynyivwim.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163khmffaix.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163kovofeff.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163cfmgrzhi.html

Java: private String name;
来源：http://www.aibaodan.cn/163qfcqrtyz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163jdjzpsxz.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163uhwmvkqd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163razmvcyv.html

[G04] 定义方法
来源：http://www.xuanzx.com/163pwkwlfhj.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163blghgyeu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163xelfmisa.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163cwasncbn.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163zfjcvwjq.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163tvhnkgnc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163eeyggkmk.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163sjvnzvte.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163odlbnqrq.html

[G05] 继承
来源：http://www.aibaodan.cn/163rfywqgil.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ltboaejo.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163yxiqpgzb.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mkfwguop.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kfxdnlus.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163lanildzz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163jixpjxbv.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163hxzjlynh.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163etjrtscc.html

[G06] 重写方法
来源：http://www.sxryk.cn/163zlotddek.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ognqgefj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wixnxlnh.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163xlycukae.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163msuegenc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ehrxecpx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wqcxcwpi.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163mviikvqq.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163bpsoylml.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163cpikiflt.html

Py:   super().greet()
来源：http://www.sxryk.cn/163qxvptzdq.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163kzuivxyt.html

JS:   super.greet();
来源：http://www.xuanzx.com/163cimjooba.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163aapygzvd.html

Java: super.greet();
来源：http://www.xuanzx.com/163pjdccqem.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163diwrlklb.html

Ruby: super
来源：http://www.xuanzx.com/163tkttowlj.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163xqstgbpr.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163sbgmxzca.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163gvpclwts.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163hubvyddh.html

JS:   static f() {}
来源：http://www.sxryk.cn/163zgdkrecd.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163xwcpewfa.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163sdrdovhj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163jjumeoem.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ryeepajy.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163vxqlptwo.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163gavnwupx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163mmrvnhec.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163wwjexeni.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163khzfjojl.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163vkkfdwaa.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163xrkfwueu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163jnlemxbp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163zjugkvfg.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ojhrsoma.html

[G10] 访问控制
来源：http://www.xuanzx.com/163lvnfxtez.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163dmotqryl.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163mlggtqra.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163hnulmqtv.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163iuiyljlr.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163erynujps.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163goasnbab.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163osxkekoc.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163wjomqqoh.html

[G11] getter / setter
来源：http://www.xuanzx.com/163gewepruh.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163cdviyovz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hmdemgry.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163rwbwrbuk.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163coepbokr.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163chkenenb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163wwfsjzti.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163znidiuzi.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163tprrmxsr.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ootpihgq.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163hmhfwsmm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yisarjei.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163duvssmbw.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163oqyxzjje.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163wilafdfe.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163hgkfskfh.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163viumjcfg.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163sltvgtpw.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ptpsqqvy.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163sqttjtth.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163siwysrvb.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163owrlcdai.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163teesgtdg.html

Java: u instanceof User
来源：http://www.sxryk.cn/163zsucpbiq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163xbqmnuhp.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163foifaqge.html

C#:   u is User
来源：http://www.xuanzx.com/163ldzyndxo.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163kzrelkij.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163hregrugn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163pszmhdza.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163rtdrfzhk.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163rizxknlk.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163lszknapl.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163mqjiomup.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163yygbrplw.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163lrcqsbca.html

[G15] 枚举
来源：http://www.xuanzx.com/163wkrkarsi.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163lfdclahs.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163xivydyib.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163dndcpygl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163oibrdrds.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ctgozxqh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163jknwetos.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163tramlisd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163lisytprz.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163qgdmtogq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163aeuoibuc.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163eqefliae.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tjksssca.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163grvbkqni.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163qocxapom.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163lnbfnlyl.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ljntohri.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163wmgijrcn.html

================================================================================
来源：http://www.xuanzx.com/163ewfheirz.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163fcrmhhla.html

================================================================================
来源：http://www.sxryk.cn/163sbnaannu.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ybalvlya.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163lrxgybxy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163qodkyhkk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mxzriklf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163mesldnky.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163diwldssl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163pcuzoosl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163utjqsmxs.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163mivcpdam.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163bbphcnuq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163tuxwzxyo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wydxwbza.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jygpgrhp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mvrgcmgh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163oepcwuos.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163kmsvrlkr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163aunokyfz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163obqkhfay.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163buwzgpgy.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163dgtyxhmj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hlqdyncu.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163oczcqphr.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pqrrzyth.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dmxuwlzw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163chmzcnjw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ylqgluyv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163swzgddyc.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163dvzrncpr.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163kqxdjsgv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163jwpcyxvi.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kyxoxgal.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jgmultqo.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163judzfawg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163hghcsnld.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163udjbhhln.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163wspuppqn.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163sixqpgce.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163fybgvbrm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163tyviecur.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xckjrorv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163czyoasoa.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163xfypfdhr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ttubqknx.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163visdakel.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163xwmpolei.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163celqinlp.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163jgplzybj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ucwyolmb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ajubsdtb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wihisred.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163eirzctgn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163yosuvmyv.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163evvknbbp.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163owkgatlb.html

[H07] 断言
来源：http://www.sxryk.cn/163asvyxrdh.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ihlxwntf.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163vrzoiirv.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mysjlwux.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163stpqadzp.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ilyuismj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163obdcybhi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163yskgpgml.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163gblwmwry.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163qnmqpvrs.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163hwuwvasq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163dsfukxtu.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163jjfvevnc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163sdyotvru.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163sefilevv.html

Go:   err.Error()
来源：http://www.sxryk.cn/163uebpktye.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163mtydzzsv.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163txzbccvn.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163gdxxrfgr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163xkldfbtb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163oqpjfjmh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163hvwqitkl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163vwsaydmf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163reobdqoe.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163uyewnuro.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163dqoyffqj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163njtnoiwg.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163orrvzhlz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163wmxdmmch.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163cdeupziz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163knfaqcns.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zuikwmsv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163kddczruy.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163rptugywo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163hngewbpz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163aupaaieh.html

================================================================================
来源：http://www.sxryk.cn/163wmagdjdo.html

I. 正则表达式
来源：http://www.sxryk.cn/163nkubbxja.html

================================================================================
来源：http://www.xuanzx.com/163uhjoosjk.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163aklcqlfa.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163dgojuxtn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163dweqayxv.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163unicprch.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dcftcdmi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gsawvarx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163zwlcjjfi.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163akhbvbzi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163edupsqij.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163famutujd.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163nbcsgvyp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163snphlxkt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163glsbeusg.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163obzfhytd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ujbthntg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163mwvxxgfv.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163tkszikre.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163erfgkbod.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163yuafqrcu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163fwbjaxsg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163qoudcsmy.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163obfmcgzg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163bqxphupb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ioswqvrx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163wgkysyma.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163aqouibcv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163rxezllnx.html

[I04] 正则替换
来源：http://www.sxryk.cn/163geutnryl.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163qqbocwdr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lkqzhzhl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ubywuhrp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jygmxnpi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ngwedyfx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163uexmprxg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163vcynkzsj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163gwmdyxld.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163atazkqnj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lazripii.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ayccldhw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ehpjdrnc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163onyzujug.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163jpbsgcnq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163dlbthqos.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gezfbuwo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163hqtveuxj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163slvbtgpq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dnozgnvq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163urnfgudv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qztdjixp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xoujlyav.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163wtuwyzpi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ergjlxyp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163rerzyiwc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163irqlinha.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163aaipdcnt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163sxcxffrf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163towiydwc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ufnrbuqf.html

TS:   /error/gim
来源：http://www.xuanzx.com/163lkxiybov.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ucsizjon.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163tfcijcdi.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163oyyitmxh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163jwndsqjw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ciwqzxuq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ibzzmmiw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163mtwdwhar.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163auqyenhp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jxmecgmp.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163xliwisoh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163dbbkgtql.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163wdibvjsd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163qgagiwfc.html

================================================================================
来源：http://www.xuanzx.com/163xqvnqlqu.html

J. 日期与时间
来源：http://www.xuanzx.com/163ajoyejcl.html

================================================================================
来源：http://www.xuanzx.com/163jjvdszna.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163sqjjsvus.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163hwjbaoea.html


<!-- 参考信息 -->