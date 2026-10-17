外链999!wailian999！

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163rgukdxai.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163pdkxhnpg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163pspbdzvl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kumrbxvc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163jlgqdixa.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163nrwzoutn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163agbrzqjz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163bjpwojzm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ophjsfcb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163jfgitubk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163nyhnxxgj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163xvomkcgk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163iuykmolb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163dbsryycm.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ugrpgvsi.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163bqiumlut.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163inwpvjan.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163nwbedbcv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gocygsmu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163xlbferda.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tpwefszi.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ysmfwrbd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163jepiviwi.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163aacmlnug.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163fhqilxdd.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163psdkipyc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163sjchbvvo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163auutpcqk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163raycaunn.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163nqrotbif.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163bnaixtuk.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163vaayidyv.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163cxtuwpdt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jnwkseqr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163wprxeirm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lwjhbyyb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vdkszdim.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163jxtesxoq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ozslhgmg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cyrmdxkb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kseeyfmp.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163itokgyvj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163vnbtwmqb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ohtshgeb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163mfutgkud.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163kcvwkpsq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163owxzspso.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163cehnzsbl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163akfddlyc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163kosoredl.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163joygrtnd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163kdjnmbbl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ypvzfrzm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163grwurexk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163okjlhsag.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163mvwnavso.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163oijzyloy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ixtfuzdh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163icixowpo.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ofxlgufu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163kepctkzo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163jyvcipmb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163zjojtmlq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163gyjzzrpt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163udzzmjyn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163euywsmsi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163godgpypm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163yvddeqjw.html

================================================================================
来源：http://www.aibaodan.cn/163rlrhpxvr.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kafajanp.html

================================================================================
来源：http://www.xuanzx.com/163pamuqweq.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ryphvclr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hkiizsxq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163stzgmomc.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jrlmsizj.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lebhpdvj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163xlkxxubc.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ykzapyin.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ytkqxjka.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163kpknfbvn.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ymvdniim.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163kqnisldn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163vnkehgod.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hxdeimdc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gduoftem.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163inbkuaux.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zafsqawm.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163tgxgavds.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163oqdmflwa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163pumangtx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163nhjdbbsn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bgbjdsro.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wizufcgg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163dhkwytyb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ufmxbwcn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163vjgivpsx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163oanraafy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163caoqcuws.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163gveixjna.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163gyeyfbhk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ymxnewvh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163icljqfsd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qhdjharq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163bavfxmqw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163eajznlbe.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163cpgspzjh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163xormmgcu.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163mweowlke.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163xnpsccpo.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163agxunawc.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163sywcimfl.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163akpiqzmt.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163xfzgiavv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163qpudaemh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163gtkmdwpt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nyovyivx.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163nphqkhbu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163sshxvlqt.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163hwfqojzb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bimuuixj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163trhhnwdg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163pwmnkhqz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163jznszstz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163qipgcfug.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ilghoajl.html

[K07] 进制转换
来源：http://www.xuanzx.com/163pkmkrcpj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163sjblkvtd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163dnxodiap.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ckncmtyn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vdfbuohk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kymfuofp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163qmzansun.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163iijkpjgd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163pgyafahe.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163efqamuca.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163bhxdjvbs.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163fmcgfgfs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163oydtqiqq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163yrerrnhm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163lfypsrxx.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163uqzneklo.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163mixqsbcd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163kewrurbz.html

================================================================================
来源：http://www.aibaodan.cn/163krtewivs.html

L. 网络请求
来源：http://www.sxryk.cn/163eoygjpli.html

================================================================================
来源：http://www.xuanzx.com/163zisdaybj.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ynabzyiw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163sncowlwd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163meyfnyge.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163vthnttpk.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163qkfztxin.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163vwzpvhnd.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163jlxpmzvi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163wfzrvhmc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163mwgzkxmz.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ypvmrlku.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163cvqdvivk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163oywyofej.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163aqibztqp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xqgjxlje.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163xpskwuye.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163siiqwfrm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163lkttocoz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163pwltcdoa.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163bxxqmdbv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163dvennscd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163gxjlavtz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dfcvucwr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dvioogqd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163jhpzpars.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163uuubsgke.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ywposmfx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ouoopyga.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kxdhzhet.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163yacwrdww.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163iivhtrgd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nzmjkjqq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nenwkjyx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163rnswbtbv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163diuqxjkf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ahtxnden.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163pgohvdzp.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163cdnblawm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163phnhlrzm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bgjgqgbl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163bjdmoeom.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xocrostl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163mefecirm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163wyvcombk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xsrkepmm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163govxeduh.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163glxdyrze.html

Py:   resp.json()
来源：http://www.xuanzx.com/163mozgvysq.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163amgxikvh.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163bqsdkcsq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163kfbeskfo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163pujjcsej.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163bsdgiinm.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163lwqxcljl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163neziibwv.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163rozhtpey.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163wagunrau.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163hyhvnuer.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vtxpqcvp.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ykzxcshs.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163jgffdcym.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163dejagiwq.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ebcgvrow.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ilnhiodk.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163zwmhpyrf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ndexoifr.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163nzrhermu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mtdnpoac.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cnpjhvjt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163hzxwwzoo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163wyzwhnry.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163awxgrrkw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xquiubru.html

================================================================================
来源：http://www.xuanzx.com/163esdxoazo.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163cxyicaxq.html

================================================================================
来源：http://www.xuanzx.com/163zsnoipys.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163dwoazsnd.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163kfhrsflm.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ejwtvnpw.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hzdzdkok.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163uuhhbflg.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163gbrfsdpi.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163cperddgk.html

Ruby: ARGV
来源：http://www.sxryk.cn/163mfgoomto.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ufmjladf.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ctyuimve.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163jwjljcic.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163elaflfwj.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163vmladote.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163gdvvucqq.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163rpiwioeh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163xvyjfluu.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163nrbepqib.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163sgbwjbxu.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163vvthijjr.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ivkxjlsv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163hlfaolna.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163fvvdtakg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163slyryrvv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ejiskpkw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163fznngpzp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163blnkhrey.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163zanemsqz.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163wleucegd.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163oqnyhkqr.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163honoyeqc.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163sngbbxhd.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163byptqwhm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163mmjtostz.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163hbspclwq.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163zfompldo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wkrhnyra.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163mujgngug.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163yzbufjdr.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163wrxkkaay.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163kdwahdoa.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163fhcergtu.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163zrrkowlu.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163symfmrwe.html

Ruby: exit 1
来源：http://www.xuanzx.com/163arrvyilo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163dimtegri.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ypbvomfn.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163putimbdt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163mynahrtl.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163bjpfblbe.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163xrbepeyr.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163mmegpulp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163khsopyct.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163tusrmxdx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163zwemuivs.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163lhlojvkv.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163xeatcphi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163earqryfi.html

JS:   require.main === module
来源：http://www.xuanzx.com/163pbcsvmyo.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163iimilmhh.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163lywtxjbr.html

Go:   func main()
来源：http://www.aibaodan.cn/163lftdwgjm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ewyvhjsz.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163sircrzaq.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163fnpoxact.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163qvbradrx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163whxwjesh.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163kkjqkywh.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163nqnvjuva.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163qlndjkjm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163dbvlcbzi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ycbkopol.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163bqpjjint.html

================================================================================
来源：http://www.sxryk.cn/163tmikirdf.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163nxzhxqnl.html

================================================================================
来源：http://www.xuanzx.com/163zpvfauag.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163iehslaiy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163yekydpnj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163gcolxmjk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163bxaekule.html


<!-- 参考信息 -->