外链999!wailian999！

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163vvkhpqjz.html

[K07] 进制转换
来源：http://www.xuanzx.com/163kmamhalm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163pkbsiymx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163cwddyyyx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163eqqclrlf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gusunvxe.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ifcgkxna.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163hpkhlgme.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163vhvmlcmi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163xhheokud.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163vmnrwdwl.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163uzxzxxcc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163uxgoozls.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mvzweqzn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qbwlozcl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163nuuvmaws.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163zkhsbwkf.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163kiwbzcnd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163qzwldfmw.html

================================================================================
来源：http://www.sxryk.cn/163zeosinsz.html

L. 网络请求
来源：http://www.xuanzx.com/163edvbiygu.html

================================================================================
来源：http://www.sxryk.cn/163yrlvqoqm.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163sspvwjwg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163frpopwbs.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163mapktwjb.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163qngoseef.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163zyqgnbav.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163kocwdqnp.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163seqxvtio.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163paimklty.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163yjgfpfph.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ejvpldru.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163gyxmrplq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163grqaumtw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163iasgycdq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jrdmyooq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163zlbhjfya.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163gunwqagy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163dtqoftzj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163phpjsupm.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mglbjxhn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163kupublgw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163lomtznky.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xcjremte.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163wtsxjimw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163mdudtmxj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163nmsjtyic.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163wqwiqnhm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163kpssnxpx.html

[L04] 设置超时
来源：http://www.sxryk.cn/163mygowqkd.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163sirnghof.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163plqcopgj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hajjraaf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fgsinbfq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163plccdeys.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163bcslmnas.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hvecclzb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163pvmzfovc.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163pdssrrut.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163pgjlqgzr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ecjcngjd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163sarwfbbx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163okdkdgjb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163pqfftvcj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163yaiglwbv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163clxpjkfz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163wcypburn.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163jwsurvrv.html

Py:   resp.json()
来源：http://www.xuanzx.com/163dfgnablx.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163utvrgaho.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163dqddknam.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163nfyoldms.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163orpldljl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163zavltzni.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163kkrsxcru.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163kpakijmw.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163xqeksmaj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163yykmzkcx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dtajahca.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ipoxlxwi.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163snhkhurs.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163yxlpdwbb.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163hdmilodd.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163iobvkzlp.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163jzmumhkq.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163wdulmxsb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ahcyssdl.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163yjywaial.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yigmudyy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163auqjajmi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163younnxft.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163tsrztdpr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163rixbrjhg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163pnthrbmv.html

================================================================================
来源：http://www.aibaodan.cn/163jyeetozj.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163jpronunz.html

================================================================================
来源：http://www.sxryk.cn/163jrtylekk.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163zuhvxzfu.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163yreqcspd.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163biltswys.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163arrkrfud.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qmufarga.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ayprjirl.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163quwqwdco.html

Ruby: ARGV
来源：http://www.xuanzx.com/163xqubupoq.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ztkcqdrz.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ilofqirr.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163rvpgtppm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163tzqlwrap.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163bqugjupy.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163donlacbb.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163mscaqbze.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ylgpjqhk.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163elqopefa.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163rzbnsvsz.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163gmsholrx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163znmhivlm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163aovbnpzo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ymvudtcq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163muujcqsg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163oltcimfu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163oiwniigh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163pridimbj.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163dfloqoyy.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163nojjpgbg.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163mgicstam.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163kkyncnos.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163umfpvgmh.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163tgfzpsjs.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163jvfqdtxo.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163uxsvypfw.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163qrafkrqm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163oscivrgh.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163kiqvceix.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163sulmxbli.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163dzrboirp.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163mpfeckih.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163dfwtctvx.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163rhioddlb.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163opcilkyc.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163uafmstpj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163pizhnlhx.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163skplhkmr.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163orcsijmx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163toblrtwe.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163wrtwqoxv.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163lkwrhgry.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163kjublnub.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163euucdfaa.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163dpdqcdri.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163tmwdtago.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163rnbxzgja.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163dglahzrc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163qvccshzn.html

JS:   require.main === module
来源：http://www.sxryk.cn/163blgslxee.html

TS:   require.main === module
来源：http://www.xuanzx.com/163jtxevwox.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163tfroztkg.html

Go:   func main()
来源：http://www.aibaodan.cn/163hfofztiq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163wtkwctxy.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ndmjnypy.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163itsjhxpz.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ckljpaxl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163vkhmmopy.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163nirocfnm.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163gtrlblah.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163sogpobzt.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163wmcllegt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163slzhvcui.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163scldadip.html

================================================================================
来源：http://www.aibaodan.cn/163pzopgxyr.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163sresztez.html

================================================================================
来源：http://www.xuanzx.com/163ejfmamnt.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163dtxbovtn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163tgbujwcd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hrebhblt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zxzthezt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163eqqkdrjd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163fxmdrgtg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163nglqdkzz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ickvymiw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163hfbjgaab.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163lqqncirf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163zvfowtnm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163kzmcmhkk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dankqiaq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qdizxtbf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ybvpvwkd.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163altapbav.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163keypbkku.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163opnwwfta.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163wymasbnk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163sfdwdaeu.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163qcgedacs.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tnsdvpen.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163dkanasoq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163uulzoszc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163jjnssemc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163wogbvkff.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163xbxmztny.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163fyrofqmy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163oujoxzoz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163mzkdsace.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vfoetztj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cdhuvyzt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163sqmnlohu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163jsxezric.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163latgaueq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163gfzqqtny.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163zcqcpvuk.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163lcwvnqbg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163sigymatp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163zgaikpdv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ndvbtxbq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163hydgukcw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163igapvpod.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163afsyzvwe.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163vdydmsxx.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ywenogsr.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163aaulggya.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163sxripdov.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uomoccli.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163eywavvww.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163amtlgoed.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163hkaaoadg.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163yklqmppl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163yusgsvfh.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163hpoeysnz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163xqykehhk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163bfzefcev.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ncybuwcj.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163chuwrdoq.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163vzqooyij.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163qbvvqbmg.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163kuxhegjk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163dfsceglz.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163rifjwlcb.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163mhrchlfh.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163shzbbkzg.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qwiivnzv.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rfnmruph.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163csrvguph.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163nnlmrbpn.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163jeaosrbh.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ehakzblp.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163nifavtue.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ukllnicz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163plxeqlqc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xkevfddy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163cvbkoxqp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163cjdmyail.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163rynateae.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163vdewkpap.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163aajhgkfk.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163mxrhxtdo.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163uirighuf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163vaeuvima.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ylxfxioo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163pfeipiuj.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163bjbwdqju.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163laeikxjz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163kybvaxzn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ybivalda.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163erfqptfo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163kbjsiqfh.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163khlkoxvh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163moajtmae.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bjhfqamj.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163tfkvkohi.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163qufkwoym.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163sjztbste.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163jqwfquzl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163bazgldvt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163nzehiqpt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163jiyddzgb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163osuftpzu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163cozsuqax.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ghyendfj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ixlinwfs.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163yorpnhar.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163idqedkih.html

================================================================================
来源：http://www.aibaodan.cn/163jaoxqbhm.html

O. 并发与异步
来源：http://www.aibaodan.cn/163uvkvovhw.html

================================================================================
来源：http://www.xuanzx.com/163zocfubiq.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163bamssqvo.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163vmifeuue.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163pbryvqyg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163wihokolh.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ervmwpbw.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ocgnxeyt.html

Go:   go f()
来源：http://www.aibaodan.cn/163slrqhvlr.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163thyfiqfg.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163qhohtadw.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163tzgzzfdr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163liyssstt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163fzgrwzxv.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163jqbjcnnq.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ydbcavpa.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163swflfsnq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ejzvdepr.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163zkmbkmes.html


<!-- 参考信息 -->