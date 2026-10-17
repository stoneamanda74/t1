外链999!wailian999！

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163pqnfecwn.html

[G03] 实例属性
来源：http://www.xuanzx.com/163jnvlqdia.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163zswgoitn.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163bfoqixvl.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163tjspwpdt.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163szbaihgj.html

Java: private String name;
来源：http://www.xuanzx.com/163evgtkxyd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ljargztw.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163kznxcgzw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163uupbplnr.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163anwhoovn.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163swkfsffm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163wpbpiqhf.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vqmbgnhy.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163stpkqvha.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163xxqcjjuj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163njgvctum.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ezagangz.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163bbyhpnpk.html

[G05] 继承
来源：http://www.aibaodan.cn/163gqefwrjx.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163bwbbyfwd.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ctypuizh.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163diysyawu.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163aqymjvyg.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163xakxwwtv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163mmgbdjrs.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163yvapjiar.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163zavakobt.html

[G06] 重写方法
来源：http://www.xuanzx.com/163rbliasus.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163qikyqqjo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qxnkvmla.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163qzuhqebr.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163icbextjy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163kurxtjbl.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ictruuyy.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163fzfbepgc.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163feeblzxp.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163kivlkecz.html

Py:   super().greet()
来源：http://www.sxryk.cn/163nphjwxka.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163uoyybigs.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163orbkjvql.html

TS:   super.greet();
来源：http://www.sxryk.cn/163snaewpod.html

Java: super.greet();
来源：http://www.aibaodan.cn/163kbpgizwu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163gsxqugnh.html

Ruby: super
来源：http://www.aibaodan.cn/163vmjcnvbd.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163hileohhf.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163jcepvavn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163vjmebnmc.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163hmzkyhcm.html

JS:   static f() {}
来源：http://www.xuanzx.com/163czalvlix.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163njbdpouk.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163qwplyvfl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163mpnvjfuj.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163cgmdpbjr.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163forrvjzk.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163jflugprc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ccvghfzr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163bsjyydqf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163mtvwdpku.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163vyugjrqj.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163tcoadquq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163lgbltnou.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163bbhfunzi.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163cqdmyqui.html

[G10] 访问控制
来源：http://www.sxryk.cn/163syavgvpp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163wmebwmzi.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fvrypzew.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163oynpzvqu.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ccugcsdf.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ijuxbvav.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163jrdpxdho.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163jjterjep.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163twkdguki.html

[G11] getter / setter
来源：http://www.xuanzx.com/163tclobmbr.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163gstmvjcc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163axdhqnkz.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163azeovvwo.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163tarzxbty.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163xxvmzmrx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163uwtmpiqw.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xxakbjak.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163qqplkbob.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163uzbbhtas.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163skunzpww.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ljeukhzn.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163pqmawzda.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163lmhjnedb.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163hfxnhxeb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163lcuwdhbx.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163frekbkuv.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163rkfdglvz.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ayfmxlzo.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163hhdlqeri.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163dxujohux.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163wnltzmxl.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163rhqudzfe.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163rlhsvjry.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163vpgpkoul.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163cxhgcxxj.html

C#:   u is User
来源：http://www.xuanzx.com/163wczecuwb.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163lmffeqfj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163cjnpqjdp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ryxxbdde.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163lbmbygsv.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163oycjolis.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163apeygdnq.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163xdwgkczv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163afodylfi.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163jmqruwlb.html

[G15] 枚举
来源：http://www.xuanzx.com/163wovfzcka.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163pamgfqlw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163uovfdmzb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163fnumleto.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163smdabcul.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163uvykliva.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163scukivie.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163pghjlldf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bgvdykfv.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163xcfswfep.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163bhelgmfs.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163voklobon.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163bepprgri.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vmlrwliw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163pxrpwkef.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163fsnoqamc.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wdluuqtl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ijswujdm.html

================================================================================
来源：http://www.aibaodan.cn/163ojirgomd.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163mjpffski.html

================================================================================
来源：http://www.sxryk.cn/163oyrvttqi.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163xzjienqr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fercfzol.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163oyjqjwey.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ansfcoed.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163pdfvcxfy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163mkzqxczz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163yihweyne.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163wzghgitk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163nqswwmkw.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163mfnusxqi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163pvfkztxw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zodwmnhg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163akkwyjqg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vehmyyml.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vxcrxvvb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163nosjyvod.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ltftqrbe.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163xjjmccte.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163osxoxbps.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163kcwmycno.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163hftvcszx.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163vxkkasfu.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163tibraniy.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163hkklwjze.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163menfxoqn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163vxsqmrqs.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163qlrgoliw.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163fzynrohe.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163kvrxhblp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163yuzseylf.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xzudpzym.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ozdauqda.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163mjxbkcph.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163pfctmfxj.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163raxtqugq.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163sjfdxlof.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163lbaxsdbe.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163bcpqemgn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163uqnzjkdx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163reuugoix.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ekhvocrq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163azblqtiw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163aerjffch.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ukvdeczd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163fpfaeqya.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163gayoivmc.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163qdsuaehp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163zwxrnkrq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qcvwzcqm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163insdgrip.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163hwdgwnbe.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163erpzcvhe.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163qbbzrvra.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163wtutnefx.html

[H07] 断言
来源：http://www.aibaodan.cn/163lhlmthtb.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163rekkbkpk.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163eblpeynk.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163pppucjkt.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ovnxmztx.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163wawdodse.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163kercmniy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163oiciqdxi.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163hzboqkee.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ukjedrvm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163hthzkixr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ckawpyll.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163tejeymda.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163rlyqxheq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163aymupubf.html

Go:   err.Error()
来源：http://www.sxryk.cn/163dwcbqynw.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163kgfjiodm.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163qhuuvvus.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163mtcrkbff.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163qtqaitbs.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163kaiyzfct.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163iazdtxdc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163pmkjtavh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163dboeajkg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ohneahmg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163gyojqcno.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163pbwkazdj.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163njcgvmod.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163izlacpfw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ikeblddf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fnbnnayg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fgbrpfzt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163qoujxtrk.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163cljolhie.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ukpxbvxs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163mpgstytl.html

================================================================================
来源：http://www.xuanzx.com/163nvkbjeid.html

I. 正则表达式
来源：http://www.aibaodan.cn/163xqdvcudm.html

================================================================================
来源：http://www.sxryk.cn/163hcgoytyh.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163cbhaomxy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163wjaageoo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163nwydueoc.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163qbcctzdo.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163oxojtmbk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163iisdlayo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163hmodesuq.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163hexofkso.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163toqrmefn.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163snviydwq.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163gvoyccqw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163gefmlgel.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163bzmrpaie.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ydnnrtcn.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163rinideff.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163cngdavvt.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163vtypjprt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163obcotvjt.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163wokftovr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163iueclxnj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163qdqhmbdp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163dpkhyova.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163vwhohjrl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163qrarotud.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163xxhvfopw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163roahjsbq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163hnknkqih.html

[I04] 正则替换
来源：http://www.sxryk.cn/163eznwxfkk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163hfstukro.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ftejaydt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ciqitygw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163btucgzgg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ffztjkxh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163iabplotk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ebydbmrq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163aegoffbv.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163sgjxeypv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163szpbytyf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163kczdonph.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qkbwuxqy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wlbxqhee.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163mtwomgug.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163xoysevyu.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163utucfqhm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163mevzincj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ohhgbtam.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xphwiogj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163fwlldpfi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163nlwvyxtl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vznprxnk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ssifgrqr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163fftynmwz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163mdlhrmkm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163oeldfmxs.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163pzpgckox.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163lxfclwde.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163vhuszshy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163narmvwhw.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163oifrcbgb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163xtmdeydn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ideztnsj.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163eebbxvyf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163vgiwuemz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163dehjyikl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163tmphiwqr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163foagbcap.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163btzdnojo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xtvxcjfu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163fghcbfjp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163qcrhesqw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ohnroypn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163elaaobqj.html

================================================================================
来源：http://www.xuanzx.com/163fbmfwnkj.html

J. 日期与时间
来源：http://www.aibaodan.cn/163utlustgh.html

================================================================================
来源：http://www.xuanzx.com/163fffhiert.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163snmsgpee.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163wjyyavyx.html


<!-- 参考信息 -->