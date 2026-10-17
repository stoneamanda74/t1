外链999!wailian999！

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163lpnlcpve.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163hlaqqvjk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163hmikvazj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163yglywvzl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163uzxvoggz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163arsyiaxw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163riparjhm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163zctuxuld.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163zcfbncoq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ltezvdha.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163gdloswob.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163skpqaaup.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163ebwkytge.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qyqpsxdh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lzsvkech.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163gnmnbhjf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163evedbaom.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ryyvgssy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zdpkjqau.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163jpnxfpel.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163sqqpubag.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163cdpofzwr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163atjeseus.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ddvihqpe.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163lqhvqaxl.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163vnfkkmks.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ekjnyykk.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163cvkfumzz.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163zaghbnzb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163opoprgqy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163pyknkybh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xygfcdon.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163sibupuyj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163tjaykvnf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bxdxscta.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163coztpowa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gskfaxax.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163kkcnybys.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163dpelsyku.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163loqihrde.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ifqkklpo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163bchqozys.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163jstzqatv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163vifledpm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163vvpuirar.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163aisvcqbn.html

[J09] 时区处理
来源：http://www.sxryk.cn/163iigmfewb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163kfkprflv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163qxstyypb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lvyulcwq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dixjbzeu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163fpqpnvgf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163aofwffqm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163cxnetvwk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163hgeeavaz.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ffbkvzhy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163hllaqlmw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ceabnqpa.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163kvnwppfy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163kabqwffb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163iqddkisf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163qupbpjce.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ujjsgsje.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163muxdujil.html

================================================================================
来源：http://www.aibaodan.cn/163lauyogpa.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163pzbtqhdx.html

================================================================================
来源：http://www.aibaodan.cn/163jdvcotcx.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ywcgasxh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qnhkwjpf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dfdhdhbn.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rzocbbut.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mkdhzsou.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163lyjmdgvx.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163jquekusp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163madyoggw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163nvyvnhwa.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163vvdfdjia.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163labxrrtl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163icjbfvdi.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163idvzgjyk.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xcqicqcs.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163imisqske.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yvvmkgmk.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163mntnjzzt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163mffbgrbc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163kegvoyki.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163eeabidxn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163scdmdofw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163umdqyzxn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163rompmsfs.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ohmmnvlg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163jqjqpldb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ciwiyenj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bkkafebs.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163gahhwnlc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163visijzav.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163yzuxeeaa.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zqddeezr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vdhiokgv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163suxcslar.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163medeghca.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163aysbpvvn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163upbmuqcl.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163jjadmaoe.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163frzkbqdi.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163kgqpjhqg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kygwlime.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zzjmlvnc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163hjkryfbu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163abqlmosy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163lrbmyzxt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163pclaoabk.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163eeezdfbi.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163gszgenvc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163asazskqj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163meweigac.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163obaihajq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163gexjioop.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163prqkdkxf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163dtvhlsmu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163lfpuqbnu.html

[K07] 进制转换
来源：http://www.sxryk.cn/163nhwxdnzg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163frocqlsa.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163cqhinpke.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163auhmcydg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163shxnircm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163jmtkjssi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163mahtaolk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163hzuelktk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163tztsnqep.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163nguhddfo.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163dbwauiqh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163rtwmbnjp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gzjielni.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163iqarufqb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163klbstyfd.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163umoutved.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163gujmgysp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163juewsicy.html

================================================================================
来源：http://www.xuanzx.com/163xnqsmozg.html

L. 网络请求
来源：http://www.xuanzx.com/163pischsrw.html

================================================================================
来源：http://www.xuanzx.com/163ucqgdhsm.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163noaojrsb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163jngsaquh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163pflivloe.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163flazvqze.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163zzagunxp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163cwacioen.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ddmwpfdy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163duuuuisa.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ajupyboi.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163rcwiilja.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163lnteblwy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163axmcxsny.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hyjqrijy.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gbgqnmab.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163awpnscui.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163pdfgtipu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163kblcttwp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163oqkbyayg.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163kdsypvls.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163exmxnbow.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163vmrbvtpc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mdpujoci.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163edvekssq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163goklkjld.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ntjglzkj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163huwzzhms.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163peilwfty.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163txlnegqu.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163qmnryrep.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163twovqbjj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vrbshbvh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ccvawwvi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163kssvqvbw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163hpbtjdej.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163tezkifpe.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ikjdftxa.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163fdgrzwgn.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163dadvrfko.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ocywdrda.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163iywqdqud.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wgtsyubl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163bhnychrq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163hhwopnby.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163njoinnkn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163pttiqyds.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163nuyebvke.html

Py:   resp.json()
来源：http://www.sxryk.cn/163yobwzlrg.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163vnzwstyn.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163iputsuwg.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163cbzhohqy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163snyjmlrc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163idzvhjlh.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163efqcneqn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ixveiukp.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163qkuwcjfv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163zqxnrput.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163fysimrxp.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163yybryhdy.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163uedrjrjy.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163eazqysnx.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163fzjwxubw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163dbfkfjid.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163wmsliuwc.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163rlijzeub.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163silgjijn.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163efrezyqu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tygmacyy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163oaplfipq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163aquisktp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163xvrkvxhh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163uqsxuvlv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ueirupja.html

================================================================================
来源：http://www.xuanzx.com/163xwtzhajg.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163xwqizzsi.html

================================================================================
来源：http://www.sxryk.cn/163npaificl.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163kejnjkmx.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163mvgvocyo.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163mehjmjmu.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163glmzgrwk.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163mqrzeenc.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163hpoegqol.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163gqovoqzv.html

Ruby: ARGV
来源：http://www.xuanzx.com/163llnjdjps.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163rceusjey.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163zqgjhrba.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163uslqigsz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163mptabzri.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163pwqmozts.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163yhjatbyv.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163jtitoflb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163svdpjcxk.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163drbhrqtz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163iwehvahl.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163lyedjzlv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163wdmtuyxy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163litqwmyy.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163yzhztfbm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hrlopohz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163xvxmzaro.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qngsxlzf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163auhovbat.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163vpwwcwaa.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163omosrdwx.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163maryzzex.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ykhzusmr.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163knmxwefe.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163zegalvky.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163pyebssml.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163vtmpfvgp.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163lippnihq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163majlmhvd.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163uvxedfaq.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ovqsqogd.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163mkkvueyl.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163fmfsqvqm.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163wpsegzco.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163nszwjdyf.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qjqsjhlr.html

Ruby: exit 1
来源：http://www.sxryk.cn/163dgadlrqn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163calbijkj.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163pxncxrxd.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jxeruxlt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163wfsvprhl.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ebhcicrr.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163btmfhpqy.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163kizfcpps.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163oxilpssr.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163futaudrj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163bzmpyzne.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163kjwmyicp.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163hweeynea.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163qdvqoeht.html

JS:   require.main === module
来源：http://www.sxryk.cn/163rzmocpnz.html

TS:   require.main === module
来源：http://www.sxryk.cn/163xnqrhihp.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ryrtknjz.html

Go:   func main()
来源：http://www.aibaodan.cn/163zkgljsqr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163yacncbko.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163jbooocfb.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163kfphjoay.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163amyizfyq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163dogkegfn.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163pusyrkwm.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163nfxgncrr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163znpzobri.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163omosdmjy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163fpkywxfd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163kooulqpe.html

================================================================================
来源：http://www.aibaodan.cn/163nsprtdog.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163tqltphgw.html

================================================================================
来源：http://www.aibaodan.cn/163liflwdjg.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163cqbkroem.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163phhqjsnj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163qznwweyh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mwvbyxhw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163looeblgp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ppethunf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163gugakfjw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163vhtugean.html


<!-- 参考信息 -->