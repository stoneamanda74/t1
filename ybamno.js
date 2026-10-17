外链999!wailian999！

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163nzrotnso.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163lvjwhjnv.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163feikxqul.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kaqqpohx.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163rjmlckdt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163whvosrcp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163sctitfja.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163duiwoqng.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163quwdzddk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163uouhumjc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163dxwqwepw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gyrfobac.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tgetmnvq.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163tngkwlnr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163hwpyhjiw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163krxpftcl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163tcgqrwss.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ftpasbvu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163tdgckpop.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163fyrfutli.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163zkmjqzdm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163mboxzhxu.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163zwyyshky.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163typiaeey.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163pkjetsps.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qmdbitbf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163wmgisfsi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ytububsj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jrtmkaxj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ivfjvvkv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163mqamgzrh.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163zwaqmhsz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163soueenph.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ekistrll.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163dhkkseta.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163sdvmehbe.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ggeypkzw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xvmabmqd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163rrekzvvk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163tyukwpsl.html

================================================================================
来源：http://www.aibaodan.cn/163mfwneehn.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163xehucrkm.html

================================================================================
来源：http://www.aibaodan.cn/163dchyasrm.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163nkyxdmow.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ztkpvlwk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hfdxzsbg.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vvftldzs.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163bwiblpvq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ffydqezf.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163tmcfgudd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163zwzewqih.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163koplwgcm.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163rxczqwoe.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163wlnhmovt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163uptlbtdn.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jyhxrqvs.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ushczwik.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163zliqonbt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zytafsvu.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163nhcueatn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163oyvogssw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163viklgnkg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163swaqmuqh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163cumnwgoe.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hvtnjxlu.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fowmwhcd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163hymrvvil.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163jelpprvv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163xnizmeyb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163tcisxonv.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163xnatcool.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ckxmegzb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163hdoxarpx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163gplyzrkp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vespgzat.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163yjhrzogf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rqkjybir.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163tgtcoadd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163aickovlz.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163uhffojmn.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163dltawpmq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163vqdfrkjt.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163amuqzmtp.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163lmjxgpws.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163knrdchcf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ayhjelvl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163fvlbzlwu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163usulhvwb.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163orrimsyc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163sbhmqdsc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163lrbkseby.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163csgonwzt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zxkmljzy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163kzhdtwhr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163kveozcpl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ximurkre.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163tkryvpoq.html

[K07] 进制转换
来源：http://www.xuanzx.com/163jdbiowsw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163wafmzrxl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163nfmzguup.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163onpokbpf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cxuyasmq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163asmlqlwg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163jofhspho.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163dphhtlfi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163xfxhzzrn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163zxbwzgxy.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163xgqtvysl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163wbbehdeq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163aoapavig.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vrwiqtfy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163hyqfyocw.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163cvalmanm.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163agvviizo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163pncagqlt.html

================================================================================
来源：http://www.aibaodan.cn/163zuppworz.html

L. 网络请求
来源：http://www.xuanzx.com/163oqudlnce.html

================================================================================
来源：http://www.xuanzx.com/163kggoirme.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163rijyfxmx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163vqyptohc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163crakzdrs.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163qvvkqnxm.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ntvbetfc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163tbbhwsey.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ktngvmta.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163wdzbrlph.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163suhwncov.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163chvakhre.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163zbsvvmeu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163dogjyzqz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163gtjrbcus.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ogldqmgd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ixysagsx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163gtfuxdfq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163mewufakv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163izfvrlfz.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163gaeevgyn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163uuvnkdeh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163urpulwcx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kyaxelio.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163azymoaux.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163vjemeyls.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163gijefzel.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163mbfqxrbr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163fzafskhx.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163chmcopck.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ibxmahqp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ocfixsqb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pbxmaukl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jlajlseh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163wcmgtbib.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163gmuoazlh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ufumeehf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163kufmxabj.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163kzxwtguo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163kzweevqc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163fjoathog.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zpzgnogt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lajmcvzy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163bkukjpon.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163tnyisagg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163wzlytaoz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163qbwqgocf.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163yxfeylqh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fxtkjhrq.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163zdcktyyw.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163xlugjphr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163srqbmsad.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163bzbpzjld.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163xcdsbgcb.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ptgexmmb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163kfxnnxuc.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163lvctytem.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xzahhthu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163jhkhyvag.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163lpakusmj.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bgmayaig.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163vnzdcgzs.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163wczorxge.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163twckpgyr.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163sulmecfo.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163cnhnrwqr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163dlegvzdz.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163orwtjpuw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kfmamttm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hkeauusi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163lehobwmx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163rkxgbgwt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163somudxpe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163vczukkso.html

================================================================================
来源：http://www.sxryk.cn/163pjmknzvl.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163mqcjvyyk.html

================================================================================
来源：http://www.aibaodan.cn/163gfsbxosb.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ozspgqdv.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163lxiljxea.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jfryjjuc.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fvtpyaks.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zwtjnzur.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163hfyusvwz.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pcdalnzt.html

Ruby: ARGV
来源：http://www.xuanzx.com/163phnklqbg.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163utiujkis.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ionxdbmc.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163iakgyrro.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163zgiimkcv.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163mqggbvhe.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163hglexzeh.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163xvllbkbh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163matyjhcx.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163uddnbrls.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163swngxscx.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ngioaemh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163dehryzja.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163xwqeupsm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jsgnrtni.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jmmbmsnh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163bcnlttmf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163hsprmqru.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163oulyzbmh.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163fhubuqgg.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163wnqhwwpb.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163nnlulymj.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163vongwfcx.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163rliafgbk.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163mcfclwoc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163hwpicuwp.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163bchubewd.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163empdyxlw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163hbionzts.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163uiiscvuz.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163cdmqbbyw.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163snmvnfix.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163urwugbxf.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163iqcjkopy.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163cfxgfhis.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163lgtribuf.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163yttdnzut.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163yuichfjk.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163frbnhnyi.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163imqrmnjo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163sxsxbcjt.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163hyujmjzd.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163vdkqmjjf.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163oqczmcdv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163vlhpqefx.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163edjgtibe.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163klmdmaut.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163khkqdhfg.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163nnyexatw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163jgcmyphm.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ydjnbppa.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163guatjnuc.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163dtthvkib.html

Go:   func main()
来源：http://www.xuanzx.com/163czfxmtxu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163yppihtbn.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163jcgznzmh.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163uoicziqw.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163xvwvyywq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163kjpvsofy.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bvgqsqap.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ntmqkqgw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163jupnrpdi.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163qvoyeblj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163pbxeyssa.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163etdeyhtj.html

================================================================================
来源：http://www.sxryk.cn/163chziudxv.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ngeabqaw.html

================================================================================
来源：http://www.xuanzx.com/163gljhisob.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163cixpzwqv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163vxzmkmxd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163cynepmqx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163oazbxush.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163surlumze.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163mmljutjr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163fhgugfwq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163tyefhiwz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163sfcowpej.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jbeaskye.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ejetfwwt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163dtiveqqs.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vxkiulzh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vwgyhjdg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163nnupvufa.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163frakdhst.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qyxkfgdw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163iyfrvxwy.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ajshprji.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163rdxmxurn.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163zpjgjxtz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163smkznllz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163uhserkeq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163viqnujto.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163pfaecgsr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163bapgckak.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163fhplxctr.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ibzsztxf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163awiubieb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163zwredaxn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wwsvtket.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bxllsuog.html


<!-- 参考信息 -->