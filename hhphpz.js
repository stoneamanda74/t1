外链999!wailian999！

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163xomawzdg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163iczdmquj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163vrnangyk.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163mlscoptp.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163thngsqer.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163uxupsttn.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163udlrxhjc.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163glvoropi.html

JS:   super.greet();
来源：http://www.xuanzx.com/163xujfjtuw.html

TS:   super.greet();
来源：http://www.sxryk.cn/163pbvdwqsp.html

Java: super.greet();
来源：http://www.aibaodan.cn/163lnipqmgx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163hrjirqpr.html

Ruby: super
来源：http://www.xuanzx.com/163kwftmawt.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163xqiwawuq.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163uewiurii.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163cotauirj.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163rweynrik.html

JS:   static f() {}
来源：http://www.xuanzx.com/163rjsxjgjg.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163axkapxdx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163syssemat.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163jokdxcjt.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163yrpblegj.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163vlknzfhi.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163hvaxbuwb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163aobmsxvg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163pdevjbxt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163aqfrtbgm.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163cfgtvmnt.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163tksqesfq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163nmwibdyc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163nvgbyqxk.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163gajjdwfi.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ifwowwjc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163lehorhnx.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ejxeyqzm.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163djpqezsw.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163lyssobno.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163rnuszjsk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hxfjujbe.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jjvrbgov.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163vwlrhtyi.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163qiqyxiqv.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163qupfmxgm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163fxquyhsb.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163vzhsmxfs.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163lsyxdsao.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ltmotunq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163zmntycdx.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163dwdocavh.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163pfyrtnnc.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163swuigzyu.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163icgavsnu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163swolgydo.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163fambrfkj.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163pidyjmwp.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163aesmepvy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163iorcecjz.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163mtweoflk.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163vnjjbzgv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163llmnqfmw.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163usfxpvgq.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163trieusgk.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163efgfnuxu.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163tlvcsilc.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163nydsfjoo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163iuntrkbg.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ztundxky.html

C#:   u is User
来源：http://www.aibaodan.cn/163hlsphgwd.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163zeghpglx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163wjzdchco.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163vvqtkquy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163sicnfnkp.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163mtcklbfs.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163oglltqil.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163jvzypbmn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163xtdpwcyu.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163vlcgoyrr.html

[G15] 枚举
来源：http://www.sxryk.cn/163leptzgta.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163pkenmrvn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163akpbfakn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163fimtbvpy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bmrmcqhz.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163pxwynepr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163surqciew.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163xjuaojhs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163mmzyxkbl.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163moquugpr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163qehopawm.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163gpsaqefk.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tfjhxoxp.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hwecvpvc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163xrxrnhqc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163cnpxprmp.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163pcnmvkhf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163axsmflzx.html

================================================================================
来源：http://www.sxryk.cn/163rmdtghqa.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163tgxtwgof.html

================================================================================
来源：http://www.sxryk.cn/163aapjqdwa.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163nouaddoe.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163xwaktrkk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163plvckyda.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rlgvuqoj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163mzfdmpls.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163xchrwgon.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ndqjdavx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163yimysias.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163uzstbfpq.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163nefymqby.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163xsgamhpz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163biwartek.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fzcltfai.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ejzjfwgf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163blpvmgvk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163adlwroeo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163hxrjdjtw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163fxhunjqe.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163tsmyglgm.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163tltkoxrv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163omveydvo.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wmlufthi.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bzojsxzf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163obrjdbjd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163uabftwno.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163bqqsjlcb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ezobkbka.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ijytglhi.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163jzvimteo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163whttvqtd.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qyfendpc.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ignqpshe.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163veycoehc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163tlhtsuri.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163mfuxinzs.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163wpqfboql.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163jhbjjzdk.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163lorlpavd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ymlciuvp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mbfzhkvn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pmsencia.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163cyooquba.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163woprsppi.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163bguacwaw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163rohwuzan.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163nfjknpns.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163txadlnpt.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ylgsuypf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163tamszecj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163dujfdibe.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ytredhgm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163jiekcrkb.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163fhjtbzhy.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163wqvvsnep.html

[H07] 断言
来源：http://www.aibaodan.cn/163sjxcrstb.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163dmzkoues.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163mvzjyict.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pjlbxhor.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163chxoiogm.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163prpunkld.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163shrmjujt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163hvqegxhv.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163vwkdjhmt.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163qefllful.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163cayvyqxn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163hticgour.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163hcjzirva.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163bxkhqrhr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163jizhslno.html

Go:   err.Error()
来源：http://www.sxryk.cn/163dtoklgim.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ofngfqrb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163obdfcmyc.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163dichtked.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163djazcqaw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163tgccpdbk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163utpekztw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163dlphhuoy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163dbkceesk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ptpioxtf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163qhatucaw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163bjhdouuk.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163oqjqyjrv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163whquoems.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163dqwhutyv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qvdhzevy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163cbmuyeey.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163aqeimpmx.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ymgeufou.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163vsyqkpjc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163jimhhhpa.html

================================================================================
来源：http://www.aibaodan.cn/163ppgemeju.html

I. 正则表达式
来源：http://www.xuanzx.com/163dazazfmz.html

================================================================================
来源：http://www.aibaodan.cn/163hpimzjah.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163drrzzexm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163xehlgztw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163yijbwata.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lmsobfui.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163jpuwwacv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163bjaxremc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163frlvuxwt.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163nlzxijyo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163hdtbfefy.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ajkakhoj.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163gvpnsaag.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163uyzesrlv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163nqcjfjqv.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163jtlalamq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163rhtuqgdw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163zmxvhamq.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163fstbxpsy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ilenxbxq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163yhwvoauf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163qrreejng.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163jtmcldwx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jtbapegd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163atidcbzy.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163rqsgalfu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163otsibsyn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163exxmufer.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163yowoqsuu.html

[I04] 正则替换
来源：http://www.xuanzx.com/163gdscfdpp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163grcisafg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163urecofpi.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cszcymgg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jqzlsadk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163rjsdmsxx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163zquzowrp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163jwtyexra.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163qktiwehm.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163oyhuuejq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163cjqrkwhp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163mhfzsylr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zxketqyq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mavvwlpf.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ucgynpkg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163poeyilxl.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ujfcaolc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163vvwfujci.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163tawbceay.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163rivsleon.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163xscaixmz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163oqflphvy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163pwenzoir.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163bwpcnwfe.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163kflmuwbd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ixofgxzf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nvrxsptf.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163pwqpvinp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163fvjdiosp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163efdabfux.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163wnhpcttn.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163orlulrnm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163abfgecnm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163clvvhain.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ppljswaj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163wrycdhfp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163fftqxijz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163cykmgomm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163aknmfmvg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163anmxvwwq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163cigkdiwk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163kpzxiqop.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163erovwvno.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163yfvihowv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ygeeguxq.html

================================================================================
来源：http://www.aibaodan.cn/163rpqrawkv.html

J. 日期与时间
来源：http://www.xuanzx.com/163drpciepp.html

================================================================================
来源：http://www.xuanzx.com/163ililgltr.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163nujjzsgy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163jqjouatr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hgrqqinl.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rojqylzd.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zkahrxhx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xkvxjweq.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163atwpddfb.html

Ruby: Time.now
来源：http://www.sxryk.cn/163pttyndku.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163lfiigtqs.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163afolirjt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163kgmwnixb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rvmyikox.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163tfxnsoac.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163osvnfeqc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163qwqovhao.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163spjuzujn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mksqzfof.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163edpecruc.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163vjtqkvfw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163vowtiieq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163jgncpfqq.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163krlakqht.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ysbverad.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rzkonauu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163wdtetirg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163afunyzzq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163rynsegzt.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163qcthzmlj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ozgqyabu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ouxavgyn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163albwrckv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163cprbhzax.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163mkvzgqys.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163rtjdjlfy.html


<!-- 参考信息 -->