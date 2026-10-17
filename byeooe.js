外链999!wailian999！

Ruby: @name = "x"
来源：http://www.sxryk.cn/163fgjbnlls.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163cnfsqtec.html

[G04] 定义方法
来源：http://www.xuanzx.com/163pazxypqc.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163accmfsxr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vlouaehe.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163epqlnhtf.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163iiwhbitq.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163zwgdsplr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163evpixdwa.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163dqhqatft.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163igwmsddi.html

[G05] 继承
来源：http://www.xuanzx.com/163copqrbmd.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163mobnzqgk.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wtzwbnfp.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163cngesypt.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163okelrmhe.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163nyehkdyd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163znoxmlpl.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163yfbrskso.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ldxnqvna.html

[G06] 重写方法
来源：http://www.sxryk.cn/163qtxgjplb.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163wkyvmfdq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bqupizdm.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163pppkmcoj.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mlkimxae.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163viaxfijm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163jivjmqxz.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163emymxwvs.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163nbtrmktu.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163qqjbrcwh.html

Py:   super().greet()
来源：http://www.sxryk.cn/163dkixfmyi.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163redjgrng.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163dmfcpect.html

TS:   super.greet();
来源：http://www.xuanzx.com/163fifmdeic.html

Java: super.greet();
来源：http://www.aibaodan.cn/163atthvkrb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163dbuhgdky.html

Ruby: super
来源：http://www.xuanzx.com/163promaypk.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163wxlqqesy.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163igbtuzpa.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163nfzecgok.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163jeykalqn.html

JS:   static f() {}
来源：http://www.xuanzx.com/163xbtetyny.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163fgjgupfd.html

Java: static void f() {}
来源：http://www.xuanzx.com/163xxzbagel.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163tofvdonx.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163zuyhdquw.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163aanswskf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163fidqwekt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163pkkpksev.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163fraqyqnd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163fwoybmxz.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163vybavdsg.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163lcohdtgq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163dbnlymno.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163gyvaqxnz.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163erfzbhnp.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163glpkzste.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ilfbheka.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163lfkpbqlp.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163odzmgnag.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163zdgyxoml.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163jrzpmgwz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vtbhxjml.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163efknptzn.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163yyxcnkrp.html

[G11] getter / setter
来源：http://www.xuanzx.com/163xdvzqfex.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163nnzqaspa.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163cbyokztf.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163kwonpjch.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ewwimtpl.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163fbnsbofh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163rpbvnady.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163vyiwmcwa.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163mhnmaiiz.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163lsizpjzv.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163aunuewej.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163fajacetj.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163aepsqrvd.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163qvsjpgne.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163xwqabqsc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163tpfuslyu.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163hzkhamhe.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163bqrhvsuv.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163nojqfnwm.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163hhkwxeoh.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163kdnmeipz.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ffkxtkst.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163vxbtxevg.html

Java: u instanceof User
来源：http://www.xuanzx.com/163xgjdyysa.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qekmfvoe.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163bnnffnpx.html

C#:   u is User
来源：http://www.sxryk.cn/163zamgjycq.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163cctqcwqv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163mhddyoix.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163xangwtol.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ipzruyth.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ilvuhbry.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163xuvhcoca.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163zqulaend.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163pctqfizj.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163oksyhgvg.html

[G15] 枚举
来源：http://www.sxryk.cn/163yccgdxjv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163mkqtenvx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163lfhhftdk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163yhynrpfy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cxwyelsm.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163sdbkvzgv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163bniqilfn.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ulmtiyzz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hbuxmcov.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163jfeklpuh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163hctsqvbd.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163rvarvynt.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163yzrmgyfy.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lrikmsbv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163znectfkl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163jhmactwl.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163wxuexpqb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163iumgmbek.html

================================================================================
来源：http://www.xuanzx.com/163fmyqbbmh.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163tjbucyou.html

================================================================================
来源：http://www.sxryk.cn/163eirorzyd.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163lpocwsnj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163oqocwaht.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163emaxhiiu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163yvrlpcjo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163xrcfhvhp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163lvowjysw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jrzezfte.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163gualmhxf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163dtozwxaz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163gnpaavgf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163zclpfdyx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163msbudmlo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pgxlngxc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bzlukxoa.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jmauandw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163mlbiddjv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163scprocgi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163dphoetph.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ypgetuev.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163fduqzltq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163wnfbhbjl.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lynxkwlp.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163etuoemld.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163teekshwi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163litijykv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163mopdjtoz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xmwnnemy.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163hbfisxlx.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163alaqgjqm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163vaegiaqo.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163dxnxbyhc.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xeeqwtlz.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163okdeczld.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163jgigjypd.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163kokdrxhi.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163mpiavkvg.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163gvhdjfdm.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163rmhswylt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163pzxohyev.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163buhftcct.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ytwwqxhh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163frxappgg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163kmfhlrup.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ibzeidfw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163nayuwxqu.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163lktbgpfg.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163lotqohee.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163dtczgxlr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vaxronga.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163uijkocdo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163dlgmhskq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163qbvpkgft.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163xfgzhogz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163pcsqduxi.html

[H07] 断言
来源：http://www.sxryk.cn/163gieqpjqd.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163odmruvti.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163zygcjets.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163cngodahl.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kbzfbvfx.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163pbllawbv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ciaeiwtl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ttlizkjl.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163wmmwdxom.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163tdtwbrrw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163pgthlvgb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163csgseexf.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163kddwlios.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163wmxtfnyr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163nvoevycg.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163uwlzfndo.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163bnessixr.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163rfydcmzc.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163kpkolqjq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163absazxta.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163fucpmljd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163jaxjgdjc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163phopsmjq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163naelodfr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163iihtuzck.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163dfdvlkgc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163nifcylkl.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163csgylnke.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163mhjsqufh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163pyutnsyy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lgktuczo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163htmpvpij.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163zyldwsyn.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163xbkeqiqy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163paupcmlm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163vndklcgu.html

================================================================================
来源：http://www.xuanzx.com/163kjxgkhvf.html

I. 正则表达式
来源：http://www.aibaodan.cn/163pbcbdcsd.html

================================================================================
来源：http://www.sxryk.cn/163epzpkblt.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163nqtrajhs.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xsjixqlw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163vkpakdjl.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163pnpzkbuv.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fyofzpqw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163zoioacfo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163wbemhddi.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ovgbnhdv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ijndbwrc.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163qtymuhyq.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163mtxlsgvv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163bsymhukg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163puctsckv.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163wmzzdrlo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163dtgryapa.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163bhrjjcbc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163mawplbep.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163smqtobzv.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163swuwvxic.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163naynpyov.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163hkmudixo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ncyfuoek.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163rnivsqep.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163phfbnxzc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163qdigtqoc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163cnjtffat.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163nxgruqyn.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ejhxjywd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ekponhmy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163synbwqtf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ajltdfeq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163uyqlgfrg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163txlvzvgc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163chhzavzu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163eootmmsy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163nidxobta.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xuiptvfj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163fdbmvmxb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163rmqjqrcf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ublophvi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163szinrfox.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ikgijzji.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163loosysbo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yjzugkjp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163tstjgwzk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163oqaldzev.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ldqdllsp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ayhwqorz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163znkjuoet.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163iddwbisc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163iaqsjddj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163xzgzxqgq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163puwsrrni.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gsjatlui.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163hzyfaaiy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163clchzscq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163bmyvijyd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163soitrkvl.html

TS:   /error/gim
来源：http://www.sxryk.cn/163vzgxbruj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163fnmxdfrr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163jnokcijm.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163nfdvzvnz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163wkgjggps.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163dcajlnoh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163cjpalajw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ovubaqea.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dadrfiht.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wmnwylik.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163mkjfwyjo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163nmozhbmu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163qrfjikxg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163lrjjnebf.html

================================================================================
来源：http://www.aibaodan.cn/163jetvbgyn.html

J. 日期与时间
来源：http://www.sxryk.cn/163oenrvhiu.html

================================================================================
来源：http://www.aibaodan.cn/163bbcykvif.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ldjcbebt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163fcvmtiss.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163poekhsof.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ofsytzew.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gbcfzbfb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163trwqbyqf.html

Go:   time.Now()
来源：http://www.xuanzx.com/163cmejsqfu.html

Ruby: Time.now
来源：http://www.sxryk.cn/163lujpazqe.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163quoiuyfd.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163eqbxoing.html


<!-- 参考信息 -->