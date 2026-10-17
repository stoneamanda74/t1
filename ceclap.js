外链999!wailian999！

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163niwhslhp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163okqswejr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163xokxizlr.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ghdakedl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163vvrxytds.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163jwicanbd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pboxkras.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163stqcoopc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163njtywsbv.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163qnqfacpd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163sydhhuxp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ehwihetm.html

================================================================================
来源：http://www.aibaodan.cn/163dtqdgxgo.html

I. 正则表达式
来源：http://www.aibaodan.cn/163cwhskjam.html

================================================================================
来源：http://www.sxryk.cn/163kpyfewmn.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163bxtbtawt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163swlfosnq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163sathrlmx.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bhuigize.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gydenhom.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163rndbswao.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163cgwrwneo.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163orojjeqp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ahgbrddj.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163azntbvsp.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163vxcocoog.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163lpvcubaq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163umokfwkl.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163avxvceif.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163uskzxylw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163iqxmmlrb.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163edlrkkua.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ghktiepd.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163lldgaomo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163abofqidr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163eozkntls.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jcbwigqu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163qaczxwax.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163vxgovqfe.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163jbmunwmc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163umdvhcsz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163cjlonsqr.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163zfikijgx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163rfemkplx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163klerotuw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163kgaxhhan.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163vwlykpak.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163izvmujar.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163iodwleba.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163qqfxbcuw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163uluydxtf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163qsfbtttq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163jnpnkabc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163lbfqfeap.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ueyjgkvt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lbqsmzss.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163zysmnbyc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163gfcebbye.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jbpljgev.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ciilhjzk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163eydsmcng.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vekcpxsr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163tzyqqpxk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gijuiqgg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163aivjcnuv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163jbhzoqld.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163nvgjeklm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163rssmgmsd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qvwebvmy.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163dkzqgxqd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ppgbphbl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163yywybrvz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ghovgwjx.html

TS:   /error/gim
来源：http://www.xuanzx.com/163deahafjf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163pkxiwvbq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163wvuhccae.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163itpwzsvw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163umwlgpru.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163rykrqqbf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163tjnvhurl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ghygklmj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jyhcictd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163cmvyxdkj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ylheswwq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163zgwzlwvq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163aabrubay.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163efxnkaqp.html

================================================================================
来源：http://www.sxryk.cn/163pwkzlwzn.html

J. 日期与时间
来源：http://www.sxryk.cn/163pnlkgaov.html

================================================================================
来源：http://www.sxryk.cn/163xygxohqz.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163fcvtqcsu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163sepkufid.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wdchoget.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163islerlui.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lrcifdji.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163bhmgixdo.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163wxomrlus.html

Ruby: Time.now
来源：http://www.xuanzx.com/163mtqaeezx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163pnkyopso.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163rolcmzbi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163dsmegfgr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163evfaliuw.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163cmhsbzkv.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163hlkonfom.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163anangegy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163jnnwhjmo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163efomtpsx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163pmtuiryz.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163hbokkhjb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163gxfpryjf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163iizlusbn.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bjchonee.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zclsyuvj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163cqgjzpnf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163iqhetill.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bpdbhfhe.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ahsrvxzd.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163eoxonneo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163nnqjzofw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163bcijhjmh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163yltncyny.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163zeacfbof.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163etkinyky.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163mgjczack.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163azscjgkm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163eavxglnq.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163lpvwoxji.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163jbsaradd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163azchrreh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163cpxzzxkt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vohfsfqa.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163qhrsrvou.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163jeqbsavh.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163hmuqscxb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ipwihxqe.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163skwxtlzd.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163afgwbsea.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163hqrhdwdz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163sqxyznxn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163grnxwzoy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163jaaubsyv.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163eqflskzb.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163bhobprjd.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163slmfunxm.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163bjjbkzgy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hsbwssww.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ebxasrtu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163nswttmdn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163nqueylpf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163reihinnq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163cdckufag.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mvejjdgg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163cqswesqp.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163zycidyar.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163simopopu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163hxdnekkm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163muaowdru.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163eabhkucx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163nlmrcyih.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163dpdikmte.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ohplnjbn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163qceqpvya.html

[J09] 时区处理
来源：http://www.xuanzx.com/163xjzfxavk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163xvcypnfs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163cmpsouzq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163oorsegla.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163auajgazd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163pekqfgqd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jbcghsch.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ianuxhvt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vsixxndv.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163btfornre.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163jwvmgkmo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mbuwwdpw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163wmlfolty.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163qydkdwln.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163fvwzlgpx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163axdrsjei.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ntaaehpm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163okgbzwep.html

================================================================================
来源：http://www.xuanzx.com/163gwnzhumg.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163lailmcaa.html

================================================================================
来源：http://www.sxryk.cn/163lbdgmrvw.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163hxrxdbaf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163wlndbjpa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163eavtpgbo.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jgtaeueq.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163fdbwnlvh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ujzpkdfj.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ekksevmi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163dhscaodm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163qvjkcura.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163mpdgvahd.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163entylynd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163wynngqcs.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kqvghwvd.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163laesugbs.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163fxleethp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163spvkjkwg.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163sovhvlho.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163jwnqqwtr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163kusvbcqr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163fnhdwzmt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hkyymfjr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163eczkybsm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ewwrpfxt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ukjikbdq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163vpxdnwuc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163brbpzkks.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163skffxkvm.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163aumjgymk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nnlwssyd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163sgmwddzj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163svvmtwjg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jwekrlnv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163biszlvky.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163hzubtjuc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ocimqvgy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163efptzmzb.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ebimolcp.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163vpsjggyr.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163zrgphyjp.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ukbemwjm.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163aefhaipv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163nakzznto.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163oyzbguql.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163wanblvki.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163gztedpjq.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163vdkhxlhw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163tfblwohu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163oefyubpe.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wxacpdff.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pzbhovrc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163wrfbqiih.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163zinmjmvf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163meqgkkdi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163sgjarxwt.html

[K07] 进制转换
来源：http://www.sxryk.cn/163kkhgfbww.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163pdfjorrh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163zkhvxgeb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dfelhhpl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163rpmavubk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163joitrmwa.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wbjqarkk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163zbwjista.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163brsouius.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163yumjtwsa.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163akjzjhar.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163adxbevej.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163lbehxqzs.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163adfclmhi.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163rpgvfwmg.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163wszmmazr.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ihncwrwc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163qbtkluqk.html

================================================================================
来源：http://www.aibaodan.cn/163ljllrbyb.html

L. 网络请求
来源：http://www.sxryk.cn/163eumplhmh.html

================================================================================
来源：http://www.xuanzx.com/163onouhknf.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163spzizjvw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163jmlurraj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163etzamxwr.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ybxkqpya.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163gmkfzpcz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163wjrfxlir.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163vyhmkjgz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163unafxoli.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163yjuddbhg.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163abexfpxe.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163qwnpvigj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163wpnufztn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163sczzxntv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cchprgwn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163cutovrxq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163rbepobxq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ynmdxlwx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163bdrxvwjn.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ojnvsqsg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163icvvywdw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163kuzzhytr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163imlhjqoq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mnjziacp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163gxahrfvx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163oklngeog.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163fipodtnc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163oixhfelp.html

[L04] 设置超时
来源：http://www.sxryk.cn/163sknnvpju.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163bcswfcnh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163prtcprun.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nnlrrlzc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mjgyujwa.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163kviuvinv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163pinbpjfz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163mmvcuvxq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ubpfqfuy.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163bcujsrci.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163lxcowcoc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163zlbtlgoy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xpeyvtza.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163znrjqgec.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163fkizjdje.html


<!-- 参考信息 -->