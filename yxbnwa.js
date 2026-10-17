外链999!wailian999！

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163wqgwjbxm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163mvxglsgw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163cqkjrlxe.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ptujimqr.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163xpzedypp.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163tyghwjfi.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163tnkaenvq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ozwexdil.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163kcusqchm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163pttflzrv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163rquzgwjz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163alfrvuqc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163qcdwphhk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163gnoxyppv.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163mpiepdkp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163encnqwbz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163uzhzraqv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163eggbtjnx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163uwwchdjc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163okcnotou.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163okqbxgwb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163qyxplnou.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163xymsyumx.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163gkwmqqyi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163zvydrcty.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163pkmjjvea.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xddkqktb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xycbcdmf.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163tkdbfjnr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ehcvdyzw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lbobvubg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163cfznbioe.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163phvutejy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ianfcdjb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163wkbeivvl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qhxfvqul.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mpmexaeq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163fybyjfwl.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163amxmlekn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xlyejrvt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163moharpci.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163rntwxtap.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163vzfgrgwg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163dsvzfxsp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163jipadoda.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ajlmmgsk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163usvzguty.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163nhihsrar.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163wvwpunwq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163hqioyanq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163wszkztgo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163lrqgxbka.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ufuhmoam.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163dhrmhlmw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163mcclnwkk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163sravllnq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163sxwbbixr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163yykybwdh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163sfbuksmi.html

================================================================================
来源：http://www.sxryk.cn/163bcxoopus.html

J. 日期与时间
来源：http://www.sxryk.cn/163nuwbxgze.html

================================================================================
来源：http://www.xuanzx.com/163tzksiaxd.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163nzplhjle.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163gbndmozq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163johozouk.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163cuefazwp.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163tlkaqcid.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163qlnnyjyo.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163thxnakqc.html

Ruby: Time.now
来源：http://www.sxryk.cn/163gyjqvbtu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163sxwebjke.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ceqvxsuz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163azwpmsqi.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gkbxuwpv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ytxecqyt.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ueaufhyz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163vnpykutj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163zhvujfyj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hjgswkib.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ysfwnxpj.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163onxgreyw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163imjwkpag.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163qxhtbozi.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xxihtnpj.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163adxiohkj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163tnbgqtwr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163rmimuwow.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xifeittj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163izcryovi.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163sbkfggca.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163xaojremt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163hphnkwll.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163pptbjlcd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163cknxmepu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163cubqozsz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ghjoijjj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163mwoyntts.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163djabfewq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163juzyegan.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163narspymm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163smfnoyfs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qsmtotls.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lwjjcwvd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163onkquruf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163rafjyxap.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163mcnvhypj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163dfpsklrt.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163cecicyaj.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163qqnrwzfb.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163wntjbhlu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163cwtluycb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163xcvlkmod.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163grxtqeej.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163mhvykopf.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163mhaxqquo.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163fndydidp.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163oweioerx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zcjrdoqi.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163vioriluu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163exoxpter.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ynaprbww.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163kalqpqaw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163raqbzumv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zprdsjxh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jqjlydhk.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163twvqeyhi.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163dmawesch.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163cgfqbewy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163dnjgabeu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163jcpwjhrz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163lweqsdhl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163hjtfpwww.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163wczslyqw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163twuvwxvm.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163jyohdtiw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163jflknqpk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163uxmtniof.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zraadrjz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163fajrfeff.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163tfctbqrx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163aickjvmp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163svvquxwd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ypbhkrjf.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163tudrdhqz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163bfsmlrkd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163warizjrz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ewlgtxxh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163edkegaws.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163kkuyqjnx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163drxqjbvs.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163slgpatod.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163jgnvrrgb.html

================================================================================
来源：http://www.xuanzx.com/163ftspygjc.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163nogbghmv.html

================================================================================
来源：http://www.xuanzx.com/163lzgztfas.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163rhsigswz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ncklnjtp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163yvfisflf.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qzejzmbc.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163clvmtzla.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163hvhsgnxw.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163nsjvpkvi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163qgdepnny.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163vprekhjm.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163qxpvsqoq.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163khczsyig.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163zbeeprzd.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163psgfmmch.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dinclqvr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163rypmupkw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qrnfthci.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163jrvyoihh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ajxxppxh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163owtxmovw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163cbtloimm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zwdklppl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hoihwubz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ujrkryvb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163klikbawv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163blcmdjdc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163dihrabwf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ffeyqsii.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163nvzbizxc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163itpjdydd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163glaekpfd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163voykedhx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163afkwthqs.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ylnitcyd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163eaixdmdu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163baezwyom.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163aabedvsq.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163xblqtohc.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163biojkasl.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163bvsuplmx.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163uixyboev.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163epeicgyh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ptfdktaq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163xjkkwwfz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163htytbxhr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163pkadcakb.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163agclfdji.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163irhzbjsr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163avegzouj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kxkytzjq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163moumwakb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163hksdgfii.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163mquhlzag.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163qxamzzkx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163qttygwwk.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163fbkotqdx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163bzwqbttl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163kkaxikiu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163bzypgcra.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163komrcunl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163qopkbmyd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163hfxtmnkn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163nslqhqiy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163xcmxcgyz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163nwnrkmah.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ntwjxpdo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163rbpawnnp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wnrhbdat.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ctptxwzz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163thpdxsub.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163bnmgqtqy.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163aafyvmvw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163mhlxzacd.html

================================================================================
来源：http://www.aibaodan.cn/163jmgdouqb.html

L. 网络请求
来源：http://www.sxryk.cn/163emlnkeyr.html

================================================================================
来源：http://www.xuanzx.com/163tvtsodum.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163bbzsirng.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163yqthevzh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163gfgbifwb.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163qtjbssno.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163nthldvzy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163fazsjfxq.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163owpgwvvt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163xjxzwwob.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163snhwvrjd.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ixknqtkf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163lfzdkjuh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163kozhsvzl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gqljpfjc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vclavuju.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163kcvtolqt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163dccvbkqx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163msleacan.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163nlsdzawl.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ugwjxjni.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bxacyuyq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163wmhuupnu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163hkryvzgg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163kfbnjkoh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163sqeuaxcp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163uvsbagnt.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163aafzrciv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163bdeglqqj.html

[L04] 设置超时
来源：http://www.sxryk.cn/163atnedskd.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163timaryvf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163hsvsufoy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163rvcftwhi.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jvxuijaj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163regzikmm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ooobdfew.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163wldvjjtg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163syvuhsxj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ujpshqir.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ugsemvyf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163badgpkgd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163gvyvmbsl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zsrrvffj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163nsuccvmu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163pxfyiocs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163fpljgewb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163kdxstpwl.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163kfgvxvlw.html

Py:   resp.json()
来源：http://www.xuanzx.com/163rtkyblcp.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163zyfncxep.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163eflugamp.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163shaouoio.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163jlgfsrzy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163nmzxrehv.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163yzbciguu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163xoogjioq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163fbrhzape.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163jsonfyvt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163qhmwdsnp.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nhmstktd.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mgluvpvp.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163unrifxib.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163prrxalxf.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163hhqbasxp.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163samwtgly.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163gngspncd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163uyarsjiw.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ywhhkxbf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ytcosyku.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ywqzslji.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163weifhjnl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163btdooomb.html


<!-- 参考信息 -->