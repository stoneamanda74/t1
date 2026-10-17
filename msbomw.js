外链999!wailian999！

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163krrugnzn.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ovzafqcd.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ocqixbwo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163zkyqyijh.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163fqgemshi.html

[G15] 枚举
来源：http://www.sxryk.cn/163jyvunoen.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163fowclnks.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163wbydfegs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163woscxddm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pisydmdn.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163cdchlzym.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163apcreren.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163oucrklhf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vqhxidhw.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163qnollgza.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163hjojsonq.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163qnplhkwy.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163djvsupwv.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163pznzhawy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ujxzyzdd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163zjucbwkt.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qzialmlc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163dsljupej.html

================================================================================
来源：http://www.aibaodan.cn/163ovxpsomn.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ymffztan.html

================================================================================
来源：http://www.xuanzx.com/163duomuvig.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163esgxqufc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163hhhrvqrz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163voexrsay.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163kbwrhowo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163gymoytmj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163lqocypjf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163objpgnfh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163qgjiypkm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163umdztktj.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163byzyuoit.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ruvjfurc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rmyxfkve.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mljztria.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kkvxdwdz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ogawczgt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163dhqvsdxt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163nsxtlgth.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163wsfauful.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163pzcvfsgn.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163tzfjhwgl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163grxjletq.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zvhougus.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163mnooltia.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163apzrspmi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163yzhxbxts.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163gzoarfwy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vvdlcwqi.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163dyakiegv.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163gpaywmzx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163lhtkfdxd.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163lyzqymrm.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cvcaqcso.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163gduzeejx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163vnxdsuni.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163eroyajpn.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163gsgxwegl.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163hzzbjjlk.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ubrtitmz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163rhoglehp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163aeyhtrsh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qgthxnal.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ntskrsyr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163utmwxpxt.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163kccbxbys.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163zefzulqo.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163clszwswc.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163xyrhhfnq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ggpzqvnf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ltituqjv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lbumchwm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ybzveown.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ltfelgha.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163qikvdjfz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163dsuhtdmp.html

[H07] 断言
来源：http://www.sxryk.cn/163qbypcbal.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163kobvsbkm.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163geopusyu.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163gnhphfsi.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wrkaoyad.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163wxobzvrl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163mqadugue.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163epnxwumt.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163jjpafmqu.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163qsfbrddt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163fjgneopz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163mhyaesxm.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ajptesuk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163wfjqfdnm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163mhgxqyoq.html

Go:   err.Error()
来源：http://www.sxryk.cn/163hysbjder.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163blvrhhkn.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163onpkrtqf.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163knlqnezr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163sezkqrhg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163madhilln.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163maodnuai.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163izmlbhev.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163vznmxift.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163rdgkvcvn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ojaqlyzd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163nungpqcy.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163czobhzid.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163qzsheuxb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163xyvblppn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qpbawtpn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bmvdqwix.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163tyyxazrm.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163cpzayxea.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163qpunmdzz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163nimuyiyu.html

================================================================================
来源：http://www.xuanzx.com/163xtajvqdi.html

I. 正则表达式
来源：http://www.aibaodan.cn/163mquzqlnr.html

================================================================================
来源：http://www.sxryk.cn/163gjbswmzm.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163iqwmkkox.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163prvccckl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163kewexjub.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zvckqnjk.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rjokcnot.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163aikwxphq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163khvniaed.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163brykjbsy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163qvnxwelj.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163bjreneud.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163gymzibup.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163fyguiavw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163jcpdydzl.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163drjbinah.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163lfmgfdlg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163umtgppng.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163eyqfwpdu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163obhkvfdm.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163guurlrqc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163zlbytofa.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163dmzhkpkp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163xqnrttan.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163mkppvhin.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163dryajhep.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163iijgwdoh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163pqnvktgx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163arsrsojt.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163upvwkxxc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163wgustfaf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163tbcpfurp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cledrida.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wgyyyifp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163jcwoecod.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163wtmdhvkl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163fckddldo.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163glvrztlq.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163fhqnjxdb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163viluowow.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163rxnudmfs.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pxhuclzk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nbtagyef.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163olusjywg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163gzjdaval.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yxfenvim.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163yrwjlclh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163anfsrqlf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hkswrrwt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163tmvutprq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163giiahekl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gheiafbf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163bdannlhq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163athmuadp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163crdetbvl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wgdevwvz.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163peoeafbo.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163wvcwrmup.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163jowebois.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ydtejbjc.html

TS:   /error/gim
来源：http://www.sxryk.cn/163myplrscj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163tnwxgnnv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163rznlisyw.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163emtpmtte.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163yzzwofxv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163wknvuzzx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163pcixmwdg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163jbijkhyx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163eagrjndd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jnqflghu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163rurqqoza.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163hrylgztm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ixtnumve.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163wdsiqdsn.html

================================================================================
来源：http://www.sxryk.cn/163qjrghust.html

J. 日期与时间
来源：http://www.aibaodan.cn/163gwhmibfo.html

================================================================================
来源：http://www.sxryk.cn/163icswnxoa.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ppyzyzen.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ngtuknts.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163htplnykt.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xlcgiump.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163axgmqhnw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163badqsmqs.html

Go:   time.Now()
来源：http://www.xuanzx.com/163nacuxcea.html

Ruby: Time.now
来源：http://www.xuanzx.com/163acnljuby.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163tspdukbt.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163pixrucik.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vtpqwnlz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163msgdplus.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163fwxzwwer.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ekkjwzdq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163tzcfxsrd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163cvkstlph.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rxdvawum.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ybsmtukl.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163qdvytcvj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163xjflovfc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163xkvcrznt.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mkwjqpch.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163amtkxfik.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163fzgdcqdl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163dogzfykf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163fobstync.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163waeayakf.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163bcrimczs.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163kvfctkom.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163xuhttkrq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163pmvyzmdi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163oymubfdf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163kqtwmnyy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163jlaroyhh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163uodigkea.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163sirqbbgm.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163bcfnfhdj.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163pgrwzgnk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163bxtxirjc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qsspsjvz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hpvlqytc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163skyfbzed.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163fffqdqlr.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ytzxyjqe.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163bzsbcwsl.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ijgfnqmd.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163vwgqhgpw.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163zagyfioz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163scxlaihn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163pyytqwhy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163wcbilamh.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163fjyplsyz.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163sxmiugyr.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163yixbdcwe.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163dbvxghtx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vwyimqat.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163phtjwrki.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bwxvhaos.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163bpvqndyt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163buzhsvgh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163trxuxqwp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mykgxdny.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wqydjszv.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163muyoanvw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163zngbrdld.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163axeyhvnz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163hieitkjv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163fogxrtph.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163iojttuqx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163qbixixeo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163kbclqmag.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163zuxihrbt.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163kpqzhiko.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163aocetgpe.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163vrpobrif.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ovyyzzvq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163bckyfptd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163eoyaysim.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163cswyglwg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ravmylmp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163fprtunth.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ucmychif.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163quzqybtr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163gqjbnjva.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163bvvxzvea.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163csqhyxcq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163sqqapvtu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163yqznnvya.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163xsaxmeql.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163mlpainmt.html

================================================================================
来源：http://www.xuanzx.com/163xsusvitu.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163mqyeqoou.html

================================================================================
来源：http://www.xuanzx.com/163pbvjkqlo.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163vcduhpxc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163psubhnoj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163etffqyoa.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lgczpyzm.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163uvdzzjyt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163fmwhbcrv.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163fjvibqcp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163nmeutzwz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163euvjcrbw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163dplsknyz.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163thdndxhl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163hirhsgeh.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hysocnwq.html


<!-- 参考信息 -->