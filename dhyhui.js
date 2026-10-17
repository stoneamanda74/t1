外链999!wailian999！

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163nfmmcisb.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163dhfjwisz.html

Java: private String name;
来源：http://www.sxryk.cn/163pkorsowg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163jfhgymiz.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163gglwqprg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163qtnhirfq.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pmngjhjc.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163peajwfvw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ihybazng.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163wundlfwd.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163eytmfbrr.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163oscfwoel.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163scowyfvv.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163jrqtmhgp.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163lqxqnkol.html

[G05] 继承
来源：http://www.sxryk.cn/163zbqgpobk.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163srrxlbjx.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163wjtvgtni.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163gqvxvamt.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163uobaavuj.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163hyamxzmd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163fbwehnwr.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163stmuqxlf.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163xdntxjgt.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ldluvpaj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163qcbnzrmf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163veumjzfr.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163lggsmocv.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fcgbybnn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163yhnivfaa.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163yiqrafom.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163bxymzqmm.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163fntukkjt.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163cbccqcqh.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163wfuthcaq.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163wiqzujuj.html

JS:   super.greet();
来源：http://www.sxryk.cn/163uohszbti.html

TS:   super.greet();
来源：http://www.sxryk.cn/163qxgneabv.html

Java: super.greet();
来源：http://www.sxryk.cn/163iqoglaoz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163xylvjvri.html

Ruby: super
来源：http://www.xuanzx.com/163myoqxozp.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163yvsvujer.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163fxpiizgq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163inmbluvn.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163llwftmgw.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163wulikrjz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163itjjacmz.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163dwnddula.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163udiinriy.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163awmnltmx.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163epbzdcrr.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163yculnpjd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163lqmlqtjc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163dwuncqiv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163itgdzeve.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163phavkypn.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rgrkebrk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163tlyutsys.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163bezllqem.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163xfonwhcp.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163vebdhwjg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163fugakwat.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163imfsswnr.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ckgjzmcc.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163bkrgodpw.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163vevwdwlj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163fxifgvup.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163slernetl.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163vbybdryv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163sdxffvhc.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163psodgfjw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163jgxspnpk.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163kpvhpads.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163tsmvpfrh.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vjrgbttq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163fbcbfnqs.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ahihkkre.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163inaejqqj.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163kiqfnclk.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163zesdlvub.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163bylszzuy.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163wyzhwnse.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163zjhawyao.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163lployfad.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163waoblvgn.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163uyodetur.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ltdtmids.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163fsgzcfkp.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163esikhgjp.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163qipofsyb.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163kvvfkkfk.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163hrgelozn.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163wbqiqfkq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163lxtgmvdn.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163lngsbpqw.html

C#:   u is User
来源：http://www.sxryk.cn/163ahfmubaf.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163nahrjlae.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qwfgefyv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163glbnnsfy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163hlbqtuby.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163njgxqajw.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163wkvzdrjm.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163egwkcbng.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163oexatxra.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163lmfxraod.html

[G15] 枚举
来源：http://www.aibaodan.cn/163xtkczniw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163yhbjnzgz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163wykibxjz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163lmfqqjsi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nrclqwqc.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163tfjwtddw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ikcvnocv.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ccpenpti.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163klvvujsg.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163xynpvfnj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163rlxpcsir.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163xcevqcxu.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163aaqbuaiv.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vybhtrxo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163kntjdtvp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163gtvivypi.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163cnbacbmj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163omipkkef.html

================================================================================
来源：http://www.sxryk.cn/163xbcboggk.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163yawsrqqz.html

================================================================================
来源：http://www.xuanzx.com/163hqgqdgmn.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163laowvmtu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qmkdpjkw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163kqvzkotp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163oavmmkwk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ljseepua.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163dlxfmstv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163juvhytvk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163cxzsegfu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163hbhlhhoo.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163zzkvyacw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163arcrrqgh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163buakkucp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rzuzgwuv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vqtysktc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163sftilajf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163hamhdhjn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163mfryhqmf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163yamazlyj.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163vempwptq.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163dqzhdtab.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zkfazefm.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rqmmkemq.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163cytjiecu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163areoduzl.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163wikuseyf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163tkwnzhaz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163jyijnsqs.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163gukupecz.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163jhpymczi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163xlfyikrj.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163myccgjdt.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bwwcyjls.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163rscwgkor.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163dzeqrlvj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163jsyicuui.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163iexdvohx.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ewqpnsdp.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163tnwcdshh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163vbnqewyg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xsomnlrf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163yatnmwef.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163sgnqzhor.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ghgrklqg.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163onxqnfkt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163nyhhmhqk.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163laavyskn.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163tfnallxq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vmcrvupk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zdagchai.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ouqeehsc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163kzhazcug.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163eppgqvlp.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ncvwmpqm.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163vbmknooz.html

[H07] 断言
来源：http://www.xuanzx.com/163qituybwd.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163mhpewdlf.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163wpjlxzvp.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163allbgsxi.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nuizadra.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163xhuwbzhv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163pucqtqto.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163jskcoqfi.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163xweazuwx.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163hcwzjknz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163maeeagsd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163tcnqkxcl.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163lvdfbtrt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163moxdavcx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163kasnzkyo.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163gseiyxcy.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163zviwvhtd.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163iyqgjjcq.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163mppibngk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163qscrjjdm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163abaqykqx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163czclmuxf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163hwnsfask.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163wuxcvyee.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163wscsrcwu.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jmfmpgbh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163vnwvcekc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163vlsgksbv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163fdksdbcz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163qmkrhcst.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rwhacafs.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bqvoagxr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163cjqzodat.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163kxnxpoks.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163rzypcxsj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163xkgulvoi.html

================================================================================
来源：http://www.sxryk.cn/163llfzuxqb.html

I. 正则表达式
来源：http://www.sxryk.cn/163pngyfybc.html

================================================================================
来源：http://www.xuanzx.com/163aampuyvz.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163uvenxdmq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163sauxgucf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wrqpnnau.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163smgwdayh.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bnuuvrgk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163vdvdqdzk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163kntmmcda.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163iagwgpvu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163fekopqdg.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163xnvplvfv.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163pxxewddf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163llljwjxc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ukhcpjdr.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163dwapnapt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163jwykflpn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163hqbyckmn.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ohxzoqfq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ibgtwsrk.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163qggnipit.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163fzkvzhxv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163eqhvffvz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163shwyyegl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163eqrbfrcr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ompgvkzz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163qhiwybax.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163xolfkalj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163domofbuy.html

[I04] 正则替换
来源：http://www.xuanzx.com/163cbpkenba.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163eohvevts.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163mnfwgjuj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zvvxyrkl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wjywypwi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ppfzkvdq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163bjczjyir.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163mbhmcbql.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ngqsaqjz.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163hcsmodao.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163rxvnyfgw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163sjuhrmft.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ydsbvoby.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ejzsycgc.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ymngreva.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163softkfyv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wrqzeuvf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163phhrvdqa.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163sscrhfwh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xjvvctfk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ijmablxj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163eqqynqlb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163euwjgmyt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163gunwizas.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163aqtlwdua.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163faspccmg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bgjqsbii.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163xklbfgwz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163iywpvhhm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163hfzytpdn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ibpdkxgz.html

TS:   /error/gim
来源：http://www.sxryk.cn/163issrvpdt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163hgsfwrwk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163wjtwmjpf.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163vodgujyq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163fixkiiie.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163hxxxyzsp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163mgpgeuqn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163bekxatvb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bxxkxpdq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163phaqgkck.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163jbmaleir.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163rbngdvqo.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163umhqnhmh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163nkgygnod.html

================================================================================
来源：http://www.aibaodan.cn/163efzngbij.html

J. 日期与时间
来源：http://www.xuanzx.com/163kacwvhvy.html

================================================================================
来源：http://www.sxryk.cn/163yyrwdtqu.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163iviyvyjo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163zikbslqm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ugspqvdw.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163cjjapxhh.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hfusonlo.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163dcilfolq.html


<!-- 参考信息 -->