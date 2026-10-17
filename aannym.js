外链999!wailian999！

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163juvukosd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163eedwprfd.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163sdjcuaan.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163pybwmqdr.html

[H07] 断言
来源：http://www.xuanzx.com/163jowcpeth.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ydxhdjmz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ccwxpvbq.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qamqkemw.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ljxvutau.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163tiixxxek.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163rltmzvcb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163pxnujplp.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163kneidfzr.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163yyihtcey.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163dilvnuhr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163jpyibnir.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163mrrybwuk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163jpwbnkhc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163uwrkdocb.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ymtuulkk.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ejdqgwpd.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163smjqdpwc.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163yayrrydm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163hlbscbvu.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163axasojtu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163vioukdwa.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163bmgymppv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ncgtovil.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163sfhtmvdi.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163bzndbzkd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ilrxyhog.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163zgexmifw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ihopovcv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163dvmkkjnb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fdrgfjmw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wastfwvs.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163odatipup.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163uremsjpf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163epmpahsw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ufybvikw.html

================================================================================
来源：http://www.sxryk.cn/163asfbeiwz.html

I. 正则表达式
来源：http://www.sxryk.cn/163nmytstpd.html

================================================================================
来源：http://www.xuanzx.com/163cptaltkb.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163pbxekity.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163klpxfjxy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163rqhgwtvw.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tlgejsef.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bkdjrsxi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163fuawxznr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163tthoilik.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163tehwnpbu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ynrrugsw.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163aevtpenl.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163snhrxcye.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163dgykiuvu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ghblnypp.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163hkimtrzh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163adyylmyk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163smmwrgsb.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ichidtdc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163jhbbstjk.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163auwklutl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163gnmweaxa.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163axunrvtu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163stqnixom.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163xjalvmcy.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163vsnksscq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163eoexzrll.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163mghpgsiw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163gcmpogic.html

[I04] 正则替换
来源：http://www.sxryk.cn/163kaafdhxb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163hqicvzii.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163wnyjyolz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ehosclsw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cdpuajwg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163lkpfandh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163bhyflqhu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163upbvoyqi.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163dsxhpskk.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vywayiyq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163nfqddpbs.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163xhajeryp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cygorxrj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yhhqzrpd.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163gcdzbeln.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ktobrqci.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ixcpmakf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163hjxsefte.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163aldwolrh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bhqyiium.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163rlkqgizf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163uzmvxdun.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hjmghoks.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163dmmentqu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163qnezjapk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163mwtycokd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zamgzxfu.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163tleomqrr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163imymdjba.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163qgvmlnlx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163apmpcwgz.html

TS:   /error/gim
来源：http://www.xuanzx.com/163yjzhjxpe.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ngzumaue.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163mqbwamwc.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ymuvzcur.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163hdcnzkzr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163fmcruwdu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163gxkswyzo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163obubxvch.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163arbwjxbl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kwcktuoy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163pfearyzx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163qgibqsfc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163vzbufppa.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163okaafgtt.html

================================================================================
来源：http://www.sxryk.cn/163xxaoqsee.html

J. 日期与时间
来源：http://www.sxryk.cn/163rcqieaxc.html

================================================================================
来源：http://www.aibaodan.cn/163dymmwlvp.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163bslohycu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163whhwrkdh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163powlxjej.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vbcwhszf.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hncvoxvt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163jgineogb.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163meeeufyz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163tooqtoni.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163wzmhfrwa.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163yjcfzahb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163mbjordfm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qmjczlxy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xrymkcfa.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163xooornot.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163iirajnxu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163rnbsrnqb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xjpozeem.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163glhwuwak.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163gwmpavvy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ilbvtpur.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163fkxzdouh.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163kjjdsrhg.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163opvmkzkv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163vlpisjae.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163urqqoihh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163gpqcvrkd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ifgzerpr.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163klpfqfvd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163npsqfeqa.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163muxnqyud.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163mgdzrvmh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163wqqjahvf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163hmxpihfa.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163gptdxbfr.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163krkfkczy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163hkdqrhfu.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163jqgljxsb.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163seujorpw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163iryslflu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xuviyege.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163upljtqqx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163yasuxyys.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163xeuhsucq.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163vrmfhksz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163lgjsxixv.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163pcjgwtge.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163uvqcophk.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163smukphya.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ovdfsyqz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163tzkimdom.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ebnvdquo.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163egburucm.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ewhxhtqj.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163pnbjerqn.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163kpyxmcpd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lwbvrgsq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163nvsrslbw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ivczfvds.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163uxveaymg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163vsgkeotx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163shkysnks.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163papdqmde.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163odxjgeye.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163fxoyzlya.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163vfanarjp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ykboeows.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163yqbsypvt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163qjcavlqt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163akrlbefe.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163myebzeeb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163fespiksj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ccwrlose.html

[J09] 时区处理
来源：http://www.sxryk.cn/163dpxrjaux.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163sutxxuhu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163flwvbnln.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jfqdseti.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163rkpljpuj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163lykuuskq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jircfuzd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163xocmjpyj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ubufwdqs.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163hrywmazg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163mlspnkjw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163knhfycrk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163exobvwjl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163tixknhve.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163jpaelxfk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163yvtcvglk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163gzymziiw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163grtxyhmj.html

================================================================================
来源：http://www.sxryk.cn/163jdbxwdxd.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163qmljwiln.html

================================================================================
来源：http://www.aibaodan.cn/163lytpoltf.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hkusnlgw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ccndykfu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163icpclywf.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163dsdhdpwq.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hmwzeouo.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163tnqcgrls.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163kxxjyqli.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163dseafrdm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163qefoosic.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163kluleqcm.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163uprvblhj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163vsagknfi.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ilbjrsvx.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hbuhabxg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163mnannjsv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ozustuyf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163jrnrbizs.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ynhiduoq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163cnucppcq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qctuvpof.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163eeiscxaj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fcftqdqy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hsejgemh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163qpyjsckm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163xwvdbrbs.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163eatnemvp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163gxdicxez.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163nvxvukao.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ahfktxrr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163vzzlypdh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163uyroashx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vdtuwrlf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163camazcha.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vojlyqhx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163zbehaxnz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163simarzbc.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163gfjszdin.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163uieyzant.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163nuzloczc.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zhfpgsls.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163arfqkuqb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163snqwtbnw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ndwkuwqa.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163nrdernjk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ifenqvwt.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163kpavddnq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163clrcbpdk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163vgafurpx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qszmilmt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pwzbpxzc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163nmtwfjua.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163gmngfyqz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163touoaxhj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163dwzkugus.html

[K07] 进制转换
来源：http://www.sxryk.cn/163esjemktu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163rhecpbix.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163zggjombz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163uemczxql.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163oiybippe.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163fdpibgph.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163cdtziuzn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163mibdgjsu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kqbyumxm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163gyupwmwp.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163yboqskxk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163lrtodfhs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vrmbhutv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lvurlogk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163yicwvzbd.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163lklxoggu.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163rdccmwwb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163sjibxdji.html

================================================================================
来源：http://www.xuanzx.com/163hmmpweby.html

L. 网络请求
来源：http://www.sxryk.cn/163rqibhlmw.html

================================================================================
来源：http://www.aibaodan.cn/163wbmjtxmh.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163urlehfez.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163anztzius.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163rtymemey.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ysksxlee.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163odlfpsdx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163mktskcwe.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163zqqtqmzy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163msmzgixa.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163wjntkkhc.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163hfpmvruc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163dzshrdeu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163hbhsmrjp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163dxtwwani.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nbmkzrpb.html


<!-- 参考信息 -->