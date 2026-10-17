外链999!wailian999！

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163timcjjfm.html

TS:   /error/gim
来源：http://www.xuanzx.com/163drtqivtr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ueustjpp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163pxipfvgh.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163veinqyxs.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163gxblqsis.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163wfyqxjcg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ynroxtmx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ydymjkgj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163rkdavqln.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vyytivdd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163vhztznzd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wpoalpmo.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163afegvrhn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163nbnuwifz.html

================================================================================
来源：http://www.sxryk.cn/163lndihcrt.html

J. 日期与时间
来源：http://www.sxryk.cn/163wwizycdx.html

================================================================================
来源：http://www.sxryk.cn/163jpbmrwmi.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163fmbsyaik.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ztchonub.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163itlfxavp.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ogejahgy.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163pumgiiix.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163uixedmtg.html

Go:   time.Now()
来源：http://www.sxryk.cn/163qgkssydz.html

Ruby: Time.now
来源：http://www.sxryk.cn/163gsbjhkiu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ilmetckf.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163bgqtrhsk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ayicqxyy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jiulbyxg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163aruvcexv.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163myxafrqp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ougywqpy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ebezzvna.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163meofdmer.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163hceitmmg.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163vdgbmzrk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163jrcfwmvv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ihiohfqr.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xvagogll.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mvasbcnh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163herxyiry.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163chkkzjbp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hfmvukla.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163xasgoook.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163nyuikbml.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163obcxbkeg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163nslklnef.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163somuhpmv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163cwdvhnmr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163uighbjue.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ccisabjf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163qmyzggio.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163qedmkspw.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163uahnxwzd.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163eimbjzgx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163cqevzkrg.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163yrhvkakn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163iadykvtt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163afacnrqq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wucpbqkz.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mnyhdzeq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ebgnkwgy.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163myuebskq.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163maarxqde.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163iqlxeqcw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163eiszsurw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163nfgpgdvp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163tourcrdo.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ryewcazg.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163fcollwrh.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163fjozofiy.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163lrfmwoxu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xrwyzycd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163mqmvpzap.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163kblkanbz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vyqjwlhl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163zhdyqcmr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163adeqrskc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163abrugiys.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bakuuujs.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163xvvnmkxz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163rmtcnlzy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163vwiyzmad.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163rbfddxgo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ggyqchvj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163cskjuxyw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163bqxyggrz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163sfwefzmz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ynuhxkyc.html

[J09] 时区处理
来源：http://www.xuanzx.com/163grxmewww.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163gmntaufl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163pumjjyff.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qseqoiqv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ycdugxcz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163spkmzgog.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163zmpavtwr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163mqmjnmww.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163vyrdvqsa.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dowzhpkp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163mkhmhnxd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163uqjzbvhi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ycfwxqcf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163wnrifqcl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163gzaaygxe.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163oktccpjo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163jtphhawr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163gkokhxbo.html

================================================================================
来源：http://www.sxryk.cn/163xkaejdka.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163sxfunqtj.html

================================================================================
来源：http://www.sxryk.cn/163ydxuoxhi.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ckhohgpo.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163rnqtufwd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qxguobgv.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163wrbzqziy.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ippzsouk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163sweisztn.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163rwkzbfsu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163nvzqmrtm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163fidojubk.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163wwpilykh.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163dhntqnaj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163kgulhzlp.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ngwqewoy.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163nbigxuhm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163mrwlsash.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163svgihqrn.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163qfywgnsl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163noaisxee.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ngswtcpb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163unthflac.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163tfabacfb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vlorcdcy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xifpfzwq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163xcxvlblm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163xkhrubuh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163porgjcuk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163nqlgndqp.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163hlkrjjui.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xoxswqyx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163qbajtfvf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xpqyaows.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cxedxtfl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163rvcomxgb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fuqjuzmu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xunssffh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163fgbmwuct.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163smzxamoj.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163nurpskpd.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163mkwtewtn.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163bqtvylzc.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xisqlwtm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163dasyvejt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163bmkupnqo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163tgjzltcc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163lsoacluz.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163rjagunwp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163zvudzxla.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163kmvkuqtn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ocwfyfor.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163oigekvhm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163fmicgdaz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163voxtbupf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163fwvyrzui.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163htlkingz.html

[K07] 进制转换
来源：http://www.sxryk.cn/163fzeahuny.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163hebznxiv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163upyxhbym.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163easwkxoz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wkgqgwcd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163elwwrbke.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163yevuxfck.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163aukireru.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kuriwodi.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163omeyycut.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163djujlwao.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163qauxxwmh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qmmdmzhe.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163uxxiinnb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163uvfjlefk.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163nuqgvuvt.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163tttufgqy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163zuafgvvo.html

================================================================================
来源：http://www.aibaodan.cn/163ofocvmhq.html

L. 网络请求
来源：http://www.xuanzx.com/163ratpbjhu.html

================================================================================
来源：http://www.aibaodan.cn/163ufeqabsg.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163oqopmmif.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163njknpcsf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163emymkami.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163slrhcxnq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163nknnamfv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163aiydvnfr.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163jzulfvyc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163tosivbtl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ufdsuhxj.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163zmlacnsm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163jfntmqnx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163evsnvvsp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163awwoirth.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bwwkcztd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163dzqtgrza.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163kddszcky.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163imrqymfd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163mhvsiloc.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163pnwpjgts.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163jpumcerm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163pwsyntrx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163siagokmr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vjkyjgdf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163dbmnlhro.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163jtdyzbyk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163cjcmzlka.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163admdgdvc.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ttyegjhw.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163xrwfatee.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163yhdmwucp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ddjanhwx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ysduiqoi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ddbiyslu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163rueidlpe.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163mgnsrqhw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163jgdnkteg.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163skunqkzw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ernsnpap.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163hrrqyrhm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163pfzdqehq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hoyqhpcv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163soqchczf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163dplqyelf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ydmkwhqk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163sqregznc.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ntnwpgmf.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163xzgngyun.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163iyolwrqj.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163koblkupm.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163xksvhuhu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163spyjposj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163jozkusbo.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163capyiesk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163bhmthdtk.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163romsmyqc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xbxczapp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163wdesqwjn.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lwnblakm.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163syxiwgzo.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qeaatygg.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163tcmudqwv.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163bkoqzlsn.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163hijyizwd.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163bgxyphpm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163hwvxqqkl.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163mziqeqpn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nojyfupd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vjoadoyo.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163asumsjsa.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163rvfbpvuj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163rnhybbfe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gjjypnej.html

================================================================================
来源：http://www.aibaodan.cn/163bqfauytx.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163lkfwwfel.html

================================================================================
来源：http://www.xuanzx.com/163qqnpljgv.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163idutohkv.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163utchehnu.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gdcpaydj.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ocnilisv.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qsnkuqbl.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ggivtssu.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163kmlknsre.html

Ruby: ARGV
来源：http://www.xuanzx.com/163uyucehsq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163iznuxvgb.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163cxyoqjrw.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163xmosurmj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163gwmvtgym.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163qdbpaqwh.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163jwhxgbuc.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163adwwnvdg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163uttmamvr.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zpmcfrgy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163nebbmmrk.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163plskywac.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163hsubqhms.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163alzzmqvh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vjjmkano.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163nquzodas.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163nvhylecz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163dvbtoifs.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163mqdufmct.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163kndidaha.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163rgromytt.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163hrkwiqcg.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163uyjjxxrl.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163qhpoadtl.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163wfmbcyvi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163uwyqeccm.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163uuplcctn.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163nmoxhejt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163cqkbgsub.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ufbpudgw.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163qnxitlse.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163gqtoxthg.html


<!-- 参考信息 -->