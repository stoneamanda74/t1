外链999!wailian999！

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163etptdhsq.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163cvmtpbfm.html

Py:   super().greet()
来源：http://www.sxryk.cn/163olkxwzoq.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163luhmnhmg.html

JS:   super.greet();
来源：http://www.xuanzx.com/163tjbdaaud.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dzgkzcwp.html

Java: super.greet();
来源：http://www.xuanzx.com/163fohlnimh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ererzeeb.html

Ruby: super
来源：http://www.aibaodan.cn/163nkqstzsi.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163jkptmzae.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163tofeyfob.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163sohmuzmq.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163dccauczn.html

JS:   static f() {}
来源：http://www.xuanzx.com/163uedlfiyf.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163xfcbzikw.html

Java: static void f() {}
来源：http://www.sxryk.cn/163tlforqzo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163qnmydknq.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163nbepymjr.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163hecvsepn.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163axbvzueb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163zpseyksx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163iliwemru.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ttfcikfd.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163stxgrcuz.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ascrhfri.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163dzsijyuz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163mgtnhpso.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163tbtmwbpy.html

[G10] 访问控制
来源：http://www.xuanzx.com/163itvrrnnp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163hmywnfcs.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163smwddfgc.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163rzybdxdg.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ztpzhzst.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163zmaqwlss.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163fqxduizx.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163pzfxvmyd.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163gcfegxml.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163pcyqrjtc.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163oqpqotfy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ijoebyol.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163tgwbhkls.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ncfghjtx.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163obmtxoai.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xytcrdnj.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163zflkchuf.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163vavyxoga.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163bxqqzlgg.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163lphnqglw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163hhivchlv.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163fxctzasy.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163eomycane.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163erwwhwmz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163kxabgxjo.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ksnrrdiu.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163wlcqkvic.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163sqekzaty.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163lzdbjyvh.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163seovsuye.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163cvobxska.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163yfamujjs.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ecuhhxuc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163hovezoqh.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163sqenohgz.html

C#:   u is User
来源：http://www.xuanzx.com/163kntytfru.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163adjyldfm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163opukjmoz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ttbiybjl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163rfkawxcb.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163iezovzal.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163lqjhjtad.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163voihkpos.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163sjgyrkvx.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163rpvzepfi.html

[G15] 枚举
来源：http://www.aibaodan.cn/163qbhsxiel.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163qaixmjea.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163kyttyzrc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163rukghmfy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xedmtnno.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ysmrrycx.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163jutzhxxw.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163rwgbneqc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kgwljabf.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ndpcpffn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163kqpvlsgv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ymfbwvtc.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163cigyyyyh.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163uzevvwpj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163uvyidebz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163lglzqoer.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163dnuntjoo.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163hcbfgajt.html

================================================================================
来源：http://www.sxryk.cn/163rkvzffus.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163crmfsrox.html

================================================================================
来源：http://www.aibaodan.cn/163gwvmjimg.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163emlsdzqe.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163bgwpxnfw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163djrtbxuy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163evarrqap.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ppzkhaxj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163jjaqzobr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163bhkefpkz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163zlnpnqln.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163yizroqlp.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163bsuzbsoh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163srdztnmf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163egwniddh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pcjvcysd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163msbijgoq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sggmjvxj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163pbxuvbrf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163djsawxxt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163gnoezahz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163vclwiokt.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163nvwsnils.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163tzkemntu.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hdmcdnkd.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163wfotrbxn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163tjndtevo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163wvwssmtx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163yxqudxmh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163joevwmpu.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163jnphzybu.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163jdlitdrw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163pojsifps.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163owccoqsl.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mmolwnak.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163vlgyymvn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ojdiyvfp.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163tzngtgpv.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163iwjgqxur.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ykjvbscw.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163fuvpblup.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ugomolfh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163lckoaybe.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jynwioti.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163sqxjgbav.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163txdggsrh.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163xofdwnbo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163grngfwqx.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163klezpkwa.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163avclfsbx.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163wbgncxqy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hqfbqsnc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pftfizkx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163lkyqxvep.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163yesrfixa.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163xbzgtsqe.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163imcrvopz.html

[H07] 断言
来源：http://www.sxryk.cn/163kixmfpjv.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163gdjccehx.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163hhybrfff.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lszvptqo.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qwtkpxsd.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163wpnwitrf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163qqehvvda.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163xeqphdyt.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163iyevvpnz.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163bfoswrkg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ulmmxccr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ijxnygpu.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163hsqftgis.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163famnpxup.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ictvwfxi.html

Go:   err.Error()
来源：http://www.xuanzx.com/163zzgbgsbe.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163eebfvqou.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163yacyxreq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163qgxroieg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163vfnrwpja.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163xehkzlzz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163mmfpkucf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163eitqmqpi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163hslwbjzh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163fyhrwgvw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jwuiahjp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163xkfchuul.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163okugwdaj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163xxlrfaji.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163peufdvra.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fcempwku.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qqquelfs.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163myqpjuwf.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ztztnzzx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163thlstjtu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163uugexinp.html

================================================================================
来源：http://www.xuanzx.com/163uhuekxzr.html

I. 正则表达式
来源：http://www.aibaodan.cn/163qszchzfa.html

================================================================================
来源：http://www.xuanzx.com/163dqdlzsri.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ltudxrtv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163aeovfsqj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163nnrkbyyf.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rmjgeyns.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qvturyhm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163mzbsxrfo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163momjfhrg.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163nhahpszl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163dlaqbvst.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163puespkip.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163rsrjvrze.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163izvwkvdu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163iktubonc.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163utykohnu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ijtvdlru.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163syaikkfb.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163coswlroo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163bhjbqfmh.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163iybvkwkk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163yugxlsbu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163zxhjryjq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163seekeefg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163rxspzbup.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163cvuxchaz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163mgbisxwx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163iejtjaiq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163apxolbrz.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ohkwssqr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163dwbztfwd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qxtxbybd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163vzxurvxo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163grhlsmvu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163gmkkxbnl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163wbyuvbmz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163zfcqydvb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163hoebwvja.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163zedsvwzq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163amzcqnlf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163zfdlvism.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163solcqyfc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163njmwtgoi.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163xnqujjdz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163nlgeaxbs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163aeioempx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163wyjymfvp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ixrdvlhb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163yxrnugeq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ukhofwpa.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163byagwigr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163xwrrowuo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163mhpmqppo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163qrqofkqp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163xqgvsxcr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kicqtmmx.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163twvycfoz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163lyolhxqy.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163rfxtcjzo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ilstnqno.html

TS:   /error/gim
来源：http://www.sxryk.cn/163nawkjqtd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163eyuqxzsp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163juoazibd.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163lrgydwnf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163erfpwxlp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163aqaktxfl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163dyiltpwt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163lnxoexjl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wduwwtut.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tndhuvpl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163xeamygdk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163itwpssgw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163stotlkwe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163uncttpbd.html

================================================================================
来源：http://www.aibaodan.cn/163rcffvmge.html

J. 日期与时间
来源：http://www.aibaodan.cn/163wbnjqgao.html

================================================================================
来源：http://www.aibaodan.cn/163tfhkshqk.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163eupdgnxx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163danvoola.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163remdzfih.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hfscnieg.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jizqizxz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163evdtanjm.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163jnhejfxn.html

Ruby: Time.now
来源：http://www.sxryk.cn/163pwmjkjtw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163grybcehg.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163uaiokpkx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fswsvubt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163krieqdqs.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163whmszbph.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163fuzphucj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163mpanwvhf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ftzvcmuw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mupzkjgj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163rcvththr.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163hbqrowqi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163dwaspaqj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163mphckzrs.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zdlbglak.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163plevxjdf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hsgusqsn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ioeseaxo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mxanbmur.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163krgtnwrt.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ascsnmdi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163cjdfpfyc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163kptojgbe.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ekqexmox.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163kbvpsdse.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163spcrblik.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163czjpnvyd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163viyezcpr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163tjuszvrt.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163baxpmopu.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163iyccjcft.html


<!-- 参考信息 -->