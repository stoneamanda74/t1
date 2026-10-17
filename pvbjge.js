外链999!wailian999！

Ruby: super
来源：http://www.sxryk.cn/163gskgekdw.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ovssehio.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163xmcdknoj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163evwzojpy.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163mgwohrve.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ypzkodai.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163fpzsbzxg.html

Java: static void f() {}
来源：http://www.xuanzx.com/163hicdhmsj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163qihunkki.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163scippgwk.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163gvyhywxl.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ooanzylc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163vnnttkqx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163eejiyoof.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163xljynkod.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163fljdnavu.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163jrleibtf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163gfbsimpa.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163rtgnufgw.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163sytdcluu.html

[G10] 访问控制
来源：http://www.xuanzx.com/163qrgfwjlc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163olnqywmn.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163avkxhfip.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163alofpolj.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163esfhjsdi.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163jrsjyjdo.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163jnlddcvn.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163drhcjgoj.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163kzidvwsi.html

[G11] getter / setter
来源：http://www.xuanzx.com/163urqanzok.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163khuwvmyg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ahlmarni.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163rucxctzs.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163bmsozevm.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163qxrxbqof.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163vojsslpp.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qqtetcsg.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163arpgwegk.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163labpfltm.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163bqbisvjq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163osztsukw.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bqgoypyh.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163xypuvaxp.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163uljkslhf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ndvupsns.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163zfbtuvql.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163hcsluzsc.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163wvvbkmdz.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163niajvxel.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163svcrtblr.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163dhjilrku.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163sbztiyrh.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163osrxvzzi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163xmxqffxj.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163zxzcikxw.html

C#:   u is User
来源：http://www.sxryk.cn/163ljhgpjkx.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163fnftvmxa.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163xjwwkszo.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163xorapkmh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163swoufdap.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163iwyhfyjn.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163uytcqrxc.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163heclhpja.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163gjzudlnf.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163nqcvykbs.html

[G15] 枚举
来源：http://www.xuanzx.com/163znwqmykq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163khuhkfli.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163jyeusozq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163woglkklf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163axldrseo.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163priwidxa.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163wdokfkut.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163yzfqifgd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bzwwqijg.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163pwzqjwpg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163evwrxrdv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163hiyqlepz.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qvblkeci.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xxqchtnv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163bhlfdwmo.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163qwrteytj.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163jspkrlyv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163akhwuoek.html

================================================================================
来源：http://www.sxryk.cn/163eiruxzxh.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163qostkdmx.html

================================================================================
来源：http://www.xuanzx.com/163fvqdxjjq.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163klxwdcli.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ipuoialf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163rieqicbb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rgfkfgui.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163seeplmeh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163wtncczja.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163jrlkrzbt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163maxzgwbq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163vhezarvu.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163jxhevabv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163yfdcelgy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163eobumwao.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hzsqdoty.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fqbladtt.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sizhbqls.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ojdtszzz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ymbtggjg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163vnjlotia.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163icjtfzkw.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163titwajon.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163gddevfpj.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xkonmxfz.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163yefwacil.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163eahoqqps.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163vuxwepqq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163sbmbzaux.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xtgerkbs.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163amguluau.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163pctqzach.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ifieezcp.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ixfiraom.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163eisepgpp.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163klpqqhtr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163mbdniwyp.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163akrqiups.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163gukjzyak.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163mzidmyxj.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163xxmtxiux.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163rjhhzewn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163nzaeueim.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163gzmpphkl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ovtmcewf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163fgvhvhco.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163dcnreead.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163lmtkypgm.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163eoadaxnk.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163pcluxfhq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163nfqffpgi.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163plnuecrk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163donibndh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163dhpevuon.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163rhwckouh.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163akccqocx.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163hshdbysf.html

[H07] 断言
来源：http://www.aibaodan.cn/163ecunfguq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163jtevyjoj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163bneglrvr.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163sunxdhic.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163thferxru.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163urxbhpda.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163xyqclnay.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163xxjextsg.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163usqvhvmd.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163rvazbxiv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163djoiuwub.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163nwacaphm.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163zgetkuez.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163nbfqbpjl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ifzhcinq.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163builjgpd.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163iphfiohx.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qxyaceru.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163cwisitvn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163jrtymmxb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163scelvjlh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163rhusqdtb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163djjjktat.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163qalnewyi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163qpbguiql.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163gkfitwvt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163twcwoouv.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163aolccear.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163fmnxdlli.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163cvuerowu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163juupqnir.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163efdboptn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163gruyntcz.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ygxxzoxc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163cdsnpqtm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hhsscniw.html

================================================================================
来源：http://www.xuanzx.com/163yetvlulk.html

I. 正则表达式
来源：http://www.xuanzx.com/163ehskwimk.html

================================================================================
来源：http://www.sxryk.cn/163gbzxyuor.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163yazyeynp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163gxufecis.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ytxfnniq.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fpnrjkwx.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xyeftcdg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163qvviumrs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ekhnarcw.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163aguguxdx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163vwrkurky.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163uchvsigo.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163cbwdumcq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163gxiprfzk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163slsprxxx.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163feitkxkh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163qgdsxtdn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ijpfgbuz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163shkvnwlp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163dlkuodtt.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163hqpeuvov.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163xwphxubk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163igelirdk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ochopdoc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ezklduux.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qwhqohmg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163dpbnjgoq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163kyrcrrgx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163cvjlqrkz.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163bdzdnqtp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163qafmpuak.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163plpdekeo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ruymfpwu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wdxrcnkd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163lhjjthpk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163mpzxfcah.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163psyfabdh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163equdcwlj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163cjxmuuzx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163dvoxpesq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163xegxjdfe.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kzakvrwj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ogvfggdc.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163zcsfxrkg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163tlqqhaan.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163yzjiupxm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163kvunlfbb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163fiycsplf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fyepdvug.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163tlwcpwgn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ctbctktq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ijvwednd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163jkgtgyne.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163arzuhoca.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163nnvunnmq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kklojowk.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163jqilwjfv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ecrorpfa.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163kvjpgftz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163uisnghqm.html

TS:   /error/gim
来源：http://www.xuanzx.com/163jdviravn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163krbsvylt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ltitemll.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ihosendc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163tmtejafp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163fpposjfp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163cvvnnefp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163agmaowdh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163byxsuzor.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163keteuuyk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ukeveroe.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163elbcwacq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163cswylymi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163vrmqfxkb.html

================================================================================
来源：http://www.aibaodan.cn/163qrftkbou.html

J. 日期与时间
来源：http://www.xuanzx.com/163slibmhqu.html

================================================================================
来源：http://www.sxryk.cn/163zoszfkmg.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163gybbqstx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163toijlciv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gnthtxeg.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163iyzqdzwg.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163janaocgr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163dnqrnckq.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163smyeothp.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163flxqbrti.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163izsyailu.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163bjkozcfb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pmdathqr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163drfjjyaa.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163zxzrepwx.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163fbtqpzqz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163htlwvnfs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163dqmeeafl.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bpfrgrnm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163laptamzg.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163agxovtcf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163stqeeknz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163kwukwcnb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kyfsstzc.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163osihchkv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163tapymnry.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163tufadxdt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163hjhwqlks.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163syndzplq.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163mixqxiea.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163okyqzkfx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163hzaweude.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163npjsglzl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163aoiobvdp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163wspbwvgi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xwriaexv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bakoyuir.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163mdxgzbfg.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163vrhakcxq.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ntlxsdgm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163lnonugxx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ybivqyhi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mmtiqtni.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163bcyxiyuv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163dotvhveb.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163jyvrcnnr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163gazcfnmu.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163iolcdabt.html


<!-- 参考信息 -->