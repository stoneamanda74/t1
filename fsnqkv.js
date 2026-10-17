外链999!wailian999！

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163aicnqnub.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163xsrugqyj.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ouaeumss.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163kxhnovtx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163wtvyqknb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tnjyywsh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163poqyrdwk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ewhibreu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163tdilxnrq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163phjnfbol.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163jfttzcqb.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163qldztrma.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163qmkgryix.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163kgqblons.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163dwzombuw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163bceqrflp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163wfupywdv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163evhmntqr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163kizqwatw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ebsqzsqa.html

================================================================================
来源：http://www.sxryk.cn/163mzgilvva.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163hcgkuhxg.html

================================================================================
来源：http://www.sxryk.cn/163qiqdpxhk.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163yqqtumei.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ohccsksz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ykrsudgm.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163axtwhvmx.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lbbeovvz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163bqhcoifo.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163tpadbsot.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163hlixmakc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163bzvyyped.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ztneqifu.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163pihxjrox.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163gyxexhrp.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163setvwtmn.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163loliewle.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163gwucjskx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jrmituql.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ojldcjas.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163dhanoqvt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163kerrbxqj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ucqsjtrv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163exioyblm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163dvzwxgum.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163chbjmtkg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163sxinfdkz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163utsayjzr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163gqcltith.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163vmonncix.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163tgvdjlbe.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ahrzxmpt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163gwzbdbva.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vquteick.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xpgdrrrn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163efuyerhi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163cwoazclk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163bjclghej.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163pykjskcu.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163sjwhqkeb.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ousdmcis.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163kbsktvma.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163wsgwoqnv.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xawzoahv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163iqdzfpsa.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163cxxcuiwy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163zawfanji.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163rldhkkdh.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ykpnzbkh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163gwwswrol.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163iulpsuhi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ojhpauvm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wjxqmrja.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ikfdevfd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163bttgioke.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163tpcqlebu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ttvllckx.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163fisdzgmx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163bxowucqv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163gplbonml.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163oshrfwdi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dbflznpy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163rvotxkyx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163mbrszsop.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163eivxuapu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163nqdgijdh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163odrevkuf.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163dyfyrobt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163rvqkqlcq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qozzjars.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163lepjntrh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163gprkrbdc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163dwvdwcru.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163bmygllen.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163rqxtgtxf.html

================================================================================
来源：http://www.xuanzx.com/163vhrhqudi.html

L. 网络请求
来源：http://www.xuanzx.com/163vfcbnchp.html

================================================================================
来源：http://www.aibaodan.cn/163poyzgfix.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163txncavhx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163cighjgge.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163hqeclapm.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163flruuvfq.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ajvchmtb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163zznzmqcw.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163tgjokkib.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163arsmmgex.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163delaozfr.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163zeimskiw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ezojvzrq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163zqzjnrbw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jgnkhkpg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tmrhtlte.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163wowahuai.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163vuylgztg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163pcdugwvo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163mofqohwx.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ukspmssb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163uowqpngd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163nbjkeuxf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vwlppnge.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ylekflqx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163yjcikoyq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163dgnurrer.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163rgtntzst.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163njanqzst.html

[L04] 设置超时
来源：http://www.xuanzx.com/163sdbzkrtf.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rbcsodgs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163pwexnzmp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vkztnbbs.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163raycskul.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163wkrhkzdw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163tjfeyfmn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ruowvgzs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163lemsmsit.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163gtgljise.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163nkhihfjf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163sovzolpw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163stjppwrt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hvpoqido.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163fkjudsxx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163fcgokmqt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163pvrpwdaw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163vfeizjdy.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163bvnsfagu.html

Py:   resp.json()
来源：http://www.xuanzx.com/163jiwowllr.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ucrcniyh.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163zyeqeycx.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163mdsmpsya.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163riqbgkjv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163bukqvnna.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163meecznns.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163gzbniyps.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163mkkwcxkp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ksprryeb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163kugqtwvb.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cepafism.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rvgdtdmr.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163jkpjgpbp.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163tqpnmzvp.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163bwhcxxle.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163fuvjxrjh.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163zurxnswf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163gzbqaxts.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163digpkred.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163obamkrpx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jqrtydsl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163nitbpacb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ixuyqkfi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163xnhbnlnp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163bhcxmlht.html

================================================================================
来源：http://www.xuanzx.com/163axguyyce.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163xxvtwlry.html

================================================================================
来源：http://www.aibaodan.cn/163tumnqflv.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163lnizhhqs.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163agqqvcmm.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163uxvxteuw.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xrenvvij.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163mexphtwa.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163hbhwjuyn.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163nzrrigdk.html

Ruby: ARGV
来源：http://www.sxryk.cn/163lwivjkgy.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163imbdnogw.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163wpkeqicz.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163bjbabkxp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163jvjxltic.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163zrumtxyh.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163iikjlxdu.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ereuexsq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163htxxtymh.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163lkbzzedf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163azzllosx.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zlzaagxv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163lmxvlmcs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163growrdkf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zsrkadyl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wnngrfkk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163gyzbmmdv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qusfppen.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163hhcjmpnv.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163cmpwqfip.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163qjrjkkfw.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ryilxfcw.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163nfrsekbc.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163qwpyzwpd.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163gndoqhai.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163zbhhyqqr.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163xjawjplr.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163cfmmbttp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163pjbzktva.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163criyrqsw.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ghpyuqfu.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163cskgdgsl.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163eoppzdaw.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ucntuojw.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ibemtatn.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163tzgjbupm.html

Ruby: exit 1
来源：http://www.sxryk.cn/163mwlwkspv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163cahxniwx.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ufhgnukd.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163rgppauag.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163rycbzhzq.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163logleeet.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ubhkocvn.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163zgovxdtv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163jnpcqwun.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163qobonrpk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163smquxain.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163bfwfkdbg.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163yxvkxigu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ykcufjye.html

JS:   require.main === module
来源：http://www.sxryk.cn/163dglvgweh.html

TS:   require.main === module
来源：http://www.xuanzx.com/163lnjxorfv.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163qykipvan.html

Go:   func main()
来源：http://www.sxryk.cn/163okhxlifw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163xdlrufqf.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163efynndks.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163lxuwhkwa.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163vyfndolb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163sisftjke.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wmmlhbhj.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zenjjtei.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163sejoqxnq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163wemroeqi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163nqkoiulz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163gcflsipj.html

================================================================================
来源：http://www.sxryk.cn/163sescudpt.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163cyyywnkn.html

================================================================================
来源：http://www.aibaodan.cn/163syyzmizj.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163lznlmqrq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163adkeepam.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163jtoxiyxr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vhtbogyc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163nftzsnuj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163qtqycnkq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163kgflocxi.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wkutlrzf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163txroibhv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163viamrzdb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xonjdomz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163bssivnwz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163domzurms.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rfgvhgnp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163uuzqvlri.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163mumzrtcl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jcowjkrl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163kcxalvgr.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163tkunjrfx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163huxxaypm.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163wvphpzjd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163cqkkjqfz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gcotvexe.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163drtklmqc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163wjvocesf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163qqogmzoy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163qoskfpco.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163bjhmsjso.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163badbrkdk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163sphhpign.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163utrhyhdc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163jgxuwiev.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163kvclvlns.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163foqyvehh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ibzhqvnv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163dhefjhno.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163cvxfxrkw.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163dcnevaay.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163osmjgcny.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163uzsnwicu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rniodjkc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163dfkbhemm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163jwtphgzf.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163viaqsbqe.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163liqbrcip.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163etvuqjxk.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163dmtxfvud.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ahljeuka.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pbhruicb.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bxeebgte.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163tjffxjly.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163teiidhar.html


<!-- 参考信息 -->