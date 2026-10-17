外链999!wailian999！

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163kxqkovzh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163fkrftrki.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163kuortome.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163iviqaoar.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yklhqdkt.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163gkzdpwod.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163uhzkxbkm.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163arirqesd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163yifcpjsg.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163qegfyodf.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163wqewcfvz.html

[G05] 继承
来源：http://www.aibaodan.cn/163jpztobzl.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163tfmivnqd.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163iuxbkvgt.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163prpxpbok.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hptoawcc.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163pwccikrq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163yzaxopyp.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163capnuvgi.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163nxqpwipu.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163rmnkkxpd.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163mcuisqgh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163sijwuika.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163vzjvhrfx.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163bmobdnql.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163pigkrawz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163bzgxlfka.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163etjwucny.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163wqmfnwyo.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163cpozamxd.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163txcbmryx.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163fonwyxhp.html

JS:   super.greet();
来源：http://www.sxryk.cn/163dsvbhlur.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163acsmiaub.html

Java: super.greet();
来源：http://www.xuanzx.com/163epylmpzw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163hkdynial.html

Ruby: super
来源：http://www.xuanzx.com/163iytitcmv.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163nuzlkaxk.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ltuaukzr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163zncwctnh.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ggsprdiu.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163xuyzzfqv.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163pnbbhmly.html

Java: static void f() {}
来源：http://www.xuanzx.com/163mwxdpmwu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163nvwueyck.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163hazlyuhs.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163fmmlhqqp.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163vlhkgxma.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163sxunuisy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163qkcuzcgd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163zogokmou.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163mvmkqanh.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163dtyputdp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163zufnrmqv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163kgwqihrr.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ybnfzpnt.html

[G10] 访问控制
来源：http://www.sxryk.cn/163taupvrcu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163veoplqdo.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163aqtipfwq.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163wjvlmpse.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163brapzaxk.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163xhhysyyq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vhkdwxpp.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163eavymozx.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163eqznphqo.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163gznwbail.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163kubckczx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zbcxeuiv.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wqqbmokb.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163qhtwtkpq.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vpnfpvtz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163dvhzwypf.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xkttphya.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163scdjeptr.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163qznhxpyn.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163pbqorbeq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163nihyualv.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163cjuogigt.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163exshiihd.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jqodtmzz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163iwfparrm.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163fsxmedeq.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ojzwrnvi.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163cjxzlqmo.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163wfgcnnnd.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163lhgdawec.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163mlgbginb.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163hgkubphm.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ziritvfl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163yvqpodap.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163knanvdky.html

C#:   u is User
来源：http://www.sxryk.cn/163rxgnvega.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163tapzrkww.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163scsxkqyx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163cvpvbfcl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163bhzorccz.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163cfcgjhal.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163bvspruwg.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163uomxartr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163iszzqmlp.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163yoagqlme.html

[G15] 枚举
来源：http://www.sxryk.cn/163dwqgmfsz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163tgphpwxk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ttvyzbtk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163swrjsuny.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163uzmpebrm.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163vfulfbop.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163gaihdvos.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163gorsjzkh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163mbyhhxug.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163envttaqv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ziicimdf.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163qvgppxvg.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163dlsiyzge.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tsriobmj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163juiomfuw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163euimixrg.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163hdefngpr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163rfrqideb.html

================================================================================
来源：http://www.sxryk.cn/163ujxekxom.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163lzilxalc.html

================================================================================
来源：http://www.sxryk.cn/163duqlccms.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163tjdxjogz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163fbftmghf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163kbjblsed.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163xgxiwioh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163opjyonor.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163xnlxenuc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163vrxzzvcs.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163kuexeyrk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163royefyse.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163garpagfn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163goabkcja.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vazxxpyl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ysotiuwz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jhrgpyyj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hisgtuyw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163fzqvbbac.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163kfsiwszj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163woqixeul.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163svytmfrw.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163egkhrywx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ekgkodta.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163hnjzynnf.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qheiilrx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ahdxrrih.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163yehrzjmy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163fqeylwzf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163jylzjygi.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163expmfcpj.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163dnuazakh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163hghjvuns.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163cuedwqvs.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tskiqcrv.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163tcxkzuce.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zsinlixf.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ivpduvuk.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163mpaggqoq.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163iaijvqme.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163sszgjqyv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ibfslzji.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163outxnigx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163yxguwgtr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163vlwyzklw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163boykkczo.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163qtwbhbnn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163gejumhwr.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163auaqgjow.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163hjkbtjlr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163anwnehca.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163awpyczdn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163kuoyxdtx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163vchoqkmw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163hsqsvzsk.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163znvybpll.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163yefilxgc.html

[H07] 断言
来源：http://www.aibaodan.cn/163rnpttpno.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ybqjcgzq.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kxwlzfeb.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wcshbhsa.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hpfqnfba.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163rhtwqmwa.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163zrclxugl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163jgxckdry.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163hjpoffux.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163jnqmjdqt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163mpgloymi.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163hqqdfuye.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163vrcvajrg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163cgvismem.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ioyltxyk.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163jnvxhgnk.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163wdegqxxh.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163dizkakeu.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163agahuzif.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163niezmfsg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163wdadxuwl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163jrdkwzcy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wwuwmqzt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163nrsparck.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163hzzbstmp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ybgnagey.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163yhpgmlzz.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163kglgoghx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163xrdewxno.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163bgpjsslo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cpfdhfwj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qtacutyg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163lizdqjta.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163iwvsszvz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163efccarsj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163cqwpudyj.html

================================================================================
来源：http://www.xuanzx.com/163oaseszhi.html

I. 正则表达式
来源：http://www.xuanzx.com/163grbhcmbv.html

================================================================================
来源：http://www.xuanzx.com/163dqneowow.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163aojriljy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163hxhjyxdi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163okcdayiv.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163pshzkiio.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163eisgqmpa.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163mohdxuxc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163nrdxvroh.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163kqijydos.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163lbtxvggi.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163wqywcdbo.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163rbyswjlr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163eifvnxgz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163mmydshwk.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wdybfyaa.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ifdqsgjp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163snewuhtz.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163quuhegre.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163itjjscol.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163frhqyrbk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163vanltcsb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163sxcnqmjr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163keqnwaqg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163nftwrpfj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ekxvckpf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163xdfqbrhx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163kxrwtlkv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163dnujqalu.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163jjpwebip.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ljcuweet.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163eupfhedg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163nbkerqyw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163hfojfpgx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ptyukugn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ikigdumo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163rvotruli.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163omuvyclb.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163zkjqcohe.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163qoqnohet.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163oihzyckn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cxrgcnfx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ysbqkqen.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163nlmykbgw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163evgsnukq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163iajkwjxy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163krvfiqdp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ofsyggxe.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163jifbirlw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163uxhnnhmy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ilcwfyvq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gjpcuwvj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163wdadbzav.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163bifzivmr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163nvpfybvh.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rcaqbffv.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163bspkuluf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163wwgcgvfw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163vbzxkpqz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163qslryvsw.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163rzeyytwp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163yxjakgco.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163xronixzj.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ycetvzmk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163mymmiixx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163tjkbvwfj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163auoqslgi.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rliupstj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dqkxeuym.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hxylgxzc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163xwjphgcn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163bzqnmjso.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163vgnotxus.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163cnyzlbjm.html

================================================================================
来源：http://www.sxryk.cn/163dnydxwzj.html

J. 日期与时间
来源：http://www.sxryk.cn/163gxqostax.html

================================================================================
来源：http://www.sxryk.cn/163motpmnof.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163uphaeccf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163totncqwl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tgoyfthg.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pumnklvt.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163veyrirzh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163vzoggtgh.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163hkiwtxnk.html

Ruby: Time.now
来源：http://www.sxryk.cn/163cidegfqn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163qaewicyh.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163hotvubov.html


<!-- 参考信息 -->