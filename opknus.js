外链999!wailian999！

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163gkjfvbkk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163flfhuvsi.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163zhnrrfvu.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163dkmstnbj.html

================================================================================
来源：http://www.xuanzx.com/163ynthlifj.html

G. 面向对象
来源：http://www.sxryk.cn/163shubkwvu.html

================================================================================
来源：http://www.sxryk.cn/163aaejnyqe.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ltpgyykl.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163oskxgbnj.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163bfkjmvqa.html

JS:   class User {}
来源：http://www.sxryk.cn/163ascesxli.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163pkgozozo.html

Java: class User {}
来源：http://www.aibaodan.cn/163zygexgdn.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163uywshgmx.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ehtyzqzd.html

C#:   class User {}
来源：http://www.sxryk.cn/163vtexhvab.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163mspftdxx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163aebkedoe.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163bgbnbwzg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163gwkuvmqr.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ydaethrj.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163bvwlggar.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ijywwmep.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163txwmwrls.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163bhzonlte.html

[G03] 实例属性
来源：http://www.xuanzx.com/163oyrgdlsw.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ceowaede.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163vtwyaxed.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163rwrlpzek.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163tvwlgggf.html

Java: private String name;
来源：http://www.xuanzx.com/163nedkwkrx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163gxwhwqdm.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163nbbrmnfp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163xoxsdorg.html

[G04] 定义方法
来源：http://www.xuanzx.com/163hdxykbye.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163eepczutj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163slevoxss.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163miqmymfr.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ssxdxqdn.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163czhqakop.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163cuqdznbh.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163zzwrylxx.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163bxcdofsq.html

[G05] 继承
来源：http://www.sxryk.cn/163pzqahcdv.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163jwfkkcrj.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163lmjdarpr.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mkpsjijq.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163krnyrpml.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163bodcycwn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163trjbtvqx.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ajjlzsbb.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163hocmaddg.html

[G06] 重写方法
来源：http://www.sxryk.cn/163cpxacapu.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163sojelqjs.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163lhuhbvnc.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ktusskbd.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zjcenzvz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163finoejyr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163qygzifbn.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ktqkzsfn.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163vvdfmemn.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ptjoadwp.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ubbkkiko.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163gryrcmbc.html

JS:   super.greet();
来源：http://www.xuanzx.com/163xkjlqufk.html

TS:   super.greet();
来源：http://www.sxryk.cn/163uyzujhsd.html

Java: super.greet();
来源：http://www.xuanzx.com/163vojqgick.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ogsdczrp.html

Ruby: super
来源：http://www.aibaodan.cn/163xdrzflye.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163lhurewyo.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163fgrpargc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163zajolwss.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163smxhsheu.html

JS:   static f() {}
来源：http://www.sxryk.cn/163gheuyydx.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163pfoylpgo.html

Java: static void f() {}
来源：http://www.xuanzx.com/163swvpzclv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163bgievvwp.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ivubhqcg.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163mnropymu.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163dwfljuxp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163gulkzqjc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ulcldzey.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163dbfakkzd.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163eshlfexl.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163gatrykye.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163paxxclam.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wwpmkuuh.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163cmhvmzcu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ldvkijmk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163nsurtbng.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163wandcehg.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163bvgokjzy.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163iclfwzxh.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ztgbzysm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163crqpgflj.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163qsiijgcn.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163pdazflwu.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163zhnzslia.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163anzktxsb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163axdlqvfd.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163qqeukcrd.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163cuzlybfg.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163bduedpbq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163rxelbqdq.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163sxktjdqn.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163gojhlhla.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jrntjeno.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ssazdwms.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ybwndixv.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163kxtrnhdi.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163fehflxrh.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163qepnstyh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163vzfefnmw.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163sgcyjtyf.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163stkttosf.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163gzhuxiyv.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163xxiuuqcj.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163uynaizzu.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163pekpoaki.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163jytwfbvt.html

Java: u instanceof User
来源：http://www.xuanzx.com/163gtqyevbp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163prdwyfvh.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163tvriulek.html

C#:   u is User
来源：http://www.xuanzx.com/163qarrarcg.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163qwdarrxn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163goyvlahf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163apovojsi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163aeyppksq.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163rwzgkkpx.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163exllrikd.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163xhldumui.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163mkvzxoux.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163lpleoqcx.html

[G15] 枚举
来源：http://www.sxryk.cn/163vesingaw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163cjqwjfus.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163blhoyoqj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163iduopjtg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163prlepkst.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163iqzjkgim.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ttosdksc.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163fkzdtxjx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zzujottw.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163wksduzae.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163hblyqxpv.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163igrfjbmm.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zzyrkkcy.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gunvvfqq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163esimslcj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163mvgnwiys.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163hgrcrftq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163xirpptdk.html

================================================================================
来源：http://www.aibaodan.cn/163zdxzlwpl.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ixubksgl.html

================================================================================
来源：http://www.xuanzx.com/163flhezowx.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163wjmvprpn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ztcsqqkd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163leyezkqs.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163dzrydhiw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163tunsivql.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163zoonwpzn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163waywtzgv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163qvsszmfs.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163pgaovkgc.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163xaukfdyv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163jhkswnur.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163htzdyugq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163noghrgjm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163umjbftmw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163csqhzfwg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163sliddvzs.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163xgjwysvp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163bxmvkydi.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163egpikbgx.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163dzsrklax.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163hpfszfsd.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jeiaxnnt.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jprelmhd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vwkhrvyy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163vlewfeqp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163oxbfpmhi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163lrkeiaeq.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163cikbdrzg.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163uzsgunyt.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163vlhphtnx.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dkmuqhbn.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ycxjutln.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163dcwlymhl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163sbeshfpw.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163azevozgf.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163dipgayko.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ebieccou.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163gqrgraqc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163grlxueue.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163maxmdryh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jqalruwk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163wwgvwuwj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163hsfbflwj.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163wwabkdoe.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163cmwfzkni.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163vyxrxcbk.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163etverazg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163crwtxfvu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fniqbdbi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163afwbbcto.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163dgvqswkt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163prcpmane.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163rclqcifd.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163wvqvuaof.html

[H07] 断言
来源：http://www.aibaodan.cn/163stlnrwvt.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163gidmaylk.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163mbzvkddr.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163cbkxzlsm.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ckngdlfp.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163zafgwfua.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163edcsrgfo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163htlskwqg.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163jczxehkl.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163bjuxrdlb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163mptpjiyr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163zwlhxfbt.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163fbmedimn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163jfsycutp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163cgnipxky.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ccuxwgrc.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163mzwtmsup.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163dtzmqdae.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163denxppns.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163wpuphnsc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163fedhwcaa.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163sovpwayl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163dclwwsbx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163snfdrqua.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163kkqckatf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163jrhoxxkl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163xvvxtbsx.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163cqiyysgr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163obzauyco.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163nxzmjdoz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163oljezubu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163cwxsuzek.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163nfsdyfcd.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163uesuzxhf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163iauocnpv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163izajgwxn.html

================================================================================
来源：http://www.aibaodan.cn/163pawqbiju.html

I. 正则表达式
来源：http://www.aibaodan.cn/163awiqkplu.html

================================================================================
来源：http://www.sxryk.cn/163osbacvwa.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163uicsfjzp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xsqibzyl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163zbzqtxcb.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dtplfpgs.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163cfdsspag.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163vpvewwim.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163zpcupkea.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163sbssrlqx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163pjxbyvpg.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163llmkejek.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163iepnqcyq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163apohtnif.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163tltjpird.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163bvdclwro.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163hqyndume.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163rljgewab.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163hkxyrpml.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163xjesehws.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ugevfxtq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163igievrcz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163mmmiqiwd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163hxmxhwwi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163xbtrmowe.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163rpfvedqm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163xnafphmb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163zcpbxgbr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ixsrgswe.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ksjlamrv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163hvdqygaz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163hkpebmrh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163uisqvhhs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163moqsmioq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163piusmezn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163lvjbptom.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163coitvynm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163hsirvsxt.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163zckibkto.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163swuqxefv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163jbmdrffz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hgkagfab.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163awvzwxyh.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163dvbhphjw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163nztxmqfz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tmoeoszp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163malaxeyt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163kkatgbbr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nrkeekqi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ugyfczhn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ozkarfwo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163zhozowft.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163jtmllsed.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163fbnueiub.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163avjpypvn.html


<!-- 参考信息 -->