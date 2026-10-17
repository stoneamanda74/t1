外链999!wailian999！

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tppkjaap.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163lknnhalg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163robkxjim.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xskjjjzj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dtzdllwd.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163gqvpusgm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163uxmwykfr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163lrarqhru.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163edcvduca.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163gjfhlpmv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163nwwzhgcw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ajurubxz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163nfcrsjtq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163xzffcsep.html

[J09] 时区处理
来源：http://www.xuanzx.com/163plvbmimt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163bjllxtxb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163xraqrjne.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163cuwzseaq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163uejvqzor.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163afhhczbv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163umaqkajk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163vfqkkhoq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163gvqlbxda.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163kfngbnop.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163cgboypvy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163eehqmhrs.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163dkopqgds.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163wznibrfr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163lnsdzear.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163clmdtyts.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163vagerlwj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ibsrgdea.html

================================================================================
来源：http://www.sxryk.cn/163bkbbqlqi.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163rmgssuoj.html

================================================================================
来源：http://www.sxryk.cn/163yllmxqok.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163xhbqcfef.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163pzpwmkyk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wkvzlxmm.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163masobaow.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tqbfzndr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163mernglbd.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163fffcrdmy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163sshjmrpo.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163yecrevva.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163sjgqqeew.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163bxgzjnfv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163iuivdpxy.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nfnduemo.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163eruqhesb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163xxktggue.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bcojhezf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163jgqncfeo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163yxoamsno.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163gcmhfbly.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163rrruugou.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kyvujifb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hrxzcaej.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163msfzsemq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163evghkcqs.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163mjmxqsnv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163mgotfevo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163vcllccut.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163wswpucze.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163elrdcdvb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163bmsnricx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ogciccmv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fhvbrscr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ptypcsfh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jaxqpgil.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ccotfqxs.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163vduiubxe.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vrkfaicm.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163gyaewozj.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163xnjbgwvi.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jpldxmky.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xllkjbok.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163zugxtxsq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163vqtcraja.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163opuszqdq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163dklyclyy.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163vtelhvyz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163wygqxdee.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163jsovmiby.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163bjtsvboj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cwaudwlp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163aarzduso.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163vlvdopsu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163lcmxtcsk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163dixadmte.html

[K07] 进制转换
来源：http://www.sxryk.cn/163rsnzfurx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163vrkqfegw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ygaappam.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gsyusxku.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163owcfdyva.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163zqxjtjsj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163witcnzyr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163tgjpkcai.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163rhwlusna.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163dgjljrrl.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163txjcyetg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163gizpjkpr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163guzydvxd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jljxzwdk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163jhffbldw.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ifwhlalz.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163xwcbusza.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163lxfmqxgu.html

================================================================================
来源：http://www.aibaodan.cn/163ytoihxdo.html

L. 网络请求
来源：http://www.xuanzx.com/163cuxzvcbk.html

================================================================================
来源：http://www.aibaodan.cn/163bkmoutux.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163hjkqbnei.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163qgpdytgi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163sudonagd.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163vybvvvfm.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163xzhkrdyy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163citirvox.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163tqagnydh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163fudhrqxp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163bimfccva.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163tistcuje.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163gcomvjpa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163xhqpkopx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qiwdcuxg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ipfaxyec.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163vjrhjnsb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163poluxcvf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163mstokzvv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163vahkzpre.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163wxaaxqqg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bpdqueee.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163eigvloer.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nzxdbnpp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tvbecgwn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163elutywlk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163nfirdhvi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ncuipevc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163enwezvpy.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163euhozxkx.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ahkvpopp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163uszraaok.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jpxbwlvw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dnmcpooa.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pemvielb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163iljrvcyz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ykcgtrpv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ejxpvscq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163lselusjd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163eidjqecy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163dfqmwdfx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qmslwisj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tirzbhvn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163wwbhsuwn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163jkkqsdle.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163gyqbplrh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163vsnzzsxr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163fepxdpen.html

Py:   resp.json()
来源：http://www.sxryk.cn/163vvbcupkf.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163tqsqinuk.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163qantzrcf.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163aiuudwqb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ctondhql.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163erizeohx.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163qtaicmje.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163tuxflqmh.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163bhymlfly.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163phyyaybq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163afchxqtl.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jjqnlppd.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ifecyqkw.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163kenaclpd.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163nqcyqrcc.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163urhtdnbx.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163dtbiljmr.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163jminxlwj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163pclkpprh.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163zapxjtnr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yekflcfs.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ytbcbaug.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163rsvuzkzd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163eexkdkaf.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163dculbrya.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163izqczpsk.html

================================================================================
来源：http://www.xuanzx.com/163mzfajbqp.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163wgzckxjf.html

================================================================================
来源：http://www.xuanzx.com/163xbuenmxt.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163slvdbmjh.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163pybsmmss.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163pvcsmjhi.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fuddpnva.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wyefahvy.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163fybztmld.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163skzsktsl.html

Ruby: ARGV
来源：http://www.xuanzx.com/163yammagpi.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163qlmracho.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163wuzipxfc.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163elwrzqlb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163cphhkwys.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163bsclekbz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163jcddtilc.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163leqfgiwg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163pzvipojl.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163pnrfudkg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163utbvtjjh.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163qrwivnym.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ctvekzvx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163umixqfmn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163atomcrzh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163muvukdnx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163xqyfdhuy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163hysngmkf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163imtzeeld.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163mymkrxxr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163epfintmm.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163zcmdboje.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ookkaylo.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163kqbdufzc.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163yuhudjxi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163edmzjmgh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163aohtaudc.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163wssumnjx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ktvaunla.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163eqmswulk.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163aljnvbap.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163rdpmcdts.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163zlzklvex.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163bhxvqfel.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163yldyxzcw.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163trapdsha.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163kkdgqlsf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163csobqqyr.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163toryqrhi.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163msnsokvg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ecmgjhje.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163chbvqatu.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163kgmerpgy.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163cnkjqqxv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163hjhmjoyp.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163vtwbdihr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163amldanxz.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163tjqrqivv.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ggdopcnk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163hhjddlbo.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163jacoctfv.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163qenrddmd.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163zjcbfsjs.html

Go:   func main()
来源：http://www.sxryk.cn/163qvivudhe.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163naokwhid.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163jkliuifx.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163bgckazwp.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ghpekbnl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163elyolrdl.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163uymqkfxq.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qyauviae.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163srvpplcn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163lohphidt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163dnzhhddj.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163lbvfkvbc.html

================================================================================
来源：http://www.aibaodan.cn/163xgnfdlcx.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163vxpevjmg.html

================================================================================
来源：http://www.aibaodan.cn/163uivbmqbk.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ckigojuf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163fvdomsrp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ptsptlyk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yzaxjnfk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163seyokodr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163kyubfxtp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163yicrvqfw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163llduohcj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163immemuyl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163bbxtthyw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163pziqider.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163qelnrcbq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163flwevjvf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vhlpzubc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163raeogyfe.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163pqkpqoui.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163oloqnnjr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163humlvphk.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163knwknete.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163xqbrnwdd.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163wdomrpvo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ztljucwa.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163iiqokjhw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163uerrduti.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163baeqrsyv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163rbobkytq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163xdxkqups.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ysxaxion.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zkuqjglf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163kiivwcex.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163reqvikjf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hoaqufqs.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163utaehpfz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ftkftpru.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kpfsupuq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163mzocnmbq.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163kxoppsfz.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163iiifamwl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163lmzjhfuu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zsxnhezq.html


<!-- 参考信息 -->