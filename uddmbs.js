外链999!wailian999！

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ijomkdkn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163aynaevts.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163dirzigjc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163exkktaac.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ioeorxqg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163iyuaxxlm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ydojrqzr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lyscjozn.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163krfxqzda.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mwdcqcer.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163tyqrgbex.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163vvcydikz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163pdzqiene.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163mqnzgjnn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163luigctgq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163vjwrcfei.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163tptbucfr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163jixbfpfy.html

[J09] 时区处理
来源：http://www.sxryk.cn/163zzeblezg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163dlagmitd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fpcyztmx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ldpslxgj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hmwnolur.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163uomgsotw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163pfzkvkar.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163lgcvcloo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163wynurhrk.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163qlifyxxl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163sawgfody.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163tddrjmve.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163blppwxqx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163gukvovaz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163fjjupqlm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ztegcntu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163junliqcs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163hdwgnzzk.html

================================================================================
来源：http://www.aibaodan.cn/163iparrauw.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ssbtxndp.html

================================================================================
来源：http://www.xuanzx.com/163ljtdilwq.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163tpjkysxq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163huldqryd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163agjdhlhd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163uvzkfiog.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163apkndqqd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ebimxyxa.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163pfzxhkvq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163hfxboams.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ubcjnlto.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163xuvjmtkj.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163bfmkveuo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163xnhhwdke.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163awqdkvez.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ommgarzy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163xottdwxn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bwmapkvi.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163negjctdx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163kfxttsmn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ogkgjfwi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163wsiqfhva.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163cyeswxhi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ywyyjphz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tttvfdim.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163tasjvhun.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163gdihqfnv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163gratomas.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163vdcttrfe.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163phrixgki.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163kropztio.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163odbyvjnt.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163gbxlwdwc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163edxpnona.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163xguvklkv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163lypfwusf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163tqlipawt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163gnmnrufc.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163rpbvzdsf.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163svzwtytx.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163qkoebpfe.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163obsbkjnq.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vjtsqjpa.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163lyrvijra.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ejbucuvo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163gqvdghbm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163nsmgxqgy.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163wqlxkpme.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ctoascan.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163irdxlfsh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dokwugbf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gshsvkpt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163niimwkpn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163uiiwvfjr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ogyuujmm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163rkchhatf.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163yiirptwv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163fuysgfiu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163tkkpcmlu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lcoxkiok.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wviefues.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ebfklcyn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163bfmwrdeb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163jsnvfdwi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163wgxefkym.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163jwdrzjpe.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ktectelu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163vlbexyjl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rseejwyf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mqwtovoy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ejjfsdxv.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163yyjdezny.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163dynxuqfl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163fzpwzbwd.html

================================================================================
来源：http://www.xuanzx.com/163qoggvlev.html

L. 网络请求
来源：http://www.xuanzx.com/163rkgaylsr.html

================================================================================
来源：http://www.sxryk.cn/163rbmrozqx.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163xxpapkld.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163nrmidfch.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163mkoawucg.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163scmrolhx.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163pogfkzig.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163tgycnmfx.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163quzuikot.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163dneqobrv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163xuvwnahe.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163blpvoaay.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163nvnegybr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163dwwxdwom.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bvumkxgu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163kzvygpvg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163wyqkjbvn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163gkjspzor.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163rhucspgf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163litrwmko.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163sbejrhnb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163pwbmfchx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163apwrchqe.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163uqbclyxm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163dtbsdhsa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163aagzkduo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163hcnjeggz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163dmygzerq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163voyqkjri.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163olnlhuan.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ogrikshs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163cafupwzp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nwvnozku.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cxzmzmvx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163iowejuma.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163wsotabql.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hygwlrmo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163fquhukje.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163urzvfbiq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163eeojanis.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163juwodnvd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hjcdrwfw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ntbkzmcu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ftembdyf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163tjyfnphi.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163nibctobv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163iwzpvtre.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163rmeudcug.html

Py:   resp.json()
来源：http://www.sxryk.cn/163fnupbold.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163cnrdegdp.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163mqijobwh.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ighyolri.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163veiftohy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163jsplmzdc.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163kgnkyqnp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163nfvmluis.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163kbmbuoqn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163tjmmwgil.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163rxiqwtra.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pgtjlfeq.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nbdrzecj.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163msjxiztu.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163kwmujeeu.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163rweyrxqf.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163oinxtsih.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163jzctotyt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163fihgxnlg.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163uinheagd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qzpmwdfp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163liaofvbf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163fzhvofmv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163jomrdupr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163houbwlfu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ftyljult.html

================================================================================
来源：http://www.sxryk.cn/163qntbkukv.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ikrnsfvz.html

================================================================================
来源：http://www.sxryk.cn/163vykdgabn.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163sechcebs.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163uaxkihow.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163bfcgiwdn.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163asuhoqbz.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vnyhhuje.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163qnzbrepn.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163mbgirdsx.html

Ruby: ARGV
来源：http://www.xuanzx.com/163xtojmfip.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163olemtewu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ihjfxnuw.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163mjlrykvo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163truawyrx.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163wsisckjz.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163wowwdypt.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163kutiwpiu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163kyxcopln.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163mvhjdalh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163dhbgdvxv.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163zxjhccjh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163hkodempd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163zduaxdbh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mhijizim.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hgatelta.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ibduwcyy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163qiovbbxt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163pndjnqyu.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163berqtaxm.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163yjiqwkiv.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163iwmtmfxj.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mnodonpj.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163qprjzkxa.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163zaskuagw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163sbfapjzg.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163sudxgjrc.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ivtrhrqr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163lmmfcojk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163kydouinv.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163csuvjemx.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163yuyejnsr.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163whbhdaim.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163rwwxlfng.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163wpfvwcld.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163yarzxjgr.html

Ruby: exit 1
来源：http://www.sxryk.cn/163vlpwofqi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163vgrwadcs.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ywjzhajt.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mmgiepwg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163lyasjrox.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163pdkffbre.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163tzjelfvl.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ddfknphw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163pmbgmdau.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163nplgqmtu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163tcrtevrq.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163cywcycon.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ytzstmjd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163mderqtjs.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163cfuxszji.html

TS:   require.main === module
来源：http://www.xuanzx.com/163qpswssfw.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163qifwtnqo.html

Go:   func main()
来源：http://www.xuanzx.com/163oqvcxkjg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163aadizgvh.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163vrtsnzdn.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163cmebjeur.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163olvzuisn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163lzdbgscm.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163axlnpvdy.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163szeeccuz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163oiedjigg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163nhpnlrch.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ysfxqpnb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163xjmiymcj.html

================================================================================
来源：http://www.aibaodan.cn/163hayjxdkf.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163xracpsda.html

================================================================================
来源：http://www.aibaodan.cn/163zbccfkvo.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163cglyronn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163hvjaekoc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163jbvpdrfx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163odveajyl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rljrgvgf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163nbimiizw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163aiqhmohg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163idlzigsw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163hklzuvmh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163yhlmapoo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163gjuqtjrg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163xsavpfuk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163avrupbqf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hjduzqdr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ajrhodiu.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ggyzmmin.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ntciplmk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ilcznofu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163nupqywrh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163bjcojmmk.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163tubsgwqb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163bgypqifw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jidfowqe.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163cnbziygw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163yjarkxds.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163tbpvzdqt.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163xrvlslzf.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163mpyalzxz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163trikonml.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163zqvgcvxp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yqptrhwv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163qxybdiyc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163qlrurvqp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163qcrfftmh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163yezykmjt.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163qnmbqrzq.html


<!-- 参考信息 -->