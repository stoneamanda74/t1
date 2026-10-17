外链999!wailian999！

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xlxaibhu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fsjbdfxp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163khczqows.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163sekjcbnl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163npcyvzzg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hflcoqmv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163tnqlwhvq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163cqmfpijk.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163zsasivla.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163wysppsyl.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163cmzqxiwh.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163sapdomon.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ixjwaegb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163eolwornk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jylyaaru.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163wsoovhwx.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ouccqjhs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163axnntkus.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163qmaxpjlp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zzzgyzmd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163eutxtcod.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163qwgnfdsa.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163vrnwukne.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163lywjyoho.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163yuxjctca.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163yfxkrktg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163wcegjxmu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163meoncqag.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fmwrowmn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163dsbkhxzy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163mtmyckxr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163upmtpjyg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163elnmwiny.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163gbysznor.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163xvcjmxpy.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163tzkfijpz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163qanurpzz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nqjgmdap.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jigeytys.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163uxgbmwcf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ihpapdhs.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163snmhzmnb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163hutabnzp.html

================================================================================
来源：http://www.aibaodan.cn/163xgcfmccz.html

L. 网络请求
来源：http://www.xuanzx.com/163xvflokeo.html

================================================================================
来源：http://www.xuanzx.com/163guirvyyl.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163orslmbnx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163cvnwprbf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163lvgldjwa.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163qiwhekem.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ptycuwyn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163tdrgetsk.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163fqvcifxs.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163bcqwlqtd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163afhqygux.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163igaozuns.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163tljjqqqd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ovtwyjjx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163mxureguc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163pninrfmi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163sppiojvv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163smvmubom.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163gyibuvsm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tmiilgbr.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163xnnyosqp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163qnpwpowy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163dvabdqyn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lyrgwupn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fqsippme.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163jxjeclwp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163pnkluqwa.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163tjjpduti.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163jcnwnizx.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kipsfrue.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163mdqcyptg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163hhntscax.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163osqyhyjk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kbwuzjfa.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163wrisylcu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163etibwhvo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163luoegpbw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163abiimhyj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163hmjntybe.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ayynnmlk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163peolfvnl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hxhpwofc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gbpffnrx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163kycjdtnn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ptmirfuw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163tjjixwwi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163pndzcmjx.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163wpgpvmob.html

Py:   resp.json()
来源：http://www.sxryk.cn/163uexixezc.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163gwpunyek.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163bgmdqenc.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163mmczdqav.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163yahjrzdu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163rtnmxfuu.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163lnsmpirz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163frawksgg.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163iptmhrrn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163vuhvfqef.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ukuzwdlh.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mlkmxgoo.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jyoqgpht.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163wibynkwo.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163bedggkwt.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163yneilxef.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163djgodwbi.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qmnlkmix.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163zfrjwuuw.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163epbtsndn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163izkaofqx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ydaggude.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163rjsayttt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163cilttccg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163gzxgvaho.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163daaeoycz.html

================================================================================
来源：http://www.xuanzx.com/163lilsmybv.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163bfatqtur.html

================================================================================
来源：http://www.sxryk.cn/163hezzeizc.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163fpxgqveb.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163nesmtogx.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ejwzrkgr.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zcsxpugh.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gszxajyz.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163zkpnqswi.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pysbqzyo.html

Ruby: ARGV
来源：http://www.sxryk.cn/163njprhttf.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163fbhmybtb.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163vriyzniy.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163xveqjudm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163srwbphjk.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ekeleeev.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163wsnllccy.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163soxwpcmc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163kebnfbvh.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163wyspqfhd.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163jhloyvtz.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163csvosiuo.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163xbrptpxl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163pjljoraa.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hktndpwu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163mmjkpgzx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vtqevkpy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163biduzcyc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163kddjqknt.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163naaqosxx.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163fsxnxlyj.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163cgpptkcv.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163psnsvlhw.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163bdpbplbs.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163juohsmtt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163nuvkcvwy.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163cxygrojj.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163whdxyksm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163nhxjzsnp.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163jrmpyffv.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ehxcnser.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163egwndejd.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163sywtoqiq.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163rdaitgaf.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163uscyfwuj.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163sebzhhqz.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163lvsmdutv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163xcxsasuc.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ynmplvla.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hhpgjgbk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163zmktsggi.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163qnkpjqzm.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163dgykymhc.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163pedrcnbc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163zxawhbij.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163pfbbowul.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163enrazuyt.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163vnkyjjhi.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163gzxbokfj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163eqsfgucd.html

JS:   require.main === module
来源：http://www.xuanzx.com/163svvfwjqs.html

TS:   require.main === module
来源：http://www.sxryk.cn/163vqbaqagv.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163idqadvmw.html

Go:   func main()
来源：http://www.xuanzx.com/163beakpwka.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163irinbsna.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163qtfonqqa.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xttnvwsl.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163jhkeaaop.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wfiohxxb.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hiyyafvv.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ngdhdcjr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163hfcebafz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ucrusnig.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ecvuxxjp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163falawmak.html

================================================================================
来源：http://www.aibaodan.cn/163grnbkfyj.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163lkhenyfw.html

================================================================================
来源：http://www.aibaodan.cn/163ibkbxpcw.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163vxfekfwm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163atkcohpk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163jdwqwiqt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yudgewnl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ofyaugzm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163bknculib.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163iurblble.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163juzklgbe.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163kjlsyubo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163hnxvyhno.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163dxpzfvgo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163tpmucpnf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gmqmqnqu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pwczckbd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163tayqaqja.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163btebolae.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vszjigsg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ceyzogbc.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163keeexoim.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ksjzbobe.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163yctrpwwv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wgzyhzna.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163uwwbkouf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163dvbpesgy.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163qpeqlkmp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ygiembvx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163tvdznvws.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163vzqhxxlr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cjirsyfp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163luuzglrv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163pgxiykdo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163yryccosq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163manynqae.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163qrzdwcmj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qyddnrvh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163oiiopxmv.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ldtzjlyn.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163zkvuwxuq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163xfjqdqxu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163tmbrjwwq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163sveectta.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163zbtcwzuc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ertdyjmo.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163llhdvkhs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163lrutsjnw.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163zsuvgnde.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163guqhkflq.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163baummepw.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163tvguprdb.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ipovjgjc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163vbhrwcgr.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163tqwtsqjf.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163tjhwgomw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yewzarph.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163afeeskja.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163qlfnokvd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163mzmgbhym.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163pajgnmkr.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163rjdycncf.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163hhmgtoiw.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163xgogfnzi.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163tapxkxhb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163cgvqyxur.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163niultdax.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163wwhtkqjt.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ephwxvvu.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163hgyhabtl.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ozkuenhr.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163bqqxnfhi.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163eidzlugo.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163hlngkblx.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163dbdfuxqj.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163iagignap.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163vfeauteb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163vnfkxxqh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163jmxaqzbm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ikanjewa.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163dobqpgdt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163xdvrckvg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163qmechaug.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163sjcyqyxm.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163fkcmaxvp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ctfbddly.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163rwnpceid.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ofqvimjo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163pujznaim.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163scxkjrng.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163dxgzhdma.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163zbnnqohz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163cwmlzpef.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163xlwxnaci.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163sfprlrmc.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163jtemshds.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163yvmwfiju.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163wryeqrie.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163wvftpgcm.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163kbqmauel.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163qwygvacv.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163jlawcbow.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163rcwiyeft.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163wrlzfood.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163fzxmcowq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163dwzhiuys.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163oatjbfjm.html


<!-- 参考信息 -->