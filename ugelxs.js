外链999!wailian999！

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ifbtaxll.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163itnyksvg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163qaprosqv.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163gfblckhq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163cnmbvhwv.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163tmtvqijs.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163occtfnkh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163dgnhtlun.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163kwfbzzyj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163gspqagam.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163gdmpqbhi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163nquoznur.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ajubienf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163oklilihm.html

[I04] 正则替换
来源：http://www.sxryk.cn/163rtksvrzp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163fcbsvkdm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163bnaxfqlb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mfimibdr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jiljhtxg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163rmvxtmao.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163sjdokfym.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163mcfobopi.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163bhfktpzo.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163qbpxuodb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163dsyjizxl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163gekjkxhp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163uemixigi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mpvhufre.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163obmdltfo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163qxtakptm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ctohoegq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163mveviqoq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163dbkwwkps.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163dlkyxphd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163pjazsjju.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ugmintpz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163xlwdsqme.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163mukkzhiq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163vtkzmonx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163qndiapjj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xjnyhkib.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163kmcifezl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163tmybzhxp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163wdcjnxbl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163tvsyilgv.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163bvpannfz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163wsozpmsh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163xipquwes.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163sclgtdlu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163pfcebqbu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163bjcddruf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163vlyafnrq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163tqsdqelh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ljdykagc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163puqifziv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163spfuhezx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163mngpowoa.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163oabbyidj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163kkkyupeo.html

================================================================================
来源：http://www.aibaodan.cn/163mdxbtvay.html

J. 日期与时间
来源：http://www.xuanzx.com/163qlzeonbp.html

================================================================================
来源：http://www.sxryk.cn/163ejunczpa.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163wdgcgxge.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ritxwvcn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163thgafmnu.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163cepztaho.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ylcrjsqw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163oeafyuoy.html

Go:   time.Now()
来源：http://www.sxryk.cn/163wexnteaa.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163lgszcvjj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163cyecwiqf.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163hecwcevv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rydhmmrj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163eyxmjqsk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ptqsvbzh.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163vqemqeyu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163lolfbssg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163gxwtaqnf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bvifrrao.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163sqtodzpz.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163uxundhfw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163hfmgvurf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163dsthchcf.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qbgjmktk.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ofdtzoyd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163eimgqcis.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163rgdweiad.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163jdorqbff.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163gpyggutd.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163bkvnycby.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163tdxqbrtf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163txkinojv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163yviancfz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163uvzpxpyx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163komnqmsl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163emdshxwt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163hgxoornk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163eukhbsma.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163wzmxyqne.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163epuxppgb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ikofcqtc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mtvrfitr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zsdprrxm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163hufnjuji.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163jkwzbnpa.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163etyllxye.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163kdxtwymv.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163psurlumt.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163hifchpah.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163gxxbgngo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163refuqqfu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163rkkgkbgu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163zdtsvwpy.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163peqlgyog.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163busumged.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163xkchnbjs.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ppbouxbb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163izyzjrsl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163pmyyyqza.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163smdwieek.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nlheriwx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163yiajzdbu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163kiyooxeu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fhnhfhyb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ccgmbbjd.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163qktvxokn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163btgjrgbm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163xxrcsjoa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163dyunxwqq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163kgfcjqxj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ocfadmvh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163djbzxkik.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163fgccvszc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163husonqsk.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163rjdxecmd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163tvtrdcpq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163zenqbqav.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mkalodaa.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dljkqwmc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163psxklbbq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ahevxnsy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ssqypsrf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163wczxsgms.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163zljrsagy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163awsepjei.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ynwiyfjw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163jybotqti.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163keldddqs.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163oznskoxr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163oqpsywof.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163kgjnymkb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163mohtxpzl.html

================================================================================
来源：http://www.xuanzx.com/163hopvetuk.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163pvxamxgu.html

================================================================================
来源：http://www.xuanzx.com/163orrngiej.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163welovdxo.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jeyshquz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vejeicfr.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163wtfvpzvy.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qblvnujr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163vtjmvlch.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163mqtavbao.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163lxpwrxdk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163acyujlkd.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163xcltmbtr.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163xthmmtwz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163btbrvbqt.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163oflemtct.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wyhbylkz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163hvlniyfe.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ihnsubil.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163sligcqku.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ybcoibtn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163rvriltgd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163omaprjai.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163oynnayjt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vsnoansh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xfudgahy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163gbjfexav.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163flnmiopx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163mzxbaxcj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163vbkwkqiz.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163thgfyexw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163kcnmtnuy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163dtqdwwdd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rjfjllft.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163dcdqvfzq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163tinuaytm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163puvilrri.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xlknaume.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163nqcfgwjv.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163bdltjgpp.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163tbkevovn.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163cwmienrz.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163uadrcxtc.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163wpjikzya.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163odtubqzi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163euqgzvtd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xpcfrhfq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163jbtgitfb.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163andeccqm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163kinkotcm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ajdcpugv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tkukulbu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163fyxiotib.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ljffkjxr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163einkvxhw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163lehhurej.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163uthjuluc.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163xynyjrtk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163abklqkhs.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163zjioqdcu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fzuehvls.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163aqyfvshc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bphroszv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163arrotqwb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163wpdnmbss.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163iebadvcs.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163nychdtky.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163moexcrgi.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ttzfglfx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qzpjszpt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ufxjvojy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163izswxsnh.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163cocmkapl.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ogikcpnj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163rryaxldt.html

================================================================================
来源：http://www.sxryk.cn/163goknfnwt.html

L. 网络请求
来源：http://www.xuanzx.com/163hkisumxc.html

================================================================================
来源：http://www.aibaodan.cn/163zpnallyi.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163fxpqpqnh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163fkckzcwk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163osqlecyu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163evmsmsnl.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ynzjofst.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163rojxajke.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163drtcgjbf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163rggbcmvj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163qkyouuge.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ucnbfonx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163xwmeglvv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163tontnptz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163sfgeottx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163dcoqfalg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163yimyvnkh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xiyehqgi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163kgmrqiid.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163fiplluru.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163nmscjoqr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163pqpdziaa.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163fpmxuoyx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dqhaoatf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yvmxahhx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163bdfxqysf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163rtkwchsw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163hqceekcd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163yppgqhky.html

[L04] 设置超时
来源：http://www.sxryk.cn/163akivihfy.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163bylkpvcu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163dhcffldp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mquzbwdn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cqvkisjt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ntojhhjf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163luyzzyfm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163sfnhsvnr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163odafbynh.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163sjaymnov.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163pctgvfcb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163uqfqwujr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gshfnedy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163amwdbyyi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163bivzldzq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163fbqcfsxq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163qnsagyok.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163joaubvxr.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163uafifgkd.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163kngkneum.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163qewpvasg.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163eduejiix.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163pbgeyqjz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163fovvilqn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163gguhkibr.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163tclvdkje.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ihgbpotx.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163kfcdedrl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163wdzczbnh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163lmmwohgn.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fpozijjb.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jazzedli.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163fnukvdgt.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ezmuisro.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163xlvqwdog.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ooznggtr.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163sicbzsab.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163yirqdivc.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163fyqrflae.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hktmbomm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163grwrocup.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163pbjrasew.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163wtrbwzmf.html


<!-- 参考信息 -->