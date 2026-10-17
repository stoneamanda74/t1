外链999!wailian999！

[J07] 比较两个日期
来源：http://www.xuanzx.com/163mmyfdmic.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hdbusfsw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163qdwowhxb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yndekuog.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tlsoygao.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163egjaxxns.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163hmsamean.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163skjkvqdu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163prifkxll.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163cgbdiqjm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163prsdkmbt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163wwexliwg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163zpvrqsmo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ghkcedoc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163lnpprbpa.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163thlhspdu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163nzvkrsni.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163cjcidwdh.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ykpiynaf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163aegqfnno.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163qlohxorw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wcjfwkbm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lvimkplq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163oxlzznhx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163mrulxbzm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ufwiuwba.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163hrbiewio.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163apyeehyj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163hphgkygj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163jhjnpsmp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163liafldbh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163iqoavizw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163wcpmdftf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163imejcjxw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163kmphgoty.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163kplpbuqj.html

================================================================================
来源：http://www.xuanzx.com/163rhcywdpu.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hnbfeuxj.html

================================================================================
来源：http://www.sxryk.cn/163giydnkbg.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163plunxhnf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163mjyndztu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163mondrvio.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163utllgbbj.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mprifasg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163tlavkmyl.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163fasrfhes.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163mfnehudh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163mohdjwvo.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163fixslzrj.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163hymdouff.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163zhjtbtvt.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163evbvqfjb.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163svpstauv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ekhsqlqd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163chiluken.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163nyyvholq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163sfkvjeeo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163rphhyesc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ftwoykhr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163uhxazcvg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qftbbqwi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kxfmaejn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163eyeqssbs.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163hkpilyhz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163rmffrtsc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163dkxuujzv.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163pqweeqwn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163xiqxjqvg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163nekeegoy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jtleqznf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163khgkjkoq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163rbkebbem.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163aghhoxhh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163cgxhgwdh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163bjepyawh.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163kiivuebq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jdbtgznv.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163xeqtwouh.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163exvbgkpd.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163juszbmqr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163mcdreemh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163yyyjzoem.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163biiqajjw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163gacmswun.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163dbwrvtfm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163eatbfxwf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ynpmzimh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163bgdkiral.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163nhgtzlnx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163bmplzfaw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ljkgfhnr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163guylqedj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ileybqyd.html

[K07] 进制转换
来源：http://www.sxryk.cn/163sosenjss.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163sakdcykv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163tyoooydl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wrfvlxbp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163uqsqjpuo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163bptrdaqu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163hifrduqb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163gyxsavzl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163caabzuwl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ntlxesxh.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ewdybnbn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163tlkylair.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mprxaouo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163trsxsqyo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163zfzsbybe.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163afauafwo.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163seysixwh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163zzpkvwbv.html

================================================================================
来源：http://www.xuanzx.com/163dqhykaqt.html

L. 网络请求
来源：http://www.xuanzx.com/163ewnwtjhf.html

================================================================================
来源：http://www.aibaodan.cn/163hewmmiya.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163jevgmrla.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163fnamznon.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163rkesdvme.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163tkfyohft.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163euefoqjy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163zstrgzxy.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163awqhvrrp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163xzzdzmov.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163grublenf.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163niirvaqq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163aybgvmia.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163lukbnesr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wkqqvwak.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163apodpjhz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163papjrgaa.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163tqydqlhr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163jvfwphrn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163qzuuysvh.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163xzsgrkoa.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163tkjsrtcp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163vsrqpbpr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jzjyvxqy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163hwxfxbty.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163hhitnywf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163bdygsuxw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163umxwejwo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ryndspyy.html

[L04] 设置超时
来源：http://www.xuanzx.com/163xhymcfyi.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ywgkzonp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163egybunwn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hadjmdpn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ibcalfny.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163mukezjbw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ffiogmeb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ihzxywhh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163rzzjhoak.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163hcfwdvaf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163qerqpwuj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163hwjhkvnv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163gbynpnoa.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tijzzipo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163aupxwiyt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163wpyzeycg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163sdpqidoj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163kdeyhcrt.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163uqciamtr.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163gxtslwrs.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163qojsphil.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163kwdzszol.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163lthnmphk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163fposwnrm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163pnzmqwnq.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vmxoakec.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163tjtiwtbu.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163eppbmcrf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163voqihleh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163oytkjrrv.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hnnfswax.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ehclefeh.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163oqnzifui.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163cwwdzkzg.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163bqprnwbu.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163dbvdnyjs.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163shfikpta.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163kbuexthu.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163oxlgdnll.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tolbmact.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163piqfdipn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163kkjwopod.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163uhtgjbvh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bumcgchf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ccycfily.html

================================================================================
来源：http://www.aibaodan.cn/163ygrczkmh.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163rsbelmpr.html

================================================================================
来源：http://www.xuanzx.com/163orhroanh.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163glexwmhp.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163omrndmgj.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163njlydtga.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lzvsspcl.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163npwmnihc.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163dplxguan.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163hqfbwvwf.html

Ruby: ARGV
来源：http://www.xuanzx.com/163nnwiqvtz.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163congneki.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163jxbqwkyd.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163sydfdpua.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wjxcrnhr.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163yqwpcvbi.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163xrjoadfh.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163nsnixhdc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163efiopwie.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163aabdmvoe.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163fwmqjgfs.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163havfsxal.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163uhxpuhwe.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163rmgzefhy.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bwyqybjr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bonrywpa.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ijtbbuvs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163owlszmny.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ixfzjczs.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163amqelqsv.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163kpisolww.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163alkmipnq.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163stnknbvb.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163rkfigbxi.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163vpptitir.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ruyyyfdb.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163mthpfaei.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163pjwfvrby.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163jsegzoji.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163eqdlfqqc.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163vawzohwo.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163trwbfwca.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163jycxjnti.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163bufjulph.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ensnmtyi.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163nclhnack.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163orxjxhtw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jjkegatg.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163kfchfqxb.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163scsyhviv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163bvdqolht.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163hdrwfbwy.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163fdodmywr.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163wnlecxjt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163qcfoauka.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163qyawwxnf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163lbdgozul.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163wewazrit.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163zrnqqtsx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163gibxtsbq.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163rjrgbfjr.html

TS:   require.main === module
来源：http://www.sxryk.cn/163oagxpgoc.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163zipitypt.html

Go:   func main()
来源：http://www.xuanzx.com/163gikgodho.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163xfcdpimh.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163xiauaqlf.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ksxqizno.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163pvvrwbpb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163wydffsct.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ztyyacdq.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dtqrozpg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163axvthgjm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163lylvpspt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163bovmrbkv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ojuhxjsr.html

================================================================================
来源：http://www.sxryk.cn/163wslszljr.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163fkeetuyp.html

================================================================================
来源：http://www.xuanzx.com/163ypjtmpkl.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163yczpqqsy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163iirxijhn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163dcxrlbxh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kcousjub.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uxnnbbpk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163mehcnekx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163mkserqpo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163feasrpvh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163pjffnjff.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163qghmaihb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ehdcdtgp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163wpljlojc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kzbhtaqx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mzjwpfwr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163gonoahgq.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163jlihfsri.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163leykioxg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163addxnfio.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163jmszrnpd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163zjlgnvzo.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163lcyxnwdj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163fkbkzgah.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163molyhckc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163fsyrxwnd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163jujdrjtx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163sjaijlcr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163nihsrmij.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163zdvgrpah.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163reibfhfc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163psrutimc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163pwwxippf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jkmwxdlm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163nnlchodt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163cchvsnad.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163zgmkiayg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163vpmmwdtm.html


<!-- 参考信息 -->