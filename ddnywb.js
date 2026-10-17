外链999!wailian999！

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163cuudrxgv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163mtiesgei.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ozeivxyd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163jjrwcrge.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163fdmzhofw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xkztuiig.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ughdcjmb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163poergzqv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163orjwtdvf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163lrlcqjjf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163kmhbbbob.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163rgbuiebh.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163uxhueusr.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163rllxxpju.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rutkgvay.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ctkqrjws.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163adgfpnbc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163tcrrofhy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163hjlwsidu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163sjomjchg.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zksvfbla.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ejqxpwvm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163untyzpvw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dxvlfnyq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nbsbnrqo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163nsfcmnud.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ylkavgfd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163uucsbbca.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qljqrwht.html

[K07] 进制转换
来源：http://www.sxryk.cn/163qdiowomp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163mswhhftl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163bstubtqt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mrkcrleb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xsmorepf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jectiirr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163jcmpeqrs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163eukieuos.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163fzwnckiv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163fwduijvw.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163whdhfnlx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163xgfxdrmy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mvcmvtjn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ubasixon.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163quaxgldw.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163grveitts.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163rcpieewz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ffxneeky.html

================================================================================
来源：http://www.xuanzx.com/163gmpkbcjp.html

L. 网络请求
来源：http://www.xuanzx.com/163ytgksuip.html

================================================================================
来源：http://www.aibaodan.cn/163cznlfywz.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163fkhamflr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163uuoegesn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163whmysucy.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163tvkwfsob.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163jcotytcb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ioehoobx.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163cllbxxjz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163dsvwiaxm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163yvkiyonr.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163qmjtsvai.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163mvkzivgq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163xdeonxsz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163kwiqddko.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163uctupjta.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163rvlgvafn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ftsfrmtx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163jatriorv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163idjzlswq.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163vudkcfew.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ukiynuim.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163wbjxjxyw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qjedscxn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fzceljzi.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163veedvuvq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163znjwhgzz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163lprfhghk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163inwnzdrq.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vbzyaxfc.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163oetfwoqf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163cspuqtxi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lrgxioiy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163zexoaomh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163tluwnbos.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163uyavwsnj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163cdwyrqkj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163sfgyclmf.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163trrseizh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163iglqltrf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163gbxeycaa.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163iowdiawj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hhjygyyq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163kikwxowj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163klrwwruz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ncoxpyss.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163gefqzxav.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163nwvhcctm.html

Py:   resp.json()
来源：http://www.xuanzx.com/163jiztgbkx.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163uhblfese.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163nrryzypa.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ccmqokew.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163cqwdbdqk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163uummqwxx.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163chnkkwvs.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163xsvtpscj.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163wpwnuupd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ieetkkeb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163tnfqdprl.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163spzcqtoj.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ouaxvhcd.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ldrghclf.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163tjlmyace.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163hbyqgzro.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ascxdssj.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163afexznzg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163qncymhvu.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163qxiaclvz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jyqnhsou.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mhmweccj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ivgfsvwe.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163dmvkdwdp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ytjvnnbb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xjgcekpc.html

================================================================================
来源：http://www.aibaodan.cn/163fnrtittu.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163nvzassvd.html

================================================================================
来源：http://www.sxryk.cn/163sicinhaz.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163tmtwtslz.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163tgneeovu.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163zntknfds.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163suemisnx.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zfpmlsre.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163mosmuowu.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ocxjydsd.html

Ruby: ARGV
来源：http://www.sxryk.cn/163wjzpdiix.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ifkdmvwn.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163xokdfqnp.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163uwyhqrps.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ickcjptc.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163lspuxgaa.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163igmglpwr.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163noeasluu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163xylopnfy.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163gbhvbhqj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163quroyitc.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163efcavlrk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163navpdyuo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163vyoblpyc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kjfhbdoy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zvqtsceo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163zmohwzyl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163lqytjvxp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163fimlvytp.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163dmqcnqgq.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163zjfbnwgo.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163zznpmdeh.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163srrxxfko.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163kwiftvvh.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163vozccemf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163dmkmaawv.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163wtfvzqgz.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163camnkjcb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163zqfhuldy.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ifbevtkk.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163loducsoh.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163wlwzgavk.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163wxnsuhoz.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163faacjsdr.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163kzhbermc.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163qkphqftd.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163tvdllyhq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163bhrrqmzb.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163twivenhh.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163tswvjvev.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163nghpjqte.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163syytawsf.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163jjlattwz.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ptvvxbrc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163eglvxyan.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163fpahlolb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163kbxtslnm.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163laiywfig.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ncoevqwi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163psjvfydf.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163yaqrnzsd.html

TS:   require.main === module
来源：http://www.xuanzx.com/163dcqrtpcx.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163teurrrzo.html

Go:   func main()
来源：http://www.xuanzx.com/163duumblxr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163kikruwua.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163iiqjhyhe.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163gehpjxop.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163irwybkji.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163vcumqirj.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zvnbsfyg.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bzvcwgkz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163dynxrvvf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163jschsuld.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163yfcqrwqp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163jaizqjig.html

================================================================================
来源：http://www.sxryk.cn/163mbozpsbx.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ooraxbex.html

================================================================================
来源：http://www.xuanzx.com/163nufmnbzh.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163kvvddkjc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163muiycaln.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163wedveave.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qmvwxzrd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163bfnyrvyu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163xciydcug.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ipbahjoi.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163nykztabx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163mojpevmm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163uxsgzrtk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163iquxebhy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163hitwcjed.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hxbbzdtj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fygktcot.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163vfymwgih.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163gdrnfulp.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163glfmosdn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163wxtllutd.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163hhfqglji.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163fluidlcg.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163vklaonca.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pxynkkkn.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163shhdeawh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163mdpwwvhc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163mdlzbimx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163gsjxpdcl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163uimhuawr.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163eroolgwm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hplcraeu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mdnisrwg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163suvbalyw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vkhntsqy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163xfojsqma.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163wwojzjpi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163sdxpchbr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ptpixmyx.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163qjcfcqwt.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163fetdjsgt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163tuuepguk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163oulxllmo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163luascwbf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163wpbskleh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163nkeayqko.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ctfwmxyy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163waveslmt.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163znarktmg.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163rrbyibzn.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163icnmvysk.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163iaoryqqg.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163yfuzagvt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163jpdlztxe.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163fkvvrroc.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163hgvigilr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163mkorvmwb.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163hfjtzitd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163hsewlwca.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163qkmxsooi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163qezgqijb.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163kbqrflua.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163hfwrgvxv.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163jojesbii.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163tmnjvjkn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163vmbqxfqg.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163tqnarkfh.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163jncbrbtf.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163oeqfxges.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wtxypxfb.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163bodexpsq.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163bnftcgzv.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163gxnrzmbc.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163rwjsxice.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163edkxrlbg.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163vjooqjyz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163qnuxohwf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163eyamzfpw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163rriqngdk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163spvinehp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163tnsertko.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163gollmxwt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163dujuifjf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163xfwrwpge.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163pvnlusdr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163wybenvrg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163kfsfqklg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163yttsseql.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163wmpbwdkq.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163urygdtbc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163rqzdrftm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163crinxozg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163qqapdcwn.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163siltdihs.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163lvxgjeph.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163rfnlxqbm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163cicfcmuc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bbqcchbq.html

Java: // 手写递归
来源：http://www.xuanzx.com/163hpqkzlng.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ynwfgxvg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ridzrbdy.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163hrtqglmd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163cfagexrr.html


<!-- 参考信息 -->