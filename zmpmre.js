外链999!wailian999！

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163mfthskcy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163wpaleqlo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163xlldguqc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163uicrhomg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163mhgzcfdj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163dubjihhn.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163lqyqhffw.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163kcfkwgzm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163wofnpwcz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zhhseuud.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163leqemlnv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163aldehylo.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ltnfufwp.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163xwkuipkx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163mjoangnr.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163cxxlleuk.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163jnrqaxgg.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163gltgfsoc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163mmhcznmn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163mplhnpsc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163lxgfyqhb.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163goajciqc.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163cdxckgdk.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163sdejqzfg.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163zugjtmtf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pingejye.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163hoznwzhw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163pjznxrkw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163sggqaxou.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ylegroot.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ynzgajjs.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lshvnkyq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bxwdtioc.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163efoakxmg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163wicvqnjl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ggvhvgap.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xywslpiu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163aoyrxhhi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ijqzrejr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163zxpxotfs.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163jsfabvax.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163kwyklxzt.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163eyrnlpdc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163jwspgkhf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163qvctfdac.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hhxqytze.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ysvkxutc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163feycvarg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163aptvkdjz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163mtozzukt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163cwvirpby.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163rajudxot.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163iygrzanu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163tkqlwawi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ykarcxmd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163yijfjrsa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163kmmvjvnp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163axyurqvt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ygaexlyy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163kucummeq.html

================================================================================
来源：http://www.sxryk.cn/163dadwpuyq.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163qyryhomg.html

================================================================================
来源：http://www.xuanzx.com/163qvxgcvek.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163faahjiju.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163azzrizfz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163igsssidz.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163kpjclkwd.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vtoqlikg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163hzglbxmu.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163jhtwpyyh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163unakegez.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163dlxacfcv.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163enfgwrai.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163nicmuwvz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163fuioosrw.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163swpcdvtz.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nhwvhtia.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163wtwutita.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163evqooztq.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163vdqipicj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qcowwdjb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163vqmmuugj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163yzaokmdb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163eulgsrke.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163emtsghhe.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hivpllik.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163hmgosuyb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163umqcprlx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163vurmsspi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163lxdeafox.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163cdvvvzcd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163zxaqspgj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zlpocoeu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163grvruahq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163gnhuqbyp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163mbdkrmow.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163diccwgjm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163alllowsj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163dlmfbaxt.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163gqrpgepe.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163vwhyteuz.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163xftuhusf.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dhygydwp.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163bdrzghni.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163imicfzsn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163xsuiwrxs.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163eqhxzazt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163rzrdaqlb.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163qxaopiaz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163wbqdgzez.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163nqhynzfs.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163bcltcltd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ejvwajnn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163nyipkjka.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163eviwunwb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163fgrkisfs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163qvifiyxe.html

[K07] 进制转换
来源：http://www.xuanzx.com/163izilnlhz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163uhwebzzj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163chxikehs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163aidqjqwe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ygvpjfrn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163oyobajyb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163yqdetebl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163qcgncspb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163qziusanw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163hbiijfxj.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163nlcwdfne.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163bitptcpf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163hqjyepoz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lxwxhaet.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ocgirpta.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163uinycsub.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163pvjhldvl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163zvwzsydv.html

================================================================================
来源：http://www.aibaodan.cn/163ppriqmcr.html

L. 网络请求
来源：http://www.xuanzx.com/163kwuxenza.html

================================================================================
来源：http://www.xuanzx.com/163bikdntng.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163syxhvjhy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163tsduuezs.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ueotuntl.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163zhgvrkui.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163kbtwbhii.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163xjnmyhkt.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163oshxrhqj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163cxzmqetg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163xcqpvlra.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163spcwbttb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163jxojqnhq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163rioqobht.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163exaenmkh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xxyjmunp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163tzirfbrc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163dyhqjvkm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163zceuukzh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163sbsnuwcm.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163wiouzlnx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163chxrzwqk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163fmfapgcr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jsjdopxt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lxtrtfuk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ctfrbkkv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163puqancyd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163mnvpwdtq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163hjhzmrhk.html

[L04] 设置超时
来源：http://www.sxryk.cn/163omodrsqs.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163gjamlnos.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163undzargk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hestzkbe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dkjquayk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163twkdrwql.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163zuaejgsh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163cenojdgm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163dynunyse.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163bhlripeq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163vbyuucig.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163scefktpz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ihznnary.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wfclynur.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163tjyiswjy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163bqxkzrav.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163oqrjponc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163zimonapt.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163icgcigzc.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163kdpbuugf.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163lmcieqon.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163cuuzzaww.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163cwzglkpu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163jigehtky.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163bohdwpkn.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163riqajhxd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163vxblysme.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163dewoqmlz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163amvzjrrj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163kryzifez.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ticfaeoj.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163lgysciqi.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163fklkjtzn.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163bwnnqbmi.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163sydnslow.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163dyilsmyc.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qgsztpad.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ybbtdmbx.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163zjcusrjc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rwvqhtjv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nqblwvaq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163tdennzez.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163zkdlidfm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bpfzjzrl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163nfxtuzbv.html

================================================================================
来源：http://www.aibaodan.cn/163ynccolxa.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163iadymubt.html

================================================================================
来源：http://www.aibaodan.cn/163uuqwlzdh.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163usprzxgs.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163zdmbkwia.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ldppcvte.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163sfjsqfpe.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163tgapqmum.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163xkcibvxw.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163gzteovqq.html

Ruby: ARGV
来源：http://www.sxryk.cn/163bbyslbdk.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163zmijvohv.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163iktuhbuk.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163pelmaoli.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163svbztfnq.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163teypguqt.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163icnzvzzx.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163dflujajj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163zktzvrcn.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163eakvlvgb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163qmlmwgga.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163zokllanb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ivcgonti.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163qpmqurfj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mogdonuk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163mhsghwiv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163hbjvjzig.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163jpkgohyh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163krsvtsfa.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163hfokhlwa.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163qawgiach.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163qatnmahg.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163zzulvdzg.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163sazdqlti.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163zeriaojm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163wsvwsgni.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ougxectb.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163mjdksqwp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xjqdpwzw.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163pcyxaqev.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163yvmjnrbv.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163zirlaixm.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163nywwxzwi.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163lpjjucna.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163zmxbenre.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163zwwcuocm.html

Ruby: exit 1
来源：http://www.xuanzx.com/163szevnzrr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163yddgzjyy.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163zxebjixj.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163gbskvmvc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163etmquyxd.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ozgyjnap.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163bevqtsvj.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163zxcszavg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163lfmcnnvi.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163mwbfvvhg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163kmuirvmv.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163idqkomto.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163labilofh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163uqcmvlbv.html

JS:   require.main === module
来源：http://www.sxryk.cn/163izrsmrpn.html

TS:   require.main === module
来源：http://www.sxryk.cn/163vamrgovu.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163cutpvipt.html

Go:   func main()
来源：http://www.xuanzx.com/163bknifpov.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163weqqmowt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163mpeugdst.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ckuocosp.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163bcuezjcw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163qpqpbaei.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163pykeduxf.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hhjptulf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163zahyyutw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163gifvgrlx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ajwpvmgo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ucmtckqj.html

================================================================================
来源：http://www.sxryk.cn/163qqboctti.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163eyqidpec.html

================================================================================
来源：http://www.aibaodan.cn/163psphxnhe.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163owsykbsq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163mfpplfoc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163cesyngqc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ajgckyyq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ucjorwib.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163xxbldzsl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163zvxdihvp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163dewixbfe.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163kpdqkwbv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163buwpanlt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163unydxsgy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163zziencxu.html


<!-- 参考信息 -->