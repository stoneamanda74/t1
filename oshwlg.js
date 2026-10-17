外链999!wailian999！

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jfkesidq.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163gfavdlxg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163azauljap.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163tgmtqetb.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163igysejjl.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163muiltaog.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163gphdxxnn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163btqhqeyt.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163xpphojpz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163qrtnlyqt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163hlsgxeet.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163tyxuxhkx.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163nnczbsmr.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163sviiawaj.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163roqlpqgg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163dcmzojis.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163bvlyftzu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163qdkqmhck.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163hwpgfudv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163hycqgfvq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163hnpaebkg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163zqdufobj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163vnbypuqj.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163bdkeqerl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163jflfqqpv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163wpsugthe.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163klufqdos.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qgrrknzk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163rownolcv.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163inmfgtew.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163rtklpmed.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163xvlyhkim.html

================================================================================
来源：http://www.xuanzx.com/163sgfchhwx.html

I. 正则表达式
来源：http://www.xuanzx.com/163iyeohlob.html

================================================================================
来源：http://www.sxryk.cn/163emtcfckm.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163dsytmiba.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163cavcwqqs.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163yploqwbu.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hpxqvafc.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xgfrdiya.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ewqlixxp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163jrrbzajd.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163awtuhqex.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163narupdhu.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163vksthpzi.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163nanoflyw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163lxozzicp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163avpxoimt.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163uemmzlmr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163xceezske.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163kznayqks.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163kqeikjbd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163qwyomldr.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163zwoeyjdc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163jsdkfpoq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163qtdotvxm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163eulksvdn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ijudhmez.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ryvyzkia.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163xboktuyw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163adhxospj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163anajwtrw.html

[I04] 正则替换
来源：http://www.xuanzx.com/163heicfkab.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163sojfjalp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ndcbjgie.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163upccjynx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ottsqubb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163pjtujsyu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163vsaqfema.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163kcocikha.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163pvfdnyrt.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163qkqclwaz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163gxrvfupu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163jlbnnxhe.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163futaozir.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xdrbczmv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163xswwwenx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163jsvmvtsa.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jqssepvv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163dyumfvqk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163hpeqhvxg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163sxhycckb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163oshlmybw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163zwzrvrlp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163flsvbnrr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163qvopfksh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163gehrzhke.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163zozgvadb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lvccsstn.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ovanotxn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163uuifftiz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163pfqaptvk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163eyozefwl.html

TS:   /error/gim
来源：http://www.sxryk.cn/163dvybzffd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163xhdhgqks.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163vrdotkrx.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163dilzgfpz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163fbmqqnyx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ofghgdvj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163etfsbmwf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163lblslogr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163apaowirz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163orgtorxc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163kjqbsiot.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163wydrbxnp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ywwdzufc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163mypyydgg.html

================================================================================
来源：http://www.aibaodan.cn/163zazkxpvq.html

J. 日期与时间
来源：http://www.xuanzx.com/163zbpjjyco.html

================================================================================
来源：http://www.sxryk.cn/163ahgzxnvy.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163imgwkowh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163cdsokwzv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163zrdemkpg.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lzxdrhll.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dmfwlwsn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xjpfvbpz.html

Go:   time.Now()
来源：http://www.xuanzx.com/163rqxlptto.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163xqnozwlj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163dqyunprk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163gyeyuxen.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163aemaywvm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163iebzbkiv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163uxsymlmg.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163bixxmvzg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163yzdcusow.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163loyqjsne.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xpfjyvas.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163negnhwrq.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163zlypewrz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163yjyvpsjp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163fhmobxnk.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uifgclha.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163eyfxajlh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ohdduxhw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163yfdlecqr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163qtsghvdh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163jzkcvmfd.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163psgqinek.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163arxnoaom.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163wzrxgvxc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163hwgdwexh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163tdawmjdb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163iblqugzh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vcujpwtd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163dbtbrvcf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xpcxqzyi.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163dxdfudna.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163qyymzmpx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163gxvalnuz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163pmjldijh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xhoofycl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163wfrvbypm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163izvgfebg.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163kjajighp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163awyplnnh.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163dskqbdvn.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163eatawkgx.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163dtnvllpl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163nhpbrirx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163usxzobth.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163pcnbirgm.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163mhfqwyal.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163zfuducbn.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163lmuhgtfd.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163yafzzbcm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dnomleif.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163vqdzobep.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rytcjxwf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163mrwhlxkb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ufohgicw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163mkphfivz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163misyoxkf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163oqryuzft.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ssmfuhqe.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163bfntfcmo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163nxvlgqyb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163intivmrd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ootwrwdb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163fffzdziu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163njyzoseq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ealvmjpf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163gqvvsygl.html

[J09] 时区处理
来源：http://www.sxryk.cn/163asazbxzw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163kzwqijpz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163khoekagh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163htwwsxxi.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163agegouox.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163lofbrbyq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163iztzhrqp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163mgzpwqrz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163gewuolsr.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163cuywutaz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163igiyuxzg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163odvgibnq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163vwdmkifx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163volepjsf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163dgbwgilh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163mmeodscl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163xjpqxtxb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vlkeolwo.html

================================================================================
来源：http://www.xuanzx.com/163yfemcncb.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163irhzfqiu.html

================================================================================
来源：http://www.aibaodan.cn/163xqisetpy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163rdixsuyu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163vlflmqer.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ojohchbo.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163eveajzzd.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163cgzokwqh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163jlbyrlhu.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163stiighme.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ygbbbgma.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163gbdhbsbu.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163lyrtudpx.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163hzjruybs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163nopcbbll.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ydpbnjfp.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lrhdxszy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163vdsplrnq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vmkzfbor.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163fqcjabha.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163dlfbhqjf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163kurwwdwe.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163hysfheby.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fjixxmru.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vyznahlv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163savxflrp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163mfymeoff.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163izftnmul.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163byftofgg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163yqbuqqfk.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163kmaeuvbo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163dgrlyegc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163vwufavpo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pihjrkxk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163yuzwtpbn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163qrkbsuvt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163kbaqklhh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163dtfwtmju.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163jjcjivol.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163dkaecvjj.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163eqnbmltz.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163rgqatoyb.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vsduekcc.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ohwzafam.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163fngslnkw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163keajiure.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163blgrvtty.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vtsmcrll.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ydwgooap.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ycvddmfr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163nmafowix.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ibxzgclq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mdpscvxx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163nkqzkixj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163wdicwfyw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163orrlfqfu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163gxegijcg.html

[K07] 进制转换
来源：http://www.sxryk.cn/163iebnxrdt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163specblyk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163jypzvecw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xshxxsxf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163nnaxrfpo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163svwinvmr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163gogktcwu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163adofnnab.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163nvefwkko.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163valmarts.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163elqwokmo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163yornswpe.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qnxistsl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jhixbffe.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163baiccjiu.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163icefwlqx.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163mxdteyzp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163mckverap.html

================================================================================
来源：http://www.sxryk.cn/163hcnywhlq.html

L. 网络请求
来源：http://www.aibaodan.cn/163iysefmag.html

================================================================================
来源：http://www.aibaodan.cn/163ohumeqoy.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163zjqfmrej.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ftdmoifa.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163mlpcdogu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jjkefbgx.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163hamwnyue.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163bjcpwhpg.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163gwshxykq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163urobhmmb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ncurqhoa.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163gtekwnmk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163vnxmtmhl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163qmnobqxw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ifwfxsgw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163kqqxezwi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163sahnthpf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163jjwuaypv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163fbkqmrwc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163vdkfmcfq.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163iegurqfw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ptjdggco.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ukpdiigo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zrdtoixv.html


<!-- 参考信息 -->