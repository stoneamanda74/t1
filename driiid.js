外链999!wailian999！

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163krmgrfvd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163zldxowbq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163slcjqutp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hrxhxuwp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vjwvgksu.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mcqtcpiu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163tclddjom.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163cnuschyf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163dpllclsw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163czjuekri.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ougqalzf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163fqlzqjah.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163qlqzficm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163rorhuovx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ijvwwged.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163deqhthxy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163hjzqaiiw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rmpcjyrs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lkvdndyg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163qfwrhhmq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163xdbizchm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163dhzgpiut.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163uescjgnx.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163xgffnjlj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163jzlflhkr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163hojrwcoe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163trhfdzsp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163cjivzngc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163fwvzczvr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163gtnhbucf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163sqydxrtj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163whefzfgg.html

================================================================================
来源：http://www.xuanzx.com/163icxzreiu.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163xwiwhsuo.html

================================================================================
来源：http://www.xuanzx.com/163bqeylvfy.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ynzgdelp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163vvfszzfu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pizvqhav.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qyuisgke.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vocgvfro.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163xvtahxpi.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ftgpgyhr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163iqcvmjxb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163iynnxueh.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163xizmonsb.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ffgpoyxb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163oaseidpt.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rzapzocl.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zoneppjg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163qhyvugij.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ufydrlnh.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ofrdpgei.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163aprnibfo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163cwxcepgh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ofeedebp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163uapdwfyn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wfahdjpt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163gjlhaqnw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163cdzbkzzi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163nmbeampb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163mlychwkq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163xopbxudr.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163bknofxya.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ubnjcuts.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ezpeepea.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163uwmbknvp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163mrhldsah.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ubfgblqx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jwlmklrd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163phbtzmms.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163rzibgjlr.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163foqspbwu.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163plvsvtip.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163yaosbgbd.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163octkgjuz.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163llcfzsaj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163vwqmvamd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163teinqcar.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163njkheiyh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163qrxxyklq.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wleiupqb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163jkcifrsr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163opbtluoq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nuvaetgt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163fgcjsozn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163khztmjln.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163sifdmmfw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ciggsvjr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163mulepxzn.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163audgnokc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163cwrdvdam.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163uthrgyob.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163iscuhbch.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163urerlqhr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163riznlkbz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163pspezygn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163qkcxlatf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163cwnthxbx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ggpkwvbu.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163cygkewuj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ymgkgzkr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zobeclvc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dzqagnda.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163jveitfho.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163dmiivwpv.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163xbaakvbk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163vubkwadu.html

================================================================================
来源：http://www.xuanzx.com/163xyjkjpbo.html

L. 网络请求
来源：http://www.sxryk.cn/163nlrmsxrk.html

================================================================================
来源：http://www.sxryk.cn/163jwisdpzk.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163atehjnrk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163clmgycfs.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163igopsaov.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163jlynhvvm.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163yapousbf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163fbdodrld.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163dnzokefa.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163tvnmbfgk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163pizdxeeq.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163nssuclep.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163sjmnsomk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163qzabgkty.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163udqrztth.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163iinetgnm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ghocqnmn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163xxbmgdub.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163nqhlhdtn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163qcfsygrm.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163yacurqgu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163sqnfusln.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ionhnwlz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zwhwvmyy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xkhrmdfd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163fnvzgxty.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ligwigdo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163xgmsqjbr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163htfypyqt.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163gxupgnaz.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163pacfcvxn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163xhuypofz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vombctct.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163aznivseg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163oxqnrtqq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163cadexbic.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163aoyoqkme.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163zkcvdhfb.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163jxuvwuun.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163gkejfxzn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163qelhjjnm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ncvteifx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lwscrfmr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163oithcxof.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163dytvwfqe.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163vrmdivta.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163bawgnyyr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163abgdtkec.html

Py:   resp.json()
来源：http://www.sxryk.cn/163bvgomcym.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163jsandxfd.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163tgvidjiw.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163pfcwfuok.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163phimeqys.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163plzovabm.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163eghrelif.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163pasosgxi.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163qsvvihjh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163gyfauxzu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163gkxvnvee.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163bcynysez.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bsmpbfvm.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163aagkumle.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163timuemvo.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zqydlhus.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163tpscfrer.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163pslkpjxw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163owwuhdzx.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163jhoftkte.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hoyiqgdi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lfblomud.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163kurowhxs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ufiddikh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163bansqrcc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163mveiejbo.html

================================================================================
来源：http://www.aibaodan.cn/163afauvelb.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163hbeqvgsx.html

================================================================================
来源：http://www.aibaodan.cn/163xfnbndwl.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163hzfmgpxu.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163glqzfngd.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xrnphtvw.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xxhibvul.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qpyyihxn.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163wotzpztl.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ihesjnro.html

Ruby: ARGV
来源：http://www.xuanzx.com/163qgkliykz.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163msbqamld.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163cmfmdlxi.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163bngrnpmd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163rvzpfbgc.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163fkisznns.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ucssokjz.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163tbibxfzm.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163cawgecid.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163wxzlzvgc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163czgieolk.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163dehhidps.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163rpfztbxw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163eoabqbex.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jtzbgrlg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jqvlwzmb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163czlrasns.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163dukrrpup.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163nugrzeso.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163apyqdpxi.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ypfpnmku.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163vzhsfmyh.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ecjgasso.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163xtdqbvcm.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163jrpfgyve.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163jidydemf.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163rbxsqwns.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ytnokefh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163vrlnehny.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163oddgofnf.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163xellgozh.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163uxipgals.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163aixsekxo.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163utdfzxdy.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163jiynbsgl.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163mfnbpybn.html

Ruby: exit 1
来源：http://www.sxryk.cn/163tfrealfq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163gbjvgqdi.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163gjwrtenf.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163cyzxcaek.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163llxucryx.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163flapzilx.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ezgkfvvf.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163smzzjorg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163euxyqdil.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163xungbjir.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163tduaijlq.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hpnletjq.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ubszdwod.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163cwsrollp.html

JS:   require.main === module
来源：http://www.xuanzx.com/163fdsgmpex.html

TS:   require.main === module
来源：http://www.xuanzx.com/163eglbvclz.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163wnsfdoss.html

Go:   func main()
来源：http://www.aibaodan.cn/163xppkjflk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163kkxnjrcu.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163vwmkdpeq.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163osagfqnb.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163fxiacbnh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163jitwanrm.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163grmfwxbe.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ouocxskn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163wwvltegq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163cnqannnf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163jvkpseww.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163zbhxhmuw.html

================================================================================
来源：http://www.xuanzx.com/163kqmkdxxe.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163pyxcxekx.html

================================================================================
来源：http://www.aibaodan.cn/163dnchaczj.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163hdlumjnb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163czjauyvr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ntfoavzb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163aavvfqqt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163lxkihmnc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163qeedresq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163uakxfwsu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163bgorfkgs.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163jsyscdeb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163gkqkdhge.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vmfkvbju.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163tcqrbyzk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kjouubfx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lgrhjeaj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163zoaacucy.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163vzdlilfj.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rgwpvzdh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163yapeiipu.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163hrpgmejb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163wtukpiif.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163oqdngssf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163cznfbzlx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ybtqkkjx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163vchwknud.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163usrnvirf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163vfjfvddd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163hxkdpdsg.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ssdgzucg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163xocuedsi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163hpkrdywa.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163deivxohn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163sabjkfdk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163pmjnoiuc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163feccuvte.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163syfemlex.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163dqiooggi.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163kzfrecxt.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ihlunizj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163qpyaagcc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vkbwfqoa.html


<!-- 参考信息 -->