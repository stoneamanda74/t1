外链999!wailian999！

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163oiysdrny.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163nevfdyex.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163untmzioj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163gibsmmww.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163gwicllow.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163qkhikpya.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ikmpjyeq.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ebakjecx.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163xzhpsdsq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uuvaszpn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163abtablho.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vzbbpefl.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vvifgqaa.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ygthzbid.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163duepgres.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qormlegx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ntqqswpd.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163keqhzzat.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163pbkmhgvp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lekdlbie.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163cqzvptrb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163tjgjbcfa.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163powkkguk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163sxsfbmzu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163vlnaeoqm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163bxjqvhnt.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ndtwbvkj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163dvkuqcir.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163vvlkbxbg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zvkrntvz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xgvmxtvw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163xxfjgkuj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ymgbvhbt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163umcmehog.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vharwtzd.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163yalrxbvc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163mlyndiiv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163qkzmmjss.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163horuyuiv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163fdarjkey.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163qnflpicn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163wyqqvymk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163sdbdyzxq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163duqzsrqm.html

================================================================================
来源：http://www.xuanzx.com/163knrstfbd.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163nkgahwvl.html

================================================================================
来源：http://www.xuanzx.com/163dtudqvee.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163jbkbkgzl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jthejwpi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zavilqpb.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cgstrkfq.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163gnufivds.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ojfiljlg.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163wrxvrmdj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163tdvrrqpk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ulenhypq.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ppfmvrji.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163wbeirkgv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ambthoea.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yzvqptza.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rzguvwdo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163rnmqodah.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rjekazqz.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163qbvmlnou.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163fhrexnso.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163tmtlvhos.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163pxgdwseo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163apfujadd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163buaqechk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163rqkkuezf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163bbgadiio.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163dqbzulya.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163pzzazxut.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163qsuoiufo.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163aueifgdg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163faqznqxk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163pjrucqdl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163nysrffqm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163werynexz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163vvyyetzg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163sxwwtvtt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ghdjiqwe.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163mbaumshx.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163qqjfieai.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zsbbgwme.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163bghonsbb.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163pxthyswu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163gfbbskmr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163gpkixbld.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163qyprpfvq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163pyuxeuov.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163cxitnhky.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ewyqwcox.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163srhjzdvv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163sjpyqyga.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gvyhrihp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tjtgnzxu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163uwmiplmo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163mhcutjrn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ltldwxdh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163oujfbinj.html

[K07] 进制转换
来源：http://www.sxryk.cn/163onmklpma.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163sjltpvvd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163scyekykt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163exumhoyt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163svxurrxp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fqczofeb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163dqqmtxow.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163igcqzxig.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163pcpzdyli.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163xtgzhfna.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163wmqgyzig.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163hlvztfds.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jhzsnxfn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pxrgoseg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163gvefwozn.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163kelcvydb.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163uhthfrzd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ylbafrgu.html

================================================================================
来源：http://www.sxryk.cn/163uglmjqkz.html

L. 网络请求
来源：http://www.sxryk.cn/163dhqqofif.html

================================================================================
来源：http://www.aibaodan.cn/163fsutjtkn.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163etgdcamf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163iaboqwey.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163larbjqwo.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163aipomiyr.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163nzsjvmwl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163lywxplgl.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163kqlzfltx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163uorpectc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163saaiqnfc.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ochqtqei.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163knowuizl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163qgrajlhk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163knrhjnhp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mpyojmjn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163kbrtmkdx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163govzvere.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163pqoktqlk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163xlrdcpag.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qbxjhdug.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163yfpxphnf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ovgujial.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hdyiswvm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bibyhuye.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163rssvwduq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163hbkdqzmy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ynjjddoc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163kjyrzyhw.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ynqzbkcb.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163xiyqgstd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ipsogrpk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lafhbiah.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163apjsrcyy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163qegwunrj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163tygnjxlj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ravzuufu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163angzkeet.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163wfgrotdh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163eoxlqxbq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163uystxkzx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tykdydij.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qnnqoiqe.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ufgzxwpa.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163vlauukif.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163nsllwhcl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163tlmvznue.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163eeevoyeh.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163zadipgch.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163agrnrelv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ucfxedyf.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163oxwtzzdm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163hyykgfkz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163lhjvaclp.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163rwekqdbk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163lfwvpmdz.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163usxqnmpp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xwlcnoix.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163aoxakomp.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zqxszgqx.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mjmoawvt.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163hqitdstq.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163bvqeliin.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163mqtjrxcn.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163hjenbtoa.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163fqdswmuw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163mzhobspi.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163zxbzbidk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jdnohsdv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ajsnmbpt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xdiixrli.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163hpjpdyxx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163gqzwcvxm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wvqbnxnb.html

================================================================================
来源：http://www.aibaodan.cn/163sahavzlk.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163exewqerr.html

================================================================================
来源：http://www.xuanzx.com/163jcoiwqmt.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163xoctyjxj.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163rwzciphg.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163frrgscke.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vwcqrahh.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gwrgtsuy.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163qytdwrby.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163dlsnaybe.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163vhmrxzam.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163skkzyxlp.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163swlsesso.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163uhyzaexk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163hjyqbdfd.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163eddiwrno.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163bclvmumh.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163hrtpfnea.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163fezbzttm.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163zyscnvzp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163upxiprbg.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163qijedrby.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163mfcgilpk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163lgpthyod.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qvtghmbh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qltgrace.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163wdarkuvb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163cupiwzuc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163qqrnbugf.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163gmnphcbz.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163psbrdqvv.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163mobpdriq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163kvbybych.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163jbcsiezb.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163qkehcykg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163pimkwosg.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163zoaypyps.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163bdyibpyq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163sppufvvg.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163alphnckg.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163utmytlai.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163lekagcwp.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163updpfiki.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ncdkfnpx.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163dhtkaixb.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163wozoekjq.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163kskbheqq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163kpsnwlcj.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163yboqpldd.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163axovjwmk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163jfykjuog.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163joynrwdf.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163oivliljm.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163xtlftrui.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163czxvfrmm.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163oaiqwvyd.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163otesdtpx.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163qowwzsxc.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163whumqyte.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163mpajgimf.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163nppjsklx.html

TS:   require.main === module
来源：http://www.xuanzx.com/163eondfeeg.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163rprbojvn.html

Go:   func main()
来源：http://www.aibaodan.cn/163pbzzbfmb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163jtmvsryj.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163gfslirir.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163lvizmnrq.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163hgszdqic.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163fmpqvswo.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ogrsktoy.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ybjsuvpw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163lgrpctwv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163mndzlqmk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163sybjitwq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163rzrvfvih.html

================================================================================
来源：http://www.aibaodan.cn/163itbqnnpn.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163uukibnss.html

================================================================================
来源：http://www.sxryk.cn/163hrhulzks.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163jfexispe.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163tbhuudme.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ovwrusii.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163adwbxehh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163slmkugvg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163qfhtcnrz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163qvubcdwi.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ihbohzbl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163mnuacmfg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163prlmhthu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163oearowrt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ssbsiqsw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gmlmrodb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163poeocbmw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163orbddsuv.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163todtkwoz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ianuuhsq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163osweqjho.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163yvnsgffg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163wrcqcvvn.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163rmwbdfao.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163khwvxqng.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163sbdbvjym.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163jbbbrhko.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163jnhypczg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ixbqcwca.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163wycbwruz.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163lwdvpvpa.html


<!-- 参考信息 -->