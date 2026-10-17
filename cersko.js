外链999!wailian999！

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163hgkejhru.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163apwugfou.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ilkfxcpv.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163wgirkxxx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163cprsblvh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163qcnlpnab.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163jrgbdwfr.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163jruauhox.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163gcytbjyb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163tqieyidi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163yandemqr.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163xzfqiynp.html

[G10] 访问控制
来源：http://www.xuanzx.com/163caokpqju.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163afdclioc.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163petscguu.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163vjvbodcs.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163tdzuvyir.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163haxqmmoc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163iiyeqscu.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163kecbwdnx.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163elyliaio.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ptsvdeov.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163asvkawqu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163reclsdpk.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ztsyujdt.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163obhsnijm.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163pzsxlgwz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163fsvxltkr.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163tfcrrmht.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163phjylnnk.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163pvdecezp.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163svvruzcu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163fwyizkli.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xhevsbcq.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ctemiccx.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163xnfpktar.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163npummohb.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163gbwvrttm.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163tgewvvdx.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163anmgtrcd.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163vijkulno.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163zbiwfaam.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163bfzkdhcp.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163tsiqnaxk.html

Java: u instanceof User
来源：http://www.sxryk.cn/163iislekgb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163kwnkfrvo.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163mspzsihd.html

C#:   u is User
来源：http://www.sxryk.cn/163lswgulfd.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163usuovcbo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163lmmenotq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163rktsnbcc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163miikdayf.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163rupomydj.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163njqtkgiz.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ekxnpfci.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163zgtpcjub.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ftqsfdno.html

[G15] 枚举
来源：http://www.xuanzx.com/163izyncvdo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163qfrpvrhb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163rddehtbx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163hsipwsrb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dvbfaman.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163uxdrlsct.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163uegxemth.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163pmgujfqq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163uocybucz.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163dbhiffnm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163vorljixi.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163fabtjspq.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ljdxjucq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tnucarcm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163auyadxgu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163vazufyci.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163bfajndpb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163yumstccn.html

================================================================================
来源：http://www.xuanzx.com/163ombupvdp.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ppxmlvrn.html

================================================================================
来源：http://www.sxryk.cn/163zheyucgs.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163atzxfitt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163qwfcwtnj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wotdnryw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163evbaepei.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163gskcazyk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163vjfkzxak.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163jebwxvbb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163drdzfmwb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163vnjxpuhw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163gffhuiug.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163pgefkgvc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tpiwjttc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gmxajjvv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xygxmqpr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163eyffufqv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163aobfoscr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163eqegcdla.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163lsnunchg.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163zsmvsilc.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163jektiqpi.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163krgoyjek.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wcpfxqht.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cpdctdvl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163yacyedxq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163vprvvrlj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ztkolerm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163vbxkpynf.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163cbbzqvoi.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163fpdqkudd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qqrdxwor.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wjlnshwa.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rdjyujhb.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163hmmauhgc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163kepdlaes.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163jdvlkenp.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163iduqmelg.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163bodrgdfr.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163maisyylt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163vjloozsn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163owaxbdoz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163nndwvktf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163jtkvupjr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ankxblqn.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163bwaartdt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163gdphgnor.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163dwgyqlcg.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163pwwvzemj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163nnwxbuev.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163iwfdxjrx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jqlikwmd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163cdkqdwur.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163udrikrdw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163uvjxxuiv.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163uxarxmvm.html

[H07] 断言
来源：http://www.aibaodan.cn/163rpjvxumv.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163bogcezhu.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ryylyeqa.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ynxoeabp.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ikfahdmk.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163obyqfcgu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ybccfave.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163kngzxcvg.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163bpzzxglo.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163eroyhntl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ikrhatdo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ljwatyna.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163qfqlpkhm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163axrmkxhc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163xatuyxnx.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163nptzklnm.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163elsagnjq.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163fxoftxee.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163zthrqfjv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ppohcpgy.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163jyoxsgdj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163eqxamnft.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lmeurxcl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163aisjrepy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ayoiauxt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ardogoeo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ndqqjlsf.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163uxndjxjq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ixsiaxep.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163qvfbrubw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zdlnjlxe.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ynqnveqc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163mszmqlru.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ojnuwoll.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163fqmcjtqc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163gmibcxlq.html

================================================================================
来源：http://www.sxryk.cn/163ihezgdmk.html

I. 正则表达式
来源：http://www.sxryk.cn/163msvskhpy.html

================================================================================
来源：http://www.xuanzx.com/163olpawssq.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163boqsrnxt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163lcuzkzcp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163hziviaiw.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163sjwrbiur.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163zrajwlyc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163gbhoiccz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163prppueyk.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163fxefudxq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163nrakkvhh.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163zigdyqxv.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163wqgynidh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163wfufgklo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163fyaljbzh.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163zfqtadhg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163wtkgxajn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163dcqzybvj.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163lmhrfyxb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163rtwjsxhj.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163mohfugup.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163dxcqjijt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163xnbrvwbf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163hyfkjisc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163xgplgwum.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163kechbhxc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163qhsejcpw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ueyxyrwv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163dbflouvs.html

[I04] 正则替换
来源：http://www.sxryk.cn/163mpzvhkmq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163qpoztdjj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163milccpyb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gjnjsctp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163idcmlwed.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ftlpaexh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163hdnnkgyr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163eenorcmd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163beppgpng.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163dytwkixm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163wnpkhosz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ykteszas.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yhpwmyhv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dulhgesm.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163cyulqsdy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163trnwwxrg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163desppmfy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163sivvwtev.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163iddmfsza.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163yenujslz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163zgpyifyy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163kqhuryoi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ciirouil.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163qcsvwfga.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163kwgqkanv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163pbrkvtpr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163eewzpjrz.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163kptyjlra.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163bymmqavz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163aegkcufv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163dcncptuj.html

TS:   /error/gim
来源：http://www.xuanzx.com/163kkztjfao.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163vozcbndm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163pjwfdxue.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163higtikpv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163wlbdpaiy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163xgwuefwv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163meuqspml.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163jdyfxaeu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163prcbiydx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nqqhedud.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163efcpyaqm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163awpztaid.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163oprnjbdp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163rmdqzfpz.html

================================================================================
来源：http://www.xuanzx.com/163ieibpubi.html

J. 日期与时间
来源：http://www.aibaodan.cn/163pzmkwqqf.html

================================================================================
来源：http://www.aibaodan.cn/163lkipbeou.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163xlyrqrrg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163nccveucc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163wvfsukkh.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xjmpmzkj.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rpnwovxq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163bzdzzovk.html

Go:   time.Now()
来源：http://www.sxryk.cn/163dmomvyhi.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vwxlnifl.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163dyuulfej.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163qnajtxxm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163clkunvvq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cetvzxqn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163weefipto.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163uspxhuhg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163kxrisbly.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163qziazwwl.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163exbxpbvf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163azpyefpy.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163tkshzehb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163jdmqyxhk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163erijwikh.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163oxuorqdc.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xpsgxome.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163kcidvihs.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163blwidrot.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163jkgknfad.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ozmqdlfv.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163luwscjwp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nfezlgon.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163xocqhkfr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163iksqgmjt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163hfoboemo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kbvzzwkl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163isucpsff.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xelefept.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163athqxrix.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163jbgrodqv.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163minnehjq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163mmnuocby.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mtbiwrmz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163nbtimacd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163jmrrvtsm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163mjjcfhwa.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163caiithlq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163uouqbgcb.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163wnovfhif.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163eawtpwqg.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163qixrnvoo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ucmxhlac.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163qadxfbcn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163meaydcnj.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163mtyklfeq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163qfqkvzdi.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163cnwzwmgr.html


<!-- 参考信息 -->