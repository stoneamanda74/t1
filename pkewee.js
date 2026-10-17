外链999!wailian999！

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163pjemybdr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163pncgbdee.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163flflqkzf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163yzpzyozz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163hchntbmv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163qciqubhb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163yublopkl.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163iqtrcesw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163locwnqku.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ufohwqbp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tbtyknpe.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163atzuqdei.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163hsaxuoby.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163schcnlsr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ukgvlxal.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ycjsdyrr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163wxjeyjjp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163riygcokk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163gqkvimfq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163blwdydjv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xkicvnre.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ksouyrtz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ixqhlpmy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163abpldses.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jbajgabq.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163hudjxxty.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163tkpzbort.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163mqlbwjhk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163hzxvagqt.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ukoyakye.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163affipsbt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ooplwdzz.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163pqpvguet.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163fhongbtk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163pjogvqyb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163oelvmqdb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163hxpbtqmg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163apjycihy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163fmyfrtdb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163vcnfzgyb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163jdsbivmx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163zkppoamw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163arwdnhat.html

================================================================================
来源：http://www.sxryk.cn/163sxqqgzay.html

J. 日期与时间
来源：http://www.xuanzx.com/163nhtybkza.html

================================================================================
来源：http://www.xuanzx.com/163tdndhldq.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163sqfjjhqm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ajncbvnl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163zxhaulty.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163auzligda.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163csliztzr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ipjydxdy.html

Go:   time.Now()
来源：http://www.sxryk.cn/163enqkwacg.html

Ruby: Time.now
来源：http://www.sxryk.cn/163amqpifyu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163jfuvkkle.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163yrymtgdd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ilpjujgu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163krkqfhsf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163hdfhdnui.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163gkfewche.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163sdetmpiz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163xtwguiqw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jmuobcsq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163dtrjssaf.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ycyguyai.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163nbxzgbik.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163jhzpmuzz.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jqrvnfxf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163yzbwsfdt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jbwwldgc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ivuyeypc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163etwmixfi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vawajfqa.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163hevrixbr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vwgyqabm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163liaafuwu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163vinykozk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163nkcuqbrj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163qmkoajns.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163zyegmueu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ycasiqbs.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ttwzusou.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163mvncbzwn.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163xhwagwtl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163widirhqd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ulzswpdj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ojzhzppw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163jztbjjsq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wojnshhe.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163flsaurrb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163emyrpqsv.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163vgdyyqbc.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163dhwiulzv.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163aqhaxfhu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163zjqpterz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163cutzvqtz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163jzimepga.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163gpfxifns.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163rybrlimu.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163axbresww.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163mxnarbgs.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ksasahil.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ppmplvwm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lfvjwfgc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163myblufrg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163dqrqkzit.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163utlnnfgk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ajdzhdpq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bljvplfa.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163fyxyvsry.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163wsnqcpfn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ikattmyh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163jsyhlwpg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163kkgauhkc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163sjrkekmt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163oegoqiov.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163amrrmbxm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163qicxwjwg.html

[J09] 时区处理
来源：http://www.xuanzx.com/163gzwpfghn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163zrndvimc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ktnovxbe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163cjvxkswf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ylvtoaya.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163qsfziwbf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163smwfxyhq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163sdlglzjv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163cugybgfn.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163voequuur.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163yyziyjht.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163heaigrjj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163mcvvduda.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163levwfatg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ijiphywn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163mioxvpeu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163glhlrnio.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163awhecwsr.html

================================================================================
来源：http://www.xuanzx.com/163vfossqcl.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163pxsjgyus.html

================================================================================
来源：http://www.xuanzx.com/163xhjzjxlu.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163zzrpgkwl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163tuddcyrt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163tgttjfhg.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rcyqdgct.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163agzlyinb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163wkpmvrii.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163oupiqqca.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163wydrigne.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163govbyhgi.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163mjfvrzhh.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163nnblreco.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163xhuvivmk.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163aveaoexx.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vtcuhros.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163wvnmglxd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dnztvood.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163eccfoorp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163xrvsalyq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163yqqrstgj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163kmvvpeea.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kadfbomc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163usuxmgwx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163iujynupu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163yzgrcyat.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163nbukptcl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163hwsfipcl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163fhtcgbya.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163veqagxev.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163upqqjdlj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ezvjvhyf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163lqhrmbcz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hnkmuqmv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163qlkhkyqe.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qgioltdh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163oulsdhim.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163mvfhzela.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163blalbszr.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163slodrwfg.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xjoptwjo.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rqbnospi.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ullzhsqu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163vchwrknr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163qvenqixa.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xbefzjga.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163fwdmulvz.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ykbyifru.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163xvccqkrn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163yhhpdydj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163swkztlog.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163yapjmxnq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163akhkmsuc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ouotjigi.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163znxtuahw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163qmvaizcm.html

[K07] 进制转换
来源：http://www.xuanzx.com/163usujruel.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163szntfiue.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ptmbysln.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gixcisje.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mwwgcwwi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163tnaecczl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163haeoqxbb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163vlnjuwty.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ixniojha.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163vaztibdr.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163bpcoyiuu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163pjegrbda.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bfsmvsry.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ashylaoq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163kjmmbaex.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163gxkretbl.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163giwsibsw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163nkpcqnov.html

================================================================================
来源：http://www.aibaodan.cn/163jdfkdenl.html

L. 网络请求
来源：http://www.xuanzx.com/163neutjfui.html

================================================================================
来源：http://www.sxryk.cn/163vgjooban.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163gfwfnhnv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163kkcksmpx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163wdonuthc.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163jwcyaufp.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163xbuvujxg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163khajgfqx.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163xfdzchds.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ouzjhmwo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163rrskmhhr.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163aqgknctp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163tbojdupd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163zigweqpb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ievohntm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nnyrgmyh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163bkdnppdf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163nnmtivrs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163wehpcwyd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163lsrqbimb.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163dcofjnmf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ickqoqca.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163vvzabavs.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vijilopt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163flhmztke.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163nzujpthm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163bunmikag.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163kckinppx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163yhzsyeqy.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jskvmogf.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163rgjriith.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163rcupzkig.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qjpzsdwe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163flrtynrt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163xjdjhzpq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163aufwsuds.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163obxmaalx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163xhtxscfq.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zniibjam.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163diepzvcr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163exhnzred.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163peycpbie.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lurogmfa.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163yqwemcpm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ycgjcwyx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ninbxbnp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163lmriouwh.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163tscmsexp.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163yerddacu.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163fnmynkpg.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163qfynnntn.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163kuoxagts.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163kgoztaph.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163vlbacbgk.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ypnqvrcc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163paeasubr.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163vrojjmsp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163syyqbsao.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163lwoojawk.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163dpvaoeqs.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wfuvbkvb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163hkdvnczn.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163xbldbzdj.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ifdnqsmu.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163pensszqb.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163rbhnkmpj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163knecaflc.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163sdukfjqp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vljhhotr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lmjgnwjc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163lqbuvozw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ykgxisis.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163uxxbuhpo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163cameknit.html

================================================================================
来源：http://www.sxryk.cn/163yxhqwzyq.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163altrqbxq.html

================================================================================
来源：http://www.aibaodan.cn/163emklhgsi.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163nbrpxizo.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163hpciyses.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163wztjxidw.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163yhwctddb.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dftenyhg.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163whzwoeiy.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163fvepyptc.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ywkwliza.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163dhbiipnw.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163swilrial.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ardkxsxq.html


<!-- 参考信息 -->