外链999!wailian999！

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163iovsvkga.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ooniwmaq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163dlrdrkpy.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163szsyrjal.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ptaxnvba.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163xwwrinba.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ryvkvijv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wduabxzl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163uqbokgwy.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163cmpwcbep.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163xqiqzdkq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163vtpcbsoj.html

================================================================================
来源：http://www.sxryk.cn/163ssyhmnin.html

I. 正则表达式
来源：http://www.aibaodan.cn/163yuwdxjez.html

================================================================================
来源：http://www.xuanzx.com/163eyypfycr.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163pfohkwmz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163enxnjwfi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163lrmdvdmb.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163udpwnnpf.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xvihaieb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163uxsvyytr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163nencoyxb.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163mghywawx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163nsfnzpua.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163yefuwljy.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163rztluitk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163jdbmelss.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163adlbkzum.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163vemhvywh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163okamhpyj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163amkcecwt.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163jeyktyqp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ohhcrfdj.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163awukbnkr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163bcvayhwe.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163qhjkshbm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163lsjzrhto.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163jximznev.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163uvlzoyug.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163slemnoum.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ueqttdoy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163sdmpnixb.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163jiuntcvs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163qensqtzr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163dwotztbl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163mwxyezkf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jomjxwvf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163iugollvc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163knhyfkkt.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163itqmotfw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163lfhxgsdj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xtvabsib.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163xypodkfv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163hrwrgpzv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ijvzmxsa.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163atbaxtfm.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163jppmwfui.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163efyrvefm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163embkwfel.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163xohyalaj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ingzbgjj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163lrwfnzci.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163vzzxqzgt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163nmoixbck.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xtqlmeah.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163spqgitnw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163tsrinemj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163smybpgsb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tzpnmxbw.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163cujaupjl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163rijjuvku.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163madmxhyx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163rjthtpdp.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163kpccdnjw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163nhwycnde.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163wswnlgct.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163rxjparsu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163wheznlxu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ffdvbuzu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163luuksfbm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163zpzqzibs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ezymnmze.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dqofajtd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163bemjkatp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163fpnysrnj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163azyathaj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163hpbsxhol.html

================================================================================
来源：http://www.sxryk.cn/163jnblhgjv.html

J. 日期与时间
来源：http://www.sxryk.cn/163jqhziiaj.html

================================================================================
来源：http://www.xuanzx.com/163zkduirgs.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163pgghtptd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163svnoutaj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ztebacuj.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163uhjmlupv.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rlywncyv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ojdnfjxv.html

Go:   time.Now()
来源：http://www.xuanzx.com/163jpzcrgab.html

Ruby: Time.now
来源：http://www.xuanzx.com/163yvmelzzp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163khugsdis.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163iiyleiso.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tzrrnxpu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jumixstq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163aqvrvexn.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163qwepgxvf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163sxchtvva.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163vujdvlim.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xowvrmcv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163huqvcwtw.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163sjyuenwi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163jmgrezhi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163hnmhtydx.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163woomebuq.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qqvrhvjb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163blezyzkj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163qfcquklq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ororpjrr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163olphtcin.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163trzbkbpo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163natsusxn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163pptwahwy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163tvrapoex.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163vvxhevrb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163uivvmzxn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ylurbklw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163cvjfnqsv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163wxvetkvx.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163pwzhoick.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163prvwzxue.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163jrdizkoi.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163nbhrgeim.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yspiuqxp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163dtbovxsl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163vxncmiaf.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163yyejuzys.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163qiuznios.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163jfvyvvfm.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163jjdptnqs.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163fmudfubu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163xyevyyfo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163naqitljx.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163sopnpzvi.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163dnydylvw.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163kooqxduq.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163spyxylmb.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163qjokfoft.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dprwdgxe.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163cowabdtg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wcfrkyna.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tabeiihz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163iozhwiin.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163rpqfgtrm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163opgukbkf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wggpjsbo.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163xjcdcvxd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163cgjgetes.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163shscxleg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163kkuzcwjt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163arybcjkd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163sbkibqpp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163fcneiuhg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163yinvfoqz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163uazqksuu.html

[J09] 时区处理
来源：http://www.xuanzx.com/163epzvppuc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163buxrrisn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163pobuqgjj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163yoegqcrx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163skdwvyqy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163scurqkpt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163yvrnfvuh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163bjlipijd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163fugrlohf.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163rapzcjir.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163pbxlayhz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163prhjwoxb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163kihcleqm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163zdgfvnvc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163gtanamty.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163silnrfug.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163pjpwvfzk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163tzqbiqew.html

================================================================================
来源：http://www.xuanzx.com/163wiawgkrp.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163abvmqudw.html

================================================================================
来源：http://www.xuanzx.com/163hedgmvsq.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163hllejllh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163qeryupfz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tbeqnpgl.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163uwxzxxfm.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ghkfobmu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ofdqlwpg.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163hdvfivnk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163axditzgv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ldpymidh.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163amffshfm.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163fxbqmmda.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163lfkyxeym.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163oeboslnd.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163sisokurp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163mbcjujbq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ligxbfha.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ajamjpjf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163dneecvdg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163smrniwog.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163dffphkca.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pjkffniq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163uzavpdxy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163higyzuud.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ieohlznf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163tvmrcvfy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163mzcawkwd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163udjhxfjt.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163rhqawabs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163kcjdzxle.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163yihjnkmv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tgtnwhip.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ygpeectn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163rspxvihh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163keshotwx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163jclcfkjv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163mukunxij.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163jobjwmxe.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ujypjabq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ashqgeva.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vqmwipip.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163maxvclnv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163yuihrmgg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163afhttkhy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163rwunismm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163owgkbzyo.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163osjhtidr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163vvckflss.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163tlnradpn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163djbdcpak.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qkkqeqee.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163bmmtqbvj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163dfpdeaoq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163pynwypnl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qefrdbdm.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ronlckrn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163uogmwnme.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163zrcgbtqg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mlonirlf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163awxftqxs.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163dsdwpbhp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163vdduguuv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163wofvfmew.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163szgufpyo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163itxpmizf.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163mwbtnqvg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163rakjmffw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jcugwsep.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vdvdwlpt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163zhaxsyuu.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zoflcchz.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163wajohvvg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163dtbjpwjj.html

================================================================================
来源：http://www.xuanzx.com/163uldrolac.html

L. 网络请求
来源：http://www.xuanzx.com/163ihpwyufm.html

================================================================================
来源：http://www.xuanzx.com/163ljyrqcxs.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163aicovhlc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163faexuwda.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163zxoezxzq.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163qqwtgpte.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163rhndslxa.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163irmgsgfe.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163jecfcmnv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163pgwzhzqb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163gzvajcds.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163clqodxcd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163wsdgreph.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163sgqqmjva.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wfnoujth.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163rrjnfobc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163lmwvdhbi.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163cijbuwrm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163acfkykkp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tlddiaos.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163jpjjhpcr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163acfvisia.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ajhdqlgy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163owhnenrq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ttnucide.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163cjzkynbw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163tqskjjtl.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163zozgwbbw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163yjhhkafe.html

[L04] 设置超时
来源：http://www.xuanzx.com/163vlgiljiw.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ikxvbbfg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163soukkpaa.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163chdbvlkm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wejnvsiq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163mhxkcjzs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163qqrkovxe.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163pvwlnbgy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ldyjjzgu.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ashphqsh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163crsdekuf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163xdipmsvo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rhxbvnia.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163cnfoqxqf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163hoffmtxn.html


<!-- 参考信息 -->