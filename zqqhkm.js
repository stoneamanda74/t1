外链999!wailian999！

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ryeczrle.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163uumcrxuz.html

[J09] 时区处理
来源：http://www.xuanzx.com/163exaujmkj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163zkvyklnp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163xtlfqwof.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mobgnrbm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wznfafhf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163rqisugll.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163pkzfhglg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163vozjogpj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163uctibonh.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163oavidyze.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163rfprnwdy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163etmsgpph.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163gzevtjwv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163mpkyejxa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163prrmxddb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163rcrahbtc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163gikpuilr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163fihblpjy.html

================================================================================
来源：http://www.xuanzx.com/163ggxusgon.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163emxnrwob.html

================================================================================
来源：http://www.aibaodan.cn/163fqhrcpvc.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163myyytdec.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qdjqnkzw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163iapxyunr.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ipblxvfz.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mprlnvty.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163wmokbyvj.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163uamisnha.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163micdfgcr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163hqcukiwq.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163tthvedmb.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163wpkgspct.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163oxbeefwc.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163veosquym.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zotoqsgt.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163buyjskcm.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tsfkxtbw.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163vjivjhxh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163xpoibeax.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163mircxxtt.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163xsqxheao.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163sfjwdfvi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cphinigl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mexacqnj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163tuedxfgb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163fasjxwqg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163uoevgcax.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163evmxgnbs.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163koqbxizt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163kgfhjyjx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163xrtsygra.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zfniajdf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ewpaihny.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163vjhiywio.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cborhbfg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xcukbrqp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ucjeucqk.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163mgjpezcv.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163hwvjdknh.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163mijpbavi.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163prjtpbft.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163oeggdwkp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163tzmewsgh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163lvdfzqpa.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163wiapxfbi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163xtfuhyqd.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163quppodwd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163xwovqlri.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163fkyzcxkg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163fbwxgzyt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lrljulse.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163mvtemxnt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163fchytjbm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163wfezhdom.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163dqtrssfn.html

[K07] 进制转换
来源：http://www.sxryk.cn/163jcsuwhgt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163zetuhtgh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163evznyuze.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163yqjngcnr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pxqtgmbu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kblzctmo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163vrzkwcpv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163lfyfrbuy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163vxdsbihn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163twxcbrpm.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163iqlrsaxf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163yqadtmza.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mttzrxwq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lmujygeu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163irfhremr.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163cpsedrmk.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wfdywiof.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163acnhwatc.html

================================================================================
来源：http://www.sxryk.cn/163mzvitfsq.html

L. 网络请求
来源：http://www.xuanzx.com/163dntfchtn.html

================================================================================
来源：http://www.aibaodan.cn/163gocmteix.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163slfjewfi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163mccbdapi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163eftfbndw.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163djqzqiro.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163qgcogjre.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163qlyseopo.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163boiqqkau.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163gfebgedv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163obqotxvt.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ssgbeykt.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163zgvigpoz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vmnecaww.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163aqpkjgnx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jqoaqhbk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163lpycuxgz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163gtgiokkm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163hopyzdfy.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163dvhgxpnv.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163pbcpqmnh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163rfogipxb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mpvuukni.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ilivhpdn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jojqzwsb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163hrzajdwt.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ijaahxyk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163fugrptjt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163osshraiq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163esswvypw.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163dpngrvef.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163vynpjmxh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bfwfljmb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163fdebtloq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163llzpeldf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163lpxyrbhs.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163aoqgpuhq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ryvqouwc.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163hflpscob.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163zdzondsw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163wcjtjdzb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163culsvgea.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163uucdnedj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163argpwcje.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163flieikdb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163lnqpgssb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163owngsqka.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hpofcrdh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163yyfurjki.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163luqgmjdq.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163drfridkh.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163mqgzxdyt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ppgvnbrn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163rbomazel.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163cdashywo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163rmuxiqrx.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163raszbjll.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ghlcglcx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dtxfnalk.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ykviepss.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xgiylpwd.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ekmsttnr.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163lrmmeanu.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163gxbmymci.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163cowssdoe.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163vcbigrnu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163aitjrrtn.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163fzptnsux.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163inkbloko.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ygrgeryu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163vbufyujv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163bojraimo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163dhpgrtnv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163laroolzt.html

================================================================================
来源：http://www.aibaodan.cn/163kxzxkjct.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163lvmyttma.html

================================================================================
来源：http://www.aibaodan.cn/163czthkdxr.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163nmzqiuyp.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163guparmcg.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163kcghwkpb.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ryqbjzpb.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zvbrhqkc.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163pbtunygz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163qsekqjck.html

Ruby: ARGV
来源：http://www.xuanzx.com/163xnbddbtv.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163aunxklqj.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163bfpisqik.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163mhytfadi.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163jeuduzxh.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163snnwldun.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163rrqttbko.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163lzmqhahy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163xzhrlauu.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163rbgqpbzu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163vujpojmx.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163yabagbly.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163yqjqdkvs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ifxxoosk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rqfgxbat.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ssinkjml.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ylszorjy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163atvbffus.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ukdrslux.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163odpevepu.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163jovixspm.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163dxkwovqj.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163cdjjrqrm.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163izemhccp.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163snmhorjr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163eamzoxcz.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163lvcekxph.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163vzglouqn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163qmqqbbdw.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163heejguqt.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163eprujuor.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163qhofosch.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163gcwmwdxr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163vnujqobl.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163mqobintb.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163dczqmgfz.html

Ruby: exit 1
来源：http://www.xuanzx.com/163qmwwkrdw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163qfdxgvhu.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163rqzisuoh.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qtlxgvff.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163dwltvlgk.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163xbcjazkp.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ojlesfxl.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163uynsbuyk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163uyzywwfl.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163zdcossga.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163betdxivu.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163atcjklnr.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ukkmribb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163jimdqpid.html

JS:   require.main === module
来源：http://www.xuanzx.com/163lzzwlsjg.html

TS:   require.main === module
来源：http://www.xuanzx.com/163flxlsfez.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163sduitzwm.html

Go:   func main()
来源：http://www.xuanzx.com/163saagdwtp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163twloyueo.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163skgwjwik.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163lvdrqtht.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163oepcfuuy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163zatqsmia.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163mxunosbv.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ytdpxuim.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163msfteqjg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163vnqkphjf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163dzpoimik.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163uhpxogfi.html

================================================================================
来源：http://www.aibaodan.cn/163piefaxfe.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163xjmhzkws.html

================================================================================
来源：http://www.aibaodan.cn/163mwvkwreo.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ncopjzxk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163lsmgbjqe.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163fyjfkxre.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vdfdlztd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163khnhnydj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163fcwwebfm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ylpvosxa.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163dsodoovm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163zmeodlwg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163nexqnanr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hgcawjvr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ubotuyjj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gcaxqvis.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163auvjascw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163lqzxndcd.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ovxfeqvh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163spcyonbj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163lymfcvyr.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163qqhjaioi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163wjzpdaxg.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163tbfuoarw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ejifyjri.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ylaetvmz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163vepygwhi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163tcnuetai.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163yrovsulb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163feqdrlxt.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163nsveykbk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dteockad.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163vsqqmthh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qzuxpwxu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163qczgfiwr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163imvkhzxg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163lcjgbwfc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qrrnbvrj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163wvoneqiq.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163sdszloiz.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163galvazzp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163apgjrgpm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163towunzyh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lbumbqlb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163zazsgorq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163nobttroq.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163juhekgcn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163dllsekyn.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qthaqpok.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163valiwsln.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163nmbuqccu.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ujnunehp.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hqoxjdni.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163bpeweuni.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163uytlabag.html


<!-- 参考信息 -->