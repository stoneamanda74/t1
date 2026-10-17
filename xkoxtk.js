外链999!wailian999！

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163zoeaygjo.html

[G03] 实例属性
来源：http://www.xuanzx.com/163wzegymej.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163bhfayitz.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163rqcxlabl.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163yenzqdoz.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163mseslkkw.html

Java: private String name;
来源：http://www.aibaodan.cn/163tpxwohdc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163rubqmpnb.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163emhiwors.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163wxwkrwfi.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163tvhauaxi.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163oqxnlhip.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rtgrrmny.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163kmlfuzjs.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ymwfdzzj.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163whxgzckf.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163qhnjzokm.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163qkxbfhoz.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163yxydsmqh.html

[G05] 继承
来源：http://www.sxryk.cn/163buzubgha.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163nwiyakmb.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ikvploqm.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163uyxvvstm.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zgvzasuu.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163jtjqzrvo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163dxgrccqi.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163uhvwzatm.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163wlwoiuls.html

[G06] 重写方法
来源：http://www.xuanzx.com/163kwzozund.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163nfenuaji.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ueaaojjd.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163gxmtxxzj.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nzyyhaca.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163mixnlbck.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163jpcaghyz.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ashtnwja.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163jndfzcor.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163pkoypagi.html

Py:   super().greet()
来源：http://www.sxryk.cn/163zgayhpfe.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163dnfdsomv.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163rliusikx.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163alizkbdd.html

Java: super.greet();
来源：http://www.xuanzx.com/163ubhsqkaj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163neiibren.html

Ruby: super
来源：http://www.aibaodan.cn/163eiturkcf.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163vwuzswab.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163oilyewtx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163xvqkqgfh.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163metrbvgk.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163myrmlegr.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163pbuuwcsd.html

Java: static void f() {}
来源：http://www.xuanzx.com/163cvfsxlob.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ktbiyhlt.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163tnkmhyrx.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163psevxfao.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163nxjyhpnx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163aguswtyr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163sqptknvv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163vzmhtwuo.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163xkxlftbj.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163jrxlmaof.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163btaxgslp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ekhhorky.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163mkotwxky.html

[G10] 访问控制
来源：http://www.sxryk.cn/163njlfbvvi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163lbrbzdit.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163qkyddvgq.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ljmtlrzg.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163jzfhdimn.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163vavaoskv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163khrmlxse.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163rgxzunhz.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163gwgvbfvi.html

[G11] getter / setter
来源：http://www.xuanzx.com/163bovqmqwd.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163tdhparyv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163jllujogj.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163qblrkgin.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163jooqyqsn.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163lpiujigf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163navnwwel.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ervgqtvb.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163axodidsu.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163qlkgntjk.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163nlxcqsjc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163roghjgdh.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163tismzfwi.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163xdaveywx.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163yttraiba.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163gzmyhmmx.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163pjmkkxhz.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163gcajyfub.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163vugkunup.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163pghsrhkr.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163awjjaiul.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163yvlgnrad.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163amudxlqr.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163pkhabfbs.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163makkjaqi.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163zkntfvsj.html

C#:   u is User
来源：http://www.sxryk.cn/163dxeoipdz.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163zligvodr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163udhhiqbq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163sodctyeu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ktjbflcx.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163wpzmeakz.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163rucpvqmn.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vrbrzblx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163daonoavc.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ovvougkm.html

[G15] 枚举
来源：http://www.aibaodan.cn/163iqyderqg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163jrkwajtv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163hpjfepdw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163mytjohmq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dduabzul.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163eflcirxp.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163uojiargl.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163isnslxfg.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fsjekzuv.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ifmvjolo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163dkhozrxm.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163voguwjuq.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vkwixrpl.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vjgubnlu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ymwjusvz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163wdemvkbr.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163xhprygru.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163pjcpctri.html

================================================================================
来源：http://www.sxryk.cn/163xnudgpiw.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163dkwnlxvc.html

================================================================================
来源：http://www.sxryk.cn/163oafyvrch.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ztfjvmyi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163eopulvnf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ccsjlvwi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163fhuhztam.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163giyqfmao.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163hbcwacky.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163cenoxeas.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163doddgvan.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ssersetd.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163frczynjx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163icmvymyu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yhxudciz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163otbrppuu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xnhhhbjq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nkrkiaqr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163vqjexkji.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163pynjwsjf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163cxjldnis.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163mrrjeinv.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163zfxrzjoz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lpdgbayq.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kkefmbrg.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163vomakcnj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163aplalqxl.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163mzmcxzdv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163xvzthhjn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rswztoho.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163rjrecvem.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163xblsouwh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163xywasqkp.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163gbmtzqlx.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163akjbpwxf.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163lstrpufd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ursgbvjy.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163sjprphpr.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163kxrvnupx.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163nmmqlsqy.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163gkovalne.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163snqldobq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jgazqked.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rgkshnvc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ljbgzccf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163nkcpcmhw.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163xsfrvjyh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163gmbwxnlp.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163yuudsqdf.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163iialyswx.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163iwmvlgta.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kijselsc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rolhmwak.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163jklfmhdf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163eysltkcw.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163jfpjhdsl.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ijcrglhc.html

[H07] 断言
来源：http://www.aibaodan.cn/163kkipwjil.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163hzmvcrys.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163capjkkdu.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163szqbyrlt.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fihloogs.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163vbzhblvt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163epodaeni.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163sfxinqjv.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163kovfvvko.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163zujhomoz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163oulenumk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163slubltbn.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163lrahytke.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ywawpykb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163trxgdytb.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ydhexubz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163nbohtfln.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163qxgygcbs.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163pxqlrakb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163sfqluyns.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163xnigiivz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163nybnakzj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163uctlixha.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163hdjkgbkt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163qznxszmz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163jtxkysft.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163lyrrtglv.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163iajbqeyh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163kaljgoxm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163jnaivfll.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163uenltfnp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ghvcjnyz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163yvsexeah.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163nrqanypm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163taunlata.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163lumtjykp.html

================================================================================
来源：http://www.xuanzx.com/163zwxhzwpi.html

I. 正则表达式
来源：http://www.sxryk.cn/163hyxfiiki.html

================================================================================
来源：http://www.xuanzx.com/163bdceoidi.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ptqzpwhz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163xnvjrfjm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163pczzmkvu.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fvqwbvcb.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qiuofmwa.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163iibpoeuy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163gexhlpzk.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163hnxnvwcc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163xjewrvlo.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163rujqxufr.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ftrirujg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163hkyedmmp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163zjjegruo.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163xaiaxcum.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163kbqnkczx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163vrcvugoc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163tdcexkeh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ghqwvlpe.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163pgrsrofw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163gemzszms.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163hdltmfii.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163nrctjqlt.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163lmdzfhwg.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163rpvwubbm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163nqlbzqfv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163psvvujbt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163lizfrrvt.html

[I04] 正则替换
来源：http://www.xuanzx.com/163kukjapaj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163udbuaesf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163iglytgoq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163nazsqegb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xwyxovwk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163kqmhnifp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163rfiinsac.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163lcqudzao.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163whwdafat.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163zagfxoyl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163drifdgfh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163yzbkanac.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tnovgacl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jkvetjbl.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ysmiovbz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163twpldfak.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sqsmrfxc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163kbcgxdnq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ibihflaa.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rjqjcxdl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163fhdnaqnd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rvnraofa.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ajmccbau.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163yvhgozoq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163pvkjnjnl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ylqyfwfx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sfhsqwli.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163nshygztu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163jjrakmdr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163xscbwlpj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163amugflly.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163znmkbvnk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163wpnidozc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163dgdcjpta.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163xjppcqiq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163gdbdtesw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163fyaijycj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163yhptwizi.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163tbscoart.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zjypdkbw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163idhavaqx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163lqngcxak.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163krtjzren.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163cehhcqxe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163dwnyewor.html

================================================================================
来源：http://www.xuanzx.com/163inzsapyv.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ohmhavqu.html

================================================================================
来源：http://www.xuanzx.com/163faykfuxu.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163bacvjunc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163cpdfbjhg.html


<!-- 参考信息 -->