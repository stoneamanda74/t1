外链999!wailian999！

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163zxhgrenr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163iklmwumd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163hnmtygun.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163xbbebvse.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163iekleowv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ghxxwguc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163czzxmxxv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163pscwiylp.html

================================================================================
来源：http://www.aibaodan.cn/163fbemcbak.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163bfklqzua.html

================================================================================
来源：http://www.aibaodan.cn/163kxzrqtik.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163bpabrike.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163shkjzzkw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163enzfvkzo.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ryrgphkj.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gndcuagk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zgvxhzle.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163tqqjkojn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163mdvcwvjj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163gijqwbca.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163qjbrqvjt.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163mntvkcnx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163npibuxav.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vbiwgght.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gmbvsjux.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ofdfcdxr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163oeocvsoy.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163iqmgfpnv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ahruonhm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163wtchaozu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163yiozgqem.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vbcfhxhh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vvpdzqmc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xzmafjnq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163acnklyjh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163wowtrkry.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163imtzdcmi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163tfjzdzvu.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163mizxtrlz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163sgxqniem.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163wdlnzlba.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163irdzfrnc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163umqglmqc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163bagumyhg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163mixtkeii.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163vhxktogj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jseihpbm.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163dpsjjpli.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163worgmnyy.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163wkxswbib.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163aiwwrvgd.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xukuvjtk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ljibciir.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163xhshjjny.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163goboefle.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163odalhypt.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163mtfvkxsm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163zgjhodmm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163wtumxnjc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163oqtfvany.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jctzduqy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163gbidfuym.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163uxykynao.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163rrjrkzlc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163eavdodtx.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ttjcbnxm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163xwudcdhy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163czbkwofl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163gcdwinhe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hsglbtpx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nuwobcyr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163drmxrlzn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163pkvgbidq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163cupdkzai.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163gfgadrqf.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ynaxryot.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163cffoivij.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163htvqxvaw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163eunceyfh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163eyswwdiv.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163lqmzkckq.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163cltasqvt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hcyltdml.html

================================================================================
来源：http://www.xuanzx.com/163nszfjrhz.html

L. 网络请求
来源：http://www.aibaodan.cn/163ihjazgng.html

================================================================================
来源：http://www.sxryk.cn/163rmbanvxj.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163gvifbkxk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163fwaznnzy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163fnjqukyc.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163unnkcrng.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163hxsjwsrg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163pvelxfbt.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163zsjcbubt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163jwjryedg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163jhfqfews.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163hxsqzcab.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163rqtwbles.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163otgadzwq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dwzbikba.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163sjjdmycm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163enocfuyd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163cmygwfxg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ymcjqtju.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ttdjgrzb.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163phbfwhih.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163vhkcvhte.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ythjqstw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163phbkpwdt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lylvhoiq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163zumrkjap.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163tbwdhwsy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163opayvfmq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163lqecnpeq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163qbjvucsp.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163tdbugvhq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ditkudye.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bqrcgkxi.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wvbtnoiq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zxaindff.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163myjyfsqf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163djifwvji.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163fhevdocz.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163kufabzym.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163fxmtfqdn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163knfghefl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163idbzzuvt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kwfhpabo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163husuwwen.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163yeuoqyfx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163utdkhakg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163peitfxxd.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163oduzfslo.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163jjjprage.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163zcpnmqgv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163wknofthv.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163reuilybu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163gmmiujps.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163millpzzc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163smgvrrvc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ohpbeafa.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163hphcyyfx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163scglwwtb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163wskcecxk.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163dtmqryyh.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rjhgznhc.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163desjylgw.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163iyzmfczx.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163hyiyvcjv.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xlqykkxt.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163buaqmdde.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163lrehywae.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163rwfjjtui.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163recmancd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kypucfkx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xpyfuqgd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163zvgnltrt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163aeydhrfr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163dbgkoqod.html

================================================================================
来源：http://www.sxryk.cn/163alcodsjl.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163dcvfoufx.html

================================================================================
来源：http://www.sxryk.cn/163iclxlsud.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163twtgklrb.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163dotddpoz.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163glakhetx.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163krmquppl.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163dtsljxao.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ecrdnjjr.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ivkovamz.html

Ruby: ARGV
来源：http://www.sxryk.cn/163dewpaefu.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163gffjmzjs.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163gefdzbxa.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rpuvezem.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ljdvfabf.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163rqllompt.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163hxevlwuv.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163sgqgkfzf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163pkfdvhne.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163xadgogry.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163xdikocwx.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163pispnzlu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163dazniadc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ocieqasl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ngaxqzrz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163wvzsmjjr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163jplfkaih.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163emciiwgg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163lsbyvvjm.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163gtlfaxsg.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163jcbaysca.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ccgzajow.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163tyoimpji.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163iivbslcs.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163mezrjkws.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163gjkfzkzw.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163xqimtofy.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163xcfmbrna.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163slnotdjc.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163fhoqjpuc.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163fkmuwxuf.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163hlmroltz.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163evhnhiqu.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163rgrfvirb.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163piutqueh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163jqflhaqs.html

Ruby: exit 1
来源：http://www.xuanzx.com/163iqpkhect.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163gxwxkmtg.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163mzwoguvx.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163akwqiklc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163oqhyvpse.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163jjcoihib.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163vfyjctgi.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163lubegneb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163klramigq.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163nrytdzqg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163thaobhby.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163nwhdqpqh.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163auxvqlpi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163plgohtwx.html

JS:   require.main === module
来源：http://www.sxryk.cn/163jvdrtbzf.html

TS:   require.main === module
来源：http://www.sxryk.cn/163bmxxgwwl.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163hzbvsxso.html

Go:   func main()
来源：http://www.sxryk.cn/163xylcswpk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163zotxicfw.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163cofxvazz.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163kcjhgzzg.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163djfeabqb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163dbukaios.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163npoqlkku.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zugrnkdj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163jxfkarlq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163kyfogkxy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ujbblrrt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163chrmcqiy.html

================================================================================
来源：http://www.xuanzx.com/163sobvxqfg.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163eczhhoep.html

================================================================================
来源：http://www.xuanzx.com/163zigmpwrk.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163zflbbfcs.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163kglbowfb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163kvihlmfd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xgcuepip.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ohazjrnt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ffiwsfuw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163evggqhby.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163irkwffxz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163hyttbtak.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163jcxxjnir.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163sjoopzqp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ewunescc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zmskioer.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qihknxzx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163zlcyzwwt.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ddexugrz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163eyhnpccn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163gygfkazw.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163hzbeiyxd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ojovfsqv.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163fbrzgylv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ttdyoisc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tiapitov.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163fyownqnr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163plvzmsxg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163htjvgaqp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163wwmarqan.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163opasjscc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vvlgcord.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163frbjxrtm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163vrbshpwd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163jguqvvvi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163buweubax.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163jztfmmna.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vszaotfn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163cqxoqrqs.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163purylldr.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163lcdwqrym.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163hsknsyna.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163otwiotqt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dsfuyudt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163zengoffq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163vcfztxyn.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163engeglfg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163xujuwkpe.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ugrdhdah.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163duaiurkz.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163qidnhjjr.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lymhstli.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rhrwuvdm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163wbnyvdho.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163rswcqnbv.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163pdgsmssj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qwtomtwc.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163gyywidsx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163eqvpjvpg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163vgfvqlzu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ersubnku.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163jtyqsrrz.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163bfhoqavl.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163fqwlille.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163txpzjuui.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163lgekkmzc.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163mkhkcaun.html


<!-- 参考信息 -->