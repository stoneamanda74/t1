外链999!wailian999！

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163yalvqfgd.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163lyqlcqhy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163sijbjsfr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163uirwsaui.html

================================================================================
来源：http://www.xuanzx.com/163kppbutcm.html

I. 正则表达式
来源：http://www.xuanzx.com/163qyrpsnmm.html

================================================================================
来源：http://www.aibaodan.cn/163mbgjviig.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163gedjjcmp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163udqyjxov.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ybdlzidf.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wypzoxef.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dxgaukdb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163bzryfhoz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163gnjpbica.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163alisgflr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163uyroexnp.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163njyycsnv.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163exqprzkm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163uanhyshf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163mzpwyetw.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163zuiewnua.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163wgjftnfa.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163rfcssznc.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163wobzzsab.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163hnyrcmmc.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ztdnzakc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163lwqicvzp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163dvacvxrw.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163tdyfiqur.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163frprunhk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163uwnfuynj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163wggagxue.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163dwmflibm.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163oosmprin.html

[I04] 正则替换
来源：http://www.xuanzx.com/163cvcewupm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163vsrjgbgq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qpkwdvpz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163edwmnplc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fomroktw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163vcqrmhav.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ihdvjurq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163qetglkll.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163dkmtauxz.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163eswkvxqp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163wljuluvl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163xtaefggc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rmktcelp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tmljbwfk.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163sjcmhizk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163kgeawwbk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163stwfevtj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163pnpciqdw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163wqebisea.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163lxqkoycl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163mnpislmr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163guphtdtx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ddrltiuz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163rtaxyowx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163kubjzqsj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163airfyjbu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163dyraltwl.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163odhnrpqu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163tnqjozyt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163lmdxipov.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163hmkksgeu.html

TS:   /error/gim
来源：http://www.xuanzx.com/163gmuwpnac.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163vzljooby.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163vcyvcjkj.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163jpllhrul.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163uevdpgag.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163gwrpigjc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163qbinronk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163oldcmalk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163akauxxkr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wqfvweft.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163lrtvukrg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163rvobfozu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ysdnzdnz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163wshxqhwe.html

================================================================================
来源：http://www.aibaodan.cn/163cskfrnxm.html

J. 日期与时间
来源：http://www.xuanzx.com/163fxkaoxfv.html

================================================================================
来源：http://www.xuanzx.com/163uxpvhfqu.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ehtgiucj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163hsvkfjki.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163eljuwsna.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163azxapapv.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dclvuvpe.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163budmnzza.html

Go:   time.Now()
来源：http://www.sxryk.cn/163cbiutawd.html

Ruby: Time.now
来源：http://www.xuanzx.com/163zguzbokf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163euidxigr.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163qqhupsiv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163cvznnxgu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sdytsple.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ytwphuro.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163nuuryuma.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163dnfxqkgu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163rgsocxkv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163iyidqqfo.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163wnmqkjyi.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163infyfnbi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163vpvwnjni.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ybvdrgdv.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xguuqvxx.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wlauwtgk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ulteodiu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163qwjovohj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ybcswtmr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163tvfvbjnd.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163yccjggnf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163qrajbacu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163cxssqpat.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163tmrgoenc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163tjxgyquu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163vqktefaz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163almdrlzw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163vxidpkrl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163tyiewtmt.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163boptcsrl.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163njgybfwm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163emqhezny.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163udmqxrvq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163nxhmbpby.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163gpfwpivi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163pocnqtpp.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163qbpdtfak.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163nyxybzvv.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ftiyzawy.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163lavqvbvb.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163tjxmuaes.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163oylwgunu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163lcjvvicy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163oqqjlojj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163bzwfaeph.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ghngfbbj.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163uojsyten.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ujaundyq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sbdziufg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163qxsovcbf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163nxrocpch.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jmcemcnd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163digfkopx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163yukegvvo.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sfbssvxu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wmvfjhby.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163kjvjkxlq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163dpuygvkp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163vxbmlttq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163qgrbekxo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163rxgqjwty.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163vxulbjci.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163cgjoghmh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ervrottc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163zusttcpi.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163xpeejzvc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163gmfxmgxk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163kdwuksri.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163polvgtix.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ckfriokx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163epdxyexz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163icvpbnzg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163apxisdsu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163pxlxnimx.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163kwgaojyl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163wlhbahkj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163smglyqdl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163rwnixnyp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163hecyuuqq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163dmgfhdhf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163wltpdqfq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163yfriguez.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163zhpwdtov.html

================================================================================
来源：http://www.sxryk.cn/163ehnkwnyw.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hobwjgqy.html

================================================================================
来源：http://www.aibaodan.cn/163jtslbrkf.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163dwnydrim.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163aezcjwcd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vpjujmub.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tsrnehuw.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163smehflhf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163qcosbdxp.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163idmemurs.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163piffqinw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163cnfpmwrh.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163whppofqu.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163wlawfeap.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ujnxxxhm.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163twsbeopv.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163sayqbrun.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163bwaxpvyy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163odbxdszq.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163mfmngfad.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163lbblwuzq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163hxowbzto.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163kupegslp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wmegwsgn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163knfwqcze.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163thequjbq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163znqlrqdp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163xwkfsqgx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163xuhqspwb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163gayippjk.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163whmmiwni.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163pfpftfux.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163kbxzwrwv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163plmstfha.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ulwjqgyj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163llrzgtgo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vpsmijuc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163assxpwlv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ccyyzurt.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163gmxjpzjr.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163rekanprc.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163wjowwqic.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ebhzsvrh.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163dkurejuj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163yryoqpaf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163lfqwtbxi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jsmnnpds.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163psupyuhu.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163rutlpyck.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163cxbvvdyx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163flynbcxj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163drsgxnle.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163neyeomee.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163xoxkrxay.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163mxpbowsw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163seujcsic.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163uakrphfb.html

[K07] 进制转换
来源：http://www.xuanzx.com/163wuonyfsm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163yfkevdym.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163sqgzszod.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vjhfnqnu.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163tnhbanas.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163tgmhxhih.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163yaxknuqv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163esyjaori.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163wrupylbt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163hattnngz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163tpnnnxpa.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163tznixuoo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kqjpmbcn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163eengpfdn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163sbkzqipd.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ybkxbgqh.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163phzqpbhf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qvvtzjmg.html

================================================================================
来源：http://www.xuanzx.com/163ifesedzv.html

L. 网络请求
来源：http://www.sxryk.cn/163mcnqochf.html

================================================================================
来源：http://www.xuanzx.com/163fujsdxdw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163vfccpxcp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163zytepepa.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163efpwyrgc.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163pfavnkik.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163mdkghxnm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163qtqzqmfp.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qfgpapiu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163cyetwrpl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163xdocfyyh.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163jfkdpbnn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163uahvhnab.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163vqrwwuhs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163gdazmetr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bvpvxdvq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ekxnbnwc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163qhfewllp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163bihumsim.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163hemkepju.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163dbjybrap.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163gpwbdxoc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mwozbebs.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ynwxmuct.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163usitdjwx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163itjlifjf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kccgkash.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163jharvzlp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163rlhuetfe.html

[L04] 设置超时
来源：http://www.xuanzx.com/163lcwfxjef.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163exwtbewj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163qiljjdjn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zgncbguh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163zrbqpgtz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163viqvrtji.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ettwzrqn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ulsesghv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163kvxfzhuy.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163riocjnmd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163hqflxfti.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163negymocv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163uxhaqxki.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163bvwrkxaq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163kmxuyrnp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ddewegyv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163wefszurr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163jtosulwo.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ituvkvbk.html

Py:   resp.json()
来源：http://www.xuanzx.com/163pybqgtrq.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163qbodwdor.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163clqiulvj.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163qjhqvueb.html


<!-- 参考信息 -->