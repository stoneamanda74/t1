外链999!wailian999！

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vrqrwxcl.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163axevpeic.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163gaztxtsu.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163efpwdcpk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163llypmwqo.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163droggamz.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163svsknnfd.html

[G05] 继承
来源：http://www.aibaodan.cn/163dhgnrinn.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163wkbkuaig.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163fgcqzyzs.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163spefdvhi.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163lderyuss.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163bqvrkcfd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ncqirpcm.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163mmzongto.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163mxgheklx.html

[G06] 重写方法
来源：http://www.sxryk.cn/163kqqvkcub.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163caocnksw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163haplfwjm.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163kgtoavnp.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mnsovmqu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163iwfksbxq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163dlumutvl.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163zbduotkl.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163kjxkpdwr.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163swfwszga.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163lfsxhpeu.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163okpuanus.html

JS:   super.greet();
来源：http://www.sxryk.cn/163huliddff.html

TS:   super.greet();
来源：http://www.xuanzx.com/163rupzxnca.html

Java: super.greet();
来源：http://www.sxryk.cn/163gficodcn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163bulllfrz.html

Ruby: super
来源：http://www.xuanzx.com/163lrnsyqwk.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ulxnhlev.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163uygczaod.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163fvxcdpqb.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163mcjectuz.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163yqglmyov.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163gulzlyoh.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ljkuixon.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163dnehjkrx.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163imhxkfof.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163geewlasb.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163bxefmncn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163bsshdicr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163slxaccuo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163eesqhowf.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ylkbbzih.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163cvlbatki.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163wqezdvlc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163zcqzmuhn.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163gowcpcdq.html

[G10] 访问控制
来源：http://www.sxryk.cn/163fagjfulr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163mnvgjwxk.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163vxsutyyw.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163hhbgkssa.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163dtpdblpq.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163iifvidmz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163mrqxdivv.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163hlwzarpu.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163oxugwwgl.html

[G11] getter / setter
来源：http://www.sxryk.cn/163vrnuncbt.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163lzidnmml.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163tvxowiio.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163jflvoaic.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vifkonow.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ekvjutui.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163jpfxyvvz.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163gygprgoy.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163zdfjfnnf.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163htkgnhtt.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163zystffhp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163oeekgtpn.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163mpptywbb.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163sorkespc.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ubeymtos.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163qkmsdpsr.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ytcckjps.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ixmwfval.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163csrwclcs.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163urbglcws.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163fojkbyyd.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ladovthe.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163fsrdqejs.html

Java: u instanceof User
来源：http://www.xuanzx.com/163clcyogjq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163lkwsiewa.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163noavydao.html

C#:   u is User
来源：http://www.xuanzx.com/163dummcakd.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163glmecvzj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163zrqxnxdn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163tfrgaisv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ffomdrha.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163pgqcmleo.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163sbgspbaa.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163lavptjij.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163lvquwqqs.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163igzebqcx.html

[G15] 枚举
来源：http://www.xuanzx.com/163wrdqvazi.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ztgqunmy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163himoghjf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163wxlkluql.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163zvfpabjg.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163dhbmtpwl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163popfqycr.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163grpycndv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lpenbbvg.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163tqhwkaay.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163teeyflfz.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163pkbakwid.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163hrhlgorn.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163elfkxmcs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163odrreltx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ldkhtgoi.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ebxmeqsq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163cuigrqak.html

================================================================================
来源：http://www.sxryk.cn/163covcnvfq.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163mlvcidva.html

================================================================================
来源：http://www.xuanzx.com/163fjvgskof.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163qcoglgjn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163udzioqtj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163wgmdioip.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163vkfpuhxo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163bjtxfueg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163tfeumeoy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163fomffofz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163obpudijv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163pvatsvgj.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163slbiozid.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163oqvatjhx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lqutiish.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163umwklrrj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uwhkokex.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lutabqqt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163xpnhootn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163eisxwxzv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163zbdxjcxs.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163wrpbnnul.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163zbetzreu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163gcgecvlw.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163aadnkmfx.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xtlilsmz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163tapdxpmk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163eltfakie.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163zwudtlge.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163seqswofx.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ovfrqfdk.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163zzmciwpc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163jpztqvmc.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vfxvrkbt.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bzupvvmn.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163viwccdwz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163dpuesyys.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ydmndavk.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163lbdzyxtt.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163kguqnzzf.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163nswtdagz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163agryllwb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ihxtgnps.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163yfaiglhw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163mukrdatr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163uuwwtbpr.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163rrcfvbsg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163wxbimora.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163oekjhfyh.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163yqknwcgj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163qmzzubnn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163uthydiho.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mmbcqlus.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ktffzipp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163rovsmvix.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163zwoouyfv.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163zwpmhbai.html

[H07] 断言
来源：http://www.xuanzx.com/163apsrqiek.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rexiqoed.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163uptfewdj.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163acfonuul.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163oelcqebt.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163necmuvww.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163nfljtpjk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163qthqddao.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163vouffzgs.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163bwkwyxmd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163lqirlewi.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163gzsfvacy.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163osywrdsf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163lhnxdrfg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163hehpwddo.html

Go:   err.Error()
来源：http://www.sxryk.cn/163czwvmdwu.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163fqkavmvs.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163bkpbrhfl.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163nysddiia.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163grylvucm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163blftqtwc.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163luctbykh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163wpbzpihj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163snlllkow.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163bhfkzwqo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163faefduyi.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163locvzrlb.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163dotupwuu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163pghaizav.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163jqoarllg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ltbzszrw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xoyzhjou.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163xjmzjnjc.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ncxtvdhq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ovzkbnqy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ikbouovi.html

================================================================================
来源：http://www.aibaodan.cn/163qpnhjzxc.html

I. 正则表达式
来源：http://www.xuanzx.com/163fkolkhhr.html

================================================================================
来源：http://www.xuanzx.com/163ypukgppb.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163xpnujlya.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163gnjcqkan.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163qcxhovtb.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bckwsrxn.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163hdhkyybi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163cqhaphfg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163rhrnyxuv.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163nzcwdmck.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163govhkutd.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163dztfmqvc.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163aanyqvwy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163eoyigzzd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163fxbienmq.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163bqcgfoys.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163fykofxgu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163zxhskdko.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163gdyrbhpg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163hwxykqyq.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ahkeiaio.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ifyuuvvn.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ciwpfnmf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163mlxlsxbs.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163rrzxcuol.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163dqhnbhey.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ykrfrazd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163lhjkxtel.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163eepwuwyt.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163nxmhcpfi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163oaxewhdi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mppjfyie.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ynuieyns.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163mgkibhco.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163clpdjlpj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163lhgzkztn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163cfimxdui.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163dtjuryte.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163qhbqxrle.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ywzifayb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163uqsphjhj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vscyglic.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vfqwrjvk.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163mvqpqpjl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163idmfjxny.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tzxuefid.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ghbtxuni.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163vntmxjdf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nodndebk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163otztsfch.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ioayniwi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163xediehvo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ikwpgckz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163wvznszhr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ffpgvldf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163pleuggbp.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163mealjhec.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163codtnpzb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163licsyoxa.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163rvjuivcg.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ztvegipb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163bcjqjyuk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163lhglchng.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163eihhzfxk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163krzjclan.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163pgwmmhwt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163xkqcdmlj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163gvrelogn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zkjqxzgn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hkbmyjix.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163tcujaqjh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163hppqedoo.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163rkqlobeh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163qyafpoyo.html

================================================================================
来源：http://www.sxryk.cn/163cywaydxb.html

J. 日期与时间
来源：http://www.xuanzx.com/163tiedqifu.html

================================================================================
来源：http://www.aibaodan.cn/163oeqeqeor.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163wmgxjhgp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163anvjkuti.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jjoremea.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rnvzmivb.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163esfwtsuu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163bhladfbw.html

Go:   time.Now()
来源：http://www.xuanzx.com/163mxpslqix.html

Ruby: Time.now
来源：http://www.xuanzx.com/163fzfaogqn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163mbecskmv.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163stbvnyyi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163sashctvg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163zheqtbdg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163jtdlfhyv.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163jurjngyv.html


<!-- 参考信息 -->