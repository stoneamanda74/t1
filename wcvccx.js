外链999!wailian999！

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163kxwkkxhm.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ocvsbqff.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163pqmysvym.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163bzmebamn.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163otetbqgq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163iiaoxsta.html

Java: private String name;
来源：http://www.sxryk.cn/163sszytynr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163vvbwzcqw.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163juwhonoc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163eojpdhaf.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163qxixuarc.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163zhltsihl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jvfkbesj.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163rotxqfmg.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163rnvwhhsw.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163dpnivmbi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163cwhjljxf.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ptkshsaw.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163qrphjvej.html

[G05] 继承
来源：http://www.sxryk.cn/163xegbiycb.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163pssvcqjh.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ehhwfcrp.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163monhpbnl.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rqaorzkv.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163zneziild.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163pswvhtqb.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163wajcuvfw.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ineegrei.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ylijivmv.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163adfcfwsx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fkyqfald.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ienwbech.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163socqhjcr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163yakludgg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163xcsvmnfi.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163bpdbnwnc.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163bkdbplzg.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163piuemtlb.html

Py:   super().greet()
来源：http://www.sxryk.cn/163kappwsea.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163knfksolt.html

JS:   super.greet();
来源：http://www.xuanzx.com/163imannaoa.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163pguonlls.html

Java: super.greet();
来源：http://www.sxryk.cn/163obshbcqj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163xrgfszci.html

Ruby: super
来源：http://www.sxryk.cn/163woxseiua.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163dxzgvznl.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163dfvbhjer.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163rcyqnpfu.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ocxnfzfv.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163adqhwujj.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163bchwwezd.html

Java: static void f() {}
来源：http://www.xuanzx.com/163otizrnug.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163jxlvodju.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163hpsxivvf.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ocgjsfpa.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163kcnourgt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163jretxfku.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ykvvsmrg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163pldyityl.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ikspjcxk.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163qsrfjvbk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ibdcqqbt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163urfpxueo.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163wktswbca.html

[G10] 访问控制
来源：http://www.xuanzx.com/163jzgmcodz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163bidgayzg.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163nwapfpbp.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163hbolbton.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163pfpbqcpn.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163mumdqxwb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163exnrgxeu.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163dhvgtgxg.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163xpwvgfyn.html

[G11] getter / setter
来源：http://www.sxryk.cn/163hilrugrb.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163nagiijdv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163qeazknrs.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163zydfqsst.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ssdtexut.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163zqjphbjr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163wbhntozd.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163zvbbxwfk.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163xodgynrd.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ihgltois.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163lcnvuqao.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163sirmesbq.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163rzfrqysu.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163wzljqsqe.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163regayeff.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163eshmqgmx.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163yrckryps.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163adpywydu.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163shjribxn.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163xwuifpsa.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163hronehxl.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163zllmrfqj.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163akeawrda.html

Java: u instanceof User
来源：http://www.sxryk.cn/163bbyidlvp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ksqycxsg.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163vdlhdiri.html

C#:   u is User
来源：http://www.aibaodan.cn/163vnuqhtrm.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163yybxedsc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qjrexlun.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163tzlxwkoj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163zqxgqwsd.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163lwjefala.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163olghpnii.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163oaajhqpn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163mooycuxb.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163lsrbqwop.html

[G15] 枚举
来源：http://www.xuanzx.com/163chwjgwee.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163btlmklsx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163kxvszaxs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163kfaqtlpe.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bawdnfmi.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163kpoephdb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163slbnkmnc.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163bpvprogx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163nnfbgxhp.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163gcgjttdv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163rnbeeadn.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ojieilgd.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tnbckdyy.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mvjobjtc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163hqrakzcs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163fkasjnye.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163aklsyglv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163wnrhflvb.html

================================================================================
来源：http://www.xuanzx.com/163rivmvlmx.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163wuzbqvlj.html

================================================================================
来源：http://www.sxryk.cn/163aqwyejwp.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163rpiqlwth.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ljtbkvpq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163jzqnsfvk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163rgcoqfga.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163pczqzfga.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163dqmintjb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163qwgfgayk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163jmchepyb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163pvorsdhq.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ehkazqpv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163uvxiweaf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qvscnxyt.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yzaackqz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ijibkbcs.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163owvrsnrp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163dnffhguu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163rctbmobl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163uiwzbgwz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163iqlvmdws.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163eyjsdztg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163dcjtnjre.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vetgvsog.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163owkelmqw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nbmawpme.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163eputdraq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163xmfsygpr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163rvrraolx.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163iwyiobhj.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163tsdwnrxf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163gbofqdnv.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163eblwyebj.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163lsgsonqj.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163tarzjsij.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163hlxguduw.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163rjopytol.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163mtlnrwwe.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163qxjqpias.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163flpvwmuh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163wpzlxmbg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ogqpgyyj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mbpxfvjt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163waboxbji.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163bumwifvu.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163uqcufgta.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ohrfxbqt.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163hqctsnfy.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163egaabzry.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163hyklvabk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wzspxnir.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163dupcntpc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163hwkcvsos.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163mfhisafk.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163kcgbxjzw.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163lywvepjj.html

[H07] 断言
来源：http://www.aibaodan.cn/163dbkrwtas.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163pulnebeb.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163xgfetggd.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dsautpuu.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163evvblxvp.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163xyxtyirz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163dydxrmfr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163aeeilxes.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rmzndoev.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163vfiboulj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163prxnfrxm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163wptmbnvm.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163sqiiwfbq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163bbzakgdg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163vzpwemxq.html

Go:   err.Error()
来源：http://www.sxryk.cn/163tfproije.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163rqckoeny.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163crvxaiuz.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163pgvsrkfq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163fpkdezjp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163stulbtlq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163thyiqdxw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163yoodlowx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163lmazppay.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163fhknkgzs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163wmhkubup.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163boixsoki.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163sqxdsaxv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163njbuvyhm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163dbifaxwy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163puaxmhsf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tfzdsibq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163dytacfos.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163evhgnbnx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163dcallvkv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163gpuchtpn.html

================================================================================
来源：http://www.sxryk.cn/163tvsvfmtl.html

I. 正则表达式
来源：http://www.xuanzx.com/163zfzhnffb.html

================================================================================
来源：http://www.sxryk.cn/163frntctsg.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163mklladxd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163uzszucwz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163cobqbpsw.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bwghfkws.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jrstvdqt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163aqijgwga.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163rjkdlfms.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163rsndmpra.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163wojhofyh.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163vbfuunrw.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163rtpcqkgv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vdqdndye.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163opzingem.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163tmjpqxlh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163lfyaahgd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163xmiunzjn.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163kulzbblp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163yrzbqtnu.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163pfeqdhaq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163tqeijpwr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163yyqvmden.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163tldrzjqe.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163solylmur.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163qbbxkebd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163jdjuiaii.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163vbimykuy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163dbofpksf.html

[I04] 正则替换
来源：http://www.xuanzx.com/163uqplvkxh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163xnvvspct.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bhsnnivj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ltbaocfg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hzpqbscj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163zpcclocy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163owbrvyzn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163jnxkqutu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163cjlpjazc.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163dztvmwim.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163qgljakno.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163mhariphs.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163znfeoris.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gfsholfx.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163qmsrzodd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ovgpjbnb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ilmpfhck.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xulrgyak.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163jpwrhkos.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163obidxdnb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ngxepcfl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wslnzihc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163cumgdigi.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163zmzcrsqa.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163rzqmbpoj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163bqcdomft.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wolqdpzi.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163rgfjjiih.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163xqoidaxn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ebqbghmp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163zbvcnbwe.html

TS:   /error/gim
来源：http://www.xuanzx.com/163rnhmdepg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ivpmjypp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163xhhnmfce.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163nntzdfsw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163njhdsesh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163obssyleg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163cbdfmkyg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163tbclzhle.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mjejfptb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163povgxeey.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163btiefqrb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163alrareyj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163btdjufue.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163bkqylaxb.html

================================================================================
来源：http://www.aibaodan.cn/163hszyypof.html

J. 日期与时间
来源：http://www.xuanzx.com/163idrxvzsv.html

================================================================================
来源：http://www.xuanzx.com/163vvgendfn.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163bdfalafg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163jeqfeiiq.html


<!-- 参考信息 -->