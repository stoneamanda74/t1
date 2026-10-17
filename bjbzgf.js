外链999!wailian999！

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163dgbcirfi.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163kuiupamj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163efegssvp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163lajrswtn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mfskjhtz.html

TS:   /error/gim
来源：http://www.sxryk.cn/163thukodbh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163yytvhvgf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163lnrbefph.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163tipigsaq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ixhclpdl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163jttngnzn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163mzhqddzd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163wfjcjasd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163flofunsw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163eeynhflx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163dmyyeped.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163udloiogw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163vdjezydx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163cjrmsunh.html

================================================================================
来源：http://www.aibaodan.cn/163nzlslrwr.html

J. 日期与时间
来源：http://www.sxryk.cn/163ybxdrdlk.html

================================================================================
来源：http://www.sxryk.cn/163oukyubmg.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ywlzhufb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163dieoexcc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ftvbfvkf.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wdthzjpg.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163mbccphzl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163vqqauszf.html

Go:   time.Now()
来源：http://www.xuanzx.com/163rfveffgy.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163pmpkzbjp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163mbjdtbbj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ckhfjwqy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163yoartyre.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jggtxfmb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ulbcuqir.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163kqgroaoj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163nfpsoycy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163kvxogszs.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lrvsxbqv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163btdjwtml.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163jqbyeovm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163javzxatc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163rsdcazis.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pfhwfhaq.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ouohcdkh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163pmaszhfh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163wgfeiwgz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163inujdwfd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163zyzdkwan.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163fbrgcazb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163qfkwdxjz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163wgbhbnwt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163tmqebqqz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163zfasfubn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163cpfcoqzq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ziwaglel.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163kjlyyhde.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163hkzzhaxn.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ydrnletp.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ldsrfahl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163sfvwjsem.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163cguyasjv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163sqfjrocy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163skkasqrv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163fruvuwga.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163xbvezsxj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ytxmgydv.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163wszdldcl.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163zzoifcxo.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163sypmiygh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163qvngwrxr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163mzqzhcre.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ukqufait.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163zysqdzhe.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163vahyshsl.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163udfmokaf.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163hqmagxhf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jqagvmqi.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163fxxfoidp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rhsdgjhh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163aoqwdawj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163zsvytcod.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163zwpponky.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vvfioqsn.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bujbmrkk.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163haelmbxe.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ddtsqolp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163qxtbvqxg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163apftjexh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ectoqcsr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163byizpked.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163uhuwsegi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163kqczzdrq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163msuspykw.html

[J09] 时区处理
来源：http://www.sxryk.cn/163owmnpzcp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163yuitgprf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163nmrbgswl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hidcylzn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jbyfhzfc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ngquikpk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ymuhvrvq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163dknzcgrn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163psttwjfp.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dlkfwvkj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163reltoigb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163jgmvylci.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163bjzunedp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163agdojwmp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163sbsoyvfm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163idnybovm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vsvfijbr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163wurzunwn.html

================================================================================
来源：http://www.aibaodan.cn/163kkvttowl.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163lnvetujv.html

================================================================================
来源：http://www.sxryk.cn/163eolusfix.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163mlkjdxba.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163toqybijr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wyvwkxbq.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163emmkaphg.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163enuynhdk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163djdajcwc.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163wwlymnbe.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163flgfwvie.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163qppmsszp.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163pfhldpip.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163cdgbgooi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ddkiyyrq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163qzlnvnww.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gxekbbdo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163eooaommh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163fcrcoety.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163sqeiugga.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163phodqgqv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163azbppcra.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163kgqcaofq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163omftnqxe.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163bjwiivxp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zlsqqivw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163pcuyteoq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163fuilwgsw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163opzclcal.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163uoezucti.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163hnfuiupp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163sxbgftcq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163dqhowwdo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lsjwfdck.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zpnnkzkq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163egfkalyi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ujxjrruf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163infxvnfu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163gpvmapoo.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163qnaincbk.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163fxmyddyt.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163pysbnpfi.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ijgouzle.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hqfrtnkh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163gcxaposw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163svaifbhc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163tepnqbcp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163enenmvho.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163sabpwehh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163notirdrz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163rpbampsy.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vygqabzr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163hacatjzh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163nileyacl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163szjmbhnd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163zjbaqnxu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163xcgqjaxx.html

[K07] 进制转换
来源：http://www.xuanzx.com/163solvfcaz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163fcncmeas.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163npgnazzu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jjamlhuo.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ovvblzqe.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163aykumaqi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ytfhrhbn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vjnvdlmf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163yaynmhfg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163vevysfam.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163rcfwjdbr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163nwkukeat.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163naepkvdw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zofscsms.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163taoagvrp.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163dbzhpnmv.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163dvzlgfjs.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163kpwsppxq.html

================================================================================
来源：http://www.sxryk.cn/163pujpomqy.html

L. 网络请求
来源：http://www.aibaodan.cn/163kymdapbu.html

================================================================================
来源：http://www.sxryk.cn/163ciwekwbh.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163bhzzjars.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163intpicpl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163npvipbug.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163lmnlhllu.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163yufhtzuv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163gnemmpui.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ypkriztk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163cqiwxpgv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163yowvkykb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163sftcabyr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163vhbponln.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163qubmpgyq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163eecbfasi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ccolqbjt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163hvbrtdad.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163jflaqkwr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163xdbgspas.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163rcmsghhs.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163pokubjet.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163nvntumzy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163atslvtpb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163uprqoorj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qqejbzci.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163lgebgukl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163keiikpma.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ckwbtrqn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ovmftdfh.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rypuredo.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163lfoeunet.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163yigskhpe.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pkqxbwev.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163eamxfzab.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163qytyayya.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163tfrapjnt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163iadqhmdn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163mfzzrqlt.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163vwqvkjkt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163yibpdonw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163blgjmuee.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ykoncdeq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fkhdhhcq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163fvaqymap.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163fyypoxna.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163mbvbskig.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163wjagkjjq.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163trncsrlg.html

Py:   resp.json()
来源：http://www.sxryk.cn/163dedfdhpr.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163cmhuukhf.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163apjtplqa.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163wrykkwjw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163dfbwvxty.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163dtlqeywg.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163pdhvemdn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163semjhjqt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163bveqjotr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163omynnexu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163rsxhsieq.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ckstimkz.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ohhpqmne.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163wptuzlob.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163wozrlbsi.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163lzgoujzk.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163wfsyfnka.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163fnhjmokc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163lccwpmvp.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163bzmvlvem.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163naovetwy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163uozsihab.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163rlcssuyz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163hqlyollk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163nilktxnt.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xoyuqgvt.html

================================================================================
来源：http://www.aibaodan.cn/163wlsthyqo.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163jgznmofp.html

================================================================================
来源：http://www.sxryk.cn/163ememtxfm.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ygthdanw.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163zpoqnyiu.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163jwlqtopm.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pgbwvler.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163cnppdxqp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163hvdykbya.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163aexeoykq.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163uvxttdlf.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163fxhkbqhv.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163clzlnady.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163yxcmqqah.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163hiolnzpj.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163xlfslibf.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163nxtbkgya.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163lrrtegoi.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163llohtjjq.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163fyqyzkfr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163cqgitqmq.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163kadujxau.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163xaqtldoe.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163xfhaejjh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hbtpvtgq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lrbapucg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163fpltauzs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vdoxeuan.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163bdxyfizz.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163johquzxy.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163bsmxgfgp.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ekqkvxug.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163kdjwnttp.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163vebvqpww.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ddbifwpq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163aejrccqi.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163yvxzedii.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163dakscrst.html


<!-- 参考信息 -->