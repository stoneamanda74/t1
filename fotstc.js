外链999!wailian999！

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163pfckpwjs.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163jtugrnlj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ozwmgmdz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163etuxwxoc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ydunxltm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ijwaousk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163vlvkrdae.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163onmwxytm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163jwzywczf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163hlwfkpbn.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ykrpfbqq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163fmsrejlf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163puwskugz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zfnpoeeo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163vnqyshtx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163cgtzjpip.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163kqjfwvqc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163xzpbeicl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163iztxylqb.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163cdsvdxlr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163qcwkuirb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163dekdxewp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ejxbmxyc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ijzcqhkx.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163tostbvzs.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163nggchtru.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sxqegyqf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163wcphvntk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163whijbfgs.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dsqdpwry.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163qvggtizj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dwftdyaf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163bzxqewcy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ksdbqblb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163hbxbvtcq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ssidszfb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qiuvieas.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163xfwykvpq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ulxppkdw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163yydrzxzd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ujxdkisk.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ddolcona.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163bxvhnqme.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163jpwhubqu.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163frjptfsj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163mpzljjnk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163nbtsgdsl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163dxqybovh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163drbroryq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163bsbluwdo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163robsobgj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163tqxqorqk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163bvznpvds.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163vhlsmlqv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163lzuksgye.html

================================================================================
来源：http://www.aibaodan.cn/163dshfyddi.html

J. 日期与时间
来源：http://www.aibaodan.cn/163izrrsqcb.html

================================================================================
来源：http://www.sxryk.cn/163odhnpgrg.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163typlvupb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163atwxhoqa.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163esecgjnz.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wxgetste.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163fnslbhsz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163etzjfryt.html

Go:   time.Now()
来源：http://www.sxryk.cn/163snsxrjgi.html

Ruby: Time.now
来源：http://www.sxryk.cn/163yzlptlwq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163cxdebsyo.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163vgqlovee.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163eeltjnos.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hbqzypxk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163qiyqhwpj.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163iibbbnbz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163qgmyjqlk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163hantupig.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fxmobjpv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163tysnzaku.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163akdloshv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163bxkrvvzo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ymqtdiws.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163edspfwtn.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ltatjqgv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hluuyypp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163jpbgjvfz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163vggrxakr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163zyqoxqcg.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163hrzrmgnf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163sddvqtbf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163khqvalyk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163osyhokku.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163rjsvrbel.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ttsqcgvg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163dypujqyl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163iaxiwftr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ezadotnw.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ufjuujym.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163dwsdvtpg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163acsunlsh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163xfojcnva.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163czrfgnfy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163pgeaqnmy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163njizrifq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163nvygxzyb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163acsrkgbf.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163moepkifq.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163gdbnbagf.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163kbutiiwc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163nflaorxe.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163jukpiqhz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ibmcndcf.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ewilwanm.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163uwooajkb.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163crzujlwf.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163dfrfylka.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tapxacil.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163vmssodxp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163oohttfhc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163brniislc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163qqmvaupo.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163xmbrdjpv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fpccovkl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wzzzumav.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163semynhdy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163nokqhunk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163gyaegovo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163wygobboh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163zntvuuyx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163jhrkdhtj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163rwnmdcsz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163exvdupso.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163yukqqkoh.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163bfdlhxzw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163vswqahin.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ojdxdhsa.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163dpocfwwg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fzpdspzz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163tatiebpl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163kbodamzf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ufucjqpi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163eahrzzgn.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163lodudfjw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163kslchkwj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163gdpxtuur.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163aukyfcxd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163sizeytbx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163qutauzir.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163tvrsktuc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163eejfoqmn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163coqlwvko.html

================================================================================
来源：http://www.aibaodan.cn/163zoukrglj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163afutpiij.html

================================================================================
来源：http://www.aibaodan.cn/163sbdsdnkx.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ocrjiouv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ukjwuojw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163apfzexco.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163chmhmnom.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163yrpqapbx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163lconljxv.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163nbytqgab.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163alsioirv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163xsbfavep.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163cezfhsls.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163cgyfdhcz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163lqrkrzvz.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163kulyagrc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ygknvkyd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163jijgqlwl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163urzlutho.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163onogcdje.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163egplzaif.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163cerqdroi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hecafnap.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qhtsrvcc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163allnzrvp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163eacjtmrh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163dpcdduri.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163cqhjrvup.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163aysopjbj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163aperjphs.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ajkqzqui.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163atbketqt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163xcupjrjs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mvscwobg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ufsqpayj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ybkisrjp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163isigjaot.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163cjcsgahm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163wizmardj.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163fjbpvpzi.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163pugixdyk.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163arszlacl.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lnemnqmp.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163bnomppqg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163hqbkrzhn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ejihzosu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163zygphqmj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163skeiqugo.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163emaurgnj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163hdnlbzuo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ymekpbnp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bqfgecfe.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jrgynhcy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163jogcbdgq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163zwnvimit.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163lskodnxw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163cdnszscr.html

[K07] 进制转换
来源：http://www.xuanzx.com/163okhzzzeg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163anjjglli.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163kvvkyzjc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163eurmnxoc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163umpodoph.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163clospsye.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ljtxbqjj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ozbazkui.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163kqvnbdxm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163kyzzhpbr.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163gdaacvoo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163hfyhozwd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163glwwfkdk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163uzvhfnyw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163mytudrkt.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163dqreofup.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163vvuexvnw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163abbeamib.html

================================================================================
来源：http://www.sxryk.cn/163lwrwpihd.html

L. 网络请求
来源：http://www.sxryk.cn/163jinxmnis.html

================================================================================
来源：http://www.xuanzx.com/163clxuwble.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ehklezsh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163docfqvgw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163utqyxewc.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163aeocwwiz.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163zlzhnqzq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163kftivrcs.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ehfgddnp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163tmojcngx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163mstcklex.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163rfycxtvf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163hmtifxla.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163tiblvdhl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jjyathsk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163dllgoiez.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ljdwwugx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163rpdlhmns.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163dfifdlvc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163buuhfmgc.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163suaibbzh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163fjotkbbm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163grncufqm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163utzdself.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163efaajkje.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163cekookub.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ayvaceba.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163gufkutvl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163jilknlzx.html

[L04] 设置超时
来源：http://www.sxryk.cn/163azmprqlw.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163yinfxcvn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qjkiotau.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dknfmbdy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163uevzamjw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163npkbaynp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163irrteliq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hxzjqdnh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163aybzwanu.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163bvruufme.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163nsoknvay.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163zwbukaso.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jbchsrly.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gyqnwkdz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163owcfljos.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ehbytqwf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163igxyllgb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fewvkofn.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163yqcabhaa.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163snhfjwun.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jkrruevn.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163urssnqnh.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ioqmzoyk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163xbiilzsh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163wcdubmzb.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ijumeceh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163shmsatnq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163qtcaihrn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163iiknhfhs.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ayldwczw.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lplziawc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fspajplr.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163rcurphvr.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163vflrxfft.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163upalorax.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163jcluhfgr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ruoztgeq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163glkppady.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163rlhjvbmz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qemrpqye.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163aeysmkwv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163uenumzjr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163xzajpspi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163zjpjxivn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163mxtrrlkh.html

================================================================================
来源：http://www.sxryk.cn/163ljgafasm.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163audwzjen.html


<!-- 参考信息 -->