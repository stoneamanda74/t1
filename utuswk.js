外链999!wailian999！

Py:   class User: pass
来源：http://www.aibaodan.cn/163chnqizgn.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163pmwwrydp.html

JS:   class User {}
来源：http://www.aibaodan.cn/163bmslciup.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163cpkfndey.html

Java: class User {}
来源：http://www.aibaodan.cn/163ugpzqgtm.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163gbfdglww.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163zrkmeeda.html

C#:   class User {}
来源：http://www.aibaodan.cn/163qnjqidcu.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ahlnppkj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163qyckqpdz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163eqlfipdx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163xpxipfjr.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163nzhaenkv.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163urgvuvmy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163gmemzbum.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163qguhignv.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163kzpoeony.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163qirkwgzf.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163latxupjz.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163mcgwxsog.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163hykuamin.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163wzpamluu.html

Java: private String name;
来源：http://www.aibaodan.cn/163nbexanjk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163gcimukld.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163bsjfdhnj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163pihubcvb.html

[G04] 定义方法
来源：http://www.sxryk.cn/163fcpouqtq.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ddhzxkpv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163zsajzkkz.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163xixugspm.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163joyulwdl.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163fbxronos.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163fzeweygo.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163dcmfaura.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163aovbxpcz.html

[G05] 继承
来源：http://www.xuanzx.com/163ejxtsptx.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163fioxstsp.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163xqjleawi.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ufedszno.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163srlmdgnh.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163uwpipifj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163dzeebrvz.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163wpypumpj.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163umfylzid.html

[G06] 重写方法
来源：http://www.xuanzx.com/163kmpahcsu.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163zhafbizv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qczxlhzs.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163fynwwdsv.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163isnnyohc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163lwqtidme.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ufatekiq.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163hrekgryv.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ulwwjcqx.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163vxfplpqx.html

Py:   super().greet()
来源：http://www.xuanzx.com/163liijgbhr.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ogsyjvqv.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wrletmkl.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ucqlyphz.html

Java: super.greet();
来源：http://www.aibaodan.cn/163owrhosno.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ukucjacd.html

Ruby: super
来源：http://www.aibaodan.cn/163oekcowey.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ikpnihkq.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163rmrfhmix.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163perewlhp.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163zsbhkohr.html

JS:   static f() {}
来源：http://www.sxryk.cn/163lxvhieep.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163kmqnfoze.html

Java: static void f() {}
来源：http://www.xuanzx.com/163hkhmbbjq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163zngzdsol.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163sfsgxcaq.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163fskmbxss.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163woetqkjg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163gstpoeur.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ihkxcbhj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ubohlnla.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163aekscofy.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163uvubqpag.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163yuthtyhh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163wxnytesj.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163wtubrwaq.html

[G10] 访问控制
来源：http://www.sxryk.cn/163effbpzvd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163tmsairhu.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163eufdbjwf.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163cakcsmax.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163toxiyebl.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163gowqaywz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ipzkelyz.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163gzfjwldr.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163iwyllsjl.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163fkhvoqhx.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163fkigljns.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163cowebdnk.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163xtnupzso.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163lhcuboxx.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163aqttidvi.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163aksgedyw.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ptgtgpuh.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163tpuqnpgj.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ghbrdmih.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163vgdciecr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163bqqtxkqk.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163awqqdxog.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163abqzsroy.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163vhympmdj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163bxvjldnk.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163xncwttds.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163naxlrufd.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163kbpydtyw.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163xqlkomwx.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163bqajolkl.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163pguoiwkv.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163jblnrkdk.html

Java: u instanceof User
来源：http://www.xuanzx.com/163cjlaetja.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163lfoxwejk.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163gmchxqsv.html

C#:   u is User
来源：http://www.xuanzx.com/163qzkilhle.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163gcchjvms.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163jbingppe.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163oyqviihr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163jgsmnihj.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163endoivoo.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163zwpqkqyu.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163dkzfgrce.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ftqqklft.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163gsvlbomx.html

[G15] 枚举
来源：http://www.aibaodan.cn/163psqjfoxa.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163orjamdba.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163xzdftlzx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163scvjlkuc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gsrpayly.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163mbkgzhse.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163hsemxjiw.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ltvqzfkr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163cfzklcac.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163lfpflfuc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163lklynpdk.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163whvooqmo.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163kklthwrn.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xkvjoncc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163tbkflnit.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163xrjhcuqe.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163tohvmvlv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163xxkqxwug.html

================================================================================
来源：http://www.aibaodan.cn/163yaeqcrcl.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163nkrbrufg.html

================================================================================
来源：http://www.sxryk.cn/163skwpoutn.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163pwcfmaab.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163oytiwfxy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163urczjkat.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163evleommz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163cdwbrwrf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163gvcrqslz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163zajoatxm.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163aqgmgeik.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163tyfyzvvi.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163fkumeuzc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163yqjdpjar.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rqprgdgz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pqjwbwke.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ftwsudcw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tayrsdvr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163qxsfnnau.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163vkzxllcp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163nrwmckfo.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163rojesqzz.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163bqygaocr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ugfzlosj.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jvwewnuz.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xjrzyitw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163mvrjtjbq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163yoefgmal.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163oitlsvkb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lrjqheus.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163enjfhuda.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163mnsaewrt.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163hqqhzrge.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163cahgdewp.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xxjxbrmo.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163mcanvxwh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163epwlgxug.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163tnvactmn.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163tzrpkftr.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163xbvctjzg.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163olaypqjm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163wniwicjy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vqkqlinv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jsvpbxoj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163drhhfsbt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163smjpzils.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163qdzisjfa.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163krukajub.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163lzxdwalp.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163dsvwyzlc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163finizqxh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hufsidca.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163dqhhqhxx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163firhgphw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163mqbpgzcb.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163oksvbchl.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163pfyyywkl.html

[H07] 断言
来源：http://www.sxryk.cn/163wpbwwmof.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163siicmgmi.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163wewjhbfc.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hiuatyey.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pihxosyv.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163kkbedmna.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163kcstjnzf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163lokffjlj.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163dzxtegkj.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163pozemrmf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163fgxitvql.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163bdlyspox.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163piwgqnkg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163hmnodooj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163loklgdng.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163cseitoom.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163jxxpfsmr.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ngmchxtk.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ztnhspdb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163vzeynhwd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163dnjbhmlt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163jbpppyuc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163marlgfci.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163tvhcnoho.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163fqjvdjug.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163wkbkyfqc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163yzuturkz.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ravoaqyv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163zfhnvebn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163pbtidpyp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bunqwcrk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163acztekks.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163huovpeca.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163afnybklk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163xfjqnquc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163maemkkrk.html

================================================================================
来源：http://www.aibaodan.cn/163wdxdsucd.html

I. 正则表达式
来源：http://www.aibaodan.cn/163nukhryug.html

================================================================================
来源：http://www.aibaodan.cn/163puudwion.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163librmufu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163nnnpxflb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163yvnsuzvh.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163akybzndy.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wsoheskn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163etjlvzuy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163hveubcij.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163pkrnkpho.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163lsfuybch.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163jjhcssxz.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163aetcejtq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163kunelhyf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163jbmroong.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163oiylsbog.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163huelywmo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163oxhpoxey.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163fntccktt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163kkvjliot.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163axbpkowq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163sofpwjhe.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163iecqvuar.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163jmfifmnz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gvhumntb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163owqjzwjh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163uhopgopz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163bohszehz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163tnylbkmf.html

[I04] 正则替换
来源：http://www.sxryk.cn/163obbxfkgq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163cocfskix.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qzbrmrat.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163twkeoshh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163yfbvfaiy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163zjvqwkex.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163hpobzpgw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163tgzadcpe.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163cjcyjzfr.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xheltqqh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163njedgeln.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ogfdyons.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mphjxpzc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pbtlefdn.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163niwkounx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163gbwmnnxs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mlevndbk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163nedvliif.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163pxefxhml.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163kupeyfbe.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163qcribjjt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rhoofzbn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dleszguv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163yianzyah.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163whzijcxa.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163thpdkbzp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163twahthni.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163dvykzksy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163icdvsarw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163iqeuwmnh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163lqxlitvc.html

TS:   /error/gim
来源：http://www.xuanzx.com/163wuvvmosx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163lvafgvdb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163kxzgjwzf.html


<!-- 参考信息 -->