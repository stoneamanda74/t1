外链999!wailian999！

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163vhtrjdaz.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163bcirdsdo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163hujnwkbn.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163iibbobjl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163vaunjbbq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163gdaevcui.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163vjvvfrdq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163zrpfleno.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163lkkewqkz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163cicovwzt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qzxeuypp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ghzlewny.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163rmeqyawz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163tskyvbzd.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163pwvsnhuy.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163mziwymeq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qskpyafx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wvzdcjuf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163psrsqwec.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163tmxhawpx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163nwermpmj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163qxkbymph.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163eqljnoet.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163sedttuae.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163vwlbmvdb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163csoieccy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wfmwtdfo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163emkhjgsm.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163qvxsqptz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163nxswomee.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163skndooud.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xeecbohb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ziovckzc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163gaerbjok.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163gdqvnjet.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ruhlzcwo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qxpyclda.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163byrhoakm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163cuydvhgg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163bzapxpbu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ihjemurr.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163geivcfkz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163dccsiqha.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163kcxvhubn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163riisgjqe.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ikoabckg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163eimufrwj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163suuhyonz.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163huuulicq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163siwocghi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163xgjumgtz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163gfhiqdjw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163abtfjjoq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163lfkuigmi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163aetrgasz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ksiuqmbg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163qmvezeqf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ykspjqae.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163hoysoxiv.html

================================================================================
来源：http://www.xuanzx.com/163zjlmftym.html

J. 日期与时间
来源：http://www.xuanzx.com/163jrkaemgv.html

================================================================================
来源：http://www.xuanzx.com/163aavhxsmx.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163wwwnokom.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163wgylmwee.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vjrmyghb.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kcabsgys.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pcdgqfkp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ezbwxwor.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163zhzakrwd.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163qyagpznc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163iapswgoe.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163onmcyxbt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tdzdrses.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163txjoqhzr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163fvcdaqmd.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163fmsglhvb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163nozdqwse.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163efyspzwu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163oazfnivn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163uyfksccn.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ndncrdte.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163gxbzeubb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163wuqhlsuy.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163fmacakjs.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qkjgpmyd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163qjsuppxo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163tgeqjast.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ozrkrtwr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163cglpctkc.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ufernfxv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163gjsmlpsk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163gdkocclb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163imhyifva.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163jrgnthhd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kjxixjuk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163svgjgzpv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163pfsztizg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163yzqzcqba.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163hvimgfyi.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163kdnmqrmb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163zuhjzrfe.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qinseraq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163mipkzktg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163qrsvygkm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163wdsyztgs.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163jdkmzkba.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163kzsdkobf.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163dkxxoayh.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kreowscx.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163npkbityl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163rryyvvjo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163kujgizae.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163yeriktty.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ecauqzoq.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163jujtzodz.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163qiguziam.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163jdbjnaxb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zhkanbiq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163mmbkehlq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163unuobejx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163nqfmuvfx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163tedtvfkc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163jqidhsuk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mavwthno.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163omzqdcja.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163rswccaum.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163rnfflnjb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163rkborbpq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ihkvaqip.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163nauuuggx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163scwrwutg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ejncmapa.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ggwzvqaq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163bzfaaaom.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163iykjhoik.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163zocyertc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163xkpmaixp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gnzwxcxe.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dhgyleab.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163mlrjnumf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163qgpazjli.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163vhwoqhka.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163yiafewbw.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163nwkyehlh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163oixopzua.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163thvvpnng.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ctrkgqzu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163zrrnxepo.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163vsvctdnc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163jihrrdzy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163pnqmqehy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163fpxkbfqs.html

================================================================================
来源：http://www.aibaodan.cn/163xfuzzcey.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163wgwcmqrm.html

================================================================================
来源：http://www.sxryk.cn/163fnlcufxh.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163dyjjxntu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163csxbbraa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ixknsten.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163enfyeibu.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mzrrugcf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163euqaaaow.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163tdjloieq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163wifahqtb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163yegzolwl.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163hnqsquyw.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163quhwxxus.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163kkqihceo.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mybgknud.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hntrrlsu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163oebrewul.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163mtmhcgle.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163jzksgply.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163kdqwowtl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163sqcbrebi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163pxqvdpuq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zvqktfne.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qjipcnql.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163aqzfxcxk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163tonvkmny.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163zttpxkla.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163kztktykk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163eqjwgnzu.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163aorgaseq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163qkdxozwm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163pdyjgami.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rhhejnvd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163raercqbq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163hwbzrxju.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163kecwvoqs.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163gphqydgw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163qoshwzat.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163pjbczjzk.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163lneykrbl.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163gootryuz.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163awbslvwq.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bbgvrfss.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163inzrmdzm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163tcenfdrd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163vokvtxrq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163fxxvqdxa.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163cmxrqfpv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163qmzdpbdt.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163gjiugrex.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jmuphdyv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163lrehutvk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163zzwjyhzb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163anmvolos.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163dedmbtwu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163jindurwr.html

[K07] 进制转换
来源：http://www.sxryk.cn/163nhcxxlzt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163usisjksj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163zxeioqie.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zcxukkzr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163uqkhmhbr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163yenbgwfz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163emhavsxy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163uhdesqvy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163xsfszbbb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163zwhnxixh.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163vcvejohz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163plswmcjy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gfoowxby.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163cuboskmc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163crrlettz.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163hhdilkrz.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wvecqmyg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163vigvpxen.html

================================================================================
来源：http://www.xuanzx.com/163tbwokjsk.html

L. 网络请求
来源：http://www.xuanzx.com/163kbktutxt.html

================================================================================
来源：http://www.xuanzx.com/163ouhtlbnd.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ifslhpuh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163vylnkpto.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163sytnrkji.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163gssjkihf.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163rzlykodq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163eqsyfcld.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163gyhofuhz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163rxzfshnw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ugdxtvmh.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163yrrvccpr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163slbdczwk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163hzwuxezu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gewmmobn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163kdvbwkha.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163jhrbkgef.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163aggdbybp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163zunnwtpn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163uhlzstqv.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163wkqfdmhe.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163srcfpqav.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xusyzlzf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xcyrfcgo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vvpfweof.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qwdumxsk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163rvdbssle.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163lduooyxh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163eaipqtwj.html

[L04] 设置超时
来源：http://www.xuanzx.com/163kzjcdfxm.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163nwvvzhow.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163iodjavvu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163npmsopmo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yictrzxv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163gojnwlag.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163pkqlsxvq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163odtdrztp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163wipzlkzh.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163qcgxsvdi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163rnzjcwuj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163wpsmzrnu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jjnbbawz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163sthfzgor.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163rwstupfm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163abluzjsp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163nmnkawgy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163wrihxakf.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163lazxkqey.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163qgogzdct.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163jdkejlri.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163xfozzkdx.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163jblchjde.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163jwlqqxbx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163adihukqv.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163igkoveop.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163wkxypahh.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163jcykukcz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hddyhpeb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ffezbrdv.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163tdhbtcul.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163orzycvtv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163odnrdbuf.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ezkjxfsj.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163gcztttxb.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163xqislwhc.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vriidmqi.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163gjxgivio.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163okizhxaz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163htqcjggd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163sqiwavgj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163margmbgn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ubnpvoii.html


<!-- 参考信息 -->