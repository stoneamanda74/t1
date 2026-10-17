外链999!wailian999！

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163xtfkihyx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163dbppcwkm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tmesfpzm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jnbsyxpq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163pljsqzkx.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163nwtzvock.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163jdwimrqd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163rwhilucz.html

================================================================================
来源：http://www.aibaodan.cn/163ksbkxszz.html

I. 正则表达式
来源：http://www.aibaodan.cn/163jouhnodv.html

================================================================================
来源：http://www.aibaodan.cn/163brxsufus.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163olwuresz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163dkrsdcdm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163fqvdfqlf.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163booixnde.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ghnuszvp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163arbqjjsn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163nmhtybny.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163kkxgtlda.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163nvtbymdp.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163opaewqho.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163zkbjqotg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163awqxqqah.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163xvektuhj.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163gjslocry.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163hekomggy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163cnxxrdor.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163eciepwzh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163udjmzdbo.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163xwaxlqlm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163lncydbgr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163gxtqsbom.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163woqmwcud.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163bawopdet.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163lszqtmbi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163yemouyef.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163sogdocjc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163jaxmzwzb.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163qyjdrzun.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163mkwztfyj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mlvcqbmy.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jdjijsot.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ywqpjyjy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163zwizbycg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163xobfcciz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ceohnvtv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163bxwsrljl.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ajhakhxv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163tfpouhnr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163yelbmrqn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fioxxtrh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gfvmxdzt.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163wuhxmqfc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163hfqgtmou.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pmpkewcs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163rkzzifkx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163jvhbifss.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ppiuunuw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163nokybsgl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163yornsiaw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qotuuprc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163vyqyrwqd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163anaopvfi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ttnrnrod.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163gkfggqdf.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163qazvkjpt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163pexdydgs.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163hgaeqiba.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163zkhayjgh.html

TS:   /error/gim
来源：http://www.sxryk.cn/163jnjixyqi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163bngenavi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163mlitblsj.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163hpfdeupw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ofighddl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163zfriqosn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163uqmpzzxl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163qcbjgvxc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dnwgyudw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163brunjujn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163vmwwhyal.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163inioufdh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163nwxqqobv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163sxdlitxj.html

================================================================================
来源：http://www.xuanzx.com/163xyqgvpmr.html

J. 日期与时间
来源：http://www.xuanzx.com/163rrcvjtmt.html

================================================================================
来源：http://www.sxryk.cn/163kxmrdvql.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163pdquzfju.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ommhrpvt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qooumhhv.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dywbnaqv.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163elavropd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163zugkoyyl.html

Go:   time.Now()
来源：http://www.xuanzx.com/163bxnjgmvq.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163hfvgkbso.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163fpbfrwhk.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ulegexwk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ivmlyvzf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rndpvfsa.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163mekvuyiy.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ljzbtbjx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163apqntscu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163mioydeov.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163knsnzdgs.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163tomkhxiy.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163jdyordin.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163gsndnrcv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163vndenqmo.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163psbsjiui.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163istclczf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163uprbifql.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163qoufwsrg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163czzssukw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163obsfrkss.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163hruaycfz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163gtzbgwtd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163zexpuyih.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163tbdfnzpp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163qyjrheos.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zzfptzcc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163remdstvx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ugxmnniz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163mwdcqpxb.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163fqxsouzs.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hakegvsi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163cdpecihu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163tvskigdf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163owyzzsxd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mxxzkhto.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163hfbqsyws.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163reholluv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163foskgnac.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163jjqemkdg.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163hdgvuysa.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163heusscst.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163njrbjnlp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163zqnyowlg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163jjqbdpep.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163dcrviqhz.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163clqppvhe.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163evaagtkg.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163vuisjunx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yvvpqgwo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163xbdivmog.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nfyyimxz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163imkumjkw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163dvzlfrac.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163rovmvrsr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163sjicjiix.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fhbtsuru.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163kiphngvk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163qecupgou.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163dpuazzdw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163lizfhfil.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163onooouix.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163myensrwh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163srzfkuhe.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163jrnclbrg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163egwdaslk.html

[J09] 时区处理
来源：http://www.xuanzx.com/163nlqarzyb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163kjktcfuw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fijydrgl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163greppouo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hlyivubh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ynyyerbn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163oskezupm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163yhqnbtog.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163poplykmd.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163cuirofiy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163fuejhwfq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mjdvdhcg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163hrcfwshg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163tfpgeqpm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163xoxmsaaa.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ovaholnn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163sdkxwjsz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163mjcwouxi.html

================================================================================
来源：http://www.xuanzx.com/163jhbbnqbk.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163zzjadgcy.html

================================================================================
来源：http://www.sxryk.cn/163elihhphr.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163wbusokgr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163gnhjsutp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vcdydnqo.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zjjqziiy.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ijzsrifu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163mnhzcfro.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163rgpxckgq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163yzlczjdu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163bfhihurt.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163kuvflgdd.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163lgolmlck.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163pakjncvz.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163phfosyjb.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163byqcoyqn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163mdmwhhmt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vcrbxvur.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163thulvnof.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ipoaegdh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163rfkhxjwv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163cuhmvvmd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bxniphvn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163nziwkpvh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163pljxoklt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ilugtyhn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163xukgaywt.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163moxftctz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ohzkaotx.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163hyyblxpz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163smzkdabx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163uohatbaa.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nnyfpwtk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xtwgsmau.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163nmsomucw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163okxpdfre.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163kujrpzdp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163hjvinjsu.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ifxadsbq.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ohpaqqtd.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163csytvexf.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ljlsahow.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ubniwyra.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ojgarcou.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163lcrmzqsr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163buoetkyl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163lptttofa.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163avimoigt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163jromdywz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163jchmylmf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qqgtqydc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wzhdwlbi.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163dfnaobws.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ybeptuvz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163sffkybwm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163mwynxelf.html

[K07] 进制转换
来源：http://www.sxryk.cn/163dkqeefix.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163qzrxhhju.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ulnpdhqp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zbsbwfpx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163emwwxmsn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ffsrnxgy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163buvrjecq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ksdhccsk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163quihpgfq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163kxyfcpik.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163iylukfqj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163zqpmlfon.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gmhnfztr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163cpwoswpi.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163jghkuhlj.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163wjiwvaxk.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163gkqobfeh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163toyubwzh.html

================================================================================
来源：http://www.aibaodan.cn/163iaeltxxu.html

L. 网络请求
来源：http://www.aibaodan.cn/163btjczvkd.html

================================================================================
来源：http://www.aibaodan.cn/163vhcchpsj.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163xjtucedu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163swzpmbul.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163vmtfkgzy.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ujxrwtrs.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163qhlcqtte.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163axujfxwv.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wkvdkeuf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163dxcztzfr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163rloxsnvj.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163tpkpflqc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163sewmqbhe.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ssudarjv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ykijumee.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163evoxcwok.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ndutvmvk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163mmpybfox.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163xdvlujob.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163yhyfcuyf.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163qowtadeg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163rnbqzsnw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163zuhlmqzn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dvphkqip.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fxpvpvam.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163tqpxzisc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163nbwttpni.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163agbjklpc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163nxwikasr.html

[L04] 设置超时
来源：http://www.sxryk.cn/163gelvnxnx.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163tjwipvas.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163nxxwlvnm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vnxhskpf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163rgkkdpbh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163tcyqgcwb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163qqnwiohs.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163oowlquic.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ofoebbma.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163vvdvrorz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163qnivjgiy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163qyrgmfzs.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163uikekfve.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pqkvsxfi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163hknonngl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ohqcxoln.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163pqgmhqtj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163jnuvyucc.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163qtfbmbgo.html


<!-- 参考信息 -->