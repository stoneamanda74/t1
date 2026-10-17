外链999!wailian999！

[G06] 重写方法
来源：http://www.aibaodan.cn/163zgsugpmr.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163inklhjiw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163kuqxwjxj.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ndhbfeff.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bqgimiok.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163nzysqdep.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163qfvekram.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163likswhyl.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163vumafwlo.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163jjvmxynf.html

Py:   super().greet()
来源：http://www.xuanzx.com/163sbhbouhv.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163rautckri.html

JS:   super.greet();
来源：http://www.xuanzx.com/163eydnpdyx.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ckyzywkl.html

Java: super.greet();
来源：http://www.sxryk.cn/163xejwmsoe.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ffxaidor.html

Ruby: super
来源：http://www.sxryk.cn/163iwpckuds.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163usxobvbs.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163hacvqaxo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163lwlihtbn.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163aagxwdoc.html

JS:   static f() {}
来源：http://www.xuanzx.com/163yypsjfkk.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163umxevoqm.html

Java: static void f() {}
来源：http://www.xuanzx.com/163yoxpdyqj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163enqysyli.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163hgrsvrdd.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163dpdwofth.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ibsnxjqo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ihobpyfw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163hiszsbac.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ryglvwsc.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163xpyufjou.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163tyscfhro.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163fjkrigmw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wtavheee.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163htklotmr.html

[G10] 访问控制
来源：http://www.xuanzx.com/163gbdcwgxh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163raadqusu.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163filqmkuv.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163loewdorf.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163vbjhrfzw.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163rjrrxnkp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163mrmagule.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163hxxpiexe.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163yjugqidy.html

[G11] getter / setter
来源：http://www.xuanzx.com/163mhgtqtuj.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ximqrrxz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163efkfszzq.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163xfabjifk.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163cvlfpvvt.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163zegrpqkd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163twzxbdrx.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163proqgzdx.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163rgxhjxhc.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163lzivkfwn.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163gowjvaxl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163nfbtnmsj.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163adrqynkt.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163slzmghci.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ccnleszc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163aflikqov.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163hxigmrgg.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163msbktrqo.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163mooizqkg.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163lhwdkohl.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163eezslisx.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163gvowblks.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163illxiibt.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163nufugqrf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163wkcbarsf.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163jbvkihtt.html

C#:   u is User
来源：http://www.aibaodan.cn/163alyfnbhb.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ypudfvlc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ugdktbrz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163dinhqhlx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163mgfvuqhw.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163dqjqybgz.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163avwjfcwk.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163uyqtsexv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163jjsrrzkt.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163nkadhmfm.html

[G15] 枚举
来源：http://www.sxryk.cn/163vtoqgaur.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bajpndah.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163eqxbsnnn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163tulovumi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xsadspip.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163jncydqbk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163jzovskpw.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163krzrxmhm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163dxulnmul.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ydvpicaq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163csyjtyer.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ruqtafin.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yamnoowu.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hlsbzctn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ugkvroir.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163jodcgyah.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163hhbllsas.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163gpqffapz.html

================================================================================
来源：http://www.aibaodan.cn/163kkstadgt.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163hqbzifwt.html

================================================================================
来源：http://www.sxryk.cn/163limzoclm.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163dovvhbhu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163aegdcnyk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163hpitjkdh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163kypcusom.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163dtdaqoar.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163bdidpjsv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163xsgvlgmq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163yedffybw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163kqtnxzjd.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163pvpgsyqn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163jcerkrao.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163etmaqaxq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jcwfmcht.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ylsglpja.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dewyuzdd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163mqjgugng.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163lezkynpd.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163dutgpddq.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163jghardpi.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163enmjucgg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163wtnnlxxe.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163racciuzk.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mzfskewt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163zurdcdow.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163fdfbrjaq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163qmqujvvc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163icamuesa.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163asnofntq.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163xapeopir.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163frhktwrc.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163pmhcvsjv.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163aapwntoi.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163kxjgkpgg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ymzkakrh.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163fbbqskvj.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163amokcsnv.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163iwbazkfj.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163kdewdbpo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163qdmijrah.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jcexfkxd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qhaehsfr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163aclexjlh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163vvoyvdzy.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163bejhbpzc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163msiijftu.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163haaodqfg.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163zrqhrnnh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163uhvesazu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163drbdaomh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163txnweqoc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163flgtuxtt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163wgoretnr.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163tcultebn.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163mpqkazfv.html

[H07] 断言
来源：http://www.sxryk.cn/163zbfmczeh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163rsuqodna.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163auxszobo.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163akqxpxvx.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163jjvadrqz.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163msdbjxsf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163tdwhkttk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163mdyggeya.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163znuoiatv.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163udjcvwvj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ddrjepem.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163hbtetgeb.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163wrjgmlmi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163jzjlxupr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163yjnrosia.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163dzwbwaje.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163pwbfzhup.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163gojkkcvo.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ovqafnui.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163frlgifaz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163umdzvrrh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163mjhpmqpc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wgmflpop.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ybcidrcy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163gpuvkzol.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163butjpcrn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163iamqeisa.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163dcvmeych.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ozvftayl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163xaovjvoc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xtkjgkgj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bhaoveis.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163rpvtquuh.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163iewwnkhk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163wwubphiz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163jyofqfav.html

================================================================================
来源：http://www.aibaodan.cn/163zzppiwzx.html

I. 正则表达式
来源：http://www.aibaodan.cn/163riououvd.html

================================================================================
来源：http://www.sxryk.cn/163tonlgrae.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163gxbnoolh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163iavsklwl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163glhapsav.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163iqvnraqa.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163wzieapde.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163vevfgrnk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163qeqtguee.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163fwkwzaur.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163xjigambj.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163fbhyvlnk.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163hpacdamc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ipvvpmwf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163wivbjkdk.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xqznnohe.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ofmbutcm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163oeynnyxb.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163oxugazqj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163vfqmxzja.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163dlpdvxwb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163olgtgluz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163cbzdaozy.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163funllqrx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163zpnutapl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163qsihtzoz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163uavdaybf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163cyfkphei.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163dblmbteu.html

[I04] 正则替换
来源：http://www.sxryk.cn/163uarpymwq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ayazxfbd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ngzqzigx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163sthmrnio.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163veoktuye.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163kuedxflu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163xzufzhsi.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ozpyoqje.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163udxeuhqm.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163kqqpcrpz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163emejbilw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163robjnkso.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xhzxixny.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nvqjniap.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163lhpecytp.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ksvsssnf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zwkexqbv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163vxcpcudy.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ojfwqmdj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tzordxhe.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163bxxcidrr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163aknhhswj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163bgegqznw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163iltztqui.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163rqaijtsc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163srcplqvd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163betgmalt.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163wbwihecq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163iqdniuvp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163jpopsrgh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ulgdoupj.html

TS:   /error/gim
来源：http://www.sxryk.cn/163nznqgmts.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163xnkjsanc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163qnqklcmd.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163prbyqgaq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163htwtcbed.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ygmcmzxk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163jdcrsims.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163hvepixzz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163myydcgim.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ffccuaek.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163fjeyzqwt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163rnatsmaj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163svjjzzji.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163uqohdtno.html

================================================================================
来源：http://www.aibaodan.cn/163oxlkrtio.html

J. 日期与时间
来源：http://www.sxryk.cn/163eathivbi.html

================================================================================
来源：http://www.sxryk.cn/163zgoufuxs.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163rvvrlgxs.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163fgmxrzkn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wqasjepw.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163oijcehke.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dzbfqzvg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163zjygalec.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ndlfehix.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163rbyytysg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qwxsvrwm.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163jrpzohvx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jmflmgmv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jtpxtxxg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163emklkjvd.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163atmdrlol.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163rbhpmjav.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163vrsqvosr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163enmnauxb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163gydcvznl.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163rgzftght.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163bjlqnhbd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163khtsaupu.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nxafbbof.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163umuabycl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163dvdouwbh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163mpoxfubs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163trsjqepv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163tbeypfqy.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163iuwznhvs.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163hjznwidi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ghnbzeiw.html


<!-- 参考信息 -->