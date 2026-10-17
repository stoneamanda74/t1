外链999!wailian999！

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163kooygkmm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ogtjadmz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bqyfslbj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163hfwgidtj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163htcvofsn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163bmolkxql.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163gyztvuzl.html

================================================================================
来源：http://www.xuanzx.com/163ooaokeze.html

J. 日期与时间
来源：http://www.sxryk.cn/163cocgcppk.html

================================================================================
来源：http://www.xuanzx.com/163cxjmikyq.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163holukjwc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163tkcbbahw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163yawwfwje.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163xmjuceeu.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bzurqzvb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163zkwibjdo.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163hfvoglbv.html

Ruby: Time.now
来源：http://www.sxryk.cn/163fjrdbjsf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163utrmmudr.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163hvzeysfz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163eflhqmay.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jlckhomc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163axjoaxdi.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163crqjimyo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163twjdjqzi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163uozlhgiw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zxmpkqcr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163iasioysm.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163bmdoqwfj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zyximqxf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163opdcbssx.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tvtgbxwq.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hhyqbtbj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163kmxdlkta.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163vrfzrcqs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163kgyiqnzj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163sahmkouv.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163moojdoun.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163rnrkvrfk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ibgfudkq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163lgaitqzw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163tzhspxtv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163cpshnytp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163hdeblgym.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163sijqndlu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163betpccbe.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163xuiawqpq.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163gzhxsonn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163veznfvxl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gwajfhrm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163dabafbsr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163yijwhxem.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163zsnbdtzw.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163kmbsnvin.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163twqazfri.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163rdyonpty.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163zgnbmthq.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163pqaglvwz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163mrrlktqr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ywdguljh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163mcxzltij.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163uyidiguw.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163rambmmcz.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ggmszxpw.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163swnzkruz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bgmmxtzc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163rbvghtok.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zzcqdtxm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ntlhnmxz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163tdnrvysi.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163htcohtgn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rtvddzcq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hoxfvbkd.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163zrhbtyui.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163huihbkrh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163jmcizakm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163vhkzmenv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163czraajlo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163pmhvjarv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163tjiqxcvh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163oyefykqt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163gzcmyhjp.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163nbqhilvi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163pxrwmhwb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163vpqwekcg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ayqcreog.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vmrlhcvu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163igdlykxe.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163qldsabvg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163gappnxgr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163azpkzqpi.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163nxmzoucy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163lcsyoxlr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163prgzqgyq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163huoxfgjq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163zybmemdi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163nbfofnzx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163qmfnhttg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163rrlmionz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163pecwaagl.html

================================================================================
来源：http://www.xuanzx.com/163apvkjrdi.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163brfugday.html

================================================================================
来源：http://www.xuanzx.com/163jjuuihsq.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163cbzqruwi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163szmmtezo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ydduxnow.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163sqtcsjax.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163btzmbxbk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163nfeqxhjg.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163zimfoszy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163uawssvkg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163jkiumrhv.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163txsaruif.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163prafzcvj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163rbajnxep.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163adrswivl.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163cuqshfag.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163zvlgivdr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yiayobpc.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163fuqwvtxp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163uhnaqrbr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163mithbmfu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163bejmgdox.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163gbebskox.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163sitknusz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jizbjwsa.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163gvottgob.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163akpxauxj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163maaftrdr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163jefjtrjx.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ndzddlnx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163glehzses.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ypeqzzob.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163khgzlgwy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163dumxkswq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163saqxswzd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163blcbtqig.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163xqutbexz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ibojsebh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163gaqgysaf.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163woqhiaxz.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163dptoakde.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163icogrhts.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163yctujbwv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163vfpnwvwo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163avtdktxc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163qifapvsz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163bjrqmhgg.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163josgzfix.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163vxrmblyz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163pxwcqbmo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ktqddawc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163sespmowk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163kmqgoeam.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163kzxjemde.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163gtubmder.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163zyygabld.html

[K07] 进制转换
来源：http://www.xuanzx.com/163smnnsltj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163kdjrykvb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163dmswpimk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163daepxhfb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ypyfepxk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lkjguygi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163laskqbgp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163sggnewjl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163atgngtgj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163nnzgogsg.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163dvripmpn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163rwrjtoir.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rbcuizdz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163swmekedz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163iefcincr.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163afyndplc.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163skorsbol.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bwazamyg.html

================================================================================
来源：http://www.xuanzx.com/163ymnppcnw.html

L. 网络请求
来源：http://www.aibaodan.cn/163ctqvrnsh.html

================================================================================
来源：http://www.sxryk.cn/163vcqbodcm.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163razetkbt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163qjkkohuj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163jxuxuezi.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163lyrbsmcy.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ndctbuaz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163rrmvnldb.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163xgyyzxtm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163jbumzkjr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163aflkkppr.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163epaxcxrf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ykvbbyzj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163tsqasqzh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zotooepr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dngllqna.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163zbubhlqr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ieetcmke.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163apsrrmsc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163zpuudagn.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163xvtobwrw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163wjcoyjdj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jmfguzog.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jyqtorae.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163wleuujly.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163fqybjygb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163mhzoxyux.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163aczveaqz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163jpbygpmh.html

[L04] 设置超时
来源：http://www.sxryk.cn/163dxdxfaro.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rbnsiodo.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163mkfquqqq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jcaasagy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xxrpujio.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163onqqfvfi.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163crhogexy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163szgdwyke.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ywvhvqwr.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163nykzqzsj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163dodjkxqz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163uiplkmiu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kxocafhr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163snmkfxlk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163recemrzm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163vsgcqard.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163vgrydvjv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163xcasqszl.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163btezhfqb.html

Py:   resp.json()
来源：http://www.xuanzx.com/163mihsisdn.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163nrgzuslh.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163hytcdjoj.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163fdymyyml.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163nawbxgja.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163jicksujk.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163wlxotiqq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163lbfeueuj.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163kjnhwvzy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163bjbhrzlc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163rsytgtyf.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cphrfruw.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163prubekno.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163vqeqllmp.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163gclngzrz.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163mxlsowkf.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163zexhrjli.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163zvxkgcnw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163kndrqxkj.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163zvtzhugt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163chlqpaam.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ycjcelkm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163qfoqnrln.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ebjftxhc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163gwuhxitq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163oeeahgmp.html

================================================================================
来源：http://www.sxryk.cn/163yjogimqd.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163nvldlvas.html

================================================================================
来源：http://www.aibaodan.cn/163czmxaqip.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ecqpfngl.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ipeaziww.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163vplnknwf.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163hqxglbsr.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zdtfvjdo.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163vhbalcsp.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pdqbkgar.html

Ruby: ARGV
来源：http://www.sxryk.cn/163tizemzur.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163peoahfrt.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163zfojdkwn.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163jlmyccek.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163iaokywfj.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163oxildzme.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163mkgqqhxl.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163seksnlkq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163cdewdcbm.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163drjrmbzu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163pjjythnt.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ynnchwwd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163kzmwfgru.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163zvebrtwz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ecjlnmeg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163pwrixfdd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ureekmax.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163qlhwwsrx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163abtmilrc.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163nivjumyu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163eybtsadm.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163yxdwogjj.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163venmkfnn.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163rqzvgquo.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163adxmdcoa.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ptmunnum.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ehfzinjy.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163dotwjvld.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163lctsrdcv.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163vklwhoaj.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163kutvxvso.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163mvxmvfwg.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163mehtftjg.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163kcbbjeqr.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163gjuefbzg.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163zbnakdzh.html

Ruby: exit 1
来源：http://www.sxryk.cn/163exkvcgvx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163zkmzruul.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163bmsigtxa.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hrqzyoaw.html


<!-- 参考信息 -->