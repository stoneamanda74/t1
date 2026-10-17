外链999!wailian999！

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163guhpkoic.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ilsoavdf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163hgkqmwuy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163uhkgvcep.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163pypfhtxr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163turyqzxf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163yyiosioi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163zwjewfxk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163epucsezb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xgppmqqd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xfjmdldf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163muqoonpz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ehncynop.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163xwuiskdw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163hnjptzdy.html

================================================================================
来源：http://www.xuanzx.com/163dzymsuii.html

J. 日期与时间
来源：http://www.aibaodan.cn/163diyzphmn.html

================================================================================
来源：http://www.sxryk.cn/163blxivebf.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163dntzbsyt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163insjshsg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163btnmshlc.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163uxglaryx.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163vuwmosch.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163vkotxhjk.html

Go:   time.Now()
来源：http://www.sxryk.cn/163hbernimj.html

Ruby: Time.now
来源：http://www.sxryk.cn/163teatfahv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163rcffrkrd.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163xevoxzxk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163atieaoef.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163kouajxhc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163zmrdogmn.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163mspkjdik.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163yphpbwdu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163twioxphu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163emyixomn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163mvodphty.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163riytsxdk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163oegeslft.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163wijwcmwa.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zzrxqwhm.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dzuslxaf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wfxbhqph.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163qurtpzmh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163hasdlvpr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163fctaelmc.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163pgoyrklg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163oouxysai.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163mrwzakoi.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163gcsbecdz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163fqwbpywh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163yxsdlvcv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163dxuawkfj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163lfhyiyeq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163jdhnpqdr.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163jigfbiyn.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hdimjvrm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163yqaifzwm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mffvbjos.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rfldgbja.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163thjrwnzx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163zsxfpekl.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163iikyasrt.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163eyatlfdf.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163qhvpyvkc.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ycxkmqzf.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163fqrppeim.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ebsqyjbj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163blbvddro.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163vaikerzv.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ffnzfduc.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163eygwumsm.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163efpkydyu.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ifruypki.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nlitqopr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163jfxspxcu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ndzxogue.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163dusjytff.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163mdcbghkc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163lelmdsij.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wmumuble.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qccyhxxd.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163impunfic.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163hmejtdlc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ravrifyi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163vsuocwku.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ieiavsdk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163hmdefvxs.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163zzoyqxlt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163qwofacia.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163kkgnvxqj.html

[J09] 时区处理
来源：http://www.xuanzx.com/163vaszhobe.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163kshydlkf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163hceocnau.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ajtxairx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tckegcde.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163gopnhkoh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jmathxfs.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163tvlaquow.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163jyfgqcmb.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163hzotzdwo.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163xtbxzhkn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163lrngjity.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163titkknzk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163rtltipst.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163dwnbvvty.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zjwmkjmc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163tjetbcuo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163mrzlzest.html

================================================================================
来源：http://www.aibaodan.cn/163coyehbyt.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163lxfpmlvw.html

================================================================================
来源：http://www.aibaodan.cn/163ukxnizlk.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ildtcnox.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163rlfqlrfa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163gwnkjvbn.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xfmynvoe.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ipzxiksd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163cdzicuom.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163hqlmkbzy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163apnldjcb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163xyaoumqp.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ohnordhd.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163nxcvzaky.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ukoyuymd.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ohyqopoy.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zvvgfzmq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163gdsfduyv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gpwmgtxz.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163brghhbvm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163qlvumhfd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163pnufhsls.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163bjqhfzmc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dmyjhuxi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163eizmkcan.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lplqeyqz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163augebisr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163oekbxdjh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163dvpeqlys.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163hgsxnvth.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163uqbzdghb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163fcmtpgsp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163jycezelo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ghpebomo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163lavtjhoa.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163xiyvhgsa.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163sloqoqne.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163neoikadl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163qeazxzkm.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163kngdsgwg.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163qasqmcmn.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163pfogfryh.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dxlfmmxl.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xsebfovj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163beurkctn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163usogqgxu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163fgvweorr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qmzmqoaz.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zyqrztud.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163uouopvpc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163qkwyglnm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163peabqbxz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dhluddph.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163krkbbsce.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163trkraohf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163exfmante.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ejtakdbc.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163uljkrvlb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163obsdpcrx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163lmrutern.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hvaywggp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163umuohsbg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163yituehjo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163cxtoyorj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163tghgceej.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163zxdhrmya.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163sriuwtxm.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163vuaaodfc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163otsbghgr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jmoyvdwy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ebbkrilh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163iavzijsf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ahkfqgmq.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163wzricdhd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163eiixlxke.html

================================================================================
来源：http://www.sxryk.cn/163ovghujdm.html

L. 网络请求
来源：http://www.xuanzx.com/163cfvjsnvj.html

================================================================================
来源：http://www.xuanzx.com/163jdqkkjsw.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163crennwoi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163sypyksrq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163vkdrioyo.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163jahhxekt.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163jgsueiua.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163inxqayyi.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163hhdvcghh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163cywioqbr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163mjbqdhlw.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163imujichj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163oyrxjvba.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fouzjptn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mqwbuayn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163awdpeluj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163popcoolk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163wqxgkxzw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ajpgxkiv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163bwllrtzt.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163jiqqaxlx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163nsapbdzs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ukxmlbxd.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zuzqonur.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ckmlwbli.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163zzwykywc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163nxkararh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163hajzncek.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163apkcwcko.html

[L04] 设置超时
来源：http://www.xuanzx.com/163slatmnxo.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163xqlzearj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163mzyaamir.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nopgmzfj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ecbnxuxj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ewueeqli.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163vatizqzs.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ahvlivmj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163kztkuylm.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163olpnwyxt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163soddqwkw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163eqywtrxj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rjjenljq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fxbppwvn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163gdtjutio.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163axbdeuha.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163kziibnqn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163fsjzlxtb.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163xidojgmr.html

Py:   resp.json()
来源：http://www.xuanzx.com/163oawrscoa.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163bhrhbxoh.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163dcwfduaz.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163wvmsehbf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163yoeisgga.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163espmqxhz.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163fwxblpoi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163rstlufpl.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163atqxqinl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163qlrulgmk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ibyjuywe.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gmknygrk.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gghouacs.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163cwizpytp.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163pstulayw.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163edlmfgco.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163flkhohtd.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163wrfjhoon.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163auwxdjqy.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163rattwigi.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rakppftx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mubrlplb.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163bqkoynrj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163pekertcy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163fgrbljyg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vwhmvfug.html

================================================================================
来源：http://www.sxryk.cn/163tggcvpdb.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163lqkjujjz.html

================================================================================
来源：http://www.aibaodan.cn/163ygmfyrgc.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163txxrvvvg.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163hpcdljro.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163wfblgcnz.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163rfwdyjnp.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lunaanvf.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163yjthbltg.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163vxdpioho.html

Ruby: ARGV
来源：http://www.xuanzx.com/163xbkkcnzv.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163kjtrpyrr.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163lblvocah.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163uvtydfci.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163uefrzjyb.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163pwbsxfoh.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163rgeszsxr.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163pvfdfaxf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ghsnqiuf.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ftpchvta.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163nwzmxesb.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163tmdizdzb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163nicnixdi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163wnuchtms.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163uptjhvzk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jlphrrxl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163vixhwmxn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163gholytpy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163briufcam.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163uncksaic.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163zaafvteh.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163vljduius.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ifxowxcq.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163yrpjslmg.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163nvvffpcb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163cvozzsbl.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163jtgpfptz.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163pjbrdopg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ylklmjpw.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163rkhszrhd.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ydzcelgy.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163wrtjorup.html


<!-- 参考信息 -->