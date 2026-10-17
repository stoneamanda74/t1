外链999!wailian999！

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163dsiloacq.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163nggciplo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163uhajuiei.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163fhjfitvn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163tzprfqcg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163mhfisvjm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ftceoaag.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163afwxnrti.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163kyyemosd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163vfyxruaj.html

[I04] 正则替换
来源：http://www.sxryk.cn/163yurxoslq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163deetynkg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zshmcogs.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ggwxwkgd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ksundqrr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163evyqjxki.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163cyehnjpc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163mgqlyijh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163zqhblgjq.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xosmvtpr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ugoqgrte.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163rpqjnjzq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ycqjxcjd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zgzqonai.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163zyfudoog.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163gaqogabp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163egbetbdn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163cfmbcfrq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163bsowkqrb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163nsgcmtcs.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163rcgdyslu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163uptcgyrr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163himdkkjj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163cnymfykk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163hilpxqfh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163yzwoyvgz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163alyjtwcn.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ksbqlrin.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ckuoawmr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163xixutxxm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163virmuxyf.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163kxcvifyz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163bijsvdnn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163hbvtwzot.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163sndtpaxq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163pcvixheb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163zbjitwkm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163vbuqmocw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163wgyhhcte.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pzwzbaac.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163denatyoh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163dzuebypt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163rgkhsjxr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163bbtfzdlz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163xdhvgeor.html

================================================================================
来源：http://www.aibaodan.cn/163iwsqlzbl.html

J. 日期与时间
来源：http://www.sxryk.cn/163wczjfvcg.html

================================================================================
来源：http://www.xuanzx.com/163hovrohkn.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163hpjybzao.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163phuditqh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tqimdsgj.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163woxgmaqn.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vvecvcdd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163otwjyimn.html

Go:   time.Now()
来源：http://www.xuanzx.com/163kprzgwyv.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vicntcif.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163dxjxpduc.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163nuvtinbt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163opinizvc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gbjsxuxd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163mnzwvcjb.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163rvlttdli.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163dxrkinpu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163clpqmpfh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pasivpvc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163zlnfsalz.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163nioemobl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163wzqveoii.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163mhrmgyyv.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163jwrhhgdl.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pkrybrxz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163qlxomfgv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163jkpgvbqt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163xqosteai.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163wvzgczll.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163dndbfnrx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163xewvtjim.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163aqamkpsk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163wvtckonw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163uxofcsgz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163bnjimyum.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163lxkgdnea.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163hxkuyicj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163nqkneigr.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163eagusmpi.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ibuadwyr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163rmtuffhp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rhfyulrd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qinhbrdt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163zldxnzgl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163llewspjb.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163vezfmunz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163gickqigy.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163qdzqaapy.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163wksjwhom.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163xiotdykh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163kvumedyj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163abifqshz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163hwpocjdk.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163xbylcjuo.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163afubboye.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163eiacjfbp.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163gremhwqk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xpixcnyv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163fgioegmf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163crdhqshj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163fzugzajg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163gykkruat.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ihowxbnb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yrvbdhae.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163miqrazzc.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163zevoatuh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163gonpaelu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ennsehzp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163mxzyggzu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163eplosniq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ksqeyyeh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163lyzilsdi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163dkjuccwg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163yyqaulyd.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163thuetqim.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163lspozmjz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163bfrjnlcl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qjfzthhh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ppvibaem.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163hctcqmhv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163lqcaftno.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163unyfedcm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163jasiclgp.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163sssachux.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163sdwjksnj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163cnnfmnuw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163pfmrvsek.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163rscdtdok.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163gwdwbuwj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163njsynrle.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163rleqbagu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163tzegzjmr.html

================================================================================
来源：http://www.aibaodan.cn/163andjjhiv.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163zoobndpy.html

================================================================================
来源：http://www.aibaodan.cn/163lthnqwjb.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163wzrzimrd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163xxvsspvy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163fuhadtzj.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mmdwvwdd.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163elvrqhxy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163mxbwfrjz.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163mbpglgkd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163szusfnef.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163sorhzjrr.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163urhokmye.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163bdyleawz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163hwanuscb.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163awukoegm.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zojxuvss.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163rrmcvpcp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wckcusuo.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xelfcwrw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163uiwdqqzr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163imdkuegu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ejhvbbkc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163odoxjdur.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163snegflwa.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ruebwywc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163wnxabcqw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ekifwtrp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163yqrypwuc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163oonzdfev.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163usvjbryg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163rrizqyje.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ldyfzdpr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wfhgqaam.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nxbyeatq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163timxyugp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163scneavvx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163qrqujlfe.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ezswxtvv.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163zyhssdju.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163yxizlyvd.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163qimsfqic.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163abtpljbp.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163amebvhah.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163mnletmam.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163bgfuvzpd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163zivsfuai.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163gkaisgbs.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163kmmlblei.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163drbezqqo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ouvascsx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163omamivtz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ihnztgjq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163yecjbqad.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163kscoerpx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163xspfgdxq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163offnpoxh.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163qzqpzbbo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163uadaygat.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163hmozoixi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xyypjzyh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163oaovajyz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163yggvqyol.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163stfoleew.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163femvezmk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163pwclbqnz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163wcywissb.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ayinenhk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163xigrkgco.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163eloycksc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wgtaeetd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163fimtwavw.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163bztfxvwf.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tenrlkwe.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163qpjxizyc.html

================================================================================
来源：http://www.aibaodan.cn/163hgfwfwkv.html

L. 网络请求
来源：http://www.aibaodan.cn/163dohififd.html

================================================================================
来源：http://www.xuanzx.com/163gvsroyje.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163xqlesznr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163atvxaueq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163uhnfyfih.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163yhjextxi.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163rnmcpada.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163evasdptl.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163lkdylwbb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163pvsnnoiv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163hldgglhu.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163tkgbiogu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163nowluhxs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163bzgdqqiy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qdgzphwu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163gnrdlvhl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163xsdpwozg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163gjanbbex.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163axhbqtrf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163mzeuftmt.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163lybymcjo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163tmikrsbn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163bhmagyxo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bojchkse.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163osifyrfk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163zqiwmstg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163xgvfslan.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163qncsawev.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ysdjhldq.html

[L04] 设置超时
来源：http://www.sxryk.cn/163syixloyq.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ugqsexbd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163szesgypt.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163garadqnb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163yugfoxxw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163gzpgmoic.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163apthaong.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ubbhkvnj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163sqvafovz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163lovcfgnh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163xxsadsgh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163loduvpfc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163cyjpaonu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zzihyqpf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163hbasxdjm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163cgcbddka.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163vsnxiwsu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163kxflnodf.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163efmtqjqh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ixxkhole.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163tjitmvgl.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163dtxzkpdn.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163hpwfrbvg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163tegcyvhv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163zxbbbrzk.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163lwswcgea.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163aaelmmgt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ezhmcbxd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163jalpyqzf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163nbyzztqy.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163aiuryuqw.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163pxrazpjc.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163qrcpkcns.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163owazwepn.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163hvtithks.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163idcnurat.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163aojkzqcm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163mlbdrgcx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163shokpmbk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163cexywsfd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kexdkahy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163efvxmobn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163knkjnrjd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163mihmcvmp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163jzobiahk.html

================================================================================
来源：http://www.sxryk.cn/163ouxhslwg.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163lfsstlwv.html


<!-- 参考信息 -->