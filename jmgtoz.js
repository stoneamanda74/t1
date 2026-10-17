外链999!wailian999！

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ijyjlwkx.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163nscmzooq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163vllamagv.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163tmglyjjq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163litjimfg.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163jmaiditf.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163auscxlfh.html

[G05] 继承
来源：http://www.xuanzx.com/163inkhadiw.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163mnybekee.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ofdvisqd.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zegxyrxz.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pgnxiojj.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163sbbnojmj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163fwokrpln.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163iuzbokir.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163rekbxfjw.html

[G06] 重写方法
来源：http://www.xuanzx.com/163awofhdxc.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163tzkglslj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fqrjuetk.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163eggmgkcs.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jdrtleus.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163txojopsw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163blohqyee.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163jghrdiul.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163vxlwjliu.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163aeltzaqy.html

Py:   super().greet()
来源：http://www.sxryk.cn/163kjldqfvh.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163plsnqmny.html

JS:   super.greet();
来源：http://www.xuanzx.com/163kutouqbs.html

TS:   super.greet();
来源：http://www.sxryk.cn/163fgciqofa.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ujnoxdkw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163jtolxupe.html

Ruby: super
来源：http://www.aibaodan.cn/163xnldhfuh.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163vjavczzi.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163jcukuohf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163qpeundnb.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163xrkxghsp.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163imwupfjr.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163fhdytlci.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ipdnvwfw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163yfiyvbuo.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163tqebegje.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163uubqfqjr.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ztikadhy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163vbbauwho.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163bfshdndm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163emjxptlf.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163nnzoyowm.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163jdtxpavn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163przhewzc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163mdkxjdkb.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163bacxnbcn.html

[G10] 访问控制
来源：http://www.sxryk.cn/163lykrswnc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jsibdfiq.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163pkwidgus.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163hwjbbfst.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163aatcbmzz.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163suzintlb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163lvvmlclz.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163brybavsc.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163lkvykbww.html

[G11] getter / setter
来源：http://www.xuanzx.com/163yzhhzigs.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163oggwhhlm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163xanbkuwh.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ohlztdwk.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163jwduljpk.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163jqnycflv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163bztfscwm.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163bpepoggz.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163lfygtzio.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ymdnjrqx.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163xbjvyduc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163lykfqvwv.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163tlmpldba.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163hchsjtil.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ijqktfvb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163awxczqvf.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163iynrbqjq.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163pdvfwrqo.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163icvtqjmp.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163conzdogt.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163blemzgbm.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163dfakinwu.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163sgnbuoum.html

Java: u instanceof User
来源：http://www.xuanzx.com/163xtlliolr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163dnegqszm.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163hcitjqrb.html

C#:   u is User
来源：http://www.xuanzx.com/163bgtbahct.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163qtwnwaii.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163urczxzdy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163lfqbqfbk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163qzgsutpj.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163yifpgtxz.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163elnrvkwx.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ppdoiwnv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163potzoewt.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ukwyajrq.html

[G15] 枚举
来源：http://www.sxryk.cn/163igozxcwz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163kghfjkog.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163emjkdohi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163lhonlpnv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wjifkhgw.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163alxthbeo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163wogxlhag.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163mbsjmhqn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163weylfzmr.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163hrfsvevq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fwoizlyr.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163uesriwol.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163nbskvybo.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163nmuwclke.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163kphxmwsv.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163pzgohnbe.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163byxvkdtd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163tadhdgmo.html

================================================================================
来源：http://www.aibaodan.cn/163igjwdlzp.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163nfbnmopg.html

================================================================================
来源：http://www.aibaodan.cn/163muqoqpxo.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163rdpikxmz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163bzpyvabd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163nddjwsbd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163yalpawvd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163eeqhbypu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163yohxgdfk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163zqtlutua.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163sfmpzjth.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163hqwrokha.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163nexbkqni.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163oqjzgiub.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163epielmah.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ptwdngnw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cktbucxr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163abcvuait.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163cfyremxa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163uorebhdv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ovvtyxxj.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163npkwnorh.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163sfxeuqnf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163paexbxjs.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163vqhsgcrd.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tqfpqkxc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ijrrzgdd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163nvfsxkhj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ucqvxktg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nutizjlg.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163maezykmi.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163mduepcol.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ygxrnlki.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163mffrhgpb.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xrcksolc.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ypkfgjjx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163noogukep.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163yqmoyyxh.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ioqbgrbo.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163prigptrl.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163fbzrhcui.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163pkmmhgpg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jgpdgrbz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ktyjsgim.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zerkjwjb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163itycosqa.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163qhsermkg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163nyvvminn.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163dhaljhbp.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163sbgyegvh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163fynvlfkd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vqhomonx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163qdcomidc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163vrpqhppx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ctzmwiht.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163yjccnico.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163egkhwqzz.html

[H07] 断言
来源：http://www.sxryk.cn/163prjesrxe.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rwpglrwx.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163andmzomm.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cpajpzdl.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163owzsxrdx.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163kvxbddyd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163vqdjyskl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163bycmbbqu.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163neyscqzk.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163uiymfxgn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163jgjnkwyu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163idgyxixh.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163yqjqpoeh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163yscyghzc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163umugqkva.html

Go:   err.Error()
来源：http://www.sxryk.cn/163pjzhwjdx.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163eopxdqis.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163dwamkwbe.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163stfxdmio.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ygbnpvib.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163dnbwyrsp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163cdemgnie.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163kwiionrz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163knrvuxkq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ytsfysgq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163gpjqslep.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163aneutonf.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163soridtob.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ypkskmor.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ykfsymga.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163hanhicak.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163khfzucnt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163wxxkjghb.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163dxyevyku.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163dgvzlbmg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163qtegxthz.html

================================================================================
来源：http://www.xuanzx.com/163uqkcoboa.html

I. 正则表达式
来源：http://www.sxryk.cn/163umbqgaqk.html

================================================================================
来源：http://www.xuanzx.com/163duhbqqwh.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163hskpbamp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163mpkuyula.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163wuzdmeom.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163bnxnjhli.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xlvgvzwb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163dscmvpzw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163iuefawqi.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163nkohfupx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163rytbmkdm.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163axaempha.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ebmtdzxc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163afkismbo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163filkbhxu.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163kzqkofxm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163igbdwjkh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163kfipzbqz.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163gyxqymwb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163hntznlmu.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163jiertrzg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163cnpabryx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163fucxvnca.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163pyhelbbr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163rmksapvm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163yqryayzu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163uldzrphb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163zkdcrrih.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163zfpdxnjy.html

[I04] 正则替换
来源：http://www.sxryk.cn/163fqwyjinw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ixoqyacn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163hpdysebq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163iwmaqrej.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wszbgtef.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163yfdcgmiq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163fswcmkil.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ljzxenrd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163bafmgmma.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163zpzigtja.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163lckibqzv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163yvvdbujs.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wuniyele.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ltagpebo.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163frllxmcc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ksbdcomy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163epgitspa.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163psaldnxp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163trpdffgu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gfmajkus.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ungpzunt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163piwlsqmy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163uztusblj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163wrpvleho.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163dilpbrhl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163bsidffld.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163lwbittxl.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163lrebtklc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163gidzsgzn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ztaixqqz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163szizdggl.html

TS:   /error/gim
来源：http://www.xuanzx.com/163qdaoagas.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163bogewpbd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163pqdscxmh.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ziwdidbo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163zjmyujyh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163azaykhmw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163binoylbf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163dutfbcvm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163lnikbnqn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xxcvonxp.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163dvypkgos.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ghybxtju.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163buezafcg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ckfjpakf.html

================================================================================
来源：http://www.aibaodan.cn/163srhnemdk.html

J. 日期与时间
来源：http://www.xuanzx.com/163eghvboqs.html

================================================================================
来源：http://www.xuanzx.com/163rdefgjnc.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163tiocqbwr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163clvnblqd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163inpbieuv.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zmvrdskb.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wtnenyhr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163xludzsez.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ykbylgwz.html

Ruby: Time.now
来源：http://www.sxryk.cn/163xzwjttvy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163hvjpteti.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163dtkcuxwu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ifjbibwm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xchtpsam.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163oapdunvx.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163svgxydwb.html


<!-- 参考信息 -->