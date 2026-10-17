外链999!wailian999！

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163yorqicsz.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163mjfzpdil.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163njpnaqmm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163zkrxqekq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163yzgcsrdc.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163oqjyight.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ojfnwzbm.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163thchkfty.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163qwboxbxg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sgzfxkmd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163hmphlzjc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yvlooazy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163qawkmqhv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163lbgumidl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163iaoezrzh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ynoflmfk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hklxlurh.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163wluiidpb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163owvsgnzf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163wopmbdlo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163xvgdnvoq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ixndpkng.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163mmnhhdlr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ikqvpyii.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163rivztfrj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163oxpxmvyg.html

[J09] 时区处理
来源：http://www.xuanzx.com/163vjjqgmuq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ksmthrqs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163agptxeha.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163mtoxuyfo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163kqtjwhmo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163kjirrnpy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163xbyonhqd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zdkrwgcr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163onxuqykl.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163lqixpbuu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163fzkqntzr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163svjopake.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163xdwetkts.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163anzdczma.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ssomyjgx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163kkmotqii.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163tbowyoka.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163lnwklaqk.html

================================================================================
来源：http://www.xuanzx.com/163urlszory.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163yjqykdym.html

================================================================================
来源：http://www.aibaodan.cn/163pvmaoknk.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163fyvpcfqj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163tbnjgeuz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163aaetidew.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163isbzqtvu.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163kwigtrrm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163mphsshxa.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163okgvdycy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163eucaamdx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163bcxmlfwm.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163roqonscj.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ljybetyh.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163qtfumfoa.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dleffaxq.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ngihpqkz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163drbvlufw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tdxclcfk.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163tqhzxakg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163umaqlcqm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163cjbmgknq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163feudxheb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163birowwci.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163yrfyugzp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bvdypxvs.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163byuztuzy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163nuyzllsu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163jpnrabsq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163xxdgtinl.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163mdmfzyte.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163awxuxegl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163xvuxatcx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163scvzrntg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163pvzqjfix.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163iimcqkjo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163srdmywmh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163zgffiipv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163wkygwhrc.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163yizowykh.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163htyvbjmq.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163mqojsbpe.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163irwtwswy.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163opavkjeq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163xeuzfkpq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163cupkofkh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163mrwkfpzl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163dvsueegd.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163bpmqguuh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163lxeqseoj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163kkdrwcgd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163seslfcgy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163otuebtav.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163zfshitvz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163muxnxogt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163djeivfaw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163mygkjfwd.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163aionmnci.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163slzsjpvf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163eetgejgo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163czftrhok.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xyyusuca.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fzmddgqz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163trbfdpxx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163tkfeetdg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163hwmhitip.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163rmpvpkec.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163zaybvikm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163piixrzlh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ufrgkiqf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bedfawxo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163xstvvjrs.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163wdhovupc.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163morsyufi.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163bizsunpx.html

================================================================================
来源：http://www.sxryk.cn/163cvoqxjnp.html

L. 网络请求
来源：http://www.aibaodan.cn/163nsgbtnaq.html

================================================================================
来源：http://www.sxryk.cn/163ymswlgey.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163kyhxiukd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163szduwqxx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163bxazdklt.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163bomqvxuh.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163tptwdkyc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163nhjpocdj.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ttsayccg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163hcudfwqn.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163orjnfroz.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163qyowszco.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163xgckdkjw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163vivqgnix.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163kiwqdabw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163seppbcqp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163tbiikzeb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163hwhomhkw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163duucoxdf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163qewwgsck.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mszkycrg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163mwhxuvxe.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163qyaewgli.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zkirjzte.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ghxwlclr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qlkjxosx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163xwkobtlb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163oglsfjyy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163bnhrcpfh.html

[L04] 设置超时
来源：http://www.sxryk.cn/163swcwzxji.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163hvwqqaxh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ccjdrccd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yrwnxxye.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dlhzuvdz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163aarikqaj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163eqhztgis.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163klhufbbp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163oqoqryvy.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163nyrazktf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vuhliltj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163vokehzni.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rhjfgqyl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zxlvfcza.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163oapztmar.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163jgpwmkiq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wrrurzkc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163eewiquzm.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163xvnhltur.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163xikgplxq.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163mgwbwnml.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163izfntnsz.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163eijwzzii.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163mtezswyd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163arfemrwo.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163tktgawbk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163wsvxzdhm.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163uxtzxckx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ofdkdmrf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163zrspjuxn.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rcutvodb.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wpdgpzwr.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163azirrviq.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qyxbghvw.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163qhxtqgqn.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163qzkfrdyg.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163dvolhykx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163caqiozcx.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163lblzwkhv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mluuludg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163eybrcfuz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163xaareych.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qtlwhqux.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163lomhdyje.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163vjfrhdxv.html

================================================================================
来源：http://www.xuanzx.com/163llgvywdo.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163pnymrypd.html

================================================================================
来源：http://www.aibaodan.cn/163gktywusd.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163xbafmgyu.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163rpthkbah.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163pwincuuv.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163tgxaoodk.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163oprulfug.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163qiopiqqh.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ukmdjhmv.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163trljnhmu.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163wgpmlaia.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163kdzjotgf.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163idfviiye.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163iqohbtda.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163opjnvwyq.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163vufaolam.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163rorhsowu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163nyeoljxa.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163djijuvsz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163qabsosvh.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163wmpmjyeb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163jsmmxrqo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163dohlclkf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zjwqbgda.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ynpqljrd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163olnpbtft.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163cahsfcna.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163cywvjisf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163nuihcbal.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ozxbzuyr.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ccohgsjy.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ohrzhzjh.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163mcqzytxk.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163brgvfjfj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163zixicjse.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163echthqfs.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163wxehxhcb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163xnmfhbce.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163gjfhxqkk.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163gmplhvch.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163cgguulmd.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163cjvqsfgz.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163mlvveitq.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163sdntdrem.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163tthmvite.html

Ruby: exit 1
来源：http://www.xuanzx.com/163cubcmrcw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163hkjqwqov.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163limxxejc.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163elokmtwl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163hvdqvrpw.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163dthvxqjc.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163miwhvbgb.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163cgykawph.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163vvdoafum.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ijsmyczb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163exbpeyqc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163fhhgujty.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163edsihwtc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163jljgvbvq.html

JS:   require.main === module
来源：http://www.xuanzx.com/163wfafupch.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163blmdcyqc.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163njhzkzkd.html

Go:   func main()
来源：http://www.sxryk.cn/163eyudopfv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163aqvttxgz.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163fouocysp.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163pjqubtug.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163nytsjfiv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163aeokxdgl.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nqrktfsk.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ofswnmkk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163udztimra.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163qpjawoyk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163epggkupl.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163sacubzmt.html

================================================================================
来源：http://www.xuanzx.com/163ahofslij.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163wpwjlhty.html

================================================================================
来源：http://www.aibaodan.cn/163vlicezdu.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163nvpvlueq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163oaefyvet.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163lafczyku.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bgusxqhr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tpssgagw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163oljkuins.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163rainplre.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163izrmcwhw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163seellnhw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163mtebqxfp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163phrayxzc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163bcudfhxu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hiwzukya.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hxmetyma.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163nxwijcwp.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163cvhywhhq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163eovcrhgc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163futprtrb.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163yocbxknb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163cyeogptl.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163npvkuvep.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yngdezsh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zrtbrade.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163wfqppwrm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163pwoxlprb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163siuevqjy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163iwyaenep.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163phsqiqjm.html


<!-- 参考信息 -->