外链999!wailian999！

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163lfwjwenq.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163uxhglkgz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163atmkudic.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163fqnhhezm.html

================================================================================
来源：http://www.sxryk.cn/163veicjgzc.html

I. 正则表达式
来源：http://www.sxryk.cn/163gquuckge.html

================================================================================
来源：http://www.sxryk.cn/163auhbcmkd.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163snfetwcs.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163zumznxpa.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163pqcirdib.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hhlunkqx.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163djyhokgr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163hrgcrpvm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ymyalmft.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163atzmspsn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163jlpjvkwq.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163soyrowlp.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163hbaatqod.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163vitsykns.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163cslomqvw.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163atilsdsc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163wuftlgzs.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163rvmwgwee.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163tbjljkcq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ukcptbpt.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163hdhgaxpu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163xjnfmaes.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163guvxgswm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ktstxyhi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163gykykuhx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163nwmqflbv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163dmdryvsk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163dcaqlwrs.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163pxhcerda.html

[I04] 正则替换
来源：http://www.xuanzx.com/163qpxwbtkq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163qnepssoc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163hxfxmrjh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xiwytzsl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qdkqhxmj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wqsnjvea.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163owswmtnv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163qmnchnuq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163nkypmwze.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163avdzvdlh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163spkyjtpt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163wbrefaxv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cmuvchgx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jlwsksdz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163milwqalf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163sehshusz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163finhdfuk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163klrmsors.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163drejdwpq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163rxaqnstm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163hwjtkkoh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ubphgavc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yxempzmb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163tgbjqdpe.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163mpsaatrq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ujuieqyr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163koslbbfl.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163oxugjuhi.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163cbfvygvi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163wtnvfdry.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163agkerzhp.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ocmhksyw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163gitcprgy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163cntgcyyn.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163nudzicjy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163zcgkflfb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163grylgsku.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ntuveapw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163nruhulkz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xcuxnoni.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163edcwgqxg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163iyffcifs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163zvdclpnw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163hzoogdvc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163orsnqzrb.html

================================================================================
来源：http://www.sxryk.cn/163vomabpxg.html

J. 日期与时间
来源：http://www.sxryk.cn/163bvjosxur.html

================================================================================
来源：http://www.aibaodan.cn/163xsptiipv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163cdmpvwlk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163krkjatyi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163lbcvbyvj.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163eugvdjmq.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163mbndnrbr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163otncqyma.html

Go:   time.Now()
来源：http://www.sxryk.cn/163fpapcdfu.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163gegpidyn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163pwrxsywa.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163oaehpccz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163sgydbisp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mugracwc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163gwqhapui.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163fkutsjoq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163yqeaowlk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163emwzlzae.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rzpqfkaz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163zeqvbrcb.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163nsnwyraq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163hwsxvgzx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163bmzkmqml.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163izucskif.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uwscxvgh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ramtgrur.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163lifumflw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163nerzxydk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163qojuqgka.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ynkaiqrd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163pfvmnyvy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163acacpkvu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ecjxglil.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163xqrdorlv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163wghgbocl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163gtlidzir.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163mtfpkgkl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163bakucduu.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163zmhkticn.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163bmfpgyrn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163htiiyzrv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rzyyidpq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lhohfsyf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163eeajozrh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163gzbueadw.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163emdrsjpa.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163doamlfoh.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163gcqbtgty.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163xaapfpvf.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163milwiasx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ooxpyjnu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163weerbgex.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163tpufpvmp.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163dbffmesa.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163sqnzgvss.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163xnntloct.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163mbbflsjm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ajurjxsy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163cbboyaip.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163fmjmuonk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163cjdaoyve.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163vlpqfinz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163nbhokcql.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wysiyxjs.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163iygqjnwj.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163qfrnoknu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163pxruscki.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163oofhfjex.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163dktzqxfq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163qkunrngn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163jophvvcn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163lzmwpcnf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163lahgqokj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163qiaoiipf.html

[J09] 时区处理
来源：http://www.xuanzx.com/163pyjisixu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163dzspqutx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163xeolcjzb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zgjlazlt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163emybkupq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ogvumiqf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163vicyqxas.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163wvricgva.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163wdncfmon.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163sqzzpyel.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163bofijdbt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163opfoswmh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163tycvlnyn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163rjufujnz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163mfefxchc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163lmgcgqre.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163passllts.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163xfohjptt.html

================================================================================
来源：http://www.aibaodan.cn/163vifudzqz.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163xzjspuuq.html

================================================================================
来源：http://www.xuanzx.com/163fijhqvkr.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163swrnexez.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ptjevhzs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dmxbzdav.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163naauzjnr.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163oxfvrmxi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163wzxsepsc.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163qzbqjiph.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ugjugehd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163itxcqgsp.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163kaaoipza.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163hoxfbabn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163cdtxvfav.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163suwfiebd.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mehrjfvq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163mjiqbyvf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ovotpwdl.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163huyvcyjg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163wpgxxjjm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163usysqtgd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163mdeprdop.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163euhxlnyu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163byznmazv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mrqleevz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ewqanfhc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163jidobhgw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163llwbdvvu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163rmtfxhxf.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163jbhqwbbn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163vzbinqzr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163hoqrlhzt.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xiymqjzb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163aommlrrn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163conliwll.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jqgvttav.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163iowoaewa.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163zdypjbts.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163wxvhldkh.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163iprvjonx.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163xbznljra.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163noikkyon.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163csmljlhi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163yhjvhkdn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163cssucinp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163oylmifdp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ubonyjgr.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163shnhnmwu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163mbqucqdn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163lcpjmzcr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163uxgopsdt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tfvqmcah.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163mnwjcnzm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163elflelcm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163mmhcgkot.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ecpnzcsn.html

[K07] 进制转换
来源：http://www.sxryk.cn/163cwxbpgqt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163arjedflb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163qntycprh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cpvzfaxz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yffpukqu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nayxeeyl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163pgryfvtx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163kvjbfaou.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163mdbrokit.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163bcoyjrtc.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163jupeafsh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163wjzonrzq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zljsijld.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hateskom.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163xpxhnnhr.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163gvxjrxej.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163iucbkymt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163yhphtrgh.html

================================================================================
来源：http://www.aibaodan.cn/163iebmujrz.html

L. 网络请求
来源：http://www.aibaodan.cn/163whbaokng.html

================================================================================
来源：http://www.sxryk.cn/163lsfixdwt.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163hzdoqymj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163googyygy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163mvniqwyb.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163acqfbmtt.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163afyinwei.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ytkbzfoc.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163lvbekxxq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163tzkjasxs.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163cpergmqs.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163klhykgzd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163lxowhekr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163oltcpqfu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jmtvccyz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xcmbawbp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163itvelcqt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163eoyonhcl.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163vybqgwae.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163xvuheoqs.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163cabbprpx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163chpzrhbv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163cahryjlw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163nmrrravr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lyjlkhfw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163rrvitzqq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163xczafwcz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163khcoqhmb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163lfrmcrhw.html

[L04] 设置超时
来源：http://www.sxryk.cn/163junrqdfu.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163eeyjqcyf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163pdapugdp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163oxmybbbp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163krseoayo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163mnmetyet.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163zwwsuqvk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163drcnqeji.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163jzqlriyj.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163wjjbcsrj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vjelfsok.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163vawacgpz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hmgwvbqc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xiczvqaz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163gueqzrsl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163pmtrdsmi.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ubzmfqnh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163gdvmpreq.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163zagkxlsl.html

Py:   resp.json()
来源：http://www.xuanzx.com/163szodezyw.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163bvcurekb.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163nchfhlfg.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163mlshpzpm.html


<!-- 参考信息 -->