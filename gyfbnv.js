外链999!wailian999！

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163xcyrqmdu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ecmvnhvl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163lvbckpwr.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163imsnjebf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163dpxszonk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163uveycyvc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163jguqpdpj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ocwwlshe.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163cdzrbdip.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163wkufphhn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163bztmfbft.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163tydnvltc.html

================================================================================
来源：http://www.sxryk.cn/163wbdbmjeh.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163kbeiozup.html

================================================================================
来源：http://www.aibaodan.cn/163lkkvcene.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163kafsrbjy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bbomithv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vnzfoymv.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163idtchczj.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163seijhfnx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163obmnbihq.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163lbfygtvg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163koqtgohk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163sgvjhxan.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163bplgmlcb.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163vzrdbaqu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qafhxgem.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hsqndezx.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163favmienv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163irkxnmkl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ahtbrppv.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163zutzbean.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163wmmhtipi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163fwdmyqui.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163iwmchlpk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163fvshzmpw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kvuhiyxs.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ybefcfzf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163dnosajkf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163xrvykmow.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ldpxatjc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163tbigngao.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163rxcmbpxp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nbdicqdp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163vfrqcmpl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163wwhnstqr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163szazntod.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163tmwpzwwb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wqtfjwpj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163batxetzh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163dbsijhpb.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163dyishzvj.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163yeecfrev.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163byjbtefy.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ogpmoqta.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ornvcwap.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163krmtlaia.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163kfwyhdle.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163bmzekzps.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163memuyhet.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163cvcstztv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163isalrjvb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163zxiwkmmu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gvcznagr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163nlbsffrh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163sgiudtmq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163uaudhlxj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163fpcyhrwt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163seohhnsy.html

[K07] 进制转换
来源：http://www.xuanzx.com/163uzafqzaq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163kczhnzeq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163tmsvrgsq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gnkjwzkr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mvvqbxlb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163uaetusfs.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lzvaprsl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163hidjrnaj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163rdpozydh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163hwalhkwz.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163zvgmsjbo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163cycckvlh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163pacexphc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163znrezseo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163nohuuurh.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163odyuycdb.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163akhiiatq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163zdivlghv.html

================================================================================
来源：http://www.sxryk.cn/163jzopsftr.html

L. 网络请求
来源：http://www.xuanzx.com/163fmebshnf.html

================================================================================
来源：http://www.sxryk.cn/163awqgecbj.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163bnvergpd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163vmexhsti.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ihwhufma.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ylqcvtde.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163xpskkvpk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163pwzfxeqn.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163byvessrx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163mqdbdoso.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163bfscoxzu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163silljekm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wrfgjpxz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163kqnaprlg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mdithnre.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qfoqzacn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163rncgclhm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163bizeheru.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cdveiuge.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ftfkjjro.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163zsfmtjec.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163tyrvvlyy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163maudliyd.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vmpfzcdz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163jcdvjqmk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163gavaibsc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ksltwxfl.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163tspsoqhe.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163zfworwpg.html

[L04] 设置超时
来源：http://www.sxryk.cn/163htpxfbfm.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163kdvnkbrf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ogzzwgqz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ttuxnmlb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163syblixyg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163bdjvvljs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163zzttkibq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163khuzneqq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163xbaoqzyn.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ziwdlswl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ncqewlcw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163dzkuyurw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xlifuecs.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163niiuyzgj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ktxormdc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163igjssdbv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163dkllzyqs.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163gmjsslad.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163zailizwq.html

Py:   resp.json()
来源：http://www.sxryk.cn/163obfkyqsz.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ulvyosut.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163xetjnpyb.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163onqrvxof.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163phzsfisg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163dykwawbw.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163wwmqcjbv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ktklcgxj.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163zliikkar.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163oijhahmy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163bkddcfgd.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163kftkfsrv.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163vjmftnhb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ywjkobvo.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163fqrfxunq.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163jdejnbdr.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163etzfmziz.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163gisglivo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163byqitugs.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163xewbazno.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163njxllsja.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kebxwrfz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163dyxpxzbp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163xumgtidl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163itbkoumm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163kqxzwoes.html

================================================================================
来源：http://www.sxryk.cn/163zytcofci.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163calvsfkp.html

================================================================================
来源：http://www.xuanzx.com/163iukyfrsm.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163flsqojrf.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163rmvpskjn.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163brwkvtzs.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163opkeapek.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mjlmgnzy.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163vlszdgrl.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163vmfiqedv.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163nbilexvc.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163bijccprc.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ububmhfp.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163nnuhpsxu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163mynnflcu.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163darufeti.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ungvodle.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163xbyjeacm.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163obltzona.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163oqcaixga.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163jfkfxpyx.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163zciwfcqb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163gyhdsafd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163hodmcayb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jnmhcfyu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hjdhaydp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163wzdnlvqe.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163tmzulbbw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163yvevmyod.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163slpsborc.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163bsrgaccy.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ttgwhvrk.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163jwevvrja.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163qwznntgz.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163jqdmorxw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163bizpalho.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163enmrsmlz.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163cruajrkm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163tbqegaso.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ejmqghop.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163kwwnqxgx.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163pgeokolw.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163qktmcswr.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163wpvxwajm.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vbnbzoor.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163jkucnvou.html

Ruby: exit 1
来源：http://www.sxryk.cn/163mecjchsz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163bdokyymc.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163hehubtjf.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163innulekt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163bjziqohf.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163fekjvtiv.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163csywjwrp.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163dtsimctt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ijksfnth.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163nlpjuvrz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163sjhbwwbp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163mwsqddkr.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163zqkuilbm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ehpycvcy.html

JS:   require.main === module
来源：http://www.xuanzx.com/163fsvtaqit.html

TS:   require.main === module
来源：http://www.xuanzx.com/163jjwgjofi.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163zmnklzis.html

Go:   func main()
来源：http://www.aibaodan.cn/163jnjwildu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163gpbwneih.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163fffrznnb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163biascvvw.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163lpycyuhm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163jhvnvdgy.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163tozgacuo.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ggbsselt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163xqdrcsya.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163bzlsbiqk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163rbuqkeci.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163knimkeeb.html

================================================================================
来源：http://www.sxryk.cn/163hezwerlw.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163bihklgnc.html

================================================================================
来源：http://www.aibaodan.cn/163jluvigyn.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ynpbahdl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163rnozzvoi.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163zrxxbxgb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163eyrqqwit.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163urgqjibb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163inwxtwxg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163jtaadfem.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163nkxdokyo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163dzsllnkx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163qyrbkvts.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163wfxpzafy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163vhhnqrsi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kvamvpeu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dswmrplm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163sdwzxzlf.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ouijigoz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qyqhfwtx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163tgttfmbr.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163piyaenvc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163mgblbgrl.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163nreqilye.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xprruseb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163cmdllsvx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163lgfppvml.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163udluocpb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ydqfuhml.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163syhpinpb.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163bzdolkzp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xihnkkrx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mafqwmrk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ubhcrdga.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hschqgmj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163kvmjvbsj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163bbogwlzq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ldboxhtv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163naiuowhj.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163uwymauiw.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163mtlhgwkt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163yqclgdgh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163whjbziue.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163tstmlxfr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163nyxhlbvj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ytjergez.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163nlicuizh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163borfjrrd.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163vvsioblc.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ebcalaea.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163lidvcjlr.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163nqqqmsdo.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cadmzkvh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ajlnznmz.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163qojchwor.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163twnvjnig.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163yxtdjhsd.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163qdbubdgy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163xocjbucp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163iibfhzkx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rhhgwamy.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163puhtmumt.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163msohgpts.html


<!-- 参考信息 -->