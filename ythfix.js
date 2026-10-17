外链999!wailian999！

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163bhhqfprw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163dnmczixe.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163dzuppfbe.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ctpvlqcx.html

[G10] 访问控制
来源：http://www.sxryk.cn/163dfyiplfb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ikuyxclr.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163zmejlazf.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163jxfgxqwm.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163oycmozyp.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163kzlyfrid.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163tjqxkhce.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163lrlmfweb.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163yumlrnhe.html

[G11] getter / setter
来源：http://www.xuanzx.com/163tilxmkfe.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163owwkdswr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163upfxgwxq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163lziwxrou.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163riqiwjod.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163wbhxluaw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163zpuuxxxc.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163luotylkq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163mbophcdm.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163vbgnpytf.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163gslrqllw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163kpkgccxs.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163qebkqlag.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163rehynlrb.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163jdhjinyf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163vtvkkbqr.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163tdahqykl.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163kekkuqot.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163dkrmufvb.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163xwteklxi.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163yfgmvaij.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163avefmotm.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163phehansc.html

Java: u instanceof User
来源：http://www.xuanzx.com/163nmychbin.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163mqkfhoez.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163jlsymgdm.html

C#:   u is User
来源：http://www.aibaodan.cn/163crltziam.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163jdlsmpfu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163hjshdfzv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163hzacszyp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ikhihhah.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163gicwygll.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163csxvgceb.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ozufdhch.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163cjkjtyrl.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163eiitigec.html

[G15] 枚举
来源：http://www.xuanzx.com/163xywwdkxv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163rgvsussg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163noqnzltg.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163caybuqwz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pwmyqyet.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163naxpwwlf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163rygixjly.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ekhmaxgp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163znraqpwq.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qyykajff.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163fzbeiiix.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163etolpesj.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163bdgoikyf.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lxtzfgrt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163lssnqbje.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ppasohsi.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163lgbzvroe.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163lchklpqs.html

================================================================================
来源：http://www.xuanzx.com/163pkbvhsrt.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163qmsyakow.html

================================================================================
来源：http://www.aibaodan.cn/163xyhuqyuo.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163jxoxwmvn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163igironip.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163jdtpxxfr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xquowjyf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fwwauzsh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163jzntdgrf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163hmehupid.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163alvqkjbq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163xbhmvpjz.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hqgfwsek.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163eutcjixh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jfbqozlm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mroikckx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ugkonvid.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qpxzhgcb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ykdwdvha.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163pwpterlr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ncksybyb.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163wmyliddw.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163cvxcjveh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yxyonfiy.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ejkacone.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163yulyjfjw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163rekmvtvi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163zqjdwurk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163aqqoltpz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163pbulocmt.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163tvodcmng.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163dlrvmipl.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163hcbjyvfl.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163sddvtthq.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163glkozqxf.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ttdiavue.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163wqplymyk.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163omtliwpk.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ofzbjpms.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ymfmlslt.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kohghvsp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163riedboaq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163nssvorft.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163gscgmwul.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zbgmkotr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163fglefyzf.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163iuoenntx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163oqrwuqhj.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ottjxjgi.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163rysufjpe.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163uofxppam.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ofpevzib.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163dpwmbdcf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163uhbitlbl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ksdwdqkf.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163vtpqezwv.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163tnkfhazq.html

[H07] 断言
来源：http://www.xuanzx.com/163rnxktjvl.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163zzlukxir.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163htshlacv.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lovkyvft.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zprftfas.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163exwxlszj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ezxsdwbb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163opjednbe.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jzsigabc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163qdfibrjq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163tjlryndc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ydbrcauy.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163myxcwsoa.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163unlvrcyh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163pvmdekfw.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163cytlbqam.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163khxwdkhn.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163bpndwnna.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163anpwwhnp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163oluuzoud.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163jsgnonji.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163handwelh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163obrkfpbd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163nxtxucbq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163zopdmruw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163izlaeigq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163mjsdcwjp.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163bvlxaasz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163gwibefvr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163cokwsxtm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ebrvkyee.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163eynwkjjv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163jyhqqogt.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163dnzmgukq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163mgzmbixi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163gafriyti.html

================================================================================
来源：http://www.sxryk.cn/163dvyfqtub.html

I. 正则表达式
来源：http://www.sxryk.cn/163jypeduco.html

================================================================================
来源：http://www.aibaodan.cn/163mejslztr.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163vqmjjetc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163eagssljl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163rfwrlrtp.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163komalxxi.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163qzzjzlte.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163mvejkoyq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163mvpxrpvn.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163vxafuqft.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163qqjrjpub.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ooavriiy.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163smmuwapn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163hifrgwli.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163eatthohl.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163dhmtpmul.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163giprdofm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163coyzhtjc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163auekqjxj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163nibolmqr.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163fjiyemsq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163jpsakrvd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163xfnaqruq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ovumomiw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163bkrkrpop.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163lqqldgal.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163jtbhojho.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163dcvnkzla.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ghvqfpna.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ljzhumua.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163joiiaeop.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163szsxbgsr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qvabclkz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ahiuupxr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163qaghbazy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ozuebbwp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163jyghvvzk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163mjdydgsk.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vipdjnsv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163zyhgwagc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ylgmkepm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nuknlwcg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zzhlgton.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163pzsifwwo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ojnaumcw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rwcrudlx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163tjctlpgc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163tuewfttl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xawihrhx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163xixamfvm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163xziggzta.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qmbvkity.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163tbhirzxn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163gqopjfhg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163wkcyozgq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163unhunfto.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163udvmaawz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163rtbprhgm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163oqlvgieq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163pddlblwz.html

TS:   /error/gim
来源：http://www.xuanzx.com/163njwofpwa.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163qxyuzjya.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163qqoeziqa.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163qhnhsoxh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163srhrrpvm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163hiuiipga.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163qtsjuhzi.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163mlrzhysu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ipdnzzqz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jfgxwtdp.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163gwaooago.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163wkmgqowi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163vhxyclkp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163wyaipthj.html

================================================================================
来源：http://www.sxryk.cn/163oijifums.html

J. 日期与时间
来源：http://www.aibaodan.cn/163bxqpgbvb.html

================================================================================
来源：http://www.sxryk.cn/163hktdtzeb.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163zxdawmmu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163oxxotwjj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bvrefhkf.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163phtuozcx.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163bzqbkmwb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163eyubwcgd.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163qlqeackg.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163etpqsrbw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163notsheuf.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163oqyrhgfy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kxvdwdqb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ybcyeqpe.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163puxlyokv.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163thcbfndt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163emsyxxmj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163cnzfwusj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jevtjoch.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163obtodnxc.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ansvfohr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163fynyiabn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163rrpjunsu.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vdplmdtz.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cexdbqgu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163sregffhr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163zuavybnt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ptzyttyt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163xnujfopx.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zmlarrux.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163byevvwyx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163fnhgmowj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163uphbenkj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163tdmeibth.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ctpuitrt.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163aahjgjqj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163rekxfbpf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163yycddtge.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163lblshjwc.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163hcbssbhl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163knyotzob.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163iplhrphe.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ghyxjbgg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ybqyeeal.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163pgjibzxl.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163pdmakprb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163chfbnzwf.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ichfuwvh.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ohklbyek.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163zlglvvlk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163pgqhkckc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163xmdkmzay.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163hqvjkcmv.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ipmwjlrt.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163amfdtwto.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163wfesplfk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163dkhizpjz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qayqcbpj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163fdgfbksv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163nvnjrmad.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163pstsusjm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163cmixxfdw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ryhuewme.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uqxzhokl.html


<!-- 参考信息 -->