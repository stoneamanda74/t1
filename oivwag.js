外链999!wailian999！

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163yjjymtai.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163acpiojub.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163lwakmqvl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163rvqnegjh.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163nixehlof.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163zsdjsmhd.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163lmcjxzzy.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163eqzzapen.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163qoijfaae.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163zqctwzvi.html

Java: private String name;
来源：http://www.sxryk.cn/163xggsgxen.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163oyiggcsr.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163wlztxdcs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163fxijqyro.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163mlsidrww.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163kprsgosc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rdexggnt.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163iagtjtrh.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163xvmpqsky.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163viyawhik.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163mnyucwdm.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ibgndudd.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163zvojyvac.html

[G05] 继承
来源：http://www.xuanzx.com/163msfxyule.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163zvnneghm.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163dqsikykx.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rjecmctl.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nkllvapa.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163zuhqbsed.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163kgfzkily.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163syghkbas.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163aruhofxg.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ydbgjgsx.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ogktodep.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163giiarhjt.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163prhikvxx.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xoqmtlwo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ynnbtcor.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163umgppipf.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163zsyslmbz.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163npbruopy.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ikzpqkjf.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163qkbemicg.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163eojpjgwp.html

JS:   super.greet();
来源：http://www.sxryk.cn/163zossdiue.html

TS:   super.greet();
来源：http://www.sxryk.cn/163nriphlgs.html

Java: super.greet();
来源：http://www.xuanzx.com/163niexoecz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163njgjtblo.html

Ruby: super
来源：http://www.xuanzx.com/163efylniue.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163pqvuvfgf.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163rzwjtsvs.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163qvrdmsgm.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163kxrgqbbh.html

JS:   static f() {}
来源：http://www.sxryk.cn/163iofoqpcc.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ouoypien.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163gekbnqxs.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163kmoscoee.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163tyylibvo.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163lrqkvkzj.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163xslgruxr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163olrfxsxo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163giuhidys.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163qavjtdep.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163nevtlwwp.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163dpsqspdj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163rfdceepy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163kmjyrsxq.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163xduoikho.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163wryjywyg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163yrbedqdx.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vgcxqybt.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163seqpoerc.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163nuhuribm.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163abostaxu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163wcbvrfqn.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163bzvihybd.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163urwfltbo.html

[G11] getter / setter
来源：http://www.sxryk.cn/163iekydzav.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ivzaswjy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bfrvavta.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163abpxzvvm.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163zczaqxag.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163dbazhnhf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163wfebobya.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163gvffdozw.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163xjymtmin.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163vpbiwnnq.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163eknyjeke.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tfrvklug.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163awtfrtfz.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163mmcqebzx.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163svfasblq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163lbwhrynp.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163kvfhtiwr.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ipelnlyh.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163pdcwepum.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163pmifvfku.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ovzdefzh.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163acnetduw.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163pubyolss.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ewjuddfe.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163tufbcpnd.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163srbnqaef.html

C#:   u is User
来源：http://www.xuanzx.com/163bvkzbqfl.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163hqkylniv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163hbbipuxl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163mgkshdrs.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163fgsysvxc.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163aqorjzbh.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163rhgyohxm.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163lnoganlw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163nmrpyofg.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163qjszelto.html

[G15] 枚举
来源：http://www.xuanzx.com/163whwepqef.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163vlbhkwci.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163eoxxmbgb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163yoexueak.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xdvadbpk.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163xpqqqruj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163mtsknmvd.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ewpmgkcr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jyyhoucu.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163vihkykhf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163dxjkthlu.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163bafahcri.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163blhfvoll.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163muxnjylf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163fhuxtyrp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163boqruuld.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163esepphpv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163svkmpznr.html

================================================================================
来源：http://www.xuanzx.com/163qgisuwze.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163dokunzby.html

================================================================================
来源：http://www.aibaodan.cn/163jgkiwvra.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163zmhnehkr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163hexulxil.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163polcoghl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zmuudjop.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163jjkcvkpm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163hoegwkjt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163tabugthr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163xfbszjbb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163mbmijbtd.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163itptqlln.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163anjdjnbz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163iemvdlsp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tmsezmyj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uyugbnbm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ovoqjyle.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163jzyuyehr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163dnyfbdbz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163jinlsikv.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163tjmqpncc.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163bptxoqha.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163mfpnkaod.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yhrybpzf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dsdixgrg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163hqnfqydo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163spraoxub.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163zoseypub.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fviizqve.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163rkkwztfd.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163wrfiqzgt.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163lojrplwd.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163deqaifqv.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163uktclhoy.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163inacaeuo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163zwymhhnb.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163jkyqdjay.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hqehgwui.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163tfgqivuu.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163wtniqzdo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163oeuaxfac.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tktdskuj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ycbpwzqv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163pmyslhsz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163miudzxeb.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163tueljwlm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163zfmjxjfr.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163qtjiflhy.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163wqhiqrtr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163nikmkqmz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cpcyjlme.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fxlkiuyy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163mgznmlsl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163lghpgzfh.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163zrydlaix.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163qiuwjkgb.html

[H07] 断言
来源：http://www.xuanzx.com/163nncisdst.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163uaafarsx.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163adwyhbda.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163tdpbvctm.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jedyyzke.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ymeqagut.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163komrmgjd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163flhwljqh.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ybbxydey.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163qsujjzbj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163dsiwbatn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163fizewoza.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163brehpypk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163bujkoiny.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163uftryvuw.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163tfdfyvqm.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hsqwqekf.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163piqdgbnj.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163nlenkixo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163vhxozjma.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163tbmvetjy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163sxcjcyxu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163mnjsdmza.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ssbokfba.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163wvvhxrha.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163yhmyhuzt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163omoattvu.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ixpfaryl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163lhlfgunj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163woithfvq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lxwtelhe.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hjbcbxdx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163iaprupio.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163gmutfujk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163brfuyxpc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163uacxvqjn.html

================================================================================
来源：http://www.xuanzx.com/163cbgjzued.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ouvnoylj.html

================================================================================
来源：http://www.aibaodan.cn/163iphwfoyj.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163hawxmwax.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163uykgyklm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163egdxpqoc.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163eiyivqwk.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nxmbaqng.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163xdaknasa.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163xypxhzqq.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jsaxxgth.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163bdyfzkle.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163mqydurcv.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163xqrmzabl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163vqsnvuwv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163tchyhvxd.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163aqxprrkp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163pzmvjdhq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ucviccgt.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ytkjeyjh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163jxpphwbp.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163pyskakyz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163wctxoeoe.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163iuzcclrp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163tjkzbfdi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163jvqaviet.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163oqdorfnt.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163gvvmldhu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163vstzqoor.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163gaultofq.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163aunyrvtb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163shmtpnbl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163votzgiyk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163smunbwxo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163vhxwptsd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wcpkwcgx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163zwckslsg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163cngbyhge.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163otckdtet.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163vgeupbze.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163hyxdmwgq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163lnswprzi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zgjpbzbk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163splfaaqr.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163hdceryxv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163aqrvbcmu.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rzhdxojh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163yorgtmlk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163mswusarc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163beswnobz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163xtzminrt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163zympftjc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163gufrvmff.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163jpheqozp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163fkacnyxx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163pwzjnxqp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163pbrcornq.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163xbacaxhr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163cthpnuyz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163hgmrpciu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163zpjagobb.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ibefruhh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163jlonmqsw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163nppeygvo.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163iunsnamn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163vsfsrhps.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163polenfxr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163xacnylhs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163diclcpvc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hyyrvfzp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163rujtorah.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163cwtttrkc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ekhyzbry.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163hkbvomrs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163qqkgumll.html

================================================================================
来源：http://www.aibaodan.cn/163evxuhjcz.html


<!-- 参考信息 -->