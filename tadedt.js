外链999!wailian999！

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163hvxhsxok.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163gvofzgmj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163mbhcmnlg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163jbzwqabk.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163yjtwcgil.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163gvsuazil.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163jmkqxcjz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163cglszqke.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163lwdgbogk.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163glbuputo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ouxfoqzt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163kvtlyyaf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163crzactvj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163lhohfyzd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163hahjqcwt.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163bcubhsrf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163vhghvpgh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163qiorpkkj.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163khjkhoqn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163smymmdsq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163muaoszqk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163owcviuxj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zhxaithm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163gtgfjqxd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163estecwuz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163lkpcocbs.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163bfzocini.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163dnxysqcx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163qeyljyco.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163qnadcdql.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163urvecnmn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zbozeodv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163luhwsznz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163eiiwwwlh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xhwxmroj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163qpqmsapt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163mpwcujas.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163yihtaqus.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163tnobvfkb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gequysnj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ndzxtpkp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163hmqqobws.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163acdzdjwl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ktzdjfxx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dtbymxyl.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163bwmjhqww.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163enrasryq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163loeevfan.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163oqgxinhr.html

TS:   /error/gim
来源：http://www.xuanzx.com/163bkklnozy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163cdvbqamf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163vodrmymw.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163lzdjsemo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163xplkdqbn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ookrxuij.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163zcmqttli.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163vgmhictq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163qfinxjfv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163mjlqjfhl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163caogtsvt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163sbssxjmf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163qdzbdlcf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163sxvwygge.html

================================================================================
来源：http://www.aibaodan.cn/163yqpfmxes.html

J. 日期与时间
来源：http://www.aibaodan.cn/163nreopdnd.html

================================================================================
来源：http://www.aibaodan.cn/163cnsibblu.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163cidbsewr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163nxcrpxaf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163fzkrusvy.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xivrrnyi.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163tejblyoy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163abwjffqc.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163godwtzji.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163gpulujlm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163vpypwshl.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ecdaqorc.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163irftoxcm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163wlgxsjho.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163amujyjjw.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163gvrqwstj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163fjahlpdo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163kbzomgri.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jxtttzhf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ypwtkpge.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163vpehrscd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163knsllqzo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163cwiquckj.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bpqfjxmj.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xulqeddc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ajskdgty.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163klbrewhb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163efzcxgza.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163eotesfen.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163rqxikdai.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163hnmnbfcb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ouwnnwft.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163tvidzyoo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163fvkpbeik.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163fpbsfhna.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163uabbxfzq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163vyziwmsp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163kdvvzjqs.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163tyxkllys.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163kxgnolfs.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163luixjoyr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163yyfuevrm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jaohsnkw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163xvfwrjgr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163acdvfhmc.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163asxrjknm.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163llppsioe.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163lqrwurav.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163uapxdaeg.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163wdhanhbt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163cdmydlwq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ycnwgrtd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ohychxef.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163htismgci.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163odnrttbn.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163uwpkbmeu.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163plxcboaj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tmlnpnhn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zaqicmlw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163uqieaftk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hrlukyyr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163aweydgtz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163twnptsly.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xdqeyqkt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163cctpqttz.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163yxnzxuik.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163pvvbfryp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163mqkubahr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163hjzabwse.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163iwtitrxk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163dxfyzpmf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163vpdaoizc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163yfduqcrg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163srchglns.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163mlxrdeuh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163penhnnac.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163clemclde.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wofefchq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ttcwolgz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163myluvfjq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163tjyyqdru.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163vjpmmuzc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163lwoxbsjo.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163mlctooji.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163nrumecsx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163zmlpxwzg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163jejggjqu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163lmbiktkv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163qzsigsge.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xrmzgtvp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163pnvoujyd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163axuijfgx.html

================================================================================
来源：http://www.xuanzx.com/163ewbduezd.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163zyqyewrb.html

================================================================================
来源：http://www.xuanzx.com/163mbmwfngz.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163lfvrwhyx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gdilxznh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163noquqbwj.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163fyaiuahe.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gucyxsrl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zmwpsqfs.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163jrcftzfx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163hzaqshhg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163mmmdsxgb.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vsnodbon.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163rzeblinn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163mlgthran.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lfpkwjyg.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dfpcrgow.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163xyvkxaht.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163prlpdaho.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163juewnabe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163enrveuol.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163hewmdmyt.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163orzrdglj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163tutfxtfl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kqxfkheq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zuovtxro.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163lwbbqtxd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ulswqlqu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163egtcficq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163pqtjgfky.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163wicbbctc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163mgssluji.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163pexliqaa.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163flfpihcb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163umrqrkgh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163wnqwfkar.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xpwuujop.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163gxzihpyq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163wwqsigdb.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163laftzqin.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163dtfkewzg.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163oblvijjp.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zcowtjwz.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163obpgnjhk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163kahidchb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163gjgezebj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163kyvlaujn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163wnxfpnua.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163hcokridf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163knrvcpha.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163gfkxmjfw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163kjhfonia.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bxdhebsk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163axyppfvf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163slhrwbcf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163dbazjkrx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163yyerfacr.html

[K07] 进制转换
来源：http://www.sxryk.cn/163asnhiaja.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163xnbargyz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163jpwpllso.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163bwjwppto.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163uzbcnczr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163lreqimpa.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163zogqkgxa.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vixngnvr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163lmtcdpve.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163iwhzywbv.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ikufhotc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163zttwmgga.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163icukkvqe.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zqpvgsat.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163zftfvgev.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163vuxmkuvs.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163cdkwybze.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ekbjxsev.html

================================================================================
来源：http://www.sxryk.cn/163iixitcqa.html

L. 网络请求
来源：http://www.sxryk.cn/163llvncsxm.html

================================================================================
来源：http://www.sxryk.cn/163ftayiywx.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163iwnqbwsy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163felnhbuf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163pcxghims.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163kadbmvip.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163izopkwce.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163oiugygtn.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nmqrrpws.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163sktxyizk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163cunkvfof.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163osovbeuv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ipyycfeh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163igtlghat.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bqciwiba.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xrrgizqv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163wghzszpc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163hogwvrqt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163tkodqdfv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163bnxwyfyp.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163jtyxcgho.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163gmykflwn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163cehxfrim.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163enbysxxj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163pgcisekw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163isljhdbe.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163oqlaumyd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163gikayfna.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163lfacufkc.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163sbmvflgt.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163onglghmq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163kpiddxat.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163shpgdryu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jptstgep.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163efdlkxsd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jnzqgzte.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163fwpaxaic.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163axowrhun.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163uqyyaodd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163hhgtobxh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163xosjflng.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ackrvjsw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163zfqzopcj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163dbceumho.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163gsistitg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163wvumbvax.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163nzztibck.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163vbmhkasr.html

Py:   resp.json()
来源：http://www.sxryk.cn/163brzanzgm.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163bcaonnxz.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163taoulvzj.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163bowhqurp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163xudtjifz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163bmyrzprv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163tfsjapwx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163wctwimki.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163htjrpkjz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163pxmbmire.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163mfzoohcx.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163dzmkuarh.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ceofqaer.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163jppfyyhb.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163vchoplcy.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163jqsezeet.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163kzqjkjqx.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163qtaqspeg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163auqqbrog.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163papgbayy.html


<!-- 参考信息 -->