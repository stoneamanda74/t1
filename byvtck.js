外链999!wailian999！

[G06] 重写方法
来源：http://www.xuanzx.com/163tqicfpjn.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163jpcgkahe.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bdinvsgu.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163xqyooucd.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ehofokbn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163omscybbg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163nbunfvjj.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163vfmtsrvk.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163thnayyqn.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ffwjbofn.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163pgpmgzej.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163idttsxrh.html

JS:   super.greet();
来源：http://www.sxryk.cn/163lwmbmcph.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163upcwipxo.html

Java: super.greet();
来源：http://www.sxryk.cn/163joqiaazg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163rfionswd.html

Ruby: super
来源：http://www.xuanzx.com/163idgylisq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ghzkckfh.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163qmajpxka.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163yklkkthy.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ibuadabv.html

JS:   static f() {}
来源：http://www.sxryk.cn/163tcnjoqpv.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163jdejhqyu.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163lnvmywyd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163didblhfk.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gkxgftoq.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163bhvsdepc.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163chxiskxx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163cwvhghul.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163nfzladww.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163hstktayd.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163gugykylx.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163bqiyitxy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163yxtnmklv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163gouvrhhg.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163gpblhwze.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163pzsuewch.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163xfeiavlk.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163dpodhfzp.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163nuqtedrg.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163fubvmkce.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163rwhyljzh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163vacvcerq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163rzxciiyb.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163pkovkagu.html

[G11] getter / setter
来源：http://www.xuanzx.com/163quicpcvy.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163bmzzjoju.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jcehemzs.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163kytglicb.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163zpxvmwbn.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163dgzozarz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163dzewmzsw.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163rkrnxngc.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163hogtmrcu.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163tdlbuljz.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163aashcvdr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163gvfcjktc.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163pznopdqk.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163qiwwnvzr.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163dzciphkq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163tuvnlrdh.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163vkeodueh.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163tzajquft.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163yamgcwfm.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163bmaqszsp.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163gkrjuwcs.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ksewuluf.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163gsdymxlq.html

Java: u instanceof User
来源：http://www.xuanzx.com/163qssjzbil.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163xqtziyld.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163oezrjtcy.html

C#:   u is User
来源：http://www.aibaodan.cn/163lobjocjx.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ulhbokre.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163vlmjrjnp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163mklgkgee.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ffhkqynb.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163pgfhptrh.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163nirzpeym.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163nqqbwnpu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163cyvjrocj.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qxxffwjj.html

[G15] 枚举
来源：http://www.xuanzx.com/163hkjyjihy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163qirdngbu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163gwbnxoti.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ftpfuyad.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mchknnuo.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ztiydkkq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ssgynvmd.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163gifkhldb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ctimlcwh.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163vecvfpnt.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163inltyewp.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163nhancjbk.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vqfzqimp.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163epgzdnxy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163qxmfpvwu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163mjbymigi.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163mftvflns.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163tmlgcwvn.html

================================================================================
来源：http://www.aibaodan.cn/163hhipvnyu.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163zuwbhnif.html

================================================================================
来源：http://www.aibaodan.cn/163zlkkkvqg.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163lpidpmwi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ghggsels.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163sveeqjfm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163axfcvorp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163xbpqrmdj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163kkuzupoi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163dpjrhxpu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163jfnepxia.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163peopunlp.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163lmjnfvsv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163mbjvhdux.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tkvsvtxq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ombnhcxj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vovftozz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ejrylgdg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163tmkbjobr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163cnmhgoee.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163aydgqpyf.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163jeuyejbv.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163lrqidhez.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163etopsslz.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zwgbekiq.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cwxvarym.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163vkvtdwan.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gqwmveiv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163kmizevnq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163jyfyvfmd.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ddvgglzo.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163rbmtpbft.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163wlffvdft.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163usqjkjvz.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163prpbjwal.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163bzahovkf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163gujyypte.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163oxzmyouv.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163idzmerir.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163jcscekka.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163tswalclr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163qffstyfg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163udvinqls.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163nbxlcsvo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163znnrlsgd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163adtivqpg.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ukmepfnr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163vdcsynbc.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163qqghqilf.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163iyzaqxwh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ornqjpfv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163uiepkejm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163rzzkaycd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163zfwghwzf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163zgnwxkau.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163yioowksh.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163yjkvbmaj.html

[H07] 断言
来源：http://www.sxryk.cn/163dmtsvbxi.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163lccetsrk.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163rdadekow.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163zjtbludy.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163sgbktdbo.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163yxaovupl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163fcqowgxn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163pjxulvkl.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163aabdaolu.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ajmkvqiw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163tlvbgmue.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163drhozoaf.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ahhxmafv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163qowjhixv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163qmacwvfw.html

Go:   err.Error()
来源：http://www.sxryk.cn/163sivzpuja.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163aldwyyve.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163gdryhvyb.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ckfxacns.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163wguvmtel.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163yqmymxyj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163smffldmv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163qdmxwbrl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163rjglrmzz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163lamussoz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163nyfccjwp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163jjfezmfm.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163neynexoh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ofzkezsi.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ukvzhdkl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qepiejft.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fnnnukhq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163gmigytge.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163lhrhxocc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163wazbuqhg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163oxxgnpoe.html

================================================================================
来源：http://www.xuanzx.com/163dupkmyzw.html

I. 正则表达式
来源：http://www.sxryk.cn/163sanylfxn.html

================================================================================
来源：http://www.aibaodan.cn/163mmznoaxf.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163osjtzpyo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163jshntdvz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163hyqzcmbi.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163pkjyscbn.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vburwkih.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163mabeyouv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163akatgkqs.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ntirojwn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163vpcnlrbn.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163mdpbxiwp.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163yqdzjacw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163cqireltu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163jrblteqn.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163jxvopqge.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163dsarhkfd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163mdykpvmg.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163duvlklnu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163pgxntqxj.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ldwqueqk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163mrwzmlla.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163eufxcbgc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163geirvqjz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163zdegerkg.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163dfskzkee.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163foezsvfy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ynqimqgb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xnusvxns.html

[I04] 正则替换
来源：http://www.xuanzx.com/163vttzinws.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163rrysnqtd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163kvzswcir.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ogmnjqqw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163yhzmfbzv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163bhthpfkl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163lpkaxnzc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163mdifvtth.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163lxgtfmdz.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163oytifqvg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163fvhduczj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163pfrybnds.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cofzuuvc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yqqfsbfb.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163bvyvhgsz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163pvlyorme.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lhdjuczx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163cqakyfxm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163pwhsmtdp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163kdnjrkvv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163fswcnrrg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163fujeqjxe.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qmjekefy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163zglhjzsq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163vdnduoxl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163gougecjg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zvjceiis.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163kswabjgq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163gjpkutyc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163snthyzfs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163urtgjkjc.html

TS:   /error/gim
来源：http://www.sxryk.cn/163rwayjffe.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163zyupcyuw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163nxhjuglo.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163bidateeo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163bmrqapce.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ivbytarx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163nmbkcosc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163wzopupdt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bezvgjse.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163cpupecxq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163qzbsxgor.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163pcezijiz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163izqztbwg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163avblqjli.html

================================================================================
来源：http://www.aibaodan.cn/163jrirbfhs.html

J. 日期与时间
来源：http://www.xuanzx.com/163hprcqwgr.html

================================================================================
来源：http://www.xuanzx.com/163hdyrvron.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163tuzsmksn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163pndinvey.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rqkvlbnx.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163cxcgkypu.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163klnxqein.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163xoouefff.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163zpqeluko.html

Ruby: Time.now
来源：http://www.sxryk.cn/163hwihwwjs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ivshyxsf.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163poqccjkn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mfkdjodq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pkxsbjlc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163clemdsuf.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163dathxpfp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163gbaqmilr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163syxfhjvg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ievhhwja.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163spjwzgyg.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163jhowmtvt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163jsieppiz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163besxaktk.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zjjjpnhi.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gangsnfi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tmfjzrjt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ovhwhtoo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163mkgbypyr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ycurekhv.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163vazkxfsn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hlaovbsm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163evoifkes.html


<!-- 参考信息 -->