外链999!wailian999！

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163akixgxls.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zbgofaih.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163evgfmfdu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qjsulesv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163gnlvxbkk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163vmjnldvg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163uzxthjkx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163khhrorcf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pynuttnr.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163pwfwtuwj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163tvuqqiez.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163gdvxwlug.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163crqgohmh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163xficebjr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163cxydauvq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163dgpcoboq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ajhdujbb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163nvxaxjan.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163aarzxqqs.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163vvrtedps.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163rlrhynli.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163eiteencr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163xdmsikbx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163pxlxkijz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163abexumar.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ihdcmlia.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163srqckbaz.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163iithbgbi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163xgwecmdh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163oamswkhx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ulhwdlva.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163rqvahpap.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ptkhvjlp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163qxzwtwzq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163iyzjlsoc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163czbajeai.html

================================================================================
来源：http://www.aibaodan.cn/163rqslpics.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163xaojbkpm.html

================================================================================
来源：http://www.sxryk.cn/163dquweqsu.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163snwipyba.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163duhjcsqs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163edgtwkgw.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163gdnjocvk.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163doxaaxjj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163pxxtduax.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ifhhedjc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163tsbyxzvo.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163gntpbbyr.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163qholiywi.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163dsxmazkz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163kemdvbos.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bktnkkev.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163vlfabkcl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163yoonhcat.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rawvmdmt.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163shqtjtia.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163csnilzzy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163royxplnk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163kldoahly.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vraajuim.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ndvdyjic.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ecxmhryf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163yavdkfjt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ogtkxntl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163pnvxdskn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163uireavpc.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163olocycav.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163lnadhxla.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xckzqpem.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hlreywwl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gwigzrhy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163bbbdxuyy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vpyyqbbk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163gfcrvhbh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163wtisjbyv.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vxyhkgnc.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163vgavpwox.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163sxgkaqzz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163slxuozfk.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mobgjegu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xlinjagk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163lgrxzjvh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163wwthohzq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163fgqlppqo.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ivukqsmw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163yxwspeqn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163phrzfvpi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163fiyjmhtp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163owyltigw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163axeleibf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163jtcmenzv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163esuseagb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163aukbzylx.html

[K07] 进制转换
来源：http://www.sxryk.cn/163xxmucwcx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163adhjodcg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163kjfhnngb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163daeueler.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lltriwmj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163otvwijiu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163zrbirdzx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ahpisysw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163nazlukyz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163wtvvslpn.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163choxvzrr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163urxtyvrc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163aaomdkbd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163tkryoasd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163axtvblto.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163mwasiyvv.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163shcepvfr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163jwggokdu.html

================================================================================
来源：http://www.aibaodan.cn/163dmnbxnmv.html

L. 网络请求
来源：http://www.xuanzx.com/163lgzildqf.html

================================================================================
来源：http://www.sxryk.cn/163jwkabiqz.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163jlpzslnb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163pfodvjnu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163bzwdkopg.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163mgptynmp.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163qyzrodjx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163bnzosrqf.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163xvjxecwc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163bzmpdsbf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163cwmcvyij.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163yvgegknp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163egibbwyw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163lvburicm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163scmwznno.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wwcgjpqb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163vuilaelv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163bwsmljxi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163uscznjpv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163oahxsonk.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163qsmfpftp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163zjlprpkm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163cdtopwzt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pyzzelur.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163smvikkfd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163jyveddwi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163xhsxanhi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163rxfuoatg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163qnupuuyc.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xpyveqzi.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163adjxqatu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163khpmdhxh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pzxeydxo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163malcvvgn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163vhdmugox.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163fdhmaxpm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163bvkvjluo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163rwlroszr.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163bqphkasj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163fckfmncc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163fdnqecyw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mmmoegdk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163fozzfwbs.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163oyqrkupj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163vzjhsyxc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163edgznfjj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163asnyfqrh.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163iawasvwi.html

Py:   resp.json()
来源：http://www.xuanzx.com/163pfygwjlt.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163tikniubn.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163fytqnpoq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163odtekjxf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163gacfgtbf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163auhgvcmj.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163qjmlvlwt.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163muayubsj.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163yevlftya.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163acopemft.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ultblree.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jklhbcnr.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163tdciaysq.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163nmnvyezj.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163rwulytnn.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163oxfolksg.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163segacvke.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163vfsueeqp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163bfgmxdok.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163xzdusnoh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lazqgwlz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dofsftet.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ffpvaxfg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163mlhlyhnf.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163zztyvohv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163zktukybx.html

================================================================================
来源：http://www.aibaodan.cn/163kznpdqxh.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163edphquol.html

================================================================================
来源：http://www.xuanzx.com/163ckwgjabb.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163elhjrgxv.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163mbiwccdk.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163gbviyagb.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zgwzhldk.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nbyiryba.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163tvjoacof.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xijyispa.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163epmtpjml.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163wwozkvth.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163bggxkxzi.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163kiysqhzk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163qqizggaz.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163vthcduka.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ixyozpoe.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163uacnqiwd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163cfoulhsc.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163btywfvoc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163tjcvagag.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163scywsjfn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fwhqdhjk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163esmyfcbk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163orydyulq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wrxpkbas.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163pvcoutot.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163sszjhmei.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163bmttrfsm.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163lybrhptm.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163wyryjhhz.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163axyviwoq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163gkcgkvvl.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163sqwalmid.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163vdtbtzyi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163gjjyyujh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163tbleawzb.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ajkmwpuo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163khswhvce.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163klrvyafu.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163gyohfaij.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163btvydxlc.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163cruhmasa.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163cfosnpkf.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163nhiwjobr.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163nugblguq.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163hspravho.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ixfykevx.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163hhhfrkbp.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163veurhizd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163askbsopi.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163cmxvxwmc.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163fvuxvjno.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163yjlbatah.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163lvxxdduz.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163amcvhicz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163pbasfvnz.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163cjnlhaio.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163kqdbxcwf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ewcodldt.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163jqvjttne.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163dtrunuci.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163umnutpsk.html

Go:   func main()
来源：http://www.xuanzx.com/163tctyxzqr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163hehjmlsg.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ybcsxyte.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163aoyihuyq.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163wndxcqzp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163vrubkpte.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163aminnbes.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163cjoyieys.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163qtdvxoux.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163kricamxs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163bcgvsofe.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ylttomat.html

================================================================================
来源：http://www.sxryk.cn/163lvljeqtb.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163orkqwmlq.html

================================================================================
来源：http://www.sxryk.cn/163ryjutvcz.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163nvpcajtx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163wtjlnbvs.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163wgmzykph.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163dtoeweqp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vkzfzvab.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163eknxquxq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163yrqpvcms.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163yrzfnwwp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ytqkavqj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163vilkqshg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163dimuwgxa.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163vfelfssi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163grjeriis.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163onzsfbzg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163vpkespgh.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163jxiaskqg.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163namksqjh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163kyhbtfik.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163sekjrbpn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163uqenbhde.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163htwcramx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163poaqtvqo.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163regutmnm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163olpovnrb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163tcorvtjj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163sxsivjpv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163aawggbgc.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ivcyfcev.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dgotbatn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ybgehkww.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gaejuyqp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163stksinqu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163dvgkjvkz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163alixtxud.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163iknhggbu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ndxeivhj.html


<!-- 参考信息 -->