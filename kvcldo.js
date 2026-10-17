外链999!wailian999！

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163fvorogak.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163mlqomiwx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163dfpvotuo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163kbuemqyz.html

================================================================================
来源：http://www.xuanzx.com/163fescjzbu.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163yngbfkem.html

================================================================================
来源：http://www.aibaodan.cn/163kslxenuj.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163dlezveal.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163woxepyqx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dkegqofo.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163oaegwtri.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yekdzets.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163shmdfzvz.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163nylvbext.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163jvqkwstu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163juccilxg.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163sxomhdpl.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163mjquyhtj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163eyrtddtv.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163dewjepmb.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163glhyyjdz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163awkiavnh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ziqjezat.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163cteepihr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163iyxpcatf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163zxlwkatv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gtymisdn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cqqjzddz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wlsuhojp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ixmvxoth.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163bqkkcwud.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163rolsowme.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163lerqqrdt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163wbvafsev.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163atwyzsop.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163fpbckbbu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ufketvco.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vjxtnvrd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jotchpug.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163uhszqmeu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bbzeywen.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ylfiawdz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163naclqatv.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163fuuelcyy.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163wpscrqff.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163kvivxstb.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hpafoofd.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jnlcxujb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163piuwylhz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163rsurijdf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163vjgxqgwa.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163jvwqritm.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163xyezysim.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163xuuaujpi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ouxydzso.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vmzrcvoe.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wuajjzne.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163mmhjgotv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163rqjpikpd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163vbwjkado.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163dypjkvaw.html

[K07] 进制转换
来源：http://www.xuanzx.com/163hfcwoker.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163spbpwlzl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163hiwhqzlm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163idtdhmow.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mjaqujqx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xcltkyjh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163zybtjexx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163tnntqgeu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163cmcytxwg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163kjjwvuxu.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163okjlrdkb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163lcmkiyvy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163orfyekld.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ppuzpksq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163tqzodisk.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163usaysvnr.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163sdtfpimj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163jcfwzzyr.html

================================================================================
来源：http://www.sxryk.cn/163bwswpkgn.html

L. 网络请求
来源：http://www.sxryk.cn/163kriwesmc.html

================================================================================
来源：http://www.xuanzx.com/163iwiswwpb.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163rinwqfjj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163riwpulan.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163vvcxyugc.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jwbbqknm.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163mtqzoiuo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163pwvezgrn.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163nuhcpcbu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163tpeeuumo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ubnhphps.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163tnnkvjrw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163sdobpyvo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163blnzrnzo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xlqoresf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dgargtaf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163shkqyeqe.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ltpqraia.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163lpiriiik.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ychcueuz.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ecesjtyx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163sfsysbhv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jbtahrsh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ecrcumih.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rptfzmok.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163xdnzqebt.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163jchxkjwu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163kktnedct.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163izhuvsbd.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163rvgxxrkt.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163gxcgqtmr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163sxgrfmzm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163srjhahwg.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dvmayaps.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163aegqcqpa.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jkrpobym.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163csdyfzsi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163qvrkttso.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163fynjlxrm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163qzyhhotq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ygcqptzb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163lzvguluu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163yzyamkkl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163hefqeuof.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163kgtybwuc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163jkieotta.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163wxcbwsqd.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163wtvawllh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163pwrctput.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163kfazzjfb.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ohdbsbdv.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163pjdgutmd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163hdfghlvw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163rsoctlvn.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163hyebgcjn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ytrukwaa.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163hzvljwaw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163hiqnjoel.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163yzcjpqfv.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163rpxxrlji.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bcdfgqco.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163hwsjgcdi.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163bscaacjn.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ghxlngtp.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163mnmfecls.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163aeelkwco.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163redykzzd.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163napqzqgt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163acgrvpzi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163skekvnms.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163xuwauhkl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163iiobqhgd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163isdapypu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163yfplofhk.html

================================================================================
来源：http://www.xuanzx.com/163wiuqymit.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163tiraatdw.html

================================================================================
来源：http://www.xuanzx.com/163pfegwmar.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163fbwmaiyq.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ewsxyvue.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163qukflcot.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163abvbdwaw.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lumevylv.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163smgdvncj.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163wnldrnsh.html

Ruby: ARGV
来源：http://www.sxryk.cn/163dsrtisjr.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163qpizkalq.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163yjplcpis.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163lindisms.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163eawjigll.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163qnfaysch.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163xaayjdbw.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163khugmwda.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163mxabxsys.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163wkgtrvhz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163fruxzzax.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163fensakrb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163aonngrrc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163skmyncmk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ovcdqsrz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ysdlvewv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163qrrovmsi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163jbdntwvx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163dzzamwbx.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163qhfjsjjp.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163esxbgnob.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163yqqcwibr.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163pxysltle.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163jxiplidq.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163hgpqprwo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ekgryfdh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163jwjqafsw.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ctpqmmqy.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163azkxxvob.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163rkergzee.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163xlfvoksh.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163zejyoycy.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fuhmlpwn.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163xmbxlflt.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ykiqjoju.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qyqrzyts.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163giuwhfnw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163fbjlgikw.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163yrnelfos.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163iajrbzng.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163aaspdhpl.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163oahzqnvr.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163jyrqrfwi.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163mspvlbla.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163xvhrkasu.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163upnazpoo.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163acemptht.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163sljkxmws.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163gxqjseyr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163hglffuxd.html

JS:   require.main === module
来源：http://www.xuanzx.com/163saajxzdk.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163deaxzbsk.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163dlgmbvhl.html

Go:   func main()
来源：http://www.xuanzx.com/163pdputtui.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163bhdrwzrm.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163rhnzuvmi.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163clrbswzm.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ymckafkm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163oskfutzl.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163stsfrssg.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wunrmmlk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ctsmwvzj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163qydyekkm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163alntjnzb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ytzajemk.html

================================================================================
来源：http://www.aibaodan.cn/163efrhdmgd.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163jjltzdla.html

================================================================================
来源：http://www.xuanzx.com/163zjspajue.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ocqcclrh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ckowbqtq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163vgjfcbyh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ioiiiotq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xobefdtx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ozwwsxxl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163bwyekccy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163oawriglx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163fxreywud.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163emjstwsh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kfdygrki.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163tzbfrwcs.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sgxkltne.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bqotnboo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163pnaxzuif.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ljosogpl.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qqpzebqn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163rkgccxik.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ffojoqmw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163nswkaprw.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163micvwbbv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jlekzmon.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qrdqjupb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163sexkbjiz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163xsalortb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163bqtpirzi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163amdtyhlx.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163bmlrygjh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ymbcchzi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163igdmcweg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hykoxcvq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zkifkoru.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163uksyowka.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163sxzenpyq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ssekisyy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163zehzkpjb.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163qnvybama.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163nzoawvsz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163yoqqxzbr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rbfwkfzw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zxvcmink.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163nzilvtqo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163jhwpnqty.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163fzsvgzax.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163rmxmfhef.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163pfpkcoua.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163lkrrjxvs.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163aqadcgbm.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wdeclavl.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163afxodcpk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163jtltdavr.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163wrkbnivp.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163kfubebwc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kofzlwvs.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163myuviuaf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163btiurwlf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163iuanwpov.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163qavlmwwd.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163iepqdkst.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163uttuyjwf.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ibmpofmg.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163tqmvanmh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163mkvtfjmi.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163zemgtfls.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163byywmkyi.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163xlksyrbv.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qxckknoz.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bfycifga.html


<!-- 参考信息 -->