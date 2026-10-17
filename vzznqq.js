外链999!wailian999！

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ydoaztal.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163zyicwbbt.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163czvjxmga.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ounuhiac.html

[H07] 断言
来源：http://www.sxryk.cn/163lllsywvh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163xkvbmhak.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163yasjlmrf.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jhprxtst.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ufpiebjy.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163bphlpgyh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163vkylalpk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163lexlbykq.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163omoztjeq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163tjowsyyl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163xcjgbivh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163hmntzqny.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163tpqyubyc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ponnulda.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163hdsmfjao.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163vddinuis.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ljjzuvne.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163bmpzudui.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163aqoadaqs.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163htgxbskf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163qvuysmyb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163whskupdz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163qjeasjwx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163wmmltkoy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163gfmsdakd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163wcdlcaoz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163jahwhgji.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163bjxvdrgy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163xdcnicre.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163hejmuxul.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cgwvpxai.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163isxqaxow.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ozacydru.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163jvhzznzk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163xvgcseyo.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163omhyfkae.html

================================================================================
来源：http://www.sxryk.cn/163cfxgtrce.html

I. 正则表达式
来源：http://www.aibaodan.cn/163cugbhghl.html

================================================================================
来源：http://www.xuanzx.com/163jnxxvxkt.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163hhbjcfja.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163qljbncnf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163icacoipg.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163jgcjdcdb.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163pazrgbom.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163elcysjqx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163zereymho.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163whlcjetm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ygrqivog.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163xkwobzmn.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ozsexdcr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163djhsxrug.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163hutynaqe.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163cykszpyq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163apqwpgwb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163sbfkibuz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163hralptjr.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163kvwgkwtc.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163olbwklea.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ceajfxik.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163frpedtxu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163fcydydpf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163qrkaveqm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163cdjamcpb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163tpyecgeb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163enuslmbj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163yytokrgb.html

[I04] 正则替换
来源：http://www.xuanzx.com/163giueznbm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163rseikgtc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163sqmlpedx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163bdudozyo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wborwlba.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163qlubjiag.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163yazaekfj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163cbsaobdp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163isvexfrb.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163jahlcrln.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163timbaqqf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163gjoqjash.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ymdpzepk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163idtrnqyq.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163xnlosfcu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163cmgunxso.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163unrhllen.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163wauueqwk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163rrcaajpw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zsjxnipg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163rawzpjka.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163bxqyexet.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163hbaxqziu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163bjcadvxo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163dxeenqdg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163adsibxbv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nagbgerb.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163dbhquzea.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163mbgbdsfv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163fynipuis.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163vbyssbpa.html

TS:   /error/gim
来源：http://www.sxryk.cn/163pbssxghd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163krvoqlgn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ncagjjty.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163edcioiqb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163xhutngfk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ygsdwcld.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163epovnctx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163eteomyjg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mfwizbxb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163qakeukfl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163skdupuot.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163goawrswa.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163mmlcyyaw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163thtpwyij.html

================================================================================
来源：http://www.sxryk.cn/163bdzwmnoh.html

J. 日期与时间
来源：http://www.aibaodan.cn/163zrfuhpfx.html

================================================================================
来源：http://www.aibaodan.cn/163nbdaurmn.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ajlxwrez.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163mhsexgxd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163khfnjbdm.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cmhcnsqm.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163loazlzwu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xqoaszka.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163agsgytgg.html

Ruby: Time.now
来源：http://www.xuanzx.com/163mhkoqtmy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163iikfrycl.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163nzjuzszj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tnodlmju.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163vwuiyjia.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163mpznjqws.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163jjlcnxbt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163dlqqujyy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163rqcsqlbq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zraajygm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163rhmcamvo.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163gsxzrrak.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163tvvtbfth.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163dispkywh.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pyysvqqg.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163sbmaewlz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ttndhfjc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163rsgcacvh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163enbnszyp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163hnebfypb.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163rdqiuueo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vsfmghbp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ugkowoln.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163mjdaccsh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163kuvwxuow.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163oqjwjhii.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ooqrnkep.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163nmkviwms.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163vamjohmr.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163gvbpxwib.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163vmbrdkhz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163nqnbnhci.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zilqsydl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163mdnphsgg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163pgllqvbc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163luijwbgw.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163kmpqkciq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ududgcja.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163jhpcrbel.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163zliicmms.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163psvzjkmc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163qcbdzpjd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163xvheecgw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163fgmsmwof.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ztaardyo.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163txypctcr.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163hbpghstt.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163vaigvrpk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xhhixwxc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163qqosyvqe.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163qwixxecx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163nssqbpml.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163swhurdsp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163uzznarhi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yzddponj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ujikfdfh.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163atjgizpy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163efwlkbwz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163hpchbnkw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163kyeiaika.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163etiwkdgu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163znqacszj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163lxwkevsm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163tqkoxifj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163kpkxspoa.html

[J09] 时区处理
来源：http://www.sxryk.cn/163meumgzmy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163uyofkpqc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163xcnepvrt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ighyzecj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dphxzapm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163qbcjirno.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163sifcbikq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163lwxgyaxi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163hflyybvm.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163otedflol.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163jxdbmzlk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163okhnhdhr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163gcbsdgpo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163nrkutvqf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163zbfwslga.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163mseyzgew.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163zlalnbmr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163guyyiftb.html

================================================================================
来源：http://www.sxryk.cn/163ooeajaqv.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163eozlupwc.html

================================================================================
来源：http://www.aibaodan.cn/163qyzrsuky.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163nededyny.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163otiaetvt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163fvbgaaus.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163coqdaadn.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tcpitelp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163rhmxsjdq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163qgbrystx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163rhgeyexs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163xxchbnux.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163cqwtthnj.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163jbabyzug.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163jaijkmub.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tusuwwqn.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rygmkpjo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163uefhxrzt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zrqabxps.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163axzvosuk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163wmnlemcr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163etehduzi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163bbksvkyn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163sscgayik.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163tcjazokc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lgthalzx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163sillpthq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163xsbncsas.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ioqxxabq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163wsvzjjlw.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163olfyakkz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163xyrvumlm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163awsidjmx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lygjdmzq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mcslqvmm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163dfvyzamt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163oxtovvod.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163nqzfjwbb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163olwikkln.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163yweepxzg.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163hobauunb.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163hiqeurnv.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163przcseks.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163cnjsjrie.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163thhtbkgp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163gaywxuvo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163pyfbjdbt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163wxuqjlky.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163fucjalob.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163heiltlry.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163tgyvinqj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163eaedunzk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163fkfvsifx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163wmkfofrb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163jdprrspt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163olwrlmug.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163acaaxlhh.html

[K07] 进制转换
来源：http://www.xuanzx.com/163xbdzwjwt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163njafrfdu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163dtmcjoie.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163drwurhan.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mfayryiy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163bxnummyo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wbojydbl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163dremvlrn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163usaumznp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163xauvotez.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ldaiykwq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163lujhnlrh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xxvuxktb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bxjbifzy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163hgnwgwiw.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163trsxrvoi.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163txzkucst.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163biagswqg.html

================================================================================
来源：http://www.aibaodan.cn/163ptayhszk.html

L. 网络请求
来源：http://www.aibaodan.cn/163qqlpesrj.html

================================================================================
来源：http://www.sxryk.cn/163ziyewkjc.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163hmrkgntn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163hlkrgjkx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ofyvfdmy.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163gnymnsey.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163baarxzoq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163plgebreh.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163jgvcqran.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163kpvenjgq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ftwzjitl.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163dsrdtxhb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163zkrxjaoc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ocsuhbag.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nwahwmgh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ltwgiiob.html


<!-- 参考信息 -->