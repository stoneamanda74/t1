外链999!wailian999！

[J07] 比较两个日期
来源：http://www.sxryk.cn/163qydkwtbj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dbnzcfoi.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163nrthqian.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qzhbbhfe.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cbvzitvv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163jnfvuilm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163vrmysfxh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nxjfjbag.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zhfzsecr.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163axxzldku.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163qobmffoj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163kzkimzjb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163mdqxfnxg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163lrfwvlvu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163escrdklx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163bevaassg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163nbrfsexo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163nhgjjske.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163kmvucqoa.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163kjkgwven.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163mgpfvdhn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163cvtvumvi.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ijyhvzdo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163zwkyrhhg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163hizumvpd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163hpketthc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163rqxxyder.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163heeazwbq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163fdzuficl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163rnygpwzt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163tqosdpvw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163avzqdbrf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163zvjgcmyl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163eigxypsl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163jdovlfwv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163tujdxhfq.html

================================================================================
来源：http://www.sxryk.cn/163elgacikx.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163teodkaqt.html

================================================================================
来源：http://www.sxryk.cn/163rsewummg.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163foyazmgm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qmoksumv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163oufhzore.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163wixqcire.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163uivynzet.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163aejxyeit.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163hgbrcstn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163bqoqwhiq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wuvknduk.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163uraqrseh.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163imdebokt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163eptrxlne.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hzlkbywj.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zndnxjxf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163vethkeca.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ixtjpfkg.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163wokolzrk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163onnfuqbn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163npafrori.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163tsrpnrfo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163bdpbmssh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mhfwxlze.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163gogpfoxn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163osezrvbl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163cdrufutj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163koijwoie.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163vqsbxssk.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163lxvxmkkj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163iqiabnle.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163elopnaze.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kgsfnyir.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163wdxbbuon.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163itenthcf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vdiutemb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163balmmogs.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163kvphkusb.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163tjigywuj.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163zewjkadf.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163iaydzrrw.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hgyaizmi.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ekdvjmad.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163anmmgzdb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163lzntzmxt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ldsklqab.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163fbdijugo.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163zwzfwwuf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163mhvfyvxu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jatuvhms.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zdevywbc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163inpoggwe.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ehtjxibn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163yoqiwxjx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ahiovbme.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163xywvpaqx.html

[K07] 进制转换
来源：http://www.sxryk.cn/163mdqouyns.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163hcctsnzk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163tdbukgce.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fqucwkcq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ogoudlzs.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163njuxjxoe.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163rgdsogdc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163llcigsch.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ftirvlqg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163syxmemsf.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163hlhqrfby.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163iagzhdfk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bdhbxogx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163sntvujqy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163tuqnkwmu.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163xpbwfglt.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163zuzdwyaw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163wyslhfdy.html

================================================================================
来源：http://www.sxryk.cn/163gyxghvte.html

L. 网络请求
来源：http://www.sxryk.cn/163qktjlwpj.html

================================================================================
来源：http://www.aibaodan.cn/163kzawnueq.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163qluuxcbv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163eugzwlmc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163uxubcjpp.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163phfhudsb.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163mambkjbm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163mwwaiiiz.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163atrzjzuc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163kxtsefpe.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163kurfrimh.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163iljwoosg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163gdtpyhwj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163kwkwqrkt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zfuxmhhz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163krevljro.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163obbjgekf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163lpuffpys.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ojgonsff.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ttcgfdis.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163vyayswfu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163heyftkhk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163sdmmkhoc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rfyevqjb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ncjfmmgf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163eetishnj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ccisqpei.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163chebuhkw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163jfgusckr.html

[L04] 设置超时
来源：http://www.sxryk.cn/163hctafmsp.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163vizxxnmj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163jwmzqcro.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zdpmnzne.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zzzwuvio.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163qxspmuzc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163wmjwntej.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163cpimegwq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163eerfpaxr.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163rwpylzgi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163hncaxryc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163hxaehejb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zpgqglkp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163nmrqdruh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163zbaopvao.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163rjdrlzlm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163rcysukao.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163srazgcdv.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163nofucxwc.html

Py:   resp.json()
来源：http://www.sxryk.cn/163zbwepele.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ayopubcr.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rcduwgkc.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163snlwgtzc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163lmqywpra.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163yyhfvrpz.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163iqffblpz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zlipgzgm.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163kouhewht.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163tnjxqcyh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ijwizhnh.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ikdghhia.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jqzhumju.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163hvtkzhah.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163qslaalpi.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163eyurnrme.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163jzxbhted.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163zwmijocu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163wgrxhazg.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163vfwlkrrp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cxxiqygp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pvanjyxs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ltnrphdq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163twnbtwnm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163sdcvnzeo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163uwcyoubz.html

================================================================================
来源：http://www.aibaodan.cn/163bqbnbzrw.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163crjiaodf.html

================================================================================
来源：http://www.sxryk.cn/163ogmsqcjp.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163urvtnfdy.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163aaqmykzs.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ggzvqybh.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qgdfrltk.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163petvvuwr.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163fhxsxumz.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163uzmztuyz.html

Ruby: ARGV
来源：http://www.xuanzx.com/163euzwaiey.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163gqvsnppj.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ffkaygar.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163lmsllxmc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163dfilmqbx.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163nknowyze.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163rbzfhsis.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163hugjnssw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ybnvqtzh.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163mzjixmgr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163sptezrve.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163uebosubc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ctbqucrc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163climfzbr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tluobgya.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zbbxkbin.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163wykxways.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163gstedauj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163qyxmitei.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163asuhgepk.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163htwqpxyd.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163rfpeplwx.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163wbevzhhk.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163iskhcyab.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163tjmjuxwy.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163qejzjvov.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163umwhrqaf.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163tggsbtjo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163owaxmvki.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163fchnsihj.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163rnaihrvb.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163pfcndbhf.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ghuanbfk.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163evhvefpw.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163dkihmsuk.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163bfwogibn.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163lvgeobsh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163czrplias.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163abeonfvr.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jxnkhapf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163pbfrnvuq.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ixdecxnt.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163vgultxdi.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163jpkluauz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163vyefxnjj.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163cyjwakts.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ypucymjo.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xlyjhlyc.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163nicseiry.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163mwntmoyv.html

JS:   require.main === module
来源：http://www.sxryk.cn/163kijhiuve.html

TS:   require.main === module
来源：http://www.xuanzx.com/163afraisln.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163zkhlnubg.html

Go:   func main()
来源：http://www.aibaodan.cn/163axujvfzk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163vcriekkh.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163qdxntvub.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163hgqkmqbh.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163mylooxnr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163minfsyfc.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hwifmkny.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163eaiaoblf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163qeglyiab.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163zmwrxgty.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163bljfvoab.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ouymyydg.html

================================================================================
来源：http://www.aibaodan.cn/163ciwleusv.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163voooknmt.html

================================================================================
来源：http://www.sxryk.cn/163iyigxiqp.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163fguafdeg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163fcxtocod.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163awlizrwr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ajhzqgke.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ljltjtzc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163szoqcylk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163hcfcdawj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163icbteqaa.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163reknljvb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163vkllrmtx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tdlihaet.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163wsxmlwxp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qwwovskz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ccavzwfq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163yiozusvq.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dbpzkgep.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qtpmmubl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ogklcgne.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163xmzzcgbm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163xuuubalw.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163kakdzhxa.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163uepkzvst.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xgumtnmn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163fypuwdxm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163cqiogsml.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ckkyukdl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163pfpnoawx.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163fdtkrdqs.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163imciyxcc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163zcsxhpbc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fbnfjmvp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163oogyztln.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163olcokvwu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163lzqqnaiu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cwbvpcdl.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163njmeoduh.html


<!-- 参考信息 -->