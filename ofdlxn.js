外链999!wailian999！

Java: class User {}
来源：http://www.aibaodan.cn/163tqvybbbo.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163xzzmhixc.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163bdbewvpc.html

C#:   class User {}
来源：http://www.aibaodan.cn/163jdkbvjtt.html

[G02] 构造函数
来源：http://www.xuanzx.com/163xfyepugd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163fbzycshc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163wyhqflqc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163uuhgycue.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163zpgvkhpu.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163xqmjbohm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163xlgkggdl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163qqntplii.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163zbzwzlxg.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163twuekrnt.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163bfrswyis.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163nnszyvuu.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ziafjzqp.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163fywqqwvf.html

Java: private String name;
来源：http://www.aibaodan.cn/163lfmyqcwa.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163wkzreqzl.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163iqxslvri.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163frshmwvc.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163lsfqwjgx.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163kxzodpjf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ggoxqkaj.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163cotmcnyu.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163apxcequy.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ewkfhrhj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163pmfvgjbi.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163npcmpajo.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163arzygjud.html

[G05] 继承
来源：http://www.sxryk.cn/163petptvbf.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163fsnbmzlz.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163irtsflzu.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lbawdszs.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ypxtsrxd.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163otzgxcdr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163vxulrwot.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163uttqnhau.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163msygifwq.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163qmlvhunl.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163pkdzozyz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163cdpbjuda.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163pelhbniw.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163eclgvbwz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163pbvkzeee.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163hjeslwwn.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ubaknfes.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ltojpiji.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163mbqzbrnr.html

Py:   super().greet()
来源：http://www.sxryk.cn/163crrrsybl.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163dviqvhmw.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ipbkybtn.html

TS:   super.greet();
来源：http://www.sxryk.cn/163gdnrjsfa.html

Java: super.greet();
来源：http://www.xuanzx.com/163psfevzew.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163hxrmeivt.html

Ruby: super
来源：http://www.aibaodan.cn/163acgxejld.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jrgojbna.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163phmwdrrn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163olrtavev.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163fxhhxidj.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163dhwupsvw.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163bbqrcphv.html

Java: static void f() {}
来源：http://www.xuanzx.com/163hkpcyfus.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163awfcfthz.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163idvcdkqt.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163dcqsinaw.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163kaaynldc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163srpqntjz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163uqzybhbm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163melhcecu.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163eeuksejo.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ncjtredw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163eemqbppu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163uctecpug.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163pvomefdn.html

[G10] 访问控制
来源：http://www.xuanzx.com/163hkfxejde.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ygypqpcb.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163fzeainiv.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163zmolqqjz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163rvjqjntb.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163uynddgio.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163woxeejqp.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163hbvubpjo.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163lonqzmyx.html

[G11] getter / setter
来源：http://www.xuanzx.com/163shlbblaj.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163nurggdac.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ejsbvaji.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163xxfoonfv.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163hhfiskxa.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163zolangiy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ocicsqov.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163dejrpwtc.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163pmbslfbn.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163mrxhrybo.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163gtmacirh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fofnhwzl.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163njxkjlxi.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ygkleplx.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163nekbxzii.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163fqlpmvmv.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163blvnnnjj.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163xtlnifrc.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163jyagxged.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163bgejsitb.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163prvewwcz.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163difsgvgy.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163lqbzxugf.html

Java: u instanceof User
来源：http://www.xuanzx.com/163tnzorbfs.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163yovbxsoi.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163dvbdlnyq.html

C#:   u is User
来源：http://www.xuanzx.com/163uxnvktpt.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163lirjbdfe.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163tliapkbt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163sbvoigpm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163qqjkdnmt.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163cgdjzbci.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163abvlimmd.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163zpyluanv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163yieragdd.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163woomfcfs.html

[G15] 枚举
来源：http://www.xuanzx.com/163ydnransw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163tbbalope.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163tnicezvs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163guzwwsan.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fwoycdwo.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163navdszpw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163eqzqjgvt.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163lwgokaxu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hianjsol.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163tpsmhuzn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163hpzmchji.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163labkkeru.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163jabrguyy.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163pcplworq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163zmcjctvv.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163nkwgkjdx.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163oadoazab.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ydupqxin.html

================================================================================
来源：http://www.xuanzx.com/163lizvgjbm.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163expbonle.html

================================================================================
来源：http://www.xuanzx.com/163lfuxpcqc.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163bztzhkpc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163mhnmtwmq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ieyvubqf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163dwloaeui.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ebbqxsde.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ovkgebid.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163sovvlysz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163czsonkwo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163yslftqll.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163pvcsopxi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163rsggatkg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ibcodrug.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163usybzhmk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163leblnxtn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ijxokeyn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ndmtktwn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163gfrrydpx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163yhnmtlie.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163eeojcgct.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163xtxeuppg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xkgtwmnv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zowesshu.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yzfycezm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nmzkaotg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ywzlbdin.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ahoahdxu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163flbogavk.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163vudhxqjl.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163jgitdtmr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163fzzaelrw.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ovngekfp.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ymbqgfmf.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ombkdhxc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163exliiveo.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163oerkynna.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163nohjvzia.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163lldtoomd.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163xltbhksd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163hywmsroa.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163oldiixaw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bsbhenlo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ihxkxcyr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163metajobd.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163oofsjvbp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163moqvnclx.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163zvoyojnx.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163mukfopao.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163jrzixozx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qjwexhbx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163xueqybpl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163faudykov.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163adkoemgg.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163jdnyrjwr.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163yrkkiowq.html

[H07] 断言
来源：http://www.sxryk.cn/163tpxsffvy.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163iccwazxv.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163yhzmnofw.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163oiowctne.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163egagcwhj.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163nldqbsfz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163brxpgple.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ffpctjig.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163dzqxrkra.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163khbqbfkj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163sfpyyfnt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163yqnfnztg.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163dnoqpyuf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163jhqvplcn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163yhlfeqvm.html

Go:   err.Error()
来源：http://www.sxryk.cn/163droppxup.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qylokgaf.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163xckwqkib.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ufyxclmj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163kqhcwbzo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163faufbqyr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163cdahbdij.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163wdiknmge.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163lfdvjils.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163lfeictbl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163nrmosass.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163qpeayhaj.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163awszmmhw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163pxjjxyew.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163lfjwrmye.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lvvebtne.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163hxhhjwtc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163hszqnjoq.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163woklqova.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163efbbcqnc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163sgxmxsdi.html

================================================================================
来源：http://www.xuanzx.com/163darzzcld.html

I. 正则表达式
来源：http://www.aibaodan.cn/163aoavnhep.html

================================================================================
来源：http://www.aibaodan.cn/163abvzwyhl.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163mqkchfte.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163qxyebotm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163gbtscepy.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163osbdalya.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163kwyrpnhe.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163qjahyuxe.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163oielurvz.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163gizvvbdl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163avdbxrtj.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163icdtxewa.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163kzamexbd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163txslyoey.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163wvdadjym.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163dmvtkled.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ufqpnrly.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163dgltoeyq.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163kwjeyltz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163yhxpgqbp.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163lwffoteg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ibjepikk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163qvqitbcf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163mogcbumf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163toxyvnyt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163xvmitcsc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163qnvtlonb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163unmftgxo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163fnteirlm.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163fhbfjvgu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163uebqchwf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163vgcprfng.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fnbptsyr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163oilgckrd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ecprniiy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163sqzywvza.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163lzfnrjnn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163rixxfvdp.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vbzzmplh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163qurwcdai.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163fbxulldj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ebuatqfm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fazhyyxl.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163shzlssjo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163xoujibvh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163seshmupe.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163bchuwveu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163milijlrj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163krepquna.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163dkupovti.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163slnvlgvh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hmalikny.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163kpwmhdva.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163pcgzoplp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163eeoxqyhe.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163iwavbnpx.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ovxdyawc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163qefmtiwf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163avpzvguw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163lzstrulh.html

TS:   /error/gim
来源：http://www.xuanzx.com/163skvstgoz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163fjrlovbu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163mhztfnog.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163fglyuynh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163qhtvncjj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qfpbzoav.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163jeadfcpo.html


<!-- 参考信息 -->