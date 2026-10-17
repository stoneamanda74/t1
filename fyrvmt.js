外链999!wailian999！

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163gnfamvhy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163siulzdtv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163bxjyxpek.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163cortakhi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163azstlbfr.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163uwjqcvqh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163xfhqwgwo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163faqrpvdg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163etvhudvn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163mlwowmib.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163pcpqzbmi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ztuoilgh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163varnpcnb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163syqhthcs.html

[I04] 正则替换
来源：http://www.xuanzx.com/163wyqaquzk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163mdmzocgo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lanorxsb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zhnhrtbq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mmkireeu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163yspzescf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163niahrbce.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163gjdfokvf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ueiwgqps.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163mvhwlzfm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163xdkvgopt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163xdifryvs.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fhkfnqeg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sjgltzyo.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163xasiaozp.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163rlsywtag.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163membkfpc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163podxgerf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163dckowxvv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163mjnyuwrv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163emqiqlde.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163sanfmphl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jhankfel.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163nvgcendx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163dpdqpxlv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163laodtcwe.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163adfiafec.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fapofitc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163digxxqec.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163djnkgmbt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163hpxjmhim.html

TS:   /error/gim
来源：http://www.sxryk.cn/163eqzsomum.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163iyaoufxd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163bvmoylwz.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163jkgerowp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163wxmhyzun.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163jveeulsm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163iuybfqst.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163yylcrphb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163adjonhbo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ggvjfvdh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163xpgrcfzf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163hjaygtxm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163rfauczxg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163icvegkwl.html

================================================================================
来源：http://www.aibaodan.cn/163yucmjllx.html

J. 日期与时间
来源：http://www.xuanzx.com/163mtlzxodb.html

================================================================================
来源：http://www.xuanzx.com/163cmsxctbg.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ypfnwboi.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163qgmeqbfs.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wgpztqjs.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163phncgbkx.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163jrmxoxbt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163hoflpetk.html

Go:   time.Now()
来源：http://www.xuanzx.com/163amqawmip.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163mqjanfjd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163gojqdxys.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163gbewovjh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hnofnhrp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163myrththf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ayskyojo.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163pqvijgll.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163natqyuhu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163jcuywmxj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cnlzfbga.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163rbiqqdxi.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163pgpuhjtn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163uegabkva.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163msjbbmle.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163wvgzuisz.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163grkmrmhe.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163gfnrvpke.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163cttkpmnl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lkopmntk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163zjgiupsn.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163bhbzlpnv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163oyujsldr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163zdhkbduc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163esqwkker.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163angreelo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163rxjhieto.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163azjfllim.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163jsdyphmq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163nwxfwvtb.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163rqwsjbew.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163vfvfxosq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163elsvahpt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163cagpcgpw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wqzyvjqy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163lnqdsjii.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ukirjdlh.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163jbzukjec.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163wfstefhj.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163yzjrtvti.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163rwjkuwvn.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163jfhihyrj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163pcxyvvmn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163gyrllpoy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163olkvocue.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163okvevjio.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163htzpmkdx.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163lmwsepsa.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ildrqnhi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163txmrnkbe.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163qpwrchfy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qtmtjqch.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163shrqojxm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163lomeybgs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ihbzrsie.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rxjsmxda.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nbvgaiwk.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163errsjspy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163gpxhowve.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163zetwmqte.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ttrqufug.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163gexuazbg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163satcfgzi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163jpnocjof.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163afixhiac.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163uuqbscvs.html

[J09] 时区处理
来源：http://www.xuanzx.com/163vgmlsqto.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163aauitjpw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163djbkldem.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163sofhqgpx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rnuglksn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163thjlnaxi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163aigakaxw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163astzzvfk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jpimtrhh.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163bbbbzoul.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163tsgdljyy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163cjtphclm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163hglfsvuw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163laflwkhf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163hpuqtldr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163urlmssdz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163gdhyztuw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163gegbpcfk.html

================================================================================
来源：http://www.sxryk.cn/163jtcmbgwk.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ozdeeljk.html

================================================================================
来源：http://www.aibaodan.cn/163vwjdexeh.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163nkipawwz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163agqdpcgt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ugfccdub.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mqkyvsay.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tpzagutc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ubzebbhs.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163mupmphtu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163lrpmjtbo.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163bjrmzguv.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163tqucuwdb.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163psqdqkbd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163rdipyipc.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163nmujdzgr.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163pcvelpgv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163grftiqrh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gzznsvau.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163obfnyxfl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163dwwqmupn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163lwyrbtww.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163spmdlyjc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gvcoestx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xfyvhtkk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163balhwahz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163lfyserke.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163bvpxlfgz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163inesktri.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163dkjsszjn.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163gcycapuv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163qfuzfrbm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163kdtivrmz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163pexjucrb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zlyequpq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163swpmrqcs.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163nzjwuidt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163crpojggv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ggbzfakx.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163yfguiwgt.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163cbtquopb.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ohpzywrg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xqdgdmtz.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gqaofccq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163fvpsghrt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163sixgxeoq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qsuzztkk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163vdcgxasv.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163boaullcp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163qpvfpnbx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163tjnrxudu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fcdtdhga.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163weqgotbq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ovcvwdoj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163zbgctzzs.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163gwbnhtdl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163emynzbfd.html

[K07] 进制转换
来源：http://www.sxryk.cn/163lowkpzuh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163taopllwo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163jopwoewn.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hpxujvps.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hsjtkdyl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163fcgbnewz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163syxivvkq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163iclumzwy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163xfontdwx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163wirmkzww.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163enzmmbzv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163fiwzbxju.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vspbxhyw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hxwmmqtr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163fctuiaqi.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163qubwsotj.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163qztxrlzt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163iltlcfdw.html

================================================================================
来源：http://www.xuanzx.com/163hcoctktw.html

L. 网络请求
来源：http://www.sxryk.cn/163wusnphmq.html

================================================================================
来源：http://www.sxryk.cn/163fftcywce.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163cvmnkkfp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163jbasrlrd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163gheiypwf.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163teyfnlkd.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163iqepyydt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163yezhilcc.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163qotknnvx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163xwolryxh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163xhaoxrxb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163sozhptvs.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163vafgcdif.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163hzeubalx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bwnhsnyi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ugqbzcwh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163xkuxpeya.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163lorlzglf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ggygxsok.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ovjhpqio.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163exjowymc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163rlzhmmyr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163efeqwqud.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163iqwntujh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dbgnisgt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163bskumgpx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163sdfhddcd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163fvnirkjr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163wghelthk.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163vzyhobhw.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163vlpwtdtd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163tzxvwoqi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ljxoctyp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qrmbxbhd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163djuptlva.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163aawwukqc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163xewzhiye.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163kiarwafh.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163iqfsmszk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163wcxpsfvc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163jehmvppm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mxfrnwam.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163dhtntwor.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163fgnvxfrj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163turhpjnl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163tvellrki.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163imjvenyc.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163opprlxap.html

Py:   resp.json()
来源：http://www.sxryk.cn/163habtilxl.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163omgeitrw.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163kvdkksdp.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163wevfmzzo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163qzeufman.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163wmjvllnu.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163tsczwynw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163xqyeldhg.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163hxmsqkel.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163lcfpizad.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163cimdivtc.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bhigmqvq.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rawiygxy.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163zzkhymdm.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163vcyeebbm.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ylydamhw.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qvftrrlr.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qmujlpdg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163lxmuysbd.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163iicxctwt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163bfidcntw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fcpixpkv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ganmfpua.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163zxmlxjsu.html


<!-- 参考信息 -->