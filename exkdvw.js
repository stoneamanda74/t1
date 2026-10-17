外链999!wailian999！

[G10] 访问控制
来源：http://www.aibaodan.cn/163wajanhlf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163velyjymu.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163igmgeuup.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163jetylckp.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ceemdenn.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163pxpxwnbc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163fnvlkvcy.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163kcezxkjo.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ucefmrmw.html

[G11] getter / setter
来源：http://www.xuanzx.com/163gpujbqff.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ognluaoe.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163zwdkeevh.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163mceibitr.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163bxztrvmv.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163neeqrcxe.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163jtkdeiol.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163icguerxq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163tpeuwzkh.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163fnrivhvj.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163lecttemj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163tjvpfnwv.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163duzzltyt.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163crgkwter.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163tqbkuffw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163lbgowukp.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163jnweuvzv.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163enlypkku.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163zpohasuf.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ddwucusg.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ahsvcrho.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163bpfxanuq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163mhaefzpg.html

Java: u instanceof User
来源：http://www.sxryk.cn/163bgppkabf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163auwunkim.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163zyfbhatp.html

C#:   u is User
来源：http://www.sxryk.cn/163xfeauban.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163hlhqxnag.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163jmongizx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163qkudmodh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163vcnrbvxn.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163xnirlewx.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163wfhfltxm.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ajvjxdhs.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ytiyatvh.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163toumgntp.html

[G15] 枚举
来源：http://www.xuanzx.com/163scvekpvh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163qbjiapeg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ypmmdbch.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163foxxontw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zckhdqjt.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163cglaozis.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163eswwpqhm.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163sctptkag.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163plsjtzad.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163zpbuqnoc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163kngcjqud.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163xyhftdrt.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163uyepttdd.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vpnhqvjo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163yeuzngnc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163apeamitq.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163sykllzbj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163xqnwnlfy.html

================================================================================
来源：http://www.sxryk.cn/163bpfpszqz.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163sdbkfbnf.html

================================================================================
来源：http://www.aibaodan.cn/163rcpyqfnt.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163szezzomh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163fcjgtwao.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163wkodoblg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ekwykjlk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163unntnjwp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163fwxepnpx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163glrqrrlk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ddfyezej.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163okiswoyr.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163xesbeqak.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163bjogaoxj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ytbfqsex.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hndoyrkl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nkooctpv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fsnyctfd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163gvwipheh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163mlvdrlez.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163cxuwbdno.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163kixprxsh.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163lcuokupd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ydvsyhjz.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163woptmuvl.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gbbhrciv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163lgivppgs.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163khwuepfc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163zdylupwb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lfjsmeyf.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163qawfpuzh.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163fxropggg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ekahrmcm.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163smpibsua.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ssmuurld.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163qhacnkoy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163pmigpngf.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ykglesuq.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163chvuwqra.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163sjeijeyx.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163tswvhbjj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163hweiijli.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mpzuhtla.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163iaiduasl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163xiodpiax.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ehzzgaea.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163yuiflwsg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163vlebtkjt.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ghlncife.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163mvstmgmo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ewlrskmd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163cxdsblay.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163exciqmia.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163hdsqmxfy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163mqamjjcz.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163cktgkmkd.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163xxhhadlh.html

[H07] 断言
来源：http://www.xuanzx.com/163lfnqrewh.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163jahjyftn.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163tdtzhdls.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163dpgnhszh.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qzgshdgh.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163mredsdaz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163bglhtgyn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163drkzulue.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163noaidkmp.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163agjfofdg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ylngzvsp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163gdkujkav.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163qlpnjejo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163frqcypmm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163bhwtmkoi.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163oaekwbto.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163aeeuosml.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163hytrjotn.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163cxnnxqrr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ybndocoi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163eyaqulyh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163irugfwrq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ntydxjfw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163zfxdpfni.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163hmsqsjdc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163jbjddzcs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ivxzfhgx.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163jckeuusw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163iroxygxg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163jggpyfzh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163imygsyfp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ttejjksx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163abvbhiyq.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163gokvrxda.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163sclguwvd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163zevnlrug.html

================================================================================
来源：http://www.sxryk.cn/163cilmhaaw.html

I. 正则表达式
来源：http://www.aibaodan.cn/163xzzvhdum.html

================================================================================
来源：http://www.xuanzx.com/163jlibflfa.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163rllslgcf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163vmdlaarz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163pvfwogxg.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163olzwpbsp.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163effmqjxz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ottvhjxd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163uzuskgoq.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163qthrzcga.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163cfkjdopo.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163apuxwnkp.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163nmikxoem.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163nybtvyyv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ugrxhuhz.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163dqqnjulc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163pleldpot.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ddeebcki.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163zdybwzvu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163rypzylor.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163cjodoqqf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ivpwdawt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163mmcehkyu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163adixivca.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163oujioqyw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163nwdupodd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ahexugna.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163zkygjljl.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163natifdvs.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163pkyokyhz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163robxchtb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163rrcjrnlz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dtkymjyv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163varnrutf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ifmjbetd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ehrudibc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163hqojrtqh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163opfutrtt.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163srjyrtad.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163nuixseop.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163gxutxylh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ygpehvgf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pmwxeiic.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163uhhtyzzf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163zmjafypt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pccpmivp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ctjepykn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163tynbxwai.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nuaxjjbp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163yjjtmqdp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ztorpsks.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163nezcltbe.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163iwvitkyr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163pxcdespw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163idqinpfs.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zdhddmot.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163jotomvel.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163lruyqngl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163vfklpfeg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163zwvrdwrn.html

TS:   /error/gim
来源：http://www.sxryk.cn/163xkyfdjcg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163btcljkqr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163hysziyfx.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163legohafc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163rnrqrqpw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163pfoyljts.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163smfixikt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163cvxbbrqw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zhwctrqe.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ajvdousm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163sowbqmlu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163uzewwufb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163pnrvgbcw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163dkltbtys.html

================================================================================
来源：http://www.xuanzx.com/163qhcjztbh.html

J. 日期与时间
来源：http://www.xuanzx.com/163mxmgsijl.html

================================================================================
来源：http://www.xuanzx.com/163oizapwoo.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ywmbwnav.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163mwfxbjrg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xbottijl.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hrxkcqdm.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gkhadyrp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163loowmppp.html

Go:   time.Now()
来源：http://www.sxryk.cn/163hfjmxxio.html

Ruby: Time.now
来源：http://www.xuanzx.com/163znrolzeb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163zdyqvwdr.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163vbjeolsn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lzlscsbx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jtmjkkad.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163tmbmgfko.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163wqipxdwk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163fkhisqed.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163smbjsejk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163csnundsl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163tklymucr.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163yzmyhurl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163jzisoxpo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163uczzxoni.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163fvgqcuuz.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vpumcwuj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163jhltwmin.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163tmouupkc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163apoovpch.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rpbyybnn.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163hzoooktt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163okgmjfib.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163luhffnjn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163pqdwzlhp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163guqlpdss.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163hkxgyuso.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163bezbwxpj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163kgsdicee.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163dahmsdft.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163exjlqrpb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ttfrpepp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163okonfnus.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zcpiuiwz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jlwssehd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163vxonclbd.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163exqjhzhj.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163zbqsyrbp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163wuefieob.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163jhsomzgh.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163sxjlkqoz.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hzvqdkgq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163budphjnq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163qxgoonov.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163alnubomj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ywjwrznj.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163qibadrsz.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163zcjtdwmw.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163jvigazrj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gzeauulr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ntwglaos.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ghgetpff.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163cqvabjik.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163pxceqsgv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163auzajasy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rtxvqxrs.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tuxasnjn.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163xguccrmc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163fbiznzko.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163wetlcqhc.html


<!-- 参考信息 -->