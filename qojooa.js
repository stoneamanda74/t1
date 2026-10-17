外链999!wailian999！

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163jyfouosk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163iewthbjr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163uzlhkynf.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uyrvwsci.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163exphhigp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163zveqamab.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163dpyscijt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163sfdpgfvn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163jihpqzqm.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163iodjmetk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163bfylvtox.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163mwxvbwna.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163eyfnajss.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163njxmbfne.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163qgrvjmqx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hramfrwx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163fggxmuxo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163qyqsjuym.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163lmhulirs.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ohqqnazv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163yjuyrqgm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ysdrxeez.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pmshcywm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ayporwpx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163qdukgbyb.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163xuygbcbk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163yypuwwwy.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163tshkmdbm.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163kezyodcb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163msovmfaf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163fftiruto.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163qrjchhoo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163vnrowshw.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163xvqjzzdn.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163phbaxfij.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ilrxnjbd.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163kurualvt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zgqeisdv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163pvdhlvwq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vrycxbgk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163plxozbyv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163qycyugsy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163tfiijxpr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nxpdgbit.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cobmpjpp.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ilpimvui.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163wcomjtwv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163arbbmemd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163wnsxhmei.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163tdfdikyp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163wqksgwuy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163qjrtprvm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163yabdnuai.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ajfiglye.html

[J09] 时区处理
来源：http://www.sxryk.cn/163xpmyfnkx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163eouvdhle.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163alaykawh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163eomgpwxq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zedlvqik.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163qhqggavq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163cqzfbiyq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163tjykvlpk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163njytmopc.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163xaixvujt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163opqljzjg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163lhmyekxy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163vgndcwgj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163pmvwfxyr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163oylwllqh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163yezshplb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163lbzzexuz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163kowmiqew.html

================================================================================
来源：http://www.sxryk.cn/163jipujjmz.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163axuzhpxx.html

================================================================================
来源：http://www.sxryk.cn/163zvpfapja.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163rxzsoxrd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qvomgryk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163oygzrvsd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163oshkxgzg.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163upyvivbc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zvqvrcez.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163irkczody.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163jqzzxhfs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163amqfkrgj.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163pmydlfwg.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163zrvvizti.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ydnypmon.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163apiqkpqa.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vzlhxvsa.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163fhvmxdrt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qogtyedc.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163juinykuq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163mvksvevs.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163kymizgqe.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163yngdxado.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hnuisuta.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tyvucnde.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bfswcdhx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163dbfqrcww.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ldmdcylk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163tutqqtov.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163jsdqefnw.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163zuvoxenz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163gvzvifks.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163igfndyvj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163llbqlhdc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163cspesafk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163uwprncoe.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xewkxhet.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ogdpbxrk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163czieppam.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163xgdycajv.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ezefbbxl.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163rfdqvtde.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163wjrmlbko.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ptbgyvme.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163hesqptjz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163pjicjtmp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163kfskrdoc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163aacvsiml.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ombmnibt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163kxmpadvf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163uslpqrtt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vrebcrtz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kerkwawb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ugilatlm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ajbfsgvi.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163njpvmhuj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163luvtowcl.html

[K07] 进制转换
来源：http://www.sxryk.cn/163liulspvd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163wwauuvtu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ycdzztlh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jgaciaot.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163sfqlrhxb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163pkdbtmma.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163qkoldbay.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163aeenmvqx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163npvqbcam.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163bbgygdkt.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163aoontygg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163eocudpjb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163edtprxay.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163buerdcqf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163zzowitdn.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163hrhncbyd.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163rnpqztbg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163htsylpkt.html

================================================================================
来源：http://www.aibaodan.cn/163euloctxr.html

L. 网络请求
来源：http://www.aibaodan.cn/163ummscrlc.html

================================================================================
来源：http://www.xuanzx.com/163bbqtxtkz.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163wftjpsvx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ifyfvuno.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163bawkdklr.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163cbhogugc.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163taughuei.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163hgapuaoq.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163rttgevxf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163nijlmxty.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163xitxfccx.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163eiphvbqi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163spsedxcv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163nwnhuiyi.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jbglnrpc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zfomxlds.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163eiqwfxgq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163bfhcbleu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163jfgigzpv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163rfwalotz.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163eqwmcwia.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163dqusyvdb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163mcfubucg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ishxgyub.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163cnnblzoo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163afahfixi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163fxgchacb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163lgndwgif.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163cnmsspgw.html

[L04] 设置超时
来源：http://www.xuanzx.com/163nnjrfbum.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163zylvwjpf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163vxjilwhf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pobwnhjq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163tjnwanwi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163idhzebsw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163xdignpeb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163wmqalztr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163zpxfaxlu.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163abbjiufx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163jyhudgis.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163vagbaawy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163aozheust.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163azzchxep.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163bujndpjb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163znnzczbb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163bwscypjc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163rptzjgaz.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163qopaqlki.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163xbaasgsr.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163lkvzodvk.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163vvkmxtiq.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163aqxuuzup.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163mgnmedhb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163tdwafyih.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163gpbbvghv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vhxjgsfp.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163qooedaao.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163gjcvszct.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163tactdwnm.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163lxdxxzrr.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fuwiwyrm.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163cjznjvah.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163shhkoybi.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163yhkdepgc.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163hsxbgnfx.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163pjyrjipl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ghpupnye.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163vepxfbum.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163oeczgbrs.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vslvyfvq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163gwhcimxh.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163fymuyxjg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163blvwyumw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gbjbralr.html

================================================================================
来源：http://www.aibaodan.cn/163lneiunko.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163vldqatfk.html

================================================================================
来源：http://www.sxryk.cn/163jbqytldp.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163xyymvmfj.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163cwlawrvl.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163yolhpgqo.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163kxcosfky.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163diuedbgv.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163yyupcvde.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ozkmkbvg.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163sordtndf.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ngdgbejs.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163nezrmxwl.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163zftswqwu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163bsjxtpgc.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163enwqsyrm.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163xzzqnckr.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163tznkwwic.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163obzndbqw.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163eylyldzq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163nezkrwka.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163uwdvuavu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163doowcbei.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163glqurowx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ennhuwbi.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163tgexvnzy.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ildutilc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163gqfhpedy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163aqkigyog.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163odjzjsli.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163eoqetydo.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163umtjpvfa.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163cmewqgxx.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163auexvthm.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163hdmqlbsm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163zougcruz.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163frpqtawj.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163gtqlwcwu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163yrlsplwn.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163sexzpqvl.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163dovfrbxs.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163hyoqytdu.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163tzibsqbk.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163zrdkjgsw.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163xdrmzjmw.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163yfmqqlqs.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163wgthbfcg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163njpiviwh.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163shmjlwnt.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163feyskroi.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163snatnsbm.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163vwectbxh.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163emkcyemk.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163pdqcdobd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163wxlibbnu.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163iicjwucb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163qmyfnczi.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163dwfgtcit.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163uqxdhakd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163hbpvsoax.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163saszxasv.html

TS:   require.main === module
来源：http://www.xuanzx.com/163lhgrtimw.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163diklgihs.html

Go:   func main()
来源：http://www.sxryk.cn/163mvbrlqyi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163lfcjlxqe.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163wwudjgpr.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163gbdvojbz.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163dixvwvok.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163xnszsbwt.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vrhyrbhb.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163qgwjwttm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163rynxgvce.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163olyblawg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163examcwws.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163uniwvdjm.html

================================================================================
来源：http://www.aibaodan.cn/163nmezylwb.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163lmswbkkr.html

================================================================================
来源：http://www.xuanzx.com/163qlgsckwt.html


<!-- 参考信息 -->