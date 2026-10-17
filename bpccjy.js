外链999!wailian999！

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163tsgorfcy.html

[G03] 实例属性
来源：http://www.xuanzx.com/163uusoqztd.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jxtcsohx.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163aqdkvojr.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163cizcdobt.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163gmqdqthx.html

Java: private String name;
来源：http://www.aibaodan.cn/163cgwzywkv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163dcuqduhm.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ewmmqcqw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163dlrttchk.html

[G04] 定义方法
来源：http://www.xuanzx.com/163fatdtqwc.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163iugpzefm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dgjwkdec.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163scdptifq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163vrxuatff.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ivmnicqk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163qszuwphl.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163xtoblmsj.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ezmpoixh.html

[G05] 继承
来源：http://www.sxryk.cn/163epfhrtop.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163fgdjdbks.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163khrzojac.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jwzwgolo.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mnnimgqr.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163kddhwqot.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163hadmjkll.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163sbblwxak.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163otuatpsw.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ctgzbaxz.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163kmgwngcy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163eicezyyn.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163tuwbaqtm.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163epniebha.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xhnquplc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163mizmfskb.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kmzvyarn.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163phhtfnlh.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163dkpxyule.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163aigzvvfj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vtkwqcek.html

JS:   super.greet();
来源：http://www.sxryk.cn/163awjzehsu.html

TS:   super.greet();
来源：http://www.sxryk.cn/163uzkzumyh.html

Java: super.greet();
来源：http://www.aibaodan.cn/163rwmoywli.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163qluonlan.html

Ruby: super
来源：http://www.aibaodan.cn/163pjinjfry.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163aytpmetl.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163gklxksmp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163bzbmxryx.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163bzaktudq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163kesbdnoe.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163qydzqdbc.html

Java: static void f() {}
来源：http://www.sxryk.cn/163uauymwfy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163rxnaiwxe.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163roxjxmhv.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ammgahal.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163nplhbbht.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163koklmdrj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ejyvygkj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163rqwuqnxh.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163qflwwztj.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163palodsxh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ziteecct.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163njbwfiwp.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163qmxithxp.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163byqjcjen.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163dqnofgqw.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163rlolwuhk.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163vvasttso.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163logwhkmv.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163hemzscle.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163lolkmuwh.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163chjlbklh.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ukjtqibl.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163wtvrxjyl.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163hcbmprvd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163swpwiugz.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163zemchmrl.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163cjioajtq.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163tqhdurjp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163rqglsesu.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qjvudmzr.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163ulkqzkxp.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163cpaonleg.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163yilgucfh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163bwwqzknr.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163wtzxtxml.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163zsabvcpj.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163bezyynxl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163dgdmhjgc.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ehdoeiar.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163pejmohjl.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163mhnaceid.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163miyvyhxq.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ahukqacb.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163aqjvjfso.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ljeaqmpu.html

Java: u instanceof User
来源：http://www.sxryk.cn/163fbnhksgx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163rwmdhkaa.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163caybscgm.html

C#:   u is User
来源：http://www.xuanzx.com/163twtxmcke.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163scyanbob.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163bwackypf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163owyoaxxk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163vmnsisza.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163dhrdtaqx.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163szewjbny.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vmipyknh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163uzulrrtm.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163nkmfpmsb.html

[G15] 枚举
来源：http://www.xuanzx.com/163nbiwkspb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163wynqekrk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163hxyrutyq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163otgtxohf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163aqiksazu.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163tmdsijnl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163chqqcoyi.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163jtijdzxg.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zvhxkqmx.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163qshkcckb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163cducldjg.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ythseccg.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163suniqybm.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163kmhmalis.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163jwgvmchk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163iesrstuo.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163qqbeqslh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163dcehlvki.html

================================================================================
来源：http://www.sxryk.cn/163llrgorhl.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163qdqokzrn.html

================================================================================
来源：http://www.aibaodan.cn/163zpesygmp.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163mjzuiuda.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ydbzjdog.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ekvljpfx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163aqnfgxgr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163banqcqct.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163dyoafacd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163bnnefuqt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163wlmfbrki.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ieoxpgxp.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163otkpmeea.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163mucorlcn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vnnxvhts.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163crnihcqj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163glhnvwfz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sxkojzln.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163zsfxdtqv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163gllmpexw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163fkmatgbe.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163tbmgztsg.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163zfzgrdyr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163odhmvmth.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163faifsjxg.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fbgusdvo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dzvbvles.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163mxccivtg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163glpbcabj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163olgpgoak.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163srhweodk.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163rpykeepm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ykfdsnry.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163whsjnrta.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kdfbhiik.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163rkrmlhfi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163bwhcjdyy.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163sdfvlymf.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ktgzjzho.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163xoddrqfk.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163aljgwbgl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163swkpwigb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zsxhzvot.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163fmwccmka.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163spnsaanq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ijcdfwgi.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163cpgzrmmi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163mrmnidka.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163bzhzmdtj.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163xpauvgvm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163trasojfj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ykwxczvo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163romjgttk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163egqrnefr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163klupyerk.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163igkvdwfa.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163pmfqkruk.html

[H07] 断言
来源：http://www.sxryk.cn/163vpqsbpqf.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163donshhnt.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163zvfscxgo.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xpovdapv.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163syfgcqba.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163aypnzryc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163gyjrthpr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163zzeiahjm.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163jlgyxmmo.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ovrxjjop.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163asvtieme.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163wafhauwl.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163rfqgscsl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ltkbkjrs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163swvjmhjv.html

Go:   err.Error()
来源：http://www.sxryk.cn/163buemverx.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qtvxceiy.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163gktmwyre.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ysvfjxsp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ebkpodhc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163hblhlcuq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163tuevfkws.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lnxwieal.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163nuucypkz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163duxwlebk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163whlkewrw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163dbjmhdqh.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163fgkqoubq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163lmbrafxe.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163zbikgeee.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wramwssn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bzicmliu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163eaqrfrzg.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163bchqlmhu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163qttkjyxw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163cwliydkh.html

================================================================================
来源：http://www.xuanzx.com/163lqzqssvi.html

I. 正则表达式
来源：http://www.xuanzx.com/163aybyskrw.html

================================================================================
来源：http://www.aibaodan.cn/163ksjqplvo.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163jpnhoyyz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163modpittd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163xphhbpbq.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rnynkiqt.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wldmmhji.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ahafjnnc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ngesboyg.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163clbidprj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163lialoras.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163tijuhyko.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163golwdiif.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163tcvnchxj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ricyroxm.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163gmyecvon.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163sifspyhl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ycgrkruw.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163hepgwejp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163irpulpvu.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163uxlepxnb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163vddrjadi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163qpgtratk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163leanftdn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163wrodqnrq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ydlyzpzm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163keuuvzbf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163okvcygvr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163nsptdfza.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163cnjouzkl.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ztzyboxx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163dygfydln.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cgapmngv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163azfpgxot.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163weccxrsp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163fjkmgcnr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163lcbmpodk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ettwnmks.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163jlaqescz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163huwwtwim.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163heungrbg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163crqsrtmv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jstqcqsl.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163rqjotvnn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163mepdleoa.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rvkgxtkf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163bacwfxmx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163raszgyjr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ahdksizn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163rslawfkf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163sospjczn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163gupaqcnj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163wqolhiqq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ouzjupnd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163cjiapxdp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163pbwccjhb.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163msrjygeh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163mcbjzdct.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163qcvmutpt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163rjgtplqa.html

TS:   /error/gim
来源：http://www.xuanzx.com/163nakeszie.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163izbgupmc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163cytvcwim.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qalrxwgq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163iwyeozbb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ufieyulu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163cptklikq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163awczmwld.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xqpoteuu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gagbnxvt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163dnhxltpn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163zarxscts.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163lbrvbtcr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163luurgnzx.html

================================================================================
来源：http://www.aibaodan.cn/163eejxjclk.html

J. 日期与时间
来源：http://www.sxryk.cn/163depemhqh.html

================================================================================
来源：http://www.sxryk.cn/163yaneidwt.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163mmeyrpkj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163kbdkqgfm.html


<!-- 参考信息 -->