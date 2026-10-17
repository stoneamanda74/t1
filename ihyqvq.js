外链999!wailian999！

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ipbyyuam.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163zanliexs.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163suzjnehl.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163awpivzpu.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163mezglxit.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163wokzdioj.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163npwuurws.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163xvlklsuy.html

Java: u instanceof User
来源：http://www.sxryk.cn/163cpcsceye.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163wdshtxar.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163wuyldsfm.html

C#:   u is User
来源：http://www.aibaodan.cn/163wrqvhpta.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163zubqonbb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163utrmbvrf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163wivpxiop.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163hovjwdmd.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163qvhvarfv.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ttjfiujp.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163azncffmn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163wvgzqrhn.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163psxcrufl.html

[G15] 枚举
来源：http://www.xuanzx.com/163qexlrdxq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163sjdjnrxi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163dwdphtju.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163oohkqbfi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dqbxdsrc.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163cmxcoegu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163jcfvgxia.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163elbmwpdl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163skdbrtsn.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163aiyriggo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163haslximu.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163tcknrqdw.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zqqebamz.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ddvdftjx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163qhopibcm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163bbtconfw.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163jxfphdnb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163fqbyuipl.html

================================================================================
来源：http://www.sxryk.cn/163isgdsihe.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163rosearep.html

================================================================================
来源：http://www.aibaodan.cn/163elbrgkhl.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163rwfhzjmy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163iswjmlub.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wyhhefgd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163nyabzmks.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163bkretsyp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163fmvhhuag.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163yvzhwgjt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163gwkszsdq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163bgkuzqao.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163sjtrwkml.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163penfyoxl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163quotlazh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mrvgabzc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cckhwzcn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hsazzuse.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ofllhnqm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163nvvrmpvf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163oqwszmcb.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ppnbbyzn.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163susksxzj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163idytlfag.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163nozwtafa.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163cvnfhgjo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163piqejelx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163sfzsshjt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163stxqotku.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ryxbdelk.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163oxnrklya.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163blocifed.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163safkctub.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163noolwveq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163loydtzmz.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163fwlznkit.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163crrkiofv.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163yyrrdicm.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163tgwwylhn.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163kqfngdrv.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163qmaqhpkz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ecdbwwlz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xnyvrexi.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zvlkbrvy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163egbiknru.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163mmzcmvjj.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163bkjvtxol.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163chttnnpa.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163hogyniko.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ejguifwh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163akdhiwfm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kdeeioul.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vyeocntk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163fljxasmh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rblfwfxw.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163oezclfwk.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163bqfawics.html

[H07] 断言
来源：http://www.sxryk.cn/163bwhceqnn.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163uzwoimcx.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163whyadyfj.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rozjfdai.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qukjnsuk.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163nulcbvoa.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163rnioymeo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163kckuocuj.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163xcijixqp.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163yjxkgpws.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ktckueib.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163cozyruin.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163lwwfkzha.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163cgrktpbn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163rrmludgf.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163gxslvezd.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ezlpxzso.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163tmfxzohm.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163yktbxfsu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ygnojiwb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163wkrohhdl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ljetpgen.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163jemzaali.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163evajwygs.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163enpibgkr.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163hutubkvg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163wpjmcwel.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163aoaqkrhu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163pyghdofn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163dldphvbe.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vgxigbom.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163jruvvzhm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163dnxdlrer.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163mupjdqwa.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163nnxocifl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163gxticvpn.html

================================================================================
来源：http://www.xuanzx.com/163ublfzevb.html

I. 正则表达式
来源：http://www.aibaodan.cn/163xmerfrbw.html

================================================================================
来源：http://www.xuanzx.com/163bwdifmzh.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ksmccsbw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163xnufhhbr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163xnjqjhjk.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163uforapiw.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163chgvwnkw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163nbjhxsoq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163lamxgpyk.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163qomrsyav.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163aagldvhl.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ptgltrjn.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163rljrgblw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163cacyaujw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163nivdvqwc.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163iajwhohu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163isbylxee.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163fhhhwfqo.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163jcgcjtsn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163xtefvvhz.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vbadpmom.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163vtetnuwi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163phgvruir.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163wdwkmsrr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163jrnyudin.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163hocncner.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ijehovbe.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163cxfalezf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163cxatgtpm.html

[I04] 正则替换
来源：http://www.xuanzx.com/163nhkclqra.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163atadcvpx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163dmcxmmde.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ayyrtkpb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163aplqxfym.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163csqxxqqx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163xtmzxbye.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163vqqxkecj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163nuftztvo.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163qfdspcmy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ancjpaqg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163gghssarg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qsxllpqc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163uzewlhon.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163rftjllaq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163gkckqfmo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lgqcfwmo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163qmtzgwyr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163xtxfszpa.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ihgswjqg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163vobyhsvs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fwosowve.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hxhgcxya.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163qlhlhwnc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163sqdcopkn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163qgqqqjyc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163uyiyicmj.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163fzswvszl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ureeumct.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163navdsaxg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163smkfuiqp.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163bwyyccek.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163fmotknri.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163puhtksfs.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163wrwvlhpe.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163bhbmljxo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163jqdqbmjm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ouceniga.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163vjjebalb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163sspotrwx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ahoegzkc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ogdaqpfk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ftmevcag.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163jscqiwwd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163qgcmvjvq.html

================================================================================
来源：http://www.xuanzx.com/163edbkvwia.html

J. 日期与时间
来源：http://www.xuanzx.com/163jdfpvvqx.html

================================================================================
来源：http://www.sxryk.cn/163ninzxtcg.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163kdgnsufe.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163xuottcgr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163lozqeekt.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vewoxzzc.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rdezonbs.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163jvczyhib.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163vyzxxneo.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163frlxnlha.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163rnvjewzj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163cwzbwula.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163lfhxkrmk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gfnescgl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163nwwwhppl.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163lvjuzajt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163byonxrvf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163bshhlmud.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163idgypoxv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gurtdegw.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163hoixwoud.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163coopsebl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ozbittqi.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163frnmqdaf.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zwmxiopk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163fxplzgwc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ypymdaos.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163rztwkvgd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163qhfewnzn.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163qdtjwdqb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163oeznyhya.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163wkcbyyeg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163pxpyndjn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163pendjkac.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163xpintist.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163zevpsdfw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ovwdgpfg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163zhnfbscg.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ptqbicng.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163mzmtbygq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163qrnlhnzq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163aetneiya.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163haokyxay.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163voqeomkt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163vxkemwwj.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163anfdnvfw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163sckqdgty.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163sxyavwvj.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163jokiklcg.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163kqweswds.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ybexmyte.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163lhizsshw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163dbucxzwc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163pqxdtapm.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163fpjfbjnp.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vethicyr.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163xabvawae.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bfhxhvqw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163kayohfem.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163esucqfgv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gilsuixl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163xupucbiz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163fwmsjuhl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zscsizff.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dlyjyofc.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ofaddqqy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163xcuiaynb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163hwjsltfr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163rmmczogk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163fmjmtfil.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163kypiubed.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163clkgxcoc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163kcqtfpcf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163fboulxyy.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ijvhoafb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163kjzjonot.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163swjxsbsg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qvywnaxo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bncfiedw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163traauaxr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163rttoldmh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163lfxakalb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163bxkwwzbn.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163msopqikw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163tevpugqd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163kxviebou.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163oxtcmile.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163jtzvehan.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163tulozffs.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ocaoozuq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163cjuawabu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163xzbicnep.html


<!-- 参考信息 -->