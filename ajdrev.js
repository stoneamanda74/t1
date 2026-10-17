外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163tomywdlm.html

G. 面向对象
来源：http://www.xuanzx.com/163cccxyhta.html

================================================================================
来源：http://www.aibaodan.cn/163qvzohxel.html

[G01] 定义类
来源：http://www.xuanzx.com/163xxoqznbu.html

Py:   class User: pass
来源：http://www.xuanzx.com/163szcmdkvr.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163hlxkfmkd.html

JS:   class User {}
来源：http://www.xuanzx.com/163wodlmgvh.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163uomqkxcl.html

Java: class User {}
来源：http://www.aibaodan.cn/163pebvrpvt.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163nuywftqa.html

Ruby: class User; end
来源：http://www.xuanzx.com/163rfrospmc.html

C#:   class User {}
来源：http://www.sxryk.cn/163xngzzvfd.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163tfqskeek.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163joyizcbq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163tgkmmlvu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ckxjzrig.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163zecdoffs.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163avvkwsto.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163lyabjgnm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163tmcvxfny.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163pvahsgio.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hawvkdiu.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163syjsznyp.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163fxijaktr.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163hyfuejeg.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163jmkeqnkz.html

Java: private String name;
来源：http://www.xuanzx.com/163zefgubhd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ecisywwp.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163jmlxqdgj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163wgibcuho.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ryupexpe.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163tjplawun.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163gxtyxiqq.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ubbnmnmz.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163azhmczvn.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163keiuhovt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163tilsekwb.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163zajiwtht.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163rwamyszv.html

[G05] 继承
来源：http://www.aibaodan.cn/163jzrcmuon.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163nczfmtsb.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163zvzmokaw.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rqosqaze.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163iesvklwe.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163trtfvguz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163sqimepiq.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163dovtcewj.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163idxodtjz.html

[G06] 重写方法
来源：http://www.sxryk.cn/163blhexwws.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163veqqsruu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zmblgkod.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163zcomkfoh.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jrdtnipd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163xpgusgfn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163xrirwxwh.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ximqrlws.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163plpigwof.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163mfgezsdz.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ddpkmjeb.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163elpxiyvm.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163kmxhbkzd.html

TS:   super.greet();
来源：http://www.xuanzx.com/163smvilxsq.html

Java: super.greet();
来源：http://www.sxryk.cn/163hddadczv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163gcpzxejf.html

Ruby: super
来源：http://www.xuanzx.com/163gbbvwkcr.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163vfbdkyid.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163xlzinzfq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163prfoaqif.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163mtzlclqi.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163odtijfcd.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163wheyioag.html

Java: static void f() {}
来源：http://www.xuanzx.com/163uasnxtdr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163vhibnzcw.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163tgaasyqh.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163zobzhwtf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163dzjsvsri.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163abpngdil.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163zvjvzuke.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163jqkmwvbl.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163xepiaviu.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163subkpkju.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163lyeybeoi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163jrkvvoir.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163aktjjpka.html

[G10] 访问控制
来源：http://www.xuanzx.com/163shkawdke.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ucrbczbm.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163fqmgytoz.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xnxpudhg.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163riqpbiwi.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163keacwfzi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163nwxoaysl.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163niglnllw.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163wgezqmrw.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ufxirqxz.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ndcsxtnd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163unohoqsf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163hwgjieip.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163qznoirey.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163gisushwv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163fibdkbtp.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163dbmqwunk.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163pdywmshz.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163qnhhnelx.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163cskpouad.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163hnczqita.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xmvexyvb.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163psniniuw.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163jiliixru.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163uqaunnmr.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163sdkcveiw.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163qrxmioet.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163qyokcfxf.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163rirrctxb.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163afwahvrz.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163zytreznh.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163dzdytofq.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ntfvnwse.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163qgeolodh.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ggccswqu.html

C#:   u is User
来源：http://www.sxryk.cn/163ypvjolji.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163alfktpgj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163cptwicsh.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163drvzkyzn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163rqmcgjho.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163iyinvldo.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bhsdwuin.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163aaxxpopy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163czzxyqwk.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163eoxkxwpd.html

[G15] 枚举
来源：http://www.aibaodan.cn/163tqmubukr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163epoqbrcb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163pbftgsmq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163uvastcom.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163idugogug.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ijnmxyqo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163fuqhxvcc.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163jhxlcbej.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163cwtonjxc.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163opxkyayl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163dixbwjyl.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163igtaequh.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163beowsddg.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fwglvuoo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163vjkwtdlw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163qiacfcqf.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163hjpudnpn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163mlxkeizb.html

================================================================================
来源：http://www.sxryk.cn/163xafvvlsk.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163sgugjytn.html

================================================================================
来源：http://www.aibaodan.cn/163hzlfjpbr.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163lnxmjinc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163phrpqknv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163yuurphiy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163vbqnuroo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163qldalgox.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163xrojlxap.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163xrqdwxzq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163foqtcyfv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163jpqelhds.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ixgllcsx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163xqqascpi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fvvzsjwj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wyuxcdcs.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xrskndhj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wvvpnjgz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163dyczdlhp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163mtmsghlb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163lbmwdgsq.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hymbrvdm.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163cekjckxl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gxblsfjx.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ucqoxjng.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ngcqvwmk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163cwgingxd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163kikgsypz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ppnmgjkn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163eqgdlwia.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163pngoxtrr.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163kbdezwbg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163gbcdhggq.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163lhcyeaam.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ltpthasm.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ydzeuctt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163lypnhzbp.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163mspypgtf.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ibiyyhlq.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163hjsrytbb.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163qxkrqxxe.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163bndudbse.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cbeaqdqj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163pjaqlbtm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163cvdxchml.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163rtpjxoqx.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163sinkacpf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163rngvlpfe.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163czatqmlx.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163lunmlfir.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163mpdnlbbc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163degohvep.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163yuaufrpj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163rywspdie.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163tmgajkxl.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163phusorio.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163mugrzmow.html

[H07] 断言
来源：http://www.sxryk.cn/163byqjxssb.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163tgmiwizi.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163slrruuza.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163aknclzky.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163zthmgglg.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163rgxzpnsm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163rfpebuaq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163xojhdzqj.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ozkodwot.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ivrvwncn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163uwtwlhnf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163oenbjfdx.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ucprvszm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163opofhxhm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163tlzujrqh.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163bybtfqng.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163xgjejwdb.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163axsqvgup.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163essltowg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163lohfpwvs.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163qcwyjwbq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163czbudpgf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163zchizdds.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163lfqzwxly.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163eevogjyi.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163hgsaoioc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163tvkcrixn.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163dlqeyorj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163lfzkpghr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163upemedsd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wrtgosbd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nxooifom.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163gljwlvdc.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163hxultaoq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163pekqvuic.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163abxofdol.html

================================================================================
来源：http://www.sxryk.cn/163deakwpna.html

I. 正则表达式
来源：http://www.sxryk.cn/163cvnbddqp.html

================================================================================
来源：http://www.xuanzx.com/163tgkmoknj.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163kgpinjsu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163tdewsuwv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163cofxurpi.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163oxlbuphb.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bfbmheyf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163wyafssgr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ryurzbuo.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163vtmgazez.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163vvbjdhsd.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163saudzevj.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163dkwblgmr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163dalfbuuj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163pcxrtxjy.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163lmpurgaw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163djjralry.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163qqrtgjxz.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163trckqaha.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163jppeeduu.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163uocowmug.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163csukdlpp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163xfsuzbjo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163bxenscjl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163otitghzb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163gkyitqrw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163uqqegmzz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163usutkyzq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163gngqestd.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163lfwarpwm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163kxlcxarm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ibgsbqzn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sczichhv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hvsqhgdp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163xtdxztud.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163sykkhhdg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163iljccwua.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163fjqfmiyv.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163lxxnqssq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163qpfducry.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163sbhrvfqa.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kvbuljpo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ajrkslgq.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163xsamzcqt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ucdzrobf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163crzpyvjs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xinudrqh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163zvradbwz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tmjuwdqh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163fvdlydts.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163zqjgnsll.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163pfzjtzfc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163dxcklxwn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163iajdzxvh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163talxxtdb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163armpavik.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163rovxsjar.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ydvakfhx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163mfwzfbac.html


<!-- 参考信息 -->