外链999!wailian999！

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163dqxxnszb.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163jajfxhrd.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kshwtaic.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zultmwnd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163otgpdbgl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163kgdcznli.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163hkosojag.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163dcdbhjht.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163jpxcdcjz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ppiawvdn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163lnjekxmx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163agawqbmv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163muixgixw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163isbnzhei.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163gmzudvdr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163yvlzkvqu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163oinmxfwb.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163sozumblo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ovrqglyl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163kpstuumd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ismfmesx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163oytojzsj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ohfzfccr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163dhscqatd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163iijygmae.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163xxbustme.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163xozdvmsk.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163xylqruws.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163kfblcnlp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mgxtoqlt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xaoohzpg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163xxkssfne.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163cdlnwvvo.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163qosiwjom.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ikixcnfg.html

================================================================================
来源：http://www.sxryk.cn/163dktggrli.html

L. 网络请求
来源：http://www.sxryk.cn/163gqkblypu.html

================================================================================
来源：http://www.aibaodan.cn/163nngffutf.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163otrtorsh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163wllmfxhq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163lsgumsmo.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163hanxkzvl.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163fczurkgf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lsoyxurg.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ikdlxmou.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163xlextzjo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163pgrlrlth.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163mcxiruvw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163vcvcqeqv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163dzxyaqtw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163yuwysmmf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163tdfpxtww.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163piyzbsms.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ejaccefa.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163fzcwhfyu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163yrambngo.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163rbpxtxhg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163pfahgcwq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163vrhvteje.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dituyuro.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xhvejsll.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163kpmggrgt.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163fvdzwwil.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163uhbpoict.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163nchufdxv.html

[L04] 设置超时
来源：http://www.sxryk.cn/163swwncbet.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163psyglfrf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163wjhvghsw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163tjugpqow.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jaxzejkv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163llofyqmf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163awrdmnwb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163xwjybvsu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163vwcqmtzs.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163kkrhwkzl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163eivltuul.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163wobzbluq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163blxxawlz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163iromlyiw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163qjcalkxt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163tjfucjuw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xrymsyuw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ruplfiju.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163xiwqtfsl.html

Py:   resp.json()
来源：http://www.xuanzx.com/163aocllhlf.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163uczysfhk.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163upkrwzsy.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163npajemou.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163bbumqfwa.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163dmvkixdf.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163lyogegxq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163yokqvlyf.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163gmbxcpcn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163tprabaoi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163zzamvuoq.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gwvoejji.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gjvnwimx.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163otowtcwk.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163omgvvszv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163aedudkdv.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163sfgorcgu.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163jpsitmvs.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163gxykdffv.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163jhgkafgn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163aaelewor.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kcrqehha.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ghjsmnlg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163uwgfrmms.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163dmjeorqf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163resenbbn.html

================================================================================
来源：http://www.xuanzx.com/163qmywcoeb.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163nxkauduh.html

================================================================================
来源：http://www.xuanzx.com/163jevsjnzf.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163euklvigp.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ldnhrqoa.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163pdmhljwe.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163pzcvrtrh.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ahjxwqxc.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163mdaebgld.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163mdevotgl.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163plvsxjfh.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163nbyqwftn.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163azupjkrz.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163iderxdql.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163fforessm.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163atpaqjgb.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163iimijmyd.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163gyvodich.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163bcgcvavs.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163kpsjprub.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163gaxodqvr.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163tpqbyojq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ifvkxcmv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163rhmdbnjf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tanhjbhc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fsrhvfvj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163qqpasfym.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ecthlrnn.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163qvuusxck.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163gzvjvpcm.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163iwxopumf.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163jiiwupil.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163deljmngk.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163qrfhator.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163dkaakcml.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163axejdpst.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163mlvzfbof.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163kpazanhl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163lluffabf.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163xtfvdswx.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163zcworjpa.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163hqamzvcl.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163veflfaem.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ngxoczgl.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163nzdyfnnx.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163aisnylmu.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163lpbiqnsm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163zbreknfm.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163yvbvvnqg.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163hakkzdlp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163aljyqife.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ragrtqvy.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163orhibbli.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163noejjuhe.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163gfzqzaip.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163nogdgssl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163rjjnzwhk.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ejegzsdd.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163temmuclq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163xopzkyru.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163tjnlwxlu.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163tbvpswze.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163xxvnixxe.html

Go:   func main()
来源：http://www.aibaodan.cn/163bpukztlp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163gjmsamva.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ezgwvfch.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ssgwvjah.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163yyqiakew.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163zlolpyka.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bjsrxamv.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rijkzsgu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ysmosxpl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163duybudsv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163djgpfzna.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163jhrruwql.html

================================================================================
来源：http://www.sxryk.cn/163bpcnmruw.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163xcsndmmx.html

================================================================================
来源：http://www.xuanzx.com/163zecduith.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163rvkgugmq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ttoorjxm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163kqcuvbnq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163posehekj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hbhtnebf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163jghjlxco.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ebrksfcs.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163rniwxqpr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163xclieolk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163rkmtdyhz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gnfwuzvj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163wycanewl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ldwcvhfm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xxjkoshl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163coraejen.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163iutdnjsy.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163brydhxag.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163fswnqljs.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163bcfuxaxe.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163mnvdogax.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163hpokxdol.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163naxgeyje.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163vcodxrwb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ghobddiz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ijdtixyw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163rhrqvhrd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163bmwzwxws.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163gvxjazrg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163oshtvayu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163zdzqomuu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163sdvibdhl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163unblrwon.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163rsmzygyi.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163arfcoazu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163loiomtro.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163jnpnijpl.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163olrzrcen.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163yqxqoiru.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163gtitfzoo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hpxzonlc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163opsbjqzd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163urnljnwf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163aqrckuyv.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163rcwiqizh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163asremzkr.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163bdudyjzb.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163tyelytwc.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163aekrurbl.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qsayuuri.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163pakslnfz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163pqamiqiz.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163lvfrqzif.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ltfybmpy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ekbrfgoy.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163elafssyu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163eistjads.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163kiwwvggf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163oiwwlztj.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163knlvcbgy.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163jjryfdai.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163anwsghxf.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163kdojdqfo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163bpsxhvsd.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ioakhmqm.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163zvrahxfj.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163uwunxsif.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jeagjuxr.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rlswtzlo.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163rujyxwei.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163gzmkdcbz.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163osggkqjn.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ccbjjxml.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163cqnsaipp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163oebvcpdd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163dbnzgasr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163dcdkjlbv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163rallxggj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163waafrnrv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163rycilvit.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163tdbzbedx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163wetopdsy.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163gbiszata.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163qdfpvlky.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163hmdvakut.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163dtkrqwee.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163dnelfsvr.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163owchnkcz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163etrmebxl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163sgxgrlri.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163xmrbkcut.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163uncfunuy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163srovjxgs.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163eikzfmbj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nbqtlhlv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ufposxmg.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163rrorzqor.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163hekkhexz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163rppygraf.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163welmzhum.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163pixzdlpc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163jddkuowk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163tedzivuz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lkazszad.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163thchuhcn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163sohztzxc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ilzwyddx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163bzdrafqd.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vnlyqarm.html

================================================================================
来源：http://www.aibaodan.cn/163xiyxmvzm.html

O. 并发与异步
来源：http://www.xuanzx.com/163ezxepbvv.html

================================================================================
来源：http://www.sxryk.cn/163iejbwhoo.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163yunquqau.html


<!-- 参考信息 -->