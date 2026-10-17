外链999!wailian999！

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163hzuexfpk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163qqqasqft.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vfblfchp.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163kqjtaviv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163vraslbhy.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163sotqtlpt.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163chvzgpwg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163opikbrtd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ciimxrzy.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163logfojqi.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163aznjxwqy.html

[G05] 继承
来源：http://www.aibaodan.cn/163khnrpxmc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163minfphdq.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163pcrrhtab.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163dlgaeaav.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163yivljnqd.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163uixxvrzk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163iriotmtb.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163rvoxlihm.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ixgyvxfs.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ayjoefqb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163mgendfsl.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mumohjyv.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163peatvouv.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zjruldav.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ciajtexb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163qjjygsof.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163weiwwzeh.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dtafyadp.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163jvidvynh.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163wtbepzdc.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163jbsdilll.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ytzxdbbx.html

TS:   super.greet();
来源：http://www.xuanzx.com/163bboxjrtc.html

Java: super.greet();
来源：http://www.aibaodan.cn/163msrrqlvn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163eqbtpsgg.html

Ruby: super
来源：http://www.sxryk.cn/163qniypiul.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163cfouqflu.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163exevihpk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163qhrcnzks.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163kkewyipx.html

JS:   static f() {}
来源：http://www.sxryk.cn/163qezlpaxr.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163cvkpnlim.html

Java: static void f() {}
来源：http://www.sxryk.cn/163wbnatebf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163efwuhdze.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163gnklgzej.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163dfnhnnil.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163vmkarmgu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163agvqgpvf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163cdvcdagr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163mtljhpys.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163uoglgfgo.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163hdbmnhlf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163zxrsfhxa.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163bcumvjog.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163itzskvll.html

[G10] 访问控制
来源：http://www.xuanzx.com/163eljrxftl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163vbnwuaat.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163hibsvlsh.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163jvjqgdag.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163zleyekoe.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163vtfmmdah.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163nlyyncea.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163sofijgia.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163cdrgnkaj.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163aammqmgy.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163xfxvcdtt.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163istsyoba.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163yduxwlao.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163toexbpfs.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163qtytravm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163cxmfyvwk.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xowdmgkx.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163mrtgrjlx.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163funfowap.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163oralkzne.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ntzlgqlh.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163vedpouwa.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ttpkvluc.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ostpypca.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163allqgxrk.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163nabusgzm.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163takvdzav.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163jgnfikld.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163dshogcfk.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163cedaaeqx.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163kcfzgfnk.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163yznzcqak.html

Java: u instanceof User
来源：http://www.xuanzx.com/163jjgmehij.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163axgthijt.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163hjkxrqpu.html

C#:   u is User
来源：http://www.xuanzx.com/163cbupvcgb.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163aaylurck.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163wanmifos.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163rdbzcgux.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163hnchavui.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163pnwwogup.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bepagsao.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163mzblwbsq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163phtcdlvd.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ggwmfnud.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ewjatlxx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hwfyyzcc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163agnekhud.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163mgkbsyfk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zswmhaib.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163eudkzagr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163vmouvgnf.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ytucgrcv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ugalhscn.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163xgllhpxt.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163bfhcikwb.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163nrpnroql.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wfjqpdys.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rrtfiwhm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163cmcddnsw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163yfxldzkf.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163cqfxavtx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163outjfnet.html

================================================================================
来源：http://www.aibaodan.cn/163ddlpvbhd.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163mrisbphw.html

================================================================================
来源：http://www.xuanzx.com/163rymqyqnx.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163sfylsjnt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163kdpxmvte.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163hgqvrkmf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163yjmvezgn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163obqakxze.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163bsodhwcq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163hrkryyrf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ohmwskfd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163hudtoanp.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163pthixhhe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163jalcybkw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dyufhjbw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pdyekzdw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vggjglqj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nagtaqew.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163cjetdaar.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163xqlzstvx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163zwqknzim.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163cmjcjngq.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163uftdeqnw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ncbekhnu.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163noxqrlcb.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163hnoecjwa.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163fygmhmhx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163gvapxnsb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163xwkccjwd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163zmlcshlh.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163hgjjpkjp.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163pdboymsh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163jcxxmylk.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163lesqsxkn.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163readqvpe.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163hiebgvbp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163linrboei.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hddebfcv.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163lfsquzck.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163oircibwo.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163fofvwsbi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163dxwsieci.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qcoaqtbn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ptcjfkcn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ugbozdke.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163jexluosc.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163vurymyts.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163qbkbprek.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ftlxsxzf.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ixpkafqu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163nvobmpwb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zlarhosx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163elplwnrv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163fwuybwnj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163hidorrbm.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163skekrfjf.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163inednadc.html

[H07] 断言
来源：http://www.xuanzx.com/163qmuvoymq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163xqbapaqq.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163kujnjjck.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163tlsqiuud.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fhjbwuee.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163gbprjzzh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163jgfwnzee.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163psfogvdg.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163zrzbyumr.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163alkmnedn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163olrwjgxa.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163fceulvhi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163wjrntumm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163buuvxmxn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163agjjziqd.html

Go:   err.Error()
来源：http://www.sxryk.cn/163czezsmtb.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163kxdorsic.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163lenzfgea.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163kdomnaau.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163rviktsxf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163rhritwtw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163aahctvar.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163bdtycriz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163pmytthfq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ftawbyvv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jjcmgyfm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163mogbndye.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163vusxotxq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163sujnkeyd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163oynfnrfr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bmuvfxjl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wkgzdlse.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163suhftdyx.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163lexfltuf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163irlnothz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fyilqozx.html

================================================================================
来源：http://www.sxryk.cn/163ruueydpq.html

I. 正则表达式
来源：http://www.sxryk.cn/163njejqasx.html

================================================================================
来源：http://www.aibaodan.cn/163vbuyraiq.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163rupqzbbd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163qjrvfhcx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163isynzmef.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163pwhsgrvz.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nefqvtoi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163iladsxrn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163rgesonlr.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ivbqkswc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163umbwgvvl.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163rdlyqjgv.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163vlajmzgh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163okikopmp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163dsyptsjj.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163oyplrzpg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163tzfmkpaj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ybblnqvc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163furkhukv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163bljyxsix.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163sdzkspou.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163jshcbuyr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163nfbqzljl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ziecgfrb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163uiwbtksu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163tfafmdzc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163fxzhnggt.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163cpkxkodc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163yqnycixs.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163kbkabkkr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163qcpidohe.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mqhiuvtz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ievsbphe.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163uvlnmlsn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163jgfaxcnq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163uznmincn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163lcifjuss.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163zdkghuel.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163xbnpneze.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163nchwdaub.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163zkxoiozk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tufuszym.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fepawcpu.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163kcjbyghr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163szeuiojs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qxaisfet.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163knazfzyc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163nltfdhpy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vweyniwg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163unuwrniy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163esfnlhtr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ymbjpfpy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163prkufyyo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163nopjgubt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163rymhrwle.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163gebkehau.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163xqmwkghc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163nvrveyah.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ybljtmtd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163bpogfxyb.html

TS:   /error/gim
来源：http://www.xuanzx.com/163aqybedib.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163rqksrwla.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163pfrnftbo.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163oikbyrfo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163jdsvxoym.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163nzezkmom.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163fytgwwjd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ttsrtpru.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163uohiddtu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163lmxlbixy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163uvysxyox.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163smunddwi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163mxxnjupj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163tykexwna.html

================================================================================
来源：http://www.aibaodan.cn/163fpkkvhzf.html

J. 日期与时间
来源：http://www.sxryk.cn/163bgkixcqm.html

================================================================================
来源：http://www.sxryk.cn/163qhkxlolm.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163kzegynss.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163dgazpgbn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163porzskjj.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vqrnzgcu.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ktlozuue.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163zhkzyizr.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ciopxqrx.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163drmpnphp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163mrpwutvj.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163xkqbufue.html


<!-- 参考信息 -->