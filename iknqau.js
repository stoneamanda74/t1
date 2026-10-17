外链999!wailian999！

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ryqtmiyv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163rcltwiuz.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163oxujahqc.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163awrmxdkz.html

[G06] 重写方法
来源：http://www.sxryk.cn/163oolyqwrh.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163xkabgqkz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163kkugzgvo.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163pnsoendn.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163tskmyfby.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163oahxgcmw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163gtomfdtc.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163lvugugoi.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163tmlwngbm.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163xwncxoky.html

Py:   super().greet()
来源：http://www.xuanzx.com/163eibikgkc.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163mwqqadkb.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163nfqrallx.html

TS:   super.greet();
来源：http://www.sxryk.cn/163rgksjxiv.html

Java: super.greet();
来源：http://www.xuanzx.com/163nawlqwss.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163eqnzauph.html

Ruby: super
来源：http://www.aibaodan.cn/163spbyudei.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163xpunjxhg.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163lkmoimmp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163wcnvwitt.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163qseyogxn.html

JS:   static f() {}
来源：http://www.sxryk.cn/163inrymriw.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163epivzman.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ohvgpidj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163dkcsehyy.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163bpjoolrw.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163pdcqgrwo.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163kpiriebd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163pvvcwfva.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163zgvaygcr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163dyvouruy.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163yryzfmfa.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163rtecswuw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163pahvatrp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163uwxmdmsp.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163szmtqyud.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163oyypzgfl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ophnistt.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163mdwocbse.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163horfcvrc.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ltyinrge.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163daxxczei.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163zavhwucu.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163escutuzm.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163fwkimdfa.html

[G11] getter / setter
来源：http://www.xuanzx.com/163xkqpikxm.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163whxxtcoj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163wuvvzfeq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163zseceeur.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163arihocpu.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163yjhtcchc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163cnlvprpq.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xfbizupm.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163xolxknmd.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163qsfxnhjt.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163mkggwbze.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163jxguzvwg.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163inwvaljt.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163lbclegyt.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163romgfedw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163zzjkkesw.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163xrmkxndw.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163fjnwiyme.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163rcnlruxd.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163whsqtsve.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163stbhjxzx.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163spcrkitd.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163xassrezm.html

Java: u instanceof User
来源：http://www.xuanzx.com/163jjqkxqoq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163cimdnbhm.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163anxlcafz.html

C#:   u is User
来源：http://www.aibaodan.cn/163ngeoylqu.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163vpyofkdt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163wcdavyin.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163fynhzeuf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163gmjunhap.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163vxevaall.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163tpvbceza.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163pwgidevh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163murdmiym.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163wmpfzksq.html

[G15] 枚举
来源：http://www.sxryk.cn/163mksdherr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163bqxpoyvg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163rradpkzj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ealqsnve.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163fxgtevbw.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163evkgxdbl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163pdiwnxhg.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163osehvqks.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163efyjilvc.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qqocqxzc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163rbkftdgq.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163mkrjcqya.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qnceaawk.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163dfrqbxkn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163wbfsnrqk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163fkscuknv.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163hyzgnbrt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ncttqnzc.html

================================================================================
来源：http://www.aibaodan.cn/163mhktknoj.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163vsgtorda.html

================================================================================
来源：http://www.xuanzx.com/163kqbewuce.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163bjlrxixl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163zbnizxxs.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163klgbgojv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163lhxvjtpb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163eiednadn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163qillxmwy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163rgkpfdcm.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163njhvktfm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163jaxvcizu.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163gniehlqb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163vfpceprj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xbixavdb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163raqxmqwx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ulmqrguo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163leuvtpmy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163rkdjfqqi.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163oaxxqufs.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163xhfwebeh.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163wgkcgukf.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hcftgtkd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163zaebjkyw.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163adoyrtcb.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163aiuobmdh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163qllgrgyb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ouakisdf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163jbdsbqwa.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163tgburusg.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163zeupanex.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163yfldgxau.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163sakjbcuh.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163llqhhuyd.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zdwselth.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163zkpzufzd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163aaioxikj.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163zeirpyyv.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163egbtdyyy.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163fuaomprt.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163efqcyokt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163vorflksf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bbqmqyix.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vxnydclb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163mqgauemm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ydegxdmm.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163wvtnnwzu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163yytkfrix.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163abqurfjo.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163xkzosxyk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ftvwklmr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zzietmmm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163veulrsxs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163qnzxuzwz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163oivkowrm.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163dojszkfk.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163phmjscuo.html

[H07] 断言
来源：http://www.xuanzx.com/163ooeimhgs.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ykkxsfkm.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163pxcewoem.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163zzjmhyno.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163kozxqqal.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163xqbzctrt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163bnhranbv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ctzrfhxt.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163kxspcahk.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163xbxikgpg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163tlhbgtrm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163sdjiodjy.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163dooqiuhn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163cofprxza.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163umahjeth.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163elazcorx.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163izudzbqk.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ebpqkvnu.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163dhoujleo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163lsijcalz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163difzxyji.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163bohbuykt.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163zonmbkje.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163hqnjmotn.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163oylypyeh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163vowucblr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163wymolszx.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ayjlpmuq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163xksupesa.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163vefqfwlf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163cvrbakge.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163egkraxev.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163sxltiill.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163tcrjrwjj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163dpmorujl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163fvecqzya.html

================================================================================
来源：http://www.aibaodan.cn/163ddseoysv.html

I. 正则表达式
来源：http://www.sxryk.cn/163bgwwafzi.html

================================================================================
来源：http://www.sxryk.cn/163pywehxim.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163zjlabiad.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163vtuetakr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163sbanmkst.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ssqrlwwq.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163cqylkrsv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gousvukv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163awgxjjwp.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163pdtumhme.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163rwagakzq.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163woruxcae.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163icqfakte.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163teelpflx.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163yepbqzun.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ljvlwbhm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163pwwxyitr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163qpdriton.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163mbawcbfi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163pgzkirce.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163jfcbhsyy.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163qsjtlljf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163pjaopfhl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163vvjdejhz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163mbjzagfi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163zjnmdjqq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163przmpmks.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163tpttbfgk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163evemuogj.html

[I04] 正则替换
来源：http://www.xuanzx.com/163xjaajlfb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163hibvquyh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ljxurnjc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mahlrxjb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163eemfvcvp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163utslibbl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163llixmhmg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ambqepdb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ayezjtfj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163zzxchwix.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ycvcrsti.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163rpddncew.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163iumvskeb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163admrgvxm.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163egoieovb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163dxbobzjj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zxuukuub.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163kubrogva.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163etpnjine.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dkpranqn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163edokmvjv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kpaftbwk.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163nvhjunng.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163zdbgzixp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163msppgghv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163okwcwbqy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dwmcleke.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163qceezkju.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163rjjmthuy.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163pivqqjmq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163jpaxzqjc.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ufmrjipy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163itxmegsl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163rouydkmz.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163rsntwqab.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163tbkyvxef.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163nhxwhlvh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163xkzqdctk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163hcboxrrs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163cbcsdtpo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vvgrulcf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163lerkdtgl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163tdkqojpz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163eqydxluz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163hrcniwtr.html

================================================================================
来源：http://www.aibaodan.cn/163bggmcmow.html

J. 日期与时间
来源：http://www.xuanzx.com/163pcadymqq.html

================================================================================
来源：http://www.xuanzx.com/163zazefxkm.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163tmmauibc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163rvxwrdtj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163iihnszwi.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jxlxxcuw.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ntmdeung.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163msuvdrbk.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163oeqldfny.html

Ruby: Time.now
来源：http://www.xuanzx.com/163pjvryhbb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163uucorxmj.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163btlazfyr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fikownkg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sdayouas.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163igzyzwjy.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163tjbkxrpb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163wncobydi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ymkibcvo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163kzdqukly.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163dmfosoam.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163dpwjdbir.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mmfrubdp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163bcwhsjmw.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163rwebxesx.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163gozzwzrp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163offbrcyg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163pywmdpwk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rhcogtlg.html


<!-- 参考信息 -->