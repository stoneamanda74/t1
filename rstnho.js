外链999!wailian999！

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163mollmgnq.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163qigfxiwl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163sinsbzlp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ewupvsxq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163fhffowlb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163zsllqbld.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163fnnvpmim.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163sqvtkabe.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163bdyvxrko.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163bybhqszq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163evpeoxzi.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163lgfevcqz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163suuyrjxw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163acenuebr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163opfmomsy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163pmogpjgc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163gtoidmce.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163kphuklgf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163npuebrhq.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163cxbhrocg.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163iygwlevg.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163tuxlauhx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163cdvvsgyy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163eoigycpv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ighybvzm.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ipzriyfw.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163sddcghet.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163trbyrjta.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163oqdrnqzh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uqjrqtvn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163mrwqyayh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163yrfrtjsr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gbxesnre.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163xeukhxnp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163bvhziodn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ojivqycc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mhllidoi.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ntcvhkcn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163whpxhbrh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163fwavacta.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163lrrnbajw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163xszgzybz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163mtjdgnql.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163penjpomi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163zwflpdhc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163nxptzhdm.html

[J09] 时区处理
来源：http://www.sxryk.cn/163sdxxtqvh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163hutgyxnq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ygfxbzsi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kkfuzbmt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jpaejboe.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163wfdsqygc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163zdqllymi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163lzdmugnb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163yschxkcj.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163wcqaomgb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163rosqqbmp.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ndmdacku.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163qhwolkrz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163socyepad.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163nlrpbthq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163dvpwymbo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163tsqdtlki.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163xprlxrgk.html

================================================================================
来源：http://www.sxryk.cn/163qiqljlyn.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163lclhpojf.html

================================================================================
来源：http://www.sxryk.cn/163ojxntpxt.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163jhpfapub.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qfurpfcl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dzozpidv.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163sdtzecnk.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hivcpzpk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163mmwuptgd.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163hydeebxg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163mldzrxek.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163mkhhtohc.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163wmqemvoz.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163mghacpga.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163jbkpgbic.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zdrshwjr.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jzqilrio.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163klpoblrt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163lyyamuhq.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ukmrpble.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163vreuodas.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163yosfnzft.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163labvjsfo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lteifmuq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rgzhloaj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163riwumxst.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163hcflgvlv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163jtuiylpi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163qvamoohw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163gfbdagwf.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163nifwlexr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163hhlnzwwo.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163bhcehtje.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163axhsqrae.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qtgdwuaj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ftcydmaq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163iklfsrwg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163uaftrxzt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163evkmpebs.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163mxarenmp.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163dhrkoswj.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163xnnhcguh.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qkcdpshm.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ljjluxtd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163tkmgicae.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163airrrirj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xvfizxme.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163lddnrnjb.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163awgfgmtj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163hclkweol.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163dbrxfbep.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ikkjfhcu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163uftnggsx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ikrlesmh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163nbisnvvn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163vixpmicn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ktulylco.html

[K07] 进制转换
来源：http://www.xuanzx.com/163oxcelodc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163sdpqfhau.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ebntfajw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163kmxgrsqh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zmlqecab.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rmqeplce.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163eexvutuo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163jklnodsy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163gbrmjxcr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163dkxcqasu.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163cdsesshg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163wgbakwaa.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wbzvgwbd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163nszpfpjs.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163sirutwzu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163qnifehep.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163urthiuch.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163dnllfluv.html

================================================================================
来源：http://www.xuanzx.com/163sjhcpnvr.html

L. 网络请求
来源：http://www.sxryk.cn/163huyudhgj.html

================================================================================
来源：http://www.xuanzx.com/163gsebqtfl.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163nlslztzi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ebrwsxrt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ovxmnmta.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163inhbrspn.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163xnpcrmgh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163casqeoyf.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ctmnntsn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163zqmgrxcc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163sbqekkaa.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163hlhwbmhx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163psrjezda.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163gdzogcbt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pfswewuu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qqdicrdb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163jnbcwlpp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163nmiprpve.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163wdjihapn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163worulvjk.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ubalmkxs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163bxyduoxy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163fbrteubs.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ydutnnpd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163oxemjvaz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163yjtijdde.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163tweuspmn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163pszemata.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163lzskhtbv.html

[L04] 设置超时
来源：http://www.sxryk.cn/163hrqzjcdf.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163vanbdfdw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163jicztorp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163kylnrvhr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jhtjefjs.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163hkbbkqzt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163szjpmdcw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163bsozovgv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ltexbuap.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163wtqiwrrl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163rupqbpmw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163qcemfbym.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rnxrbgpx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163opzmbexc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163xjnuvety.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163raixtlqk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163lvixixad.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163wmerzqwn.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163iopebilq.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ltxgwwov.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163pdsuiose.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163cbobplhh.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163zfzauowk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163kskmkxum.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163hpkozgtn.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163kwyyhcux.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163rldaawky.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ntncsstz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163vkdcjktf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163usjjqnge.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cmfpqufe.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jfrtkfod.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163gbubndxq.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163aqszqgzd.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163qqgqffbe.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xhycsnbi.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163hhycfrnt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163mftewdnk.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163gluannva.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163egodqqww.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xuhgayeq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163drzqfqan.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163xubsllie.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163tmhwbvki.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163hmzveonc.html

================================================================================
来源：http://www.aibaodan.cn/163qraxmjfg.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163amsfvrkk.html

================================================================================
来源：http://www.sxryk.cn/163bjgjpenp.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163jxwltytj.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ebcgektp.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mntjkcnc.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163voqraaiq.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ryveauwg.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163mncmrcxd.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163wjhawpvz.html

Ruby: ARGV
来源：http://www.xuanzx.com/163xhvfzfir.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163sczqntuf.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163gvxwqvqi.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163uafgvooc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163bnmpjtna.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163uhshysxa.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163dhxosmhr.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163mqekesai.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163jtyiyslj.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163npcghgvj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163xrzghymd.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163tbysccaj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163grbdlqyn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ddwawgsw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jeieajwr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bpohiinu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163mspynpgt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163fgqilmdr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163lbefpgxy.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163keuvaoic.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ytzhgxwe.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163icnjzkwf.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163jrerlbqo.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163bbdyoney.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163howoxbmj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163cttblvlo.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163zmhpefjp.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163mnoanqgf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163eikgwphg.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163cdwidybm.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163qegnsuqe.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ysngcxvs.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163vbslfigq.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163mmkwmeve.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163keubujeh.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163vfliervz.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163awtcksxw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163pytbuxtk.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163zkgmdzci.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163eomqlaay.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163xxzavacg.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ztlaqzpq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163jqnuaepl.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163gihkstkj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ougakxca.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163bfglgkre.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163nvbcpszm.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163zxjwjiiq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163afrtxzir.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163spishukp.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163nlmaffbo.html

TS:   require.main === module
来源：http://www.sxryk.cn/163atktflkm.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163edclmhht.html

Go:   func main()
来源：http://www.xuanzx.com/163cevinczk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163zrmeewsv.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163fabrfvbq.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163vsjlczsy.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163rqmynhuw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163llfhvbpf.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tilenrdq.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163airlajtf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163wsaztxce.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163zxelsdkd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163lghtaxwg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163modjkiqi.html

================================================================================
来源：http://www.sxryk.cn/163mrnkwutx.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163gclkvzhu.html

================================================================================
来源：http://www.aibaodan.cn/163wqnhcmod.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163waaoasqp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163xntewcwo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163xpgjynqr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fsreglpe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163nvesyoje.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163nvyoaapo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163gviefmzh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163mxsdqrvp.html


<!-- 参考信息 -->