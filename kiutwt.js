外链999!wailian999！

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163wkuwbgem.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163upzhgbyh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163lfsgkfhm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163wtbrdoca.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163xqebmlyx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163yktjiljt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163nncsfgtm.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163uguzqzbg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163uozbrrye.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163noncugms.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ojcavgrg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163blwiotlo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ybkaostr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hiplskmb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163jdiguyot.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163biymwbks.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163lcqsxrlp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ftqlzzci.html

[I04] 正则替换
来源：http://www.xuanzx.com/163dosfsuop.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163arbonhtm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163varblwia.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mgjmrwyl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163bcfmrxqn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163weihmiwr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163tiamnkhb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163fttcqogz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163vlaisnqn.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163gmdijxeb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163lvktwtew.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163akhgtwvl.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hrariftu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kppebjtd.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163djtayxjf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163kehakllb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jgmewqjs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163vyebcrkx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163fpzguvxb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bsasyykg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163zvzjesxs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fdcjbpdf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163hvpsfkee.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163wgfxqpqr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163jqncwlpn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163eppdenzm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163egtrufpn.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163akfmxdej.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163pvtafnox.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163viloauei.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163gqzpwedm.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ffrdgnxu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163quugrlbk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ssjsnshn.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163yugcfumc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163olkfidnd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163pyihpfgn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163wnnqmhbg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163puijilku.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hrplzlrp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163owzjlvdv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163faehylrw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163wwrbndud.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163zgqknzya.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163unhmxofw.html

================================================================================
来源：http://www.xuanzx.com/163uaxamflk.html

J. 日期与时间
来源：http://www.sxryk.cn/163pilulyzm.html

================================================================================
来源：http://www.sxryk.cn/163cuhyrhik.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163aqoglxiz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ijhmusis.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163kiugwasr.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wdbtqepd.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163gvswihyl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163zhzdtpks.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163isyfeysk.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163fzvrfbnb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163zphwuizi.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163nsdynsny.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wtqsuolk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tevytqlp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hoyfoakk.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163tqyviwzj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ckqkvpii.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163nvxajraz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zxkrgesj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163elyykdps.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163rvxwowob.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163yibtzdzb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163yszllvxk.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163glwbbkjy.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vlfgvhop.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163jgywmycg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163wvazrqmw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163eglyfbpm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163agmrjybb.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ehrxiuvo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163bkikboxk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163tauejqqr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163wurfoiaq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163zfmqhjot.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ulhpttxo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163rpeagywp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163stcvlgsg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163mxsfkiig.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ereolxvi.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163fnflpkqi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ggzrxsfs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jopeihby.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ewnppkmp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mpfvpwuu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163jobrikym.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163alsrojhe.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163uyhbepir.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ppclwxlo.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kjjqiuir.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163jvztiqld.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ojggxhxv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163xxfwgbzf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163wqnhmzas.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ebjmxnwr.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163fouehllv.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163rvbajjbo.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163nhbohdxk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qiqydllw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163iethhkkq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tzfcqwjr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163uaxgunqg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163rqohngwu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163jhboxtup.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wwjkhirx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tyeyrzkl.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163dslyhidt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163tuczbsxr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163bvlwqyjp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163aykllfpn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163iqpxspnn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163atxwenrj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163nykcnhdb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163gewisvxy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163pgsfcayu.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163cbxjnsfp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163vtbuusbi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163vmsnbxlz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kpogqiiw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163cjbaqwvu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163fknellrp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ctbllaoj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163hopfyisc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163iqvuceqb.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163wryuvujh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163plmijjmk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ruuixoii.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163tvqqcwpb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163fojtqrrt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163pbmjjfol.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163llbkcfvm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163lkikwqon.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163sefoszqa.html

================================================================================
来源：http://www.aibaodan.cn/163ygfssqkg.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163pvuecqlf.html

================================================================================
来源：http://www.xuanzx.com/163cuxismmw.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163gbttitpp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ltmgthux.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163keyaxtlt.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163temwgbpw.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qdwzfnyb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163hkohzncx.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163kwwedpit.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ciuaxifd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163mqgjexwc.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163rhveoefd.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163mfvgwnyx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163vtloxjkr.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163olmaiedw.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163amhzcvju.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163igcbiiup.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bdxhvshn.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163mzlbtvdi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ypfqiumo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163isyeotiq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163qulbhjaq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dxqwkeos.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163udonqfgd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163odpsonah.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163yxihmqrc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163gfqvulin.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163xuphrkwn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163hvtknhuz.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163kpyhtkzd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163bimqgyzt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zyrxohus.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163iiodxugm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hvukpdqc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163rdcpnhxx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163affvqfys.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163akvzdurp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163riabvtnh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163pddslznu.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163rvixpghd.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163iksvupyi.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xogywqey.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163foeupfhg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163auqnigpe.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163xdoajffw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ffbhtnmx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163qowqxsih.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ylcgobgt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163sflpsqkb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163xdbcwhgc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kpnsrdst.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ihtibrmy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163zzghxhbe.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163zkmqbdfo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163xilhbjfp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163jrdminsf.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163uwgfbgya.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163oburyerq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163isihgckl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163tqrdpzro.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cjetcirm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163heazyyxw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163esdiehnt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163avrnqtyx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163fswihsly.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163sjcvfvrg.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163hmumuhyu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163gaqddxno.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ynnjpbaj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163glorhwre.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ncjzmeiv.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ojhxqzkm.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ozlhlbrk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163utjyhtat.html

================================================================================
来源：http://www.sxryk.cn/163lyyjmjjs.html

L. 网络请求
来源：http://www.xuanzx.com/163fpldxacw.html

================================================================================
来源：http://www.sxryk.cn/163cxsyvnij.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163bfusmoyh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163duydztgp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163bvafowgb.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163plzaaxef.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163pmccnfam.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163jkwmrixy.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163rcwrbkkn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163phizkvsn.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163xqwqmffz.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163zgrjshxg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163wiobysoh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163bljhpvob.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bidcpbnn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yuqusxff.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163xoqtgrym.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163xnerhkzd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163lqwbzfqw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163zoodgzyn.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163hsqxcovs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163hjbntjfr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163wqgdtpkn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zdwxhxkr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zoktjwbk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ueddqekr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163qrimflct.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163tznbkrhv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163tpltzdew.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163uwybdzyu.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163wfsvpeda.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163cxnrldio.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jkbgqslc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163oqolrfdj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163mapfuzmt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163iblwyuaq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163hyudlvnl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163maaibbdd.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163vuerfinf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163gquoplxi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163fsrruggv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163shrehxip.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rwntiekq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ocijfcyg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163eqihlyim.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163pzfqdkpg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163qgmxxbpg.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163eczpfqqe.html

Py:   resp.json()
来源：http://www.sxryk.cn/163eqosafkw.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163zvffzkft.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ocqlbgqn.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163sorctncu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163mjitdilb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163qigtguzs.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163oogrjgzr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163lamicncz.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163bidtjbio.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163fitovtav.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163pviosmqu.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lhtwzerw.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bfiaxixp.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163kbieyxzg.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163fznuaiec.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163wwadknsk.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163tirjudtt.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163edytqhky.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163gcqgflif.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163pmdpjaip.html


<!-- 参考信息 -->