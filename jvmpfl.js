外链999!wailian999！

Py:   class User: pass
来源：http://www.aibaodan.cn/163xeaawvna.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ijziystc.html

JS:   class User {}
来源：http://www.sxryk.cn/163yxpfzcqw.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163okbaudlj.html

Java: class User {}
来源：http://www.xuanzx.com/163eezqprkm.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163nxpdqcuy.html

Ruby: class User; end
来源：http://www.xuanzx.com/163lplitmvr.html

C#:   class User {}
来源：http://www.sxryk.cn/163aeftbajt.html

[G02] 构造函数
来源：http://www.xuanzx.com/163perrncja.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163bzlabova.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163zxbcwabo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163sykvvdip.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ppixsvnt.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163irhbzqmt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163qxyjdebr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163uqvkenii.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163bbzcgqxs.html

[G03] 实例属性
来源：http://www.sxryk.cn/163tiloddgg.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163lypnihbi.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163qjeuxzmy.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163cfnvrvjr.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163fsbpmfof.html

Java: private String name;
来源：http://www.xuanzx.com/163kpxgthhs.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163sbhyjpzu.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163zuwyegib.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163dzsfiona.html

[G04] 定义方法
来源：http://www.xuanzx.com/163vjdlhzad.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163oydricii.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163yezyrkkz.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163qyuqbjru.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163oyhdidsp.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ybvxzwxp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163oonlsgxc.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163kzxzhvjj.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163jamvrplv.html

[G05] 继承
来源：http://www.aibaodan.cn/163ftaemptj.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ddtudysy.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163tcgsokxg.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zssrafhf.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163osiuzpgv.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163epnzqlbm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163dbpuomnf.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163glqaevqd.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163lxnhoato.html

[G06] 重写方法
来源：http://www.sxryk.cn/163kovwfuyb.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163dwrhfukb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163zchnkkhh.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ygvpeslu.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nganvcqp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163moqgkkqt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163bcgjmajq.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163vgtapfzz.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163lawdylys.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163mifnwxsa.html

Py:   super().greet()
来源：http://www.xuanzx.com/163clzjeged.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163swwlkwlh.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163htfblpbo.html

TS:   super.greet();
来源：http://www.xuanzx.com/163zjftcskl.html

Java: super.greet();
来源：http://www.xuanzx.com/163gwovnhzm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ygpplxaj.html

Ruby: super
来源：http://www.xuanzx.com/163cjzumhph.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163icfyqkvt.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163rlrkizkz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163hbjgrxro.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163gpnqktwp.html

JS:   static f() {}
来源：http://www.sxryk.cn/163rfjbtmfc.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163gcukegnd.html

Java: static void f() {}
来源：http://www.sxryk.cn/163bqwupome.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163eovdpahb.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163rjiisqfa.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163xnyihsfu.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163mdbxsedu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163taiftiul.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163jzewhiqu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163qbetuyyj.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163iguekbwc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163fofxxhgc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163grfjgmfe.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163jbwcifox.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163kbxxwyia.html

[G10] 访问控制
来源：http://www.xuanzx.com/163aoxiboer.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163goczlztz.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ddddibuf.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163qxsdcafx.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163dvifpcoo.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ebusvjdv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163rphowdcf.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163fmsdvkph.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163auywesyl.html

[G11] getter / setter
来源：http://www.sxryk.cn/163iaytmehf.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ttqfsipm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163dmsxmwmn.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163fsezmvno.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163hvtolmzp.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163sftuxgdg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163tspefpsx.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163rtczfeuu.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163fqxgdjak.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ckmgntua.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163swijlrax.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163xylftdao.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163twzgqkya.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163dpnlrteb.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163unbxmtvj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163qibvshwt.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ldzyyxda.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163cihhztzc.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163bdlukhri.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163cfirrhvi.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163axoifvah.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163sicztvtl.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163yotirrte.html

Java: u instanceof User
来源：http://www.sxryk.cn/163sqfkrzii.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ybhlziva.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163uovebhnq.html

C#:   u is User
来源：http://www.xuanzx.com/163mqjfcnxi.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163pvowwsjo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ckekqfvk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163wpbkwdfn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163kmnixfar.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163tlsavrgs.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163pbyvetsg.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163siylrpxo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163eixnlqnf.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163bkfintfv.html

[G15] 枚举
来源：http://www.aibaodan.cn/163axrlaiyz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163rvjjwrui.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163uswfzfuz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163vcljtpqb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qkuxaifc.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163kftbgcxi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163sngervwd.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163gljwfdas.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163azubjsjy.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163tweqpzyz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163netvazhk.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163lgzmwjru.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lpyvihos.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163frjwbsmi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163smjzbjbo.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ypgxdjjn.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163sftkpmdl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163yunfbwuq.html

================================================================================
来源：http://www.sxryk.cn/163yhgwtuhc.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163tufwwdfi.html

================================================================================
来源：http://www.aibaodan.cn/163bhkvzmif.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163uszfxckr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163kkubccja.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163nfhoonne.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163imzzukic.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163asimsdub.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163apioggfw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163chjganae.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163zedaannj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163wjgxgzwk.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163gfyuagtc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163dixkwcfj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ugeiulvi.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vzstidbl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rubgtswv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dczaegcd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163krtvbwgv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163dnddzliw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ojqtcnbi.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163kzzokait.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163flmwtcts.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bxkcitsx.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163olmfuecp.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wyhalzep.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mpwnaqbc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163xonnhehe.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163olpaiktn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163niwxedpd.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ycpnadou.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163xkftryze.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163yypqohoa.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qkmfreve.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jsfifqbi.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163mhrxylvk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163pdzrxfgj.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163taruagcb.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163cbtgdece.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163mrbskumi.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163eqellqmd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163jdgtuxtq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163axexddms.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jbjnmnee.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163bvazftta.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163fcivkpzo.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163hcyfkfou.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163zdxhbbqh.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163zvjhxrhf.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163lqfurtph.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ccnwxfjd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zbybwhpd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hmxncadq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163cnbitwpo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163alfokbpz.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163rltxodxo.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vjqcnfnf.html

[H07] 断言
来源：http://www.xuanzx.com/163kwrcrjrm.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163gebxvwik.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163boljzvxn.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zgxqqspk.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163lagmwecn.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163xpsshtuk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163qaxowxjx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163kpdltalm.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163hmpgsrlz.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163wzjljnqx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ytxczkjx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163tmtalstb.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163yiodgrmf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163uwjvpfdp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163kvvyroly.html

Go:   err.Error()
来源：http://www.xuanzx.com/163gikdxeyb.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163vcjqyspx.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163iigdvvwz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163jhrhqwlq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163gjupyfur.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163rgreocrg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163wctvpgup.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163rmjkxhjm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ikkwadca.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ylcnmljw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163wtcskwtt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163macyhoah.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163lsobugzu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163pbhaglju.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ezecjwsd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wxjfvgny.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vufmjhzs.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ydbzyzlw.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ntdiioke.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163tobqrttu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163quedxmyu.html

================================================================================
来源：http://www.aibaodan.cn/163tfmsjvku.html

I. 正则表达式
来源：http://www.aibaodan.cn/163vooejzkl.html

================================================================================
来源：http://www.xuanzx.com/163xizlhezw.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163jobbbjym.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163srctzwvs.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163vrocszyf.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163txbzxjbm.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163yyfpccza.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163qealzqle.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163fuymclbm.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163eeyrqhjd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163szxmjxou.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163moyuvtac.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163yaycwfae.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163tkoppyxf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163bvltnivq.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163gjyogpzb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163xedefevp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163nhbpuzcj.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163bwjjlskl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163zogrysie.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163xtauaoeq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163sexyjvud.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163brrnduhb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163sswustjx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163wclkuwgc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ulwqdkwx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163rtwrqfok.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163updxcdqk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163lvnrdtmn.html

[I04] 正则替换
来源：http://www.sxryk.cn/163awvvnyck.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163hoczdoop.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lhgtpjav.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ivbjaaaq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gtqfmrua.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163hairguzb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163srrxodym.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163rhjnymxg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163whqzisus.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163tuubbsou.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163dyqjophu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163rgykrjbp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pxtbimhj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ajjgqcbs.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163lnleewxk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163igqxrpdg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163imrrnltq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163nyvwkjze.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163qqidfqcf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vvbhjblf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163uewulgud.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163xyuewaaq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qfuclvsb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163rwwvqtvi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163tbxwdzhw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163roimkyoa.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163sdyjnggl.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163gffiieqp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163zuhalcxm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163fikslatc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163jdbduhgp.html

TS:   /error/gim
来源：http://www.sxryk.cn/163scjqjmhu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163fzcqozrs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163taclthfa.html


<!-- 参考信息 -->