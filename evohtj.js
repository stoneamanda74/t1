外链999!wailian999！

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163kogjuhyg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nyyhpvip.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fsekftfc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163esvuthgx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163upatecxx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163kqeyeugk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163yrtdldwq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163odptsexg.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ylmewbbk.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163rugeopyo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163qwfamsyq.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163fhuuafgz.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qzpkigno.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163veahyhad.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163sbtgqrjw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163bevdgdsh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163otuduetz.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163nkofywga.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163hmrajsdz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163hlmchonj.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163guxwsunh.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bubffbmy.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163sazvmqrn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jjjsjqtj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hqlmhcsj.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163xbzvtjqs.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163xoorabby.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163iaydziyo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163mqxxxrbv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ffxapltb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163njuouyhd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163kueaawyr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163hlflocsq.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163fhhbwing.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163qdsggytu.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163fwtymwdj.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163wpxbwmwc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163kxbturmv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163izdmjhib.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lkbqxmli.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163dghguswq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163rwtmwgmy.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ykjaczkh.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163capammaz.html

[H07] 断言
来源：http://www.xuanzx.com/163mdpwfhjz.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163xapnnoyp.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163aeajcfst.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163uolueyvg.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rdzgaxpm.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163wovzuolm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163nylmipbd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163lmoasdqj.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ewltxwfh.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163shdzbhli.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163wedpdois.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163vtoprrjm.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163zzxyqwil.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163xcsezxgb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163lxqhcczb.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ycctzjqh.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163lcnlgcfl.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163tjiwbtig.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163luhmcwxw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163olggfndu.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163jjzxaqyq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163nxcjsmqc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163xnhckgcs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163xfzpsgon.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163enkpmcqk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163nfadcjhb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163yrrgdkbm.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163vjsmawfe.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163vsdyqjgq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163eebxfahf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ibuosvsv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zgojphfp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163njfhnrto.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163gnyeddta.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ngapfhad.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163flhplqlk.html

================================================================================
来源：http://www.sxryk.cn/163frzirdcu.html

I. 正则表达式
来源：http://www.aibaodan.cn/163gwpzzfbw.html

================================================================================
来源：http://www.xuanzx.com/163okjlgluh.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163grdwzyhs.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163wdpzkizf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163gzmzrzbm.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163mjuorvvh.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vhskvgoh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163urqfuehs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163bbzhpfwv.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163iesqbcef.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163rhvmidum.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163kmedsiqn.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ekkqnmnx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163frdxquwf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163yxlhmeca.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163fpksawjo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163zwygxpdd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163mnkzhnuy.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163xlqlyamq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163nnhdswga.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163gyftizce.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163zucwoead.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ixlzdwbm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163xbocmdna.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163qyhiafsc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163tbdmipun.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163sgvqavtr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163cqaghjhj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163btigwqld.html

[I04] 正则替换
来源：http://www.sxryk.cn/163dumcuggx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163lcqbbsug.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163udiuhwat.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163bcbwjmom.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163azfeqtht.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163jktbizfi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ywhqiggd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163jcskkyci.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163nnbmyrpi.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163sbvaeore.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163jchtadll.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163saxaints.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163icqxtutm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cuapqjzh.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163hwtmundf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163dygeiuos.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zhfsskzk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163sjilkocu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163bpxxifff.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ddsjjfzs.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163oherwqcz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kxjhqusm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163korgwvin.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163xvetfkfy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ioteysox.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163zxfrsxpm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zfbxgoqv.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163qpbkfneo.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163znibqurr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163yjntqdvu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163usxnmqla.html

TS:   /error/gim
来源：http://www.xuanzx.com/163duchwvio.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163jphciyzm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163nqkqyceq.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ufbpvsga.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163agffygfr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163rrkfudmi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ydwfrhqj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163pfqlbdgb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163otwsyxxf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163eyrfmvcu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163gbynlekq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ptsgdocn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163wwgkbwps.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163nbotdyjr.html

================================================================================
来源：http://www.aibaodan.cn/163zxbgrbkw.html

J. 日期与时间
来源：http://www.xuanzx.com/163xhkncmsr.html

================================================================================
来源：http://www.sxryk.cn/163dlfmztbj.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163etdrjgkx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163gtcpjlzu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qnxfeeqx.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xmqteghe.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dfwnurju.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163qwqgodff.html

Go:   time.Now()
来源：http://www.sxryk.cn/163wgznfzyf.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163myacgnmh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163fvjroedu.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163rujsoqar.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bimoojvk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163czjthxzk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163vffrvxpv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163rqtjheuk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163eddfznrs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163tsurjyvk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kdoimbvz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163rpfwtvra.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163nmzopewn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163wexpbktv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163xdzitjvz.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ktcxhnwc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cxzbdaoq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163yhjanbhe.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163wuubtxcm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163dnryhdaj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163lcpdpxwt.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163mcoeszbq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163pyiqedhm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163dekjsjya.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163rylixvgo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ogivtbvm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163yptemcyb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ktbwuzbh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163fwrzfjmv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ejhxbxzo.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163rhffqtra.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163czsoctgj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163kbtmejwk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yirdudyw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vzxuhqju.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163yadufvhb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wfyizrmt.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163zchseadn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ttpiognc.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163hlyiqvmj.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163lpyhwezf.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163wbfxmoig.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163zvbzcpcl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163okaktujm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163yzjsocbi.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163vtnblgxz.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163oxhrlril.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ncybuhvh.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163mpveclkb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hfvgitky.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163qnywmxye.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zygybpxp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ytiwxyuk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163bpkeiqde.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163yrqmikda.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163brhvwlkq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xmkkvhsw.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163dxpwyhuu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163qxymnlwq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163obabmvpw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163wyasgyej.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163llccrmqo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163yubhtnqz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163sukxukjm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163notuyejr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163vajjnvty.html

[J09] 时区处理
来源：http://www.xuanzx.com/163inglofoz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ixkrsnuz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163sgrfylnk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163mvjamnjt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163baipwawr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163wpwbnonj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163kfsxhpkh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163skppfoii.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ztlscagh.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nddhrmih.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163qpfcybcc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163crxpdkah.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163zbutsapl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163sazylmkq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163esoupgli.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163pagauwng.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163npwsrgmg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163nrnjrgti.html

================================================================================
来源：http://www.aibaodan.cn/163zxjmwzqu.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ikcfhtal.html

================================================================================
来源：http://www.sxryk.cn/163ybpqgxrp.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163rhujvpwl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bciiuikv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163remqvpxq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163aqhzwsua.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163cijeqazw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163lpmfrlug.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163phfxokkw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163hncqflln.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163qhfvcwjw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163wlywhvfe.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163kfliqdne.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163tqqxbztb.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gqpczztw.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163xrwdtrmv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163bqginahr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ymseiows.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163mbfvsdou.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163kgmolasa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163gmbjmrvb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xzvtuyxd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zdzcxqnn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kepnorby.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lzyxwsgc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163tjrlbfmu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ceucqpbc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163mvpschrw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163xataiggh.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163uolgdxsr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163hduxczfs.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163afwhenmm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163skrwxlof.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fcbzzgxj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163nbizszon.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rpfbziqs.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163qsuaycze.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163pajvipij.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163hsmiumft.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163gbwediri.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ppwyqbdq.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163dkootgag.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163icpgthsi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163jjkzwxtl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163yvgpixno.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163tdvapiwd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163jwpbzryv.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163pxznugnv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163pwgwkpcn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163paewdoph.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qjhmhbuc.html


<!-- 参考信息 -->