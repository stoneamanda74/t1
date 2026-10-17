外链999!wailian999！

[H07] 断言
来源：http://www.xuanzx.com/163zyejrzpp.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163fefbkuih.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163itxbhgiy.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pbmlijne.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vrlnxfsw.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163suxoofdb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ulfvpxeo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163cuqnppcn.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ferdshwd.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163qnujpcqy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163xbopqhaz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163njtalszt.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163bgyazxew.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163lgtvwqcz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163kfrdpmbh.html

Go:   err.Error()
来源：http://www.sxryk.cn/163kcjomfia.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163znqgkvps.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163tnhjupee.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163nozgdtpz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ebohwwlx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ejhvrtvl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ipzvfvlj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163zarjsbmo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163wctabiig.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163hfqmdtsp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163pebchaqr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163bfipflkb.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163fbtmzzrl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163oaaidcwj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ybkbnzzn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vhttbjnf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vtjlclec.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163cijlnltt.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163lefcdhdf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163syxqmlun.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163venzxxij.html

================================================================================
来源：http://www.aibaodan.cn/163mxafftng.html

I. 正则表达式
来源：http://www.aibaodan.cn/163bemxbtse.html

================================================================================
来源：http://www.xuanzx.com/163bhdpaykm.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163obhzkpol.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163wkthgtiw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163zodgczuh.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163voooexyz.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nsfjsxks.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163lpessugl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163onpaqkvh.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163tdmaathu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163wfxozkdy.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163mvkpqvnq.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163libinkfj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163imfepyiq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163uvzqlbyg.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163aoxfnayh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163rcumuuzb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163dxzgmlqv.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163yqjfvwpp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163xrwvcwcv.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163nlrtmtnh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163sdgggrre.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163xyenqfhk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163lkyuwogs.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gsiobaqk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ayzobqdi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163dxdyrvbw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163qzudfdpi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163epkzfcea.html

[I04] 正则替换
来源：http://www.sxryk.cn/163jrvdotum.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163jcrwqzzi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rgoapvsi.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163isgmtfso.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163bikutfvt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163zmxpirmn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163tfrpmsgn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163uehwqybw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163udhgytsp.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163tuxlvkus.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163fgyeeaih.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163rztvoneq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qdfhpsmb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ytttbgpy.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163yvazhjee.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ndupsffi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uznbnpis.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ecvegvoa.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163kjadcmsi.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ygpdvcdd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163xnnggayh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ssohqyuk.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163uyhqwule.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163fllhixai.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163nuxxhaks.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163zkjkiicj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163phdsdmyj.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163byutkcrn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163nwusqpgh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163czpdfbnc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163etgzdxji.html

TS:   /error/gim
来源：http://www.xuanzx.com/163uavnakqr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163dkeklflt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ljsnowto.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163covzlaen.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163tpntrqmx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163rexnuvtb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163eavdnwch.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ajlrvqby.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gpxplqoq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163gntlfskq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163kmobwcva.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ppfgsyyd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163atonjdhb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163vezrymbi.html

================================================================================
来源：http://www.sxryk.cn/163jwguyxeo.html

J. 日期与时间
来源：http://www.aibaodan.cn/163moohcfxv.html

================================================================================
来源：http://www.xuanzx.com/163hwhudcpg.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163dgaqowqw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163dtthzhqu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ycdsxgus.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kmjmryqs.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hctfyfop.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163onhyidlh.html

Go:   time.Now()
来源：http://www.xuanzx.com/163iueyjfjz.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ufgngzpn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ewduemhe.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163glzbsxah.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zelitbls.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zrkkghel.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163twzcsvzi.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163jnrwfyny.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163svtmfsit.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163avpcthav.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wrpbotsq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163fkucualm.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163alshkges.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163utdkorfi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163joqxrmpb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nmobgxij.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163itucbmrw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163aqsririx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163zvevhppt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kpnwwrhd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rmncilsh.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163clgpnfkw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163umdseubv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163xrtwrebx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163zxvgnals.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163mmzwtsko.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163fbupallb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163erkatihd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163dqlguxxo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163nxcgngjx.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ttgrddrs.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163phndgsiq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163fvwgxacw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vjikjapr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163myvyitnh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163gnxyncae.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163iviislkn.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163pobkbvno.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163yzxltyyr.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163rtlxsdlo.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163adfcjfat.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ugmdadmp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ksmgtwld.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ibwzgyto.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gkiyqmvs.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zlpsnmoa.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163bjtdwagv.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163zpmaxzdj.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163hrkyqzoy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rkikeipv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163seojvevb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vaxncsll.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163sbpgcnrx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163nvymydqv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163prdjtigm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163czarlpth.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lunppbnj.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163jshrcink.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ygtmwpfu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163cheoqorj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163wlyvtezt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ouqlwobt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163rdgyanli.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163vdywicwa.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163lecxqxbp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163snwxlzxz.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163zmybdxdc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ivxdfpoa.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163sgijotpl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zgypajdr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gpxsvbuc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163akixunoy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163fenkrvcb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ikwssimn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163fhavxddo.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163sjbxxqtn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163yugurkkt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ovcfupqy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163yheajigw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163mseokywm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163dwtrfhqp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163thvjuwga.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163blilvumx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163kutjtfbw.html

================================================================================
来源：http://www.xuanzx.com/163hbmuhysh.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163eufqkuqw.html

================================================================================
来源：http://www.xuanzx.com/163xtyyqpsd.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163jemfyqen.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163tthrefyi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163wdgoxhsb.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163uwcwdkcw.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xaobfgtw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163rnffgits.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163zjcgxycm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163pznsawme.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163lqssrttk.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ycnrhgju.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163qvxsirwu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163gmfnbjmx.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ahxeodui.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lusppdfr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163jghdwtnh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163uaqerfyi.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163mlyauytd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163pfbdwbys.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ukwgjpob.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163wdalygmv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ofsduxsp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163dgmybhwn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vyuvbbhj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ttnqazqc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163rorrbuai.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ooqbtyxd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163yfytbqpe.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163tgnyfpid.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163vclkzuvr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163fnwmvuvp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lelfjdib.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pducqlxw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163aailbhkg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pyjqrjxr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163zkoetiun.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163qdbaccuw.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163hlpmnist.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163vvlesygz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163jifvjfnb.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dmihllwi.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163wobixkup.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ahenxjmn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ljdvesye.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163axswbave.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163nkokjobk.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163hpcxdlbk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ukgaawci.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163oqybzopo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163golbmymd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163nyxqxvjc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ccxchkzf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163hbbmaizu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163iirfhxol.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163sfoabgtf.html

[K07] 进制转换
来源：http://www.sxryk.cn/163krmoiisa.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163vvflnrdd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163kimlcclk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ggisdgin.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nvahbege.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163lglhewpd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163zgupalqo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163iqtmjwrf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163xjhqdoia.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ezcdnpls.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163yscgnozb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163zobdqeqz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ycstkweb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mkvsukrw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ljktxxkm.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163fcmsxwcg.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163trdbcntp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qbkchfhf.html

================================================================================
来源：http://www.aibaodan.cn/163lneignrp.html

L. 网络请求
来源：http://www.xuanzx.com/163qpevwfxt.html

================================================================================
来源：http://www.xuanzx.com/163ejsxnezk.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163pzrpikjl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163iahqyvro.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163mdcjruux.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163vxjozmgz.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163xplronqt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163kbdcirdj.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163uoymtcal.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163grtskyoz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ioodckbc.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163wemvpxgw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163klalilku.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ugsmysjy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nmtwrzhg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163dresabib.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163rcgavxwp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xykqbjbg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163licgrxms.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163nxjumnyr.html


<!-- 参考信息 -->