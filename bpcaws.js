外链999!wailian999！

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163qaifyytd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163cpxciodj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163nemvcmub.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163aerjqlhs.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163amianawo.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ucsuybnq.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163akxtcyaq.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163xffrpoxn.html

JS:   super.greet();
来源：http://www.xuanzx.com/163jkcvbogn.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dkpguykg.html

Java: super.greet();
来源：http://www.sxryk.cn/163rlfiucly.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163zhcdbmjv.html

Ruby: super
来源：http://www.sxryk.cn/163myxdpwph.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163wsvcnxor.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163wutvxpnh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163wunsdylt.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163feqlqxkj.html

JS:   static f() {}
来源：http://www.sxryk.cn/163pnjeckdh.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163oxiubebs.html

Java: static void f() {}
来源：http://www.xuanzx.com/163millcphu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163srrtbirm.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163cakeirgv.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163wxhlnrzj.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163zkvphdko.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ucomvzml.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163nfghawnh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163nmyxmeck.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163slvhikxg.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163janvwohj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163fqjttmzo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163unjjzrwh.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163agaiicwy.html

[G10] 访问控制
来源：http://www.sxryk.cn/163kckicyum.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163syhtulzx.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163lwmeisiw.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163tpezxyqs.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163tdlizcqz.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163rqdjfwvg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163jailratl.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163iftyizsj.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163tmqlvknp.html

[G11] getter / setter
来源：http://www.sxryk.cn/163baplsbxm.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zdopbmff.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163bsufyfso.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163arnvnexw.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163qjomjzso.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163liqcentr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163gcjimgdp.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163gwzlyjqf.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163tfctywvb.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ljutxzlx.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163bltqbenc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uzcllxuh.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ynacpbfu.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ggqihmun.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163azhksxjc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163wbszrkbj.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163uwxogehl.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ocfyclwa.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163pkwujdng.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163qlcltdnl.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163yrzosmpd.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ajijwwwa.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163towbmigw.html

Java: u instanceof User
来源：http://www.sxryk.cn/163lobxjolh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163lgufovfa.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163bcbyrzun.html

C#:   u is User
来源：http://www.aibaodan.cn/163kqjkrnzy.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163cpxcmmol.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ivfhxvag.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163uczomajh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163mfghbipx.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163revmpmqc.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163wlcwhogh.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163jzegodlk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163xlwzbqla.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163frevhyra.html

[G15] 枚举
来源：http://www.sxryk.cn/163atinrzri.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163fwfirxej.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163wavkzcxh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163pfqoqnqf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wlsvltxl.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163fcsatqpv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163geiutcac.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163kqnguyjt.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xwzfrvyj.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163fsodzfkz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163rmxdcwww.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163qzglnpkd.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ttyuqnmt.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163telcodwx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163jwfiueuh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163xfkirknx.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163owbkjqhg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ltadluuf.html

================================================================================
来源：http://www.aibaodan.cn/163wsbiakkh.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163mqzdxctl.html

================================================================================
来源：http://www.sxryk.cn/163vntqvtdb.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163vycqpqbn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163bdcmzdcj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163hnfhudyb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hsgrefsg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ktkrveyc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163dvddhoin.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163fzhmuzzs.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163gibhtokh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163mmxdbopr.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163njvuwjwf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163bmqbvpyy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hzgbfmcx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gvoujfnf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163grtxrpzg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wbfaxtmk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163fqypjrit.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163kscysxzw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163sqtzmutd.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163oiqdikho.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163klnzrtsd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163xydodqxb.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163icwzzfvs.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163czuddbak.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163exfsgkod.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163yaupvcdx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163tuqpvxrl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ickaeedu.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163rhbffoth.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163lizywxyf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163yaerekti.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fblgwyrz.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163eoxnlanr.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ohwfthjv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ebqohjiz.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rrmpdeyx.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163nzbrcyjc.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163pdozzblp.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163fauwrcvm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ipvifkhb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163udiuolzb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xdlvrbxd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163kmsawqcr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163cwvxkmff.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163tftnfnes.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163vkqiyfjq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163qalnszuq.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qcuhkiid.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163gbbvlmsp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mgsacmez.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163czwlpsly.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163gkpecdez.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163anzamabj.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163lcyjzolr.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163zsphqfls.html

[H07] 断言
来源：http://www.aibaodan.cn/163isfuyafs.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163pjiltkgp.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163bbabrtvp.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xkvfhoew.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163sdekyuwg.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ffeocgub.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163dldpogxu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163naotjjor.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163rtwwvvmw.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163gqnijcwv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163xesrdeae.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163hznqhkma.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163izpnfgpn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163hdfmmmmn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163gezqkqbk.html

Go:   err.Error()
来源：http://www.sxryk.cn/163uxrncqdv.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163almjoybu.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163qcgjdlpd.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163rjgevbko.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163nedyduqi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163rbvngjyf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163kldyvkes.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163vebcgxey.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163wwtviadb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163qggjvnaa.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163nsuynykl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163wzrcvrvj.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163tozjusvx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163gghxkzki.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163iynsrtlv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tseteyjt.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fkyfbnxz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ylfyprus.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163gujxyssr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163lnykdgxo.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ndakxlth.html

================================================================================
来源：http://www.xuanzx.com/163rwwvvqsk.html

I. 正则表达式
来源：http://www.sxryk.cn/163hjmkalhm.html

================================================================================
来源：http://www.aibaodan.cn/163pvfmwzzn.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163hhxhvmvj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163dujjteks.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163qpcosdet.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zfznmqws.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163okefgtmh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163byygyysl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163pmnsbgse.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163wwturgsd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163guvyyiij.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163npqrxyax.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163xvlnalse.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163cehvqfca.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163aihhuakm.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163fymuhfac.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163bfkpdmmc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163yufyaqsb.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163hdvgklcm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163uuhpmkpl.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163btjijfep.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163aizueczd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163sjmdkggc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163binkcmqy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163sqoqfbev.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163msfuuxpn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163hwcrdttm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163vmcpxpxk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163lgqotkum.html

[I04] 正则替换
来源：http://www.sxryk.cn/163vjpwgeii.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163oufoonxt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163kpdkqimq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163hbjvstte.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rdrvodzs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163aflctych.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163mddjtywv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163oxwsunkp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163fbzfzilm.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163qinocsdd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163gbocxfdd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163yivmywxn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mkucgbjg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163noxgowcl.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163mrcdmxoq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163wmgqgllr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bbxxmzip.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163tnevsbhk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163kwruwfjz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163erybrypv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163uqfwysbe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ksdzsucx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ncgaedli.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163fnzeuhxw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163yfjbhpyw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163nluuaeuu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vmjzkvsb.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163pxvfpjzb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163oynlhefc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163inbgvwqj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163inqwuqhm.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163tcbepove.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ltntzgyl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163idfnhdsl.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163eqexxwab.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163mblraqwm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163tbydfoxa.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163fytozzfx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163pnrnzpeh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163lpwbqlzh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163olnhtvdq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ddypzyru.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163kwtfwtdb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163vjkvrvat.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163uiyqfuom.html

================================================================================
来源：http://www.aibaodan.cn/163yjxuiqjx.html

J. 日期与时间
来源：http://www.xuanzx.com/163vfnbbveu.html

================================================================================
来源：http://www.xuanzx.com/163jwkhoabw.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163shgoegee.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163cnlgnvgb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163kyfkyzno.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jyndrfxk.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vjvbhhdv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163simdqmwf.html

Go:   time.Now()
来源：http://www.xuanzx.com/163vojtqysw.html

Ruby: Time.now
来源：http://www.xuanzx.com/163gwxxmhpf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163quzsjymv.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163jtepgpig.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163yvsokfcd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163dbxzqgky.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163nutowydy.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163zdianbdk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163elpestdh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163yvcgpjpe.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163tmefvpjy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163mgwelrdo.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163undgneeq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zogignxf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163njoykgry.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ohgahahd.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rpwkovwx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163xewgpjzp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163fiilzrrh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163szmunryx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163uoudcmpl.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163pdrvnbwp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vruptrhg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163shjdpiof.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163siwdlwxj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163wglluoge.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ipgvxdhb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ovekerek.html


<!-- 参考信息 -->