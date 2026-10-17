外链999!wailian999！

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163jkjncowj.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163jynnjdrn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163xehrxchp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163utusdszg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163fdjgdqfs.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163fbbddfim.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ebluowsr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163nvfgdruh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163cxqnvlzo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163sdskbxhp.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163idojevvu.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jdiqqovy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163xmvdrjny.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163cbfvefrh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rvfiryws.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163gpjvursy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163asjxzsfb.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163haldalcp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163nvyvcyxn.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163eglujipr.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163yabfmsnr.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ucbawsdj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163pbussdmb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163vicxnkfr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163macnqfwc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163iuatlagr.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kcgknxho.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163tqujkhfq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163pvkhsyal.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tfwpzhqy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163pweenlit.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qfxpdanh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163fczyfoab.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163pxlppwuj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163soixcsit.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bgobrrza.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yfrsqvxx.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ibrjuquu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163fvsttnwa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163umyfopea.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163rxaovxqr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163znzbpjev.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163qhiywtph.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163xzwpquie.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163tpjprwty.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163usyjmwur.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163rhksfern.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163cpckuujx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163tskxmbpg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ftmvgxaz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zvedrtqu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163izytbvhj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163kuibpvfx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163mazytwdc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163dbrouqlz.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163vhtltfzb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163osbdckms.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163fzrwqnvv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163bsyhrbbz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163wudobzrr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ugprszjc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zdovburr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163fkvaxaka.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163wvcbngvx.html

================================================================================
来源：http://www.sxryk.cn/163pgaditac.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163zldpotmb.html

================================================================================
来源：http://www.xuanzx.com/163tksonlif.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zudahdkr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163cxooumar.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163essnvbdd.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rlcztnon.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ngmssnct.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163vwzqrasa.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163idkvwovz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ofuorcpb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163azafmqai.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163mmkzvjaf.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ivwqwmnb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163lzxsoolx.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163pdrdkcog.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hzqxljph.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163tabaijwk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163sfhocygz.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xsmnxzhe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163oopszilb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163dnrrhwwz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163wmzrgdfb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ynvhrneo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163icneyubx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tacnzrbf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163qrxnlvlq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163knjkemnn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163gdvmdpek.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163vriozrte.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163owbpxyot.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163qdsuluxl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zsofktzd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163syfswsbi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qhzoxobg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163xvagjibc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wygoznjb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163inwnooem.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163tnsvdcwa.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163qyafchob.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163bgxziiap.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ynwguoth.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ihbzejpu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xitxxusm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163sfctnfrl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ywdoxxmi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163qazfdoha.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163viukahlp.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163otkvrszw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163wxkdtwzd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163orjrkqfi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yhnreiua.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163twgwnajm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163jfhzbwkt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163giouypbm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163nvsaozgh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163wnsojwwp.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tgyurrph.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163funimkac.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163hlvkfvmt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ynfyttgm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163afhqcqom.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ynbkaalb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163muqrbsxm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163zfsskduz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163qtkwycgd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ppbismii.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163knxqcbub.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163qieasxdd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rqgtsxvw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bqrhpisj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163bbugkqiq.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163huwgtixj.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163srejdhfz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163iyxsfrrm.html

================================================================================
来源：http://www.xuanzx.com/163kcptgblb.html

L. 网络请求
来源：http://www.aibaodan.cn/163rkvgifoj.html

================================================================================
来源：http://www.sxryk.cn/163fearvkyq.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163mpsvmmtc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163zmqyzigc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163fsvpyipb.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ahpgomsu.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163hmpgkmxe.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163tbccmvxb.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ylijicia.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163dgwkjwmc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ddcudouc.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163tswcogos.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163icurgnhw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ouzicrom.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163uaxlbzpi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hlnokjay.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ngakbmsw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ftxcaovw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163stcnumqe.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163pzszoihg.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163rhzqetca.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163kuoecnqi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163nbfuiptc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bdyaiwrv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ukvxyfjp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163xnyiombu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163olltslww.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163tabmekec.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163jdaiskkm.html

[L04] 设置超时
来源：http://www.xuanzx.com/163bpxhpctt.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163yjofvybe.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163wnceroeb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163gjpxstvx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mfucjgor.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163hihiymde.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163mrweowyy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163zyuzgphg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163slfjbkbn.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163obauohcp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163pziuejfb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bgqmcpig.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163raskcrai.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163pccgyumm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163xeytmcen.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163mzcjkycp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163jpmgplkr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163jjzxaejq.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163undgxfnc.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163nsaeladx.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ejkuwcnr.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163pgkjctrd.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ezmsfsna.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ffartmwd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163haowtvvy.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ranqzkhv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163zhtiybzu.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163cllfhove.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163wzdpjqvf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163plefaaqi.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jmutujqo.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163kjarcqhm.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163wewchffj.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163qlxqjqgw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163cprxcmbz.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163wofvkxmr.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163eaflridf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163wzvenrup.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ishtaaet.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163uobidtyw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wtsssrph.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ejwysoym.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163hjgcqmoa.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163vaprmuwd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163prdcctoh.html

================================================================================
来源：http://www.aibaodan.cn/163hntgemsp.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163gimktkyf.html

================================================================================
来源：http://www.aibaodan.cn/163otmoqjqj.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ewfdbwtb.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163lulcohzs.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163scdzhioi.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163sfcflhia.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dppkyutm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163fylfegym.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163masqsjmi.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163obfbxtco.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163eqzpadys.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163xxfpneri.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163okqxtcvt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163nhsggevg.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163shxmbrii.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163pazocchy.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ujohddjb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163zdbtygcm.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ackqvlay.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163mzancgfp.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163pduywxuo.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163wtlfxisb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163hxzmrblj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163djjxilzn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gnudsuwt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163hojqahmj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163uqwgxgka.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163rsrbkxkl.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163svyqrlno.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163flkgqous.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163qhdvuqps.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163rntrrtjn.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ukhybzze.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163brlsiezj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163wedqwfnz.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163hyoirzrb.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163eclwhsgu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163nhrragzy.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ntuflhxu.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163rdfgfrbs.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163mlrhuxho.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ggscnupl.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163okaccojn.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vfearhtj.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163pnntofiw.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163cufybulz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163tqgsczmb.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wqtejypr.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163zcazthpo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163suiykonk.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163tgdyoquq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163wpiewmsk.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163hgiksuiw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163cshwkvdr.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163tiihneyx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163njhzdius.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163uiixysgj.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163sqoeacgl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163dfbbvjrt.html

JS:   require.main === module
来源：http://www.xuanzx.com/163uxutlvki.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163jvfajkel.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163mnqpakab.html

Go:   func main()
来源：http://www.sxryk.cn/163hdkanebh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163bibhdeas.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163qhqcdpwh.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163minemerb.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163yffusqho.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163whucnuaw.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bmzybkmn.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mldjaxcr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163fyrkaiuq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163qovszncv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163mueiecct.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163uymdvhjk.html

================================================================================
来源：http://www.sxryk.cn/163vdtiqtvb.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163lafsbqpb.html

================================================================================
来源：http://www.sxryk.cn/163lndwkhwt.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163zaxknucn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163aiurlyfy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163oykzhztn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vguvyrsy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163hxsmheip.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163cpenlaba.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163rdxcdosf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ajwabfkn.html


<!-- 参考信息 -->