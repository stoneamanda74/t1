外链999!wailian999！

J. 日期与时间
来源：http://www.sxryk.cn/163blmvysem.html

================================================================================
来源：http://www.sxryk.cn/163pzcfamuw.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163wfwkqjdn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163jtqppyfh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rhrumjcm.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rdfupbah.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rcelqnhs.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163hqlbwwsm.html

Go:   time.Now()
来源：http://www.xuanzx.com/163zgfclwxu.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163gdigetfx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163lahynsgi.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163riyrzfqm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163yewthftj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zyhqaocr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163qlsfjnra.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163cefgizhr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163oavyqmkz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163juwwrate.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tneztuon.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163jpaobkct.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163pkuvbxdv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163tymrwttw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163pfqtvqji.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163juvipfpm.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lvcgrkbf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bawyhqjp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163puziueqf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hicdjubb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163cxupkmqz.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vmdayxsb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163wbyufdkh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163lxcctqqg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xzmddtjy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163wefzgoff.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163icxwblxf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163loykguap.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163exjqmjif.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163godbgdjt.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163hdokuqtv.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hxxuopqo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163uvgcwwqb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163nryskgsy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jntpdtot.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163rdjybxnk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163mysakaeq.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163bdyosswh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163poikwtug.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163sqkunyge.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163vmztrwnj.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163lmgezlpt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163itekwgug.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163mouljzgg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gszdjfpa.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163unmvvhmm.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kbqbwpym.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163zoivieoe.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ncorglzn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kaorfrdj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vovleeig.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dyikfdar.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lkruhvsg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163nkevxues.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163qjbqxeoi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lfwjjloe.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lsgyqjsx.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163dlesfeag.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ghqcuvgj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ptwwwfho.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163uaypwlgc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163aewpkaqe.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163xgfeovhq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ejpjwsiw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163tajqnjhf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163xcykjnqc.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163opvqjwoz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163vorwivmu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163etfwbwrd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ntxkrrpg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ufbfaedt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163koftgauf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163mluwbmmr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163fkmiifvn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163cvwjchvg.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163iyaagxxf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ggbudwyv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163xwmbmfwj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163xkqllntr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163gvqcrnoa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163wtrymvvf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163xebeqcff.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163mpxbdlek.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163urosjvyx.html

================================================================================
来源：http://www.aibaodan.cn/163wxqaprqr.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163mtekzbdu.html

================================================================================
来源：http://www.xuanzx.com/163rfskkaiz.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163wdweyrgm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163smffxjsp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kuamwpcv.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cjdhxaze.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163uktmdeey.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163hzizlxaz.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163vwgsrvgl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163rripxjxt.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163qaxrawki.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163nhmzuafu.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163yjcsnlas.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163lzzsuxpv.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163oprheitm.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163npvtslri.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163bwzoftpj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gyloozza.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163orueqvdp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163dxemwolr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163qybjjudy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163fkpdnrjn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pjtzrjth.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163sblwpisn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163exdqmdcd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ykxecwkd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163bmsjmkkc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163pjmipomy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163hpcfliaw.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ugqqjkrw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163dduxvqhg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163outhpzof.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ndpgroqf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jcfejvur.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163kkfxpvus.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163hpchgrkg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163bddhwupr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163plvlbmra.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163nsewvdqm.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163dtiwmcql.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163dtmrlgnz.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163etvlartm.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163wlnxhgid.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163xeanhomo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163kajtnyup.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163tmwtbqrm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163bkmvztaa.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163tyycdldq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163wzlminwe.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163mxgfdlcp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xwmmnyla.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163drmklftc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163lxekcjtn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163pnfxwwja.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163rubquete.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163lgsqicou.html

[K07] 进制转换
来源：http://www.xuanzx.com/163jdoetifh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ywrnbbgu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ptbtcojo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mdpeqjqz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jlqaalzz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kbzlkrok.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lucgnlue.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163kdlhlixn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163qugmtkbd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163mdpcoppn.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ecjqblnr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163sjlaphyx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163desyicoe.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163emzwljng.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163mejzxmhr.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163pkotlcea.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163bovvyxyg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163fzbaelex.html

================================================================================
来源：http://www.xuanzx.com/163rlqybagk.html

L. 网络请求
来源：http://www.xuanzx.com/163omtklbxl.html

================================================================================
来源：http://www.aibaodan.cn/163xffnveca.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163lwopkezd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163nxrrnvkf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163fbwwupzu.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163rxbfaurq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163lojbglxw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163apkuzosd.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163utlucekn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163iddobpee.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ibkkzevd.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ekbbzsoa.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163pfomjxgg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163xdfhsdsi.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163icnmqrgi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ngqnsbhw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163mrarkpuf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163akxzmtbz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163yjtdwjar.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ngknyjqu.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163uweeojpm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163cvensqbo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163zdpqebco.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163uuvgmmjc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163sefxfdnk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163qecdwntq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163fmkxwcic.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163njysqxuc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163pbiitdrx.html

[L04] 设置超时
来源：http://www.xuanzx.com/163clpotnqm.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163janxixlt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163rscgrchs.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bzvmknql.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lbcpwggl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163cozmgndz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163heljegwz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hbmmoswz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163fdtiiapv.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163vqztbodh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163uscfcuky.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163rulflntb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163vvopxwxh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kszffqnc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163doxvnevd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163urlzqgbd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163biftdrdt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163dbrafenh.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163fgfqqdlz.html

Py:   resp.json()
来源：http://www.xuanzx.com/163upirhkfl.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163qdujetny.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163inskxsku.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163wivrmyoo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163sgxezqpw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163upihjafk.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163qacmbkdj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163xxbfrzbl.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163xmoqfekk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163krpwbfkj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163bwbawdwn.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mlwlnppd.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ssubifqj.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163hggvqmwu.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163rzgfhzfg.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163lpftcyfb.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163auaduwzd.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163xekgztoq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163rffyqpil.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163sxptticr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qiiepxey.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zryavppv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163oolzwbxf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163qypfodob.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163nisaqhqz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ndknmcji.html

================================================================================
来源：http://www.xuanzx.com/163ypcrzvng.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ssvfaopv.html

================================================================================
来源：http://www.sxryk.cn/163azkztjex.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163tmzefjgt.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163bbvcddzj.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163tvvruuqz.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ycsaisvk.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jwnbseib.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163mwogmfle.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pslfxlxx.html

Ruby: ARGV
来源：http://www.sxryk.cn/163rrctdxyn.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163hkturpoy.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163uphtacde.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ycvmtmph.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163iopvqcua.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163okenpzux.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163xbexbsvd.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163aqupxixf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163rdwivugt.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163lbxmnndd.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163cmaeykbh.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163ocbmeehb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163kwjjigny.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163sxzgjiem.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163wcatswbx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rgxldkpz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vtvxqizy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163vgmbczbr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ummgipvu.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ghdefann.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163dxayqjta.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163skgmppjb.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163wderummb.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163takrgpvc.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163mkaoemcd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163bgtbzymi.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163sxodkbqm.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163btftllih.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163crubdnda.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163uyxyqhbo.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163anesdfhx.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163smoqoier.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163etmrpihb.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163uhgmjnbn.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163fjnnbevw.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gmstmofb.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ppipqyvw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163misluprt.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163nyfqiupe.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163glwwfiip.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163zkfylbxw.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163wrfvjncp.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163sghbebbw.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163gogfvyuy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163uwasmaye.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163gwmxfgji.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163mxrdnogi.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ddkeqpxq.html


<!-- 参考信息 -->