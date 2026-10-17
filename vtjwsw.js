外链999!wailian999！

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ifjbaamt.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163teoioivm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163zrgdrymk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163nzhotijk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163gvcwnnbw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163sdtybtan.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163txczqevp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163zldlffxt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163dmhqtebw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163sbxeqtpn.html

[J09] 时区处理
来源：http://www.sxryk.cn/163gotmflzc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163kcrfdyaq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163sakehmvk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163umemgefa.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wsgowoza.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163xurmfqov.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jbliougr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163sqsnhobt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163dxvmxeta.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nnlbnneq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163eljbzmqr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163rlsmiqmv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163wuowuiei.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163zkyrvgqw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163eznjwyzz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163dfjqeepw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163rretacrc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163kmcodiya.html

================================================================================
来源：http://www.sxryk.cn/163pxhckfps.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163inqjwyuc.html

================================================================================
来源：http://www.xuanzx.com/163pnedhpue.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163acwykmwd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163nrzidqmc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163artmeyxo.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rerrltlm.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bpcuudep.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163dsprputj.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163dmvmddtt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163vvgkpijs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163bqoqfqrz.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163kicrwnto.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163bspmpoud.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163yufyhhoo.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ceiteipk.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163vhcvctth.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163leopnyyd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163odlopvqp.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163khbzygbj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163mqksegew.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ealqkbsv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vizfdigd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163nveezwur.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kujrvcox.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163znstqfvw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163xtuamvnr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163mzlocpik.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163zivqbdew.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ssqiuyeb.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163lnbracuh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163kfqiebct.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163fpqkabyu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ecoiubjw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hngzsfmd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163lmhpmcki.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163hnxrkhfw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163uiyojfok.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163bwzbwisk.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163lfkdphxt.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zqbcswyt.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163qrmmhbmu.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rgeclwgs.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163aieuruwa.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163aszmlzpj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ulceupdu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163mjpkmoxm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163wlbsxepz.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163dewzuefv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163kcmcriav.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163vuzzupyc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163qceujqwp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ugzlnleq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163fzonyhhh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163zkafmetb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163gmvhgetj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163zhfzajtv.html

[K07] 进制转换
来源：http://www.sxryk.cn/163djvqashl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163etnlguuu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163utrjlpya.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vnbhocsr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hwrspecn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kdvpmrwh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ehxjxgms.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163xpzqudfy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163plghpwos.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163mirvhabg.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163lkyqymoe.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163zmccogox.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sclnjslh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163twcyvfbd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163oejhexvf.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163qontljhm.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163vjghvndh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163gslnopra.html

================================================================================
来源：http://www.aibaodan.cn/163qqbqlrpu.html

L. 网络请求
来源：http://www.xuanzx.com/163ozbzivmo.html

================================================================================
来源：http://www.sxryk.cn/163kkghvukm.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163pafgajns.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163yzcdgbrr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163jfmxctzx.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163etimppaf.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163fmxgzyrz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163lqrkmxvh.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163hmuvzocw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163gmlcnfde.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163dbdlqpza.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163vsiayhbc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163yvpdndiv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163cgrumfxf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163taxiulxl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bmbhyxna.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163otntegyu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163sazmrkam.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163iyvvjvvx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163kbycvisj.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163slnynzdt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163jqzpesqw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163aebnkduw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nqolnyfq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vejaacgy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163invivdxs.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163tuxlvley.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163kqwmkqit.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163nsffqblw.html

[L04] 设置超时
来源：http://www.xuanzx.com/163qqseosyq.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163kmesdjfc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163yaeukkeb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wbkbmhew.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163snrqafsk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ikdffhyy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ykyqqcpj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wovhstbz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163hgygyqfh.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163tfceliza.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163faoozqwj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163lkvdqzso.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163poiezqxe.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163fdekxeqb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163onawpymc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163uztmtgjk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jlnnqexm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163erwcpxai.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163cavobfxh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163wcgudfgy.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163xpqatqks.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163pkugbqoc.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163nhvdsxnd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ohbzuabd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163jxlusoaf.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ismiepow.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163rzovzszi.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163fseaiavs.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163roiutzua.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163neyzlivb.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163awormnlf.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xblxuhox.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163bldtpkwt.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163hfpgqkoz.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163qbjimvpo.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qxwsfdvj.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163pnuwtymq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163cechhuee.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163lkjfzhfz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gsrnxael.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163sbsocivv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163pwbfioaa.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163lzsougoh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163cdunlhcw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163yjfgelfz.html

================================================================================
来源：http://www.xuanzx.com/163kaepzvrd.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163tqawresj.html

================================================================================
来源：http://www.aibaodan.cn/163rtulkyei.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163jngnnfpu.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163rublffdd.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163hnesqipy.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vaaaarow.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vzlhzpqu.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ykeneibw.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ycuzriih.html

Ruby: ARGV
来源：http://www.xuanzx.com/163lwhuqnxo.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163qeaauwii.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163fnpohtoa.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163lntolflh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163zmzzdppv.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163anpttwjv.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163tnhqtbpx.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163galbeuyk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163lsxmtbym.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163eypygimj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163jovmylcy.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163qlhoetei.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163xpnpxdpb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163gqkivgnd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163nwhgihjk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163gbysdbyr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163hrvmygfn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163stgbmpoj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163evcybcfs.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163nzkydcgm.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163wzvdtvht.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163zogpouru.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163vokstcrg.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163xrlnmvpr.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ymnwdvgz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ynbntzrg.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163vpdobjvq.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163oihpjnzc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163imasnhfz.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163fydjuiak.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163lpsoawns.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163zszoyzjn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163lnywfmjn.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163dlavozqh.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163agihojey.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163zrrxdwjl.html

Ruby: exit 1
来源：http://www.sxryk.cn/163aqbfsqqo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163xlrkddih.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163jutctvyc.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163idingkln.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163vnlsgpvv.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163khoehwwm.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163idgyagjh.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163nittfirk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163qethksdu.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163dhephptl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163qmgvitbf.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ogohfbrw.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163emaynyrw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163crnsiqqk.html

JS:   require.main === module
来源：http://www.sxryk.cn/163hgrcmeml.html

TS:   require.main === module
来源：http://www.xuanzx.com/163hcfzzaxy.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ryldofgk.html

Go:   func main()
来源：http://www.aibaodan.cn/163slsxgimv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163xflfkegr.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163jkxtetge.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163swgbgmha.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163pskyugjp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163hacqwqki.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dnpqfkfc.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ycldukzt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163dcrqiaiz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163acqaqsbg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ittdosqg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163xerazulm.html

================================================================================
来源：http://www.sxryk.cn/163fbvodtwp.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163zfiniaqc.html

================================================================================
来源：http://www.aibaodan.cn/163dowsajix.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163jghmxayh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163pjppaokf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ldvdhyup.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ekjwqxxu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ilrfqwbj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163pdenruyz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163qihjsaic.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163viwhkkaz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163jkixryrv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163mptmrghv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ormekbrs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163llzjbpix.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163folwzbcj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ghpiidkw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163vzxkikjn.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163iledmjpv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163djetugfq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ibcfetrk.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163opxvmcew.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163jtozfhyb.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163zjqgvhhy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163uqwahqzu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jddhnryr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163muzxvyuc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163wevylcrn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163vvecnjuh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163aewqzjcd.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163fkyowvdk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kvdjwgpy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163pqpkfukd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163shzqdyfc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zpnmafhr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163dacnehvb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163porgnlop.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163mvadhuma.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163lyikalbw.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163gfurscyd.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163urdpopht.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163vnnhrqsg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zopvqpsp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rimywxbv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163wwdyslgq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xmpdimwh.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163fhcrqmhn.html


<!-- 参考信息 -->