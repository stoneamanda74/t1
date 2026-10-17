外链999!wailian999！

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163dlrhqczs.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163psygoydp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163kcpovzzt.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163vqezqadw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163mhfsonmx.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ezklhbtp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163fpgbhfji.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163eyfsyqnv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ehpnxsjn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163jedttdqz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163xozqrakq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163cyauskry.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163spqzfuja.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163jfgdrrxv.html

[I04] 正则替换
来源：http://www.xuanzx.com/163pobkjehh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163lrojvikv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163rxkikokj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163bbeltpja.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163swhuvhcl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163xomizatj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163dncmbabo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163mxnsebtt.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163gannkytm.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163jbxoktvy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163oqfeieck.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163alfxjlpk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163chsholdq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hawnysmv.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163szygcqnr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163wgxvxftb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163efmzpgch.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163zmmmgwws.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163froqdvoq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163eipcrycp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163xcadscrq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163xdozhiws.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163jrpyguxy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163xbtiilfd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zndskyig.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163wcvotqcp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jxwxwshl.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163pqeuzxfq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163vfcpfeki.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163coydxxqs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ncaljirh.html

TS:   /error/gim
来源：http://www.sxryk.cn/163cxrrurlv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ttqoxkmb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163kfkrlilt.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163nhzvemic.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163catgxwqi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163mzlurjcy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163hfpsjuvn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163gykdzenb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163shefique.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nyqreqzf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163lchmgtde.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163uyancwrc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163gjbzjihr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163xiwdaazd.html

================================================================================
来源：http://www.sxryk.cn/163uqjsmnke.html

J. 日期与时间
来源：http://www.aibaodan.cn/163kvezgmwt.html

================================================================================
来源：http://www.aibaodan.cn/163mldolwib.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163apltzphl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163xowvddnh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hoirnigm.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163tcxmyvtk.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tamzdgka.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163vpcvlszo.html

Go:   time.Now()
来源：http://www.sxryk.cn/163xwszjalp.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vuzpfgli.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163vhjyqzpa.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163kybwzfyo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163irmktxqf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lpbhysff.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163akrgjfri.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163jnvnpekl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163sdfprljm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163toypbtto.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163eshjdpvc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163tfghqvds.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163wnllrmgk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163dcvhroqz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163mzsyjygs.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ffdfacgz.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ajvfhnau.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163dnogehhh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tdxdrtbx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pnerdcsa.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163sgtpdzjp.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163vgycubzr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163zwdfmbvo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163zoxbfgtf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163pkjzvteu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163cjtqcden.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163upoykcbo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xuwxemyb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163kridhfxk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163uvqlyizl.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163cuuartqq.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163zwudcaze.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163nmsirxtp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qkmtjdko.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163whjlxrqs.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163zzsajfka.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163qtbfwaoj.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163qikujxoq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163wwkvorrx.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ulwoyifh.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ibhnyusp.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ehafkgft.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163iivcctwq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163tqjtecfb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163eshvucxh.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163zpovgpfm.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ndlzrplv.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163jyehbmxs.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163bhmwgfit.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dihdypal.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163fhzcpdng.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163glcjnilr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hkaletji.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163atajenxf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163spazwhzi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lggslonp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163njgmzhav.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tmqcbfjx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163juaapfxy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163slzjhmwt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163yhztcxgp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163htwmafku.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163wbztxnyw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163zfdgbhht.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163uvvcstvr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163aymazmiu.html

[J09] 时区处理
来源：http://www.xuanzx.com/163yhmvtckt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163hlyipqbk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163cdzzjbhj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163avrclqph.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lgyzjnvl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163grfudscf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163zuiaxade.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163urgrdggy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163uzgrcvdy.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163teuzgfsc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163cvpcqxpw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163iygbukqs.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163uovvfvqq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163rhmqhcqx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163bmavpcxg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163mvjpdfqv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163txgykkzo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163obcyclxd.html

================================================================================
来源：http://www.aibaodan.cn/163kilomzym.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163uiaowlkg.html

================================================================================
来源：http://www.aibaodan.cn/163mkxdcboj.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163sgbpcciy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ywcnlgqg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163twugsecj.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dsjoayiw.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ajotjckm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163yzovflpp.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ffspxihr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163qetoxxxb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163wyyvvabd.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ijmakusx.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163nmxdsswi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163laihcapw.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mzlamzfx.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163iutgmtgf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163cujqgzdl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163lwppzfrz.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163jhyenmdv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ughrepsf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163xbmcexau.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163gwfmbhoy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zfembxrk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ycftogoj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163iatlnhgn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163cnhiudck.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163tbbspqtk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163towppgyx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163xcaymgdk.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163foaxjjsh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163vxbhqjft.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163nawlrgzh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jtciptnm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163puznmjly.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163elhzvfsm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163snkokofl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163kzkexnab.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163vkrpuhlk.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163usqxknrs.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163scvtankm.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163vsvbgbbz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rnnnqzre.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163yvjnjxvd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163xflvzykd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163vhgflrxt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163jtxhjuvt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163rxxrqlhw.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163rvsvgdrf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163wleepdsi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163kulcfzjr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yowoqzea.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nqwbnnst.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163cbhvclkm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163rilypdpf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163cejifidg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163rxzqsldy.html

[K07] 进制转换
来源：http://www.xuanzx.com/163mkqoowhd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163hynlxtgp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163pphlutxo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163avfzdpca.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fceiqidy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zwjfkpbj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ptriwwlp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163gldfjkqv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163kpbydwzs.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163fkmcjpvi.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163xraxptxt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163cwcbstpy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163shkfcxlj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wzyoqqiq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163doffotpi.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163peknuaro.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163qbirpoiz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163gfwjfhae.html

================================================================================
来源：http://www.sxryk.cn/163cwhzamhx.html

L. 网络请求
来源：http://www.xuanzx.com/163nmrgabdj.html

================================================================================
来源：http://www.aibaodan.cn/163zonhrfhi.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163jgrcfboa.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ovtztsrv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163mtgdpurz.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163bohbrazi.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163wxsfofuk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163omulmyzf.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163cmfrnfcf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163wqwbwnxo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xxlpdekf.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163qbpvpmzu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163qlsrbdpo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163wgklnfyy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163tmqqjvrc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gbnsgflu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163yovzdyox.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163blsbfjkh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163cecazyvb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163lsteatof.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163kyqevycu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163yihurlyr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163vpuxweby.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rhkqdknq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163xqwreelt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163rdnzzefx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163cwtfeqsw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ufdsrhsw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163grmfbild.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ipqmfrwn.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163hzxotjrq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163cifuqqso.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163xezopdgn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zrbxamxe.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163twiltwws.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163hrocdeaw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163tlinawjh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163waebthah.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163qtvvyial.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163tschivgv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163bvkkyaad.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163yloyzneb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163pmrzlxhm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163cdfxidpp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163dsrztpty.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163smmvbwpa.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163wbhievnv.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163rpggjivz.html

Py:   resp.json()
来源：http://www.sxryk.cn/163hwwdayfq.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163bjofxrdk.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163xeonuzdh.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163mjzfakic.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163konpqwun.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163lclqussz.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163agrfhwin.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163cwhlwvbp.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163wujcxoed.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163lziiprjb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163xbrzulsb.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163schwongd.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163tiwjkssb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163sgdumbew.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163shssaldt.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163pzgtszym.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163joygvexw.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163jlnqfxpq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163hncshhal.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163phcljqqt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163svqiyivv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gpbbmrpr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163hsstyqdo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163njahyixv.html


<!-- 参考信息 -->