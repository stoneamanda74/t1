外链999!wailian999！

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163nqujhhrk.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163jwncwesj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163lhxwsrig.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163dequqmdp.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163rnpjwlzz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163qyavepze.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163frrhtpts.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163swbpfwcd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rbansydz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ptsfcjvv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dsfbfybg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163mpvgbpbt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ydkhckpk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163hvarlfyi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163rapxaeia.html

================================================================================
来源：http://www.aibaodan.cn/163sbmlxmsr.html

J. 日期与时间
来源：http://www.sxryk.cn/163vblbdhno.html

================================================================================
来源：http://www.sxryk.cn/163jvafbtse.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163vkqigtyk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163uodibuuz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hzasnoxe.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wrybcamw.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wvghledx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ezjmdoto.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ermkpddo.html

Ruby: Time.now
来源：http://www.sxryk.cn/163sdqwadzh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163fqvwvtws.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ohtbfged.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mexunvfl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163oxpbkmdq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163eufujbkk.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163qkhxhmtf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163tdhxfxnx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163pvvxpdqg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163taqrarot.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163spxwjqcb.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163acgompro.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163vtmoscba.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163mlbzdfas.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163pktfawdu.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bxzsxrlp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163oitgnpyp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163wpjgcgjc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163farttnbh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163tmidkrip.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ofksjihw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163nxqxrvsn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163yebuofxu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163eaxjnkkx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163bccgluem.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163apwkpone.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163btwycims.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163eelkepsg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163eqfyplru.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163pytyqwur.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163hwxnyyvn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163htpkqtgw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163bcmadkep.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wkxuejza.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163lyrfersq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163kclgdwue.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163pntizoiv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163bgkjxvvz.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163wlhjmosx.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163gszevtyk.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163okmhirjj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163hdzgzueu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163aipunqme.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163fvqjonqx.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163eyjzidyd.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163uqmwuhkf.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163cmcdzowu.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163xeasvowv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yrngioma.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163yabqpkpm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163byebaojp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163imlwwjol.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ovvtovsu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ahholygp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163arqxjiab.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jtwlxdro.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163uyxvyets.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163gdohcokv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163uswlqyqg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163bopyixeh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163axfklnfa.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163xgyxvrwm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163etgqqzrg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163jhrdxblb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163bdlbfmuu.html

[J09] 时区处理
来源：http://www.sxryk.cn/163pybycbyd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163viahyhif.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163lthvsysw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qwkedrts.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163cjpoevek.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163mhenyalo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163xanyqhzf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163lnorpqen.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163megcikbg.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xitiziak.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ooejabms.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163rlzlakeu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163gicexavt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163lrajyopz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163gkrlpqfi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163wpxhyvtd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163wqnejbmx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163oueyilyv.html

================================================================================
来源：http://www.sxryk.cn/163gyyztwwp.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163pdafhyzt.html

================================================================================
来源：http://www.sxryk.cn/163kembmwrm.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163yxpgppux.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jkiqdmgy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163unygmzhp.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wbwsojgr.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hqayfsco.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163kqmfqbma.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163xdtkgibc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163oicewkis.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163zvtsxwqn.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163uvxsmpqm.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163qeofgdft.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163hogopjqv.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yehrezhx.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lesudmtx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ixhootch.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163okryrqxo.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163egrkkbht.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163fxhixagu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163lozgapbb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163xqwtgqqm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163klifzlwf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163cfinooqp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163uszhqgtg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163hdskxjso.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163icrvzwyb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163teotjqok.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163vtqycrpq.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ceyxveqp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163jfxsxfwm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163rmubftbw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163scrlyheq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163yyjynzvu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163jyyzkzln.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163tgqpkgng.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163dwasnpxx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163zukuvbaa.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163fznbqauw.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163eknzajar.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163xzwtfwgv.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163uabqlkte.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163szbwqghg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163yzrdbzzm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163vxqkeptp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163smjlwdpy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163upuhrjvn.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163kqfutcux.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163eafqfaon.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163cqhxunwg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zbpqtprc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ooztkwkt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163jxriqwle.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163iveobpig.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163dtbxoqar.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ljsqtmwo.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163axyynuzb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163cdhbcttq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163jxwnfigh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qmrnhjfo.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yphkytbk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163bogmdoso.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163mixzpqcd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163jeeoaoeg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163zetssllj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163cvpsksiy.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163fanyfoxv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163izzvfngt.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wjfcgouz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163abnnmmuv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163lhmxbugc.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163vhqiahlj.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163qdnfmwsb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163dytgiqyf.html

================================================================================
来源：http://www.sxryk.cn/163fvshogzl.html

L. 网络请求
来源：http://www.sxryk.cn/163cquzbqes.html

================================================================================
来源：http://www.sxryk.cn/163jtigbcll.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ukhipmgu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163plpavfcr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163qauwwhuj.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163gzpwircc.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ltjlpbvx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163nrznyvhx.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163nmepywxo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163mqkfcuej.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ckvayeez.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163evnmzxea.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163iosnffsh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163qzejcous.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bwafrvxo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wxwetmuf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163yoxvjxre.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163vyrgxzfn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163fxhggrfw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163wtxpoyfn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163iadejsmy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163witnlyyr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163jnyfswni.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163stthmcxl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163pmfqajnc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163fastpozo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163jvdpseqp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163tqmnknfq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163mxrwezpj.html

[L04] 设置超时
来源：http://www.xuanzx.com/163apceffqt.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163zcdyvrrp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163hqhljqsk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163fedmauiu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yvrpqkis.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163nukqviqq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163fhcfydin.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163qqgsqmfv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ehkjspeu.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163wwtydyho.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163nktoqhuy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163emmbkysk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hvtuadny.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163monllnxy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163lpyihyqe.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163dacvfooc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163zsdgject.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163xrhhsxxm.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163mjmrddgh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163atrikzge.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163hgfgrzaq.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163bensehft.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163uqybgwsm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163nnpmkktz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ignujedd.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163rmitsova.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163igrpgcyz.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163blihdwhj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163huaszuqv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163enlwlzvn.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ssqtmcpp.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163pmgpciak.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163isyvexzk.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163iqxyhwjq.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163phwjugqu.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xcclgvjj.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163rqwdrtum.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163fywnyidt.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163aawxgldx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163smlcaprw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cjiihxnd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163jobjxtsd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163krpaaaot.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163owigojff.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163iorbrvzv.html

================================================================================
来源：http://www.aibaodan.cn/163vdjovqvy.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163kydvxpmg.html

================================================================================
来源：http://www.aibaodan.cn/163tpqiafxd.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163oomnuhxy.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163tpmyjqiu.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163mupujmcs.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163krlytfgs.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mygoxhjj.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163axdslfbd.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163gteqolkm.html

Ruby: ARGV
来源：http://www.sxryk.cn/163bhehwaby.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163sxsblpvi.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163zrufccfh.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rtiojtob.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163lrwjgueq.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163hoytipxt.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163okxlbmbp.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ccyqniwv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163zdnlxqep.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163gltsiict.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163zfehhxmu.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163uzwlfxrh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ftdegcga.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163rtutcrpd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163plpkntcb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bcsubwhu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163xqwcqbcr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163cohswepw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163emufcteg.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163kfpidvxz.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163kxfxstll.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163emzlnmmi.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mywadrwr.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163zwzzdxzu.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ueztepog.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163pdxhtfcl.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ennfoydc.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163zaxfdbit.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163xezqgdbl.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163bdffmgbz.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163bpbwuouf.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163fnbmhdfo.html


<!-- 参考信息 -->