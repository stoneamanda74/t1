外链999!wailian999！

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163mdaludcc.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163bmgvtbxm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163bmgsbfge.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ucqkyzde.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163kdrppisx.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163quoybzwa.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163edefzrzp.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163gcwiupeh.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163hojykgjz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hpxseych.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163sojdrikq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163izlrjzoc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ktdemnnr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wegpackm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163heipunmt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163owhunsta.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163odyohahi.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163fqhsrytu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163dlmqznyx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ngjejsqg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163wubpjlly.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163yrlrvnhj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163jvnymsaz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163rmldnbmy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163luttwnpy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163saavedcr.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163busbmues.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163xhrpjjgm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163haaxzncc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fzpqbnmx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163dvjdnltk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163mtdwicun.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163lbtymouq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163qtyqcrdw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163xvormoep.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163nytymild.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163cnxakdvl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163xxmtifxr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163wdmvnirq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163gzuidfkf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163vutvgmba.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ddcujtcc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163jqzkxvfk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163forgkxnh.html

================================================================================
来源：http://www.xuanzx.com/163qjtlmhbr.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163avzghvgs.html

================================================================================
来源：http://www.sxryk.cn/163iobcotlt.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163wrvrvyjq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163usyuwpgh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163umtagpxx.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cpqzujib.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163aiorfije.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163xhgxplvy.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163yftucany.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163luqcchek.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ordzzlka.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163qdfomubn.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ddlzrubi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163okqkneqt.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dxzcwlvo.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163fviguyji.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163hitsclgb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163brauzsza.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163dfmubqco.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ntkvpplp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163lpxnvmth.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163dcqmhfoh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163gpowxlfu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hknjcdrn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vjcgcsyw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163uedcvpdy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163duriypwm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163phnwtanp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zpuyovjw.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163zjgzfumc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163iohyazbs.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163mtenqrlp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nnhiitpz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163bkxatscl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163pivfordt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zxdczgsw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163upwuaeba.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163pwlaenzm.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ftgbiqaz.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163pyjrqkkj.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163gzfqrfjr.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163arrteeda.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163igplpcmw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ismbpire.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163fjobdsvy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163xvdgsmtx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163rxdpuckc.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163hvfpweob.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163owayqyas.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163cdonrpfe.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jyfxnnso.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qjzbfojr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163cowzzbrm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163yiuklatg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163zuzlnhhi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163kbkqbekk.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163kxecduhq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163kaqshmno.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163mkcxlcck.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163aromrzqi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lrmpmfef.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163tgyfjnyl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163asbpgzyr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163aohixhit.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163gbrjqzbv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163qdvrneel.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163xjxoenfd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163guxdxomw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ctzqnuvl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163yifveyxf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163tptlchxm.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163eoxqdras.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163xlervqss.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bftmoamy.html

================================================================================
来源：http://www.sxryk.cn/163vnxdqgcq.html

L. 网络请求
来源：http://www.xuanzx.com/163tfuvupxj.html

================================================================================
来源：http://www.xuanzx.com/163rpjwawgx.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163agvbtjkp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163elsofjcr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163bhpxuqkd.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163jtxdsauf.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163dpbqfxii.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163tuspnrdu.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163mtpmyjbs.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163lbqylwax.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163uoixfyzu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ibeovszg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163wxtuvwzd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163mkuqsnpt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xxkarkfu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163clsagabh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163msjduhie.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163tudcnmtq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163fxpoqknv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163oktvthaa.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163szofnelw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163xnwlrqfi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163xigsandt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vsgpkfog.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kgfnqzbs.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163yrrxaejp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163zruuiieo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163xqzgoxut.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163czjylrco.html

[L04] 设置超时
来源：http://www.sxryk.cn/163wjtfdset.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ecbjmcfy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qwwandwd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163atilaaxo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cujlwowo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163wwiwffhc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163aoqmvhjr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163vbetrohk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mgtxwati.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163whdbqbei.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163sayagbbh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163mfnzzmou.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163szzzkhgj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zsyniufp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163vkhklqfs.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163bipdslmo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163rokbzvwu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163mnfepodq.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163mrgoijnh.html

Py:   resp.json()
来源：http://www.sxryk.cn/163sibhwwpp.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ohfccutl.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163duxnppir.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163pdgaqwfd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163wbpaesdr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163lquymwcf.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163aiwkrldv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163yscegxdt.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163bfezsfiu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163mmsqkiab.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163nwlutpsi.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xbowqxgv.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vkxlurfg.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163cukquuag.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163jzqdoslr.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163vtcwvhkz.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163gybdcaxr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ihrulwxr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163thvdwqjz.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163fcmsnsoo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dnhdlswx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tnjunlwi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163lpnoorwo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163gqllotir.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163emycuwac.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163fgokdcli.html

================================================================================
来源：http://www.sxryk.cn/163smgnvwmq.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163edqlspqw.html

================================================================================
来源：http://www.sxryk.cn/163hsqsqisk.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163cruqegbd.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163uafhhjih.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163izsqyutj.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163vzxpaqnv.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163urzomotn.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163xdmsyjhg.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163eoifimyt.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163xdsoegkw.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163dulzrxuu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163svtanyse.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163arujkqjp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163neufyvge.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163pxmcebcd.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163sfdymnql.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163nbifypuf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163edtoeaqo.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163usacnqbp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163hajghjdy.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163rykvladr.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ljvnmonf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163qirttgvn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163sntzzxxc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ndpdlrjr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163miwylsat.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ytbgxnnx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163uxydahyu.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163pumlqqpw.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163qponzmev.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163yovgjbgz.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163qsndyrem.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163jqeibwye.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163kyllmcai.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163efblhdzk.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163yjoeizhy.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163kygngmbx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163kursdhuo.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163fygrbmui.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163lqqnopws.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163fhcgcibp.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163lsjxmlns.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163yimgvvbv.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163nybncsai.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ogmwbqmg.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163lsymfxkb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163sxjutgjq.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163kcsgzgnl.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163eesunhvj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163chtqbupp.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163guwwylwp.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163iwztxvbv.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163dbaqmmsm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163cpvrvamg.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163etxshnna.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163mihwpjdi.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163lzmtjqxt.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163rwtqtksv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163gvhcdlbr.html

JS:   require.main === module
来源：http://www.xuanzx.com/163xyiyjjej.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163yyzlicac.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163vevvtnmo.html

Go:   func main()
来源：http://www.xuanzx.com/163owxspigb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163zkovaulm.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163jkwngxvv.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163vuopifjj.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163lyhafixq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163dpphxuky.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163kpgktfko.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163glcxubrj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ycfafzth.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163uqnpgtnl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163txgrcmyq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163dhplfgrf.html

================================================================================
来源：http://www.sxryk.cn/163lxkzlnnv.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163apufypzb.html

================================================================================
来源：http://www.sxryk.cn/163bxbphmjb.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163usqxlbey.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163abthegjc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163kvmrbbqj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vtyskffa.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vqdskvkv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163lhostmll.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163iuirlqey.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163batcxyve.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163pvbwvepk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163mwtstvap.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163plclypfd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163uyycpqvs.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lwiknsdr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fcpvldro.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ufmajoab.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163salnklqp.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163gsmndspp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163raenlrol.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163omfxmmor.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163hvzxmzsu.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163tdnrkgci.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ewhmhqrn.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163qclfbdld.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163vxlrpbzf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163fyhopukn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163siwjpekn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163zatubqti.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163tuluoelk.html


<!-- 参考信息 -->