外链999!wailian999！

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163nlsggkzp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163uktvxpil.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163bmdiphhj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163aylidjoh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ksvrccxo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163wlttunem.html

[I04] 正则替换
来源：http://www.xuanzx.com/163edhqercs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163egttkxtu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qolcbsan.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jojmrdgg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163iuytwbxy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163watlrbcw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163hxipfpzk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ztazuznr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163tpalcnrt.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163litnehiq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163pssrswcw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163krdyxeqz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ocojaaij.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dckoxsin.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163zhygbzbo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163zuprecvc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nbvbpbsz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ebulkjyb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163vthewlnd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zdbbtrno.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163qsqlweec.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zgxukoxf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163nrbwxrap.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ktvabhvj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163eiurkqzv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163pumdamtl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kdddtppo.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163nnznysum.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bcwcjpvv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ajykodml.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163drpqcdwc.html

TS:   /error/gim
来源：http://www.sxryk.cn/163gfzolmgq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163qogbbnnf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163echfgroh.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ukyaifvr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163qvuspbrr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163verhjemr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163szmnhoiq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163vzpfzrrh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163cltbtayj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163djhboosw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ponnsowp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wujepfxr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163loskzqsp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163sphohidk.html

================================================================================
来源：http://www.sxryk.cn/163naiutvvd.html

J. 日期与时间
来源：http://www.aibaodan.cn/163haskrrwt.html

================================================================================
来源：http://www.xuanzx.com/163jdtgtfuz.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163qmslifow.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163xmgacuoz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163llnijeho.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kdnrdjec.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163pvnnxabk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163zzjpjvod.html

Go:   time.Now()
来源：http://www.xuanzx.com/163drclbcol.html

Ruby: Time.now
来源：http://www.xuanzx.com/163qnspwszv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163msfvmuue.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163bdsozouz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163sijtdgaq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163phbdaajq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ajaecvzx.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ryhdahaq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163aamkplqm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163zlqwzjkv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pmnmmolh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163qgydwtwk.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ywrfzzae.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163iqixzbfm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ikojwnxl.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wwrtkpcu.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163lcjsbaid.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163pyznpizw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163jrybhbpr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163xqemojbq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163hikyaxjx.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163hyuofmxb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163hoyuonrs.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163owpblllv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163tkorpcdv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163oocucbqp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163cdbljjol.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vhhbyrry.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ynvsjveh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163urhkdpog.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163bcppmesu.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ktpuuqew.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163obipgegl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nohafmwm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163idmsqdjx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163yrwnawwq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ckroersm.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163kclndrkc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ubjhzruq.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ycukkeys.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ofgdjplp.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163zhearfmz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163fipigbrb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163tazhwkfn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163esvuldsm.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163jeazrzkn.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163sbefwvtp.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kdnhprjw.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163iqjjpqeb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xmuchcpg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163gugormrh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163klasanhd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163swnazpkm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163oqyshyci.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163utteqmyr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dongrsif.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163misdcxqd.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163azopxgaz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163xgjhdzwl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163jzaecfoq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163kebfsepp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ssfjynyv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163qgggmdxe.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163xmodcsez.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163kvrwftsf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163gvmqyzsp.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ztjimuww.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163mcgumunw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163mfsskoio.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163cxykovnp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qdlzuizg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163zntsenct.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163fmewrurt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163hbzhyypt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163bptsttcj.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163zmzjrmsv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163colqswzt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163qskblbjj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163nfvxwpkg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163tyjzrafp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163zsrnicyy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163pouqliqg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163nujkxcdl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163amauqckq.html

================================================================================
来源：http://www.xuanzx.com/163wlzaypqn.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163yfgwbqjj.html

================================================================================
来源：http://www.aibaodan.cn/163wytewlyc.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163lpqbepyp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163leicvdek.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163svvvkton.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163njxhfwkl.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163kgtagysm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163wxuzzipc.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ewjvuxhn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163opyarslf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wgkkckqn.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ycfhbzjv.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163pdkpljdl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163igzmrbpt.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163smkitfml.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163baxjirxq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163uxkjfcip.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nuqzmgdj.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163iqnwvome.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163jdavokwy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163vincumez.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163uwucxseq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163arqyrtpy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163awmdqcyd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zemyjczf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163xdhhfnsb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163wautqptw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163vkvnvilm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163rcxtuool.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163iwwgfrnh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163vfsynyue.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163quznbnvm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163eoqrdbvc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163yrwzpbpm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163bdevvdnr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163badikajh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163zummyuzb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ysqpjsqm.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163oscqqxcp.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163tqlrzdcw.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163reuztlqv.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vuwzpnda.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mkvqcahg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ctuczzgv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163tzbqmiue.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163twfaoyvk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163xscydvmk.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ycpibnkx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163gowauzoh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163tqczwtrk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tmkxpjgj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dxymixsh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163zzqecgmo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163eclbvrdk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163oebmbdom.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163iehuqerh.html

[K07] 进制转换
来源：http://www.sxryk.cn/163cuwkfvyr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163jztajbqf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163knqwotzz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gzwpebcq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fvocmgai.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163fbgjcnyl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ntziptie.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ejonwjnk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163tasvzuyo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163weeyfkua.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163yjcrucdg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163xhrmmnpd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zcvtyxdr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ffsokncd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163seiwolfa.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163mhjqdnhw.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wdxleomk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163rtslllro.html

================================================================================
来源：http://www.sxryk.cn/163yfioxarw.html

L. 网络请求
来源：http://www.xuanzx.com/163njqjdqhf.html

================================================================================
来源：http://www.aibaodan.cn/163eramgoye.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163dkarccmz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163krevatue.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163payubnmu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163cajdihjz.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163fgsbobjg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163xebwfzhv.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163qdiyjnom.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163bcwskxcj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163wvtvrzwp.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163lbmbialh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163btndmejt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163qufmzcpw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163easmwiug.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jwtutzul.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163alguftmk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ypkwdapq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163lbiwyxoe.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163hjhetlye.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163sdvsywdc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163oygrebkx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163kkmojvtn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163gixjupqd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wtcrxfvs.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163wayxocjp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163njnshxzm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163mwlxadsl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163cupycyau.html

[L04] 设置超时
来源：http://www.xuanzx.com/163kulmjauu.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wtgllfto.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163bacxqete.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dqswhemj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mtfytcod.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163sjnxpegx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163rnrmcaau.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ofqpmrjw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163rmrudxea.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163xqnvpzlu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ctxambwm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163dwcurumt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163vebtiaii.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163tdhupvyg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ykmecsyk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163okbqbkyq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163gmovhghl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163zljbogsn.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163xdirbqfx.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163wwfvhfqx.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163cbxtdddx.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ukohwizn.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163dhqphdbq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163bceesvzd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163kdfmeals.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ppeilyzc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163xjgfwcke.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163tbueekfg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163wjmkhcpt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163vvwnffqq.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163qkiohjqo.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163uhokkyfw.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163mhiefney.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163tscykjtm.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163uegvpgah.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163zljgyolr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163aggslvbe.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163jjgimiwj.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163mczmxdjt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fjrxxqbr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ywqbrmvq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ykdzvzbv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163xslgxumv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163agjfswoy.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163pvvhwoqa.html

================================================================================
来源：http://www.aibaodan.cn/163rjonstvf.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163hgridsvi.html

================================================================================
来源：http://www.xuanzx.com/163szxnpdcj.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163dkuyapnw.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ssneohba.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mvbxuooq.html


<!-- 参考信息 -->