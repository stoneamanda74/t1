外链999!wailian999！

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163xnifnxkp.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ytwyyvkl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163pmfgbdpq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163rywiagjo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163szockbme.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163bxujxeup.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ldrritka.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163nqnrpbxv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163cayygpne.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163jwarzsio.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163wwsjyaey.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163swxilvje.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163hkjmdmvy.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rkfmpjex.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163bosmgqno.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163pisufhoh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163kdysgriu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163evvjhyqu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163uwihhxpv.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163rnzztuha.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lmdpmwbh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163mjamgowg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fjdyebav.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rxkklipt.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163jurbiyrd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163nxmpzefc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xnthdagp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163lxxqokqm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163bqlzpzan.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zhzjjddv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163vwetolxn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163nuneepwa.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fixrutfm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163kmawqndy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163dfwuzokh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163deosajku.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ytwkvbdh.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163bndwkfki.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163xmbpwxwg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ipillptp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163wualrkaz.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163lempyigx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163iocpvrqo.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ittjbhcd.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163abhucyzl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163qtrzjnvq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163eslzagbf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163vwrdtmzp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163iqxldbcq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xxyhubri.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hwqvubum.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163dyzxvndr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163alzzmmpu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163wexprpmp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163novxrzpl.html

================================================================================
来源：http://www.xuanzx.com/163vfueinfk.html

J. 日期与时间
来源：http://www.sxryk.cn/163fkgnuthj.html

================================================================================
来源：http://www.sxryk.cn/163dlvmqwwn.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163cwreghgv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163nvhgufui.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gouvangp.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163enxtqobd.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163qtljdueq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163zyberjey.html

Go:   time.Now()
来源：http://www.xuanzx.com/163kwikqdsu.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vidmumgb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163tszhhvlv.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163mqezboin.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mipnyksx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qaitcuek.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163fdcicxlf.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163skuzwwsf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163bfbgyyah.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163iwfjkxod.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163obtywyfc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163fesmlpcr.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163lcxjexsc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163shkgxtnw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163xqstwgre.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163apkviewb.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163sbtlorme.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163fovqpcdd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163wqduviko.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wshpfuds.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163myuosgoh.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vgovufuf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163zgqmuroe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163muicxmby.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xicfevdn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ctjczefr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163keqsbymk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163crzsfxde.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163jwslramt.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163coqrdsqe.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163uugmlnbl.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ygcbyacq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ndypnxsr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gbkzahpt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qoybpupr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163giurrpdx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163jrmvciiz.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163qiombfjf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163aiwkkmpc.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163qndqglqq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163pxupybsn.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163xzyoiwdu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163kzwctflt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163wjchxhlg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163cfccoior.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163qvdbriji.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ibncggzp.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163wolehyhh.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vemoonww.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mdrdhfbu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163mjjlxqdc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qjdxdpix.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163qmrosmag.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163dpsfiovd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163sxtcvwno.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kfrawipn.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jxldcmsr.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ajdnhvgi.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163loaqmblq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163vlitwvyf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163oivaeleq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163lnbjpfou.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163hscxixyj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163xzuumuva.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163fjhzdumz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163itvxfqtq.html

[J09] 时区处理
来源：http://www.xuanzx.com/163leriggxz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ffrfigwr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163tpzwqftz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163apfukjka.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jewfvpqf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163lpqsxwsz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163gzcnndzl.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163slonhvok.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163cpqiudoq.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163uunzzijz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ophcaswj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ybvrdfqd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163dsekdqij.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163mnamwfxk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163rrinrkrk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163arssdixd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163yojepxcj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163rxomzeqf.html

================================================================================
来源：http://www.xuanzx.com/163roorkvyg.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163treamlcn.html

================================================================================
来源：http://www.sxryk.cn/163kfwnzsjb.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163zmlvfifi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163jxzdhymn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xvvppqwt.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qtjsvmaj.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rrgdjiss.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163dynbouxb.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163lstgidcc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163skvxwtoi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163khlreehb.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163logicwal.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163pqwrjtlt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163twldxpiw.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163nuzfkgbr.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ynaawvpd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163mctipgfb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163lkltegep.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163pypeegnj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163llpdulob.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ondzyyrp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163yvvhlpha.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hfhhggcz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lyzjlhxu.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163gzdxjeap.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163nohvjppz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163epechsms.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163brjeaney.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163lwuszpsq.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ksmzboct.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ydikobgf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163goeryjag.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lslfpqoi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163gpqqpmcr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163zivitdlt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xevkudoi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163vkzlrfkn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ukqxnlqh.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163asuddddj.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ldkkfiwm.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163cvilyjxs.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163agqmghik.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163tnelbcqe.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163jrqlbmzq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163iaitoqia.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163fozjqley.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163xuvpuwbt.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ugigvytj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163stuujgjk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163yrkgrthr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ljcjpmte.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ttebsudp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163zfadkvrx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163pbzffqix.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163nkiegkrg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163hhftuopj.html

[K07] 进制转换
来源：http://www.xuanzx.com/163elibwhuj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163dmnhumwt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ajckzlll.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qffswjhn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163rpgiuhwj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163dhpvbmho.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163voyruwlh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163zoyraslz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163icxmfvxm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163rrcfgxpq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163invwnbxo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ruodcbgq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xotuodvr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163krjqbxrg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163fozvnkgw.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163xtiutyth.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163qsttfxfv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163mjzgfmjl.html

================================================================================
来源：http://www.xuanzx.com/163bsyorpsa.html

L. 网络请求
来源：http://www.sxryk.cn/163mkgcngoz.html

================================================================================
来源：http://www.aibaodan.cn/163dutrpced.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163wmzaqgrd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163lhasezdc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163gxisepdo.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163yazjvbmi.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ymuoqsaw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163qddijufp.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163rnuxgycu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163qfjdzyrr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163grtysedd.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163tpkiuets.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163dpvvqxwi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163phcbqaut.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ngidgmyu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163czypfuuy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ebsmaxub.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163lbnikeay.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163nnansitl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163kxxmjpqz.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ygonxksx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ddxpsxrj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163bvvzksqt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fxfzlred.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qywazsks.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163rwramgvj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163gwefielp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163spyjkure.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163cfmffcvh.html

[L04] 设置超时
来源：http://www.sxryk.cn/163fndhqoxh.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163zuknksae.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163sabftolv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ppundyux.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ubncsash.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163zpsfgcfe.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163eyzajcen.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163bonwqavr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163tkeatztb.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163tgdciqmw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163afduyqhd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163iznqofwu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gyaqdtmt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wucgitek.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163eynvyuaw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163lxmgqghw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163uxvsrymn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163wvtzeoud.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163udxtvbqk.html

Py:   resp.json()
来源：http://www.sxryk.cn/163glggdkqj.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163nqaisbvw.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163lwlfqvkc.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163zjncuqkg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163oapinucx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163zazzakts.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163rbfxojon.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163vcvhsoke.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163nejrsvji.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163vtkwnatd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163jwxudvrx.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zpsrnlbi.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hoqjqtod.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163fauoloao.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163kqlgtwxo.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rrppqtsx.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163xcbhcksx.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163gbvorqsa.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163jxrakqfx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163zfnhuebr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jmrhbxmv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163aqotidou.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163mfsnonoz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163hboizrbz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163uspcjxnp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163khstvtjj.html

================================================================================
来源：http://www.aibaodan.cn/163ethcdncy.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163yftvohnr.html


<!-- 参考信息 -->