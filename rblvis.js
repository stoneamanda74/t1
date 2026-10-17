外链999!wailian999！

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163jmtrbbsu.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ttnijdpx.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163trbricai.html

[G05] 继承
来源：http://www.aibaodan.cn/163rostfhai.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163vuzeoiju.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163lbwgkalk.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163tbfspsvs.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163aqdotqhu.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163kajymyzl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163hhjkomhw.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163vvmisgzf.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163bzzidewm.html

[G06] 重写方法
来源：http://www.xuanzx.com/163yqtnathr.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163gjuhsgcc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ioibssya.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zpidqwwt.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wdkglqfs.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ydrtkpfv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163qovnpgsr.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163gsaovwgq.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163bxjskalv.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163rcisajcn.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163hanbkawh.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xaotelfq.html

JS:   super.greet();
来源：http://www.sxryk.cn/163zeukovha.html

TS:   super.greet();
来源：http://www.xuanzx.com/163aontryua.html

Java: super.greet();
来源：http://www.sxryk.cn/163vjpzfigr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163xezzqhwz.html

Ruby: super
来源：http://www.xuanzx.com/163nzxvcufi.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163joxnyyyh.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163twghiihm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ditzophr.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ewqgpume.html

JS:   static f() {}
来源：http://www.xuanzx.com/163drxiillj.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163amwgabta.html

Java: static void f() {}
来源：http://www.sxryk.cn/163tvcdgsld.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163eurozvpy.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163egywkusw.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163lnrjultz.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ggruslpc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163bfrwsfbg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163gopudidf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163mabupsem.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ljdtpxqv.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163hmponwqn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163flkdyucf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163vazxwiwq.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163uydvoubq.html

[G10] 访问控制
来源：http://www.xuanzx.com/163iabmisuu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163tjabztti.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zzfxguqw.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163hlhjfdlo.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163kjotsmfi.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163wrfitwat.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163podzuuuz.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163xljqsdvj.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ldfevicb.html

[G11] getter / setter
来源：http://www.xuanzx.com/163avpcszwq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163tyjbxciw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163dorswubn.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163emlugqiu.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163yuzuubyn.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ogqnnpgp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163zpnfxcxa.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163wnfzwrai.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163igzfrauf.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163idtfguig.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163oosbkfbn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163brfdcgwg.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163coyhbvic.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163wbmcmvcf.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163srwawjcw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163jrcncjlk.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163umkasvec.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163udukgqqr.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163fevxtnjz.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163rxxjxoel.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163fbjfpzpd.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163dbnnrate.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163mjbgkckp.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ghqagboj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163omsqbfnk.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163icmgvhlj.html

C#:   u is User
来源：http://www.xuanzx.com/163mptykuwg.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163wftjcaqr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163nefnllbz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163utfjxfod.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163htriyavm.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163drejguqt.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163brvvuwdh.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163aamokeua.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163mzmlkwca.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163oyndesma.html

[G15] 枚举
来源：http://www.xuanzx.com/163blknxazy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163fmgudydk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ttnzkbvo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163mrlwfotv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vtkkapys.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163eqnsfjns.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163vzrcftym.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163grptcjzm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tfkcmwal.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163rbventiq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163tuvbeezt.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163nnbqcjve.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ekehvuxy.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ognluqvo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163keemywtp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163brbovsue.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163evclvdrp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163afisxglt.html

================================================================================
来源：http://www.aibaodan.cn/163purzkoqh.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163tnecdscl.html

================================================================================
来源：http://www.sxryk.cn/163uymfuycy.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163dtzweaaf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ldzjsqpt.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163jwpscadu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163epmmysod.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163pysgamkd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163skzlwfrf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163lmcxyumc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ixgdoifc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ccuxujwl.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163qbiusjkf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163bnqpuxoz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163unrpqhuh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ichotcqz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ahpgffkq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hcbbzdrq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163betnjezd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163cwialcxq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ryfcazke.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163vyihcchx.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163uzpypkjn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pgfoafit.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163iqsucrla.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163sdmtdwkr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163hnfhcqvk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163cjwqbefm.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163gdmaqnfj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163pxqfmeoe.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ndwcjfvf.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163epbnmfmr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163tfjtgazm.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pescahsr.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tpcxbywt.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163sjzzqygs.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163lwjwhmtr.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163fvoxxnvc.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163qzxuliji.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163mqechuiv.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163fqepyczn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163twktaesj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qkedxkuj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qfjqeqei.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163divvlveq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163wfwrmzvo.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163cjjcrzse.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163mupuidks.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163mzchyiga.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qsayaubk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163zatcmreq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163bedxuutb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jbqlvtoe.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163xkdffgli.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163pjfyxrur.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163xlrykvqf.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163mjszyzjd.html

[H07] 断言
来源：http://www.aibaodan.cn/163hcwciqmc.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163bxgnvqsw.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163esycfltq.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ameqetxu.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163akulzbgv.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163rdmvgmnq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163eumdthli.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163bzgfltwg.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ultvtvhy.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163xrjiynnn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163zleoysvy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ojhprguv.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163bxggynyy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163yzouqzqf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163atpsufex.html

Go:   err.Error()
来源：http://www.xuanzx.com/163jzkhedfa.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163bguclxut.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163svvhbdbd.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163naloggqt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163guiyomzn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163zgtgsznn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163myozdrsf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163qnwjcvaf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163plwhxsbw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163axlcgyft.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163fscunncc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163sbzphcav.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163zwrrktoj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163wcrfbztp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163zsmikuih.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163farkflgs.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tpoqlpgq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163sisikune.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163wwxttiaf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163wsxiinfz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163gltpqnxu.html

================================================================================
来源：http://www.xuanzx.com/163enuljqme.html

I. 正则表达式
来源：http://www.xuanzx.com/163sqllwwzk.html

================================================================================
来源：http://www.aibaodan.cn/163yqwbwihu.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163csrubnvo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163xhfzmarq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163vcsaagvg.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163mykxvbdg.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163opogqvqc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163xsytlqct.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163tdctjvrd.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163uoyzwjcb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163hawgfuwb.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163wxppyopo.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163cfxazcuu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ztzbmbql.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163hacuqtuh.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ahdwpovi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163imzklxvj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ffgoeyia.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163etnelkly.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163pnzhiqae.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163hhlzaqxa.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163sgidqkab.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163bcehncbl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163cwitobot.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ettomnak.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163smnsuulj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163xjwffzbq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163docedtzo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ckqznesv.html

[I04] 正则替换
来源：http://www.xuanzx.com/163tmkgmhqp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163pjpuscat.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163alnhdnwq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163kcmxwgsn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163szwslech.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163htqogulv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163wydqgsam.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163tgryitiq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163aefaidde.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163bsgjnwuq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163wbxiawyv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163zlmnonym.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163uabusebh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163netgqjcn.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163mkmrupns.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163zpjhnlmi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163whppxqmd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163odkqokwk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163nhskckga.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qhamxiqd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163kyjdckxo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ttwnqkog.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163hvoaztwu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163flkwfirw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163pthumfnr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163cgebblvl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ytszvxfj.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163izzoigwn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ubhglbna.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163bbvnmkvf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163baxbqrjk.html

TS:   /error/gim
来源：http://www.xuanzx.com/163bcqwtakd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163qwvxcbuw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ishobetd.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163mvkpqfmu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163oimzltkm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163sjnxygne.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163xvvaccpo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163lsmzxihm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ztgzhfra.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nsrgdqig.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163yexyukzu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163oijojcfo.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163lgmmhxkv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163btsnpore.html

================================================================================
来源：http://www.xuanzx.com/163dnuopcmu.html

J. 日期与时间
来源：http://www.xuanzx.com/163bbtbiofh.html

================================================================================
来源：http://www.xuanzx.com/163sfhfuuhu.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163cjfmzsgj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ismvcacb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jreqchgo.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hezlyluf.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cshvbytg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163vyhlogvu.html

Go:   time.Now()
来源：http://www.sxryk.cn/163hqyeiqfu.html

Ruby: Time.now
来源：http://www.sxryk.cn/163yzjjdkjx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163onpdewei.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163gzdmelwn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zkbcpdsd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kfsgecnp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163wxgljxiw.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163dlzqnpzw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163lhaptfax.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163iwwrqche.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jecpqjhw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163pwdqutxj.html


<!-- 参考信息 -->