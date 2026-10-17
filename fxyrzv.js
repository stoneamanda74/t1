外链999!wailian999！

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163nlpkylij.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163scrffxcx.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163opmzuhmk.html

[G05] 继承
来源：http://www.sxryk.cn/163yjlwaujt.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163tsgyiuos.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163airukgob.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163aiufxpgd.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163sszklrtn.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163zrlclwjk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163jgvtgkoa.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163jjhqlmlm.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163yutfaohg.html

[G06] 重写方法
来源：http://www.xuanzx.com/163vuuaupmm.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ocaonhdk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163lwmuoaob.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163xiifmfov.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vpevqcjt.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163edgrqgqh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163lssvbnhz.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163muzrdkan.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163bxdcalpi.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ddnovdot.html

Py:   super().greet()
来源：http://www.xuanzx.com/163rexcukjy.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163uivygito.html

JS:   super.greet();
来源：http://www.sxryk.cn/163yvxxdncs.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163rkzbidaw.html

Java: super.greet();
来源：http://www.sxryk.cn/163rwpabklh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ilrdywyr.html

Ruby: super
来源：http://www.xuanzx.com/163yxqerypp.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163kzbqwhkq.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163uytycjci.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163bsobwdzl.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163fedxrecl.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163zlsorcxd.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163upznworc.html

Java: static void f() {}
来源：http://www.sxryk.cn/163pwohmlyy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fbaiiyqy.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gscwgyuh.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163pprebhyv.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ftlpbmsb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163sdigjcsy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163rkuvuhor.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163seuisoqp.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163igsrluzr.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163tpfocmiu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163dutwcpng.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163htgtxfwg.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163tvdzrpbf.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163pbdwywau.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jbhlhozg.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163xchcvgzg.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163tbdkuprz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163dmkasdqj.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163foevjaqm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163iyeufpqg.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163vzdmnqit.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163pmtqywpd.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163cswkufan.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163vfgaxhgg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163kgdwfspp.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163lxhzpyhf.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ipqpzawk.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163jzfgmtkv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163zgljjusd.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163vmsbjrys.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ppngbgny.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163hrbptsrf.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163vkvvqles.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vmswhahr.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163mqscsgqq.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163nucckrhi.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163qhdeudsp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163yfcedaaw.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163mkpgjyxx.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163yxkxmlar.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163nccmubft.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163pbesomai.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163lmvqwrsl.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163suwgustl.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163tdefvmps.html

Java: u instanceof User
来源：http://www.xuanzx.com/163lgcgacbq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163sndbpuks.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163zqcklkcx.html

C#:   u is User
来源：http://www.xuanzx.com/163mrqoagpy.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163udmlnfox.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163xlzyoeal.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163cmhfjsev.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163bnktdozn.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163fsmhmcze.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163akgjyecs.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163goipxweu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163vnxsjxjg.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163yioldush.html

[G15] 枚举
来源：http://www.xuanzx.com/163chbblnlr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163piuqefbq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163jvwsvrxj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163tocgvlju.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tgxkfcpb.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163isqibuwe.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163rflthjhy.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163eujxzglj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xrduqcwt.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163fdsduwco.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163cyqwlelv.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ycknoiry.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fplszosf.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yyahgesf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163itvhycug.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163jwsthnrz.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163mxlbxpdj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163sxazoexx.html

================================================================================
来源：http://www.xuanzx.com/163xxfggjbr.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163orqmcvsi.html

================================================================================
来源：http://www.aibaodan.cn/163ayamgqwq.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163xkfjjqel.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163cjhzognd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163bglzrnmj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163irpklpps.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163wlohirzm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163bnebisya.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163kwcayymt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163qipbhmsp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163wyldwtmy.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ixjtevbm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163xlkqfwxq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nzxsuknn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163padjegxr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wdbbaaxh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wqcnfnwz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163oqznqzau.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163czwsavdn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163znviclnk.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163lsuggsnf.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163cmcsohdr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163rfdntoin.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163iwnjhjeh.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163pmzghpva.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163imidbsxh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163dgxbihgx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163pquobgme.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163yltyxfod.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163rouyhdwa.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163dlwssrvo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163tqllecbu.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163sxfwndvs.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163nmtpprzz.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xfvguwbz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163cfghmmlr.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163mwzsopxu.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163xznfezyb.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163mptaswtt.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163rovcnhqy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163hytckqoc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qhetjaxy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163hknfwbnn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ufhbgyif.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163owxernmx.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163dzfvcmwf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163tahzdbkm.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163bvmpvjqo.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163kfeafeur.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163oygfwvax.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163taqdpxez.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ouvgfwtl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163xccxicut.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163luzqohlu.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163vsmifxkx.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163arzhlzfk.html

[H07] 断言
来源：http://www.aibaodan.cn/163tbimqkgf.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163gccgwsyj.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163pofxkwgm.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163opmdumlu.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163cldmojtu.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163qsybppsb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163tgmxfuub.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163kheokziy.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163zutsaulr.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163woswxknu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163fydnpdch.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163gisbrosf.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163yuzjfgtd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163pwynaake.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163zldrajey.html

Go:   err.Error()
来源：http://www.sxryk.cn/163plqemgeq.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163jzgklsyu.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163vzhojmag.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163eitmyqfe.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163gimwffot.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163pikxdnaa.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163unvbdtwp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163imyehtxq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ywgxbqgi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163gfhytcdl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163jhoqzujd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163gqhzencc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ovehunex.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163jvmozvew.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163zunfjdpq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163saagoczs.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nlqfjvzx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163yjoirvfm.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163riazexrx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163zigbvpdl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163gsucrmgq.html

================================================================================
来源：http://www.sxryk.cn/163laviomfj.html

I. 正则表达式
来源：http://www.xuanzx.com/163tjkpolwf.html

================================================================================
来源：http://www.sxryk.cn/163obdeihun.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163vbiocmpy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163hvtagwlb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163sdepmhdw.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rowbxkzv.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jptypsoh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ichsuwvw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163dlwczccs.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163rxxeitdd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163xnckznve.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163qwysqnxz.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163hqzunhxp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163bgvhttaq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163wvgfaaic.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163dsosbopc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163pgcapdfi.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163lgzbvtgr.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163gtwhdvme.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163eopsdgsm.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163uhsqxgye.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163qcvpujhi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163sqqsqjta.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ykisgawq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163eyhbmcce.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163xnwnjvcf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163xqxebedi.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ahuszkkc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163swnrbdgq.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163pfmjernn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163vmvfsylr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rfzkmybz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163yksuloum.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163racfsrog.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163vdbjsrgl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163swrvlzjw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163mctuwzit.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163razynnzt.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163fcxotxoz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163qdmrdlfp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163gccczwvi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163datnbbyf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hhpjudyl.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163pfvqkwcx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163mzobwkyf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hdibqlqf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xqouauom.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163idspgwxr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163jkksipxh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163eklzexzg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gntyrrzp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163redocoii.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163vuiiqdsz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ujoxykba.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163jbvwzbqf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163drmtrvco.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163bygrirbf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163pvtpmvrq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163fstqoyns.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163xrnlmhoq.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163egjvyghe.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163hkseoklg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163qomchbtq.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163tyiqvrmt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163yvhbqbdm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163uklabdds.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ynpftjmt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163drdlvoxf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163asofgjwm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ijfuphmv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163duqedogi.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163uyqepmsg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163gkmplwbg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163cluarnbc.html

================================================================================
来源：http://www.aibaodan.cn/163epxnpavz.html

J. 日期与时间
来源：http://www.aibaodan.cn/163yfpphxin.html

================================================================================
来源：http://www.sxryk.cn/163vsxhcepn.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163bildplhu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163auybpoew.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163syraubqv.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163eaiiyixj.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163lswwacgn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163fwzjfaqh.html

Go:   time.Now()
来源：http://www.xuanzx.com/163umzezngy.html

Ruby: Time.now
来源：http://www.sxryk.cn/163jdljbktq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163hlfuuvgt.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163nobocrux.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cnwxxwof.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lzqiozde.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163iasjcpvs.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163nsluqqna.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163kaqeejwi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163aaearnbi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qxivrbog.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163kvmjhuve.html


<!-- 参考信息 -->