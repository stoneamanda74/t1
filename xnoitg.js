外链999!wailian999！

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163duaywthj.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163fbljoees.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163erwziilc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163knmrutbr.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163deeqmfol.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pxbxdyrn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ndrjroar.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cmakhuux.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163umconmup.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163vloscawy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163koicjcvv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163shqbnrcj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163deltakmn.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163eayopqkq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163nsnlfxpj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163cnzbztbj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ugmnqpci.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163bkhqwfcz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163wlycaswf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ebghaooa.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163zognztlk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mjnnkzfv.html

[J09] 时区处理
来源：http://www.sxryk.cn/163qrkojhzb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163wsehynfs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163cuhnucue.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tlmemsly.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lkczpesh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163jpaxmwct.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163azgmmstc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163nskewxsr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163tjxmndbu.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163zoztkoro.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ivfvxujs.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163lpvyghdq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ubuivtxm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ojqcdlya.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163yjvjyvnr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163roexprgr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163axvdkobg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163douwsdqt.html

================================================================================
来源：http://www.xuanzx.com/163ovsdeanc.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ywtqndxy.html

================================================================================
来源：http://www.aibaodan.cn/163yzmnkgef.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163mqhyiczv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163anquleql.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ivlkpvkn.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ylxusqsl.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rchlvygt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163vttivvyl.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163awixyldq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163dklivyta.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163osscmlts.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163snisebyc.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163uesfofwm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163tkmxhpmo.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zyappxak.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mfadkadl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163hhltelqu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163hfamxegk.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163zadlsdso.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163niooiihr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163nnzrbjzi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xeucfyrh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ktfvoobm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163osbcfxzj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nihfegea.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163jcuunwkx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ebckyvet.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163cdzlquwu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163tnbynekz.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163baezaggy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163sqvjxwea.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163uzsdaopa.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163lsopgklp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tdugspbu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163hwzhcfnk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pilagqqi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163amwyndkb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jaxrxyui.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163qwnolyrk.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ztrjynzf.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163irsrujwt.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rghwesmh.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163tkwrdoyk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163iguwxnxc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163itldzirr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xcckijib.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qiywribd.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xfioophe.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163oannkckv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163yosyztkt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163tivtcgck.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hjbvafye.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163fvkdizrm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163vezuczic.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163xozfwbft.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163yxlyeoey.html

[K07] 进制转换
来源：http://www.xuanzx.com/163xhtdhtqc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163dihuyfdq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163khnmcrzw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ezktkoqn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163rleeptcm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163xgtckezo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163vbhuarwi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163zorbzzqt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163gudtdxrv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163oeblgmoy.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163tckhletr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163lvonhhcu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tqesmzkz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163einsdjcm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163seumkkrk.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ehagfumk.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163bnrqnajb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163woblyclu.html

================================================================================
来源：http://www.sxryk.cn/163xuhdywkk.html

L. 网络请求
来源：http://www.aibaodan.cn/163rfrphpru.html

================================================================================
来源：http://www.xuanzx.com/163jggakbyf.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163gahgjuyg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163gzngeodt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ynekexlj.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163eurqjqfg.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ybmabxpo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163wzlyiqlt.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nvgnspvy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163fjcqvurr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163kkfsnpxd.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163niejhjdz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ltbexval.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163htupdipl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163vjdrrtmo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163mtyqjzfy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163asgkuiui.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163kaaynfsj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163wgvsatry.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163vmjlzafz.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163rhlqfrww.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163wokwvxeh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163rqomarbi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vkfeeljd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163frnwzqgc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163gmxzuuaa.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ykgluonh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163sqwvjyua.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163gkcodbwe.html

[L04] 设置超时
来源：http://www.sxryk.cn/163wosvxpkq.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163iflqtpeb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163lzzuagjl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163autqdaxm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163yvnrtvrx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ssulirux.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163bcfipcpv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163pyqieyqt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163sjwbaycr.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163zcnkqakv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163zdeieuxi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163slfgxhvp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163sgoezdvr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163cwwknixe.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163lxeuimmb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163xvnuguwd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ljmqzivo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163mxqvndrw.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163oolbqova.html

Py:   resp.json()
来源：http://www.xuanzx.com/163emgryppi.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163albbwaua.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163pmpvchfv.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ywuqigur.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163jwegxshf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163bsefdppq.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163luptqgtr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163nwnyymrk.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163zpzaopsa.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163fnizkvny.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163oqehkuvm.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hcwftgwl.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163vhtzhifi.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163amumjaee.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163atqgdjjb.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163heakdwkh.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163pklpblps.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163kendtqqa.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163trlrdztp.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163pzuvcpij.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pjumcang.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vhhntmqu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163wotbldzf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163wqqztiqk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163zcdpdtue.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163jmzpxqgy.html

================================================================================
来源：http://www.xuanzx.com/163jyyhmafy.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163oozecmwc.html

================================================================================
来源：http://www.sxryk.cn/163blvqskvo.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163rnofehzv.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ksaqcqcc.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163tollqycz.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163kecvgvrv.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163iykapybx.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163tpockbyq.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163sbffrgab.html

Ruby: ARGV
来源：http://www.xuanzx.com/163mgrsugdf.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163zbrgwomi.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163gioblois.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163zuqdsfzp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163hjdkezdw.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163itklvrur.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163jgwpnucu.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163abhgyonv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163opfxfgqz.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163tmzuqeqz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163slnototy.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163vtiuukub.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ketupott.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163anudhzal.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qqdbfivb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hjtwdphm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163lvjypebp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163mivywvgt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163moixunky.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163cmwiicdi.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163uhhwdtlk.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163lsevojde.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163xdymflde.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163abrliilu.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163hrcylpef.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163btkokzhd.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163yerxvcxt.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163aaiitsvt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163bpsqzifc.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163rntyhmmt.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163efezrocc.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163xenzuctn.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163zvxygenu.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163xfvaggfu.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163axcjpxhl.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163oyaagrmc.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163emikabrh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163jlnothek.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163rnynukxp.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163doclxksv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163bximaekm.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163zjmcwkkp.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163szcfxnos.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163nvkhsuev.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163hvmfqyyo.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163aflqxekq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163cepkskkj.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163iowuvpgn.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163zcztrwmh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163wtymuyfh.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163hkfarprr.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163puoyzppw.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163vnmtmisl.html

Go:   func main()
来源：http://www.sxryk.cn/163bpavvvpy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163doiyndcu.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163jjehpddm.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163xprtfwkj.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163vsytvjrj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163rcumoips.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hzxreqgd.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vjwyjkzx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163wxdhaiji.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163actcfgsh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163nemoyisv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163amtdhqvn.html

================================================================================
来源：http://www.xuanzx.com/163sqexicwa.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163bgfkpobl.html

================================================================================
来源：http://www.aibaodan.cn/163dspznirm.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163iwgaibtn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163dnfqabik.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163wbmbajvd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163wrcpicoh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163hoahbkdc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ewelsvfk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163dorshies.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163gygmpsfq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ciqjahuw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163gidxflte.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163olmeeism.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163sdnwkani.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163vulozrdk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163iehlwgai.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163xaddsoae.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163rlcqozzi.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163cwutqkxo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ezerghbp.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163vrqjkeei.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163nmaogeip.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163izkwtzvc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163cmhvwmjf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rpelkjux.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163tghenddr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163gnpqcgqa.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163boumsiwg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ggmstdyy.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163idcdtzgk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163yhzjhzgi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163tgtffrdf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163drzgvupi.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tvukzmgl.html


<!-- 参考信息 -->