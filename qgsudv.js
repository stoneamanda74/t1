外链999!wailian999！

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163vsovotdu.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163yzhtxoss.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163hquscqqx.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163utvjjllb.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163yifvryor.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163qnvldell.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163xlroyaxy.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163alpyaibx.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163bokestnj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ovxkvzre.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wcsvkngb.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163gbnydbzi.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163iqqoinxr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vzwwbrgv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163allpmpuy.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163upswsctd.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163lqqfgcpk.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163pkcywvcs.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163cbyzllrk.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163nfermfmg.html

JS:   super.greet();
来源：http://www.sxryk.cn/163qfzyfvul.html

TS:   super.greet();
来源：http://www.sxryk.cn/163onfkryeu.html

Java: super.greet();
来源：http://www.sxryk.cn/163erqsnlto.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163egvuthyo.html

Ruby: super
来源：http://www.sxryk.cn/163dofngucr.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163gepkjhmx.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163kdxcfaer.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163jsesvmxd.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163slrripal.html

JS:   static f() {}
来源：http://www.sxryk.cn/163snuqcjrp.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ypguyttl.html

Java: static void f() {}
来源：http://www.sxryk.cn/163udngxrri.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fyktcobu.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163kngonepf.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163opawobnp.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163tzxaufoy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ussmgkql.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163bngvcvef.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163lgxzchnq.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163htvynlmb.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163vihmxdrd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163pomfdggi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163rjwhrspv.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163vfyesqmg.html

[G10] 访问控制
来源：http://www.xuanzx.com/163zvwqcovu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163uiykptar.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163vbuxveiu.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163vapqbbki.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163iejcikmb.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ekzixqxu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163qpytfqyp.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163gkglnuiy.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ipidvlpd.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163tbsdlime.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163pgpgvtom.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rrjnxvzu.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163metawmyi.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163sbkamavv.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163xbnaydbp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163mykaxrwu.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163iqwfvmik.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163juljyqgq.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163khoajtsu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163wrvyrlkt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163oztnbusx.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163pdkrozxx.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163xahslkzn.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163vkmjivhg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ossjypfm.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163tbxjgeqn.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163orgdrbve.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163cumthyye.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163mazorcfb.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163nsuavoqv.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163bgciozpc.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ncadaqqk.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163dpkkfhut.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163vbidtifc.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163vafobars.html

C#:   u is User
来源：http://www.xuanzx.com/163nogwcwpk.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163vfqgkopb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163pwftaskg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163uayeclut.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163uoobeduv.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ivzbuarw.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163uoqpdoon.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163coxuixdg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163yfdpkiwa.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qrsfhbdh.html

[G15] 枚举
来源：http://www.sxryk.cn/163goolgaue.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163isrjlbjc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163nmxlfzrj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163zjgiiszh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jdwrtmgn.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163lwzlsmjf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163osygclji.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163kloijvzu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ngfmdcql.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163nvjqbbvz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ktkvlwcy.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ovqmwadm.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mjxfssqx.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163eocuflml.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163axxilcjm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163asykmmsy.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ipqtyrbz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ukhyuhtt.html

================================================================================
来源：http://www.xuanzx.com/163xyohurfi.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163kziydpbw.html

================================================================================
来源：http://www.aibaodan.cn/163otfgvbww.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163iifhhmhh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163jsjcfgel.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163abemhbmk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163bhckfnsi.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163mmvuuqyw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163bvdulndk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163liwbkiuw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163cznqyxkp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163uuverhjq.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wukiaxuu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ycrfushc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pzrbehaw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ikqtybet.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bzdutnrd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163olrnhyqw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ovujovkf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163itsigntx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163muzskxvb.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ieehygsd.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163uewwjwcp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ofdxmgrv.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163nywykcvi.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163pjxeeptb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ojjklmte.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ciidsfiy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163fymsbyho.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163qxwjvywn.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ukqabkdu.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163nxkqnwkn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163jmijenst.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wasroeyd.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kkprxhlh.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163xvvakpsl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ozuhllyy.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163nuxmixrx.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163lvskqmbr.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163foudvoxt.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163evtavkhl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163wmmiqbca.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wywjnkjk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kozxvlop.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163gjrhdqvz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163khequwsu.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163qejauzhj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ucjpmokf.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163gkktuqxx.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163qegobtyv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163zutkwfqr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nynlvwew.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163sikahmeh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163azuftnpf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163qbcerexj.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163igqrbykl.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163adlmfhea.html

[H07] 断言
来源：http://www.sxryk.cn/163tsfvrcyd.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163kmaimapm.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ducfrjsc.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gnbtvasx.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cckdkdjc.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163rkcpauxo.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ygqsjohf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163nrtcchpk.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163rzeerxeq.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163xeahwivr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163yfcpfxua.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163vigndqqc.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163tnpijvgh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163jarqcpag.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163fmqirkaa.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ibwmoihj.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163tcxtoelw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163xvxdchie.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163kmbivntp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163kmuaoqaz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163dalikltb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163lxnukioe.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163qsxnabop.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163vlsjaisr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163debhqeqx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163zuljeuir.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163gyvhfmin.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163dktujgdv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163fptwuzfc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163cfoeyakl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qtuefcam.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ytpptnoh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163qaascsbd.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163srwbkaij.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163rjldwila.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163hirrrnmt.html

================================================================================
来源：http://www.sxryk.cn/163nudjbyid.html

I. 正则表达式
来源：http://www.xuanzx.com/163gmbsakdm.html

================================================================================
来源：http://www.sxryk.cn/163qvezmnnm.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163frziubsx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163paowbtbo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ethluabc.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163kgrjavzr.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163sqguzuaq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163hdkmlngx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ikrcibia.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163exalcexy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163fzfogicg.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163btrkkild.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ptqnrkop.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vjagzhiu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163thazutzj.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163hdgyfmdr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163jvwycsst.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163xiifxxld.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163dhpehgie.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163wtfpjxoh.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163wrpyvbbo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163appmzgbp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163hjknxjxk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163erazacsg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163kxtlwviq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163fbdafjxz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ignnzotw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ynvrotrp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163prwcspcx.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ouvjarrj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163uouktnvr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163wqsxmocf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163nccdvndd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ttrjsjnp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ausvvnrz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163txapkdbm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163vpctdnnb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163wtywrgjj.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163qlthtaqe.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163dkkysalh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ahuvnsok.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ifbmtuda.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ithrutzz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163umqwrqgi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163jcdhbwfe.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pxhbgzqg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163idyvlhzm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163nhdvdxrd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163guadhyme.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ybsuawwu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dauensrt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163pbzxqrkz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163mvikgfbi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163gmnxuolu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163wufjcrsc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bbeedxwm.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163iewkpcik.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163rdxlrztu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163hrtfpcqw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163qawakyza.html

TS:   /error/gim
来源：http://www.xuanzx.com/163gnpblkbl.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163orekryow.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163itltgtrb.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163zatdqtnf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163iywagago.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ffkhkoxj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163qbbnkdrf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163fqryfvnl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163btidpnfu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163yhpoxbtp.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ekzjqqym.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163cppfwtra.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163sxuzodvc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163sahkrknm.html

================================================================================
来源：http://www.xuanzx.com/163txpkngvj.html

J. 日期与时间
来源：http://www.xuanzx.com/163tgflthpk.html

================================================================================
来源：http://www.aibaodan.cn/163crixlaua.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163olamzqnw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163qujqxtsw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163oeifhmlu.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vsmqhydy.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zofjjzyr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jcxyltvj.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163xmcruxcr.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163gxfxbkse.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ohtngkoo.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163kndjedpd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fwyeibws.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163blfqdknq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163mimvxsag.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163digbbmwt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163xbmpualw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163htkyaabk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163auuuonce.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163hbpswprt.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163kzcvvjjr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163iooirsct.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163xbwblngo.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ccmvnefv.html


<!-- 参考信息 -->