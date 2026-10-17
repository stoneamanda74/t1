外链999!wailian999！

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163lrfveero.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163bxupnsfq.html

[G04] 定义方法
来源：http://www.sxryk.cn/163nmnpjrod.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163qmwsnlql.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163doohiuuc.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163pimiwqxd.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163lyelusms.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163hgqxzkke.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163gkixvpqg.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163zezxbdoo.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163jmixybdt.html

[G05] 继承
来源：http://www.sxryk.cn/163emakiuvt.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163urrzvkle.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163aqxwgyal.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xcebbppz.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rjivihov.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163zdxqmjde.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163yqskajqd.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ljcxmjuo.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163zjuwgfmb.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ztolfwhn.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163esxfqafn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163liaelupc.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zslcgxga.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zgmaedtu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ikeaplvg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163wqiidtps.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163wcfkcpbt.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163igswonyj.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163nyoluqqe.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163wbyjmugv.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163mydzdfrg.html

JS:   super.greet();
来源：http://www.xuanzx.com/163mgbcnzql.html

TS:   super.greet();
来源：http://www.xuanzx.com/163zfsnmpct.html

Java: super.greet();
来源：http://www.sxryk.cn/163zeptusnw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ixsbpgjj.html

Ruby: super
来源：http://www.sxryk.cn/163uyimmueb.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hxcndzgd.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163eitkzicv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163vtgubmti.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163oiumwruu.html

JS:   static f() {}
来源：http://www.xuanzx.com/163xesgbqhw.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163qoemfovb.html

Java: static void f() {}
来源：http://www.xuanzx.com/163cmspptjd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163miinchpt.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163dxyjhvyg.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163gatwvkfx.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163pndisiav.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163vpkrheml.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163bwtsxgat.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163gwcyzvsp.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163jjogchsf.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163mzrdawcs.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163bukxkvfx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163tmytyzzx.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163kjopttwr.html

[G10] 访问控制
来源：http://www.sxryk.cn/163dsnmxkyo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163sinjktet.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163jadfuxek.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163mnsuygam.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163pbfrcuva.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ruftlopi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163adbhamxe.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163dxehsudj.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163lhjteifo.html

[G11] getter / setter
来源：http://www.sxryk.cn/163zybgatrk.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163dlvmiruf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163jjosmzfx.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163bbfqrgob.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163eixyzpvb.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163xqcjsgnk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163agsjqakk.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163qjwftsws.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163lgknatsx.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ybsljzrp.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163frtfzdac.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163fagtzobl.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163urpmpsyo.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163dlyttljk.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ajgttehh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163hqlpataf.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163otlitrlf.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163mmjgicil.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163oeyzclww.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163vgjzpikc.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163appabvbj.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163jqeunqjy.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163leqozeqi.html

Java: u instanceof User
来源：http://www.sxryk.cn/163apewuabh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163rwuvmgec.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163uphdwcda.html

C#:   u is User
来源：http://www.aibaodan.cn/163ttuplgbx.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ogfajglm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163qkivxrbp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163gjmkgdsb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163uaukzunv.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163tdbuthtr.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163eaaovafv.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163yudarhbq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163tekwjmbp.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163rgjybidt.html

[G15] 枚举
来源：http://www.sxryk.cn/163uefbrvsx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163gkqnkhpo.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163vkeiyhex.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163orhibzqv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zrokokwd.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163rmxwvmvy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163sferuayu.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163dinrvxvj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xzjpijrj.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163clqyguop.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163dedqmwgn.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ueaekctz.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zrqvqtil.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hcbgaqfa.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163usgmmymw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163jkelpder.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ynuaylnl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163bpbotkem.html

================================================================================
来源：http://www.aibaodan.cn/163eevpfykr.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163uqgygrby.html

================================================================================
来源：http://www.aibaodan.cn/163jxlamjwy.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163vkzqhcxw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163dlrmoakw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163eyqvgdzk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163topqslrv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163vrwrtbik.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163fytzdtrz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jtsxhxhb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163yqmhyvxo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163xqmcsbaz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163iyytydci.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163aeuxizsv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xbpxuudn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163iriakszn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gfdcoxcj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ferjwnzt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163jgxvjdsw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ecpfcfzk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163kajzkqpj.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163xznnpjnq.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163elofhlcw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163jxnixlbm.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163spmqbhip.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jxvbrmlc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ivhovaht.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163tbiqedkc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ynamgzfr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163vqhpettp.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163xbopyswn.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163khvfkqbx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163vjdkyxvj.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hceehjvw.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tvrkoodi.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163nrzukqez.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163kkqlgfrp.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163cksxsfub.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163xdbagqlu.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163rndvqbiw.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163oknvpoit.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ganokvbt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163heeigkpg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163sityuwgh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163gpjtfeix.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163keemaolr.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163iszxfwng.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ocldobrm.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163lqfkgnai.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163zwyiixzo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163gluezona.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hvtrdbea.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163noxrzucj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163oavwzpxd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163abbmvlaa.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163qxmszykb.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163gpwepkjr.html

[H07] 断言
来源：http://www.sxryk.cn/163drrarwex.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163kvfhuhpc.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163onrngtkj.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ermytfqw.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jroiinhd.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163uzeghxge.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163oheudytt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163yjyilhhd.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163vpevdhpo.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163sineyydy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vvxtukhm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163rugnhvwb.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163mvlamldv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163gzppwnqv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163wzqiwgcb.html

Go:   err.Error()
来源：http://www.xuanzx.com/163udpennxj.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163xvmvsrkc.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163rgdlvznk.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163hpdvuznm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ibaqvpsx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163fwqqbzne.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163qzgexrdx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163fzqnochc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163rzvthrvz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163xxxqvnnl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163rsyyuoqx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ophjbndh.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163cuqbpmun.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163cqmmtxwq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163lfrcokop.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163usqyhmlc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wiudqpms.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163xrarktlm.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163dflafnos.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163dhvefffw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163pthibtry.html

================================================================================
来源：http://www.aibaodan.cn/163tylmsblu.html

I. 正则表达式
来源：http://www.sxryk.cn/163luprithe.html

================================================================================
来源：http://www.xuanzx.com/163cqoxcpij.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163vikbjdyn.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163popxvhdt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ecijjose.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ktthuwhk.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kbpmbvut.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163rcfvysst.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163qthaapuz.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163zqsgqfzl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ueviasil.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163bzonwhrw.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163hyhjrrtg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vboapyxw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163lpfaqbmu.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wcbrrqjz.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163onlnturx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163rrpvergw.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163lgdqsauz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163fgyvtykg.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163lstrsvsg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163mpszkcud.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163bcczjtau.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163hrdpqbzr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163gigomeau.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163gwjuhvun.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163cckiwtua.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ohtjtmzq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163phghzmzg.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163kudhcuvx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163tauwfcaj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163exfksxbv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163pgcnccao.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wifpchrj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wivfdivr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163wktmovtm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ljkwvvvc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163kayinnqd.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163idobjjlg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163yyaqtzio.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163qvbdkyoy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bfaimkks.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jlyfsijg.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163lxqslisv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163etkuvnid.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kngfcens.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163fwjgbhvf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163asjepgcs.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ziizzqes.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163dwvhklwo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163txyicume.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yxhfhmms.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163cbhrziif.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163qhiltqlo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163uekhdjzc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hjxqfbmw.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163cbabkqul.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ahqppsie.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163kjhriyaa.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163qocvcrhg.html

TS:   /error/gim
来源：http://www.sxryk.cn/163bcxuhblp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163rxwpadfb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163rnijpqks.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163egpcnjtn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163pnrdixlb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163fvjswjqx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163vfarhrwl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163yooxbczw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mpheduch.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dnzlxqdq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163qtkrekxj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163qhpxdghb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ucxjqklx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163vfycgkwl.html

================================================================================
来源：http://www.aibaodan.cn/163lvqkntfa.html

J. 日期与时间
来源：http://www.aibaodan.cn/163kaxrvcen.html

================================================================================
来源：http://www.xuanzx.com/163azvgoazo.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163mfimipde.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163gezmcqsk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kdeofote.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163awbqweje.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163amjraqqx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ehavoaii.html

Go:   time.Now()
来源：http://www.sxryk.cn/163kagdusec.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163faziquer.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163eqmzvmrw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163mmrymrll.html


<!-- 参考信息 -->