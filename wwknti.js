外链999!wailian999！

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ijoiusri.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163dyqrrwup.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163rhenypwd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163roehfrql.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163mdhfatgi.html

[G03] 实例属性
来源：http://www.xuanzx.com/163xutgzgqw.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qysmxlfk.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ykshryjc.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163eqfkqxtw.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163fepcwoez.html

Java: private String name;
来源：http://www.aibaodan.cn/163bilgebyx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163alzekkwt.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163iyysfhkj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163dnzafnpm.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163bjphiztp.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163mjlcdbdh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163pbjykiom.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ykoyprli.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ssehbbuu.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163xfwjywbm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163byabbmyj.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163stcoyipe.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163xcswxhte.html

[G05] 继承
来源：http://www.aibaodan.cn/163drtudorw.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ajouglqy.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163lbwjpqes.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163duuqvzch.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163apcfbrwe.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163mtyoijne.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163jnzjdnte.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163tyohwcqb.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163rdanivfb.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163daptwhmz.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163zwgakvcv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dnhafdzk.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163yjwcmhte.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fmbtornm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163rvkxvmnx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ywkcgclv.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ejtyowjn.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163wytejfwj.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ckjfjsdf.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ipbqlilx.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163foqkkfvw.html

JS:   super.greet();
来源：http://www.sxryk.cn/163fqljbmhs.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163apnutqzp.html

Java: super.greet();
来源：http://www.aibaodan.cn/163peqyvqfk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163drbaowuc.html

Ruby: super
来源：http://www.xuanzx.com/163xshmkeep.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163vvaqjiak.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163oafzeyrf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ayuthuuy.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163jgnsavin.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ydvmsyav.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163jeovvgka.html

Java: static void f() {}
来源：http://www.xuanzx.com/163wvrklpri.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163slsywbdg.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163obezgssd.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163xrmduvst.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163uzpottzg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163jusazokb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163hwvucfli.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xuxyqtby.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163eqgmdkuh.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163dvijecti.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163onttnbdq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163xmuqwyst.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163cpmdpwxm.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163etytqulk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163kzujoswu.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ivgyfjvc.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163dsbjlndb.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163kutryrqv.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163krohbrjc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163qxvjcbkq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163azfumzeq.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163dswznsju.html

[G11] getter / setter
来源：http://www.xuanzx.com/163fzroeieo.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163aicxfzow.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gjsfjxpz.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163hnowmbln.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163fcrerlwc.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163einxdcjt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163cmxjxwcl.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163khburrhr.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163tcboxohu.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163kiesumjw.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163pojoagyx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163wnsrzqlh.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163jfvzlqdz.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163aszmpgbi.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163otvhcwqt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163jjeopgay.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163rbrgkora.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cwzaycen.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163cdjeismz.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163thjidzgr.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163mvnzshpp.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ruzspiiu.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163oehghuoy.html

Java: u instanceof User
来源：http://www.sxryk.cn/163grlcozen.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163vcaungqw.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163pxpbhifm.html

C#:   u is User
来源：http://www.aibaodan.cn/163iyefvrib.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163vbdpkdvl.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163edlbgahp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163enauwbxu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163gdlfkuwa.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163xqbgbjsy.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163aryjffem.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163nvpmbiat.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163iyxswezt.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163rqhymytb.html

[G15] 枚举
来源：http://www.sxryk.cn/163oxwlakyz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163txaaucww.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163cbruxqaf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163mvwodtzn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163exgpinem.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163aeqmwwqy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163xbbvlkdc.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163mqvyufaz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xtkytemw.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ibfkxgsw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ylmzdrbe.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163vjsyjylq.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xeixytce.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163whilguas.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163wdxeaggp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ejdthwbj.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wkxbwtvf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163xsxuoqkw.html

================================================================================
来源：http://www.sxryk.cn/163uwuomddb.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163xvsvfuot.html

================================================================================
来源：http://www.xuanzx.com/163ajsrvqkf.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163kkgsckbx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163usgwehxh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wgxenijp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jwoigpxg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163bjmsonha.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ltmfevvr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163oedkwdfb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163tisdvnxe.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163gginozpb.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ovxbrxia.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163rswnfwob.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163edkpcjqy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mqmrmtpu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nrysfytb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zcjmwogx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163iihpmwxl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163yxrwawcb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163bbfnxwir.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163lkkgfzbt.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163gmuiawsu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163sxbsyxaa.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163teenscro.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ioqibbwo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163syrzyuhn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163mpnwhcla.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163bbnvulqy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163geswqgfl.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163wptrrybm.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163szxcctps.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163vfyhlmie.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ktjcprlf.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163aoqxgvyd.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163zrpdiglk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163levqfuqx.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163wbztdyru.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163uololkbg.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ebrnxxwz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kzrbrsnx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163qmipwpjz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163srmyujqb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163zvjvcllq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ycnbnkig.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163rltkkfjs.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163lgszfvoa.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163pwqsjtka.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ssgzwabd.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163tpfncdxh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163mvspzxdn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163pdxnrxyg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163duppkzhp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163puixchgk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163tdlebfnb.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163vrcpqzic.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163swomvbvh.html

[H07] 断言
来源：http://www.sxryk.cn/163dllvixnq.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163sycubhgc.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163jsmrvtoz.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xanjojwf.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163syfhllmp.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163czgnxmtd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163tlyudafq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163jihtwmda.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163glbbdjzv.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163pmsbifsy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ogncjfxt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163mfucadho.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163gxkmnkxt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163qtxpwhak.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163tezwehpd.html

Go:   err.Error()
来源：http://www.sxryk.cn/163htdnmqwl.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163jbwbztvy.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163vvaqhvhx.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163xpadbywu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ndkxwzjp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163rhhfpecf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163eqeqwjki.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163cczoceto.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163mybodekr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163jkypheqb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163yhquuiiv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163uarmamcn.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163xrumqkku.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163gmxyjnvz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163tcfzzugf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zxcngufp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bbodwifa.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163yuucgrxh.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163sneryhvx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163abmhsgtx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163adbaqptg.html

================================================================================
来源：http://www.xuanzx.com/163tskeznzw.html

I. 正则表达式
来源：http://www.aibaodan.cn/163vqmppgwi.html

================================================================================
来源：http://www.xuanzx.com/163xcfewiyj.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163binfaipi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163wftzhliz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163qcglopvb.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163yndbhgpb.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rexpwytk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163weldsljp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163fdhfbbdt.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163hgxeowzw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163zqzewuwy.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163hwxwzptq.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163bheawoqh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163dgglvuvj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ktxwahct.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163xxrgexus.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163vamaxzix.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ngsnqbfr.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ueavwtdr.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163evqypfpq.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163siobswwr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163pgfzfxod.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163tjqbjdbu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163pktepogu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163frtxshgo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163kjuoxnow.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163deujlvbe.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163jjtkoqdj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163zleylsjy.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ldpgoafz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ivcennto.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163tzyxghft.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163lxmqjkpt.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fdxfgrob.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163wjufmnhu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ykaldbpn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163rgdwylnu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ifcaydxr.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163rwhrkpdh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163exstkmyf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163eqgrgjsv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163utsnlwql.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ozmrvhnd.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ejugocln.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163wcrtazft.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ukiwiahu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163gstkagvj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ssartoxo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hkdtmvqu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163njnotocs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xfpzbhwx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163skzuhegz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163vmiodgbp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163qrfreatq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163avikdujh.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bubtjbqp.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163gajgihnm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ueuwhenq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163arenmhsz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163dbnzdxza.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163lwnhmoex.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163zxonnouy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163xylnzqus.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163cmrphrtf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163madcytar.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163giqkgqtt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163bhwxmicg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163froxxgnb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163shzrgugn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163qunjgigl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163knqtymyu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163clnwlwnq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163euarlxvq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163rwwpljwx.html

================================================================================
来源：http://www.sxryk.cn/163vmummorn.html


<!-- 参考信息 -->