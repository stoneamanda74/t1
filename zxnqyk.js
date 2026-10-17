外链999!wailian999！

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163uequlilp.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163nhdnbmaq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163jtbficpo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163xfhpjonm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163vlpogsag.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163spovllrh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jkwkxhyp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163fbzbwapg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163nftwgedz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163jkfmeocq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163qhtgauqu.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163yisyvidn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163gwcjsudm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163oftkwqzb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wesakwma.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163kjsqzobn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163qbtoljyl.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163cdznerfe.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163bmyxsbxk.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zfwcvmoi.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163myozhdik.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163cgshceic.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163lrspssfa.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163xyprocpg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163zjnbqgea.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163orhnwezh.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163nbcedznq.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163drpsviwa.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163kbnhdjou.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sahljfds.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163olddbhqz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ngbmkafq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163autqccrg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163krstpspq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ujmcypda.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163megmfbli.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163twfdojhz.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163pawbcdqk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163rbovmted.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163qxhkjpfu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163gasvkmfl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163rtgoakfz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ojwwjirb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163almscxtw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163bipeonbj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163vkykrexp.html

[J09] 时区处理
来源：http://www.sxryk.cn/163cmznqcyr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163nalkqahe.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163gbwzwzmg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hhdcbuwm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163aaxtkeiv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163cadrwnwa.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jozfwcua.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163aqctzknq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ewaevjje.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163pdacweoc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163sqmbnomu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163bxxbcamk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163pqmwdssd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163dygvwpsv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163orhuehug.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163kznfcikh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163jqbijtfh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163kxdnypcp.html

================================================================================
来源：http://www.sxryk.cn/163gtdcnlrx.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163gnjmcwxi.html

================================================================================
来源：http://www.sxryk.cn/163qsqknosm.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163cpquqggi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ecyvtbqp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163yrzmlsvu.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163edxlwlxb.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163gvcpubyp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163tvgltfwi.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163hyrenebt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163nstgowtr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163eqcyycho.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163beiapkut.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163bznnwebz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ixkywtqc.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163abjxurkj.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163beaynpjb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ghpstbpo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163rsnywtil.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163pejpqwcw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163sdrtooge.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163otshweaf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163yxpkneai.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163avhvanec.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kvtffqqv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ztbdqsav.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163kklxvzek.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163sbpjplkn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ikdhtsox.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163bpnwxhym.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163zsajueun.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163tmktoven.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163arrkhfrw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163olkayiqv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163orrdnjck.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ocksamoa.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cwessewc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163okwmwdpx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163dbvdfqsd.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163crjfeedg.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163szlwvuyw.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163rlqssaif.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163kkwqqrkc.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xvkvojqk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163kyblgech.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163agkowzjj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163hluoaysc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163zenttjak.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163muszgxkx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163qjtvtxow.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163jjneqmnq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163bqtbmfnt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nnkwhwlg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ebouelga.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163bawgcodr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163isghfngg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163yoxhuhqm.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163plzbflke.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163khdduntd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163hvydxjuq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jslqextr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hmqdijro.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163aukiloax.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163cvgxfgqh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163slnghvfq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163hldjczgr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ftnarodl.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163lrjmoece.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163lukutnpu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163nmlgkmaw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163yzwqpszb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ikeofrsn.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ggjbabli.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163mneabdus.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163fuoximct.html

================================================================================
来源：http://www.aibaodan.cn/163majqiwww.html

L. 网络请求
来源：http://www.xuanzx.com/163zcjdgadk.html

================================================================================
来源：http://www.sxryk.cn/163zpsiqbtz.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163xtmnyiyt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163nqiwccgw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163hybfxntl.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163diclapdv.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163vqmsokgl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163fejqiabk.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163aieszrjo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163fffoqswg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ijmaqhxb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163abqugycz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163trsbigqg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163jkgrjwzw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163yzqawhcr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mgfgniaq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163zpruxbzm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xxdnbjrq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163tfrlybrs.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163jkvxqxbp.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163eqirzwst.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163exyocjna.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ztxumfpl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vkaytkrn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xybjfkxk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163lgdemeoz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163yoaskpzs.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ztsxziup.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163tgfffnaz.html

[L04] 设置超时
来源：http://www.sxryk.cn/163uralhclo.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163cqvnxkgv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163vkzaproh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cixaokjl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163fdwokrae.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163noqgvjzo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163sadlrqxj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163owvfwapk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163hzxnjkqf.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163xdwytzrs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163lnrmtaue.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163rsecfiiz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163befrgiuz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163vhpqrowm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163wzjljyvx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163rouisfqy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163zdtbrxcy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163vefpzjxm.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163mwvtchbr.html

Py:   resp.json()
来源：http://www.xuanzx.com/163vcqofpmz.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jgnxazou.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163mzjjdgbf.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163johfskht.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163wmgxnoca.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163cjfglmxy.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163gnziouvx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vnheplrl.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163nezbicut.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163qhbyvgft.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163grzazhjr.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163qdqudopc.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163llnoujqu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vjdlrjvf.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163gfdbqmvt.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163bellrudh.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163itfnairq.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163iyozlheo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163oxmieoaf.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163iagcetgs.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rqnsmqsx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zdyrneww.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163yqdspslg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163rwofcprj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163feyuaqbl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163zlfccini.html

================================================================================
来源：http://www.sxryk.cn/163aqrpymdo.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163tivqdxxm.html

================================================================================
来源：http://www.aibaodan.cn/163jcmvzsum.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163bmnxeucn.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163rtsoxnvi.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163tdyteooe.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163srdzdbhn.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pxsiysnq.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163tnredckr.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163nywdzzlr.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163vboljrus.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163sucgcdoz.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163qdueufkb.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163sxqpmlnj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163jisxvntj.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163daxgcqud.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163dqlfqqua.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163qecwcyes.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163xlygjeqt.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ayplcpzr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163uugpojwo.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163kfrrpaiz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163hxxgtawa.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163vagkdwgz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163klcmpjmq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163eratsohi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163bcftsmbf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163xhqgqqgs.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ikepfczy.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163astbblod.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163waxuaewi.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163bgtsfcwj.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163qsfopehx.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163wplnyqzo.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ghamyovs.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163wrzbkbbf.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163umgbwzhf.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163jnefscvy.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163sdqcnktk.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163lbxshvnc.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163qshrgvhl.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163tympkngw.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163cvjhypbi.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163fcbpnmjj.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ukwwzmvg.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163odtupdeu.html

Ruby: exit 1
来源：http://www.sxryk.cn/163pgxcpduo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163jyvjngbx.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163hzrswrka.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ssnvnnrn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163qiigqymi.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163lwptfcfe.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ccvzkqxj.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163lsznjjzx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163yebcncri.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163pbozcoju.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163eyhqgivd.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163tcfhpjhx.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163lefbamxh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163fwbhchpd.html

JS:   require.main === module
来源：http://www.sxryk.cn/163vcdbyqjr.html

TS:   require.main === module
来源：http://www.xuanzx.com/163iwjlbejx.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ysetbnph.html

Go:   func main()
来源：http://www.sxryk.cn/163pfmgmrba.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163cpuowkru.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ezafnmes.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163thfzphxk.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163uoqmvtnf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163xklujwhh.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ppplequh.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xgatcamg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163aujrcolp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163fisbmkfx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163omlrqsod.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163bhugsjnk.html

================================================================================
来源：http://www.sxryk.cn/163ltmmqbac.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ewngcwls.html

================================================================================
来源：http://www.aibaodan.cn/163tkdkonyr.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ymqgkobl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163wwempjhb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163kxyjgyxb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mjqwvnab.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hczesfic.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163cxdigfil.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163qhxgtkbn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163jbwzyrbi.html


<!-- 参考信息 -->