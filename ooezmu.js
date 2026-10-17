外链999!wailian999！

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163bpzcuubl.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163xgtystfe.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163yeeztqli.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ljslkoco.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163jbdizala.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163pvinthfb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163tvpgelvz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163wzzlkhkj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163yodkkryd.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163iycsilzb.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163qnqluvou.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163nmtinwyx.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ynnzabym.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cyhhtpyq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163tdlruyul.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nixzmbbh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163chubutzl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163lvfxnmve.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163cobkgnkw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hnyvgtil.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jfcgaggw.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163mpodogcf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163xggalbey.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163bpreimmr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163zptjraga.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163qeajzdpg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163kmzoyjdt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163aydnlkph.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ajujtraw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163kkrsbtbj.html

[J09] 时区处理
来源：http://www.xuanzx.com/163denppaqq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163bhlnwarj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163uvtavyyw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163szwdbrnc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pyzmctzo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163bjscarsq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163plbypetu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163hynjntkl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163wzflqtsl.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163jkjkzgop.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ppguxpow.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163iqzaylgw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163tnpodujm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ctgffaca.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163feqtgluo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ugymdysi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163kldmallv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ndaostlo.html

================================================================================
来源：http://www.sxryk.cn/163irswnylq.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163qnkylylx.html

================================================================================
来源：http://www.xuanzx.com/163cfnlcrov.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163fqgmzlha.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163czvmkeal.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qondqhmf.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zdjbwxis.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dlfrzlxe.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163xezlbulb.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163phgqxrve.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163tmxdrnye.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163dpvqwtgg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163cdwftjpn.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163vbmjhrjg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163bgbjtxhg.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wybbwtnw.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163oyrztrtn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163cnqjwpdz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163iqxdsrtl.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163gprgchdq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163zdyjehaw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qrwofwtc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vzqpqnvm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163aucvvzad.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163rlnmmkuk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163sbqvnief.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163kmuejlix.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163qabobpsa.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qbxtpqca.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163xgignabr.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ozzalrbi.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ravcyhsy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163nlwjnhes.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hqjehhoq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163gdnpqaqv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163dpzfqwxi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163okhzitps.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163hibgiocl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jhdfobqq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163wveidqup.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163qgebkaix.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163gwatqffv.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fwmbdlvu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163cemdgykd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163osirovuk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ticcqdnw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163lgpdpjcf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ougeicmj.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163wtgcbwaj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163lyjlyvbx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163blwmecvi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163muqcptgk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jtbjmxrd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163npfyclpb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163wxpcjxif.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163theidjwv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163sngnrlph.html

[K07] 进制转换
来源：http://www.sxryk.cn/163gjbcoghy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163yslsduys.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163hdcezzco.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163myhxmsah.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163bfpzzefu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ymbvkgia.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163mghnlacg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163sdxjldbl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163zuljiaek.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163omzngcbs.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163omdzltwf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163dplxyxdn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ipjaxzju.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163huktjfim.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163bwslwuxw.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163yvfemidx.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163bdpbqaaf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163zwtudkdr.html

================================================================================
来源：http://www.sxryk.cn/163ttsyfxrx.html

L. 网络请求
来源：http://www.aibaodan.cn/163coyascjs.html

================================================================================
来源：http://www.aibaodan.cn/163jjalarim.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163jgvqmenf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163qezgqcfi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163kvyhwcln.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jgbiqzjs.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163evyboygz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163prbulkoq.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163vpeekcba.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163emgqyfdw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163pbohndlw.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163vpfokzai.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163pvjbijfc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163owxlgvtv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ptwapgyn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ofvvrwyf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163mdalkeyi.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163mqmgmqyt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163dtdhylak.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163eoltsaxa.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163afyupajn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163zvhclfoh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163uqgxpinb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163eutbhzhb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163kqtnpmvh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163bfpupqvq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163accwzfuu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163isoqengm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163rmpeujjh.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163byeeomcr.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163qnkcclua.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163dyharoqw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163zrtztoks.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163htmazwsm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163yjdibtcn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163cnwaawzu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163tjgjnlso.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163bewdbnjf.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163kqhgerop.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163zvtafetd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ymxnqdjk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163joyeaggn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163aybfqjhn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163blihoylj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163vwumrttl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163cvmkqxmb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163bbairshp.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163hocrzprl.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163yajmmkfc.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jecxqmre.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163iogynnfi.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163gggbtewi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163aqqteibt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163laygwyrm.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163tcegnrqf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163sxyiqjfi.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163dkqtvrfp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163pitjyszv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163hpnewzrn.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163keiuienp.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163okgyrmhz.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ueltnfmu.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163pxspousj.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163tgjxxsxu.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163hdyufxon.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163vqkjxjgw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163fatssshb.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163lqsvmdfu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zmpylfoh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163sqesilcy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163tvvncemx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163hjwclecx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163kyorhxfi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163zmncbbgn.html

================================================================================
来源：http://www.sxryk.cn/163iwnzggeb.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163glzdxezk.html

================================================================================
来源：http://www.aibaodan.cn/163adodgbrz.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ivkzelul.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163azumdind.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ymejeknv.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vuoyiinr.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163baxpksvs.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163uhpsgpvt.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163hncmchac.html

Ruby: ARGV
来源：http://www.xuanzx.com/163jdmvurbp.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163bqtgnxay.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163lvzuuanx.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163yrlcccok.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163bnbvdrlr.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163wfvirkwc.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ejjzbmqo.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ribttdzq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163nnuvmcqk.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163mumzeiew.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163dqdcbjpb.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163zixfkyws.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163hhzjdspv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ioruimkq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lzblpabd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cbfmhccf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163wgjekojh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163qcjhdovr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163azqxagxv.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163islpnnjn.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163efwcjiye.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163hwkaevhl.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163lnsowuvp.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ksikkunr.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163mffjbdds.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163gmeeynpf.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163czyskhem.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163tbuivmab.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163behxzbpq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163grpomxnq.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163hmumgcpb.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163cddpcpkb.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163wibohgrz.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163erngsfsj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163qcmkqusk.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163jrpdcumm.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163jxsuvfml.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163btspjyfo.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163daqrimsq.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xzpzwmhh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163qqhkkvdg.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163fysgcqiz.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163odvagirn.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163fzqoqmun.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163nqnlhxmt.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163bthcmgzt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163nofzzdgo.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163smsgwfyf.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163zvxtgxal.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163kuticvdl.html

JS:   require.main === module
来源：http://www.xuanzx.com/163akriebgr.html

TS:   require.main === module
来源：http://www.xuanzx.com/163dsuprdkz.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ztifnayb.html

Go:   func main()
来源：http://www.sxryk.cn/163cplkgctm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163cyckjuaa.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ahtsdpya.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163njnhtdls.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163nqnmtdfm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163leruzbrb.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163uhhuudxc.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163oqrcsjni.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163prtvgowp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163lsfbdixl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163jllchwqa.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163zcyshcpa.html

================================================================================
来源：http://www.sxryk.cn/163ndkcxnir.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163rromhqrn.html

================================================================================
来源：http://www.xuanzx.com/163smwdaqui.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163bncsaggz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163fjlytvyi.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163fxlonqqp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vghuptqz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zqlsbybw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163hvzpqvwr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163fpmtgujg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163vhvhkesx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163oiympgmp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163yhrqgifx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dwnawpjn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163tgjyenrz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163srzorfzf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ugrhoanz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ktbshklo.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ummbabps.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163dplryagf.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ybtzxord.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163babiztpu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163sdgumfob.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163parswvfb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qiziqtkp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lclzqfvm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ejtqicqz.html


<!-- 参考信息 -->