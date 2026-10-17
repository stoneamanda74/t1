外链999!wailian999！

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mcqnpmtm.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pvfzhtod.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163chhqluok.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163nqhqzjuh.html

Go:   time.Now()
来源：http://www.sxryk.cn/163eypguctq.html

Ruby: Time.now
来源：http://www.sxryk.cn/163rybftifi.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ixvauweo.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163uhijvcgc.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dghvdpqe.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163umnydotl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163piyvusol.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163dfckdbbq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163dxtddmox.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163sjidmfek.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163oxmtnobl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163eflgqcgr.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163fifxsqrt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ovqgegpr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163dpsypord.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hclbagpg.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tztasrvl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163fuidvwmx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163fwrqvspf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163gheueyge.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163tmfjzlds.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163gpbpmdyw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163muufwbsq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163xnxlgxzm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163dpaemkcq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163wqoprhxw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163akkoafla.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163iytcdfuc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163nkrtlasq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163nojkrcrv.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163wytwvatj.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163vugrmmht.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163bjgxfhwl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163nlpvxewd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kvwfsgni.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163brgoewoc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163mudrxygj.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163mjijpgff.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163jlyvyigd.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163iawhaand.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163cczwdnyn.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163jphsrcst.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163tayvmjww.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163pfhjzkbz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163uvdmvuez.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ihauvlzv.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163oibzrdhr.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163jalhdvob.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ysgbxfpo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163taynwtya.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163vsswmscp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rzxoxxsm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163sfjpknlh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163fzfwcoog.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163llvrtvke.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ihzlbccm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163caouqezs.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163lrnbfqgb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163qhaaqdej.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163fqhybjzj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163uxkvdgqn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163xflfhski.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163tksgqonw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163yyotdild.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ajyzflyd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163lcrosbcd.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ioslwzcp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163rxwkoqoj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163dkrtfesh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qitaeuhd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163javgttnl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163usxjftpk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163rirtpdsy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163vwvsocxx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163tmcyzvbd.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163vscvspyb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163gecvxgiq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163capggbzi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ejbcsppe.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ebrbmmeh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163rxywugmt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163dumdytmy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163xqdrnobn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163dohacaom.html

================================================================================
来源：http://www.aibaodan.cn/163vvsmrfgz.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ssnoexcy.html

================================================================================
来源：http://www.aibaodan.cn/163wsyaryxs.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163jsryjlfv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jhpwbvnb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163otuuinpi.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163agnxqgld.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qmyzwhvt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163fajfaotd.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163rehzxmnh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163swnxnnif.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163xkkngwan.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163xwsbykng.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163evytiitr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163gfklawxv.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163qzjhehav.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163igxygnmg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163znwjaanp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163sijyhgep.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163yycgwmit.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163togsptvz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163iacsbceo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163cqircken.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163epyecmni.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163pqndeiac.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jdasvsfb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163munclczk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163jgdetesi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163yhtkzavm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163poopmdqg.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163dquvfsrj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163xtiqorwi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163kghzpigg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tygvyxfb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ydnsusll.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163roabfbtg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163msmthfvx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163lqqbpqwm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163cbivobhc.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163xuaytqtp.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163xdgbhciz.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163pvtpgpyp.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ikljrsfu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ezxghyov.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163bhmwhjha.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163hfrzkivq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163zuvrezar.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qxjppyso.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163yxqqsuzc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163yzjwufop.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163odalpdjc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163poknylgk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fqwdbvdx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163cuymoben.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163wfgxwjuf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163gepzytxf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163gmbxzwxr.html

[K07] 进制转换
来源：http://www.xuanzx.com/163qfnvxfys.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163cvyjszgo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163jqptfdyh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163onfqpkey.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hbfqzkju.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163attvxton.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163nizcqbyp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163fihzulff.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163skdpptec.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163jlpdrbup.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163kqwpneim.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163zrddaxvz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ednqwlyk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pvuoyejh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163zlicfcxh.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163wogfarvb.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163dbflyczp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ujkikwrw.html

================================================================================
来源：http://www.aibaodan.cn/163fdndhyzt.html

L. 网络请求
来源：http://www.sxryk.cn/163gqwqhhrd.html

================================================================================
来源：http://www.xuanzx.com/163ufmjcmpg.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163yvoxbsvp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163yvnqlpxw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163nvgyosij.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163hxcemkci.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163wcecevrm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163efmgncii.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163xdrlqhtz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163lsvgmkyw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163xfndaqkq.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163icbhkxan.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163nrrchmgv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163xqyjnayz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jwszxvcv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163iellxkoc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163jjkipcmv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ltcqdpby.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163gfxlbijq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163qgvnjhxg.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163rtjqxoym.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163sgphvtaz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ffbxpels.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163upcafene.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163empqewdv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163duscobsg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163cffvuzqa.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163jjqpyrqo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ohqmfazg.html

[L04] 设置超时
来源：http://www.sxryk.cn/163xudughbz.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163wuyyutqc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163uktmunzf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cbxpwzqe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qbqqbbbm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163nvgkgcoj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163oaazfxpl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163mcklsgdv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163qouixhbn.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163rxirurvs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163kifxzyox.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163vmudqlcc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vaytuklq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rcwbslvy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163pxznsoox.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163tbgiwilc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ovrnwcqm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163vgsjczix.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163mnupvowo.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163zfojrmwp.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163auctiekx.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ymdkjhuy.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163wfsxibvc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163hpijrhpe.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163hvcukknz.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163yowegjuu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163cnfmkkno.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163nyijffkj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163yivrsdst.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163wpwmzrjr.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163llkhuiez.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bjxiptsv.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ajnirmst.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163lvwyohmj.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163mdydcqyh.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163qpxsqjdi.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163niojfmnc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163pszpmylm.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163jdjevnth.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163onbaixqe.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163isisyjrh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ipvfpdjo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163knwkwjyn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163rasanahg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163xrzmcocs.html

================================================================================
来源：http://www.sxryk.cn/163jyhwtlhk.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163qfdoojgo.html

================================================================================
来源：http://www.aibaodan.cn/163tprzicrq.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163fonjzgmy.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163esvlrtxi.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ugtkulsx.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163iapfumho.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lobvfbvf.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163eawmnztc.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ksxdpymq.html

Ruby: ARGV
来源：http://www.xuanzx.com/163wphltivq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mnzcaocn.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163yyrkehgu.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163rwkpxssj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163tolbyxyo.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163mtblapuf.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163tjgaphti.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163rtjpaqnk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163yjvyxvap.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163eozcnrrt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163miazsaqt.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163epchrmky.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ursgxbzt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163lhlcystr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dpiyewbk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qdlfyjqx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163dymvacxt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163skbgvxro.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163jbgaoxuh.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163rpknarqv.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163qhjdjllr.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ermwrdhq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163dwsmmeuk.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163nyubqrxs.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163gabqifwp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163pvmpzbct.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163xrwpkfaf.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163zbnkukib.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ucqpujmy.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163tdvolcxt.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ypfzxbol.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ttgnuahy.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163dzewihwb.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ciltybbw.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ftenuraj.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163mgojcamz.html

Ruby: exit 1
来源：http://www.xuanzx.com/163qfgwwdmm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163zohgyyet.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163jagdawtw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163gtvunbiw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163fbtqrubt.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163egjsrzzo.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163fkxiuyxl.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163nefnjzkc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163wibwvdfk.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ddjttfoj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163afxkdpoj.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vbcoykgs.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163zumjzkzp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163hddgczii.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163orornozj.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163apymtycq.html


<!-- 参考信息 -->