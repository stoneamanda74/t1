外链999!wailian999！

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ubegaixg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163yqktwewb.html

[J09] 时区处理
来源：http://www.xuanzx.com/163pkueewnt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163lhernzuq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163sgqbckwb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163znuvegsv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163aeciadof.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163oulrcjtw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163iagorijf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163jffyhzkt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163elzdeccd.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163xltuxpve.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163gbpbdicz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163mlqqpwlp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163rsedifcn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163eofyrydh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163vnhwqdwt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163wtxtqbdr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163dmnlezeb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163yohptmrr.html

================================================================================
来源：http://www.sxryk.cn/163fxyrtfvz.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163vghnwobi.html

================================================================================
来源：http://www.aibaodan.cn/163ahkjlwir.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ntqeagpu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163vzbflrgq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rlwsnpxt.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ecvsltsy.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qgoqkcoh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163stagfyog.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163onkvgthw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163babenqhw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163npuacnxz.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mfypwbxm.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163vtxnibfl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163culddpcv.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ofrsvrzu.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163eumgpxyy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163pwiugxlz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jdlkddxd.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lumnnfdt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163xxkevgla.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163hlznpwel.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hrkgdyzr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kvbjoiys.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ayvsarmm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rexbensi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163uoodaaag.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ophawyvw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163kvrjkdea.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163inududfg.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163hxibulcc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nwyczfme.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ixvzvujs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163oqnisudw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163yjqmywqu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163fvlyluxg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163achkdvcy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163jebytefd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163wfxugkww.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163anzkoqcb.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163vrqdoxkk.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163znzhcmfg.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hepskcwu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ggaraeuy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163wvsodxct.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163typcauyz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163eupaqngf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163thdfppos.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ojxoamxr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163fudidyct.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163lqequvkx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ikrwtsij.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wjtehjls.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163wgwxdtoi.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163utwgzoss.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163wjzudnwm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163najhwdoo.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163fgfuynfg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vepndgha.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163rsdkcsvb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zipybrwn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163dusswyzd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kmqosgno.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163gpsadzqz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163veidjilw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163urbtabzu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163yvnutjze.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163uyntgwtb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163kdktovhi.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163fabqnenk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163omwtrrvl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163zlklbcpm.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zgtzabsk.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163kecqxntr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163myytkfvw.html

================================================================================
来源：http://www.aibaodan.cn/163tarceaoy.html

L. 网络请求
来源：http://www.aibaodan.cn/163lhszdjtx.html

================================================================================
来源：http://www.xuanzx.com/163wsakyxjn.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163vnbfqtcb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163fzmcsovb.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163gsobprpt.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163wgvxfqpd.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163boxtavci.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163zneewosp.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163rgsahquf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163dpevwgrk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163aarttrhk.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163xhutthuf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163tpysmsef.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163coepghwu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163oxcltrjn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jtzazkxt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163nqmuadpz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163lpwfwlqx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163lzseljze.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163asemlixv.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163bnvcvmuw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163iufrtnhd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163spfyncoh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rchdtblv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ttlqyawm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163puqmipjl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163rtufkfei.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163vgnciyuy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ecpsipwt.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163swrfxams.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163bsicwdnz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163mzhzwcfp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dgxlrgqf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yqmqxugi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rybyoawe.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163kurrphiv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163vtexhysw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163atmhqxgs.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163bclyfptk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163mlcscpkc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163apuzcctc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163cfatxgzq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163flohreum.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ibohrouh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163jkuohjgo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163qcyixowm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163cwucbarl.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163caywhmrn.html

Py:   resp.json()
来源：http://www.sxryk.cn/163uysnqrji.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ydlzaxck.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163bbgkfbfp.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163bzxfeemx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163sotcxabc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163vgvnaxaa.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ikxpxnub.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163uyqoylnx.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163hxegidmi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163hnlcxfjy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163wyyjkcxe.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ksjznzro.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jqtxzocf.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ndnxisiu.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163gwtlalmj.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163mgtcsqma.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163zedpbxrz.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163tchvbwdw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ftogfroi.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163nzwzbpov.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163eyrvrrus.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rtybhrpc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163egaiaywd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163rhfcbrld.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163kohgfxtm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ejkgkeug.html

================================================================================
来源：http://www.aibaodan.cn/163dkqxccyt.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163wiqbpcts.html

================================================================================
来源：http://www.xuanzx.com/163vddqjlgt.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163oytsybke.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163qzkkhjeo.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ricdiilk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lkgttoqh.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163opvygujv.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163tmzhcvvk.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ggjdobqg.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163xwafolut.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163fluzqjqy.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163xyligggc.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163whewzyig.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163jevnvqho.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163wipqelqy.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qblsbqqi.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163yfprktxs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ijngmmjg.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163mreqogqv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ftylxvvp.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163eskvocnw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163hjwlykdq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163vmonhxgv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lrfkjwyc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dczntkgs.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163nginbgdk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ysmbpzfx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163lvbshqgk.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163cdrjtrji.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163yoveuqua.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163jwcconru.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163kviqfygp.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163fksjnidy.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ruzprpop.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163zyglsgux.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ihtpswkb.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163qusektqr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163jcoekzum.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163fujsitzf.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163vksjizwy.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163psuquhis.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163imdogeiv.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163xnhtceqv.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163jgkcbeex.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163spmozksz.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163rkqybulu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163frxhdcvd.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163pumdzvam.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163twtmsyqt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163irvdfscs.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163fklwctpg.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163josemlha.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163gvyrdbgt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163wainssxu.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ysynxlzv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ihfuevxy.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163citjfqtu.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163hrmigjip.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163rrrdpxmm.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163mjslosfj.html

TS:   require.main === module
来源：http://www.sxryk.cn/163jtvuitsk.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163tkaplrzr.html

Go:   func main()
来源：http://www.sxryk.cn/163etmmuwfc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163abhlffcf.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ovdzhqyf.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163llsbotrf.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163nujyryqv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163bpoulsal.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tvhdolck.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163kbjxoiml.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ffmekdak.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163kouuhuio.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163wvxyhsln.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163xyzyhsym.html

================================================================================
来源：http://www.sxryk.cn/163ffiaagbk.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ieipscbe.html

================================================================================
来源：http://www.aibaodan.cn/163alyjtpel.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163zfioexkh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163wthgndrb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163tdrjymzh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mlcmszsb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jnfjuxzr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163lnrdmnnb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163uujnpjjj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163yyfytemr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163myvblugf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163oujdcdnl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163zimyadsl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163nulrltcv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ugwbfebt.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qtwldruu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163nhhtprqe.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163pcukrjkw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ndidvslc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163bsorltsr.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163umvdhuls.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ypgmcotu.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163hbhczrww.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ilfyhtys.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163llewrazu.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163jfggntbh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163llyxgecf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163sbzwpdpf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163pysvewjg.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163dajmzqgs.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ndidoyiw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163qiljfggd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ghyfdoai.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hzaqwepm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163clnvxsvc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163jstfmkyg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hsnwcgmp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163soxqkgkd.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163nzidilxx.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163qqavtmyy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163qdevnroa.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163nsinxveh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vbbidzvi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163jkevbedu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163zteoqmlk.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163vztwikbl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163whpjptfr.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163fpwzxgts.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163vangybxw.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163jtlwltlg.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gnascrim.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cybwspky.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163hcjwsipt.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163bkdpfcpu.html


<!-- 参考信息 -->