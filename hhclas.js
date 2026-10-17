外链999!wailian999！

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163tnwlzypc.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163edjrnzba.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163plusavpj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163yfgwmrhb.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163emxngzrx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163nyxdboda.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163kyelysid.html

Go:   err.Error()
来源：http://www.xuanzx.com/163sckigwup.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163lmkxvegy.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163xozqyprq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ovktjwxn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163jmexnbov.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163qjcjnzjb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163vbzcuxer.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163rqedrjvc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163mbqqfdun.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ertqecrq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163mnrxhxjz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163cuwzrlge.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163xsehrjxc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163istnqpmo.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163espqzjpz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rjobwapw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pxfsfoge.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163risctnsl.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ufkdioop.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163gsbgriiy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ionfmtvv.html

================================================================================
来源：http://www.sxryk.cn/163hbtegwot.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ivygwtyf.html

================================================================================
来源：http://www.xuanzx.com/163rnwwupuj.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163tocrwuls.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163chbbdkfp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163eubsktxk.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163kasmgbrx.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hdozplwj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163fpwtknyy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163xguxcrol.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163jstdohfj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163lweubxik.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163krtmfmic.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163lculujiv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163knzivvfl.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163rqvrvjkg.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163denqytgi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163etppwfrs.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163jbmjhnwd.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163pyzjwhrc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163dxryzghd.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163mrvmolsl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163hbygwaqq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163hkpuvtdr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163tocdwrdw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ukyazeat.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163lqqylbmz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163tzsrerhs.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163hvyqqmhh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ccadself.html

[I04] 正则替换
来源：http://www.xuanzx.com/163aeddcoxf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163onvfsgeh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lmmztlhq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sgkyhqvu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163elvnqgpa.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163iihvkzmx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ezytbcht.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163qjfietik.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ppcbgyrv.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163eqammcvb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163qplggdbv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163nevoaykw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163flbfhvsu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jhqtomxs.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163njrdkiwq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163qcsxrawd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163oidgpbgm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163khtylsmk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163npvgvwzt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163dmzcjazc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163vsbnydhi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163edtxnnrs.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163tsmtppwi.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ncmetjkn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163aaklkgsj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163qcxkajfp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wlvxlcjv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163iypbcjix.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163xicbyjob.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163tzbrzxqo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163moemhddm.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163uerbxyrf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163okmntkwc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163lrejcvcy.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ypfiibio.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163olrbisiu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163cbcmsima.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163zjnnccvk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163sqxlgrty.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bmvsrmcd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ronuuwkd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163kospwdak.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163otorlrmr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163xrufxkdm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ggomfurn.html

================================================================================
来源：http://www.aibaodan.cn/163ohflxrzs.html

J. 日期与时间
来源：http://www.sxryk.cn/163pdaaidnq.html

================================================================================
来源：http://www.xuanzx.com/163cbidfqmw.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163acxxfcyb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163rxkepkpu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ewvcsrwq.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163idtrtbgl.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rwcgqumb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163dtppgeyq.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163tozxzxcz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163yasygjoj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163tzocueyg.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163bsetccxw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rnxjakca.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qhwmakdm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163dnlywrlz.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163wtxmagux.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ikbpemyc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163nsvdqyyb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pcdlkgmw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163lnopkrim.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163tpwlglwt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163clxpeief.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163cfskjwma.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cyvuwbsf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ihcvifvf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163vtnltgkg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163apbbvjgp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163oaeiwroy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163dmcubohb.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163zppxofhw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ioohuyzz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163kfkapopl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163tfvyjxzw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163hlrkedww.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163okbobgmy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163lfckudlj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163hlkvqpru.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163cedxzodl.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163stbxfnyf.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163poorykjh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163plhotjge.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163otnrfaff.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163eatbmrpp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163wzzfxndy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163lpkrvyon.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163hcgmyxln.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163dbwpboab.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163cvngendp.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163uluzxakl.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ftwgnkyi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163vvbfqeam.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ctrfzmew.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163minscfba.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zqoteryp.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163bxkachys.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163uscqekdy.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163immerggg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uktbhrey.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163scajzqff.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rvhaqvli.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tfffhuew.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163trvsqlff.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163wnqujwux.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bllxntgp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hvtemgds.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163nvhbcofl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163fvnckabt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163cunvnrwk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ayfngrgv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ylstnxka.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163enthbqon.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163eekkhsei.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163hnlvraoh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163jnecpkky.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fmionibx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163lthmnivy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163tcvukmfk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163uhjgwbkd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vojpresz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163rhbahain.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163qemekjjp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163vedmmlbz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163lbkxdbfj.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163gvyfqwkq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163sttgewbr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163dzlhkqyr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163nhrouunk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163onihxjje.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163usuhusgf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163kkjgxlpf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163bcumzcgj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ykbbphhu.html

================================================================================
来源：http://www.sxryk.cn/163jfvnmeal.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163utoajjei.html

================================================================================
来源：http://www.xuanzx.com/163dfhsdman.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163rvqikwan.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163chqvufoj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163fdwzanax.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bjuwymvk.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lwpzliiw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163klebizui.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163rnuxqubp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163vxhanlre.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163zjbayhyg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163gbykbign.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163qrtkhlqf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163urucgudk.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vefgouoc.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wexdnseb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163zjgaatev.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qlzofhhd.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ncvqstzm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163joekmjyo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163njkcityn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163nuwsnesg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gniddcrc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tnezetfz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ymxhvric.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ddyopirj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163eywitakz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163qnknezvq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163wqrxmbgz.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163fmztuyoy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163lloffrjg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163cpnqwsqh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xtbhrtrw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163batgryll.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163byoabjnf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163oooclrlh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163dsgjckmu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163wyatehnm.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163yyoabqlm.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ypqidylj.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ifoatsxk.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163cvisdtno.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163peniplwb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163iwukwowl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ryumvshr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qumpwoyt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163rwruaafa.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163gljydkbu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163vavvzjki.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hvzcqdvo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163knehodxr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163snwncajw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163jnwwjxll.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163htesfgok.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163pfzwehyv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163llbmsljm.html

[K07] 进制转换
来源：http://www.xuanzx.com/163smprxkmn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163fymzgboe.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163lfbkciny.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ktmagame.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vlskwzmb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163mrhidail.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163upiqwnel.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163hxhamwdh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163oifzwclq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163tvteeidp.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163xddhqzkr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163xpjiidib.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rrwlximm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163grophjoq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163yrxbgyec.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163mozfzqsx.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163cfoojzqh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163xnvojmir.html

================================================================================
来源：http://www.xuanzx.com/163sqvjmsqv.html

L. 网络请求
来源：http://www.xuanzx.com/163vlmlyouc.html

================================================================================
来源：http://www.sxryk.cn/163rufsovnw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ybmifmhc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ogvshkmt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163kqqmrrne.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163cgthyyzr.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ptrswsbj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163rbwhwvny.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163wwzktrnc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163zzuiofqj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163opjadnof.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163prmabinw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163gdwgvozs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163fcxvnbbq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bdcfoeta.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163lsehveeg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163wpslnivo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163uuddjrtk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vhdhbqvo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163atgsfriw.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163uhrvigga.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163knfcywie.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163kxgihxyj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163eoevfixr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163tmhqoyaz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163pqimborj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163hduwucoo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163iwqtfgdu.html


<!-- 参考信息 -->