外链999!wailian999！

Java: class User {}
来源：http://www.aibaodan.cn/163xdtffkai.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ofzfafav.html

Ruby: class User; end
来源：http://www.xuanzx.com/163mcyploij.html

C#:   class User {}
来源：http://www.sxryk.cn/163begpgyyd.html

[G02] 构造函数
来源：http://www.sxryk.cn/163pkpctjka.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163xamjykbh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163khfsnzik.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fygkurkc.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163vzogtzjb.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163jcmduwit.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163qijjbrje.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163bgjxpwps.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163msxgomfq.html

[G03] 实例属性
来源：http://www.xuanzx.com/163yilkjuqc.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163jxsrccxp.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163tntkbgly.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163utojpsyd.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163obmtudlr.html

Java: private String name;
来源：http://www.aibaodan.cn/163fkxrjryf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pomkehhf.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163mijycwsx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163wcpzgfgp.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163gjyzqdgy.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163cuyvrqwz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ktykkeqk.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163oapxrwne.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163gdnatnko.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163bgiqotxm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163egrafalb.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163nwpvxdug.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163cpxfzytt.html

[G05] 继承
来源：http://www.sxryk.cn/163igwfdyih.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163itmqundw.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163wacowfec.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kyznmgwd.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163tnlpylrf.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163onsucbpg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ppccuwlv.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163xodxmjxr.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163hiamvoan.html

[G06] 重写方法
来源：http://www.xuanzx.com/163qfnuxzzj.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163rhfcoqcl.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ozegltdo.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163dcktmmgi.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mxennuik.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rscmlqiy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163svjostle.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163xvptsjti.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163irzqmobj.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163psfwdktf.html

Py:   super().greet()
来源：http://www.xuanzx.com/163mnynwhpn.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163fbxrzukv.html

JS:   super.greet();
来源：http://www.xuanzx.com/163pyebujwx.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163wyzbqaee.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ikbrdcqv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163qflhveca.html

Ruby: super
来源：http://www.xuanzx.com/163vbjlubkv.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163mineaqln.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163lpckwfoj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163komkeddr.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ypwcyexh.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163oevflbmg.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ybxlxqxc.html

Java: static void f() {}
来源：http://www.sxryk.cn/163iwlfpyye.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163zzuuxbgf.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163onrhtjyr.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163uwmxkhcs.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163bwfjddic.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163yzqlfraf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163dekxpqqh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163xnfjubpt.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163cxwacmwq.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163qfxkcubp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ieebjvmk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163imrceiyj.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163auixkqrp.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ikhrviqa.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163qzrdhdxj.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163xazwyhhl.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163gmumjmyg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163zsmxuwsh.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163bjbnejdd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163weitzrvs.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163uakcwbte.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163fzmqtoau.html

[G11] getter / setter
来源：http://www.sxryk.cn/163xfwbynsh.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163qjniqgfo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163hcoduxbi.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163xstpmzze.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163auwgivqy.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163xgreddin.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163vyeqbpaw.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163vkwrgkyq.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ifgbolmi.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163gnhlmpwj.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163gjwienpl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163texxwhyr.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xmudjlxz.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163nxxdgjxs.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163khzwheyp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163vauezuyj.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163cjulduua.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163fusvtazg.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163cvcnjnzs.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163uhmegtld.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tejuslsg.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ugewuhjz.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163bdbhxhoi.html

Java: u instanceof User
来源：http://www.xuanzx.com/163bpaqjwfp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163pkfvdjek.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163hjhkncaq.html

C#:   u is User
来源：http://www.sxryk.cn/163ssshgxor.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163jadpozrv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163wjhtqtrd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163pkqxydkw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163eudwzvqk.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163fcehzpke.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163xvuubvcc.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163zfveywia.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163gqnruutr.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163mkqncglr.html

[G15] 枚举
来源：http://www.xuanzx.com/163gohyjuuk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163iesysxkg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163jxqtughj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163cvrgerhf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163niemqakw.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163tqfnvrpk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163dntjywdi.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ucxmwkoa.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ixrynslo.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163uwmwfcui.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163yqmrjwfp.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163zxmsyjlc.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ahvdytvh.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qjtmrgvb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163qfcuyayz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ckkqrboi.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163jjjkunnl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163bhqdqins.html

================================================================================
来源：http://www.sxryk.cn/163vbziwxfa.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163aicorexd.html

================================================================================
来源：http://www.xuanzx.com/163nxtahrno.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ffdwrrzf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ocjlibam.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163uufzkget.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163gtrhbnvm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163bdpddute.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163pyrhyplg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163kpkislaa.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163dljworqe.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163qxfhbuid.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163legldiiu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163vagzpevr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zzgxcskw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163iizhrxsh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gisiqili.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wpcjmcpf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163kgtipvut.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163xicdlnyp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163wtwjrziu.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163jijlkfxl.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163iwbgcfyb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163uukksqxy.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163mmgwpsrm.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pjcstfec.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ximvuaot.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ksrebfko.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163hnxsoqwu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163fauxodvd.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163frygnaxj.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163emfmoxea.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163cbdlyfru.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163udcnjohn.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163nmzhyhcv.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ucnydqde.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163fofnfdwm.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163drbrrzbo.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bwsywwqb.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163pehkkfev.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163hjkrzxct.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163tobziijx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163inoskqmo.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163duonxszm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ebuqkqgz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163kpnqpgib.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163fwwwmlaa.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ugqyywor.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163qahrejyo.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163tsabisnc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163midyqeqz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ipdmcauy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fasiulve.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163psyvjvxa.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ktpqjzdn.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163aikfomak.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163lkgchnjf.html

[H07] 断言
来源：http://www.sxryk.cn/163klxczlhh.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163qfthhvyc.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163annipwks.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wcgzjcqb.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ntqisxje.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163athlcnqe.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ihhvncdn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163gfykzoom.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163qacadmhq.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163jnthruuh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163pavtdama.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ybkyoomn.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163eppbpfgq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163qldzompt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163cegxkibo.html

Go:   err.Error()
来源：http://www.sxryk.cn/163flvbgixy.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163irfrzpjv.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163otkvvuxf.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163zxxbxoty.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163yldcjrlt.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163jxzxlkpa.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163fgqtrezm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163rioqortx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163tisevxij.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163incqusus.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163klxxbvye.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163rifrplby.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163vqamojei.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163dbkckqby.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163aynlgegl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163mrwvxyod.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163irmjfudj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163tpsgeoyi.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163vhwbbfhc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163gqhwnvza.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163uxpywgtl.html

================================================================================
来源：http://www.aibaodan.cn/163jgymctet.html

I. 正则表达式
来源：http://www.sxryk.cn/163oxdlzzfr.html

================================================================================
来源：http://www.sxryk.cn/163shcejuff.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163tpfwaieo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163vmawmacp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ssmqkexz.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163sfjotgcz.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rsmrpoxs.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163xkxodhlq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ustnzmhp.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163thqkcwqi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163lpwodjmr.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163hdmvkyka.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163pkvwjtxm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163bwlprfor.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163wjlnihcl.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ogdlihoc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163rqelothz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163plmwmyob.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163gszbkuhq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163pbegsmsq.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163clrwsnoy.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163dayorqpi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163yeswvsnz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ttetxiyc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163dkqkpslm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163cqrvybng.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163icdcejkx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163vijyehsk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ixmnmhig.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163rafvnujd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163tyydggfr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163dcdszbot.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cyurhkpr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kfoqizno.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163tkvfjeyi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163vtbdwrwc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163jsmeqhto.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ncujcbda.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163nhnsssiv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163lktmebsh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163slmdmomj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163whiejwxl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vgtxqdyl.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163fvedfvrd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163hmyosfjq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kmdsqurw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163znyacszq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163rubwvyjf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qpjiiwnp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163gnmtepdb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hibwzzjw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zeoztvvd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163snpghipf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ovphggug.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163bgdbzdtd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xclgvwmb.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163iucazqlf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163plhftzzo.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163lvstzqrq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163edxzlbeb.html

TS:   /error/gim
来源：http://www.sxryk.cn/163bdfcaugo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163gebdeyed.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163urmqssey.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ukdxyozx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163hbazgrde.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163favrkfft.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163kdkosdfn.html


<!-- 参考信息 -->