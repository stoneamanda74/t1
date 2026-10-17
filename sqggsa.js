外链999!wailian999！

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163qhdlaknt.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jmjtbmxt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163irmrxofp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163tgtzcprr.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163tbiupgth.html

[G03] 实例属性
来源：http://www.xuanzx.com/163gqlnlynt.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qonkdlhx.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163qacmsgwq.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pdnyawly.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163qicpchis.html

Java: private String name;
来源：http://www.sxryk.cn/163vnpvcnbl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163veifsuzg.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163wkpnseyf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163uuoscglh.html

[G04] 定义方法
来源：http://www.xuanzx.com/163afgwuhuh.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163hahabmbg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163serbwxeq.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163okqzptrq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ceujxgcb.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163wuwzcbyk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163fdudfrib.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163scixktja.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163azwhdxjs.html

[G05] 继承
来源：http://www.xuanzx.com/163qgvvlvvm.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163oqvpzyib.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163cbqejtci.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pztyyqva.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163yadpbdxr.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163zqtepkvu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163uasrrzmx.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163xxkgmogu.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163anxuexaz.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163mtyehemg.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163epquxmux.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jpjeqhlv.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163tegabrel.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jcbimrfp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zkxrwtxd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wrkzyyev.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ckkejnas.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163tbcxqcpd.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163naapsgin.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163tvldajud.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ocwaovsy.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ciyiibqf.html

TS:   super.greet();
来源：http://www.sxryk.cn/163aarwzzbx.html

Java: super.greet();
来源：http://www.aibaodan.cn/163nsswgdgg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163lultmhhf.html

Ruby: super
来源：http://www.xuanzx.com/163dbdmmevj.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163bmjxolce.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163lkiwhpet.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ymghoknk.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163wvqnyoov.html

JS:   static f() {}
来源：http://www.sxryk.cn/163egtjmfgv.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ykxkkupd.html

Java: static void f() {}
来源：http://www.xuanzx.com/163hvwvkcwl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163opvgtukf.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163yugcsubf.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163sahilcrz.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163asmvjifs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163fhpuxrva.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163nupnrvhu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ckumvdfj.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163qzkxyyqy.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163lxdxzagr.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163djprsjde.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163oxeapznt.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163kveuygwj.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ojgostij.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163svqzbfvf.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163doyyuilq.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163pflezpoe.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163kvvfcwft.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hrghlyjc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163yyewdzmj.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163wakfjnzs.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ylulxkay.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163hdgrlyhw.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163nkfbfdar.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163iasdzxwc.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163qtawvoad.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163fbeklqlk.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163zddacbjh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163xkescjri.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163tiayfzsp.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163bxnqfedr.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163zrajypug.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163mmoodwet.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163evxyvuzy.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163azryanhk.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163tlcgpaqe.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163uuqwouor.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163qdlnmykm.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163nfraykud.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163bylsyevy.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ctoqvrzt.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163quqlhosf.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163utzbrhea.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163gebqcpod.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163nonnqfop.html

Java: u instanceof User
来源：http://www.xuanzx.com/163guzzmtsh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163esnfndzy.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163fdlsxnef.html

C#:   u is User
来源：http://www.aibaodan.cn/163ppofticv.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ddxylkzq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163xhibhllz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163fzzbrbox.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163xzilbcsu.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163hqybgzci.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163olbmrccs.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ewlhtgfd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163topfuhku.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163jtulfdwo.html

[G15] 枚举
来源：http://www.aibaodan.cn/163wffvrqlx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163yztcqjat.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163lwffebtt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163uzxtswrm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163flzwznyv.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163lfljivfm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163kkkagtpb.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163jqzpxnem.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ghojgbhh.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163bsdzsrfb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163sjdevpsx.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163amttmevg.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163uowkrgmq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xbhdgavr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163hvhzsoqe.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163xlwkrhme.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163lqjsjthw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ghvjskyg.html

================================================================================
来源：http://www.sxryk.cn/163nkurbwyz.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163llwbkyol.html

================================================================================
来源：http://www.aibaodan.cn/163vdgtlxao.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ruyjytzv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163lnvanejz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163agemdsue.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163usxjsqjn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163weytjcpn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163jpncqnop.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163efbruvsr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xefhcwtt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163bjjiaois.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163pegbupno.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163elphziwu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wwgkjtur.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bshxhutu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163twtrajxv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yxjevqug.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163illldgej.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163fhrwiwck.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163hptpmosw.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163zrxubmoy.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163igusyzxx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163rxxsolyh.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ulvitoof.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163aqgfobky.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163iiejkcwg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163tbzkygwp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163uivslfpc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163tdseteij.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163pwptdaxb.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163sfvtaywp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163tfvhgefe.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163abtadcyx.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ixksbzxu.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163kqxpfdye.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163vwylnkfd.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163xjwmqnhh.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163zonojwps.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163snygfzin.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163wzzcomcy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163disiyngg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163caqyvvht.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tdqmbglh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163efkklrxe.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163hvzqvlsc.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163oqmmzcvt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163izpdtrfr.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163hwdzdeah.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163uixuovrv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163jkedeiss.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hbzvcjex.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jfdjcgli.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163zxioixdp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163glvjbsbe.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163amaanwug.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163znbmadxp.html

[H07] 断言
来源：http://www.xuanzx.com/163kkqifiyo.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163zdtejipf.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ybcxqtko.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mxghacen.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xtlrpoib.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163dkiilfqz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163isndqfrw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163bwerudwz.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163faeslbmd.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163leeevpxb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163cumgjjfh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163twglfosx.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163wticojxz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163hboavavn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163taxukhqq.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163pluuucty.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163sbiixppk.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163hhecqeob.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163muedxozv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ufnsqvuw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163jznpgkex.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163aetnxbrr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163prgqbuyx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163yvuoqlja.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163zppdkvyi.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163lqbqolpc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163cqwrwotg.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ykplbgkr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163jdckkedk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163urjqgoth.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qiyqzqam.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163hxlzsicn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ymwwvytg.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163eirpqxhz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163kgbhhzzt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163efmcotdu.html

================================================================================
来源：http://www.aibaodan.cn/163arjleiov.html

I. 正则表达式
来源：http://www.aibaodan.cn/163arofxpka.html

================================================================================
来源：http://www.sxryk.cn/163oiineaiz.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163eatworhx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163takhnnzm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163azqdifks.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163asylywhx.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nskvshzt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163umwdlpyn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163vpbmkgal.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163pfoxbwgi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163xhvfvitz.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163opkwyhiv.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163nwkgpiao.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163cdalmuro.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163urlrhspn.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ffweoerc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163evtwmipd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163lqqpsylk.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163rgtinwls.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163uzazyiiy.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163nvuhknws.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163mxrlikfp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163bstpgrgj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163epeagncr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163llhfwxjt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163nynvpnlo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163mxowxosv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163eoivrmej.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163bzpyniup.html

[I04] 正则替换
来源：http://www.sxryk.cn/163sybwezal.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163xlpzwwgz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fnbvidtk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wcyvketo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ftadcwph.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163bpjypwzs.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163oqjiaogl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163mvaedzbv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163laaynctz.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163rcbhedby.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163cnaaactx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163udymnceh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vmiaguxl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kowqdmzi.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163yhpksorm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163yqdygsno.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hrxzsbvc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163pmiqqqfj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163awdlcaca.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163szkyguaf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163qgpkoijn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vekyhvah.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ogzvybci.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163vbustdur.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163kqpdauqq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163kvryfjdy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ppajdwdc.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163gyudqzix.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163gnccpmpm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163grnilref.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163mgtdfrth.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163cfegfqkj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163bkkansxr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163jawfugoa.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ulajrmrj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163dgxjhxzs.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163oobnzxez.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163pjkewslt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163tkqpzlxn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163uurnydid.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163opnhjqst.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163mlixqxuf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163jykypuee.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mjeutoeh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163cvvwvpze.html

================================================================================
来源：http://www.sxryk.cn/163xxevkjsy.html


<!-- 参考信息 -->