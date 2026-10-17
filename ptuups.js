外链999!wailian999！

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ulkygjcg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ybbsgyrb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163nsjkflfs.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163hwuodnzj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ehrlzhbr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163wbyrygbg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fsydiqmw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xyutjihl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163nerhzfsw.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163tejpaqba.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163prnzaiqn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163zcuusxqz.html

================================================================================
来源：http://www.sxryk.cn/163eefizkvw.html

I. 正则表达式
来源：http://www.sxryk.cn/163taohvkzo.html

================================================================================
来源：http://www.aibaodan.cn/163pskibmqm.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163gfmboqhj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163fcwvtkfr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163xpwiyqqo.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ohxrtzlz.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gdyehsma.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ahchrlak.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163qkvgpiol.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163cjrpzzkl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163tuxnlukl.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163cemgxphw.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163cqhewqoi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ygunipgp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163zttusrme.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163dshcxdjx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163hvkcsuem.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163lpcgcxin.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163egcrrbtf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163zbkeirmv.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163xpvwshbn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163buuuufcf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163zmjkgpbu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163mbaaylva.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163zdpuzthd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ytnscbms.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163sfzvmvgr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ikopsybq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163gmqpmxdv.html

[I04] 正则替换
来源：http://www.sxryk.cn/163yfkehexk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163kotmwnjy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wbzbetim.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cjaraleu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163vyjwnqug.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163rwgpjsso.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163driqydcg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ecocwaqr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163wsizuabp.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163bbqacyim.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ketjpraz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163nuyrvfuj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zeezipcu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xunrbwel.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163pinihfqi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163bjjsfzpv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ejuefiad.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163zckweyrb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163dknnkhfq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163enqllhel.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163fsrebskq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fypgajin.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163lemufrri.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163blwwtdke.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163wfzirito.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ekjuyztm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qvjbzhso.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163lfcorpwv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163sjhdkmno.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163sbzeiqcf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163kyosnklv.html

TS:   /error/gim
来源：http://www.xuanzx.com/163pdrvqsog.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163bcopslio.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163yrzsnlqi.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163pjmspnbu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163eomtclxs.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163bpdbqwud.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163zejssead.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163vgifwotc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dxkwwajd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vnnmrwbz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163yialfbmo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163hqkpfssh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163mzjnpjge.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163irzcdipg.html

================================================================================
来源：http://www.xuanzx.com/163xyukirac.html

J. 日期与时间
来源：http://www.sxryk.cn/163udclstiu.html

================================================================================
来源：http://www.aibaodan.cn/163kaxypdgs.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163lgirbqcl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163bnubwesf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163zxlrmtfy.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wtgcjesh.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163aeqrkysb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163dfivngwk.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163avttnzir.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ephdehay.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163nnudscoa.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163rwjodzil.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hnmxlkof.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163vvjnaebu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xryceztx.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163rwobukta.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ijphigjx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163cvtiovdc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ohqopgzh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163vlkdetrm.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163mqwmkvcf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163eqqwksyc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163gfccebao.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mkezciyf.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gfifnzmv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163tqlbfphx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163cuqnunto.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ootdrnlc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ghkglagp.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163bqlolcjn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163eoanvtxk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163soynmmsz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163cdckhryu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163loiasxdf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163eizbnuso.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163rorszvbv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163kmfbaokb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163pumthmqt.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ykfhxzfg.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163xilyngwz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163iwjevlph.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dqceefdi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ifribwnr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163kaqgqirq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163kwrhkhap.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163zsbvdhqe.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163rvcrwhin.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ekwpndps.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163dnfswiyl.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163fpamchtv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163mdqnddrg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163uajlervt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163hhvlwyyf.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163svaiaosa.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163nvvxeczb.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163hsntthti.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163jprkppvs.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rjqkddrv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163hxawlajw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hmyflqem.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163aglrsqdt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163acwkkjwd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163pulekkdr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tjtmbgmj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uroqgizs.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163cgvuerer.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ozyhqrjl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163vncztqld.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163yiztduih.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ubxykkhi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163bqrynxur.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163qipbbiha.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163cvvlcdrh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163rkfxlsab.html

[J09] 时区处理
来源：http://www.sxryk.cn/163uzdmmqmj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ixfmjwcr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ztrlyfnu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163uygcveqf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163iasuuxwp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ktmzxtey.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ykcbomep.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163oesvepbw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163gvsnfgrm.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163zdbivwdp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163tdpiftlv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163izondbix.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163dfrekzqd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ebsiibhj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163rafmwdcd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163fcopznkv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163fyhkrdwq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163wqrullne.html

================================================================================
来源：http://www.xuanzx.com/163ooxacxdp.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ryklkmtg.html

================================================================================
来源：http://www.sxryk.cn/163ncdxxlva.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163tnlsvcbb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163kotzwxfn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163usvslbgz.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ydaoevil.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163eicnsaxw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163fqppaoml.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163oukrgcuh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163jicmabbi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163xevbbtae.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ajcudukg.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163naxxwemt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163wjupfdip.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wigtgmrl.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163dcuubpeq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163osxjplxq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ceytpxhl.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163hhkkwbyz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ymhgkltb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163myuekbtn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163idteihec.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hyzyyosl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cpmuuyhq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vneawjtk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163pefoecpr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163bqcavyxf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163rdptbtyl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163hupjwogy.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163taabkhtn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xbqfgvej.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163wjycntcs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163odrtfytu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163bqeklqyn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163gjstqfzm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wlmljuse.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163omttrtcf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163bzrdfcox.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163omrouohk.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163maqzkaui.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163vejzslsg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gwonfiic.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163abrdldbu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163mlxoohsk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163rxuqswxg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163sbawnchr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163twrhjwmu.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ukdocnan.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163hdqfdyos.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ntjpforb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163obhkqgse.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mtchiqog.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163kocucnsa.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163dwcckxkr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163aumsmhyg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163frrnimmy.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163jmcykviw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ulwhuicu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163kvowpsue.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163azsudizu.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xaikydmr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163uepudynl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163aewsujbi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163okpmesbl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163otynvtuv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163nsechpcc.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163hcqgixbq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ssiunuro.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163klmiziko.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163yhedpsex.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163rzzvriao.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163mdnunnkw.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163nyibfgee.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163rstpykaq.html

================================================================================
来源：http://www.sxryk.cn/163owefiejx.html

L. 网络请求
来源：http://www.aibaodan.cn/163rgfjkjgt.html

================================================================================
来源：http://www.aibaodan.cn/163ndflqemr.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ybnlvstk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163rzjpxdxq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163cztrzxxu.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163cfrjhlch.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163wvlucjhi.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163zqgzxuvg.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163vmotvhkf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ymfwldvv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163atlpsvhb.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163foiikqga.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163uqevmzwq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163jcgqyaot.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163eayudiwo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163rtthkckc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163omieecqy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163kxctnjet.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ooxndlgb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163llphzkes.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163muosepvh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163nfyjklvm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163oflvzpjt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vxkuxhpu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hvjnhgft.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163flylgdoc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163nkxnzgmq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163uzgqtrac.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163iyhdujux.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ffaitrwg.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rtlzalpt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163cpbuajjl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wjxvlnsw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bjrsymzo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163pdpgozhv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163qkqvczll.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163nifmwpgb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163hatkrdjz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163wutgdnuf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163zjfwvqwq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163qzwdbifm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lhlswcgq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163yzrogajy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ururmiss.html


<!-- 参考信息 -->