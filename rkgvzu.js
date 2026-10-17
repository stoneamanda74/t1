外链999!wailian999！

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163cnmwvgcx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163oamwwvdm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163npuyluar.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163caegwvei.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163vwhmxqoe.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163qvjegaph.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163osbkxchj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163bbnsvjwl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ofnppjap.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163rpyboocm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163pnfoedrk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163vminmhnv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163dgjhozwh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163kougyudz.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163looayufn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163gozuhifi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163vzhrmrei.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qojmhrvk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cjltnxtp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163pykuiged.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163sqmccfsu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163hcpzuowy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163bzutzqcr.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163vuycszyy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163xkdyettk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ogwnujai.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pwpbbrwc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rotypdrf.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163cvusqxmo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ceojfwml.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rlodpfgn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ismcgpfw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163wewzaomu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163utujqgos.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ybxlmjuf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163cqaysdrz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ovefpofp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163vsylyhva.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ostdtukt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163oumxtkoy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163oyusbqpk.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163qzyokcbc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163nxdcedma.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163mmbwdmft.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ukmybxxu.html

TS:   /error/gim
来源：http://www.sxryk.cn/163dkkdhuja.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ycxnjjhm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163lcniaqnj.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ieghycac.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163jbuejseo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163yqbqlsbr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163amxacsvp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163moelobqm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zguoxtpo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qclseqsd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163qhftepcu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163pkagigjz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163sfbprivg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163luogspzk.html

================================================================================
来源：http://www.xuanzx.com/163sgvdqsja.html

J. 日期与时间
来源：http://www.xuanzx.com/163oubsjxjp.html

================================================================================
来源：http://www.aibaodan.cn/163rhwmdwvx.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zjnnhabx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163gigffhrr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163niucruop.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163phgjyjdt.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dajkedaw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163vfmyfman.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163csyikazx.html

Ruby: Time.now
来源：http://www.sxryk.cn/163pfauybjb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ogpeczvf.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163lwnkqgjx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ndbqxlxr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ysnopjao.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163weqjuquc.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163cuoqgxnm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163qbfbbwem.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ippwfqsa.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wabqrlef.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163fydfldpl.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163djiksgsn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163kxtmftsn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163uydhnuqz.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tcudfnow.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wnewdqmm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163yrbcupwr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163livzsexs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hywguwsq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163nhivudkn.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163damjyxzh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163afhladrt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163tykfzlns.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ytxtstfl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ruqtlyll.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163jkdxmbkg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163pcforbfr.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ydnixzss.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163erdvfsvd.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163lsuuwqma.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163uyyydbcd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163oqjzuesp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ahvcvpmd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kstdqkbp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163kuvxiehe.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163cswjjjvh.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163xlosofxq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163scwauwek.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163oylcrglh.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163nnwhiriz.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163efuymlbp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163bwybarvc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163lmgfcufm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163muassjme.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163oeaaexkf.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163cjqbpxec.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ndjvwvai.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163bzyeynig.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lmogyvez.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163tmewwwlx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163khfwdrhh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163pdvzoxjf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163fwpdyucd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163pgkkuxum.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sghyadcm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163eogflafy.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163kmbxdefl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163gtutawnx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xssviwny.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ozhulqti.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163bmaaydzi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163zheoghye.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ztdvilmz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163pzlvessn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163pqmwirxj.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163mrhrxuuf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163yxsqamqb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163aisplmaj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163kzkuafha.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163rqnmiree.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163muanwayw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163uvbhsxeq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163vtgryutr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163towedoyq.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163osllzbfj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163nqsalryb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163tacijcul.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163eohgshpy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163zsesvvft.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163clhuraqu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163zagsmnph.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ezdwotwv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ioljcrag.html

================================================================================
来源：http://www.aibaodan.cn/163uwmdmezi.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163uqgmxmnt.html

================================================================================
来源：http://www.sxryk.cn/163slaabrqz.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163gtefvqkd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qrypznyc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kcfjaebm.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163abxyznlv.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163levaoyxp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163jsusmtsn.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163mzylfebp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163kvfekujb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163jjxakqap.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163fmxmwiku.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163cqolglwp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163wxpdyncv.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bedhqhfk.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rqybxxfm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163qbjcwiox.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wzxeoqrs.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163xiefnrxu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163rivefiqa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ohesodeh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163kjuvvlxu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163fxaqekkp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163mnpyxawl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zzqxkade.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163tgcukibk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163dzqtnivt.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163szcqodgh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ivtnrriy.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163qvrdhpmv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163urhukzlr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163vdweaunu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xlooeddh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kzpksapx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163pssonlvt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163npxhxgmt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163fjxlejvd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163palumaga.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163gdaqihfy.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ukxqjezu.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163gkrvmeqr.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rggkqfxh.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qfofrkik.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ppkdkqfh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163bytvbrvg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163utcdqbmv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163vakwzhmw.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163tqqgbkeq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ycpjrebm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163qbcvqitf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163uksvlbas.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vjictfsc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163pcbapsra.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163gztypngo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163miblrsbq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qiazhmbd.html

[K07] 进制转换
来源：http://www.sxryk.cn/163chbgfask.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163fkanzvca.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163jfkhlhrf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nvqljmuc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tkpguobe.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163gsqcidoz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163dhholxrs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163areyygzy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163nvlorvsg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163isszafou.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163smcozdmp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163opqsceud.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163glluyejc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dchsgaxg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163zcwhbkdp.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ndtjsogb.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ntkivpkr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163pakzbffq.html

================================================================================
来源：http://www.aibaodan.cn/163abxgimlr.html

L. 网络请求
来源：http://www.xuanzx.com/163mgcpvwvb.html

================================================================================
来源：http://www.xuanzx.com/163wkjfsazm.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163tuxxqswx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163rpjplirm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163banxbgpl.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163buonkjfe.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163muwnwexj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163vkatykbf.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163mfcdpvvm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163tuhcqzwf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ajnhjojm.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163kjlvkftk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ucllwhat.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163nbcdetcd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xdlfybjz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163kmcutrwo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163edvzzish.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163nefjlfnr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163iiqymsuq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ghovjkxv.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163awqjacmi.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163vakcabmw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ogwfzyio.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rscuammw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bwjdgurf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163vnozibzh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163dskhsmrt.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163qbcysxmi.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163xwnjvvhp.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163qlvfcxxu.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163mdfrkpdv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163lmqjjonw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163oanhhbbh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bkjyrpgk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163lcnrabrl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163mdsvfwcb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ctwcyuon.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163qmwidljk.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163giaprncf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163bdgpwzlb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163gbbfpfnt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163irhjexya.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ykgafptu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163wspmkqoy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163mosdbtss.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163tscdfwoc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163acoyybva.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163pudwgixw.html

Py:   resp.json()
来源：http://www.xuanzx.com/163abkxdjub.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ycocfkrn.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163fkgmhliy.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163yhwryybl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163nqmlvwqb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163sotdwsju.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163xzcvtaiw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163xunfbytr.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163tfczqwgn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163sovrpipk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163zfnbalxg.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163eqcrqujb.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163cirwktvu.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163jkxwyyaz.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163oglrvrqh.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163dztyltua.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ketwnjsm.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ffxmnfys.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163vnmropmq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163gfhzksio.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qsoqsrig.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fyhfkvkr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163kqyappes.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163rgktnhpy.html


<!-- 参考信息 -->