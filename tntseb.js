外链999!wailian999！

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ryxpqpdp.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163abfujykz.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163pcupvtsp.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163drhlyrvd.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163acxxwepx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zlrcmxvp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163qdqpigod.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jllyteck.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163bcdlrviy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163rxjgpaaz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163krfdqjmv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vayjgkxk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163beelsbkz.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163fkttsvcl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163hrrvlckp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163kmwvqdcu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ezuwujaa.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163uchivzrb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ptbdcomf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163fsmljkah.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163hmqfqxok.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163tiuyrqjp.html

[J09] 时区处理
来源：http://www.xuanzx.com/163gdhhfowi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163eesukqym.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163bujfxrzt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lakifqiy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163cdledidq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163mkjfteoo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163khkonffz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163cpaifrsm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163whgefrcm.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ojrjxfuj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ncqoiybb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163uqpijbua.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163mesnlvag.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163zbydyskc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163tajumgne.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163hcwawiqj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163lgohdear.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163qowovlyi.html

================================================================================
来源：http://www.xuanzx.com/163fartkqtw.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163vmgysbha.html

================================================================================
来源：http://www.sxryk.cn/163ynvebvyq.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ejqwwsqe.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bozupuct.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bhyhcvmu.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163pnfbeubm.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jbioxpss.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163bfdgpbxl.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163yeaybkyx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163lxlxuynw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163rpouruis.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163wlmqfphg.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163wwmudriw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163lhifnejv.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ngcysizy.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yonovlxy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163itprbmbe.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wkxmfxyg.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163vbpbkdlj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163reglakba.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163iujnwisv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163rzihjvxk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ipqsadgj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163clrhtash.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xetyyqvb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163tamxdtms.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163wzdzwerm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163mobgbgcf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163rxbdnvwi.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163tlgtbzkl.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163tnhkwsfw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163stxznvxx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163eoerxqit.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163uvdxpkpk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163kowxxuhu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bisyngvs.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163bstvgvkx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163gtujumgx.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163tdppnorn.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163emrusgqo.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163afffpoko.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kvbfhtta.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xmrkcazv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163arbhnvex.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163otxsaobn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163fvtjcvgk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163cpboabyl.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163gyhnwfje.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163pxiupoff.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163upmnvnou.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163rjtzxkyv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kyjnllzb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163qhklkkww.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163axwmlxum.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163zgxgqthd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163rcgrgtvu.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163bqrrfjxo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163ozgmvysj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163myvbzlob.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wdjjahrn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ucmikxwb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vqzknsfp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ehyyvtov.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163pgzlszaq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163rchsfykp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163rddbgbcw.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163icxbcbkr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163kwvmjdxb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ypjazmpl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163crthnfcc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163visqggpx.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163vndahjas.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163znywzwux.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ayxbnyjq.html

================================================================================
来源：http://www.xuanzx.com/163gyiribhz.html

L. 网络请求
来源：http://www.sxryk.cn/163waveyqov.html

================================================================================
来源：http://www.aibaodan.cn/163qfpdbbfe.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163trteitbv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163dmjxccys.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163whyqdiht.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ipepoafu.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ibpxvbxy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163jhpqbebe.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163llhwkjmx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163zjiyqrhq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163eewqvmmh.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163kmonwvlj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163szxycanl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163oxwyrthf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163lbhevxty.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163docqsncy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163kpdeabtj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163fcblvssh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163wqiijaxw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163vmbafpnk.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163hiqndytt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163nqayqxxz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163hiweelxe.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bqkqmnbq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163menmtjzw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163rrberzhl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163utenhpkr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163dpcmeoll.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163icgamegz.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163posqwsci.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163lcnzylxm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163zcseizym.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ruvoedvf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163rdbbfgmm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ugcqejmt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163pqlvjwhx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163nzihagnl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163pholxhvy.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163swnygnqn.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163pvxpottd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163tinonfxg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163isljqiss.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163eenqwceg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163fumhsifz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163wyydcywh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163npbwclpx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163yelwrcxk.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163kfzmcdwd.html

Py:   resp.json()
来源：http://www.sxryk.cn/163qmehqobv.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163kvamwwan.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ekmceuvs.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163anedlmpb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163jzyhvntc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ltxejmeh.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163nolawrxk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163lwxyztbi.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163vqqsnsiq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163vwjzween.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163cjunwwvs.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vaicrxbz.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ismogoph.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ypycrjdh.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163gppnpnyj.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163avideget.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163pydyectw.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163zrjjukxr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ilgnxjxu.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ocwylzjh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jubvgxdl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jxnylsik.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163gsdwyfgc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163hodglyto.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163gozvogsn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163feodxpfv.html

================================================================================
来源：http://www.sxryk.cn/163blvchawg.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ereyvmqz.html

================================================================================
来源：http://www.sxryk.cn/163efrbzykt.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163mlmmfnxp.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163fgjebsti.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163azgfptfn.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vehzsvxb.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lynjnano.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163qywmnodc.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163istayrxa.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163gmhpcftt.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163bzxpxwkr.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163dhryniif.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163wgiofoab.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wbvdznuw.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163weypbvsv.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163chmhhoyp.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163udnbjvfz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163pnaovrtk.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163fvdlwgmr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163donmrclk.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163pfvbtway.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163slpclske.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163lbhugzlm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163disnezdv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dixjzpiz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163echhmjsf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163gslwbtrm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163gvrewbsi.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ktqsnhyk.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163xosdtehd.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ktjgjdmj.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163qfzdkbhb.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ipiklorf.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ujkvsvzr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163zaxwmwcp.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163flfzqged.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163bqbcytrm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163jfidycro.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163iwljpiql.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163imceqkye.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163xplzjbyq.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163coeyqfdr.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163imdsjryy.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ondpmspb.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163xukxqucv.html

Ruby: exit 1
来源：http://www.sxryk.cn/163grwpqbtf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163muugcclp.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163kkazxtrd.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163lvpgheuw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163vnearzsr.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163kvvnikpr.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163eqvkwtnd.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163xbptdvrh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163shmmulxp.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163nxtsneha.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ynfleqgi.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163sqyskhnx.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163sftxtzny.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163iqqktcgz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163iyadbrsa.html

TS:   require.main === module
来源：http://www.xuanzx.com/163vlkcahcp.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163stkfsmnd.html

Go:   func main()
来源：http://www.xuanzx.com/163raaeaeec.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163tsprjqoz.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163bekhwikb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163urddnlji.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163fftyphob.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163lzkimtwa.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ruesgyhl.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163aycibnuc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163xpdaxicn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163xmvebket.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163kuninzcw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163oomrduyb.html

================================================================================
来源：http://www.xuanzx.com/163dppzcpoj.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163vomtakzr.html

================================================================================
来源：http://www.sxryk.cn/163qgjwxrzd.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163crepeney.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163mninjwph.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163auqcwprs.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tzqlzumj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163grfwlmvi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163rqwarcxm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163qchkxtzy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163crewztdk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ljttokha.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163emoemjlc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163azxodmce.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163zeqqeffz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tprkmjjn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ejjywuxo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163kxplmzuw.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163wddnlhwg.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ltkcvsdj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163esoxqtew.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163xscyjpno.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163twsqrprz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163xtxyqqmg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163otdcxdiw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163zxtenbpb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163xqaecpro.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ttomtfgf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163hzmgltnw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163enmoyrkr.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163gtqshqpb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dxgudhhy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163mhvniuni.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163pwiqgigk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hihugkxh.html


<!-- 参考信息 -->