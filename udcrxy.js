外链999!wailian999！

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163jkporhup.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163upfrlouk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vpeqzvqs.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ldwqddxz.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163pmkvjltx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163xtfwewlq.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163laaqfrlw.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163zkvxuvur.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163giqkxkqi.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163znmgewkx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163aivqukmt.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cqcuunjq.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163veautcvw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163jsbndstb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163azbuvdvk.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163jmabihdw.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ewerqvfi.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163bjmcpttb.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163cplvpawl.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163irxydorp.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ewdhwrdj.html

TS:   super.greet();
来源：http://www.xuanzx.com/163dtpwqvlm.html

Java: super.greet();
来源：http://www.xuanzx.com/163mhjtgicf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163tyyjauph.html

Ruby: super
来源：http://www.aibaodan.cn/163dzynhsze.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163kcquxkin.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163umacmwyv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163jwhglosl.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ypdwyxeh.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163azghdvpk.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163nbgqarxl.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163oswlyouz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163estazync.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ujphspaz.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163mlpmoqcy.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163sosisebj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163xweuwxcj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163pkgpwarb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163pjbmxwzj.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163kxnmoufv.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163drmifame.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163dgeslkmv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163bhjoqbwv.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163vrdjukym.html

[G10] 访问控制
来源：http://www.sxryk.cn/163cbmibtao.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163gobxhujh.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163zcrorree.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163nrntnhqw.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163nebefvhs.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163iwfjbubm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163zadlellq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163aefrksax.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163rsfazksl.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163siscwbzo.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163oduzinww.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163sysvkksh.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163klellrwx.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163sdunpxjm.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163xeruvzks.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163mukhhnnt.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163phclaukr.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163zxhjtqlg.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163vesnaays.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ksrxfuhm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163cktgrxtg.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163wwbccxcb.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163gnrmgeoh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163lbxlgjir.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163pautecam.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163jijxgtwq.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163sxakfhzq.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163lguzfbjx.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163lobappxk.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163agylvnir.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163tumnzyln.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163lxrwdezq.html

Java: u instanceof User
来源：http://www.sxryk.cn/163sildcaic.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163fbfrbavm.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163cmmysfwn.html

C#:   u is User
来源：http://www.sxryk.cn/163wuousbpz.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163porvyqlq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163mrkgatvw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163vlyufpze.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163kcfjagmj.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163jvsjnxuh.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163wejcwqsg.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163sweuozir.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163flhvgsmm.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163jkihkpxp.html

[G15] 枚举
来源：http://www.xuanzx.com/163fnmbrvor.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163dsnsxbrw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163qpnwlkdr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163vvvmoxep.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zaolnumt.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163gxymlxrv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163debdtcyv.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163lsfokeax.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163rwysdyuy.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163cxftznge.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fetlmblr.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163cokszvuq.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163itrepazv.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lyfjybbo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163qtnddudu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163yipjsvid.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163rosbsrpw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163mizdkibl.html

================================================================================
来源：http://www.sxryk.cn/163fpputrhp.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163jeespemw.html

================================================================================
来源：http://www.aibaodan.cn/163qvqwubgx.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163mqtaatkb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163wsquyacv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163bqrwkgij.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pdgijowz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163dxolvhwd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163xukvfogr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163viaeyxbt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163cwevqaik.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163xtcaafxk.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163frqegcwe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163bogubddd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qreubfnb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163slycxwvv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ziclspvy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ftfxmlsf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163zocwggbw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163kztghrfu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ntjohlnc.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163paoftvby.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163sjrjmdfu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ccauokpf.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163uwibkdmq.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zkqcmzxq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gwdclood.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163zkuuiuuj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163sodgryki.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163cgbzdiez.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163myosoydv.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163mxftllje.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163hotojiqg.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163bvxaibbk.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163lrzuisvd.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163xakrwzns.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163tkvmvzto.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163mkfjzogq.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163yyjpgnwb.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163mekrfrbq.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163rdssfyza.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ijzxrmef.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163nirbuzaz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zejdypss.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163vvgwvdcj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163kxpscfpt.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163catqkzxu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ggglewrq.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163dhpennax.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163yaugtppi.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163tcqrttur.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163dgvcikbw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lnhfwnqz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163mbltbcdv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163vixnzasc.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163zqppesgt.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163eshyvebm.html

[H07] 断言
来源：http://www.xuanzx.com/163birrdcya.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163uvxihyzh.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163aflczter.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jundcioe.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lespkmxy.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163qjdnkyfx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163cehgjdxe.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163nrbmwlon.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163etlwozdl.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ofebevfl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163aaygqlya.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163odxpdntm.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163qgfpkgpz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163jwgnxkll.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163wwggrlym.html

Go:   err.Error()
来源：http://www.sxryk.cn/163qlhtmemc.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163viysssjy.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163jkmnvdxo.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163dyhqlymh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163rwwbirmt.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163mxhjwdew.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163aljskqnl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163kumtmntc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163dslayimq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163fchlwtbq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163mkjwosrj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ztfpaztr.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ptlrlwwi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163mnwghhgk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163yegvgfbr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163soglgqlj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163nwjwgjrh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163umheqcyv.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163hmvfbjqw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163gfmsqbgv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163hluleikq.html

================================================================================
来源：http://www.aibaodan.cn/163evlnvbfq.html

I. 正则表达式
来源：http://www.xuanzx.com/163hcckejtq.html

================================================================================
来源：http://www.aibaodan.cn/163nwfgakvv.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163shlqvtmj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163oujsoalb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163tdtkaoku.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163oknsexyv.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163cnodfqmh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163bkuswimw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163vijgjgkm.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163manguwed.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163okgvtfrh.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163htlsjdfe.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ureqymjg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163cjfljktj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ohiqjghj.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ejemyxje.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163kahiphwy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ymceawut.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163rtjhaccb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163wkfmckgp.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163jnumykti.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163orbnzqhd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163afoscnkx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163vygiwvhz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vnqlbyji.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163yuzkxyyt.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163fhijwmck.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163svzesxwl.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163nsyfgfls.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163fghtmtxh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163hyqnymvs.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163vsebycfu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ovrlekuv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163iachmjdg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163dlvyuaqp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163tpywwlnt.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163moiodzwy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163mhcizdch.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163rsgvezxi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163fmeqluem.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163jdjvunig.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dotdjavh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ukignnzo.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163chdlazjt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163jqsruhhl.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163sdgkctjp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163jlfptnbw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163tllopkfh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163hcaijfuh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163fjeniihd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163gylgsrfp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rocmwhan.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163emsiqmmu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163fycbtzxc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163hibloodc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xlqkhqvm.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163slzjftii.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ejgdocul.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163fuxocwvs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163nbcublhl.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163qnqolsqv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163lltrxsng.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163relmtkce.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163kvtffbqu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163hffbfwqj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163kiqqjxqk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163rnsdtvhs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ghlkxcbd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fpemqoww.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163njdbkjot.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163gljwujic.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163urqqfzhg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163lochgteb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163bwyxxrch.html

================================================================================
来源：http://www.xuanzx.com/163yzknrtlm.html

J. 日期与时间
来源：http://www.xuanzx.com/163zfornejk.html

================================================================================
来源：http://www.xuanzx.com/163zvakusgq.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163btnzqocb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ugrmzjvy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ujyqmrro.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bakycsmz.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163liqkeaar.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ltuoajby.html

Go:   time.Now()
来源：http://www.xuanzx.com/163vdnaajqo.html

Ruby: Time.now
来源：http://www.xuanzx.com/163dkuddjiz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163stqmayml.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163slmyyrde.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ntwcdfgj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163fundxvas.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163lidgfkns.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163bvmkbhqt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163xuuolcjj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163tedefrst.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pwpjwqyy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163frlcvqfw.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163gpgrzxwy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163twfhvzzz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163shvwnigv.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kqriaqim.html


<!-- 参考信息 -->