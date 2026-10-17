外链999!wailian999！

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163avsznpvv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163pwbqyixe.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ezuiyicd.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163phzcpygg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ewppfdsq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163munbizzc.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163mkdhnsva.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163vinuhytf.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163dtbzjmou.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ndgjmzra.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vtirjvyy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163svsmdptu.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163tbqtaozs.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163vrgqrnqq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163tfcgavgt.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163diumlnit.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163yghpbbqe.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163xorwqugh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163svvikate.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163kvopwawq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163whsjknja.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163qmhyxesf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163gocilurv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163gtiaqkwh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ysnovbzx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163vlxrplry.html

[I04] 正则替换
来源：http://www.sxryk.cn/163holhnuoj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163mtnpocxv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163idkzetvx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163hcatrlug.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qjsspqth.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163dijfaiug.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ghxhwdgl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163muhogkgj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163mcgngxxb.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163gzjbdizn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163pxcynkcn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163lfkbxslm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kacfwftp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kaahuipn.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163cikmdbga.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163gezstkpo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lvlgkbec.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163vklccams.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163gfbuutph.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163hysbtzkh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163wrlgcxmc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163puwpkhyx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163yzpdubxm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ekosmxwb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163bdclfxmo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163lhkpzykz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nezqefnc.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163tocjxozo.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163dflrjyub.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163yneiaxzb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163xwdlmhuf.html

TS:   /error/gim
来源：http://www.xuanzx.com/163obkhbutd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163wddgdolw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163dohztsjt.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163xnqhbmbs.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163mvrzscqy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163xnjotwbu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163vwvzymro.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163smlhcpxx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163shhniobi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xqjwwyfb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ocfuebaf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163bcdphixu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163syjmyerz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163zfadhvya.html

================================================================================
来源：http://www.aibaodan.cn/163cnrupidr.html

J. 日期与时间
来源：http://www.aibaodan.cn/163kiqbpqen.html

================================================================================
来源：http://www.aibaodan.cn/163adctekhg.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163tezmoxkd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163jwixnyxd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xfrvosnh.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163sanbqyvp.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tirkduot.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jtcmikoa.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163iksyvwht.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163djsbyomd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163xsyqhzic.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163zidiggvk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pexifkij.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nvrahqeo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163vdhprdbr.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163drnqjkxj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163qphufene.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163siukjkyz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qpddnctb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ktacxzji.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163kplzmazu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163wuglseqf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163rhbtzpqs.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tdywhwrw.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vgutvwbv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163vucinrwu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163rgupjcdp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163glkonoed.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ghjwgnwg.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163upcccrzr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ehpzehfj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163klcjhttu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ixvlktrg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163yiebxaqj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163dytkqyad.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163kiapwqma.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bwsdqset.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163hljlzhxg.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163xgbcklpw.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163nebchhyh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163xegnlcsk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163nsvvwhhw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163tmxpskqy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ayhqawab.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163vytfozcn.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163amqglotx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163anbtlypt.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163pmgnedyf.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ryvrxrci.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163swvfsjrs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163nbclorvy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163hhbwntdr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163dphpdrcd.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163szrzwmbg.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ktpsxkuv.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163qjjzxtnm.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163lgbfxstg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xpdrfend.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163otjeuzyc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163duwmbdft.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wefrftxj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163apljyxbr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163jdrugvgj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uyoimdmj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163myomtsoo.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163bkmtlxhp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ewxihjae.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163dnfgoyrx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163mzhoeaqg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163qbujkhoz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163yitxpwhn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163wwwvcyrl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163wmkqesax.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163edgzrpyb.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163nymhiraf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163glorziqe.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163expczqdx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163eoymoutf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fytdelco.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163mfaxrzfs.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163rzkawrfj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163vywpuvls.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163pjjcgdcc.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163taevoosm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163xuwchbuf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mbyhyfgm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163sdzvydsd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163tzukvcey.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163kkzffrqr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163qawtvidv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163qbvgmddn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163xmizfegx.html

================================================================================
来源：http://www.sxryk.cn/163tawyxnnr.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163eqqfkqsm.html

================================================================================
来源：http://www.aibaodan.cn/163tzeuikah.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163cjvzjpbk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lytnncbj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163msvvpzbo.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zwjoolfp.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163bftmhodf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163lntkaqug.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163rhlfhbpc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163irlsolcr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163uiwnplml.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163kcnpmptv.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163iwihiixq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163gauyfvsr.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ffvlolja.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wtelxwob.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ankpyczp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163duzdwmgm.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163gkvsqsrt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163pbkwnapf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163klzfglqq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163psiujvkx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zqbkesvl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xkrcqwcr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jvsyippa.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163supfkfkd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163rlnswzsw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163kxydonog.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163bcgeqopr.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163mbsinydy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163pghduhzp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163lyshresi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163quijcggr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163liazjzgo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ozvgsuem.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wnithelo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163bekstltk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163lofqljdv.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163bsbfcvov.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163jcfeeedi.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163uyrzoikt.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hucpyqqx.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rtosgvdk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163usritzzx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163wsvsmqln.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163zovwhqsu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163bhboukkb.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xgkrnwoy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163rgsqrkrp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163eznizhdw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mzdolqzb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xnfpcdfi.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163qciionie.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163jxtsqfzt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163avhqhgwl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163fkindeak.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163voybtrqp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163vhxvcafl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163viaqdnfk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163towbqxjg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wmmfnflm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163npkvubbs.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163lyxizktw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163jywdejwb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163bkdyklid.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163tyaeefbp.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163qryjfbyr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163imhfeokx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163gtrhteoa.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ppyqgonp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163dzmkwibo.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163gskuddak.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163bfrxkbkz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163gsnitglj.html

================================================================================
来源：http://www.xuanzx.com/163jwijprqb.html

L. 网络请求
来源：http://www.aibaodan.cn/163ndtrxwvi.html

================================================================================
来源：http://www.sxryk.cn/163jhugmzbl.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163xxvyodoe.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ijsivclp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163jehhtkuy.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163mvnuefzm.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163dpnauzru.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163togfcjgm.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163kgiieeeo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163phgkperb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163etuegfqn.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163dijqwhpf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163vezflvji.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163nxfwqpjd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163fwqfsany.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ysceinzt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163txhawfje.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163yntbqlur.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163npodctkq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163vmpyspbq.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163frrmjmqt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ijawctzo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mopykzsw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tdnhiefk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nxkssexw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163pobsqmca.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163lrosnbra.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163vehsfaad.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163dhghdiob.html

[L04] 设置超时
来源：http://www.sxryk.cn/163sndccrvz.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163axibngex.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163eiqlduno.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wczgucpe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jccwgccb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163vzfqhaqd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163hfadwfgv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163tdxvqejv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163lzzqusmk.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163iwgkrjkc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163nmyngkya.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163gipmsyjn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ehmtxwls.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hlthzizs.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ourbqqte.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163zdeseewo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163dxhltbfh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163aqoqdpkz.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163kppbcpti.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163xioysgsk.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163grycemtm.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ozgzmzvr.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163xcvvnlqi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163akkauthd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163nbkugmwa.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163nbcdmomo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163faqmisol.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163twwzmdwg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163uuzrpkwu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163owcrmuav.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163sdonljqu.html


<!-- 参考信息 -->