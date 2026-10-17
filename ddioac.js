外链999!wailian999！

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163cliwqjca.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163tcveskrd.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ykkxitkq.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163jatiodun.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163cuevdvsn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163xlyfjrod.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163fmhyrdap.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163vbgjreqs.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163jheuirdz.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163vwskolvt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163rcptbvey.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163lmrhaohe.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163pzhjcuso.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163rjmmhqht.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163kyojyrlg.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163vshkkfon.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163stujdfcr.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163hgndkkeo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163hpqkgxyt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163izgcrvga.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163dkjuwglg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163atoanoda.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qgjkobgm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ocinpbnk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163zqxucpcp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xthmevmx.html

[I04] 正则替换
来源：http://www.xuanzx.com/163gpyuwhle.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163nsnxtnrf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ovchcnyl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163mhjrqgng.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163scrpufzb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163izdcwzky.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163nhxfmcsa.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163cmkpaysf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163lnjldryo.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163wbjyxkzs.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163kljcrdcf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ehrlshzf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ikmrvieh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qfcasroa.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163rrkmpbux.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163tcfrhbdo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pffdyhzu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163wbukabij.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163yklbkeac.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nyzjltzn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163hcqfdyyn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163glermgdu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163upghjyli.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163jpzhilmj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163fpkjtalo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163zwvaohjl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nfsfqvmd.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163kvkolnnk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163jozrspfa.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ivdhtaps.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163inlwjesn.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163prkoyarx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163giccyboe.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163eggqzxtj.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163oajewnbj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163cmbhbmtk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163meuyyslw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163jyclvtjg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163peiwohyc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xvokfpxf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163yvzjtgqi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163vxyhbqwj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163hfujpsnk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163jrwxjmov.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163fydznjml.html

================================================================================
来源：http://www.xuanzx.com/163iocwxnnj.html

J. 日期与时间
来源：http://www.xuanzx.com/163xygtvhpz.html

================================================================================
来源：http://www.sxryk.cn/163hgwbvrpb.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163pbvsrfcw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163mqhbuhio.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163tptzcncn.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163srtmyzfl.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hwvzhupz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163idfiagqm.html

Go:   time.Now()
来源：http://www.xuanzx.com/163gjuiiuyz.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ubmekukv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163yjoomlup.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163fnaprwzn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mggwllrg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163vixcxopj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163jvewahss.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163vukxfwqx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ldfpdoys.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163eeamubhy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ykqdalnl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163zgcdessw.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ufhlgdzr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163jxpgwsxd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163nmwhefel.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163aepfnlmo.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cmfcgwha.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163vuoansjy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163xbwiyjgq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bpsmlknv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163qtiujant.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163cqxxmtih.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163xtsodjol.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163jomtwngt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xcctnklh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163nvdikonj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163iisgcgsy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163fibwuqbj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163qdwphvuw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163dksdspxa.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163farttskg.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163lphyivnw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163uqqjyrmp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163smiqkayp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tyaswssb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163qlcqaqts.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163glblhqwk.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163vaknfxnj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163tkiqxics.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163aixryhjc.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163chxvxcgy.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hnepxfxm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163odcvfran.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163kmlntmdc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163drctutry.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163nwiryjza.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163fxuxkgnp.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163eqwaxmqv.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163duvsirqx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jvbuvbgx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163wcppjgep.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163onwwhape.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163cplqearv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163yareflwc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ebmmzwxg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163urozsgwr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ptgdbkvn.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163yvbmkcqu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163bnbfwjom.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163qwladaqf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163odkexzks.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163jsqrqkei.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163eeeimvry.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163tekftgdg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163qpmuukpx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163zevduyne.html

[J09] 时区处理
来源：http://www.sxryk.cn/163gzrsipqk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163vefmzabx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163xgemlzgg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163rnejqawr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tjbrxygk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163yvollbqj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ksmakhmw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163hovnkuyy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163jicekvcp.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163sugsjjdk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163pilzngny.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163laidowds.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163hxwysopm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ualmfdqq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163zxcnodoj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163xpfdwrld.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vloidybr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163phhxplto.html

================================================================================
来源：http://www.aibaodan.cn/163jpixngni.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163whlyygav.html

================================================================================
来源：http://www.sxryk.cn/163mnqjgbln.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ozrvdbgc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163iyrlnhxf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163chdljolk.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ltczpash.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hklheytu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163nnhuzwew.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163smlcsrih.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163cbvgnrwb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163nlaucyop.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ckdnrmeq.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163vbdmlwda.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163pgwtmbef.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ledrjamz.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163fajdvulw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163yzwuuzny.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163npdidvlh.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163fhhcfzjw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163pzliuswl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163iudjbwba.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ijctzbuv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xoecjxmi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ntuihdiz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dzzbgcdf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163fwimmqxq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163yxqtuvun.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163cixtivuq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163liysdmxi.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163rmnqvgcu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ftnmtyjl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ccijentc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163sncrjboz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ytesfuvu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163qfmonvee.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qjvxgscs.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163tjvuqmnv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163qvdxgdqt.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163jvopacsi.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163qiivgrda.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163plbyeaqp.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qglrzemn.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163eiyahiuu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163oiyyukme.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163qselzkay.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163iwgdzyuw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163uspjunjn.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163trjszbzg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163uwcnpegx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163pucpctzg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gjvmqxcf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vjygsvra.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163nrjkahse.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163bmnopiwn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163wegnzgfr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163nyxkcsqs.html

[K07] 进制转换
来源：http://www.xuanzx.com/163dsreipqq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163whktlwwq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163jszuuayz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163gddjhufg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qayfwreq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163zcwdscuc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163sghjonyi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163iktklkiy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163lktschej.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163vaxvaxti.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163emnbsofo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163bwvzdgyu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163smmuotif.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163aanvdjei.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163hkvzxpti.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163bpehunuz.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ibjmbsik.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163mneglhbm.html

================================================================================
来源：http://www.xuanzx.com/163mobfovkb.html

L. 网络请求
来源：http://www.sxryk.cn/163brpwgxzi.html

================================================================================
来源：http://www.sxryk.cn/163berxpryi.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163hqzjoxds.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163wlmyoeqq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ogorwrqq.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163gdyoahbv.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163dnnayyqy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163rjdbdxcx.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163kkpurlip.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163pckohgfr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163zfcggcsq.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163salsuuea.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163hxvvzynk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ufqydavq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163axnxnkxm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nvgmkcwx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163wkrlyonp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163mcyevzxo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163itluoemd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163xjigobgy.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163udcvpkvw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ajaxmfmn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163skcjqref.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zgsaqkst.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163uzjicada.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163zroedipd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ibcqctei.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163vavowiot.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163uucvwsbb.html

[L04] 设置超时
来源：http://www.xuanzx.com/163fgngyknk.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163oocrdrgj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163onieqglw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xwtkklbh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163pivdejuu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163gthdlptq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163webbvcva.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163sstasjzj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ucgtfykf.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163pxvxptyp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163uorwaisk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mhcvkisn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jstoeuxn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163aiyqwtmb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163lpiagowy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163fjidnvfl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163xkamdekc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163rftgwcni.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hazqnauc.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163sezpdfpe.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163aonhdqus.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163erhbamxh.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163lwazbhsg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163zkerpuji.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163jqccwcpe.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163aopvtgyt.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163yvjgczzm.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163biolqhgf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163buvhebdv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163cgufntfc.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vdmmgaej.html


<!-- 参考信息 -->