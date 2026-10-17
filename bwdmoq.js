外链999!wailian999！

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163guefshdm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163zbpehoan.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163nxroyzfa.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ujaohqcl.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ippszddx.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163gprjhhqy.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163afwtrgcs.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163zdmkqjfj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163gwhfyaii.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163xnqzwtaf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ahzyvgdw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163etpglpmo.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ynqkvefw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163lzjknpep.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163rkeppaic.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ntfygmdb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163jqhyhsbi.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163wmpwsjuj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hpcdwmcc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kwzmmchv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163lcxtzcae.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163jfnbesgn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163yyfvrxip.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163hsufiibk.html

================================================================================
来源：http://www.sxryk.cn/163fjkithls.html

I. 正则表达式
来源：http://www.aibaodan.cn/163qzkgzeeb.html

================================================================================
来源：http://www.sxryk.cn/163yxtpsbql.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ybexxeaf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163nnscpsct.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163tonxlapk.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qtzwibrv.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163byymrzcw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163lzlchoro.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ejjdzujk.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163bqsmkypm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163cxzrdukr.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ahapgdvn.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163uxjgrovx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163wxckxlmw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163waypjgbz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163bawsafex.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163siaczxgs.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163tcrsngtu.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163fuwlxkls.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163tnnaxoph.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163nhnnuifr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163dzkehecg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163svcireqk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163lxwegyue.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163nvwhxnah.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163iszbkwaj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163bkekwhzk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163sbfvomru.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163goqikmks.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ivapqjpw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ezoqqpdv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xvopfxfq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ofxhdukq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ocmymrgz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163itbdeahh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163amctckeb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163wuglvfxp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hxxmwtbf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ncyabbkq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163svxyifab.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163fyoyekga.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wwytawls.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tiktqjxg.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163dmvlipih.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ijaalscj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163undofkza.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163tbbucplg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163lafbasii.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163effmlfvs.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163riroggsf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wmifblpo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163zbfpmkgm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163rffbfrvb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163kodkzuni.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163zfbuivse.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163yypbyecf.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163kqvmtfvz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163fmikgcze.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ardmfwxh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163scfetewi.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163xpjyrgwr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gnzgpebn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163cqmvienz.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163hhypazxu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163plsfjkus.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163xejwwhvz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163uaecxnon.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163lhcvydsv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163pkkxesuz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163otwlaqwj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163stjvelep.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163zunewhyl.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163irdwzixs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ibeswitw.html

================================================================================
来源：http://www.xuanzx.com/163kuhswxhd.html

J. 日期与时间
来源：http://www.aibaodan.cn/163dhjosgkp.html

================================================================================
来源：http://www.xuanzx.com/163jvlyuusf.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zcfnofrk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163zdznjxrn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bdznzwrn.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163yoopuatp.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ruqkkqff.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163uctndfme.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ofpuufle.html

Ruby: Time.now
来源：http://www.xuanzx.com/163idmgwhzv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163kgdltqph.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163sfknbybi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zpopwasb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163svmrxkmd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163oduqfkfp.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163cnvhaqow.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163couglsyx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163munrcvba.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jcewjuok.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163dsjbqmwe.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163gfrytrvk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163xhyzpuwe.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163uqppcwsa.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tnemlflg.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xgzxhfnd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163qedyjjrw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163pqorvyzy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ltwmpvoj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163xiipuvoy.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163uirrwjxd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163kpgtyges.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163cdtpzojh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163tecsbgrl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163lhchocee.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163qtnkbiur.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163bgqhgqmo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163jlsorlhs.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163lilcpejn.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163orumnoes.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163sdqhowbo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163dstkaaee.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kjthodmu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dqgcmuwn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163kfciavsx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ukabtlmi.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163twfsknfz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ezkxvxsl.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ylpsusgm.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163noutxqnk.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ayclyrbg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163xddqmubs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163vjwfzkuy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163pwbaqtgx.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163myervpbq.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ttrpcwdq.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163gpcrqwxg.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163qunaxwuf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bvltdltg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163izouoeit.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163algzhinr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qxkuepyy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ibanklqu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163deemzdjt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163locbwhpt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dwjajbpu.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163xmmdohzm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163fnwfcemv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ygplvxie.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163faxmzetl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163klmcnymi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ivpdiiyj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ybinioxv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163gmcpgzsd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163zyuduewv.html

[J09] 时区处理
来源：http://www.sxryk.cn/163rdmejtjj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163zshvgcul.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163hkfbvwnp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bfyyltzr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wmtaebjn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163cfsgfdwq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ovpujrlj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163chftaztk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163cepmuori.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163vuyxxpcz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ugzjyzyq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163qesezpfr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163vjerypse.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163llpneilc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hfufjduf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ycdffmnf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163nfslqcdj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163zgcuiprr.html

================================================================================
来源：http://www.sxryk.cn/163wgmowuco.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163cwbzzehp.html

================================================================================
来源：http://www.aibaodan.cn/163fnghwjzl.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163pkjxfpch.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163msnlvecg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163mkhwrfsi.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rntvatap.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163micnzsjh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163xrbfeipr.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163mueelyje.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163jkjhiurc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163zgwliqsa.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163itmjkuwt.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163xwnyalhr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163izumaact.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zpewedvz.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rknmtphe.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163kdzbtrhp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wscxhygp.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163otfwfkor.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163alwktrvq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163xeahoohp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163fggdsvoq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zrqctrsu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ukyedmgg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zogqbvoq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163khwoakfz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163jlzyclkn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163qowjkfon.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ytwhrciq.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163hixogxnq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163pmsjcmxt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163lxgzmglk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ndpkbyvc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163pmiqlqls.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163odxycycc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jfhvjudc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163muwpodhj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163fjevzmhp.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163lduzlfgw.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163unyqikiy.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163bcagzvka.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ndabvevr.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mxnratdp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163jntfnlhl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163nzwsrfxd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163yaewibmy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nmqjawor.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163vtwryxad.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ytnmuofo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163lfvsfupq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kdplnxgl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qqyhnbgq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163pmgnhzka.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163djzndxxc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163lxkqltgs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163rhjijyjp.html

[K07] 进制转换
来源：http://www.xuanzx.com/163raunqszv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163irrjxrir.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ogvylszd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vebaqgrx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cxnaxxsi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jipicjfv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163thwjurcs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ghfkjawu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163esgqanmw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163teyrzbvm.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163itkogkko.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163gxjmbphd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wbwzhxez.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163yjofauwu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163uvlrsuer.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163nfipbipi.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163teowuhoy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163glnpqqvf.html

================================================================================
来源：http://www.aibaodan.cn/163vpegfdye.html

L. 网络请求
来源：http://www.aibaodan.cn/163ypggbhdb.html

================================================================================
来源：http://www.sxryk.cn/163zfdtwmpj.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ttwwasvv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163kpxxsfll.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163uggckwap.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163xokfybeq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163lpjfruvb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163voxfahej.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ynbnfeei.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ounhnasy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163rytwzdhr.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163lxuvadma.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163utcqudco.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ueliinnx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163kvgaigxu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ertgxumj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163auvlgcke.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163dufulcta.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163rcjeknqq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163moqdrobv.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163txrbanib.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163nkmkcnwn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163crdnxdgz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qyxjrlla.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mezcyrcv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163raimhibm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163flgedmis.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163fmhlmxrw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163oosoqzcx.html

[L04] 设置超时
来源：http://www.sxryk.cn/163fyeskrat.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163pudgazbh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163gbvvuure.html


<!-- 参考信息 -->