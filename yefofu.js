外链999!wailian999！

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163irknusuw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163etqguixz.html

[I04] 正则替换
来源：http://www.xuanzx.com/163cgzhipxo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163mrndkbcm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163usngdcup.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163opkviqrj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jbyfintu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163jrisyrbd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163qljseezh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163xezknozy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163qskxeqxz.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163zftbjclh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163rfkignob.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ajvqxatn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gfuuuowv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163trdwviot.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163rhatbalc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163aokqbclm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ktkgrstl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163zcaleuhi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ljfkrthe.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163usgnibqr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163zmrzhkpk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163tizuiuoa.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mydfjsif.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163kzldhvoj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163redqqzjc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163kasjctaz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163nstcvjpm.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163zihbavle.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163etgdtsct.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163kfdvlxvz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163olmyuget.html

TS:   /error/gim
来源：http://www.xuanzx.com/163pimlnakb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163hiyhyhhs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163cmovxomg.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163geykuhhw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163qwdopxby.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163iqhrjmsq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163musoemno.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163hnzskalr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qevjmqiu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dwlwcrif.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163iewopkpu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163lmxgroeh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163lokrqbnk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163xvrkndvr.html

================================================================================
来源：http://www.sxryk.cn/163rekfqglk.html

J. 日期与时间
来源：http://www.sxryk.cn/163vhzbyspf.html

================================================================================
来源：http://www.sxryk.cn/163ckrqdhnn.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163klgupsgz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163kqmwqdmo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sigdcioo.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163mmdsdmar.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ovyqymfz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163lfrshblu.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163rfhjyiyq.html

Ruby: Time.now
来源：http://www.xuanzx.com/163tbzjbrwm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ehjxgtbt.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163xbprrbvn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163qbossyrf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gityxtlx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163kxvgarqz.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163gtfvkaqa.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163dxrlkdox.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163uxyozspy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163avtpxcjy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ptqxwqnt.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ezppzxhd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163rkmxxnmx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163fjvrxyyz.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mvglanod.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dxqmkxkb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163egckjxwi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163vccyoxkn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163asgouxih.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163mfnpdsrh.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163uxncmqnx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163viwfnlxl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163zugynvso.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163lbtrersa.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ylfmznsp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163beqngoge.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vsnhwvii.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163lqclmbrb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163bblydmfg.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163twcojytm.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163yvvfukrb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163dxjtqcpp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163eijylczm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jqkekifk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163gtbtkzqx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163qehpebyr.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163mgrxozsw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163dfcsrbts.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163jgnaxpgz.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ztjmelou.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163srsrrjwp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163owjszlsy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ohhududq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163wgsdihyf.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ywfgodzt.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163fdqtxydl.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163chwvqfer.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vetvqgbz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ydasaxha.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163hvxnrfbg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nrrqohuw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xwldqmqp.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163trwresjq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163cwutgqzl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qvrmwhpz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163myljwrbi.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163xbjlefru.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163gqbfewlk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ldbznnng.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gkdvnkba.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163kxpfeywb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163fvcbrtjy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163fthlwymy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ejxowekv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163epngziix.html

[J09] 时区处理
来源：http://www.sxryk.cn/163nwkllqqv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163pldfgjrw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163iwwaebmv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tndayggv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163mvhovhar.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163zsbwimdt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ywunzsnb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163cgtjklke.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ncztexpf.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163sxnptyzl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163prggsdpk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163dcgcoecv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163oajqczpm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163uuoldoit.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163blqhuthf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163eqvyonbc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163rsfjbykp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163uwynhhmu.html

================================================================================
来源：http://www.xuanzx.com/163xfqbuqfk.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163fmiezjew.html

================================================================================
来源：http://www.xuanzx.com/163zcwgnklt.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163zxaqmnjr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163dcptuotr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163tntjfcxe.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nvrhreaw.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163imehdnzh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163iyfdymje.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163jokqtgdu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163txaqzzqz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163girgrzyi.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163tjvhopvu.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163nlcypwbu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163djltfmxy.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163anfydyra.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163foabkwvs.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163yixrqasm.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163kdpseovh.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163jshuqzko.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163thhjlzls.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ksrzvrzx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163qdbxmzbv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mspnckme.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xgawbgzc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lgilibkc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163psttezoc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163tqveuvfk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163caklkchc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163tigqkzut.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163uljdxzbo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ndmvxmii.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163jqhhohun.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ulqyfxwq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nqwtcpnn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163kjeglbuq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hosqnnzp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163jotqmtxx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163elvmljly.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163qxuzioyc.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ipowfdgz.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163esswcaaf.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qihcpoqo.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jnfiigqh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163cyisnacb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ohdlsonf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ylvfruba.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163iimeufdj.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163mllvxqpr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ngqcjwky.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163dacrxegz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qtxapgxv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mpmxrdrt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163petbkyiq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163zdqpttou.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163zfglhpva.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163rjeliqzu.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163grkyrsxf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163dkotcceg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163jhbmkshg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163tfwwkwdk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gkxsxszj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163nfjewhkx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163jheruhci.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163kqpzvouh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163qfhddpqy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163uydijkof.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163kppayats.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163tyjxzaia.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xdtcnufi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zsrcokzw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163eqgivqhg.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163osmxmcjy.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163bqznvnqw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163qrrejpmf.html

================================================================================
来源：http://www.aibaodan.cn/163ryrikfjv.html

L. 网络请求
来源：http://www.sxryk.cn/163fltjawso.html

================================================================================
来源：http://www.sxryk.cn/163jdmojked.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163dsderetl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ksrpxxfl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163eocqxkix.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163incrpwuy.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163fvjbbjrn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163khwoysch.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163blxdjjqx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163xebmrrst.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163kdperrhj.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163guuaennm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163egvvqqtb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163fxzcptvh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163npakqvsh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ozlyynmd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163lrxsbwmu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ujvjmkvo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163wlkezquj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163dluakjmd.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163fsjlhpmv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163pazutfsh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163muwtipbe.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ohnmvbav.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163optehlmm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163lpancrgy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ucqdivlr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163frwmdzld.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163qaemnhef.html

[L04] 设置超时
来源：http://www.sxryk.cn/163sjnbodfi.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ltwwlrig.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ztdqbnmk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xckbnrbo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xvawganv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163jrkaweia.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163qrmxzreh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163zmealusg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163psbnnqqs.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163svtmubgn.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vyfzueox.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163exqpybbt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xocdadfh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lajifajj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163zgqgbosx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163jeubvsrn.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163lxprufnb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163jjqyegcq.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163vrkkrrsu.html

Py:   resp.json()
来源：http://www.sxryk.cn/163obhkbrrp.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163tlkjysug.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163arspaamn.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163gfaayazp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163kbuicwya.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163tpmrvals.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ebzhktkb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163rdfoexak.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ivquxssn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ciubifbo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163kghhefph.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163qasqsjao.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mzqzxygp.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163rfzhnhvn.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163hknyjexn.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163xxrhztuk.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163tevmqpgx.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163dogcjxwk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163bcrplyao.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163fqbvixiw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163czbdqeao.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163iifbvttg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163rrzipoja.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163zarubygw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163hytugvxh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163pruzmwui.html

================================================================================
来源：http://www.sxryk.cn/163zyckebfu.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163irfzpfzo.html

================================================================================
来源：http://www.sxryk.cn/163mmdvzcjp.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163upulagxv.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163fdvlvoqx.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ikdfumnv.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163werslwmb.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hszdqtoq.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163fucljknt.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ntgtstai.html


<!-- 参考信息 -->